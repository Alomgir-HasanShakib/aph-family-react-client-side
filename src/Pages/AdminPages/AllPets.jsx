import DataTable from "react-data-table-component";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";
import usePets from "../../hooks/usePets";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllPets = () => {
  // axios hook here
  const axiosSecure = useAxiosSecure();
  // pets hook here
  const [pets, refetch] = usePets();
  // column are here

  //   update pet status here
  const updateAdoptionStatus = async (id) => {
    console.log(id);
    const status = {
      adopted: true,
    };

    const updateRes = await axiosSecure.put(`/pets/${id}`, status);
    if (updateRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "pet Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  //     delete pets here
  const handleDeletePets = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteRes = await axiosSecure.delete(`/pets/${id}`);
        if (deleteRes.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Photo",
      selector: (row) => (
        <img className="w-28 h-28" src={row.image} alt="Pet Image" />
      ),
      sortable: true,
    },
    {
      name: "User",
      selector: (row) => row.user,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>
        row.adopted === true ? (
          <span className="text-green-500">Adopted</span>
        ) : (
          <span className="text-blue-700">Not Adopted</span>
        ),
      sortable: true,
    },
    {
      name: "Cetegory",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex  flex-col  gap-2">
          <Link
            to={`/dashboard/updatePet/${row._id}`}
            className="btn bg-blue-900 px-3 text-white rounded-lg py-3"
          >
            Update
          </Link>
          <button
            onClick={() => handleDeletePets(row._id)}
            className="btn bg-red-600 px-3 text-white rounded-lg py-3"
          >
            Delete
          </button>
          <button
            onClick={() => updateAdoptionStatus(row._id)}
            className="btn bg-blue-900 px-3 text-white rounded-lg py-3"
          >
            Adopt
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <DynamicTitle title="DashBoard | Admin | All Pets"></DynamicTitle>
      <div className="bg-blue-900 mb-24 p-5 max-w-[90%] hidden md:block">
        <h2 className=" font-bold text-white md:text-3xl text-center">
          Total Pets :{pets.length}
        </h2>
      </div>

      <div className="overflow-x-scroll max-w-[90%]">
        <DataTable
          columns={columns}
          data={pets}
          pagination
          paginationPerPage={10}
          paginationIconFirstPage
          paginationIconLastPage
          responsive
        />
      </div>
    </>
  );
};

export default AllPets;

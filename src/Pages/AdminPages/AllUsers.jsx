import Swal from "sweetalert2";
import { FaTrash, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User deleted.",
              icon: "success",
            });
            refetch();
          }
        });
        //
      }
    });
  };

  const handleMakeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${res.data?.name} Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <DynamicTitle title="DashBoard | Admin | All Users"></DynamicTitle>
      <div>
        <div className="overflow-x-scroll p-5 rounded-lg bg-white mx-5 font-inter container ">
          <h2 className="text-3xl font-bold font-cinzel text-black m-5">
            Total User: {users.length}
          </h2>
          <table className="table w-full text-center  text-xs md:text-base">
            {/* head */}
            <thead className="font-semibold bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <h2>{user.name}</h2>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn text-xl bg-[#D1A054] p-3 w-12 rounded-lg text-white"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost text-xl text-red-600"
                    >
                      <FaTrash></FaTrash>{" "}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

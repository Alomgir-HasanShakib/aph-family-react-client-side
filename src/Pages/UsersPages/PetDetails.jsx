import { Label, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";
import banner from "../../assets/rabbit4.jpg";
import DynamicTitle from "../../Components/HelmetForTitle/DynamicTitle";
import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/authcontext/Authentication";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PetDetails = () => {
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const pet = useLoaderData();
  const { name, category, _id, image, age } = pet;
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = async (data) => {
    const number = data.number;
    const address = data.address;
    const petName = name;
    const petId = _id;
    const petImage = image;
    const adoptInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      phoneNumber: number,
      address: address,
      petName: petName,
      petID: petId,
      petImage: petImage,
    };
    const adoptRes = await axiosSecure.post("/adoptRequest", adoptInfo);
    if (adoptRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pet Adoption Request Sent",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <DynamicTitle title="Pet Details "></DynamicTitle>
      <div className="">
        <img className="max-h-[700px] w-full" src={banner} alt="" />
      </div>
      <div>
        <div className="flex px-3 max-w-3xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto mt-16 h-[300px]">
          <div
            className="w-2/4 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Name: {name}
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Category: {category}
            </p>

            <div className="flex mt-2 item-center"></div>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                Age: {age}
              </h1>
            </div>
            <Button
              onClick={() => setOpenModal(true)}
              className="px-2 w-full mt-10 py-3  font-bold text-white uppercase transition-colors duration-300 transform bg-blue-900 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600 text-xl"
            >
              Adopt
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>{name}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                      Pet Name {name}
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                          <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="username"
                          >
                            Username
                          </label>
                          <input
                            id="username"
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="emailAddress"
                          >
                            Email Address
                          </label>
                          <input
                            id="emailAddress"
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="address"
                          >
                            Address
                          </label>
                          <input
                            id="address"
                            type="text"
                            {...register("address", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                          {errors.address?.type === "required" && (
                            <span className="label-text text-red-500">
                              Enter address!
                            </span>
                          )}
                        </div>

                        <div>
                          <label
                            className="text-gray-700 dark:text-gray-200"
                            htmlFor="number"
                          >
                            Phone Number
                          </label>
                          <input
                            id="number"
                            type="number"
                            {...register("number", { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          />
                          {errors.number?.type === "required" && (
                            <span className="label-text text-red-500">
                              Enter Phone number!
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                          Submit
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;

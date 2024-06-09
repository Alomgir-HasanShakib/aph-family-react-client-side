import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../../Components/HelmetForTitle/DynamicTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Context/authcontext/Authentication";
import { useContext, useState } from "react";
import usePets from "../../../hooks/usePets";
import Swal from "sweetalert2";

const AdoptRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: adoptRequest = [], refetch } = useQuery({
    queryKey: ["adoptRequ"],
    queryFn: async () => {
      const adopRes = await axiosSecure.get("/adoptRequest");
      return adopRes.data;
    },
  });

  const handleReject = async (id) => {
    const adoptStatus = {
      status: "rejected",
    };
    const res = await axiosSecure.patch(`/adoptRequest/${id}`, adoptStatus);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Request Rejected",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  const handleAdopt = async (petId, id) => {
    const status = {
      adopted: true,
    };

    const updateRes = await axiosSecure.put(`/pets/${petId}`, status);
    if (updateRes.data.modifiedCount > 0) {
      const adoptStatus = {
        status: "adopted",
      };
      const res = await axiosSecure.patch(`/adoptRequest/${id}`, adoptStatus);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Request Accepted",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    }
  };

  const myAddedData = adoptRequest?.filter((d) => d.host === user?.email);

  return (
    <div>
      <DynamicTitle title="DashBoard | Adopt Request"></DynamicTitle>
      <div>
        <section className="container px-4 mx-auto">
          <h2 className="text-2xl font-medium text-gray-800 dark:text-white">
            Adoption Request For Your Pet
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            You can Accept Or Reject Them
          </p>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Phone
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Pet Image
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {myAddedData?.map((data) => (
                        <tr key={data._id}>
                          <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                            {data.userName}
                          </td>
                          <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                            {data.userEmail}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div>
                              <h4 className="text-gray-700 dark:text-gray-200">
                                {data.phoneNumber}
                              </h4>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div>
                              <h4 className="text-gray-700 dark:text-gray-200">
                                {data.address}
                              </h4>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                className="object-cover w-16 h-16 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                src={data.petImage}
                                alt=""
                              />
                            </div>
                          </td>

                          {data.status === "rejected" ? (
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <span className="bg-red-600 px-5 py-2 rounded-full text-white">
                                Rejected
                              </span>
                            </td>
                          ) : data.status === "adopted" ? (
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <span className="bg-green-500 px-5 py-2 rounded-full  text-white">
                                Adopted
                              </span>
                            </td>
                          ) : (
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <button
                                onClick={() => handleReject(data._id)}
                                className="px-5 py-2 text-white transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 bg-red-600 mr-5"
                              >
                                Reject
                              </button>
                              <button
                                onClick={() =>
                                  handleAdopt(data.petID, data._id)
                                }
                                className="px-5 py-2 text-white transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100 bg-blue-900"
                              >
                                Accept
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdoptRequest;

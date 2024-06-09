import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import DynamicTitle from "../../../Components/HelmetForTitle/DynamicTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Context/authcontext/Authentication";

const CreateDonation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { user } = useContext(AuthContext);

  const handleCampaignSubmit = async (data) => {
    const image = data.image[0];
    const totalAmount = parseInt(data.totalAmount);
    const lastDate = data.lastDate;
    const shortDescription = data.shortDescription;
    const longDescription = data.longDescription;
    const petName = data.petname;

    const formData = new FormData();
    formData.append("image", image);

    const imgRes = await axiosPublic.post(
      "https://api.imgbb.com/1/upload?key=015334421fc290847de066edce69a4c4",
      formData
    );

    if (imgRes.data.success) {
      const image = imgRes.data.data.display_url;
      const campaignData = {
        image: image,
        totalAmount: totalAmount,
        lastDate: lastDate,
        petName: petName,
        shortDescription: shortDescription,
        longDescription: longDescription,
        campaignStart: new Date(),
        user: user?.email,
        isPause: false,
      };

      const campaignRes = await axiosSecure.post("/campaigns", campaignData);
      if (campaignRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Campaign Created",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <DynamicTitle title="DashBoard | Create Donation"></DynamicTitle>
      <div className="mt-16">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-xl text-center mb-10 font-semibold text-gray-700 capitalize dark:text-white">
            Create Donation Campaign
          </h2>

          <form onSubmit={handleSubmit(handleCampaignSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div className="mt-4">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="petname"
                >
                  Pet Name
                </label>
                <input
                  {...register("petname", { required: true })}
                  id="petname"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  type="text"
                />
                {errors.petname?.type === "required" && (
                  <span className="label-text text-red-500">
                    Please Select A Image!
                  </span>
                )}
              </div>
              <div className="mt-4">
                <input
                  {...register("image", { required: true })}
                  className="block w-full px-4 py-2 text-gray-700   dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                />
                {errors.image?.type === "required" && (
                  <span className="label-text text-red-500">
                    Please Select A Image!
                  </span>
                )}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="amount"
                >
                  Donation Amount
                </label>
                <input
                  id="amount"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("totalAmount", { required: true })}
                />
                {errors.totalAmount?.type === "required" && (
                  <span className="label-text text-red-500">
                    This Field is Reqired!
                  </span>
                )}
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="lastDate"
                >
                  Last date Of Campaign
                </label>
                <input
                  id="lastDate"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("lastDate", { required: true })}
                />
                {errors.lastDate?.type === "required" && (
                  <span className="label-text text-red-500">
                    This Field is Reqired!
                  </span>
                )}
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="shortDescription"
                >
                  Short Descripton
                </label>
                <input
                  id="shortDescription"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("shortDescription", { required: true })}
                />
                {errors.shortDescription?.type === "required" && (
                  <span className="label-text text-red-500">
                    This Field is Reqired!
                  </span>
                )}
              </div>

              <div className="w-full">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="longDescription"
                >
                  Long Description
                </label>
                <input
                  id="longDescription"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("longDescription", { required: true })}
                />
                {errors.longDescription?.type === "required" && (
                  <span className="label-text text-red-500">
                    This Field is Reqired!
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Create Donation
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateDonation;

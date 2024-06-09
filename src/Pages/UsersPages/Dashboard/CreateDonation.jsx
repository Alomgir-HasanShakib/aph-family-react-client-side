import { useForm } from "react-hook-form";
import DynamicTitle from "../../../Components/HelmetForTitle/DynamicTitle";

const CreateDonation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCampaignSubmit = (data) => {
    const image = data.image[0];
    const totalAmount = parseInt(data.totalAmount);
    const lastDate = data.lastDate;
    const shortDescription = data.shortDescription;
    const longDescription = data.longDescription;
    const campaignData = {
      image: image,
      totalAmount: totalAmount,
      lastDate: lastDate,
      shortDescription: shortDescription,
      longDescription: longDescription,
      campaignStart: new Date(),
    };
    console.log(campaignData);
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

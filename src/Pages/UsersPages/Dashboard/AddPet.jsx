import { useForm } from "react-hook-form";
import Title from "../../../Components/DashBoardSectionTItle/Title";

import { useContext, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/authcontext/Authentication";
import DynamicTitle from "../../../Components/HelmetForTitle/DynamicTitle";

const AddPet = () => {
  const axiosPublic = useAxiosPublic();
  const {loader,setLoader,user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const para = content.split(">")[1];
  // const p = para.split("<")[0];
  // console.log(p);

  const onSubmit = async (data) => {
    const name = data.petname;
    const age = data.age;
    const location = data.location;
    const shortDescription = data.description;
    const image = data.image[0];
    const category = data.category;
    const long = para.split("<")[0];

    const formData = new FormData();
    formData.append("image", image);

    setLoader(true)
    const imgRes = await axiosPublic.post(
      "https://api.imgbb.com/1/upload?key=015334421fc290847de066edce69a4c4",
      formData
    );

    if (imgRes.data.success) {
      const image = imgRes.data.data.display_url;
      const result = {
        name: name,
        age: age,
        locaiton: location,
        shortDescription: shortDescription,
        image: image,
        category: category,
        date: new Date(),
        adopted: false,
        long: long,
        user: user?.email
      };
      const petRes = await axiosPublic.post("/pets", result);
      if (petRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Pet Added",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoader(false)
      }
    }
  };

  return (
    <div className="px-4 mt-24 md:mb-5">
      <DynamicTitle title='DashBoard | Add Pet'></DynamicTitle>
      <Title
        head="List Down Here for give them better life"
        subHead="Have Any Pet ?"
      ></Title>
      {loader ? (
        <div className="w-full max-w-md mx-auto animate-pulse p-9">
          <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

          <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      ) : (
        <div>
          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-2xl  text-blue-900 font-bold capitalize text-center dark:text-white pb-10">
              Add Pet Information
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="username"
                  >
                    Pet Name
                  </label>
                  <input
                    id="petname"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    {...register("petname", { required: true })}
                  />
                  {errors.petname?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="emailAddress"
                  >
                    Pet Age
                  </label>
                  <input
                    type="number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    {...register("age", { required: true })}
                  />
                  {errors.age?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>

                <div>
                  <label className="form-control w-full rounded-lg">
                    <div className="label">
                      <span className="label-text">Category</span>
                    </div>
                    <select
                      {...register("category", { required: true })}
                      defaultValue="select"
                      className="select select-bordered w-full"
                    >
                      <option disabled value="select">
                        Select One
                      </option>
                      <option>Dog</option>
                      <option>Cat</option>
                      <option>Rabbit</option>
                      <option>Parrot</option>
                    </select>
                  </label>
                  {errors.category?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Pet Location
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    {...register("location", { required: true })}
                  />
                  {errors.location?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Short Description
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    {...register("description", { required: true })}
                  />
                  {errors.description?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white  rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    {...register("image", { required: true })}
                  />
                  {errors.image?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Long Description
                  </label>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                  />
                  {errors.long?.type === "required" && (
                    <span className="label-text text-red-500">
                      This field is required!
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <input
                  type="submit"
                  value="Add Pet"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                />
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default AddPet;

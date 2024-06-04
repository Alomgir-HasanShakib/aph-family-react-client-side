import logo from "../../assets/logo.png";
import loginPet from "../../assets/cat2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/authcontext/Authentication";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `http://freeimage.host/api/1/upload/?key=${image_hosting_key}`;
const Registration = () => {
  const { updateUserProfile, gitLogin, googleLogin, createUser, loader } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      const user = {
        name: res.user.displayName,
        email: res.user.email,
        role: "user",
      };
      axiosPublic.post("/users", user).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Register Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      navigate("/");
    });
  };

  const handleGitleLogin = () => {
    gitLogin().then((res) => {
      const user = {
        name: res.user.displayName,
        email: res.user?.email || "Login With Github",
        role: "user",
      };
      axiosPublic.post("/users", user).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Register Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      navigate("/");
    });
  };

  const onSubmit = async (data) => {
    // data.preventDefault();
    const name = data.name;
    const email = data.email;
    const pass = data.password;
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    await fetch(
      "https://api.imgbb.com/1/upload?key=015334421fc290847de066edce69a4c4",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          const img = result.data.url;
          const userInfo = {
            name: name,
            email: email,
            image: img,
            role: "user",
          };

          createUser(email, pass).then((res) => {
            updateUserProfile(name, img).then((res) => {
              axiosPublic.post("/users", userInfo).then((res) => {
                console.log(res);
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Register Success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
            });
          });
        }
      });
  };
  return (
    <>
      {loader ? (
        <div className="w-full max-w-md mx-auto animate-pulse p-9">
          <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

          <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      ) : (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-24">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{ backgroundImage: `url(${loginPet})` }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img className="w-auto" src={logo} alt="" />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
            </p>

            <a
              onClick={handleGoogleLogin}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transhtmlForm border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </a>
            <a
              onClick={handleGitleLogin}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transhtmlForm border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <FaGithub></FaGithub>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Github
              </span>
            </a>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="LoggingEmailAddress"
                >
                  Full Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
                {errors.name?.type === "required" && (
                  <span className="label-text text-red-500">
                    Enter Your Full Name!
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  {...register("email", { required: true })}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
                {errors.email?.type === "required" && (
                  <span className="label-text text-red-500">
                    Enter your Email!
                  </span>
                )}
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    Forget Password?
                  </a>
                </div>

                <input
                  id="loggingPassword"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <span className="label-text text-red-500">
                    Enter Valid Password and Password Length Must be 6
                    charecter!
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

              <div className="mt-6">
                <input
                  type="submit"
                  value="  Sign Up"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transhtmlForm bg-blue-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                />
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <Link
                to="/login"
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or sign in
              </Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Registration;

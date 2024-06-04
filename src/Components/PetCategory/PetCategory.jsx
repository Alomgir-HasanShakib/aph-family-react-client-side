import { FaArrowRight } from "react-icons/fa6";
import dog from "../../assets/3.png";
import cat from "../../assets/cat1.jpg";
import parrot from "../../assets/parrot.jpg";
import rabbit from "../../assets/rabbit1.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
const PetCategory = () => {
  return (
    <div className="mt-16 container mx-auto px-3">
      <SectionTitle></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 gap-5">
        {/* dog section here  */}
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{ "backgroundImage": `url(${dog})` }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Dogs
            </h3>

            <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <button className="btn capitalize text-xl font-semibold text-blue-900 border hover:bg-blue-900 hover:text-white transition-all ease-in duration-100 border-blue-900 px-5 py-2 rounded-full flex items-center gap-3">
                view all <FaArrowRight className="pt-1 text-xl"></FaArrowRight>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* cat section here  */}
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-cover rounded-lg shadow-md"
            style={{ "backgroundImage": `url(${cat})` }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Cats
            </h3>

            <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <button className="btn capitalize text-xl font-semibold text-blue-900 border hover:bg-blue-900 hover:text-white transition-all ease-in duration-100 border-blue-900 px-5 py-2 rounded-full flex items-center gap-3">
                view all <FaArrowRight className="pt-1 text-xl"></FaArrowRight>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* parrot section here  */}
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{ "backgroundImage": `url(${parrot})` }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Parrot
            </h3>

            <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <button className="btn capitalize text-xl font-semibold text-blue-900 border hover:bg-blue-900 hover:text-white transition-all ease-in duration-100 border-blue-900 px-5 py-2 rounded-full flex items-center gap-3">
                view all <FaArrowRight className="pt-1 text-xl"></FaArrowRight>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* rabbit section here  */}
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{ "backgroundImage": `url(${rabbit})` }}
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Rabbit
            </h3>

            <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <button className="btn capitalize text-xl font-semibold text-blue-900 border hover:bg-blue-900 hover:text-white transition-all ease-in duration-100 border-blue-900 px-5 py-2 rounded-full flex items-center gap-3">
                view all <FaArrowRight className="pt-1 text-xl"></FaArrowRight>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCategory;

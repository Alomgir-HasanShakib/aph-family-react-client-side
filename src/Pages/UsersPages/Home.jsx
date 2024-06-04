import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import PetCategory from "../../Components/PetCategory/PetCategory";
import { AuthContext } from "../../Context/authcontext/Authentication";

const Home = () => {
  const { loader } = useContext(AuthContext);
  return (
    <>
      {loader ? (
        <div class="w-full max-w-md mx-auto animate-pulse p-9">
          <h1 class="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

          <p class="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p class="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p class="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      ) : (
        <>
          <div className="pt-24  bg-[#FCEED5]">
            <Banner></Banner>
          </div>
          <PetCategory></PetCategory>
        </>
      )}
    </>
  );
};

export default Home;

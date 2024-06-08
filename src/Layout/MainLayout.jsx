import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/authcontext/Authentication";
import Nav from "../Shared/Navbar/Nav";

const MainLayout = () => {
  const { loader } = useContext(AuthContext);
  return (
    <div>
      {/* navbar  */}
      {loader ? (
        <div className="w-full max-w-md mx-auto animate-pulse p-9">
          <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

          <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      ) : (
        <>
          <Nav></Nav>
          <div className="min-h-[calc(100vh-130px)]  mb-10">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default MainLayout;

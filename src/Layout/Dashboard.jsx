import { FaBackspace, FaDonate, FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { GoChecklist } from "react-icons/go";
import { MdCampaign, MdLogout } from "react-icons/md";
import { IoAddCircle, IoCreateOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useContext, useState } from "react";
import { LiaHandshake } from "react-icons/lia";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AuthContext } from "../Context/authcontext/Authentication";
import Nav from "../Shared/Navbar/Nav";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loader } = useContext(AuthContext);
  const navlink = (
    <>
      <li>
        <Link to="/" className="flex items-center gap-3 hover:text-blue-800  ">
          <FaHome className="text-xl"></FaHome> Home
        </Link>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              backgroundColor: isActive ? "#233876" : "",
              padding: isActive ? "10px " : "",
              color: isActive ? "white" : "",
              fontSize: isActive ? "16px" : "",
              borderRadius: isActive ? "10px" : "",

              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/addpet"
          className="flex items-center gap-3 hover:text-blue-800 "
        >
          <IoAddCircle className="text-xl"></IoAddCircle> Add a Pet
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              backgroundColor: isActive ? "#233876" : "",
              padding: isActive ? "10px " : "",
              color: isActive ? "white" : "",
              fontSize: isActive ? "16px" : "",
              borderRadius: isActive ? "10px" : "",

              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/myaddedpet"
          className="flex items-center gap-3 hover:text-blue-800 "
        >
          <GoChecklist className="text-xl" /> My Added Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              backgroundColor: isActive ? "#233876" : "",
              padding: isActive ? "10px " : "",
              color: isActive ? "white" : "",
              fontSize: isActive ? "16px" : "",
              borderRadius: isActive ? "10px" : "",

              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/adoptrequest"
          className="flex items-center gap-3 hover:text-blue-800 "
        >
          <LiaHandshake className="text-xl" /> Adoption Request
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              backgroundColor: isActive ? "#233876" : "",
              padding: isActive ? "10px " : "",
              color: isActive ? "white" : "",
              fontSize: isActive ? "16px" : "",
              borderRadius: isActive ? "10px" : "",

              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/donationcampaign"
          className="flex items-center gap-3 hover:text-blue-800 "
        >
          <IoCreateOutline className="text-xl" />
          Create Donation Campaign
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              backgroundColor: isActive ? "#233876" : "",
              padding: isActive ? "10px " : "",
              color: isActive ? "white" : "",
              fontSize: isActive ? "16px" : "",
              borderRadius: isActive ? "10px" : "",

              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/mycampaign"
          className="flex items-center gap-3 hover:text-blue-800 "
        >
          <MdCampaign className="text-xl" /> My Donation Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              backgroundColor: isActive ? "#233876" : "",
              padding: isActive ? "10px " : "",
              color: isActive ? "white" : "",
              fontSize: isActive ? "16px" : "",
              borderRadius: isActive ? "10px" : "",

              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/dashboard/mydonation"
          className="flex items-center gap-3 hover:text-blue-800 "
        >
          <FaDonate className="text-xl" />
          My Donations
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl font-extrabold mt-5 bg-white lg:hidden"
      >
        <AiOutlineMenuUnfold />
      </button>
      {loader ? (
        <div className="flex items-center  min-h-screen">
          <div className="flex  w-full  min-h-screen  mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
            <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

            <div className="w-2/3 p-4 md:p-4">
              <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

              <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

              <div className="flex mt-4 item-center gap-x-2">
                <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
              </div>

              <div className="flex justify-between mt-6 item-center">
                <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
       <Nav></Nav>
        <div className="flex md:gap-10 font-sans bg-[#F6F6F6]">
          <div>
            <div
              className={`max-w-72 min-h-screen bg-white ${
                isOpen ? "block" : "hidden"
              } lg:block`}
            >
              <div className="  flex flex-col justify-center items-center pt-5 pb-5  gap-4">
                <img
                  className=" object-cover w-16 h-16 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="user Image"
                />
                <h3 className="text-blue-900 font-medium">
                  {user?.displayName || "Anonymous"}
                </h3>
              </div>
              <hr className="" />
              <ul className="menu p-4 md:pt-10 font-medium text-blue-900 space-y-10">
                {navlink}
              </ul>
            </div>
          </div>
          <div className={`flex-1 ${isOpen ? "hidden" : ""} `}>
            <Outlet></Outlet>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Dashboard;

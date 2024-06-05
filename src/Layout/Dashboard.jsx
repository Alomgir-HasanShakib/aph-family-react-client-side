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

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(AuthContext)
  const navlink = (
    <>
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
          className="flex items-center gap-3"
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
          className="flex items-center gap-3"
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
          className="flex items-center gap-3"
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
          className="flex items-center gap-3"
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
          className="flex items-center gap-3"
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
          className="flex items-center gap-3"
        >
          <FaDonate className="text-xl" />
          My Donations
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex gap-10 font-sans bg-[#F6F6F6]">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-extrabold mt-5 bg-white lg:hidden"
        >
          <AiOutlineMenuUnfold />
        </button>
        <div
          className={`w-72 h-screen bg-white ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="  flex flex-col justify-center items-center pt-5 pb-5  gap-3">
            <img
              className=" object-cover w-16 h-16 mx-2 rounded-full"
              src={user?.photoURL}
              alt="user Image"
            />
            <h3 className="text-blue-900 font-medium">{user?.displayName || "Anonymous"}</h3>
            
          </div>
          <hr className=""/>
          <ul className="menu p-4 md:pt-10 font-medium text-blue-900 space-y-10">
            {navlink}
          </ul>

          <Link
            to="/"
            className="btn hover:text-slate-400 bottom-10 md:bottom-16 absolute text-blue-900  px-5 text-xl max-w-56  flex gap-3 items-center left-5"
          >
            Back to Home <FaArrowRight></FaArrowRight>
          </Link>
          <button className="btn hover:text-red-600 bottom-0 md:bottom-3 absolute text-blue-900  px-5 text-xl max-w-40  flex gap-3 items-center left-5">
            Log Out<MdLogout></MdLogout>
          </button>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

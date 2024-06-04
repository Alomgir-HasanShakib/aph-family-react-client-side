import { FaBackspace, FaDonate, FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GoChecklist } from "react-icons/go";
import { MdCampaign, MdLogout } from "react-icons/md";
import { IoAddCircle, IoCreateOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import { LiaHandshake } from "react-icons/lia";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlink = (
    <>
      <li>
        <NavLink to="/dashboard/userhome" className="flex items-center gap-3">
          <IoAddCircle></IoAddCircle> Add a Pet
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addpet" className="flex items-center gap-3">
          <GoChecklist /> My Added Pets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/adoptrequest"
          className="flex items-center gap-3"
        >
          <LiaHandshake /> Adoption Request
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/donationcampaign"
          className="flex items-center gap-3"
        >
          <IoCreateOutline />
          Create Donation Campaign
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycampaign" className="flex items-center gap-3">
          <MdCampaign /> My Donation Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mydonation" className="flex items-center gap-3">
          <FaDonate />
          My Donations
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex gap-10 font-cinzel bg-[#F6F6F6]">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl font-extrabold mt-5 bg-white lg:hidden"
        >
          <AiOutlineMenuUnfold />
        </button>
        <div
          className={`w-64 h-screen bg-blue-900 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="menu p-4 md:pt-10 font-medium text-slate-300 space-y-10">
            {navlink}
          </ul>

          <Link to='/' className="btn hover:text-slate-400 bottom-10 md:bottom-16 absolute text-slate-300  px-5 text-xl max-w-48  flex gap-3 items-center left-5">
            Back to Home <FaArrowRight></FaArrowRight>
          </Link>
          <button className="btn hover:text-red-600 bottom-0 md:bottom-3 absolute text-slate-300  px-5 text-xl max-w-40  flex gap-3 items-center left-5">
            Log Out<MdLogout></MdLogout>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;

import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const navlink = (
    <>
      <li>
        <NavLink to="/dashboard/userhome">
          <FaHome></FaHome> Add a Pet

        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addpet">
          <FaHome></FaHome> My Added Pets
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/adoptrequest">
          <FaHome></FaHome> Adoption Request
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/donationcampaign">
          <FaHome></FaHome> Create Donation Campaign

        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycampaign">
          <FaHome></FaHome> My Donation Campaigns

        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mydonation">
          <FaHome></FaHome> My Donations

        </NavLink>
      </li>
    </>
  );
  return <div>Dashboard</div>;
};

export default Dashboard;

import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/authcontext/Authentication";
import Swal from "sweetalert2";
import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import useAdmin from "../../hooks/useAdmin";
import { useTheme } from "../../Context/ThemeContext/ThemeProvider";

const Nav = () => {
  // theme controller are here

 
  const [isAdmin] = useAdmin();
  const { user, logOut } = useContext(AuthContext);
  // const [isOpen, setIsOpen] = useState(false);
  // const [click, setClick] = useState(false);
  // const [isuserOpen, setIsuserOpen] = useState(false);
  const navlink = (
    <>
      <NavLink
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            fontSize: isActive ? "18px" : "",
            color: isActive ? "#233876" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to="/"
        className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            fontSize: isActive ? "18px" : "",
            color: isActive ? "#233876" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to="/petlisting"
        className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
      >
        Pet List
      </NavLink>
      <NavLink
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            fontSize: isActive ? "18px" : "",
            color: isActive ? "#233876" : "",

            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
        to="/donation"
        className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
      >
        Donation
      </NavLink>
    </>
  );

  const handleLogOut = () => {
    logOut().then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Log Out",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <Navbar fluid rounded className={`container mx-auto `}>
      <NavbarBrand>
        <img src={logo} className="mr-3 h-24" alt="Flowbite React Logo" />
      </NavbarBrand>
      <div className="flex md:order-2">
        {!user ? (
          <Link
            to="/login"
            className="bg-blue-900 btn px-5 py-2 text-white rounded-full"
          >
            Join Community
          </Link>
        ) : (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
          >
            {isAdmin ? (
              <>
                <DropdownItem>
                  <Link to="/dashboard/allusers">Admin Dashboard</Link>
                </DropdownItem>
              </>
            ) : (
              <DropdownItem>
                <Link to="/dashboard/addpet">Dashboard</Link>
              </DropdownItem>
            )}
            <DropdownDivider />
            <DropdownItem onClick={handleLogOut}>Sign out</DropdownItem>
          </Dropdown>
        )}

       {/* <div className="ml-5">
       <DarkThemeToggle />
       </div> */}
      </div>
      <NavbarCollapse className=" text-blue-900">{navlink}</NavbarCollapse>
    </Navbar>
  );
};

export default Nav;

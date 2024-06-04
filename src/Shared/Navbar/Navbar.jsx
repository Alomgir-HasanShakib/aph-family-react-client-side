import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [isuserOpen, setIsuserOpen] = useState(false);
  const [user, setUser] = useState(false);

  const handleLogOut = () => {
    console.log("logout");
  };

  return (
    <nav className=" border-gray-200 dark:bg-gray-900 fixed w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="w-[150px]" alt="Flowbite Logo" />
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <ul>
              <li
                className="relative"
                onClick={() => setIsuserOpen(!isuserOpen)}
              >
                <img
                  className="w-12 rounded-full"
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
                  alt=""
                />

                <ul
                  className={` py-2 absolute bg-white mt-5 right-0 rounded-lg font-bold text-xl ${
                    isuserOpen ? "block" : "hidden"
                  }`}
                  aria-labelledby="user-menu-button"
                >
                  <li>
                    <button className="btn px-4 py-2 text-sm text-green-500 hover:bg-gray-100 dark:hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white">
                      <Link
                        to="/dashboard"
                        className="flex btn items-center   "
                      >
                        <MdDashboard className="text-xl mr-3"></MdDashboard>{" "}
                        Dashboard
                      </Link>
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="flex btn items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <LuLogOut className="text-xl text-red-600 mr-3" /> Sign
                      out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <button className="btn bg-blue-900 rounded-full text-slate-300 font-semibold px-5 py-2">
              Join Community
            </button>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${
            isOpen ? "block bg-white" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg z-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
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
                className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent text-black md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
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
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pet Listing
              </NavLink>
            </li>
            <li>
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
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Donation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

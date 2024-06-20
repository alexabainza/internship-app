import React, { useState } from "react";
import icon from "../assets/Carbs.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../src/redux/user/userSlice";
import { lightTheme } from "../styles/theme";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const firstLetter =
    currentUser?.role === "Student"
      ? currentUser?.username.charAt(0).toUpperCase()
      : currentUser?.company_name.charAt(0).toUpperCase();

  return (
    <nav className="bg-gradient-to-br from-[#074666] to-[#0B0027] fixed w-full z-20 top-0 start-0 border-b-2 border-b-gray-500 border-gray-">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={`/${
            !currentUser
              ? ""
              : currentUser.role === "Student"
              ? "user-dashboard"
              : "company-dashboard"
          }`}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={icon} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-lg text-white font-regular whitespace-nowrap hidden sm:inline">
            Internship Service Platform
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-light border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/*profile pic */}
            <li className="flex gap-4 items-center align-middle">
              {currentUser ? (
                currentUser?.company_logo ? (
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    src={currentUser.company_logo}
                    alt="profile"
                  ></img>
                ) : (
                  <div
                    className="ml-4 text-md font-semibold flex items-center justify-center h-7 w-7 rounded-full text-white"
                    style={{
                      backgroundColor: lightTheme.green,
                      color: lightTheme.primary,
                    }}
                  >
                    {firstLetter}
                  </div>
                )
              ) : (
                <></>
              )}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={toggleMenu}
                    className="text-white text-md font-medium focus:outline-none"
                  >
                    {currentUser.role === "Student"
                      ? currentUser.username
                      : currentUser.company_name}
                  </button>
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-4 w-48 bg-[#056480] text-white font-semibold rounded-lg shadow-lg">
                      <Link
                        to={
                          currentUser.role === "Student"
                            ? `/${currentUser.username}`
                            : `/${currentUser.company_name}`
                        }
                        className="block px-4 py-2  hover:bg-gray-200"
                        onClick={closeMenu}
                      >
                        Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2  hover:bg-gray-200"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-white"></p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Carbs.svg";

const Navbar = () => {
  return (
    <header class="bg-gradient-to-br from-[#074666] to-[#0B0027]  fixed w-full border-b z-20 border-gray-200 dark:border-gray-600 px-8 lg:px-32 md:px-16 sm:px-4">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          to="/landing"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} class="h-8 mx-0 px-0" alt="Flowbite Logo" />
          <span class="md:inline sm:hidden self-center text-lg font-light whitespace-nowrap text-white">
            Internship Service Platform
          </span>
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/login"
            type="button"
            class="lg:inline md:inline sm:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </Link>
         </div>
      </div>
    </header>
  );
};

export default Navbar;

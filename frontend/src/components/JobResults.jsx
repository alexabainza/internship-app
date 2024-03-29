import React from "react";
import { useTheme } from "@mui/material/styles";
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"

const JobResults = () => {
  const theme = useTheme(); // Access the theme

  return (
    <div className="h-full">
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={logo1}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-0.5 text-xl font-bold tracking-tight text-[#056480]">
            Software Engineer Intern
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Company name
          </p>
          <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">
            Company location
          </p>
          <p class="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
            Posted less than one day ago | 24 applicants
          </p>
        </div>
      </a>
    </div>
  );
};

export default JobResults;

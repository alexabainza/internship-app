import React from "react";
import logo1 from "../assets/logo1.jpg";

const JobResults = ({ posting, onClick, selected }) => {
  return (
    <div className="h-full" onClick={onClick}>
      <a
        href="#"
        className={`flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-blue-200 ${
          selected ? "bg-blue-100 text-white" : "bg-white text-black"
        }`}
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={logo1}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-0.5 text-xl font-bold tracking-tight text-[#056480]">
            {posting.job_title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {posting.company_id.company_name}
          </p>
          <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
            {posting.city}, {posting.province}
          </p>
          <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
            Posted less than one day ago | 24 applicants
          </p>
        </div>
      </a>
    </div>
  );
};

export default JobResults;

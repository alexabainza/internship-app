import React, { useState } from "react";
import logo1 from "../assets/logo1.jpg";

const ApplicantBox = ({ applicant, onClick, selected }) => {
  const [status, setStatus] = useState(applicant.status);
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    console.log(newStatus);
  };

  return (
    <div className="h-full" onClick={onClick}>
      <div
        className={`flex gap-4 items-center  rounded-lg shadow py-4 px-2 md:flex-row md:max-w-xl hover:bg-blue-200 ${
          selected ? "bg-blue-100 text-white" : "bg-white text-black"
        }`}
      >
        {" "}
        <div className="border-2 border-red-800 w-20 h-20">
          <img
            className="object-cover border-2 rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col justify-between ">
            <h5 className="mb-0.5 text-xl font-bold tracking-tight text-[#056480]">
              {applicant.first_name} {applicant.last_name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {applicant.course_year}{" "}
            </p>
          </div>
          <div className="flex text-xs gap-4 font-semibold mt-2">
            <button
              className="uppercase text-[#056480] cursor-pointer"
              onClick={() => handleStatusChange("for screening")}
            >
              Prescreen
            </button>
            <button
              className="uppercase text-green-500 cursor-pointer"
              onClick={() => handleStatusChange("for interview")}
            >
              Interview
            </button>
            <button
              className="uppercase text-red-700 cursor-pointer"
              onClick={() => handleStatusChange("not suitable")}
            >
              Not suitable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantBox;

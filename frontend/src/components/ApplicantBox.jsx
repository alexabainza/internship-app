import React from "react";
import logo1 from "../assets/logo1.jpg";

const ApplicantBox = ({ applicant, onClick, selected }) => {
  return (
    <div className="h-full" onClick={onClick}>
      <div
        className={`flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-blue-200 ${
          selected ? "bg-blue-100 text-white" : "bg-white text-black"
        }`}
      >
        {" "}
        <img
          className="object-cover  rounded-t-lg h-40 w-40 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          //   src={logo1}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-0.5 text-xl font-bold tracking-tight text-[#056480]">
            {applicant.first_name} {applicant.last_name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {applicant.course_year}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantBox;

import React, { useEffect } from "react";
import logo from "../assets/logo1.jpg";
import { lightTheme } from "../styles/theme";
import { formatDate } from "../../../backend/utils/rendering";

const Applications = ({ application }) => {
  useEffect(() => {
    console.log("application", application);
  }, []);
  return (
    <div className="bg-gray-200 px-6 py-3 rounded-md flex lg:gap-8 sm:gap-4 gap-4 hover:bg-gray-300">
      <img src={logo} className="h-24 w-24 object-cover" />
      <div className="flex flex-col">
        <h2 className="font-bold text-xl" style={{ color: lightTheme.primary }}>
          {application.job_id.job_title} - Intern
        </h2>
        <p className="text-sm font-semibold">
          {application.job_id.company_name}
        </p>
        <p className="text-sm">
          You applied at {formatDate(application.createdAt)}
        </p>
        <div className="flex align-middle gap-2 mt-2">
          <div className="rounded-full bg-red-600 h-4 w-4 sm:inline-block hidden"></div>
          <p className="text-xs">
            Your application has been viewed by the company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;

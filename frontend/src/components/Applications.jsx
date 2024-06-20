import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.jpg";
import { lightTheme } from "../styles/theme";
import { formatDate } from "../../../backend/utils/rendering";

const Applications = ({ application }) => {
  const [applicationStatus, setApplicationStatus] = useState({
    statusApplicationMessage: "",
    iconColor: "",
  });
  useEffect(() => {
    switch (application.status) {
      case "for interview":
        setApplicationStatus({
          statusApplicationMessage:
            "Check your email for your interview schedule",
          iconColor: "green",
        });
        break;
      case "not suitable":
        setApplicationStatus({
          statusApplicationMessage:
            "Your application has been rejected by the company",
          iconColor: "red",
        });
        break;
      case "for screening":
        setApplicationStatus({
          statusApplicationMessage:
            "Your application is being reviewed by the company",
          iconColor: "yellow",
        });
        break;
      case "to be viewed":
        setApplicationStatus({
          statusApplicationMessage:
            "Your application has not yet been viewed by the company",
          iconColor: "gray",
        });
        break;
      default:
        break;
    }
    console.log(applicationStatus);
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
          <div
            className="rounded-full h-4 w-4 sm:inline-block hidden"
            style={{ backgroundColor: applicationStatus.iconColor }}
          ></div>
          <p className="text-xs">
            {applicationStatus.statusApplicationMessage}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;

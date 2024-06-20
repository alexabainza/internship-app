import React, { useState, useEffect } from "react";
import person from "../../assets/persontyping.jpg";
import { lightTheme } from "../../styles/theme";
import Applications from "../../components/Applications";

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    console.log("fetching data");
    const fetchApplications = async () => {
      try {
        const response = await fetch(`/api/application/get-applications`);
        const data = await response.json();
        if (data.success) {
          setApplications(data.applications);
          console.log(data.applications);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchApplications();
  }, []);
  return (
    <div className="pt-16 min-h-screen shadow-xl  bg-white  overflow-auto flex lg:flex-row sm:flex-col flex-col">
      <div className="relative lg:w-1/3 sm:w-full h-screen">
        <img src={person} className=" w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-800 opacity-40"></div>{" "}
      </div>
      <div className="lg:w-2/3 sm:w-full w-full  min-h-screen py-12 lg:px-8 md:px-4 sm:px-4 px-4">
        <h1
          className="text-4xl font-semibold mb-4"
          style={{ color: lightTheme.primary }}
        >
          Your Applications
        </h1>
        {applications.length < 0 ? (
          <p>You have not applied to any internships yet!</p>
        ) : (
          <div className="flex flex-col gap-2">
            {applications.map((application, index) => (
              <Applications application={application} key={application._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsList;

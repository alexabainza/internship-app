import React from "react";
import { lightTheme } from "../../styles/theme";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  return (
    <div className="pt-28 min-h-screen shadow-xl pb-2 bg-white lg:px-16 md:px-8 sm:px-2 px-2 overflow-auto">
      <div className="relative">
        <div className="rounded-lg border-2 h-36 bg-gray-200"></div>
        <div className="absolute bottom-0 left-4 transform translate-y-1/2 rounded-full border-2 w-28 h-28 bg-white overflow-hidden"></div>
      </div>
      <div className="relative lg:left-4 sm:left-2 left-2 mt-16">
        <h2
          className="text-3xl font-bold"
          style={{ color: lightTheme.primary }}
        >
          Ana Anana
        </h2>
        <h3>Studies at University of San Carlos</h3>
        <h3>Bachelor of Science in Computer Science</h3>
        <br />
        <h3 className="mb-2">I am currently focusing on:</h3>
        <div className="flex flex-wrap gap-2 items-center">
          <p
            className="text-sm inline-block border-2 border-opacity-50 py-1 px-6 rounded-full"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            Artificial Intellience
          </p>{" "}
          <p
            className="text-sm inline-block border-2 border-opacity-50 py-1 px-6 rounded-full"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            Machine Learning
          </p>{" "}
          <p
            className="text-sm inline-block border-2 border-opacity-50 py-1 px-6 rounded-full"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            Python{" "}
          </p>
          <FaPlusCircle size={28} color={lightTheme.primary} />
        </div>
        <div className="flex flex-wrap mt-4">
          <Link
            to="/applications-list"
            className="uppercase text-sm border-2 px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: lightTheme.primary }}
          >
            View your applications
          </Link>
          <p
            className="uppercase text-sm border-2 px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: lightTheme.primary }}
          >
            Browse Internships
          </p>
          <p
            className="uppercase text-sm border-2 px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: lightTheme.primary }}
          >
            View Saved Jobs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

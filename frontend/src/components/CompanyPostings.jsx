import React from "react";
import { lightTheme } from "../styles/theme";
import { FaBinoculars, FaEye } from "react-icons/fa";
const CompanyPostings = ({ posting }) => {
  return (
    <div className="text-black lg:h-36 md:min-w-screen sm:min-w-screen min-w-screen lg:px-8 md:px-4 sm:px-4 px-4 py-4 bg-white rounded-lg">
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-4">
        <div className="lg:w-3/5 sm:w-full w-full  flex flex-col gap-3 justify-between">
          <div className="flex flex-col">
            <h1
              className="font-bold text-2xl"
              style={{ color: lightTheme.primary }}
            >
              {posting.job_title}
            </h1>
            <p className="text-md">
              Post ends on{" "}
              <span
                className="font-semibold"
                style={{ color: lightTheme.primary }}
              >
                11 Jan 2023
              </span>
            </p>
            <p className="text-md">
              Posted by{" "}
              <span
                className="font-semibold"
                style={{ color: lightTheme.primary }}
              >
                {posting.first_name} {posting.last_name}
              </span>
            </p>
          </div>

          <div className="flex">
            <button
              className="uppercase text-sm me-8 font-semibold"
              style={{ color: lightTheme.green }}
            >
              View
            </button>
            <button
              className="uppercase text-sm me-8 font-semibold"
              style={{ color: lightTheme.green }}
            >
              Edit
            </button>
            <button
              className="uppercase text-sm me-8 font-semibold"
              style={{ color: lightTheme.green }}
            >
              Browse Matches
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 sm:w-full w-full  flex flex-col py-2 justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 h-16 w-32  lg:justify-between items-center">
              <h1
                className="lg:text-2xl sm:text-lg text-lg font-bold"
                style={{ color: lightTheme.primary }}
              >
                63
              </h1>
              <p className="font-light lg:text-md sm:text-sm text-sm">
                Unprocessed
              </p>
            </div>
            <div className="flex flex-col gap-1 h-16 w-32  lg:justify-between items-center">
              <h1
                className="lg:text-2xl sm:text-lg text-lg font-bold"
                style={{ color: lightTheme.primary }}
              >
                8
              </h1>
              <p className="font-light lg:text-md sm:text-sm text-sm">
                Shortlisted
              </p>
            </div>
            <div className="flex flex-col gap-1 h-16 w-32  lg:justify-between items-center">
              <h1
                className="lg:text-2xl sm:text-lg text-lg font-bold"
                style={{ color: lightTheme.primary }}
              >
                2
              </h1>
              <p className="font-light lg:text-md sm:text-sm text-sm">
                Interview
              </p>
            </div>
          </div>
          <div className="flex justify-around text-sm">
            <p className="flex items-center">
              <FaEye color={lightTheme.secondary} className="me-2" size={16} />
              Total Views:{"\t"}
              <span
                className="font-bold ms-2"
                style={{ color: lightTheme.secondary }}
              >
                113
              </span>
            </p>
            <p className="flex items-center">
              <FaBinoculars
                color={lightTheme.secondary}
                className="me-2"
                size={16}
              />
              Total Applies:{" "}
              <span
                className="font-bold ms-2"
                style={{ color: lightTheme.secondary }}
              >
                72
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPostings;

import React from "react";
import person from "../../assets/persontyping.jpg";
import { lightTheme } from "../../styles/theme";
import Applications from "../../components/Applications";

const ApplicationsList = () => {
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
        <div className="flex flex-col gap-2">
          <Applications />
          <Applications />
          <Applications />
        </div>
      </div>
    </div>
  );
};

export default ApplicationsList;
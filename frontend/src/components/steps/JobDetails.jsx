import React from "react";
import { lightTheme } from "../../styles/theme";
import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
const JobDetails = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <h1
        style={{ color: lightTheme.primary }}
        className="lg:text-4xl sm:text-2xl text-2xl font-bold"
      >
        Post an Internship Opening
      </h1>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mt-2">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            Role Description
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <textarea
              onChange={handleChange}
              value={userData["role_description"] || ""}
              name="role_description"
              placeholder="Enter role description here"
              className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
              rows="4"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mt-2">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            Requirements
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <textarea
              onChange={handleChange}
              value={userData["requirements"] || ""}
              name="requirements"
              placeholder="Enter role description here"
              className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
              rows="4"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mt-2">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            List down the questions you want to ask the applicant
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <textarea
              onChange={handleChange}
              value={userData["questions"] || ""}
              name="questions"
              placeholder="i.e. What can you bring to the table?"
              className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
              rows="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

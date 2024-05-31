import React from "react";
import { lightTheme } from "../../styles/theme";
import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
const CompanyProfile = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      {" "}
      <h1
        style={{ color: lightTheme.primary }}
        className="lg:text-4xl sm:text-2xl text-2xl font-bold"
      >
        Post an Internship Opening
      </h1>
      <h3
        className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
        style={{ color: lightTheme.primary }}
      >
        Company Profile
      </h3>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mt-2">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            Company Description
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <textarea
              onChange={handleChange}
              value={userData["company_description"] || ""}
              name="company_description"
              placeholder="Enter company description here"
              className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
              rows="6"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mt-2">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            Logo
          </div>
          <div className="bg-white my-1 p-1 flex border rounded-md">
            <form>
              <input type="file" id="myFile" name="filename" />
            </form>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-full mt-2">
          <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
            Website
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["company_website"] || ""}
              name="company_website"
              placeholder="Enter company website here"
              className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;

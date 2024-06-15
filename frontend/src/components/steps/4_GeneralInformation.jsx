import React from "react";
import { lightTheme } from "../../styles/theme";
import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
import Dropdown from "../Dropdown";
const GeneralInformation = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserData({ ...userData, [name]: checked });
  };

  const handleRadioChange = (e) => {
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
      <section>
        <h3
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
          style={{ color: lightTheme.primary }}
        >
          General Information{" "}
        </h3>

        <div className="flex flex-col">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
            Specific Job Title
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["job_title"] || ""}
              name="job_title"
              placeholder="i.e. Software Developer, Data Scientist"
              className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
            />
          </div>
        </div>
      </section>
      <section>
        <h3
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
          style={{ color: lightTheme.primary }}
        >
          Internship Location
        </h3>
        <div className="flex flex-col mb-1 mt-2">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase mb-1">
            Province
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["province"] || ""}
              name="province"
              placeholder="i.e. Cebu, Davao"
              className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
            City
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["city"] || ""}
              name="city"
              placeholder="City"
              className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
            Specific Address
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["specific_address"] || ""}
              name="specific_address"
              placeholder="Address"
              className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <h3
            className="font-semibold lg:text-xl sm:text-lg text-lg mt-4 mb-2"
            style={{ color: lightTheme.primary }}
          >
            Paid or unpaid
          </h3>

          <div className="flex items-center mb-2">
            <input
              id="paid-radio"
              type="radio"
              value="paid"
              name="internship_type"
              checked={userData["internship_type"] === "paid"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
            >
              Paid
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="unpaid-radio"
              type="radio"
              value="unpaid"
              name="internship_type"
              checked={userData["internship_type"] === "unpaid"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
            >
              Unpaid
            </label>
          </div>
        </div>
        <div className="">
          <h3
            className="font-semibold lg:text-xl sm:text-lg text-lg mt-4 mb-2"
            style={{ color: lightTheme.primary }}
          >
            Internship Setup
          </h3>

          <div className="flex items-center mb-2">
            <input
              id="remote-radio"
              type="radio"
              value="remote"
              name="internship_setup"
              checked={userData["internship_setup"] === "remote"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
            >
              Remote
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="onsite-radio"
              type="radio"
              value="onsite"
              name="internship_setup"
              checked={userData["internship_setup"] === "onsite"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
            >
              On-site
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="hybrid-radio"
              type="radio"
              value="hybrid"
              name="internship_setup"
              checked={userData["internship_setup"] === "hybrid"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
            >
              Hybrid
            </label>
          </div>
        </div>
        <div className="space-y-2">
          <h3
            className="font-semibold lg:text-xl sm:text-lg text-lg mt-4 mb-2"
            style={{ color: lightTheme.primary }}
          >
            Accepting interns for:
          </h3>

          <li className="flex items-center">
            <input
              type="checkbox"
              checked={userData["academic_requirements"] || false}
              onChange={handleCheckboxChange}
              name="academic_requirements"
              className="form-checkbox h-4 w-4 text-[#056480] rounded-sm border-2"
            />
            <span className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300">
              Academic Requirements
            </span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              checked={userData["voluntary_internship"] || false}
              onChange={handleCheckboxChange}
              name="voluntary_internship"
              className="form-checkbox h-4 w-4 text-[#056480] rounded-sm border-2"
            />
            <span className="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300">
              Voluntary Internship
            </span>
          </li>
        </div>
      </section>
    </div>
  );
};

export default GeneralInformation;

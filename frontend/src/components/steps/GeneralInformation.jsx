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
  const industry = [
    { label: "Advertising and Marketing", value: "1" },
    { label: "Aerospace", value: "2" },
    { label: "Agriculture", value: "3" },
    { label: "Computer and Technology", value: "4" },
    { label: "Construction", value: "5" },
    { label: "Energy", value: "6" },
    { label: "Entertainment", value: "7" },
  ];

  const handleSelect = (option) => {
    console.log(option);
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
        <div className="flex flex-col mb-1 mt-2">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase mb-1">
            Industry
          </div>
          <Dropdown options={industry} onSelect={handleSelect} />
        </div>
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
        <h3
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-4 mb-2"
          style={{ color: lightTheme.primary }}
        >
          Job Level Options
        </h3>

        <div class="flex items-center mb-2">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-1"
            class="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
          >
            Internship as an academic requirement
          </label>
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-radio-2"
            class="ms-2 lg:text-md sm:text-sm text-sm font-regular dark:text-gray-300"
          >
            Voluntary internship
          </label>
        </div>
      </section>
    </div>
  );
};

export default GeneralInformation;

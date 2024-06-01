import React from "react";
import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
import { lightTheme } from "../../styles/theme";
import Dropdown from "../Dropdown";

const CompanyInformation = () => {
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

  const companySize = [
    { label: "0-10 employees", value: "1" },
    { label: "11-50 employees", value: "2" },
    { label: "51-100 employees", value: "3" },
    { label: "101-500 employees", value: "4" },
    { label: "500-1000 employees", value: "5" },
    { label: "1000-5000 employees", value: "6" },
    { label: "5000-10000 employees", value: "7" },
    { label: "10000+ employees", value: "8" },
  ];
  const handleSelect = (name, option) => {
    setUserData({ ...userData, [name]: option.label });
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
          Contact Person
        </h3>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-4 sm:gap-0 gap-0">
          <div className="flex flex-col lg:w-[50%] sm:w-full w-full">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              First Name
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData["first_name"] || ""}
                name="first_name"
                placeholder="First Name"
                required
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-[50%] sm:w-full w-full">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Last Name
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData["last_name"] || ""}
                name="last_name"
                placeholder="Last Name"
                required
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-4 sm:gap-0 gap-0">
          <div className="flex flex-col lg:w-[50%] sm:w-full w-full">
            <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
              Email
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData["email"] || ""}
                name="email"
                placeholder="sample@gmail.com"
                type="email"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-[50%] sm:w-full w-full">
            <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
              Contact Number
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData["contact_no"] || ""}
                name="contact_no"
                placeholder="0xxxxxxxxxx"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
          style={{ color: lightTheme.primary }}
        >
          Company Information
        </h3>
        <div className="flex flex-col">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
            Company Name
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["company_name"] || ""}
              name="company_name"
              placeholder="Company Name"
              required
              className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="flex flex-col mb-1">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase mb-1">
            Industry
          </div>
          <Dropdown
            options={industry}
            onSelect={(option) => handleSelect("industry", option)}
          />
        </div>
        <div className="flex flex-col mb-1">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase mb-1">
            Company Size
          </div>
          <Dropdown
            options={companySize}
            onSelect={(option) => handleSelect("company_size", option)}
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold h-6  text-gray-500 text-xs leading-8 uppercase">
            Company Address
          </div>
          <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
            <input
              onChange={handleChange}
              value={userData["company_address"] || ""}
              name="company_address"
              placeholder="Company Address"
              required
              className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInformation;

import React from "react";
import { Button, Dropdown } from "flowbite-react";
import { FaFilter, FaLocationArrow, FaBuilding } from "react-icons/fa";
import person from "../assets/persontyping.jpg";
const FilterAhead = () => {
  return (
    <div className="mt-16 flex flex-row max-h-screen bg-white justify-center">
      <div className="pt-10 w-1/2 flex flex-col gap-10 items-center">
        <h1 className="text-[#30526A] text-center text-5xl ">
          Let's find internship opportunities near you!
        </h1>

        <div className="px-16 flex flex-col gap-5 w-full">
          <Dropdown
            placement=""
            label="Job Category"
            className="bg-white "
            dismissOnClick={false}
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "gray",
              borderColor: "#30526A",
            }}
          >
            <Dropdown.Item>Advertising and Marketing</Dropdown.Item>
            <Dropdown.Item>Aerospace</Dropdown.Item>
            <Dropdown.Item>Agriculture</Dropdown.Item>
            <Dropdown.Item>Computer and Technology</Dropdown.Item>
            <Dropdown.Item>Entertainment</Dropdown.Item>
          </Dropdown>

          <div className="relative " style={{ width: "100%" }}>
            <input
              type="text"
              id="first_name"
              className="relative flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pl-8 pr-2.5 py-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a specific keyword"
              required
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            />
            <FaFilter className="absolute top-1/2 transform -translate-y-1/2 left-2 h-6 text-[#30526A]" />
          </div>
          <div className="relative " style={{ width: "100%" }}>
            <input
              type="text"
              id="first_name"
              className="relative flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pl-8 pr-2.5 py-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a specific keyword"
              required
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            />
            <FaLocationArrow className="absolute top-1/2 transform -translate-y-1/2 left-2 h-6 text-[#30526A]" />
          </div>

          <div className="relative " style={{ width: "100%" }}>
            <input
              type="text"
              id="first_name"
              className="relative flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg pl-8 pr-2.5 py-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for a specific keyword"
              required
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            />
            <FaBuilding className="absolute top-1/2 transform -translate-y-1/2 left-2 h-6 text-[#30526A]" />
          </div>

          <Dropdown
            label="Paid / Not Paid"
            className="bg-white"
            dismissOnClick={false}
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "gray",
              borderColor: "#30526A",
            }}
          >
            <Dropdown.Item>Paid</Dropdown.Item>
            <Dropdown.Item>Not Paid</Dropdown.Item>
          </Dropdown>

          <button
            style={{ width: "100%" }}
            type="button"
            class="text-white bg-[#5CDB5C] hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Green
          </button>
        </div>
      </div>
      <div>
        <img src={person} />
      </div>
    </div>
  );
};

export default FilterAhead;

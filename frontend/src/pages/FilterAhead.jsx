import React from "react";
import { Dropdown } from "flowbite-react";
import { FaBeer } from "react-icons/fa";
import person from "../assets/persontyping.jpg"
const FilterAhead = () => {
  return (
    <div className="mt-24 flex flex-row min-w-full">
      <div className="bg-blue-800">
        <Dropdown
          label="Job Category"
          className="bg-white"
          dismissOnClick={false}
        >
          <Dropdown.Item>Advertising and Marketing</Dropdown.Item>
          <Dropdown.Item>Aerospace</Dropdown.Item>
          <Dropdown.Item>Agriculture</Dropdown.Item>
          <Dropdown.Item>Computer and Technology</Dropdown.Item>
          <Dropdown.Item>Entertainment</Dropdown.Item>
        </Dropdown>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name <FaBeer />
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your location
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Preferred company
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <Dropdown
          label="Paid / Not Paid"
          className="bg-white"
          dismissOnClick={false}
        >
          <Dropdown.Item>Paid</Dropdown.Item>
          <Dropdown.Item>Not Paid</Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        <img src={person
        } />
      </div>
    </div>
  );
};

export default FilterAhead;

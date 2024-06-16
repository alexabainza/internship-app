import React from "react";
import { lightTheme } from "../../styles/theme";
import { StepperContext } from "../../context/StepperContext";
import { useContext } from "react";

const PersonalInformation = () => {
  const { applicationData, setApplicationData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({ ...applicationData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2 text-center">
        <h2
          className="text-4xl font-semibold"
          style={{ color: lightTheme.primary }}
        >
          Personal Information
        </h2>
        <p>Fill up the fields as honestly as possible</p>
      </div>
      <form className="">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col flex-">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Last Name
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.last_name}
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                First Name
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.first_name}
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                MI
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.middle_initial}
                  name="middle_initial"
                  placeholder="Middle Initial"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Gender
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.gender}
                  name="gender"
                  placeholder="Gender"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Nationality
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.nationality}
                  name="nationality"
                  placeholder="Nationality"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Birth date
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.birthdate}
                  name="birthdate"
                  placeholder="Birth date"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Address
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.address}
                  name="address"
                  placeholder="Address"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col flex-4">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Gender
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.gender}
                  name="gender"
                  placeholder="Gender"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-4">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Contact Number
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.contact_no}
                  name="contact_no"
                  placeholder="Contact Number"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Email Address
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.email_address}
                  name="email_address"
                  placeholder="Email Address"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Facebook Link
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.facebook_link}
                  name="facebook_link"
                  placeholder="Facebook Link"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                School
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.school}
                  name="school"
                  placeholder="School"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Course and Year
              </div>
              <div className="my-1 flex  rounded-md">
                <input
                  onChange={handleChange}
                  value={applicationData.course_year}
                  name="course_year"
                  placeholder="Course and Year"
                  required
                  className="py-2 px-4 appearance-none outline-none border-none w-full text-gray-800 bg-[#EDEDF0] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;

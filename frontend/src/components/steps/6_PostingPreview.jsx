import React, { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
import { lightTheme } from "../../styles/theme";
import {
  FaAccusoft,
  FaArrowsAltV,
  FaAtlassian,
  FaHollyBerry,
  FaMoneyBill,
  FaNetworkWired,
  FaRegClock,
  FaSchool,
} from "react-icons/fa";
const PostingPreview = () => {
  const { userData } = useContext(StepperContext);
  let internshipTypeMessage = "";
  if (userData.academic_requirements && !userData.voluntary_internship) {
    internshipTypeMessage = "For academic requirements only";
  } else if (userData.voluntary_internship && !userData.academic_requirements) {
    internshipTypeMessage = "Voluntary internships";
  } else {
    internshipTypeMessage =
      "Accepting both academic requirements and voluntary internships";
  }

  const renderParagraphs = (text) => {
    if (!text) return null;
    const paragraphs = text.split("\n\n");
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="my-5 lg:text-lg sm:text-md text-md">
        {paragraph}
      </p>
    ));
  };

  const renderRequirements = (text) => {
    if (!text) return null;
    const reqs = text.split(".").filter((req) => req.trim() !== "");
    return reqs.map((req, index) => (
      <li key={index} className="my-5">
        {req}
      </li>
    ));
  };

  return (
    <div className="flex flex-col">
      <h1
        style={{ color: lightTheme.primary }}
        className="lg:text-4xl sm:text-2xl text-2xl font-bold"
      >
        {userData.job_title}
      </h1>
      <h3 className="lg:text-xl md:text-lg sm:text-md text-md mb-4 mt-1">
        <span className="font-medium">{userData.company_name}. </span>
        {userData.specific_address}
      </h3>
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex flex-row gap-4">
          <div className="flex items-center">
            <FaMoneyBill className="  text-[#056480]" width={60} />
          </div>
          <p className="capitalize lg:text-lg sm:text-md text-md">
            {userData.internship_type} internship
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex items-center">
            <FaRegClock className=" text-[#056480]" />
          </div>
          <p className="lg:text-lg sm:text-md text-md">Actively hiring</p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex items-center">
            <FaSchool className=" text-[#056480]" />
          </div>
          <p className="lg:text-lg sm:text-md text-md">
            {internshipTypeMessage}
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex items-center">
            <FaHollyBerry className="text-[#056480]" />
          </div>
          <p className="capitalize lg:text-lg sm:text-md text-md">
            {userData.internship_setup}
          </p>
        </div>
      </div>
      <div>
        <p
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-1"
          style={{ color: lightTheme.primary }}
        >
          {" "}
          Role Description
        </p>
        {renderParagraphs(userData.role_description)}
        <p
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
          style={{ color: lightTheme.primary }}
        >
          {" "}
          Requirements
        </p>
        <ul className="list-disc ml-6 lg:text-lg sm:text-md text-md">
          {renderRequirements(userData.requirements)}
        </ul>
        <p
          className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
          style={{ color: lightTheme.primary }}
        >
          About the Company
        </p>
        {renderParagraphs(userData.company_description)}
      </div>
    </div>
  );
};

export default PostingPreview;

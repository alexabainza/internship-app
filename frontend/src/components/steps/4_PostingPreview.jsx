import React, { useContext, useEffect, useState } from "react";
import { StepperContext } from "../../context/StepperContext";
import { useSelector } from "react-redux";
import { lightTheme } from "../../styles/theme";
import {
  FaHollyBerry,
  FaMoneyBill,
  FaRegClock,
  FaSchool,
} from "react-icons/fa";
import {
  renderParagraphs,
  renderRequirements,
} from "../../../../backend/utils/rendering";

const PostingPreview = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [companyData, setCompanyData] = useState({});
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/company/${currentUser.company_username}`);
        const data = await res.json();
        if (data.success) {
          setCompanyData(data.companyDetails);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1
        style={{ color: lightTheme.primary }}
        className="lg:text-4xl sm:text-2xl text-2xl font-bold"
      >
        {userData.job_title}
      </h1>
      <h3 className="lg:text-xl md:text-lg sm:text-md text-md mb-4 mt-1">
        <span className="font-medium">{companyData.company_name}. </span>
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
        {renderParagraphs(companyData.company_description)}
      </div>
    </div>
  );
};

export default PostingPreview;

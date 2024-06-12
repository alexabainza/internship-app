import React, { useEffect, useState } from "react";
import { lightTheme } from "../../styles/theme";
import { useSelector } from "react-redux";
import { FaGlobe, FaPhone, FaTelegram } from "react-icons/fa";
import {
  renderParagraphs,
  renderRequirements,
} from "../../../../backend/utils/rendering";
import { Link } from "react-router-dom";
const AboutCompany = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(
          `/api/company/${currentUser.company_username}`
        );
        const data = await response.json();
        if (data.success) {
          setCompanyData(data.companyDetails);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchCompanyData();
  }, [currentUser.company_username]);
  if (!companyData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white min-h-screen pt-28 lg:px-20 md:px-12 sm:px-8 px-8 flex flex-col gap-6">
      <div className="flex gap-6">
        <img
          src={
            companyData.company_logo
              ? companyData.company_logo
              : "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
          }
          className="h-28 w-28 object-cover"
        />
        <div className="flex flex-col gap-2 justify-center items-start">
          <p
            className="lg:text-4xl  sm:text-3xl text-3xl font-bold capitalize"
            style={{ color: lightTheme.secondary }}
          >
            {companyData.company_name}
          </p>
          <div className="flex flex-col gap-0">
            <p className="lg:text-xl sm:text-md text-md">
              {companyData.company_address}
            </p>
            <p className="lg:text-xl sm:text-md text-md">
              {companyData.company_size}
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:gap-4 md:gap-3 sm:gap-2 gap-2 flex-wrap">
        <p
          className="text-sm border-2 border-opacity-50 py-1 px-6 rounded-full"
          style={{ color: lightTheme.primary, borderColor: lightTheme.primary }}
        >
          {companyData.industry}
        </p>
        <Link
          to="/edit-company-profile"
          className="text-sm border-2 border-opacity-50 py-1 px-6 rounded-full text-[#056480] hover:bg-[#056480] hover:text-white"
          style={{ borderColor: lightTheme.primary }}
        >
          Edit Company Profile
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1
            className="text-2xl font-bold"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            About the Company
          </h1>
          {renderParagraphs(companyData.company_description)}
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <h1
            className="text-2xl font-bold"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            Contact Us
          </h1>
          {companyData.company_contact_no ? (
            <div className="flex gap-3 items-center">
              <FaPhone color={lightTheme.primary} size={20} />
              <p>{companyData.company_contact_no}</p>
            </div>
          ) : (
            ""
          )}
          {companyData.company_email ? (
            <div className="flex gap-3 items-center">
              <FaTelegram color={lightTheme.primary} size={20} />
              <p>{companyData.company_email}</p>
            </div>
          ) : (
            ""
          )}
          {companyData.company_website ? (
            <div className="flex gap-3 items-center">
              <FaGlobe color={lightTheme.primary} size={20} />
              <p>{companyData.company_website}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex pb-10 lg:gap-10 md:gap-5 sm:gap-2 gap-2 lg:justify-center sm:justify-start justify-start flex-wrap">
          <button
            className="uppercase text-white py-2 px-8 rounded-lg text-md"
            style={{ backgroundColor: lightTheme.primary }}
          >
            View Applicants
          </button>
          <button
            className="uppercase text-white py-2 px-8 rounded-lg text-md"
            style={{ backgroundColor: lightTheme.primary }}
          >
            Post An Opening
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

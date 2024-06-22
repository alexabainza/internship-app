import React, { useEffect, useState } from "react";
import { lightTheme } from "../../styles/theme";
import { useSelector } from "react-redux";
import { FaGlobe, FaPhone, FaTelegram, FaPlusCircle } from "react-icons/fa";
import { renderParagraphs } from "../../../../backend/utils/rendering";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          currentUser.role === "Company"
            ? `/api/company/${currentUser.company_username}`
            : `/api/user/${currentUser.username}`
        );
        const data = await response.json();
        if (data.success) {
          setUserData(
            currentUser.role === "Company"
              ? data.companyDetails
              : data.userDetails
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentUser.company_username, currentUser.username, currentUser.role]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white min-h-screen pt-28 lg:px-20 md:px-12 sm:px-8 px-8 flex flex-col gap-6">
      {currentUser.role === "Company" ? (
        <>
          <div className="flex gap-6">
            <img
              src={
                userData.company_logo
                  ? userData.company_logo
                  : "https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
              }
              className="h-28 w-28 object-cover"
              alt="Company Logo"
            />
            <div className="flex flex-col gap-2 justify-center items-start">
              <p
                className="lg:text-4xl  sm:text-3xl text-3xl font-bold capitalize"
                style={{ color: lightTheme.secondary }}
              >
                {userData.company_name}
              </p>
              <div className="flex flex-col gap-0">
                <p className="lg:text-xl sm:text-md text-md">
                  {userData.company_address}
                </p>
                <p className="lg:text-xl sm:text-md text-md">
                  {userData.company_size}
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:gap-4 md:gap-3 sm:gap-2 gap-2 flex-wrap">
            <p
              className="text-sm border-2 border-opacity-50 py-1 px-6 rounded-full"
              style={{
                color: lightTheme.primary,
                borderColor: lightTheme.primary,
              }}
            >
              {userData.industry}
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
              {renderParagraphs(userData.company_description)}
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
              {userData.company_contact_no && (
                <div className="flex gap-3 items-center">
                  <FaPhone color={lightTheme.primary} size={20} />
                  <p>{userData.company_contact_no}</p>
                </div>
              )}
              {userData.company_email && (
                <div className="flex gap-3 items-center">
                  <FaTelegram color={lightTheme.primary} size={20} />
                  <p>{userData.company_email}</p>
                </div>
              )}
              {userData.company_website && (
                <div className="flex gap-3 items-center">
                  <FaGlobe color={lightTheme.primary} size={20} />
                  <p>{userData.company_website}</p>
                </div>
              )}
            </div>
            <div className="flex pb-10 lg:gap-10 md:gap-5 sm:gap-2 gap-2 lg:justify-center sm:justify-start justify-start flex-wrap">
              <button
                className="uppercase text-white py-2 px-8 rounded-lg text-md"
                style={{ backgroundColor: lightTheme.primary }}
              >
                View Applicants
              </button>
              <Link
                to="/create-post"
                className="uppercase text-white py-2 px-8 rounded-lg text-md"
                style={{ backgroundColor: lightTheme.primary }}
              >
                Post An Opening
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative">
            <div className="rounded-lg border-2 h-36 bg-gray-200"></div>
            <div className="absolute bottom-0 left-4 transform translate-y-1/2 rounded-full border-2 w-28 h-28 object-cover overflow-hidden">
              <img src={userData.profile_pic} />
            </div>
          </div>
          <div className="relative lg:left-4 sm:left-2 left-2 mt-16">
            <h2
              className="text-3xl font-bold capitalize"
              style={{ color: lightTheme.primary }}
            >
              {userData.first_name} {userData.last_name}
            </h2>
            <h3>Studies at {userData.school}</h3>
            <h3>{userData.course}</h3>
            <br />
            <h3 className="mb-2">I am currently focusing on:</h3>
            <div className="flex flex-wrap gap-2 items-center">
              <p
                className="text-sm inline-block border-2 border-opacity-50 py-1 px-6 rounded-full"
                style={{
                  color: lightTheme.primary,
                  borderColor: lightTheme.primary,
                }}
              >
                Artificial Intellience
              </p>{" "}
              <p
                className="text-sm inline-block border-2 border-opacity-50 py-1 px-6 rounded-full"
                style={{
                  color: lightTheme.primary,
                  borderColor: lightTheme.primary,
                }}
              >
                Machine Learning
              </p>{" "}
              <p
                className="text-sm inline-block border-2 border-opacity-50 py-1 px-6 rounded-full"
                style={{
                  color: lightTheme.primary,
                  borderColor: lightTheme.primary,
                }}
              >
                Python{" "}
              </p>
              <FaPlusCircle size={28} color={lightTheme.primary} />
            </div>
            <div className="flex flex-wrap mt-4">
              <Link
                to="/applications-list"
                className="uppercase text-sm border-2 px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: lightTheme.primary }}
              >
                View your applications
              </Link>
              <p
                className="uppercase text-sm border-2 px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: lightTheme.primary }}
              >
                Browse Internships
              </p>
              <p
                className="uppercase text-sm border-2 px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: lightTheme.primary }}
              >
                View Saved Jobs
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutCompany;

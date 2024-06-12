import React, { useEffect, useState } from "react";
import CompanyPostings from "../../components/CompanyPostings";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CompanyDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    const fetchCompanyPostings = async () => {
      try {
        const response = await fetch(
          `/api/company/${currentUser._id}/getPostings`
        );
        const data = await response.json();
        if (data.success) {
          setPostings(data.postings);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchCompanyPostings();
  }, []);
  return (
    <div className="pt-24 min-h-screen shadow-xl pb-2 lg:mx-8 sm:mx-4 mx-4 overflow-auto">
      <div className="flex justify-between items-center">
        <p className="text-white text-4xl mb-4 font-semibold">
          Company Dashboard
        </p>
        <Link
          to="/create-post"
          type="button"
          class="text-blue-800 bg-gray-100 hover:bg-blue-200 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Create a new posting
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {postings.length > 0 ? (
          postings.map((posting, index) => (
            <CompanyPostings posting={posting} key={index} />
          ))
        ) : (
          <p className="text-center text-white font-semibold text-2xl">
            You have no postings yet!
          </p>
        )}
      </div>
    </div>
  );
};

export default CompanyDashboard;

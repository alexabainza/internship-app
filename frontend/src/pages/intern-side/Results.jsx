import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import JobResults from "../../components/JobResults";
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
import { Link } from "react-router-dom";
const Results = () => {
  const [postings, setPostings] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  let internshipTypeMessage = "";
  if (selectedJob) {
    if (
      selectedJob.academic_requirements &&
      !selectedJob.voluntary_internship
    ) {
      internshipTypeMessage = "Accepting for academic requirements only";
    } else if (
      selectedJob.voluntary_internship &&
      !selectedJob.academic_requirements
    ) {
      internshipTypeMessage = "Accepting Voluntary internships only";
    } else {
      internshipTypeMessage =
        "Accepting both academic requirements and voluntary internships";
    }
  }

  useEffect(() => {
    const fetchPostings = async () => {
      try {
        const response = await fetch(`/api/posting/get-all-postings`);
        const data = await response.json();
        if (data.success) {
          setPostings(data.postings);
          if (data.postings.length > 0) {
            setSelectedJob(data.postings[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchPostings();
  }, []);
  return (
    <div className="pt-16 min-h-screen w-full flex lg:flex-row sm:flex-col flex-col">
      <div className="pt-10 px-10 bg-white w-1/3 overflow-y-auto custom-scrollbar">
        <form className="max-w-screen mx-auto" style={{ width: "100%" }}>
          <div className="relative">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              style={{ width: "100%" }}
            >
              <svg
                className="w-4 h-4 text-[#30526A]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for internships"
              required
              style={{ borderColor: "#30526A" }}
            />
          </div>
        </form>
        <h3 className="text-2xl my-5">
          Search results for{" "}
          <span className="font-semibold">"internships"</span>
        </h3>

        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-5 w-1/5">
            <Dropdown
              label="Sort by"
              className="bg-white text-start"
              dismissOnClick={false}
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            >
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-col w-1/5">
            <Dropdown
              label="Within"
              className="bg-white text-start"
              dismissOnClick={false}
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            >
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
            </Dropdown>
          </div>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200  rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 font-medium text-gray-900 dark:text-gray-300 text-md">
              Alerts on
            </span>
          </label>
        </div>
        <div className="my-6 flex flex-col gap-4">
          {postings.map((posting) => (
            <JobResults
              key={posting._id}
              posting={posting}
              onClick={() => {
                setSelectedJob(posting);
              }}
              selected={selectedJob && selectedJob._id === posting._id}
            />
          ))}
        </div>
      </div>
      <div className="bg-white text-slate-800 w-2/3 p-16 flex flex-col overflow-y-auto custom-scrollbar">
        {selectedJob ? (
          <>
            <h1 className="text-5xl font-semibold mb-3 text-[#056480]">
              {selectedJob.job_title}
            </h1>
            <p className="text-xl mb-8">
              {selectedJob.company_id.company_name}.{" "}
              {selectedJob.specific_address}
            </p>
            <div className="flex flex-col gap-2 mb-12">
              <div className="flex flex-row gap-4">
                <FaMoneyBill className="text-2xl text-[#056480]" />
                <p className="capitalize">
                  {selectedJob.internship_type} internship
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <FaRegClock className="text-2xl text-[#056480]" />
                <p>Actively hiring</p>
              </div>
              <div className="flex flex-row gap-4">
                <FaSchool className="text-2xl text-[#056480]" />
                <p> {internshipTypeMessage}</p>
              </div>
              <div className="flex flex-row gap-4">
                <FaHollyBerry className="text-2xl text-[#056480]" />
                <p className="capitalize">{selectedJob.internship_setup}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl mb-2 text-[#056480]">
                Role Description
              </p>
              <p className="my-5">
                {renderParagraphs(selectedJob.role_description)}
              </p>
              <p className="font-semibold text-xl my-5 text-[#056480]">
                Requirements
              </p>
              <ul className="list-disc ml-6 mt-2">
                {renderRequirements(selectedJob.requirements)}{" "}
              </ul>
              <p className="font-semibold text-xl my-5 text-[#056480]">
                About the Company
              </p>
              <p>{selectedJob.company_id.company_description}</p>
            </div>
            <div className="flex flex-row justify-center mt-16">
              <Link
                to="/application"
                type="button"
                className="text-white bg-[#056480] hover:bg-[#056380d5] w-1/3 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Apply now
              </Link>
              <button
                type="button"
                className="text-white bg-[#056480] hover:bg-[#056380d5] w-1/3 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Save for later
              </button>
            </div>
          </>
        ) : (
          <p>Please select a job to see the details</p>
        )}
      </div>
    </div>
  );
};

export default Results;

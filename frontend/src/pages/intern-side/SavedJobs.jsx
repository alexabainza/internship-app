import React, { useEffect, useState } from "react";
import JobResults from "../../components/JobResults";
import logo1 from "../../assets/logo1.jpg";
import {
  renderParagraphs,
  renderRequirements,
} from "../../../../backend/utils/rendering";

import {
  FaHollyBerry,
  FaMoneyBill,
  FaRegClock,
  FaSchool,
} from "react-icons/fa";
const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const res = await fetch(`/api/savejob/get-saved-jobs`);
        const data = await res.json();
        if (data.success) {
          setSavedJobs(data.saved_jobs);
          console.log(data.saved_jobs);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchSavedJobs();
  }, []);
  let internshipTypeMessage = "";
  if (selectedJob) {
    if (
      selectedJob.job_id.academic_requirements &&
      !selectedJob.job_id.voluntary_internship
    ) {
      internshipTypeMessage = "Accepting for academic requirements only";
    } else if (
      selectedJob.job_id.voluntary_internship &&
      !selectedJob.job_id.academic_requirements
    ) {
      internshipTypeMessage = "Accepting Voluntary internships only";
    } else {
      internshipTypeMessage =
        "Accepting both academic requirements and voluntary internships";
    }
  }

  return (
    <div className="pt-28 min-h-screen shadow-xl pb-2 bg-white lg:px-16 md:px-8 sm:px-2 px-2 overflow-auto flex">
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
        <h3 className="text-2xl my-5">Your saved jobs</h3>

        <div className="my-6 flex flex-col gap-4">
          {savedJobs.map((saved_job) => (
            <div
              className="h-full"
              key={saved_job._id}
              onClick={() => {
                setSelectedJob(saved_job);
                console.log(saved_job);
              }}
            >
              <a
                href="#"
                className={`flex flex-col items-center  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-blue-200 ${
                  selectedJob ? "bg-blue-100 text-white" : "bg-white text-black"
                }`}
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={logo1}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-0.5 text-xl font-bold tracking-tight text-[#056480]">
                    {saved_job.job_id.job_title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {saved_job.job_id.company_id.company_name}
                  </p>
                  <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {saved_job.job_id.company_id.city},{" "}
                    {saved_job.job_id.company_id.province}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-slate-800 w-2/3 p-16 flex flex-col overflow-y-auto custom-scrollbar">
        {selectedJob ? (
          <>
            <h1 className="text-5xl font-semibold mb-3 text-[#056480]">
              {selectedJob.job_id.job_title}
            </h1>
            <p className="text-xl mb-8">
              {selectedJob.job_id.company_id.company_name}.{" "}
              {selectedJob.job_id.specific_address}
            </p>
            <div className="flex flex-col gap-2 mb-12">
              <div className="flex flex-row gap-4">
                <FaMoneyBill className="text-2xl text-[#056480]" />
                <p className="capitalize">
                  {selectedJob.job_id.internship_type} internship
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
                <p className="capitalize">
                  {selectedJob.job_id.internship_setup}
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl mb-2 text-[#056480]">
                Role Description
              </p>
              {renderParagraphs(selectedJob.job_id.role_description)}
              <p className="font-semibold text-xl my-5 text-[#056480]">
                Requirements
              </p>
              <ul className="list-disc ml-6 mt-2">
                {renderRequirements(selectedJob.job_id.requirements)}{" "}
              </ul>
              <p className="font-semibold text-xl my-5 text-[#056480]">
                About the Company
              </p>
              <p>{selectedJob.job_id.company_id.company_description}</p>
            </div>
          </>
        ) : (
          <p>Please select a job to see the details</p>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;

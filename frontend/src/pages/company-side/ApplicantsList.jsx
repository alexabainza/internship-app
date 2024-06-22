import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApplicantBox from "../../components/ApplicantBox";
import { lightTheme } from "../../styles/theme";
import {
  formatDate,
  formatQuestions,
} from "../../../../backend/utils/rendering";
const ApplicantsList = () => {
  const { job_id } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch(`/api/company/${job_id}/applicants`);
        const data = await response.json();
        if (data.success) {
          setApplicants(data.applicants);
          setJobTitle(data.job_title);

          if (data.applicants.length > 0) {
            setSelectedApplicant(data.applicants[0]);
            console.log("applicants", data.applicants);
          }
        }
      } catch (error) {
        console.error("Error fetching applicants data:", error);
      }
    };
    fetchApplicants();
  }, []);
  return (
    <div className="flex bg-white min-h-screen pt-20">
      <div className="pt-10 px-10 bg-white w-1/3 overflow-y-auto border-2">
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
          Applicants for <span className="font-semibold">"{jobTitle}"</span>
        </h3>
        <div className="flex flex-col gap-1">
          {" "}
          {applicants.map((applicant, index) => (
            <ApplicantBox
              key={applicant._id}
              applicant={applicant}
              onClick={() => {
                setSelectedApplicant(applicant);
              }}
              selected={
                selectedApplicant && selectedApplicant._id === applicant._id
              }
            />
          ))}
        </div>
      </div>
      <div className="bg-white text-slate-800 w-2/3 p-16 flex flex-col overflow-y-auto custom-scrollbar">
        {selectedApplicant ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold mb-3 text-[#056480]">
              {selectedApplicant.first_name} {selectedApplicant.last_name}
            </h1>
            <section>
              <h2
                className="uppercase text-xl font-semibold"
                style={{ color: lightTheme.primary }}
              >
                Basic Information
              </h2>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Name:</span>
                {selectedApplicant.last_name}, {selectedApplicant.first_name}{" "}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Gender:</span>
                {selectedApplicant.gender}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Nationality:</span>
                {selectedApplicant.nationality}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Birthdate:</span>
                {
                  // formatDate
                }
                {selectedApplicant.nationality}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Address:</span>
                {
                  // formatDate
                }
                {selectedApplicant.address}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Civil Status</span>
                {selectedApplicant.address}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">School</span>
                {selectedApplicant.address}
              </p>{" "}
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Civil Status</span>
                {selectedApplicant.address}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Course & Year</span>
                {selectedApplicant.course_year}
              </p>
            </section>
            <section>
              <h2
                className="uppercase text-xl font-semibold"
                style={{ color: lightTheme.primary }}
              >
                Contact Details
              </h2>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Email:</span>
                {selectedApplicant.email_address}{" "}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Contact Number:</span>
                {selectedApplicant.contact_no}
              </p>
              <p className="flex gap-2">
                <span className="uppercase font-semibold">Facebook Link:</span>
                {selectedApplicant.facebook_link}
              </p>
            </section>
            <section>
              <h2
                className="uppercase text-xl font-semibold"
                style={{ color: lightTheme.primary }}
              >
                Attachments{" "}
              </h2>
            </section>
            <section>
              <h2
                className="uppercase text-xl font-semibold"
                style={{ color: lightTheme.primary }}
              >
                Getting to Know You{" "}
              </h2>
              <br />
              {formatQuestions(selectedApplicant.job_id.questions).map(
                (question, index) => (
                  <p key={index} className="font-semibold">
                    {index + 1}. {question}
                    <br />
                    <span className="font-light">
                      {selectedApplicant.responses[index]}
                      <br />
                    </span>
                    <br />
                  </p>
                )
              )}
            </section>
          </div>
        ) : (
          <p>Please select a job to see the details</p>
        )}
      </div>
    </div>
  );
};

export default ApplicantsList;

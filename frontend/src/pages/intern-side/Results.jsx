import React, { useEffect, useState } from "react";
import { lightTheme } from "../../styles/theme";
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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Results = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [postings, setPostings] = useState([]);
  const [queryParams, setQueryParams] = useState({
    searchTerm: "",
    type: "all",
    setup: "all",
    sort_order: "createdAt",
    order: "desc",
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const sortOptions = [
    { label: "A-Z", value: "alph_asc" },
    { label: "Z-A", value: "alph_desc" },
    { label: "Date Created (Ascending)", value: "createdAt_asc" },
    { label: "Date Created (Descending)", value: "createdAt_desc" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(queryParams);
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", queryParams.searchTerm);
    urlParams.set("type", queryParams.type);
    urlParams.set("setup", queryParams.setup);
    urlParams.set("sort", queryParams.sort_order);
    urlParams.set("order", queryParams.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const setupFromUrl = urlParams.get("setup");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      setupFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setQueryParams({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        setup: setupFromUrl || "all",
        sort: sortFromUrl || "createdAt",
        order: orderFromUrl || "desc",
      });
    }
    const fetchJobs = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/posting/get?${searchQuery}`);
      const data = await res.json();
      setPostings(data);
      setLoading(false);
    };
    fetchPostings();
  }, [location.search]);
  const handleChange = (e) => {
    if (e.target.id === "paid" || e.target.id === "unpaid") {
      setQueryParams({ ...queryParams, type: e.target.id });
    } else if (
      e.target.id === "remote" ||
      e.target.id === "hybrid" ||
      e.target.id === "onsite"
    ) {
      setQueryParams({ ...queryParams, setup: e.target.id });
    } else if (e.target.id === "search") {
      setQueryParams({ ...queryParams, searchTerm: e.target.value });
    } else if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "createdAt";
      const order = e.target.value.split("_")[1] || "desc";

      setQueryParams({ ...queryParams, sort_order: sort, order });
    }
  };
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

  const isJobSaved =
    selectedJob &&
    savedJobs.some((job) => {
      return (
        job.job_id._id === selectedJob._id && currentUser._id === job.user_id
      );
    });
  const handleSaveJob = async (job, action) => {
    console.log(action, " triggered");
    console.log("selected job id", selectedJob._id, "job id", job._id);
    savedJobs.includes(selectedJob._id) ? "delete" : "save";

    let endpoint = `/api/savejob/${job._id}/save`;
    let method = "POST";
    if (action === "delete") {
      endpoint = `/api/savejob/${job._id}/delete_saved`;
      method = "DELETE";
    }
    try {
      const res = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success === false) {
        setSaveMessage(
          action === "save" ? "Error saving job" : "Error deleting job"
        );
      }
      setSaveMessage(
        action === "save"
          ? "Successfully saved job"
          : "Successfully deleted job"
      );
      console.log("Successfully saved or deleted job");
    } catch (error) {
      console.error(error);
    }
    setSavedJobs((prevSavedJobs) => {
      if (prevSavedJobs.includes(job._id)) {
        return prevSavedJobs.filter((id) => id !== job._id);
      } else {
        return [...prevSavedJobs, job._id];
      }
    });
  };
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
    const fetchSavedJobs = async () => {
      try {
        const response = await fetch("/api/savejob/get-saved-jobs");
        const data = await response.json();
        if (data.success) {
          setSavedJobs(data.saved_jobs);
          console.log("Saved jobs", data.saved_jobs);
        }
      } catch (error) {
        console.error("Error fetching saved jobs:", error);
      }
    };
    fetchSavedJobs();
    fetchPostings();
  }, []);
  return (
    <div className="pt-16 min-h-screen w-full flex lg:flex-row md:flex-row sm:flex-row flex-col">
      <div className="pt-10 px-10  bg-white w-1/3 overflow-y-auto custom-scrollbar">
        <form
          onSubmit={handleSearch}
          className="max-w-screen mx-auto flex flex-col gap-1"
          style={{ width: "100%" }}
        >
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
              id="search"
              onChange={handleChange}
              className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for internships"
              required
              style={{ borderColor: "#30526A" }}
            />
          </div>
          <div className="flex gap-6 border-2 px-4 py-2 rounded-md">
            <p className="text-sm">Internship type</p>

            <div className="flex items-center">
              <input
                id="paid"
                onChange={handleChange}
                type="radio"
                value="paid"
                name="internship_type"
                className="w-3 h-3 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 lg:text-md sm:text-sm text-xs font-regular dark:text-gray-300"
              >
                Paid
              </label>
            </div>
            <div className="flex items-center ">
              <input
                id="unpaid"
                onChange={handleChange}
                type="radio"
                value="unpaid"
                name="internship_type"
                className="w-3 h-3 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 lg:text-md sm:text-sm text-xs font-regular dark:text-gray-300"
              >
                Unpaid
              </label>
            </div>
          </div>
          <div className="flex gap-5 border-2 px-4 py-2 rounded-md">
            <div className="flex items-center ">
              <input
                id="remote"
                onChange={handleChange}
                type="radio"
                value="remote"
                name="internship_setup"
                className="w-3 h-3 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 lg:text-md sm:text-sm text-xs font-regular dark:text-gray-300"
              >
                Remote{" "}
              </label>
            </div>
            <div className="flex items-center ">
              <input
                id="onsite"
                onChange={handleChange}
                type="radio"
                value="onsite"
                name="internship_setup"
                className="w-3 h-3 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 lg:text-md sm:text-sm text-xs font-regular dark:text-gray-300"
              >
                On-site{" "}
              </label>
            </div>
            <div className="flex items-center ">
              <input
                id="hybrid"
                onChange={handleChange}
                type="radio"
                value="hybrid"
                name="internship_setup"
                className="w-3 h-3 text-[#056480] bg-gray-100 border-[#056480] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 lg:text-md sm:text-sm text-xs font-regular dark:text-gray-300"
              >
                Hybrid
              </label>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border rounded-lg py-1 px-2"
            >
              {sortOptions.map((opt) => (
                <option value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="px-6 py-2 rounded-md text-white bg-[#056480] hover:bg-[#3980b2]"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>

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
              {renderParagraphs(selectedJob.role_description)}
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
                to={`/application/${selectedJob._id}`}
                type="button"
                className="text-white bg-[#056480] hover:bg-[#056380d5] w-1/3 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Apply now
              </Link>
              <button
                type="button"
                onClick={() =>
                  handleSaveJob(selectedJob, isJobSaved ? "delete" : "save")
                }
                className="text-white bg-[#056480] hover:bg-[#056380d5] w-1/3 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {isJobSaved ? "Delete from saved jobs" : "Save for later"}{" "}
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

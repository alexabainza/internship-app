import React, { useEffect, useState } from "react";
import PersonalInformation from "../../components/application_steps/1PersonalInformation";
import UploadRequirements from "../../components/application_steps/2UploadRequirements";
import GTKY from "../../components/application_steps/3GTKY";
import StepperControl from "../../components/StepperControl";
import StepperHorizontal from "../../components/StepperHorizontal";
import { StepperContext } from "../../context/StepperContext";
import { useContext } from "react";
import Modal from "../../components/Modal";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Applying = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { job_id } = useParams();
  const [jobData, setJobData] = useState({});
  const [applicationData, setApplicationData] = useState({
    last_name: "",
    first_name: "",
    middle_initial: "",
    gender: "",
    nationality: "",
    birthdate: "",
    address: "",
    contact_no: "",
    email_address: "",
    facebook_link: "",
    school: "",
    course_year: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();

  const steps = [
    "Personal Information",
    "Upload Requirements",
    "Getting to Know You",
  ];

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`/api/posting/${job_id}/get-one-posting`);
        const data = await response.json();
        if (data.success) {
          setJobData(data.post);
        }
      } catch (error) {
        console.log("error fetching data: ", error);
      }
    };
    fetchJobData();
  }, [job_id]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <UploadRequirements />;
      case 3:
        return <GTKY jobInfo={jobData} />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }

    if (currentStep === steps.length && direction === "next") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`/api/application/${job_id}/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
      } else {
        setShowModal(true);
        navigate("/applications-list");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="pt-28 min-h-screen shadow-xl pb-2 bg-white lg:px-16 md:px-8 sm:px-2 px-2 overflow-auto">
      <div className="">
        <StepperHorizontal steps={steps} currentStep={currentStep} />
      </div>
      <div className="lg:px-10 sm:px-4 px-4 ">
        <StepperContext.Provider
          value={{
            applicationData,
            setApplicationData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
        <div className="">
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Applying;

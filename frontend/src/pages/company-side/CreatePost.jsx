import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import PostingGuidelines from "../../components/steps/1_PostingGuidelines.jsx";
import GeneralInformation from "../../components/steps/2_GeneralInformation.jsx";
import { StepperContext } from "../../context/StepperContext";
import JobDetails from "../../components/steps/3_JobDetails.jsx";
import PostingPreview from "../../components/steps/4_PostingPreview.jsx";
import {
  postingFailure,
  postingStart,
  postingSuccess,
} from "../../redux/user/userSlice.js";
const CreatePost = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Posting Guidelines",
    "General Information",
    "Job Details",
    "Posting Preview",
  ];
  const [userData, setUserData] = useState({
    company_id: currentUser._id,
    voluntary_internship: false,
    academic_requirements: false,
  });
  const [finalData, setFinalData] = useState([]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PostingGuidelines />;
      case 2:
        return <GeneralInformation />;
      case 3:
        return <JobDetails />;
      case 4:
        return <PostingPreview />;
      default:
    }
  };
  const handleSubmit = async () => {
    dispatch(postingStart());
    try {
      const res = await fetch(`/api/company/create-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(postingFailure(data.message));
        return;
      }
      dispatch(postingSuccess(data));
      navigate("/company-dashboard");
    } catch (error) {
      dispatch(postingFailure(error.message));
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

  return (
    <div className="pt-28 min-h-screen shadow-xl pb-2 bg-white lg:px-8 md:px-4 sm:px-2 px-2 overflow-auto">
      <div className="container flex flex-row items-start gap-4">
        <div className="lg:px-10 sm:px-4 px-4 lg:w-3/4 md:w-full sm:w-full">
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
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
        <div className="">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

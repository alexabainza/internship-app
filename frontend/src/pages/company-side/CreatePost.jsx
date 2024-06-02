import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import CompanyInformation from "../../components/steps/1_CompanyInformation";
import PostingGuidelines from "../../components/steps/2_PostingGuidelines";
import CompanyProfile from "../../components/steps/3_CompanyProfile";
import GeneralInformation from "../../components/steps/4_GeneralInformation";
import { StepperContext } from "../../context/StepperContext";
import JobDetails from "../../components/steps/5_JobDetails";
import PostingPreview from "../../components/steps/6_PostingPreview";

const CreatePost = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Company Information",
    "Posting Guidelines",
    "Company Profile",
    "General Information",
    "Job Details",
    "Posting Preview",
  ];
  const [userData, setUserData] = useState([]);

  const [finalData, setFinalData] = useState([]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <CompanyInformation />;
      case 2:
        return <PostingGuidelines />;
      case 3:
        return <CompanyProfile />;
      case 4:
        return <GeneralInformation />;
      case 5:
        return <JobDetails />;
      case 6:
        return <PostingPreview />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // Check if the steps are within the bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
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

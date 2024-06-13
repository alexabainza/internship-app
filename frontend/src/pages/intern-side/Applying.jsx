import React, { useState } from "react";
import PersonalInformation from "../../components/application_steps/1PersonalInformation";
import UploadRequirements from "../../components/application_steps/2UploadRequirements";
import GTKY from "../../components/application_steps/3GTKY";
import StepperControl from "../../components/StepperControl";
import StepperHorizontal from "../../components/StepperHorizontal";
import { StepperContext } from "../../context/StepperContext";
import { useContext } from "react";
import Modal from "../../components/Modal";

const Applying = () => {
  const [applicationData, setApplicationData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const steps = [
    "Personal Information",
    "Upload Requirements",
    "Getting to Know You",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <UploadRequirements />;
      case 3:
        return <GTKY />;
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

  const handleSubmit = () => {
    setShowModal(true);
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

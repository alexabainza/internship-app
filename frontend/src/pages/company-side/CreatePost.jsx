import React from "react";
import { useState } from "react";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import Account from "../../components/steps/Account";
import Details from "../../components/steps/Details";
import Payment from "../../components/steps/Payment";
import Final from "../../components/steps/Final";
import { StepperContext } from "../../context/StepperContext";

const CreatePost = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  // will be used to determine which component to show depending on which step the person is in
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if the steps are within the bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white pt-20">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}

      <div className="my-10 p-10">
        <StepperContext.Provider
          value={{ userData, setUserData, finalData, setFinalData }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
    </div>
  );
};

export default CreatePost;

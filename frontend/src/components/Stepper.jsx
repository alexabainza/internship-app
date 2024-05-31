import React, { useEffect, useState, useRef } from "react";
const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      // Current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
      }
      // Step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  useEffect(() => {
    // Map through each element in the array
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div key={index} className="flex flex-col items-center  ">
      <div className="relative flex items-center align-middle justify-center text-[#056480] font-bold text-">
        <div
          className={`rounded-full transition-duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3 ${
            step.selected
              ? "bg-[#056480] text-white font-bold"
              : "bg-[#F4F4F4] text-[#056480]"
          }`}
        >
          {step.completed ? (
            <span className="text-white font-bold text-2xl">&#10003;</span>
          ) : (
            index + 1
          )}
        </div>
        <div
          className={`absolute top-2 left-16 text-md font-medium uppercase ${
            step.highlighted ? "text-gray-900" : "text-gray-400"
          }`}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "200px", // adjust as needed
          }}
        >
          {step.description}
        </div>
      </div>
      {index !== newStep.length - 1 && (
        <div className="h-12 border-l-2 border-gray-300"></div>
      )}
    </div>
  ));

  return (
    <div className="flex flex-col items-start sm:block hidden">
      {displaySteps}
    </div>
  );
};

export default Stepper;

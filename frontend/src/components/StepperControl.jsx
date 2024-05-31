import React from "react";
import { lightTheme } from "../styles/theme";
const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-between mt-12 mb-2">
      <button
        onClick={() => handleClick("back")}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl  cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick("next")}
        className="bg-[#056480] text-white uppercase py-2 px-4 rounded-xl  cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;

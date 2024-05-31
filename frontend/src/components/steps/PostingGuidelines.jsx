import React, { useState } from "react";
import { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
import { lightTheme } from "../../styles/theme";

const PostingGuidelines = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // You can perform additional actions here based on the checkbox state
  };
  return (
    <div className="flex flex-col">
      <h1
        style={{ color: lightTheme.primary }}
        className="lg:text-4xl sm:text-2xl text-2xl font-bold"
      >
        Post an Internship Opening
      </h1>
      <h3
        className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
        style={{ color: lightTheme.primary }}
      >
        Posting Guidelines
      </h3>
      <ul className="list-disc list-inside ml-4 lg:text-xl sm:text-md text-md mt-2 flex flex-col lg:gap-4 sm:gap-2 gap-2">
        <li>
          Philippine business documents (DTI, SEC, and BIR) may be required
        </li>
        <li>Post internship opportunities only</li>
        <li>One job per post</li>
        <li>Internship details must be posted in the appropriate categories</li>
        <li>The following are not allowed in the posting section</li>
        <ul className="list-disc list-inside lg:ml-20 sm:ml-8 ml-8 lg:text-xl sm:text-md text-md flex flex-col lg:gap-4 sm:gap-2 gap-2">
          <li>Business opportunities</li>
          <li>Multi-level marketing jobs</li>
          <li>Jobs that require payment of fees</li>
        </ul>
      </ul>
      <li className="flex items-center mt-8">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-[#056480] rounded-sm border-2"
        />
        <span className="ml-4 lg:text-xl sm:text-md text-md text-[#056480] font-medium ">
          I agree to these guidelines
        </span>
      </li>
    </div>
  );
};

export default PostingGuidelines;

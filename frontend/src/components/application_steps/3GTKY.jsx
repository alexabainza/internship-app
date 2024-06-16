import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { lightTheme } from "../../styles/theme";
import { StepperContext } from "../../context/StepperContext";

const GTKY = ({ jobInfo }) => {
  const { applicationData, setApplicationData } = useContext(StepperContext);
  const [questions, setQuestions] = useState([]);

  const handleChange = (index, value) => {
    const newResponses = [...applicationData.responses];
    newResponses[index] = value;
    setApplicationData({ ...applicationData, responses: newResponses });
  };

  useEffect(() => {
    if (jobInfo && jobInfo.questions) {
      const formattedQuestions = jobInfo.questions
        .split("?")
        .filter((q) => q.trim() !== "")
        .map((q) => q.trim() + "?");
      setQuestions(formattedQuestions);
      if (!applicationData.responses) {
        setApplicationData({
          ...applicationData,
          responses: new Array(formattedQuestions.length).fill(""),
        });
      }
    }
  }, [jobInfo]);
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2 text-center">
        <h2
          className="text-4xl font-semibold"
          style={{ color: lightTheme.primary }}
        >
          Getting to know you{" "}
        </h2>
        <p>Answer the questions in less than 150 words.</p>
      </div>

      <div>
        {questions.length > 0 ? (
          <ul className="space-y-8">
            {questions.map((question, index) => (
              <li key={index} className="space-y-2">
                <p>
                  {index + 1}. {question}
                </p>
                <textarea
                  className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40"
                  onChange={(e) => handleChange(index, e.target.value)}
                  value={
                    applicationData.responses
                      ? applicationData.responses[index]
                      : ""
                  }
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-lg">1. Why should we hire you?</p>
              <textarea
                onChange={handleChange}
                value={applicationData["q1"]}
                name="q1"
                className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40"
              />
            </div>
            <div className="space-y-2">
              <p className="text-lg">2. What are your greatest strengths?</p>
              <textarea
                onChange={handleChange}
                value={applicationData["q2"]}
                name="q2"
                className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40"
              />
            </div>{" "}
            <div className="space-y-2">
              <p className="text-lg">
                3. What are your expectations from the commpany?
              </p>
              <textarea
                className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40"
                onChange={handleChange}
                value={applicationData["q3"]}
                name="q3"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GTKY;

import React from "react";
import { useContext } from "react";
import { lightTheme } from "../../styles/theme";

const GTKY = () => {
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
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <p className="text-lg">1. Why should we hire you?</p>
          <textarea className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40" />
        </div>
        <div className="space-y-2">
          <p className="text-lg">2. What are your greatest strengths?</p>
          <textarea className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40" />
        </div>{" "}
        <div className="space-y-2">
          <p className="text-lg">
            3. What are your expectations from the commpany?
          </p>
          <textarea className="w-full bg-[#EDEDF0] text-lg rounded-xl border-none min-h-40" />
        </div>
      </div>
    </div>
  );
};

export default GTKY;

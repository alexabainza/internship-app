import React from "react";
import { useContext } from "react";
import { lightTheme } from "../../styles/theme";
const UploadRequirements = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2 text-center">
        <h2
          className="text-4xl font-semibold"
          style={{ color: lightTheme.primary }}
        >
          Upload Requirements{" "}
        </h2>
        <p>Upload necessary requirements here</p>
      </div>
      <div className="flex">
        <div className="gap-3 border-2 rounded-xl border-dashed border-[#056480] h-screen w-3/5 bg-[#ECECEC] flex flex-col justify-center items-center">
          <p className="text-2xl">Drag and drop your file here</p>
          <p className="text-2xl">or</p>
          <button className="uppercase py-2 px-4 bg-[#056480] text-white rounded-xl">
            Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadRequirements;

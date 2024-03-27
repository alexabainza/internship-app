import React from "react";
import landing from "../../assets/LandingIcon.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="mt-16 flex flex-row w-full bg-gradient-to-br from-[#074666] to-[#0B0027] min-w-full h-dvh ">
      <div className="w-3/4 m-32 flex flex-col text-white gap-6">
        <h1 className="w-5/6 text-7xl font-semibold">
          An internship page just for you.
        </h1>
        <p className="w-5/6 text-xl">
          All you see are job hunting pages? How about an internship hunting
          page? Find internship opportunities available and suited for you, all
          in this internship hunting page.
          <br/>
          <br/>

          Click on one of the buttons below to get started.

        </p>

        <div className="flex"> {/* Added flex and justify-between */}
        <Link to="/login"
          type="button"
          class="text-white text-center w-1/4 bg-[#73d473] hover:bg-[#3adb3a]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          I am a student
        </Link>
        <button
          type="button"
          class="text-white w-1/4 bg-[#73d473] hover:bg-[#3adb3a]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          I am an employer
        </button>
        </div>
        
      </div>
      <div className="w-1/4 me-32 mt-32 h-full">
        <img src={landing}></img>
        Teehee
      </div>
    </div>
  );
};

export default Landing;

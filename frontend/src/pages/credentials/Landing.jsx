import React from "react";
import landing from "../../assets/LandingIcon.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="mt-16 md:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col min-h-screen">

        <div className="lg:w-1/2 md:w-full sm:w-full md:px-16 lg:m-32 md:m-16 sm:m-4 flex flex-col text-white gap-6">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold">
            An internship page just for you.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            All you see are job hunting pages? How about an internship hunting
            page? Find internship opportunities available and suited for you,
            all in this internship hunting page.
            <br />
            <br />
            Click on one of the buttons below to get started.
          </p>

          <div className="flex flex-wrap">
            {" "}
            {/* Added flex-wrap */}
            <Link
              to="/login"
              type="button"
              class="text-white text-center lg:w-1/4 md:w-3/4 sm:w-3/4  bg-[#73d473] hover:bg-[#3adb3a]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 min-w-[200px]"
            >
              I am a student
            </Link>
            <button
              type="button"
              class="text-white text-center lg:w-1/4 md:w-3/4 sm:w-3/4  bg-[#73d473] hover:bg-[#3adb3a]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 min-w-[200px]"
            >
              I am an employer
            </button>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2  pt-10 self-center">
          {" "}
          {/* Adjusted image container width */}
          <img src={landing}></img>
        </div>
      </div>
  );
};

export default Landing;

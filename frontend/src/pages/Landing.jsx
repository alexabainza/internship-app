import React from "react";
import landing from "../assets/LandingIcon.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="lg:mt-20 md:mt-24 sm:mt-28 mt-28 min-h-screen md:gap-8 sm:gap-8 gap-8 flex lg:mx-24 md:mx-20 sm:mx-8 mx-8 lg:flex-row md:flex-row sm:flex-col flex-col">
      <div className="flex flex-col text-white gap-6 justify-center items-center  lg:w-3/5 md:w-full sm:w-full w-full">
        <div className="flex flex-col gap-8">
          <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-semibold ">
            An internship page just for you.
          </h1>
          <p className="lg:text-2xl md:text-xl sm:text-lg">
            Find internship opportunities available and suited for you, all in
            this internship hunting page.
            <br />
            <br />
            Click on one of the buttons below to get started.
          </p>

          <div className="flex flex-wrap gap-4 ">
            <Link
              to="/login"
              type="button"
              class="text-[#356d35] text-center bg-[#89ff89] hover:bg-[#73d473] lg:w-[40%] sm:w-full w-full font-bold rounded-lg lg:text-lg md:text-md sm:text-sm text-sm px-5 lg:py-3 md:py-2.5 sm:py-2 py-2"
            >
              I AM A STUDENT
            </Link>
            <button
              type="button"
              class="text-[#356d35] text-center bg-[#89ff89] hover:bg-[#73d473] lg:w-[40%] sm:w-full w-full font-bold rounded-lg lg:text-lg md:text-md sm:text-sm text-sm px-5 lg:py-3 md:py-2.5 sm:py-2 py-2"
            >
              I AM AN EMPLOYER
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-2/5 md:w-full sm:w-full w-full">
        {" "}
        <img
          src={landing}
          className="lg:h-[75%] md:h-[50%] sm:h-[20%] h-[20%]"
        ></img>
      </div>
    </div>
  );
};

export default Landing;

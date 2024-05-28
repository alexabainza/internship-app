import React from "react";
import logo2 from "../../assets/logo2.jpg";
import { lightTheme } from "../../styles/theme";
import { FaGlobe, FaMailBulk, FaPhone, FaTelegram } from "react-icons/fa";
const AboutCompany = () => {
  return (
    <div className="bg-white min-h-screen pt-28 lg:px-20 md:px-12 sm:px-8 px-8 flex flex-col gap-6">
      <div className="flex gap-6">
        <img src={logo2} className="h-28 w-28" />
        <div className="flex flex-col gap-2 justify-center items-start">
          <p
            className="lg:text-4xl  sm:text-3xl text-3xl font-bold"
            style={{ color: lightTheme.secondary }}
          >
            FactSet
          </p>
          <div className="flex flex-col gap-0">
            <p className="lg:text-xl sm:text-md text-md">
              Mandaue City, Cebu, Philippines
            </p>
            <p className="lg:text-xl sm:text-md text-md">20 applicants</p>
          </div>
        </div>
      </div>
      <div className="flex lg:gap-4 md:gap-3 sm:gap-2 gap-2 flex-wrap">
        <p
          className="text-sm border-2 border-opacity-50 py-1 px-6 rounded-full"
          style={{ color: lightTheme.primary, borderColor: lightTheme.primary }}
        >
          Software Development
        </p>
        <p
          className="text-sm border-2 border-opacity-50 py-1 px-6 rounded-full"
          style={{ color: lightTheme.primary, borderColor: lightTheme.primary }}
        >
          Computer and Technology
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <h1
            className="text-2xl font-bold"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            About the Company
          </h1>
          <p>
            Cursus iaculis eleifend fugit ullamcorper interdum! Nostrud? Aliquid
            quae bibendum, eros ultricies netus inceptos, minim, quam, magna
            quisquam, wisi beatae, harum atque conubia optio. Vivamus corporis
            commodi voluptates excepturi debitis, porttitor litora alias
            deserunt commodi ullam error inceptos vel! Tellus.
          </p>
          <br />
          <p>
            Officia ea rem eiusmod magna reprehenderit. Turpis ipsa aute,
            quaerat, auctor fugit itaque quibusdam tempor enim nibh phasellus,
            nulla urna donec facilis quod itaque exercitation semper porta
            incidunt pellentesque corrupti tellus aliquid? Neque beatae animi
            semper dui, aptent semper mollitia.
          </p>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <h1
            className="text-2xl font-bold"
            style={{
              color: lightTheme.primary,
              borderColor: lightTheme.primary,
            }}
          >
            Contact Us
          </h1>
          <div className="flex gap-3 items-center">
            <FaPhone color={lightTheme.primary} size={20} />
            <p>(032) 647 2135</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaTelegram color={lightTheme.primary} size={20} />
            <p>factset@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaGlobe color={lightTheme.primary} size={20} />
            <p>factset.com</p>
          </div>
        </div>
        <div className="flex pb-10 lg:gap-10 md:gap-5 sm:gap-2 gap-2 lg:justify-center sm:justify-start justify-start flex-wrap">
          <button
            className="uppercase text-white py-2 px-8 rounded-lg text-md"
            style={{ backgroundColor: lightTheme.primary }}
          >
            View Applicants
          </button>
          <button
            className="uppercase text-white py-2 px-8 rounded-lg text-md"
            style={{ backgroundColor: lightTheme.primary }}
          >
            Post An Opening
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

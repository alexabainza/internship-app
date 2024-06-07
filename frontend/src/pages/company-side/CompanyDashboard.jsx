import React from "react";
import CompanyPostings from "../../components/CompanyPostings";

const CompanyDashboard = () => {
  return (
    <div className="pt-24 min-h-screen shadow-xl pb-2 lg:mx-8 sm:mx-4 mx-4 overflow-auto">
      <p className="text-white text-2xl mb-4">Company Dashboard</p>
      <div className="flex flex-col gap-4">
        <CompanyPostings />
        <CompanyPostings />
        <CompanyPostings />
        <CompanyPostings />
      </div>
    </div>
  );
};

export default CompanyDashboard;

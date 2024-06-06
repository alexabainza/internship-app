import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/credentials/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterAhead from "./pages/FilterAhead";
import Landing from "./pages/Landing";
import Results from "./pages/intern-side/Results";
import Register from "./pages/credentials/Register";
import AboutCompany from "./pages/company-side/AboutCompany";
import RegisterCompany from "./pages/company-side/RegisterCompany";
import CreatePost from "./pages/company-side/CreatePost";
import LoginCompany from "./pages/company-side/LoginCompany";
// import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/filter" element={<FilterAhead />} />
          <Route path="/" element={<Landing />} />
          <Route path="/aboutcompany" element={<AboutCompany />} />
          <Route path="/results" element={<Results />} />
          <Route path="/filter" element={<FilterAhead />} />{" "}
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/company-login" element={<LoginCompany />} />
          <Route path="/company-registration" element={<RegisterCompany />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

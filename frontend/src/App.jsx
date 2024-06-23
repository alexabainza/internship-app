import Navbar from "./components/Navbar";
import Login from "./pages/credentials/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterAhead from "./pages/FilterAhead";
import Landing from "./pages/Landing";
import Results from "./pages/intern-side/Results";
import Register from "./pages/credentials/Register";
import AboutCompany from "./pages/company-side/AboutCompany";
import CreatePost from "./pages/company-side/CreatePost";
import LoginCompany from "./pages/company-side/LoginCompany";
import UserDashboard from "./pages/intern-side/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SetupCompany from "./pages/company-side/SetupCompany";
import ApplicationsList from "./pages/intern-side/ApplicationsList";
import CompanyDashboard from "./pages/company-side/CompanyDashboard";
import ApplicantsList from "./pages/company-side/ApplicantsList";
import Applying from "./pages/intern-side/Applying";
import UpdateCompany from "./pages/company-side/UpdateCompany";
import SavedJobs from "./pages/intern-side/SavedJobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* AUTH */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company-login" element={<LoginCompany />} />
          <Route path="/setup" element={<SetupCompany />} />
          <Route path="/register" element={<Register />} />
          {/* NAVIGABLE BY ANYONE */}
          <Route path="/filter" element={<FilterAhead />} />
          <Route path="/:company_name" element={<AboutCompany />} />
          <Route path="/results" element={<Results />} />
          {/* USER */}
          <Route
            path="/applications-list"
            element={
              <ProtectedRoute
                element={ApplicationsList}
                allowedRoles={["Student"]}
              />
            }
          />
          <Route
            path="/application/:job_id"
            element={
              <ProtectedRoute element={Applying} allowedRoles={["Student"]} />
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute
                element={UserDashboard}
                allowedRoles={["Student"]}
              />
            }
          />
          <Route
            path="/saved-jobs"
            element={
              <ProtectedRoute element={SavedJobs} allowedRoles={["Student"]} />
            }
          />
          <Route
            path="/edit-company-profile"
            element={
              <ProtectedRoute
                element={UpdateCompany}
                allowedRoles={["Company"]}
              />
            }
          />
          <Route
            path="/company-dashboard"
            element={
              <ProtectedRoute
                element={CompanyDashboard}
                allowedRoles={["Company"]}
              />
            }
          />
          <Route
            path="/create-post"
            element={
              <ProtectedRoute element={CreatePost} allowedRoles={["Company"]} />
            }
          />
          <Route
            path="/:job_id/applicants"
            element={
              <ProtectedRoute
                element={ApplicantsList}
                allowedRoles={["Company"]}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

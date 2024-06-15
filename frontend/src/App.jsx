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
import ViewProfile from "./pages/intern-side/ViewProfile";
import CompanyDashboard from "./pages/company-side/CompanyDashboard";
import ApplicantsList from "./pages/company-side/ApplicantsList";
import Applying from "./pages/intern-side/Applying";
import UpdateCompany from "./pages/company-side/UpdateCompany";

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
          <Route path="/:company_name" element={<AboutCompany />} />
          <Route path="/results" element={<Results />} />
          <Route path="/setup" element={<SetupCompany />} />
          <Route path="/profile" element={<ViewProfile />} />
          <Route path="/applications-list" element={<ApplicationsList />} />
          <Route path="/application/:job_id" element={<Applying />} />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute
                element={UserDashboard}
                allowedRoles={["Student"]}
              />
            }
          />
          <Route path="/edit-company-profile" element={<UpdateCompany />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/filter" element={<FilterAhead />} />{" "}
          <Route
            path="/create-post"
            element={
              <ProtectedRoute element={CreatePost} allowedRoles={["Company"]} />
            }
          />
          <Route path="/company-login" element={<LoginCompany />} />
          <Route path="/applicants-list" element={<ApplicantsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

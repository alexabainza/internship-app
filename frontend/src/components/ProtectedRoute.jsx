import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();

  if (!currentUser) {
    alert("You must be authenticated to continue!");
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    alert("You are not allowed to access this page!");
    return <Navigate to={location.state?.from || "/"} />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;

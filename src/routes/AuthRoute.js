import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const authenticatedUser = useSelector(
    ({ authenticatedUser }) => authenticatedUser
  );
  const location = useLocation();

  return authenticatedUser !== null ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
};
export default AuthRoute;

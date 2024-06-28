<<<<<<< HEAD
import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
=======
import { Outlet, Navigate } from "react-router-dom";
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
import { TokenService } from "../../utils/token.service";

const ProtectedRoute = ({ requiredRoles = [] }) => {
  const userRoles = TokenService.getUserRoles() || [];
<<<<<<< HEAD
=======
  // const username = TokenService.getUsername();

  // console.log("Required roles:", requiredRoles);
  // console.log("User roles:", userRoles);
  // console.log("Username:", username);

  if (!Array.isArray(userRoles)) {
    console.log("User roles is not an array, redirecting to login");
    return <Navigate to="/login" />;
  }
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484

  const hasAccess =
    requiredRoles.length === 0 ||
    requiredRoles.some((role) => userRoles.includes(role));

  if (!hasAccess) {
<<<<<<< HEAD
    console.log("User does not have required roles, redirecting to dashboard");
=======
    // console.log("User does not have required roles, redirecting to login");
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
    return <Navigate to="/ekc/dashboard" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

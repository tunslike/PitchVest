import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Define props interface
interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { userData } = useAuth();

  const userRole = userData?.token;

  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  /*
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }*/

  return <Outlet />;
};

export default ProtectedRoute;

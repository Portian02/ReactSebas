import React from "react";
import useAuth from "../../hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/Sesion" />;
};
export default PrivateRoute;

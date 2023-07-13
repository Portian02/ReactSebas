import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = useContext(AuthContext);
  return auth.user ? <Outlet /> : <Navigate to="/Sesion" />;
};
export default PrivateRoute;

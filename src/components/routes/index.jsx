import { Routes, Route } from "react-router-dom";
import React from "react";
import Inicio from "../../pages/Home/Inicio";
import Login from "../../pages/Login/Log";
import NoPage from "../../pages/Nopage/Nopage";
import PrivateRoute from "./privateRoute";
import Perfil from "../../pages/Profile/Profile";
const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Route>

      <Route path="/Sesion" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;

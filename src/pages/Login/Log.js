import { useContext } from "react";
import React from "react";
import Form from "../../components/Form/input";
import { AuthContext } from "../../context/AuthContext";
import Navigation from "../../components/navigation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (userInfo) => {
    // console.log("Inicianod Sesión...");
    console.log(userInfo);
    setAuth(userInfo);
    navigate("/");
  };

  return (
    <div>
      <Navigation />
      <Form onSubmit={handleLogin} />
    </div>
  );
};

export default Login;

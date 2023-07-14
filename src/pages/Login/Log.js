import React from "react";
import Form from "../../components/Form/input";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../components/navigation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (userInfo) => {
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

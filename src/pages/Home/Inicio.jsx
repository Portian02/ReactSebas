///////////////////////IMPORTACIONES////////////////////////////////

import Navigation from "../../components/navigation";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
////////////////////////IMPORTACIONES////////////////////////////////

////////////////////////////////////FUNCIO DE HOME///////////////////////////////
const Inicio = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const Logout = () => {
    setAuth({});
    navigate("/Sesion");
  };
  const goToLogin = () => {
    navigate("/Sesion");
  };
  return (
    <>
      <Navigation />
      {auth.user ? (
        <>
          <h1>Bienvenido {auth.user}</h1>
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
            alt=""
          />
          <br />
          <br />
          <button onClick={Logout}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <button onClick={goToLogin}>Iniciar Sesión</button>
        </>
      )}
    </>
  );
};
////////////////////////////////////FUNCIO DE HOME///////////////////////////////
export default Inicio;

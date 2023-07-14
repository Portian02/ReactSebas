import { useState } from "react";
import "./Input.css";
import Swal from "sweetalert2";
/////////////////////////////////////////////////FUNCION FORMULARIO////////////////////////////////////////////////////////////////////////////77
const Form = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  ///////////////////////////////////////////////funciones de Context inputs/////////////////////////////////////////////////////////
  const handleUserChange = (e) => {
    setUsuario(e.target.value);
  };
  const handlePasword = (e) => {
    setContrasena(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Lista de objetos con usuarios y contraseñas para validar
    const users = [
      { usuario: "Sebas", password: "310210Ap" },
      { usuario: "Jaki", password: "078901" },
      { usuario: "Prii", password: "010591" },
    ];
    const found = users.find(
      (user) =>
        user.usuario.toLowerCase() === usuario.toLowerCase() &&
        user.password === contrasena
    );
    console.log(found);

    if (found) {
      onSubmit({ user: usuario, password: contrasena });
      console.log({ user: usuario, password: contrasena });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña o Usuario incirrecto, porfavor intentelo nuevamente",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  /////////////////////////////////////////////////funciones de Context inputs/////////////////////////////////////////////////////////

  //////////////////////////////////////////////ELEMENTOS HTML///////////////////////////////////////////////////////////////////////////////
  return (
    <div className="container3">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="usuario"
          placeholder="Nombre de Usuario"
          value={usuario}
          onChange={handleUserChange}
        />
        <br />
        <br />
        {/* /////////////////////////////////////INPUT PASSWORD/////////////////////////////////////////////////////////////////// */}

        <input
          className="contarsena"
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={handlePasword}
        />
        {/* /////////////////////////////////////INPUT PASSWORD/////////////////////////////////////////////////////////////////// */}
        <br />
        <br />
        {/* ///////////////////////////////////////BOTON INICIAR SESIÓN/////////////////////////////////////////////////////////////// */}
        <button type="submit" className="input">
          Iniciar sesión
        </button>
        {/* ///////////////////////////////////////BOTON INICIAR SESIÓN/////////////////////////////////////////////////////////////// */}
      </form>
    </div>
  );
};
//////////////////////////////////////////////ELEMENTOS HTML///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////EXPORTACIÓN////////////////////////////////////////////////////////////////////////////////////
export default Form;
//////////////////////////////////////////EXPORTACIÓN////////////////////////////////////////////////////////////////////////////////////

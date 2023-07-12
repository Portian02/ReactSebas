import React, { useState } from "react";
import Input from "./input";
function Logined() {
  const [show, hide] = useState(true);

  const click = () => {
    return hide(!show);
    Input.style.display = "none";
  };

  return (
    <div>
      <button onClick={click}>
        {show ? "Cerrar sesion" : "Iniciar sesion"}
      </button>
      <h2></h2>
    </div>
  );
}

export default Logined;

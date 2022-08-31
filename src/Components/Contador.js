import React, { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(100);

  return (
    <div>
      <center>
        <h1>Cuenta:{cuenta}</h1>
        <button
          onClick={() => {
            setCuenta(cuenta + 1);
          }}
        >
          Aumentar
        </button>
        <button
          onClick={() => {
            setCuenta(cuenta - 1);
          }}
        >
          Disminuir
        </button>
        <button
          onClick={() => {
            setCuenta(100);
          }}
        >
          Reset
        </button>
      </center>
    </div>
  );
}

export default Contador;

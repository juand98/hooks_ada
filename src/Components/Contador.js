import React, { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(100);

  const aumentar = () => {
    setCuenta(cuenta + 1);
  };
  const disminuir = () => {
    setCuenta(cuenta - 1);
  };
  const reset = () => {
    setCuenta(100);
  };

  return (
    <div>
      <center>
        {/* Forma 1 */}
        <h1>Cuenta:{cuenta}</h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
        <button onClick={reset}>Reset</button>

        {/* Forma 2 */}
        {/* <button
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
        </button> */}
      </center>
    </div>
  );
}

export default Contador;

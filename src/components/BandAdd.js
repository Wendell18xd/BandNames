import React, { useState } from "react";

export const BandAdd = ({ addName }) => {
  const [valor, setValor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (valor.trim().length > 0) {
      //TODO: llamar la funcion para emitir el evento
      addName(valor);
    }
  };

  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Nuevo Nombre de banda"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </form>
    </>
  );
};

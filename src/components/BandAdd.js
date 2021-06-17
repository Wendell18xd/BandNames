import React, { useContext, useState } from "react";
import { SockectContext } from "../context/SocketContext";

export const BandAdd = () => {
  const [valor, setValor] = useState("");
  const { socket } = useContext(SockectContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (valor.trim().length > 0) {
      socket.emit("nuevo-name", { name: valor });
      setValor("");
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

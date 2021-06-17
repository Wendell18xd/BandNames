import React, { useEffect, useState } from "react";

import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { useSocket } from "./hooks/useSocket";

export const App = () => {
  const [band, setBand] = useState([]);
  const { socket, online } = useSocket("http://localhost:8080");

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBand(bands);
    });
  }, [socket]);

  const votar = (id) => {
    socket.emit("votar-banda", id);
  };

  const borrar = (id) => {
    socket.emit("borrar-banda", id);
  };

  const cambiarNombre = (id, nombre) => {
    socket.emit("change-name", { id, nombre });
  };

  const addName = (name) => {
    socket.emit("nuevo-name", { name });
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status
          {online ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-4">
          <BandAdd addName={addName} />
        </div>
        <div className="col-12 col-md-8">
          <BandList
            data={band}
            votar={votar}
            borrar={borrar}
            cambiarNombre={cambiarNombre}
          />
        </div>
      </div>
    </div>
  );
};

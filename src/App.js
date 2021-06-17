import React, { useContext } from "react";

import { SockectContext } from "./context/SocketContext";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { BandChart } from "./components/BandChart";

export const App = () => {
  const { online } = useContext(SockectContext);

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
        <div className="col">
          <BandChart />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <BandAdd />
        </div>
        <div className="col-12 col-md-8">
          <BandList />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { App } from "./App";
import { SockectProvider } from "./context/SocketContext";

export const BandNamesApp = () => {
  return (
    <SockectProvider>
      <App />
    </SockectProvider>
  );
};

import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SockectContext = createContext();

export const SockectProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return (
    <SockectContext.Provider value={{ socket, online }}>
      {children}
    </SockectContext.Provider>
  );
};

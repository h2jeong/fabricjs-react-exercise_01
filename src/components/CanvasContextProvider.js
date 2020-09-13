import React, { createContext, useRef } from "react";

function CanvasContextProvider({ children }) {
  const fabricCanvasController = useRef({});
  return (
    <CanvasContext.Provider value={fabricCanvasController}>
      {children}
    </CanvasContext.Provider>
  );
}

export const CanvasContext = createContext();
export default CanvasContextProvider;

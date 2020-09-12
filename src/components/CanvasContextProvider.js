import React, { createContext, useRef } from "react";

function CanvasContextProvider({ children }) {
  const fabricCanvasController = useRef({});
  return (
    <div>
      <CanvasContext.Provider value={fabricCanvasController}>
        {children}
      </CanvasContext.Provider>
    </div>
  );
}

export const CanvasContext = createContext();
export default CanvasContextProvider;

import React from "react";
import CanvasContextProvider from "./components/CanvasContextProvider";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";

function App() {
  return (
    <div className="App">
      <CanvasContextProvider>
        <LeftPanel />
        <RightPanel />
      </CanvasContextProvider>
    </div>
  );
}

export default App;

import React from "react";
import CanvasContextProvider from "./components/CanvasContextProvider";
import LeftPanel from "./components/left-panel/LeftPanel";
import RightPanel from "./components/right-panel/RightPanel";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Container className="App">
      <Grid container justify="center">
        <CanvasContextProvider>
          <LeftPanel />
          <RightPanel />
        </CanvasContextProvider>
      </Grid>
    </Container>
  );
}

export default App;

import React from "react";
import Preview from "./Preview";
import { Grid } from "@material-ui/core";

function LeftPanel() {
  return (
    <Grid
      container
      item
      xs={9}
      direction="column"
      alignItems="stretch"
      spacing={3}
    >
      <Preview />
    </Grid>
  );
}

export default LeftPanel;

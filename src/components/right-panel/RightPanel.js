import React from "react";
import ActionPanel from "./action-panel/ActionPanel";
import ObjectInfoPanel from "./object-info-panel/ObjectInfoPanel";
import StylePanel from "./style-panel/StylePanel";
import { Grid } from "@material-ui/core";

function RightPanel() {
  return (
    <Grid item xs={10} sm={6} md={5} lg={3}>
      <Grid container direction="column" spacing={2}>
        <ActionPanel />
        <ObjectInfoPanel />
        <StylePanel />
      </Grid>
    </Grid>
  );
}

export default RightPanel;

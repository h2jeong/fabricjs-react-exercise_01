import React from "react";
import { Grid } from "@material-ui/core";
import PannelContainer from "../../common/PannelContainer";
import FontSelector from "./font/FontSelector";
import FontColorPicker from "./font/FontColorPicker";
import FontSizePanel from "./font/FontSizePanel";

function StylePanel() {
  return (
    <Grid item>
      <PannelContainer>
        <Grid container direction="column" spacing={2}>
          <Grid container item>
            <FontColorPicker />
            <FontSizePanel />
          </Grid>
          <Grid container item></Grid>
          <FontSelector />
        </Grid>
      </PannelContainer>
    </Grid>
  );
}

export default StylePanel;

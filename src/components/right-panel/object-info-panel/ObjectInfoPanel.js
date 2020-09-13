import React from "react";
import { Grid } from "@material-ui/core";
import PannelContainer from "../../common/PannelContainer";
import CoordinatePanel from "./coordinate-panel/CoordinatePanel";
import SizePanel from "./size-panel/SizePanel";
import RotationPanel from "./rootation-panel/RotationPanel";

function ObjectInfoPanel() {
  return (
    <Grid container item>
      <PannelContainer>
        <Grid container item>
          <CoordinatePanel />
          <SizePanel />
          <RotationPanel />
        </Grid>
      </PannelContainer>
    </Grid>
  );
}

export default ObjectInfoPanel;

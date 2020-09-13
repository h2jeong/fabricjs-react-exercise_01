import React from "react";
import { Grid } from "@material-ui/core";
import PannelContainer from "../../common/PannelContainer";

function StylePanel() {
  return (
    <Grid item>
      <PannelContainer>
        <Grid container direction="column" spacing={2}>
          <Grid container item></Grid>
          <Grid container item></Grid>
        </Grid>
      </PannelContainer>
    </Grid>
  );
}

export default StylePanel;

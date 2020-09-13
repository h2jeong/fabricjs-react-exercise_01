import React from "react";
import { Grid, Typography } from "@material-ui/core";
import UnlimitedTextField from "../../common/UnlimitedTextField";

function CommonInput({ description, disabled, onChange, value }) {
  return (
    <Grid container item xs={6} alignItems="center" justify="center">
      <Grid item xs={3}>
        <Typography variant="caption">{description}</Typography>
      </Grid>
      <Grid item xs={7}>
        <UnlimitedTextField
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
      </Grid>
    </Grid>
  );
}

export default CommonInput;

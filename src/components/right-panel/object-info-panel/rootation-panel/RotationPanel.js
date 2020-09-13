import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import LimitedTextField from "../../../common/LimitedTextField";
import { useActiveObject, useCanvas } from "../../../../hooks";

const initialState = 0;

function RotationPanel() {
  const activeObject = useActiveObject(
    () => setAngle(initialState),
    object => setAngle(object.angle)
  );
  const canvas = useCanvas();
  const [angle, setAngle] = useState(initialState);
  const disabled = activeObject === null;
  const onAngleChange = angle => {
    if (activeObject === null) return;
    activeObject.rotate(angle);
    canvas.requestRenderAll();
  };

  return (
    <Grid container item sx={6} alignItems="center" justify="center">
      <Grid item xs={3}>
        <Typography variant="caption">R</Typography>
      </Grid>
      <Grid item xs={7}>
        <LimitedTextField
          disabled={disabled}
          limit={{ min: "0", max: "360" }}
          onChange={value => onAngleChange(value)}
          value={angle}
        />
      </Grid>
    </Grid>
  );
}

export default RotationPanel;

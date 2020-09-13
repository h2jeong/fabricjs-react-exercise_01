import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CommonInput from "../CommonInput";
import { useActiveObject, useCanvas } from "../../../../hooks";

const initialState = { left: 0, top: 0 };

function CoordinatePanel() {
  const [coordinate, setCoordinate] = useState(initialState);
  const activeObject = useActiveObject(
    () => setCoordinate(initialState),
    object => setCoordinate({ left: object.left, top: object.top })
  );
  const canvas = useCanvas();
  const disabled = activeObject === null;
  const onCoordinateChange = (coordinate, value) => {
    if (activeObject === null) return;
    activeObject.set(coordinate, value).setCoords();
    canvas.requestRenderAll();
  };

  return (
    <Grid container item>
      <CommonInput
        disabled={disabled}
        description="X"
        onchange={value => onCoordinateChange("left", value)}
        value={coordinate.left}
      />
      <CommonInput
        disabled={disabled}
        description="Y"
        onchange={value => onCoordinateChange("top", value)}
        value={coordinate.top}
      />
    </Grid>
  );
}

export default CoordinatePanel;

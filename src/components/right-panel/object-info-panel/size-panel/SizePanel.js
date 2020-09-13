import React, { useState } from "react";
import CommonInput from "../CommonInput";
import { Grid } from "@material-ui/core";
import { useActiveObject, useCanvas } from "../../../../hooks";

const initialState = { height: 0, width: 0 };
function SizePanel() {
  const [size, setSize] = useState(initialState);
  const activeObject = useActiveObject(
    () => setSize(initialState),
    object =>
      setSize({
        height: object.getScaledHeight(),
        width: object.getScaledWidth()
      })
  );
  const canvas = useCanvas();
  const disabled = activeObject === null;
  const onSizeChange = (dimension, value) => {
    if (activeObject === null) return;
    activeObject.set(dimension, value).setCoords();
    canvas.requestRenderAll();
  };

  return (
    <Grid container item>
      <CommonInput
        disabled={disabled}
        description="W"
        onChange={value => onSizeChange("width", value)}
        value={size.width}
      />
      <CommonInput
        disabled={disabled}
        description="H"
        onChange={value => onSizeChange("height", value)}
        value={size.height}
      />
    </Grid>
  );
}

export default SizePanel;

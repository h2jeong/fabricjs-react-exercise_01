import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import { useActiveObject, useCanvas } from "../../../../hooks";
import { fonts } from "../../../../constant";

const initialState = "Segoe UI";
function FontSelector() {
  const activeObject = useActiveObject(
    () => setFont(initialState),
    object => setFont(object.fontFamily)
  );
  const canvas = useCanvas();
  const [font, setFont] = useState(initialState);
  const disabled = activeObject === null;
  const onFontChange = font => {
    if (activeObject === null) return;
    activeObject.set("fontFamily", font);
    canvas.requestRenderAll();
    setFont(font);
  };

  return (
    <Grid container item justify="center">
      <FormControl disabled={disabled} fullWidth>
        <Select
          displayEmpty
          value={font}
          onChange={e => onFontChange(e.target.value)}
        >
          {Object.keys(fonts).map((fontName, index) => (
            <MenuItem
              key={index}
              value={fontName}
              style={{ fontFamily: `${fontName}` }}
            >
              {fonts[fontName]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Font</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default FontSelector;

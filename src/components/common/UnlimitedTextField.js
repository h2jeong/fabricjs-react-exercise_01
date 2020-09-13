import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@material-ui/core";

function UnlimitedTextField({ disabled, onChange, value }) {
  const [textfieldValue, setTextfieldValue] = useState(value);

  useEffect(() => {
    setTextfieldValue(toInt(value).toString());
  }, [value]);

  const onTextfieldValueChange = e => {
    const roundedValue = toInt(e.target.value);
    setTextfieldValue(roundedValue.toString());
    onChange(roundedValue);
  };

  const toInt = value => Math.round(parseInt(value));

  return (
    <TextField
      disabled={disabled}
      fullWidth
      inputProps={{
        endAdornment: <InputAdornment position="end">px</InputAdornment>
      }}
      margin="dense"
      multiline={false}
      onChange={onTextfieldValueChange}
      type="number"
      value={textfieldValue.toString()}
    />
  );
}

export default UnlimitedTextField;

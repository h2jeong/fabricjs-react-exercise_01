import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";

function LimitedTextField({ disabled, onChange, limit: { min, max }, value }) {
  const [textfieldValue, setTextfieldValue] = useState(value);

  useEffect(() => {
    setTextfieldValue(toInt(value).toString());
  }, [value]);

  const onTextfieldValueChange = e => {
    const roundedValue = toInt(e.target.value);
    onChange(roundedValue);
    setTextfieldValue(roundedValue.toString());
  };
  const toInt = value => Math.round(parseInt(value));
  return (
    <TextField
      disabled={disabled}
      fullWidth
      inputProps={{ min: min, max: max }}
      margin="dense"
      multiline={false}
      onChange={onTextfieldValueChange}
      type="number"
      value={textfieldValue.toString()}
    />
  );
}

export default LimitedTextField;

import React, { useState, useEffect } from "react";
import { SketchPicker } from "react-color";

function ColorPicker({ color, disabled, onChange }) {
  const [currentColor, setCurrentColor] = useState(color);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  useEffect(() => {
    setCurrentColor(color);
  }, [color]);

  const onClick = () => {
    if (disabled) return;
    setDisplayColorPicker(!displayColorPicker);
  };
  const onClose = () => setDisplayColorPicker(false);
  const onChangeComplete = color => {
    const newColor = color.hex;
    setCurrentColor(newColor);
    onChange(newColor);
  };
  return (
    <div>
      <div
        style={{
          background: `${currentColor}`,
          borderRadius: "50%",
          boxShadow: "0 0 0 3px white",
          cursor: `${disabled ? "not-allowed" : "pointer"}`,
          display: "inline-block",
          height: "0.75rem",
          width: "0.75rem"
        }}
        onClick={onClick}
      />
      {displayColorPicker ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div
            style={{
              bottom: "0px",
              left: "0px",
              position: "fixed",
              top: "0px",
              right: "0px"
            }}
            onClick={onClose}
          />
          <SketchPicker
            color={currentColor}
            onChangeComplete={onChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;

import React from "react";
import { Paper } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

function PannelContainer({ children }) {
  return (
    <Paper style={{ background: "#f1f1f1", padding: 10 }}>{children}</Paper>
  );
}

export default PannelContainer;

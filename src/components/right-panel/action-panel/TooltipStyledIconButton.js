import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";

function TooltipStyledIconButton({ download, href, icon, onClick, title }) {
  return (
    <Tooltip title={title}>
      <IconButton
        style={{ padding: "10px" }}
        download={download}
        href={href}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default TooltipStyledIconButton;

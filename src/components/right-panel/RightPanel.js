import React from "react";
import ActionPanel from "./action-panel/ActionPanel";
import ObjectInfoPanel from "./object-info-panel/ObjectInfoPanel";
import StylePanel from "./style-panel/StylePanel";

function RightPanel() {
  return (
    <div>
      <ActionPanel />
      <ObjectInfoPanel />
      <StylePanel />
    </div>
  );
}

export default RightPanel;

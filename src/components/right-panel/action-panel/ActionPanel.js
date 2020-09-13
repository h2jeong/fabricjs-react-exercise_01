import React, { useState, useEffect, useContext, useRef } from "react";
import { Grid } from "@material-ui/core";
import TooltipStyledIconButton from "./TooltipStyledIconButton";
import {
  DeleteTwoTone,
  AddPhotoAlternateTwoTone,
  AddTwoTone,
  SaveTwoTone,
  DeleteForeverTwoTone
} from "@material-ui/icons";
import AddImageDialog from "./AddImageDialog";
import { CanvasContext } from "../../CanvasContextProvider";
import { fabric } from "fabric";

function ActionPanel() {
  const canvasContext = useContext(CanvasContext);
  const canvasRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const {
      current: { canvas }
    } = canvasContext;
    canvasRef.current = canvas;
  }, [canvasContext]);

  const addText = () => {
    const { current: canvas } = canvasRef;
    const newText = new fabric.Textbox("text", {
      angle: 0,
      fill: "#fff",
      fontSize: 40,
      fontStyle: "normal",
      fontWeight: "normal",
      left: 50,
      textAlign: "left",
      top: 100,
      stroke: null,
      strokeWidth: 0
    });
    canvas.add(newText).setActiveObject(newText);
  };
  const removeSelectedText = () => {
    const { current: canvas } = canvasRef;
    canvas.remove(canvas.getActiveObject()).requestRenderAll();
  };
  const onAddImageDialogClick = () => {
    setOpen(!open);
  };
  const removeAllText = () => {
    const { current: canvas } = canvasRef;
    canvas.remove(...canvas.getObjects()).requestRenderAll();
  };
  const saveImage = e => {
    const { current: canvas } = canvasRef;
    e.persist();
    e.target.parentElement.parentElement.parentElement.href = canvas.toDataURL({
      multipart: 854 / canvas.getWidth()
    });
  };

  return (
    <Grid container item justify="space-between">
      <TooltipStyledIconButton
        icon={<AddTwoTone />}
        onClick={addText}
        title="텍스트추가"
      />
      <TooltipStyledIconButton
        icon={<AddPhotoAlternateTwoTone />}
        onClick={onAddImageDialogClick}
        title="사진추가"
      />
      <AddImageDialog onClick={onAddImageDialogClick} open={open} />
      <TooltipStyledIconButton
        icon={<DeleteTwoTone />}
        onClick={removeSelectedText}
        title="선택한 텍스트 제거"
      />
      <TooltipStyledIconButton
        icon={<DeleteForeverTwoTone />}
        onClick={removeAllText}
        title="모든 텍스트 제거"
      />
      <TooltipStyledIconButton
        download="image.png"
        href="#"
        icon={<SaveTwoTone />}
        onClick={saveImage}
        title="다운로드"
      />
    </Grid>
  );
}

export default ActionPanel;

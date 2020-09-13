import React, { useRef, useContext } from "react";
import { fabric } from "fabric";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";
import { CanvasContext } from "../../CanvasContextProvider";

function AddImageDialog({ onClick, open }) {
  const context = useContext(CanvasContext);
  const textfeildRef = useRef(null);

  const addImage = () => {
    const {
      current: { canvas }
    } = context;
    const url = textfeildRef.current.value;

    if (url.trim().length === 0) return;
    fabric.Image.fromURL(url, image => {
      image.set({ originX: "left", orignY: "toop" });
      image.scaleToHeight(canvas.getHeight() / 2);
      image.scaleToWidth(canvas.getWidth() / 2);
      canvas.add(image).setActiveObject(image);
    });
    onClick();
  };
  return (
    <Dialog open={open} onClose={onClick}>
      <DialogTitle>사진 추가</DialogTitle>
      <DialogContent>
        <TextField
          ref={textfeildRef}
          inputProps={{ pattern: "(https?//.*.(?:png|jpg))" }}
          label="
          이미지 URL"
          placeholder="이미지 파일만"
          type="url"
          //   onChange={props.onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClick}>
          취소
        </Button>
        <Button color="primary" onClick={addImage}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddImageDialog;

import React, { useContext, useRef, useState, useEffect } from "react";
import { CanvasContext } from "../CanvasContextProvider";
import { Grid, debounce } from "@material-ui/core";
import FabricCanvas from "../FabricCanvas";

function Preview() {
  const canvasContext = useContext(CanvasContext);
  const ref = useRef(null);
  const getZoomRatio = () => Math.min(1, (window.innerWidth * 0.75) / 854);
  const [size, setSize] = useState({
    height: 480 * getZoomRatio(),
    width: 854 * getZoomRatio(),
    zoomRatio: getZoomRatio()
  });

  useEffect(() => {
    const onWindowSizeChange = () => {
      const newWidth = 854 * getZoomRatio();
      const newHeight = 480 * getZoomRatio();
      setSize({
        height: newHeight,
        width: newWidth,
        zoomRatio: getZoomRatio()
      });
    };
    canvasContext.current = ref.current;

    window.addEventListener("resize", debounce(onWindowSizeChange, 150));
    return () => {
      window.removeEventListener("resize", onWindowSizeChange);
    };
  }, [canvasContext]);

  return (
    <Grid item>
      <FabricCanvas
        height={size.height}
        ref={ref}
        s
        width={size.width}
        zoomRatio={size.zoomRatio}
      />
    </Grid>
  );
}

export default Preview;

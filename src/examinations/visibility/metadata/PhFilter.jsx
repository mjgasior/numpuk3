import React from "react";
import Slider from "@material-ui/core/Slider";

const MIN_PH = 0;
const MAX_PH = 14;

export const PhSlider = ({ ph, onPhChanged }) => {
  return (
    <Slider
      min={MIN_PH}
      max={MAX_PH}
      step={0.1}
      value={[ph.min, ph.max]}
      onChange={(event, newValue) =>
        onPhChanged({ min: newValue[0], max: newValue[1] })
      }
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

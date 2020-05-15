import React from "react";
import Slider from "@material-ui/core/Slider";

export const RangeSlider = ({ value, min, max, onChange, isDisabled }) => {
  return (
    <Slider
      disabled={isDisabled}
      min={min}
      max={max}
      step={0.1}
      value={[value.min, value.max]}
      onChange={(event, newValue) =>
        onChange({ min: newValue[0], max: newValue[1] })
      }
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

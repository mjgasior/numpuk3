import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

const MIN_PH = 0;
const MAX_PH = 14;

export const PhSlider = () => {
  const [value, setValue] = useState([MIN_PH, MAX_PH]);

  return (
    <Slider
      min={MIN_PH}
      max={MAX_PH}
      step={0.1}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
};

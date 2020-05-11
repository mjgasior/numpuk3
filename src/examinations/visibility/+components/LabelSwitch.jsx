import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const LabelSwitch = ({ isVisible, label, name, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Switch checked={isVisible} onChange={handleChange} name={name} />
      }
      label={label}
    />
  );
};

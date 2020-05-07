import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const FormSwitch = ({ onChange, t, visibilityState, objectKey }) => {
  const handleChange = (event) =>
    onChange(event.target.name, event.target.checked);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={visibilityState[objectKey]}
          onChange={handleChange}
          name={objectKey}
        />
      }
      label={t(objectKey)}
    />
  );
};

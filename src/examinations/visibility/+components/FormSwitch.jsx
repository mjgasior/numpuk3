import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const FormSwitch = ({ onChange, t, visibilityState, objectKey }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={visibilityState[objectKey]}
          onChange={onChange}
          name={objectKey}
        />
      }
      label={t(objectKey)}
    />
  );
};

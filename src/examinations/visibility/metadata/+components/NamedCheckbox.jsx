import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const NamedCheckbox = ({ isChecked, onChange, objectKey, t }) => {
  const handleChange = (event) =>
    onChange(event.target.name, event.target.checked);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          name={objectKey}
        />
      }
      label={t(objectKey)}
    />
  );
};

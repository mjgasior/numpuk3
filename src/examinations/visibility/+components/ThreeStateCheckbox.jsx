import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export const ThreeStateCheckbox = ({ isChecked, isVisible, onChange }) => {
  const checked = getIsChecked(isChecked);
  const indeterminate = getIsIndeterminate(isChecked);

  const handleCheckboxChange = () => {
    if (indeterminate) {
      onChange(true);
    } else if (checked) {
      onChange(false);
    } else {
      onChange();
    }
  };

  return (
    <Checkbox
      indeterminate={indeterminate}
      color="primary"
      checked={checked}
      onChange={handleCheckboxChange}
      disabled={!isVisible}
    />
  );
};

const getIsChecked = (value) => {
  if (value === undefined) {
    return true;
  }
  return value;
};

const getIsIndeterminate = (value) => {
  if (value === undefined) {
    return true;
  }
  return false;
};

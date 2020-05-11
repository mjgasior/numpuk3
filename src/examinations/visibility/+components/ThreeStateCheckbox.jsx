import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export const ThreeStateCheckbox = ({ isVisible }) => {
  const [checked, setChecked] = React.useState(true);
  const [indeterminate, setIndeterminate] = React.useState(true);

  const handleCheckboxChange = () => {
    if (indeterminate) {
      setChecked(false);
      setIndeterminate(false);
    } else if (checked) {
      setChecked(true);
      setIndeterminate(true);
    } else {
      setChecked(true);
      setIndeterminate(false);
    }
  };

  return (
    <Checkbox
      defaultChecked
      indeterminate={indeterminate}
      color="primary"
      checked={checked}
      onChange={handleCheckboxChange}
      disabled={!isVisible}
    />
  );
};

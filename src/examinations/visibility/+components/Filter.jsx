import React from "react";
import Grid from "@material-ui/core/Grid";
import { ThreeStateCheckbox } from "./ThreeStateCheckbox";
import { LabelSwitch } from "./LabelSwitch";

export const Filter = React.memo(
  ({
    t,
    onVisibilityChange,
    isVisible,
    onFilterChange,
    isFiltered,
    objectKey,
  }) => {
    const handleSwitchChange = (event) =>
      onVisibilityChange(event.target.name, event.target.checked);

    const handleCheckboxChange = (value) => onFilterChange(objectKey, value);

    return (
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ThreeStateCheckbox
            isVisible={isVisible}
            isChecked={isFiltered}
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item xs={11} container direction="row" alignItems="flex-start">
          <LabelSwitch
            label={t(objectKey)}
            handleChange={handleSwitchChange}
            name={objectKey}
            isVisible={isVisible}
          />
        </Grid>
      </Grid>
    );
  }
);

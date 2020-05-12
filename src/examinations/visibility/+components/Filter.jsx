import React from "react";
import Grid from "@material-ui/core/Grid";
import { ThreeStateCheckbox } from "./ThreeStateCheckbox";
import { LabelSwitch } from "./LabelSwitch";

const FilterComponent = ({
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
};

export const Filter = React.memo(FilterComponent, areEqual);

function areEqual(prevProps, nextProps) {
  const hasVisibilityNotChanged = prevProps.isVisible === nextProps.isVisible;
  const hasFiltersNotChanged = prevProps.isFiltered === nextProps.isFiltered;
  return hasVisibilityNotChanged && hasFiltersNotChanged;
}

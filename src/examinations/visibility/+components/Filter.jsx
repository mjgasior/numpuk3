import React from "react";
import Grid from "@material-ui/core/Grid";
import { ThreeStateCheckbox } from "./ThreeStateCheckbox";
import { LabelSwitch } from "./LabelSwitch";

export const Filter = React.memo(({ onChange, t, isVisible, objectKey }) => {
  const handleChange = (event) =>
    onChange(event.target.name, event.target.checked);

  return (
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <ThreeStateCheckbox isVisible={isVisible} />
      </Grid>
      <Grid item xs={11} container direction="row" alignItems="flex-start">
        <LabelSwitch
          label={t(objectKey)}
          handleChange={handleChange}
          name={objectKey}
          isVisible={isVisible}
        />
      </Grid>
    </Grid>
  );
});

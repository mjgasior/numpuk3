import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { ThreeStateCheckbox } from "./ThreeStateCheckbox";

export const FormSwitch = React.memo(
  ({ onChange, t, visibilityState, objectKey }) => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) =>
      onChange(event.target.name, event.target.checked);

    const isVisible = visibilityState[objectKey];

    return (
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <ThreeStateCheckbox isVisible={isVisible} />
        </Grid>
        <Grid item xs={11} container direction="row" alignItems="flex-start">
          <FormControlLabel
            control={
              <Switch
                checked={isVisible}
                onChange={handleChange}
                name={objectKey}
              />
            }
            label={t(objectKey)}
          />
        </Grid>
      </Grid>
    );
  }
);

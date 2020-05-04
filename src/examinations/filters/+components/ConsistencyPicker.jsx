import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export const ConsistencyPicker = ({ onConsistencyChanged, t }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    liquid: false,
    halfLiquid: false,
    rigid: false,
    unknown: false,
  });

  const handleChange = (name) => (event) => {
    const newState = { ...state, [name]: event.target.checked };
    setState(newState);
    onConsistencyChanged(newState);
  };

  const { liquid, halfLiquid, rigid } = state;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">{t("consistency")}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={liquid}
              onChange={handleChange("LIQUID")}
              value="LIQUID"
            />
          }
          label={t("LIQUID")}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={halfLiquid}
              onChange={handleChange("HALF_LIQUID")}
              value="HALF_LIQUID"
            />
          }
          label={t("HALF_LIQUID")}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rigid}
              onChange={handleChange("RIGID")}
              value="RIGID"
            />
          }
          label={t("RIGID")}
        />
      </FormGroup>
    </FormControl>
  );
};

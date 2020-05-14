import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import { useTranslation } from "react-i18next";
import { LabelSwitch } from "./../+components/LabelSwitch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const VisibilityList = ({ visibility, setVisibility }) => {
  const { t } = useTranslation("n3_metadata");

  const classes = useStyles();

  const handleChange = (event) => {
    setVisibility({
      ...visibility,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <FormGroup>
          {Object.keys(visibility).map((objectKey) => (
            <LabelSwitch
              key={objectKey}
              label={t(objectKey)}
              handleChange={handleChange}
              name={objectKey}
              isVisible={visibility[objectKey]}
            />
          ))}
        </FormGroup>
      </Paper>
    </Grid>
  );
};

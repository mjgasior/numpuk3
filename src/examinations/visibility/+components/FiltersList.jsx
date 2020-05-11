import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import { useTranslation } from "react-i18next";
import { Filter } from "./Filter";

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

export const FiltersList = React.memo(({ visibility, setVisibility }) => {
  const { t } = useTranslation("n3_metadata");

  const classes = useStyles();

  const handleChange = (name, value) => {
    setVisibility({
      ...visibility,
      [name]: value,
    });
  };

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <FormGroup>
          {Object.keys(visibility).map((objectKey) => (
            <Filter
              t={t}
              key={objectKey}
              objectKey={objectKey}
              isVisible={visibility[objectKey]}
              onChange={handleChange}
            />
          ))}
        </FormGroup>
      </Paper>
    </Grid>
  );
});

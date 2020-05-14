import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";

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

export const Block = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <FormGroup>{children}</FormGroup>
      </Paper>
    </Grid>
  );
};

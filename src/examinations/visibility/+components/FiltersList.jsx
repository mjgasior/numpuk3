import React, { useState } from "react";
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

export const FiltersList = ({ visibility, setVisibility }) => {
  const [filters, setFilters] = useState({});
  const { t } = useTranslation("n3_metadata");
  console.log(filters);
  const classes = useStyles();

  const handleChange = (name, value) => {
    setVisibility({
      ...visibility,
      [name]: value,
    });
  };

  const handleFilterChange = (name, value) => {
    console.log("Im here");
    console.log(value);
    if (value === undefined) {
      console.log("Value undefined");
      console.log(filters);
      const copy = { ...filters };
      delete copy[name];
      console.log(copy);
      setFilters(copy);
    } else {
      console.log("Value else");
      console.log(filters);
      const cop = {
        ...filters,
        [name]: value,
      };
      console.log(cop);
      setFilters(cop);
    }
  };

  // console.log(filters);

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
              onVisibilityChange={handleChange}
              isFiltered={filters[objectKey]}
              onFilterChange={handleFilterChange}
            />
          ))}
        </FormGroup>
      </Paper>
    </Grid>
  );
};

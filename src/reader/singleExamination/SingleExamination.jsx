import React from "react";
import { ObjectTable } from "./+components/ObjectTable";
import { SpecificDataTable } from "./+components/SpecificDataTable";
import Grid from "@material-ui/core/Grid";

export const SingleExamination = ({ examination }) => {
  const {
    results,
    examinationType,
    ph,
    consistency,
    bacteriaCount,
    extendedResults,
    ...metadata
  } = examination;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <ObjectTable data={metadata} />
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <SpecificDataTable
              data={{ examinationType, ph, consistency, bacteriaCount }}
              extendedResults={extendedResults}
            />
          </Grid>
          <Grid item xs={12}>
            <ObjectTable data={results} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

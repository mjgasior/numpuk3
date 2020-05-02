import React from "react";
import { MetadataTable } from "./+components/MetadataTable";
import { MetadataTable2 } from "./+components/MetadataTable2";
import Grid from "@material-ui/core/Grid";

export const SingleExamination = ({ examination }) => {
  const { metadata, examinationType, ph, consistency } = examination;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <MetadataTable metadata={metadata} examinationType={examinationType} />
      </Grid>
      <Grid item xs={6}>
        <MetadataTable2 />
      </Grid>
    </Grid>
  );
};

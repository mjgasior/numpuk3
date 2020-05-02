import React from "react";
import { getMetadata } from "../../+utils/examinations";
import { MetadataTable } from "./+components/MetadataTable";
import { MetadataTable2 } from "./+components/MetadataTable2";
import Grid from "@material-ui/core/Grid";

export const SingleExamination = ({ spreadsheet }) => {
  const metadata = getMetadata(spreadsheet);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <MetadataTable metadata={metadata} />
      </Grid>
      <Grid item xs={6}>
        <MetadataTable2 />
      </Grid>
    </Grid>
  );
};

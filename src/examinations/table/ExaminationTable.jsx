import React from "react";
import Table from "@material-ui/core/Table";

import { TableHeader } from "./+components/TableHeader";
import { TableRows } from "./+components/TableRows";

export const ExaminationTable = React.memo(({ examinations, columns }) => {
  const { metadataVisibility, testsVisibility } = columns;
  const testColumns = mapToArray(testsVisibility);
  return (
    <Table size="small" stickyHeader>
      <TableHeader
        metadataColumns={metadataVisibility}
        testColumns={testColumns}
      />
      <TableRows
        examinations={examinations}
        metadataColumns={metadataVisibility}
        testColumns={testColumns}
      />
    </Table>
  );
});

const mapToArray = (sourceObject) => {
  return Object.keys(sourceObject).filter((key) => {
    if (sourceObject[key]) {
      return key;
    }
  });
};

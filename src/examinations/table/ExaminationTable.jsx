import React from "react";
import Table from "@material-ui/core/Table";

import { TableHeader } from "./+components/TableHeader";
import { TableRows } from "./+components/TableRows";

export const ExaminationTable = React.memo(
  ({ examinations, metadataColumns, testColumns }) => {
    const testColumnsArray = mapToArray(testColumns);
    return (
      <Table size="small" stickyHeader>
        <TableHeader
          metadataColumns={metadataColumns}
          testColumns={testColumnsArray}
        />
        <TableRows
          examinations={examinations}
          metadataColumns={metadataColumns}
          testColumns={testColumnsArray}
        />
      </Table>
    );
  }
);

const mapToArray = (sourceObject) =>
  Object.keys(sourceObject).filter((key) => sourceObject[key]);

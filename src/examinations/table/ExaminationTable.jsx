import React from "react";
import Table from "@material-ui/core/Table";

import { TableHeader } from "./+components/TableHeader";
import { TableRows } from "./+components/TableRows";

export const ExaminationTable = React.memo(({ examinations, columns }) => {
  return (
    <Table size="small" stickyHeader>
      <TableHeader columns={columns} />
      <TableRows columns={columns} examinations={examinations} />
    </Table>
  );
});

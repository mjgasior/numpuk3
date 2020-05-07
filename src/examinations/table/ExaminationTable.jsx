import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import { ALL_TEST_TYPES } from "../../+services/readers/testTypes/testTypes";
import { TableHeader } from "./+components/TableHeader";

export const ExaminationTable = React.memo(({ examinations, columns }) => {
  const { t } = useTranslation("n3_metadata");

  return (
    <Table size="small" stickyHeader>
      <TableHeader columns={columns} />
      <TableBody>
        {examinations.map(({ results, ...data }) => (
          <TableRow key={data.examinationId}>
            {Object.keys(columns).map((keyName) => (
              <TableCell component="th" scope="row">
                {t(data[keyName])}
              </TableCell>
            ))}
            {ALL_TEST_TYPES.map((testType, i) => (
              <TableCell key={testType + i} align="right">
                {getValue(testType, results)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

const getValue = (testType, results) => {
  if (testType.endsWith("spp.")) {
    testType = testType.replace("spp.", "spp");
  }
  return results[testType];
};

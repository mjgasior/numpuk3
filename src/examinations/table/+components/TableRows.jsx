import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

import { useTranslation } from "react-i18next";
import { ALL_TEST_TYPES } from "../../../+services/readers/testTypes/testTypes";

export const TableRows = ({ columns, examinations }) => {
  const { t } = useTranslation("n3_metadata");
  const {
    hasAkkermansiaMuciniphila,
    hasFaecalibactriumPrausnitzii,
    ...rest
  } = columns;
  return (
    <TableBody>
      {examinations.map(({ results, ...data }) => (
        <TableRow key={data.examinationId}>
          {Object.keys(rest).map((keyName) => (
            <TableCell component="th" scope="row">
              {t(data[keyName])}
            </TableCell>
          ))}
          {hasAkkermansiaMuciniphila === 1 && (
            <TableCell component="th" scope="row">
              {t(getLabel(data.hasAkkermansiaMuciniphila))}
            </TableCell>
          )}
          {hasFaecalibactriumPrausnitzii === 1 && (
            <TableCell component="th" scope="row">
              {t(getLabel(data.hasFaecalibactriumPrausnitzii))}
            </TableCell>
          )}
          {ALL_TEST_TYPES.map((testType, i) => (
            <TableCell key={testType + i} align="right">
              {getValue(testType, results)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

const getValue = (testType, results) => {
  if (testType.endsWith("spp.")) {
    testType = testType.replace("spp.", "spp");
  }
  return results[testType];
};

const getLabel = (value) => {
  if (value === undefined) {
    return;
  }
  return value ? "n3_positive" : "n3_negative";
};

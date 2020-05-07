import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

import { useTranslation } from "react-i18next";

export const TableRows = ({ columns, examinations }) => {
  const { t } = useTranslation("n3_metadata");
  const { metadataVisibility, testsVisibility } = columns;
  const {
    hasAkkermansiaMuciniphila,
    hasFaecalibactriumPrausnitzii,
    ...rest
  } = metadataVisibility;
  return (
    <TableBody>
      {examinations.map(({ results, ...data }) => (
        <TableRow key={data.examinationId}>
          {Object.keys(rest).map((keyName) => {
            if (rest[keyName]) {
              return (
                <TableCell key={keyName} component="th" scope="row">
                  {t(data[keyName])}
                </TableCell>
              );
            }
          })}
          {hasAkkermansiaMuciniphila && (
            <TableCell component="th" scope="row">
              {t(getLabel(data.hasAkkermansiaMuciniphila))}
            </TableCell>
          )}
          {hasFaecalibactriumPrausnitzii && (
            <TableCell component="th" scope="row">
              {t(getLabel(data.hasFaecalibactriumPrausnitzii))}
            </TableCell>
          )}
          {Object.keys(testsVisibility).map((testType, i) => {
            if (testsVisibility[testType]) {
              return (
                <TableCell key={testType + i} align="right">
                  {results[testType]}
                </TableCell>
              );
            }
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

const getLabel = (value) => {
  if (value === undefined) {
    return;
  }
  return value ? "n3_positive" : "n3_negative";
};

import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import { DoubleScrollbar } from "./+components/DoubleScrollbar";
import { ExtendedResultsCells } from "./+components/ExtendedResultsCells";
import { TooltipCell } from "./+components/TooltipCell";
import { ALL_TEST_TYPES } from "../../+services/readers/testTypes/testTypes";

export const ExaminationTable = React.memo(({ examinations }) => {
  const { t } = useTranslation("n3_metadata");
  console.log("it DARA");
  return (
    <DoubleScrollbar>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{t("gender")}</TableCell>
            <TooltipCell title={t("ageAtTest")}>{t("n3_age")}</TooltipCell>
            <TableCell>{t("ph")}</TableCell>
            <TableCell>{t("consistency")}</TableCell>
            <TableCell>{t("n3_amount_of_bacteria")}</TableCell>
            <TooltipCell title={t("hasAkkermansiaMuciniphila")}>
              {t("n3_akkermansia")}
            </TooltipCell>
            <TooltipCell title={t("hasFaecalibactriumPrausnitzii")}>
              {t("n3_faecalibactrium")}
            </TooltipCell>
            {ALL_TEST_TYPES.map((testType) => (
              <TableCell key={testType} align="right">
                {testType}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {examinations.map(
            ({ metadata, ph, consistency, extendedResults, results }) => (
              <TableRow key={metadata.examinationId}>
                <TableCell component="th" scope="row">
                  {t(metadata.gender)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {t(metadata.ageAtTest)}
                </TableCell>
                <TableCell component="th" scope="row">
                  {ph}
                </TableCell>
                <TableCell component="th" scope="row">
                  {t(consistency)}
                </TableCell>
                <TableCell component="th" scope="row"></TableCell>
                <ExtendedResultsCells data={extendedResults} />
                {ALL_TEST_TYPES.map((testType, i) => (
                  <TableCell key={testType + i} align="right">
                    {getValue(testType, results)}
                  </TableCell>
                ))}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </DoubleScrollbar>
  );
});

const getValue = (testType, results) => {
  if (testType.endsWith("spp.")) {
    testType = testType.replace("spp.", "spp");
  }
  return results[testType];
};

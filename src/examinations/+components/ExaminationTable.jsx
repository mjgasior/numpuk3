import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import { DoubleScrollbar } from "./DoubleScrollbar";
import { ExtendedResultsCells } from "./ExtendedResultsCells";
import { TooltipCell } from "./TooltipCell";

export const ExaminationTable = ({ examinations }) => {
  const { t } = useTranslation("n3_metadata");
  console.log(examinations);
  return (
    <DoubleScrollbar>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Płeć</TableCell>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {examinations.map(
            ({ metadata, ph, consistency, extendedResults }) => (
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
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </DoubleScrollbar>
  );
};

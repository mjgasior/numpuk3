import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { useTranslation } from "react-i18next";
import TableHead from "@material-ui/core/TableHead";
import { TooltipCell } from "./TooltipCell";
import { ALL_TEST_TYPES } from "../../../+services/readers/testTypes/testTypes";
import TableRow from "@material-ui/core/TableRow";

export const TableHeader = ({ columns }) => {
  const { t } = useTranslation("n3_metadata");
  return (
    <TableHead>
      <TableRow>
        {columns.gender === 1 && <TableCell>{t("gender")}</TableCell>}
        {columns.ageAtTest === 1 && (
          <TooltipCell title={t("ageAtTest")}>{t("n3_age")}</TooltipCell>
        )}
        {columns.ph === 1 && <TableCell>{t("ph")}</TableCell>}
        {columns.consistency === 1 && <TableCell>{t("consistency")}</TableCell>}
        {columns.bacteriaCount === 1 && (
          <TableCell>{t("n3_amount_of_bacteria")}</TableCell>
        )}
        {columns.hasAkkermansiaMuciniphila === 1 && (
          <TooltipCell title={t("hasAkkermansiaMuciniphila")}>
            {t("n3_akkermansia")}
          </TooltipCell>
        )}
        {columns.hasFaecalibactriumPrausnitzii === 1 && (
          <TooltipCell title={t("hasFaecalibactriumPrausnitzii")}>
            {t("n3_faecalibactrium")}
          </TooltipCell>
        )}
        {ALL_TEST_TYPES.map((testType) => (
          <TableCell key={testType} align="right">
            {testType}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { useTranslation } from "react-i18next";
import TableHead from "@material-ui/core/TableHead";
import { TooltipCell } from "./TooltipCell";
import TableRow from "@material-ui/core/TableRow";

export const TableHeader = ({ metadataColumns, testColumns }) => {
  const { t } = useTranslation("n3_metadata");
  return (
    <TableHead>
      <TableRow>
        {metadataColumns.gender && <TableCell>{t("gender")}</TableCell>}
        {metadataColumns.ageAtTest && (
          <TooltipCell title={t("ageAtTest")}>{t("n3_age")}</TooltipCell>
        )}
        {metadataColumns.ph && <TableCell>{t("ph")}</TableCell>}
        {metadataColumns.consistency && (
          <TableCell>{t("consistency")}</TableCell>
        )}
        {metadataColumns.bacteriaCount && (
          <TableCell>{t("n3_amount_of_bacteria")}</TableCell>
        )}
        {metadataColumns.hasAkkermansiaMuciniphila && (
          <TooltipCell title={t("hasAkkermansiaMuciniphila")}>
            {t("n3_akkermansia")}
          </TooltipCell>
        )}
        {metadataColumns.hasFaecalibactriumPrausnitzii && (
          <TooltipCell title={t("hasFaecalibactriumPrausnitzii")}>
            {t("n3_faecalibactrium")}
          </TooltipCell>
        )}
        {testColumns.map((testType) => (
          <TableCell key={testType} align="right">
            {testType}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

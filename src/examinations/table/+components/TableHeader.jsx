import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { useTranslation } from "react-i18next";
import TableHead from "@material-ui/core/TableHead";
import { TooltipCell } from "./TooltipCell";
import TableRow from "@material-ui/core/TableRow";

export const TableHeader = ({ columns }) => {
  const { metadataVisibility, testsVisibility } = columns;
  const { t } = useTranslation("n3_metadata");
  return (
    <TableHead>
      <TableRow>
        {metadataVisibility.gender && <TableCell>{t("gender")}</TableCell>}
        {metadataVisibility.ageAtTest && (
          <TooltipCell title={t("ageAtTest")}>{t("n3_age")}</TooltipCell>
        )}
        {metadataVisibility.ph && <TableCell>{t("ph")}</TableCell>}
        {metadataVisibility.consistency && (
          <TableCell>{t("consistency")}</TableCell>
        )}
        {metadataVisibility.bacteriaCount && (
          <TableCell>{t("n3_amount_of_bacteria")}</TableCell>
        )}
        {metadataVisibility.hasAkkermansiaMuciniphila && (
          <TooltipCell title={t("hasAkkermansiaMuciniphila")}>
            {t("n3_akkermansia")}
          </TooltipCell>
        )}
        {metadataVisibility.hasFaecalibactriumPrausnitzii && (
          <TooltipCell title={t("hasFaecalibactriumPrausnitzii")}>
            {t("n3_faecalibactrium")}
          </TooltipCell>
        )}
        {Object.keys(testsVisibility).map((testType) => {
          if (testsVisibility[testType]) {
            return (
              <TableCell key={testType} align="right">
                {testType}
              </TableCell>
            );
          }
        })}
      </TableRow>
    </TableHead>
  );
};

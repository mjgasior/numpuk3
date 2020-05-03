import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { useTranslation } from "react-i18next";

export const ExtendedResultsCells = ({ data }) => {
  const { t } = useTranslation("n3_metadata");

  if (data) {
    const { hasAkkermansiaMuciniphila, hasFaecalibactriumPrausnitzii } = data;
    return (
      <>
        <TableCell component="th" scope="row">
          {t(hasAkkermansiaMuciniphila ? "n3_positive" : "n3_negative")}
        </TableCell>
        <TableCell component="th" scope="row">
          {t(hasFaecalibactriumPrausnitzii ? "n3_positive" : "n3_negative")}
        </TableCell>
      </>
    );
  } else {
    return (
      <>
        <TableCell component="th" scope="row" />
        <TableCell component="th" scope="row" />
      </>
    );
  }
};

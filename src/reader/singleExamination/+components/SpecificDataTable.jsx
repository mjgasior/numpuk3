import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.success.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const SpecificDataTable = ({ data, extendedResults }) => {
  const { t } = useTranslation("n3_metadata");

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>{t("n3_table_header")}</StyledTableCell>
              <StyledTableCell align="right">{t("n3_value")}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data).map((key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {t(key)}
                </TableCell>
                <TableCell align="right">{t(data[key])}</TableCell>
              </TableRow>
            ))}
            {extendedResults && (
              <>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {t("hasAkkermansiaMuciniphila")}
                  </TableCell>
                  <TableCell align="right">
                    {t(
                      extendedResults.hasAkkermansiaMuciniphila
                        ? "n3_positive"
                        : "n3_negative"
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {t("hasFaecalibactriumPrausnitzii")}
                  </TableCell>
                  <TableCell align="right">
                    {t(
                      extendedResults.hasFaecalibactriumPrausnitzii
                        ? "n3_positive"
                        : "n3_negative"
                    )}
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

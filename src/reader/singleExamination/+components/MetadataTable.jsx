import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

export const MetadataTable = ({ metadata, examinationType }) => {
  const { t } = useTranslation("n3_metadata");

  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>{t("n3_metadata_header")}</TableCell>
              <TableCell align="right">{t("n3_value")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {t("n3_examination_type")}
              </TableCell>
              <TableCell align="right">{t(examinationType)}</TableCell>
            </TableRow>
            {Object.keys(metadata).map((key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {t(key)}
                </TableCell>
                <TableCell align="right">{metadata[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

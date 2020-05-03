import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslation } from "react-i18next";
import { DoubleScrollbar } from "./DoubleScrollbar";

export const ExaminationTable = ({ examinations }) => {
  const { t } = useTranslation("n3_metadata");
  console.log(examinations);
  return (
    <DoubleScrollbar>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Płeć</TableCell>
            <TableCell align="right">
              Wiek w momencie pobrania materiału
            </TableCell>
            <TableCell align="right">PH</TableCell>
            <TableCell align="right">Konsystencja</TableCell>
            <TableCell align="right">Ilość bakterii</TableCell>
            <TableCell align="right">Akkermansia Muciniphila</TableCell>
            <TableCell align="right">Faecalibactrium Prausnitzii</TableCell>
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
                <TableCell component="th" scope="row">
                  brak danej
                </TableCell>

                {extendedResults ? (
                  <>
                    <TableCell component="th" scope="row">
                      {t(extendedResults.hasAkkermansiaMuciniphila)}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {t(extendedResults.hasFaecalibactriumPrausnitzii)}
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell component="th" scope="row">
                      brak danej
                    </TableCell>
                    <TableCell component="th" scope="row">
                      brak danej
                    </TableCell>
                  </>
                )}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </DoubleScrollbar>
  );
};

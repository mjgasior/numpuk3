import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { useTranslation } from "react-i18next";

export const Pagination = React.memo(
  ({ count, page, setPage, rowsPerPage, setRowsPerPage }) => {
    const { t } = useTranslation();

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(e, newPage) => setPage(newPage)}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={t("n3_label_rows_per_page")}
        labelDisplayedRows={(keys) => t("n3_label_displayed_rows", keys)}
      />
    );
  }
);

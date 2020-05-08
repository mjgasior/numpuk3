import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { useTranslation } from "react-i18next";

export const Pagination = React.memo(({ count }) => {
  const { t } = useTranslation();
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={5}
      page={1}
      onChangePage={() => null}
      onChangeRowsPerPage={() => null}
      labelRowsPerPage={t("n3_label_rows_per_page")}
      labelDisplayedRows={(keys) => t("n3_label_displayed_rows", keys)}
    />
  );
});

import { useState, useMemo } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  return useMemo(
    () => ({
      page,
      setPage,
      rowsPerPage,
      setRowsPerPage,
    }),
    [page, rowsPerPage]
  );
};

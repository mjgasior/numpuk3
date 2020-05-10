import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [pagination] = useState({
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  });

  return pagination;
};

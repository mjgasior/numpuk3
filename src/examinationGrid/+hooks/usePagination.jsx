import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pagination, setPagination] = useState({
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
  });

  return pagination;
};

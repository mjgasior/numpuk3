import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return { page, setPage, rowsPerPage, setRowsPerPage };
};

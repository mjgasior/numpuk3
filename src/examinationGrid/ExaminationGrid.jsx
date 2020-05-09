import React from "react";

import { VisibilityDialog } from "./visibility/VisibilityDialog";
import { HeaderMenu } from "./+components/HeaderMenu";
import {
  useVisibilityDialog,
  useFiltersDialog,
} from "./+hooks/useTableDialogs";
import { useVisibilityFilters } from "./+hooks/useVisibilityFilters";
import { useExaminations } from "./+hooks/useExaminations";
import styled from "styled-components";
import { FiltersDialog } from "./filters/FiltersDialog";
import { Pagination } from "./Pagination";
import { usePagination } from "./+hooks/usePagination";
import { Table } from "./Table";

const ExaminationsViewContainer = styled.div`
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ExaminationsTableContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const PaginationContainer = styled.div`
  margin: 5px;
`;

export const ExaminationGrid = () => {
  const {
    metadataVisibility,
    setMetadataVisibility,
    testsVisibility,
    setTestsVisibility,
  } = useVisibilityFilters();

  const {
    isVisibilityDialogOpen,
    openVisibilityDialog,
    closeVisibilityDialog,
  } = useVisibilityDialog();

  const {
    isFiltersDialogOpen,
    openFiltersDialog,
    closeFiltersDialog,
  } = useFiltersDialog();

  const pagination = usePagination();

  const { examinations, count } = useExaminations(
    metadataVisibility,
    testsVisibility,
    pagination
  );

  return (
    <ExaminationsViewContainer>
      <HeaderMenu
        openVisibility={openVisibilityDialog}
        openFilters={openFiltersDialog}
      />
      <VisibilityDialog
        metadataVisibility={metadataVisibility}
        testsVisibility={testsVisibility}
        open={isVisibilityDialogOpen}
        onAccept={(newMetadataVisibility, newTestsVisibility) => {
          closeVisibilityDialog();
          setMetadataVisibility(newMetadataVisibility);
          setTestsVisibility(newTestsVisibility);
        }}
        onCancel={closeVisibilityDialog}
      />
      <FiltersDialog open={isFiltersDialogOpen} onCancel={closeFiltersDialog} />
      <ExaminationsTableContainer>
        <Table examinations={examinations} />
      </ExaminationsTableContainer>
      <PaginationContainer>
        <Pagination count={count} {...pagination} />
      </PaginationContainer>
    </ExaminationsViewContainer>
  );
};

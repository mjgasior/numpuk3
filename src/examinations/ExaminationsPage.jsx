import React from "react";

import { ExaminationTable } from "./table/ExaminationTable";
import { VisibilityDialog } from "./visibility/VisibilityDialog";
import { HeaderMenu } from "./+components/HeaderMenu";
import { useVisibilityDialog } from "./+hooks/useTableDialogs";
import { useVisibilityFilters } from "./+hooks/useVisibilityFilters";
import { useExaminations } from "./+hooks/useExaminations";
import styled from "styled-components";
import { Pagination } from "./table/Pagination";
import { usePagination } from "./+hooks/usePagination";

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

export const ExaminationsPage = () => {
  const {
    metadataVisibility,
    setMetadataVisibility,
    metadataFilters,
    setMetadataFilters,
    testsVisibility,
    setTestsVisibility,
    testFilters,
    setTestFilters,
  } = useVisibilityFilters();

  const {
    isVisibilityDialogOpen,
    openVisibilityDialog,
    closeVisibilityDialog,
  } = useVisibilityDialog();

  const pagination = usePagination();

  const { examinations, count } = useExaminations(
    metadataVisibility,
    metadataFilters,
    testsVisibility,
    testFilters,
    pagination
  );

  return (
    <ExaminationsViewContainer>
      <HeaderMenu openVisibility={openVisibilityDialog} />
      <VisibilityDialog
        metadataVisibility={metadataVisibility}
        metadataFilters={metadataFilters}
        testsVisibility={testsVisibility}
        testFilters={testFilters}
        open={isVisibilityDialogOpen}
        onAccept={(
          newMetadataVisibility,
          newMetadataFilters,
          newTestsVisibility,
          newTestFilters
        ) => {
          closeVisibilityDialog();
          setMetadataVisibility(newMetadataVisibility);
          setMetadataFilters(newMetadataFilters);
          setTestsVisibility(newTestsVisibility);
          setTestFilters(newTestFilters);
        }}
        onCancel={closeVisibilityDialog}
      />
      <ExaminationsTableContainer>
        <ExaminationTable
          examinations={examinations}
          metadataColumns={metadataVisibility}
          testColumns={testsVisibility}
        />
      </ExaminationsTableContainer>
      <PaginationContainer>
        <Pagination count={count} {...pagination} />
      </PaginationContainer>
    </ExaminationsViewContainer>
  );
};

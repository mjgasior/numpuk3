import React from "react";

import { ExaminationTable } from "./table/ExaminationTable";
import { VisibilityDialog } from "./visibility/VisibilityDialog";
import { HeaderMenu } from "./+components/HeaderMenu";
import { useVisibilityDialog } from "./+hooks/useDialog";
import { useVisibilityFilters } from "./+hooks/useVisibilityFilters";
import { useExaminations } from "./+hooks/useExaminations";
import styled from "styled-components";

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

export const ExaminationsPage = () => {
  const { metadataVisibility, setMetadataVisibility } = useVisibilityFilters();

  const {
    isVisibilityDialogOpen,
    openVisibilityDialog,
    closeVisibilityDialog,
  } = useVisibilityDialog();

  const { examinations } = useExaminations();

  return (
    <ExaminationsViewContainer>
      <HeaderMenu openVisibility={openVisibilityDialog} />
      <VisibilityDialog
        metadataVisibility={metadataVisibility}
        open={isVisibilityDialogOpen}
        onAccept={(newMetadataVisibility) => {
          closeVisibilityDialog();
          setMetadataVisibility(newMetadataVisibility);
        }}
        onCancel={closeVisibilityDialog}
      />
      <ExaminationsTableContainer>
        <ExaminationTable examinations={examinations} />
      </ExaminationsTableContainer>
    </ExaminationsViewContainer>
  );
};

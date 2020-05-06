import React, { useEffect, useState } from "react";
import { getExaminations } from "../+services/examinationReader";
import { ExaminationTable } from "./table/ExaminationTable";

import styled from "styled-components";
import { VisibilityDialog } from "./visibility/VisibilityDialog";

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
  const [metadataVisibility, setMetadataVisibility] = useState({
    gender: true,
    ageAtTest: true,
    ph: true,
    bacteriaCount: true,
    consistency: true,
  });

  console.log(metadataVisibility);

  const [isVisibilityDialogOpen, setIsVisibilityDialogOpen] = useState(true);
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    const loadExaminations = async () => {
      const loadedExaminations = await getExaminations(true);
      setExaminations(loadedExaminations);
    };

    loadExaminations();
  }, []);

  return (
    <ExaminationsViewContainer>
      <VisibilityDialog
        metadataVisibility={metadataVisibility}
        open={isVisibilityDialogOpen}
        onAccept={(newMetadataVisibility) => {
          setIsVisibilityDialogOpen(false);
          setMetadataVisibility(newMetadataVisibility);
        }}
        onCancel={() => setIsVisibilityDialogOpen(false)}
      />
      <ExaminationsTableContainer>
        <ExaminationTable examinations={examinations} />
      </ExaminationsTableContainer>
    </ExaminationsViewContainer>
  );
};

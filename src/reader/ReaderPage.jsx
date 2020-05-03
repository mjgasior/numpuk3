import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { showSelectFileDialog } from "./selectFileDialog";
import Button from "@material-ui/core/Button";
import { SingleExamination } from "./singleExamination/SingleExamination";
import { getExamination } from "../+services/examinationReader";
import styled from "styled-components";
import { ExaminationsContext } from "../+context/ExaminationsContext";

const Header = styled.div`
  margin-bottom: 10px;
`;

export const ReaderPage = () => {
  const { t } = useTranslation();
  const [examination, setExamination] = useState();
  const { openedExamination } = useContext(ExaminationsContext);

  useEffect(() => {
    const loadExamination = async () => {
      if (openedExamination) {
        const resultExamination = await getExamination(openedExamination);
        setExamination(resultExamination);
      }
    };
    loadExamination();
  }, [openedExamination]);

  const handlePickFiles = async () => {
    const selectedFile = await showSelectFileDialog(t);
    if (selectedFile) {
      const resultExamination = await getExamination(selectedFile);
      setExamination(resultExamination);
    }
  };

  return (
    <div>
      <Header>
        <Button variant="contained" color="primary" onClick={handlePickFiles}>
          {t("n3_select_file")}
        </Button>
      </Header>
      {examination && <SingleExamination examination={examination} />}
    </div>
  );
};

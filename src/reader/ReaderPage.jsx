import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { showSelectFileDialog } from "./selectFileDialog";
import Button from "@material-ui/core/Button";
import { SingleExamination } from "./singleExamination/SingleExamination";
import { getWorksheet, getExamination } from "../+services/examinationReader";

export const ReaderPage = () => {
  const { t } = useTranslation();
  const [examination, setExamination] = useState();

  const handlePickFiles = async () => {
    const selectedFile = await showSelectFileDialog(t);
    const resultExamination = await getExamination(selectedFile);

    setExamination(resultExamination);
  };

  return (
    <div>
      {examination ? (
        <SingleExamination examination={examination} />
      ) : (
        <Button variant="contained" color="primary" onClick={handlePickFiles}>
          {t("n3_select_file")}
        </Button>
      )}
    </div>
  );
};

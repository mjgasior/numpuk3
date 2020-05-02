import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { showSelectFileDialog } from "./selectFileDialog";
import Button from "@material-ui/core/Button";
import { SingleExamination } from "./singleExamination/SingleExamination";
import { getWorksheet } from "../+services/examinationReader";

export const ReaderPage = () => {
  const { t } = useTranslation();
  const [worksheet, setWorksheet] = useState();

  const handlePickFiles = async () => {
    const selectedFile = await showSelectFileDialog(t);
    const spreadsheet = await getWorksheet(selectedFile);
    setWorksheet(spreadsheet);
  };

  return (
    <div>
      {worksheet ? (
        <SingleExamination spreadsheet={worksheet} />
      ) : (
        <Button variant="contained" color="primary" onClick={handlePickFiles}>
          {t("n3_select_file")}
        </Button>
      )}
    </div>
  );
};

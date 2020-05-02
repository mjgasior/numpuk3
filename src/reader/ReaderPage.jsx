import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { showSelectFileDialog } from "./selectFileDialog";
import Button from "@material-ui/core/Button";
import { SingleExamination } from "./singleExamination/SingleExamination";
import { readFile } from "../+utils/examinations";

export const ReaderPage = () => {
  const { t } = useTranslation();
  const [spreadsheet, setSpreadsheet] = useState();

  const handlePickFiles = async () => {
    const selectedFile = await showSelectFileDialog(t);
    const spreadsheet = await readFile(selectedFile);
    setSpreadsheet(spreadsheet);
  };

  return (
    <div>
      {spreadsheet ? (
        <SingleExamination spreadsheet={spreadsheet} />
      ) : (
        <Button variant="contained" color="primary" onClick={handlePickFiles}>
          {t("n3_select_file")}
        </Button>
      )}
    </div>
  );
};

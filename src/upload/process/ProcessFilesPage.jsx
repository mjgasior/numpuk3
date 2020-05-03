import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { FilesList } from "./+components/FilesList";
import { getExaminations } from "../../+services/examinationReader";
import LinearProgress from "@material-ui/core/LinearProgress";

export const ProcessFilesPage = ({ files, directory }) => {
  const { t } = useTranslation();
  const [processedFiles, setProcessedFiles] = useState(0);

  const handleProcessFiles = async () => {
    await getExaminations(files, directory, setProcessedFiles);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleProcessFiles}>
        {t("n3_process_files")}
      </Button>
      <div>
        {processedFiles} / {files.length}
      </div>
      <LinearProgress
        variant="determinate"
        value={(processedFiles * 100) / files.length}
      />
      <FilesList files={files} directory={directory} />
    </>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { FilesList } from "./+components/FilesList";
import { getExaminations } from "../../+services/examinationReader";

export const ProcessFilesPage = ({ files, directory }) => {
  const { t } = useTranslation();

  const handleProcessFiles = async () => {
    await getExaminations(files, directory);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleProcessFiles}>
        {t("n3_process_files")}
      </Button>
      <FilesList files={files} directory={directory} />
    </>
  );
};

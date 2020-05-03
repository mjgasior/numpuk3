import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { showFilesInDirectoryDialog } from "./filesInDirectoryDialog";
import Button from "@material-ui/core/Button";
import { ProcessFilesPage } from "./process/ProcessFilesPage";
import { ExaminationsContext } from "../+context/ExaminationsContext";

export const UploadPage = () => {
  const {
    filesList,
    setFilesList,
    selectedDirectory,
    setSelectedDirectory,
  } = useContext(ExaminationsContext);
  const { t } = useTranslation();

  const handlePickFiles = async () => {
    const {
      selectedFiles,
      selectedDirectory,
    } = await showFilesInDirectoryDialog(t);

    if (selectedDirectory) {
      setFilesList(selectedFiles);
      setSelectedDirectory(selectedDirectory);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePickFiles}>
        {t("n3_select_directory")}
      </Button>
      {filesList.length !== 0 && (
        <ProcessFilesPage directory={selectedDirectory} files={filesList} />
      )}
    </div>
  );
};

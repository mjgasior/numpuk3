import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { showFileDialog } from "./showFileDialog";
import Button from "@material-ui/core/Button";
import { ProcessFilesPage } from "./process/ProcessFilesPage";

export const UploadPage = () => {
  const { t } = useTranslation();
  const [files, setFiles] = useState([]);
  const [directory, setDirectory] = useState([]);

  const handlePickFiles = async () => {
    const { selectedFiles, selectedDirectory } = await showFileDialog(t);
    setFiles(selectedFiles);
    setDirectory(selectedDirectory);
  };

  return (
    <div>
      {files.length === 0 ? (
        <Button variant="contained" color="primary" onClick={handlePickFiles}>
          {t("n3_select_directory")}
        </Button>
      ) : (
        <ProcessFilesPage directory={directory} files={files} />
      )}
    </div>
  );
};

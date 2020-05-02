import React, { useState } from "react";
import { showFileDialog } from "./showFileDialog";
import Button from "@material-ui/core/Button";
import { ProcessFilesPage } from "./process/ProcessFilesPage";

export const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const [directory, setDirectory] = useState([]);

  const handlePickFiles = async () => {
    const { selectedFiles, selectedDirectory } = await showFileDialog();
    setFiles(selectedFiles);
    setDirectory(selectedDirectory);
  };

  return (
    <div>
      {files.length === 0 ? (
        <Button variant="contained" color="primary" onClick={handlePickFiles}>
          Wybierz lokalizację
        </Button>
      ) : (
        <ProcessFilesPage directory={directory} files={files} />
      )}
    </div>
  );
};

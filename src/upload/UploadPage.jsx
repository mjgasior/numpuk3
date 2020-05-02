import React, { useState } from "react";
import { showFileDialog } from "./showFileDialog";
import Button from "@material-ui/core/Button";
import { FilesList } from "./+components/FilesList";

export function UploadPage() {
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
        <FilesList files={files} directory={directory} />
      )}
    </div>
  );
}

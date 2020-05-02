import React, { useState } from "react";
import { showFileDialog } from "./showFileDialog";
import Button from "@material-ui/core/Button";

export function UploadPage() {
  const [files, setFiles] = useState([]);

  const handlePickFiles = async () => {
    const selectedFiles = await showFileDialog();
    console.log(selectedFiles);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePickFiles}>
        Wybierz lokalizację
      </Button>
    </div>
  );
}

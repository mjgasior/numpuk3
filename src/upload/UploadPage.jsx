import React, { useState } from "react";
import { showFileDialog } from "./showFileDialog";
import Button from "@material-ui/core/Button";

export function UploadPage() {
  const [files, setFiles] = useState([]);
  return (
    <div>
      <Button variant="contained" color="primary" onClick={showFileDialog}>
        Wybierz lokalizację
      </Button>
    </div>
  );
}

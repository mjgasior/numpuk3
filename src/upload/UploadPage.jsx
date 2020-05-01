import React from "react";
import { showFileDialog } from "./showFileDialog";
import Button from "@material-ui/core/Button";

export function UploadPage() {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={showFileDialog}>
        Wybierz lokalizację
      </Button>
    </div>
  );
}

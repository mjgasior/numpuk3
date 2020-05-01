import React from "react";
import { showFileDialog } from "./showFileDialog";

export function UploadPage() {
  return (
    <div>
      <h2>Upload page</h2>
      <p>
        This is the environment build: <i>{process.env.NODE_ENV}</i>
      </p>
      <button onClick={showFileDialog}>Show dialog</button>
    </div>
  );
}

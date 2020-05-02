import React from "react";
import Button from "@material-ui/core/Button";
import { FilesList } from "./+components/FilesList";

export const ProcessFilesPage = ({ files, directory }) => {
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => null}>
        Przetwarzaj pliki
      </Button>
      <FilesList files={files} directory={directory} />
    </>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { FilesList } from "./+components/FilesList";
import { processFiles } from "./readSpreadsheet";

export const ProcessFilesPage = ({ files, directory }) => {
  const { t } = useTranslation();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => processFiles(`${directory}/${files[0]}`)}
      >
        {t("n3_process_files")}
      </Button>
      <FilesList files={files} directory={directory} />
    </>
  );
};

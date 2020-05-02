import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { FilesList } from "./+components/FilesList";

export const ProcessFilesPage = ({ files, directory }) => {
  const { t } = useTranslation();
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => null}>
        {t("n3_process_files")}
      </Button>
      <FilesList files={files} directory={directory} />
    </>
  );
};

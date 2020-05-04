import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { showFilesInDirectoryDialog } from "./filesInDirectoryDialog";
import Button from "@material-ui/core/Button";
import { ExaminationsContext } from "../+context/ExaminationsContext";
import { FilesList } from "./+components/FilesList";

import { makeStyles } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { processExaminations } from "../+services/examinationProcessor";
import { ProcessingDialog } from "./+components/ProcessingDialog";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const UploadPage = () => {
  const {
    filesList,
    setFilesList,
    selectedDirectory,
    setSelectedDirectory,
  } = useContext(ExaminationsContext);
  const { t } = useTranslation();
  const classes = useStyles();

  const [processedFiles, setProcessedFiles] = useState(0);
  const [isDialogOpen, setisDialogOpen] = useState(false);

  const handleProcessFiles = async () => {
    setisDialogOpen(true);
    setProcessedFiles(0);

    await processExaminations(filesList, selectedDirectory, setProcessedFiles);
  };

  const handlePickFiles = async () => {
    const {
      selectedFiles,
      selectedDirectory,
    } = await showFilesInDirectoryDialog(t);

    if (selectedDirectory) {
      setFilesList(selectedFiles);
      setSelectedDirectory(selectedDirectory);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<AccountTreeIcon />}
        onClick={handlePickFiles}
      >
        {t("n3_select_directory")}
      </Button>
      <ProcessingDialog
        open={isDialogOpen}
        onClose={() => setisDialogOpen(false)}
        processedFiles={processedFiles}
        filesCount={filesList.length}
      />
      {filesList.length !== 0 && (
        <>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            onClick={handleProcessFiles}
          >
            {t("n3_process_files")}
          </Button>

          <FilesList files={filesList} directory={selectedDirectory} />
        </>
      )}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTranslation } from "react-i18next";
import { showExportDirectoryDialog } from "./directoryDialog";
import { saveExaminations } from "../../+services/examinationCreator";

export const ExportDialog = ({
  isOpen,
  onClose,
  metadataVisibility,
  metadataFilters,
  testsVisibility,
  testFilters,
}) => {
  const metadataDictionary = useTranslation("n3_metadata");
  const { t } = useTranslation();
  const [directory, setDirectory] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handlePickDirectory = async () => {
      const selectedDirectory = await showExportDirectoryDialog(t);

      if (selectedDirectory) {
        setDirectory(selectedDirectory);
        await saveExaminations(
          metadataDictionary.t,
          selectedDirectory,
          metadataVisibility,
          metadataFilters,
          testsVisibility,
          testFilters,
          setProgress
        );
      } else {
        onClose();
      }
    };

    if (isOpen && directory === "") {
      handlePickDirectory();
    }

    if (!isOpen && directory !== "") {
      setDirectory("");
      setProgress(0);
    }
  }, [
    isOpen,
    directory,
    t,
    metadataDictionary.t,
    metadataVisibility,
    metadataFilters,
    testsVisibility,
    testFilters,
    onClose,
  ]);

  const hasDirectorySet = directory !== "";
  const isFinished = progress > 99;
  return (
    <>
      {hasDirectorySet && (
        <Dialog
          onClose={onClose}
          open={isOpen}
          scroll="paper"
          fullWidth={true}
          maxWidth="lg"
        >
          <DialogTitle>{t("n3_export_to_excel")}</DialogTitle>
          <DialogContent dividers={true}>
            <p>{directory}</p>
            <LinearProgress variant="determinate" value={progress} />
          </DialogContent>
          {isFinished && (
            <DialogActions>
              <Button onClick={onClose}>OK</Button>
            </DialogActions>
          )}
        </Dialog>
      )}
    </>
  );
};

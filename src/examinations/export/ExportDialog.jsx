import React, { useState, useEffect } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";
import { showExportDirectoryDialog } from "./directoryDialog";
import { saveExaminations } from "../../+services/examinationCreator";

export const ExportDialog = ({
  isOpen,
  onClose,
  testFilters,
  metadataFilters,
}) => {
  const { t } = useTranslation();
  const [directory, setDirectory] = useState("");

  useEffect(() => {
    const handlePickDirectory = async () => {
      const selectedDirectory = await showExportDirectoryDialog(t);

      if (selectedDirectory) {
        setDirectory(selectedDirectory);
        await saveExaminations(selectedDirectory, testFilters, metadataFilters);
      } else {
        onClose();
      }
    };

    if (isOpen && directory === "") {
      handlePickDirectory();
    }

    if (!isOpen && directory !== "") {
      setDirectory("");
    }
  }, [isOpen, directory]);

  const hasDirectorySet = directory !== "";
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
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>{t("n3_cancel")}</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";

export const ExportDialog = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  /*const handlePickDirectory = async () => {
    const selectedDirectory = await showExportDirectoryDialog(t);

    if (selectedDirectory) {
      openExportDialog();
    }
  };*/

  return (
    <Dialog
      onClose={onClose}
      open={isOpen}
      scroll="paper"
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle>{t("n3_set_column_visibility")}</DialogTitle>
      <DialogContent dividers={true}>
        <p>sdas</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("n3_cancel")}</Button>
      </DialogActions>
    </Dialog>
  );
};

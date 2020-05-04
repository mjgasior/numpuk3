import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import LinearProgress from "@material-ui/core/LinearProgress";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";

export const ProcessingDialog = ({
  onClose,
  open,
  filesCount,
  processedFiles,
}) => {
  const { t } = useTranslation();
  return (
    <Dialog
      onClose={onClose}
      open={open}
      scroll="paper"
      fullWidth={true}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogTitle>{t("n3_processing_files")}</DialogTitle>
      <DialogContent dividers={true}>
        <div>
          {processedFiles} / {filesCount}
        </div>
        <LinearProgress
          variant="determinate"
          value={(processedFiles * 100) / filesCount}
        />
      </DialogContent>
      <DialogActions>
        {processedFiles === filesCount && (
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

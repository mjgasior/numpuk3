import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import { Metadata } from "./+components/Metadata";

export const VisibilityDialog = ({
  onCancel,
  onAccept,
  open,
  metadataVisibility,
  testsVisibility,
}) => {
  const { t } = useTranslation();

  const [newMetadataVisibility, setNewMetadataVisibility] = useState(
    metadataVisibility
  );

  const [newTestsVisibility, setNewTestsVisibility] = useState(testsVisibility);

  return (
    <Dialog
      onClose={onCancel}
      open={open}
      scroll="paper"
      fullWidth={true}
      maxWidth="lg"
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogTitle>{t("n3_set_column_visibility")}</DialogTitle>
      <DialogContent dividers={true}>
        <Grid container spacing={3}>
          <Metadata
            setMetadataVisibility={setNewMetadataVisibility}
            metadataVisibility={newMetadataVisibility}
          />
          <Metadata
            setMetadataVisibility={setNewTestsVisibility}
            metadataVisibility={newTestsVisibility}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{t("n3_cancel")}</Button>
        <Button
          onClick={() => onAccept(newMetadataVisibility, newTestsVisibility)}
          color="primary"
        >
          {t("n3_apply")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

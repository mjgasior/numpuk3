import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import { TestFiltersList } from "./tests/TestFiltersList";
import { MetadataFiltersList } from "./metadata/MetadataFiltersList";

export const VisibilityDialog = ({
  onCancel,
  onAccept,
  open,
  metadataVisibility,
  metadataFilters,
  testsVisibility,
  testFilters,
}) => {
  const { t } = useTranslation();

  const [newMetadataVisibility, setNewMetadataVisibility] = useState(
    metadataVisibility
  );
  const [newMetadataFilters, setNewMetadataFilters] = useState(metadataFilters);

  const [newTestsVisibility, setNewTestsVisibility] = useState(testsVisibility);
  const [newTestsFilters, setNewTestsFilters] = useState(testFilters);

  return (
    <Dialog
      onClose={onCancel}
      open={open}
      scroll="paper"
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle>{t("n3_set_column_visibility")}</DialogTitle>
      <DialogContent dividers={true}>
        <Grid container spacing={3}>
          <MetadataFiltersList
            visibility={newMetadataVisibility}
            setVisibility={setNewMetadataVisibility}
            filters={newMetadataFilters}
            setFilters={setNewMetadataFilters}
          />
          <TestFiltersList
            visibility={newTestsVisibility}
            setVisibility={setNewTestsVisibility}
            filters={newTestsFilters}
            setFilters={setNewTestsFilters}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{t("n3_cancel")}</Button>
        <Button
          onClick={() =>
            onAccept(
              newMetadataVisibility,
              newMetadataFilters,
              newTestsVisibility,
              newTestsFilters
            )
          }
          color="primary"
        >
          {t("n3_apply")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

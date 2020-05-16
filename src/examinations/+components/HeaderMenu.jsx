import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArchiveIcon from "@material-ui/icons/Archive";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const HeaderMenu = ({ openVisibility, openExport }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<VisibilityIcon />}
        onClick={openVisibility}
      >
        {t("n3_set_column_visibility")}
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<ArchiveIcon />}
        onClick={openExport}
      >
        {t("n3_export_to_excel")}
      </Button>
    </div>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { closeApp } from "./../+utils/application";

export const CloseButton = () => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("n3_close")}>
      <IconButton color="primary" onClick={closeApp}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};

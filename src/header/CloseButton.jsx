import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { closeApp } from "./../+utils/application";

export const CloseButton = () => {
  return (
    <Tooltip title="Zamknij">
      <IconButton color="primary" onClick={closeApp}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};

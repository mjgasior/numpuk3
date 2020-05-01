import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { browserWindow } from "./../+utils/electron";

export const CloseButton = () => {
  return (
    <Tooltip title="Zamknij">
      <IconButton color="primary" onClick={() => browserWindow.close()}>
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
};

import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import TableCell from "@material-ui/core/TableCell";

export const TooltipCell = ({ title, children }) => {
  return (
    <Tooltip arrow title={title} placement="top">
      <TableCell>{children}</TableCell>
    </Tooltip>
  );
};

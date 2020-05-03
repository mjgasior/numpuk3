import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { ROUTES } from "../../+utils/routings";
import { ExaminationsContext } from "../../+context/ExaminationsContext";

export const FileButtonLink = ({ target }) => {
  const { setOpenedExamination } = useContext(ExaminationsContext);
  const history = useHistory();

  const handleClick = () => {
    setOpenedExamination(target);
    history.push(ROUTES.READER);
  };

  return (
    <IconButton size="small" onClick={handleClick}>
      <InsertDriveFileIcon />
    </IconButton>
  );
};

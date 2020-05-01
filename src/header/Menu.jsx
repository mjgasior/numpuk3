import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import { ButtonLink } from "./ButtonLink";

export const Menu = () => {
  return (
    <>
      <ButtonLink to="/">
        <ListIcon />
      </ButtonLink>
      <ButtonLink to="/upload">
        <CloudUploadIcon />
      </ButtonLink>
    </>
  );
};

import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import { ButtonLink } from "./ButtonLink";
import { CloseButton } from "./CloseButton";

export const Menu = () => {
  return (
    <>
      <ButtonLink title="Badania" to="/">
        <ListIcon />
      </ButtonLink>
      <ButtonLink title="Dodaj nowe badania" to="/upload">
        <CloudUploadIcon />
      </ButtonLink>
      <CloseButton />
    </>
  );
};

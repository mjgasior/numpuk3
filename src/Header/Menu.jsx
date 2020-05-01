import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { ButtonLink } from "./ButtonLink";

export const Menu = () => {
  return (
    <>
      <ButtonLink to="/">
        <AddShoppingCartIcon />
      </ButtonLink>
      <ButtonLink to="/books">
        <CloudUploadIcon />
      </ButtonLink>
    </>
  );
};

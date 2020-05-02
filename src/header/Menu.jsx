import React from "react";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import { ButtonLink } from "./ButtonLink";
import { CloseButton } from "./CloseButton";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonLink title={t("n3_examinations")} to="/">
        <ListIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_add_new_examinations")} to="/upload">
        <CloudUploadIcon />
      </ButtonLink>
      <CloseButton />
    </>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { ButtonLink } from "./ButtonLink";
import { CloseButton } from "./CloseButton";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonLink title={t("n3_open_single")} to="/">
        <FolderOpenIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_examinations")} to="/examinations">
        <ListIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_add_new_examinations")} to="/upload">
        <CloudUploadIcon />
      </ButtonLink>
      <CloseButton />
    </>
  );
};

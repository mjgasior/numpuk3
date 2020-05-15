import React from "react";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import BallotIcon from "@material-ui/icons/Ballot";
import EditIcon from "@material-ui/icons/Edit";
import { ButtonLink } from "./ButtonLink";
import { CloseButton } from "./CloseButton";
import { ROUTES } from "../../+utils/routings";
import { LanguageSwitch } from "./LanguageSwitch";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonLink title={t("n3_open_single")} to={ROUTES.READER}>
        <FolderOpenIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_examinations")} to={ROUTES.EXAMINATIONS}>
        <ListIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_add_new_examinations")} to={ROUTES.UPLOAD}>
        <CloudUploadIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_test_types_editor")} to={ROUTES.EDITOR}>
        <EditIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_logs")} to={ROUTES.LOGS}>
        <BallotIcon />
      </ButtonLink>
      <LanguageSwitch />
      <CloseButton />
    </>
  );
};

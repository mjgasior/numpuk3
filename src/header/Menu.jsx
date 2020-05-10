import React from "react";
import { useTranslation } from "react-i18next";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import BallotIcon from "@material-ui/icons/Ballot";
import { ButtonLink } from "./ButtonLink";
import { CloseButton } from "./CloseButton";
import { ROUTES } from "../+utils/routings";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <>
      <ButtonLink title={t("n3_examinations")} to={ROUTES.EXAMINATION_GRID}>
        <ListIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_examinations")} to={ROUTES.EXAMINATIONS}>
        <ListIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_open_single")} to={ROUTES.READER}>
        <FolderOpenIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_add_new_examinations")} to={ROUTES.UPLOAD}>
        <CloudUploadIcon />
      </ButtonLink>
      <ButtonLink title={t("n3_logs")} to={ROUTES.LOGS}>
        <BallotIcon />
      </ButtonLink>
      <CloseButton />
    </>
  );
};

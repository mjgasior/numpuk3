import React from "react";
import ReactJson from "react-json-view";
import { useTranslation } from "react-i18next";

export const JsonEditor = ({ jsonData, onDelete, onAdd, onEdit, type }) => {
  const { t } = useTranslation("n3_metadata");
  return (
    <>
      <div>{t(type)}</div>
      <ReactJson
        src={jsonData}
        name={false}
        enableClipboard={false}
        displayDataTypes={false}
        onDelete={(e) => onDelete(type, e)}
        onAdd={(e) => onAdd(type, e)}
        onEdit={(e) => onEdit(type, e)}
      />
    </>
  );
};

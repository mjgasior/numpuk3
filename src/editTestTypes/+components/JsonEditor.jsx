import React from "react";
import ReactJson from "react-json-view";

export const JsonEditor = ({ jsonData, onDelete, onAdd, onEdit, type }) => {
  return (
    <ReactJson
      src={jsonData}
      name={false}
      enableClipboard={false}
      displayDataTypes={false}
      onDelete={(e) => onDelete(type, e)}
      onAdd={(e) => onAdd(type, e)}
      onEdit={(e) => onEdit(type, e)}
    />
  );
};

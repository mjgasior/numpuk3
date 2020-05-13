import React, { useState } from "react";
import ReactJson from "react-json-view";
import { getTypes } from "../+services/testTypeService";

export const TestTypeEditor = () => {
  const [types, setTypes] = useState(getTypes());

  const handleDelete = ({ updated_src }) => setTypes(updated_src);

  const handleAdd = ({ new_value, updated_src, existing_src }) => {
    if (Array.isArray(new_value)) {
      setTypes(updated_src);
    } else {
      setTypes(existing_src);
    }
  };

  const handleEdit = ({ new_value, updated_src, existing_value }) => {
    if (existing_value !== new_value) {
      setTypes(updated_src);
    }
  };

  return (
    <ReactJson
      src={types}
      name={false}
      enableClipboard={false}
      displayDataTypes={false}
      onDelete={handleDelete}
      onAdd={handleAdd}
      onEdit={handleEdit}
    />
  );
};

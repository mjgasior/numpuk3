import React, { useState } from "react";
import { getTypes } from "../+services/testTypeService";
import { JsonEditor } from "./+components/JsonEditor";

export const TestTypeEditor = () => {
  const [types, setTypes] = useState(getTypes());

  const handleDelete = (type, e) => {
    setTypes((old) => ({ ...old, [type]: e.updated_src }));
  };

  const handleAdd = (type, e) => {
    setTypes((old) => ({ ...old, [type]: e.updated_src }));
  };

  const handleEdit = (type, { new_value, updated_src, existing_value }) => {
    if (existing_value !== new_value) {
      setTypes((old) => ({ ...old, [type]: updated_src }));
    }
  };

  return (
    <>
      {Object.keys(types).map((type) => (
        <JsonEditor
          key={type}
          type={type}
          jsonData={types[type]}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onEdit={handleEdit}
        />
      ))}
    </>
  );
};

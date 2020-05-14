import React, { useState, useCallback } from "react";
import { getTypes } from "../+services/testTypeService";
import { JsonEditor } from "./+components/JsonEditor";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import styled from "styled-components";
import { Toast } from "./+components/Toast";

const ButtonContainer = styled.div`
  margin: 10px;
`;

export const TestTypeEditor = () => {
  const { t } = useTranslation();
  const [types, setTypes] = useState(getTypes());
  const [isSnackbar, setIsSnackbar] = useState(false);

  const handleDelete = useCallback(
    (type, e) => setTypes((old) => ({ ...old, [type]: e.updated_src })),
    [setTypes]
  );

  const handleAdd = useCallback(
    (type, e) => setTypes((old) => ({ ...old, [type]: e.updated_src })),
    [setTypes]
  );

  const handleEdit = useCallback(
    (type, { new_value, updated_src, existing_value }) => {
      if (existing_value !== new_value) {
        setTypes((old) => ({ ...old, [type]: updated_src }));
      }
    },
    [setTypes]
  );

  return (
    <>
      <ButtonContainer>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => setIsSnackbar(true)}
        >
          {t("n3_save_changes")}
        </Button>
      </ButtonContainer>
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

      <Toast
        isOpen={isSnackbar}
        onClose={() => setIsSnackbar(false)}
        message={t("n3_saved")}
      />
    </>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import { ConsistencyPicker } from "./+components/ConsistencyPicker";

export const ExaminationFilters = () => {
  const { t } = useTranslation("n3_metadata");
  return (
    <div>
      <ConsistencyPicker t={t} onConsistencyChanged={() => null} />
    </div>
  );
};

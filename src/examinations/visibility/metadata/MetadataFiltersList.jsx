import React, { useState } from "react";
import { PhSlider, PhFilter } from "./PhFilter";
import { LabelSwitch } from "../+components/LabelSwitch";
import { useTranslation } from "react-i18next";
import { Block } from "../+components/Block";

export const MetadataFiltersList = ({ visibility, setVisibility }) => {
  const { t } = useTranslation("n3_metadata");

  const [filters, setFilters] = useState({
    gender: {},
    ageAtTest: { min: 0, max: 140 },
    ph: { min: 0, max: 14 },
    bacteriaCount: {},
    consistency: {},
    hasAkkermansiaMuciniphila: true,
    hasFaecalibactriumPrausnitzii: true,
  });

  const handleChange = (event) =>
    setVisibility((old) => ({
      ...old,
      [event.target.name]: event.target.checked,
    }));

  const handlePhChange = (newValue) =>
    setFilters((old) => ({ ...old, ph: newValue }));

  const { ph, ...rest } = visibility;

  return (
    <Block>
      {Object.keys(rest).map((objectKey) => (
        <>
          <LabelSwitch
            key={objectKey}
            label={t(objectKey)}
            handleChange={handleChange}
            name={objectKey}
            isVisible={visibility[objectKey]}
          />
        </>
      ))}
      <PhFilter
        visibility={ph}
        filter={filters.ph}
        onVisibility={handleChange}
        onFilter={handlePhChange}
      />
    </Block>
  );
};

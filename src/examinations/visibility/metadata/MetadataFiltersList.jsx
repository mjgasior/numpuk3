import React, { useState, useCallback } from "react";
import { PhFilter } from "./PhFilter";
import { LabelSwitch } from "../+components/LabelSwitch";
import { useTranslation } from "react-i18next";
import { Block } from "../+components/Block";
import { Filter } from "../+components/Filter";

export const MetadataFiltersList = ({ visibility, setVisibility }) => {
  const { t } = useTranslation("n3_metadata");

  const [filters, setFilters] = useState({
    gender: undefined,
    ageAtTest: { min: 0, max: 140 },
    ph: { min: 0, max: 14 },
    bacteriaCount: {},
    consistency: {},
    hasAkkermansiaMuciniphila: undefined,
    hasFaecalibactriumPrausnitzii: undefined,
  });

  const handleVisibilityChange = useCallback(
    (name, value) => {
      setVisibility((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setVisibility]
  );

  const handleFilterChange = useCallback(
    (name, value) => {
      setFilters((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    },
    [setFilters]
  );

  const handlePhChange = (newValue) =>
    setFilters((old) => ({ ...old, ph: newValue }));

  const {
    gender,
    ageAtTest,
    ph,
    bacteriaCount,
    consistency,
    hasAkkermansiaMuciniphila,
    hasFaecalibactriumPrausnitzii,
  } = visibility;

  return (
    <Block>
      <Filter
        t={t}
        onVisibilityChange={handleVisibilityChange}
        isVisible={gender}
        onFilterChange={handleFilterChange}
        isFiltered={filters.gender}
        objectKey="gender"
      />
      <Filter
        t={t}
        onVisibilityChange={handleVisibilityChange}
        isVisible={ageAtTest}
        onFilterChange={handleFilterChange}
        isFiltered={filters.ageAtTest}
        objectKey="ageAtTest"
      />
      <Filter
        t={t}
        onVisibilityChange={handleVisibilityChange}
        isVisible={bacteriaCount}
        onFilterChange={handleFilterChange}
        isFiltered={filters.bacteriaCount}
        objectKey="bacteriaCount"
      />
      <Filter
        t={t}
        onVisibilityChange={handleVisibilityChange}
        isVisible={consistency}
        onFilterChange={handleFilterChange}
        isFiltered={filters.consistency}
        objectKey="consistency"
      />
      <Filter
        t={t}
        onVisibilityChange={handleVisibilityChange}
        isVisible={hasAkkermansiaMuciniphila}
        onFilterChange={handleFilterChange}
        isFiltered={filters.hasAkkermansiaMuciniphila}
        objectKey="hasAkkermansiaMuciniphila"
      />
      <Filter
        t={t}
        onVisibilityChange={handleVisibilityChange}
        isVisible={hasFaecalibactriumPrausnitzii}
        onFilterChange={handleFilterChange}
        isFiltered={filters.hasFaecalibactriumPrausnitzii}
        objectKey="hasFaecalibactriumPrausnitzii"
      />
      <PhFilter
        visibility={ph}
        filter={filters.ph}
        onVisibility={handleVisibilityChange}
        onFilter={handlePhChange}
      />
    </Block>
  );
};

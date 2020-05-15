import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Block } from "../+components/Block";
import { Filter } from "../+components/Filter";
import { SliderFilter } from "./SliderFilter";
import { useHandleCallback } from "../+hooks/useHandleCallback";

export const MetadataFiltersList = ({
  visibility,
  setVisibility,
  filters,
  setFilters,
}) => {
  const { t } = useTranslation("n3_metadata");

  const handleVisibilityChange = useHandleCallback(setVisibility);
  const handleFilterChange = useHandleCallback(setFilters);

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
      <SliderFilter
        t={t}
        objectKey="ageAtTest"
        isVisible={ageAtTest}
        onVisibilityChange={handleVisibilityChange}
        filter={filters.ageAtTest}
        onFilter={handleFilterChange}
        min={0}
        max={140}
      />
      <SliderFilter
        t={t}
        objectKey="ph"
        isVisible={ph}
        onVisibilityChange={handleVisibilityChange}
        filter={filters.ph}
        onFilter={handleFilterChange}
        min={0}
        max={14}
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
    </Block>
  );
};

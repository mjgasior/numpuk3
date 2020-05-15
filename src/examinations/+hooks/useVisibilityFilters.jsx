import { useState, useMemo } from "react";
import { getAllTypes } from "../../+services/testTypeService";

const createInitialObject = (sourceArray) => {
  const settingsObject = {};
  sourceArray.forEach((x) => {
    settingsObject[x] = true;
  });
  return settingsObject;
};

export const useVisibilityFilters = () => {
  const [metadataVisibility, setMetadataVisibility] = useState({
    gender: true,
    ageAtTest: true,
    ph: true,
    bacteriaCount: true,
    consistency: true,
    hasAkkermansiaMuciniphila: true,
    hasFaecalibactriumPrausnitzii: true,
  });

  const [metadataFilters, setMetadataFilters] = useState({
    gender: undefined,
    ageAtTest: { min: 0, max: 140 },
    ph: { min: 0, max: 14 },
    bacteriaCount: undefined,
    consistency: undefined,
    hasAkkermansiaMuciniphila: undefined,
    hasFaecalibactriumPrausnitzii: undefined,
  });

  const [testsVisibility, setTestsVisibility] = useState(
    createInitialObject(getAllTypes())
  );

  const [testFilters, setTestFilters] = useState({});

  return useMemo(
    () => ({
      metadataVisibility,
      setMetadataVisibility,
      metadataFilters,
      setMetadataFilters,
      testsVisibility,
      setTestsVisibility,
      testFilters,
      setTestFilters,
    }),
    [metadataVisibility, metadataFilters, testsVisibility, testFilters]
  );
};

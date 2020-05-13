import { useState, useMemo } from "react";
import { getAllTypes } from "../../+services/readers/testTypes/testTypeService";

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

  const [testsVisibility, setTestsVisibility] = useState(
    createInitialObject(getAllTypes())
  );

  const [testFilters, setTestFilters] = useState({});

  return useMemo(
    () => ({
      metadataVisibility,
      setMetadataVisibility,
      testsVisibility,
      setTestsVisibility,
      testFilters,
      setTestFilters,
    }),
    [metadataVisibility, testsVisibility, testFilters]
  );
};

const createInitialObject = (sourceArray) => {
  const settingsObject = {};
  sourceArray.forEach((x) => {
    settingsObject[x] = true;
  });
  return settingsObject;
};

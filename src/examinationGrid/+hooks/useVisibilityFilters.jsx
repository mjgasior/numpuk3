import { useState } from "react";
import { ALL_TEST_TYPES } from "../../+services/readers/testTypes/testTypes";

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
    createInitialObject(ALL_TEST_TYPES)
  );

  return {
    metadataVisibility,
    setMetadataVisibility,
    testsVisibility,
    setTestsVisibility,
  };
};

const createInitialObject = (sourceArray) => {
  const settingsObject = {};
  sourceArray.forEach((x) => {
    settingsObject[x] = true;
  });
  return settingsObject;
};

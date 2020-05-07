import { useState } from "react";

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
  return { metadataVisibility, setMetadataVisibility };
};

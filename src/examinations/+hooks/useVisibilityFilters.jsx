import { useState } from "react";

export const useVisibilityFilters = () => {
  const [metadataVisibility, setMetadataVisibility] = useState({
    gender: 1,
    ageAtTest: 1,
    ph: 1,
    bacteriaCount: 1,
    consistency: 1,
  });
  return { metadataVisibility, setMetadataVisibility };
};

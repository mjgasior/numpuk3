import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = (metadataVisibility, testsVisibility) => {
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    const loadExaminations = async () => {
      const loadedExaminations = await getExaminations(
        metadataVisibility,
        testsVisibility
      );
      setExaminations(loadedExaminations);
    };

    loadExaminations();
  }, [metadataVisibility, testsVisibility]);

  return { examinations };
};

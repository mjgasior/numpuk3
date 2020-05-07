import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = (metadataVisibility) => {
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    const loadExaminations = async () => {
      const loadedExaminations = await getExaminations(metadataVisibility);
      setExaminations(loadedExaminations);
    };

    loadExaminations();
  }, [metadataVisibility]);

  return { examinations };
};

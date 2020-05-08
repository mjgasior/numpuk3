import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = (metadataVisibility, testsVisibility) => {
  const [examinationsData, setExaminationsData] = useState({
    examinations: [],
  });

  useEffect(() => {
    const loadExaminations = async () => {
      const data = await getExaminations(metadataVisibility, testsVisibility);
      setExaminationsData(data);
    };

    loadExaminations();
  }, [metadataVisibility, testsVisibility]);

  return examinationsData;
};

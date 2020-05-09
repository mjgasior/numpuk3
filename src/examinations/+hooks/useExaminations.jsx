import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = (
  metadataVisibility,
  testsVisibility,
  pagination
) => {
  const [examinationsData, setExaminationsData] = useState({
    examinations: [],
    count: 0,
  });

  useEffect(() => {
    const loadExaminations = async () => {
      const data = await getExaminations(
        metadataVisibility,
        testsVisibility,
        pagination
      );
      setExaminationsData(data);
    };

    loadExaminations();
  }, [metadataVisibility, testsVisibility, pagination]);

  console.log("I fetch");

  return examinationsData;
};

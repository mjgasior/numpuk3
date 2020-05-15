import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = (
  metadataVisibility,
  metadataFilters,
  testsVisibility,
  testFilters,
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
        metadataFilters,
        testsVisibility,
        testFilters,
        pagination
      );
      setExaminationsData(data);
    };
    loadExaminations();
  }, [
    metadataVisibility,
    metadataFilters,
    testsVisibility,
    testFilters,
    pagination,
  ]);

  return examinationsData;
};

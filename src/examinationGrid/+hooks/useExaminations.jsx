import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = (
  metadataVisibility,
  testsVisibility,
  pagination
) => {
  const [examinationsData, setExaminationsData] = useState({
    examinations: [],
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

  return morphToGrid(metadataVisibility, testsVisibility, examinationsData);
};

const morphToGrid = (metadata, tests, objectExaminations) => {
  const metadataColumns = Object.keys(metadata);
  const testColumns = Object.keys(tests);
  const output = [];
  output[0] = metadataColumns.concat(testColumns);
  objectExaminations.examinations.forEach((item, i) => {
    const row = [];
    metadataColumns.forEach((key) => row.push(item[key]));
    testColumns.forEach((key) => row.push(item.results[key]));
    output[i + 1] = row;
  });

  return { examinations: output, count: objectExaminations.count };
};

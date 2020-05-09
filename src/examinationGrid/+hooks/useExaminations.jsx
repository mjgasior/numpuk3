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
  console.log(objectExaminations);
  const headers = Object.keys(metadata).concat(Object.keys(tests));
  const output = [];
  output[0] = headers;
  objectExaminations.examinations.forEach((item, i) => {
    const row = [];
    headers.forEach((key) => row.push(item[key]));
    output[i + 1] = row;
  });
  console.log(output);
  return { examinations: output, count: 10 };
};

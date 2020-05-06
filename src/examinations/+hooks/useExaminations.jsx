import { useState, useEffect } from "react";
import { getExaminations } from "../../+services/examinationReader";

export const useExaminations = () => {
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    const loadExaminations = async () => {
      const loadedExaminations = await getExaminations(true);
      setExaminations(loadedExaminations);
    };

    loadExaminations();
  }, []);

  return { examinations };
};

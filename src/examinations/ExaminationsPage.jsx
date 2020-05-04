import React, { useEffect, useState } from "react";
import { getExaminations } from "../+services/examinationReader";
import { ExaminationTable } from "./table/ExaminationTable";
import { ExaminationFilters } from "./filters/ExaminationFilters";

export const ExaminationsPage = () => {
  const [examinations, setExaminations] = useState([]);

  useEffect(() => {
    const loadExaminations = async () => {
      const loadedExaminations = await getExaminations();
      setExaminations(loadedExaminations);
    };

    loadExaminations();
  }, []);

  return (
    <>
      <ExaminationFilters />
      <ExaminationTable examinations={examinations} />
    </>
  );
};

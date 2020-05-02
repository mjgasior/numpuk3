import React from "react";
import { getPersonalData } from "../../+utils/examinations";

export const SingleExamination = ({ spreadsheet }) => {
  const data = getPersonalData(spreadsheet);

  return <p>{data.name}</p>;
};

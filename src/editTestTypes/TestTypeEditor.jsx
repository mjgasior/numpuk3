import React from "react";
import ReactJson from "react-json-view";
import { getAllTypes } from "../+services/testTypeService";

export const TestTypeEditor = () => {
  const all = getAllTypes();
  return <ReactJson src={all} theme="monokai" />;
};

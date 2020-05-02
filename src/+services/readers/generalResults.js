import { exceljs } from "../../+utils/apis/dependenciesApi";
import { setConsistency } from "./normalizer";

const GENERAL_DATA_SECTION = {
  ph: "H3",
  consistency: "H4",
};

export const getPh = (worksheet) => {
  const cell = worksheet.getCell(GENERAL_DATA_SECTION.ph);
  if (cell.type !== exceljs.ValueType.Number) {
    throw "Loaded file has a non number cell!";
  }
  return cell.value;
};

export const getConsistency = (worksheet) => {
  const cell = worksheet.getCell(GENERAL_DATA_SECTION.consistency);
  if (cell.type !== exceljs.ValueType.String) {
    throw "Loaded file has a non number cell!";
  }
  return setConsistency(cell.value);
};

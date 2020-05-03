import { exceljs } from "../../+apis/dependenciesApi";
import { setConsistency } from "./+utils/normalizer";

const GENERAL_DATA_SECTION = {
  ph: "H3",
  consistency: "H4",
};

export const getPh = (worksheet) => {
  const cell = worksheet.getCell(GENERAL_DATA_SECTION.ph);

  if (cell.type === exceljs.ValueType.String) {
    if (cell.value.toLowerCase() === "zbyt mała ilość materiału") {
      console.log("Too little sample to rate PH value!");
      return undefined;
    }
  }

  if (cell.type !== exceljs.ValueType.Number) {
    throw new Error(`${cell.value} is not valid PH value`);
  }
  return cell.value;
};

export const getConsistency = (worksheet) => {
  const cell = worksheet.getCell(GENERAL_DATA_SECTION.consistency);
  if (cell.type !== exceljs.ValueType.String) {
    throw new Error(`${cell.value} is not valid consistency value`);
  }
  return setConsistency(cell.value);
};

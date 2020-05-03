import { exceljs, log } from "../../+apis/dependenciesApi";
import { setConsistency } from "./+utils/normalizer";
import { setValue } from "./+utils/dataReader";

const GENERAL_DATA_SECTION = {
  ph: "H3",
  consistency: "H4",
  bacteriaCountBase: "H6",
  bacteriaCountExponent: "I6",
};

export const getPh = (worksheet) => {
  const cell = worksheet.getCell(GENERAL_DATA_SECTION.ph);

  if (cell.type === exceljs.ValueType.Null) {
    return undefined;
  }

  if (cell.type === exceljs.ValueType.String) {
    const cellValue = cell.value.toLowerCase().trim();
    if (cellValue === "zbyt mała ilość materiału") {
      log.warn("Too little sample to rate PH value!");
      return undefined;
    } else if (cellValue !== "" && !isNaN(cellValue)) {
      const parsedValue = parseFloat(cellValue);
      log.warn(
        `Value of ${cellValue} was parsed into ${parsedValue} because of wrong format.`
      );
      return parsedValue;
    }
    log.warn(`Value of "${cellValue}" was set to be undefined.`);
    return undefined;
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
  return setConsistency(cell.value.trim());
};

export const getBacteriaCount = (worksheet) => {
  const valueCell = worksheet.getCell(GENERAL_DATA_SECTION.bacteriaCountBase);
  const exponentCell = worksheet.getCell(
    GENERAL_DATA_SECTION.bacteriaCountExponent
  );

  const result = setValue(valueCell, exponentCell);
  if (result !== undefined) {
    return result;
  }

  log.error(
    `Could not read bacteria count from cells ${valueCell.text} and ${exponentCell.text}`
  );
  return undefined;
};

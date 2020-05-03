import { isZeroValue, isExponential, readExponent } from "./+utils/dataReader";
import { log } from "../../+utils/log";

export const getCandidiasisResults = (worksheet) => {
  let dictionary = {};
  let i = 0;
  for (; i < 3; i++) {
    try {
      const nameCell = worksheet.getRow(i + 8).getCell(7);
      const valueCell = worksheet.getRow(i + 8).getCell(8);
      const exponentCell = worksheet.getRow(i + 8).getCell(9);
      if (valueCell.value === null) {
        continue;
      }

      if (isZeroValue(valueCell)) {
        dictionary[nameCell.value] = 0;
        continue;
      } else if (isExponential(valueCell, exponentCell)) {
        const result = readExponent(valueCell, exponentCell);
        dictionary[nameCell.value] = result;
        continue;
      }
    } catch (err) {
      log.error(err);
      throw new Error(`There was an error in section ${i}!`);
    }
  }
  return dictionary;
};

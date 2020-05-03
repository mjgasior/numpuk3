import { isZeroValue, isExponential, readExponent } from "./+utils/dataReader";
import { log } from "../../+utils/log";

export const getExaminationResults = (worksheet) => {
  let dictionary = {};
  let o = 0;
  let i = 0;
  for (; i < 36; i++) {
    try {
      const nameCell = worksheet.getRow(i + 23).getCell(7);
      const valueCell = worksheet.getRow(i + 23).getCell(8);
      const exponentCell = worksheet.getRow(i + 23).getCell(9);
      if (valueCell.value === null) {
        o++;
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

  const diff = i - o;
  if (diff > 30) {
    log.info(`The amount of checks was greater than 30. ${diff} is max`);
  }

  return dictionary;
};

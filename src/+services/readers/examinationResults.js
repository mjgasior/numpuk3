import { isZeroValue, isExponential, readExponent } from "./+utils/dataReader";
import { log } from "../../+apis/dependenciesApi";
import { hasTest, tryFixTestName } from "./testTypes/testTypeService";

export const getExaminationResults = (worksheet) => {
  let dictionary = {};
  let o = 0;
  let i = 0;
  for (; i < 36; i++) {
    try {
      const valueCell = worksheet.getRow(i + 23).getCell(8);
      if (valueCell.value === null) {
        o++;
        continue;
      }

      const exponentCell = worksheet.getRow(i + 23).getCell(9);
      let testName = worksheet
        .getRow(i + 23)
        .getCell(7)
        .text.trim();

      if (!hasTest(testName)) {
        log.warn(`Trying to fix ${testName}`);
        testName = tryFixTestName(testName);
      }

      if (isZeroValue(valueCell)) {
        dictionary[testName] = 0;
        continue;
      } else if (isExponential(valueCell, exponentCell)) {
        const result = readExponent(valueCell, exponentCell);
        dictionary[testName] = result;
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

import { setValue } from "./+utils/dataReader";
import { logger } from "./../logger";
import { hasTest, tryFixTestName } from "./../testTypeService";

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
        .text.trim()
        .replace(".", "");

      if (!hasTest(testName)) {
        logger.warn(`Trying to fix ${testName}`);
        testName = tryFixTestName(testName);
      }

      const result = setValue(valueCell, exponentCell);
      if (result !== undefined) {
        dictionary[testName] = result;
        continue;
      }

      logger.error(
        `Could not read results from cells ${valueCell.text} and ${
          exponentCell.text
        } for row ${i + 23}`
      );
    } catch (err) {
      logger.error(err);
      throw new Error(`There was an error in section ${i}!`);
    }
  }

  const diff = i - o;
  if (diff > 30) {
    logger.info(`The amount of checks was greater than 30. ${diff} is max`);
  }

  return dictionary;
};

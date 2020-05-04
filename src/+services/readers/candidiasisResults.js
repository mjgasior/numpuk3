import { setValue } from "./+utils/dataReader";
import { logger } from "./../logger";

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

      const result = setValue(valueCell, exponentCell);
      if (result !== undefined) {
        dictionary[nameCell.value] = result;
        continue;
      }

      logger.error(
        `Could not read bacteria count from cells ${valueCell.text} and ${exponentCell.text}`
      );
      return undefined;
    } catch (err) {
      logger.error(err);
      throw new Error(`There was an error in section ${i}!`);
    }
  }
  return dictionary;
};

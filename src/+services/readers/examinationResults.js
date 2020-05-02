import { isZeroValue, isExponential, readExponent } from "./+utils/dataReader";

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

      console.log(`NAME: ${nameCell.value} TYPE: ${nameCell.type}`);
      console.log(`VALUE: ${valueCell.value} TYPE: ${valueCell.type}`);
      console.log(`EXPONENT: ${exponentCell.value} TYPE: ${exponentCell.type}`);
    } catch (err) {
      console.log(err);
      throw new Error(`There was an error in section ${i}!`);
    }
  }

  console.log(`${i - o} is max`);

  return dictionary;
};

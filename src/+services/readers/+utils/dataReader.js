import { exceljs } from "../../../+apis/dependenciesApi";

export const isZeroValue = (cell) => {
  return cell.type === exceljs.ValueType.Number && cell.value === 0;
};

export const isExponential = (valueCell, exponentCell) => {
  const isExponentValid =
    exponentCell.type === exceljs.ValueType.Number && exponentCell.value > 0;

  const isValueValid = valueCell.type === exceljs.ValueType.String;

  return isExponentValid && isValueValid;
};

export const readExponent = (valueCell, exponentCell) => {
  const noWhitespaceString = valueCell.value.replace(/ /g, "");
  const baseOfExponent = noWhitespaceString.split("x")[0].replace(/,/g, ".");
  return parseFloat(`${baseOfExponent}e${exponentCell.value}`);
};

import { exceljs } from "./apis/dependenciesApi";

export const EXAMINATION_FILE_EXTENSION = "xlsx";
export const EXAMINATION_FILE_EXTENSION_DOT = ".xlsx";

export const readFile = async (filename) => {
  const workbook = new exceljs.Workbook();
  const spreadsheet = await workbook.xlsx.readFile(filename);
  return spreadsheet;
};

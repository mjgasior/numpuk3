import { exceljs } from "../+utils/apis/dependenciesApi";
import { getMetadata } from "./readers/metadata";
import { getExaminationType } from "./readers/examinationType";

export const EXAMINATION_FILE_EXTENSION = "xlsx";
export const EXAMINATION_FILE_EXTENSION_DOT = ".xlsx";

export const getWorksheet = async (filename) => {
  const workbook = new exceljs.Workbook();
  const spreadsheet = await workbook.xlsx.readFile(filename);

  const MAIN_WORKSHEET_ID = 3;
  const worksheet = spreadsheet.getWorksheet(MAIN_WORKSHEET_ID);

  return worksheet;
};

export { getMetadata, getExaminationType };

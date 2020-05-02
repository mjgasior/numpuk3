import { exceljs } from "./apis/dependenciesApi";

export const EXAMINATION_FILE_EXTENSION = "xlsx";
export const EXAMINATION_FILE_EXTENSION_DOT = ".xlsx";

export const readFile = async (filename) => {
  const workbook = new exceljs.Workbook();
  const spreadsheet = await workbook.xlsx.readFile(filename);
  return spreadsheet;
};

export const getPersonalData = (workbook) => {
  const MAIN_WORKSHEET_ID = 3;
  const worksheet = workbook.getWorksheet(MAIN_WORKSHEET_ID);

  const personalData = {
    name: worksheet.getCell("D2").value,
  };

  return personalData;
};

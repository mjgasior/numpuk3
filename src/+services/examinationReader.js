import { exceljs } from "../+utils/apis/dependenciesApi";
import { getMetadata } from "./readers/metadata";
import { getExaminationType } from "./readers/examinationType";
import { getPh, getConsistency } from "./readers/generalResults";

export const EXAMINATION_FILE_EXTENSION = "xlsx";
export const EXAMINATION_FILE_EXTENSION_DOT = ".xlsx";

const getWorksheet = async (filename) => {
  const workbook = new exceljs.Workbook();
  const spreadsheet = await workbook.xlsx.readFile(filename);

  const MAIN_WORKSHEET_ID = 3;
  const worksheet = spreadsheet.getWorksheet(MAIN_WORKSHEET_ID);

  return worksheet;
};

export const getExamination = async (filename) => {
  const worksheet = await getWorksheet(filename);

  const metadata = getMetadata(worksheet);
  const examinationType = getExaminationType(worksheet);
  const ph = getPh(worksheet);
  const consistency = getConsistency(worksheet);

  return {
    metadata,
    examinationType,
    ph,
    consistency,
  };
};

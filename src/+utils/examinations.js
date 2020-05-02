import { exceljs } from "./apis/dependenciesApi";

export const EXAMINATION_FILE_EXTENSION = "xlsx";
export const EXAMINATION_FILE_EXTENSION_DOT = ".xlsx";

export const readFile = async (filename) => {
  const workbook = new exceljs.Workbook();
  const spreadsheet = await workbook.xlsx.readFile(filename);
  return spreadsheet;
};

const META_DATA_SECTION = {
  examinationId: "D2",
  patientName: "D4",
  birthday: "D5",
  gender: "D6",
  personalId: "D7",
  address: "D8",
  sampleId: "D9",
  dateOfSampling: "D10",
  dateOfSampleRegistration: "D11",
  dateOfTestEnd: "D12",
};

export const getMetadata = (workbook) => {
  const MAIN_WORKSHEET_ID = 3;
  const worksheet = workbook.getWorksheet(MAIN_WORKSHEET_ID);

  let metadata = {};
  Object.keys(META_DATA_SECTION).forEach((key) => {
    metadata[key] = worksheet.getCell(META_DATA_SECTION[key]).value;
  });

  return metadata;
};

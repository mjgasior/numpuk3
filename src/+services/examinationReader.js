import { exceljs } from "../+apis/dependenciesApi";
import { getMetadata } from "./readers/metadata";
import {
  getExaminationType,
  getIsCandidiasis,
  getIsUnknown,
  getIsExtended,
} from "./readers/examinationType";
import { getPh, getConsistency } from "./readers/generalResults";
import { getCandidiasisResults } from "./readers/candidiasisResults";
import { getExaminationResults } from "./readers/examinationResults";
import {
  setHasAkkermansiaMuciniphila,
  setHasFaecalibactriumPrausnitzii,
} from "./readers/extendedResults";

export const EXAMINATION_FILE_EXTENSION = "xlsx";
export const EXAMINATION_FILE_EXTENSION_DOT = ".xlsx";

const getWorksheet = async (filename) => {
  const workbook = new exceljs.Workbook();
  const spreadsheet = await workbook.xlsx.readFile(filename);

  const MAIN_WORKSHEET_ID = 3;
  const worksheet = spreadsheet.getWorksheet(MAIN_WORKSHEET_ID);

  return worksheet;
};

export const getExaminations = async (files, directory) => {
  let errorCount = 0;
  const errorFiles = [];
  for (let index = 0; index < files.length; index++) {
    try {
      const exam = await getExamination(`${directory}/${files[index]}`);
      console.log(exam);
    } catch (error) {
      errorCount++;
      errorFiles.push(`${directory}/${files[index]}`);
      console.log(error);
    }
  }
  console.log(errorCount);
  console.log(errorFiles);
};

export const getExamination = async (filename) => {
  console.log(`Reading file: ${filename}`);
  const worksheet = await getWorksheet(filename);

  const metadata = getMetadata(worksheet);
  const examinationType = getExaminationType(worksheet);
  const ph = getPh(worksheet);
  const consistency = getConsistency(worksheet);

  let results = {};
  if (getIsUnknown(examinationType)) {
    throw new Error("Unknown examination type!");
  } else if (getIsCandidiasis(examinationType)) {
    results = getCandidiasisResults(worksheet);
  } else {
    results = getExaminationResults(worksheet);
  }

  let extendedResults;
  if (getIsExtended(examinationType)) {
    extendedResults = {
      hasAkkermansiaMuciniphila: setHasAkkermansiaMuciniphila(worksheet),
      hasFaecalibactriumPrausnitzii: setHasFaecalibactriumPrausnitzii(
        worksheet
      ),
    };
  }

  return {
    metadata,
    examinationType,
    ph,
    consistency,
    results,
    extendedResults,
  };
};

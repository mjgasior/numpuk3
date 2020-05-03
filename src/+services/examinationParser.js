import { exceljs } from "../+apis/dependenciesApi";
import { getMetadata } from "./readers/metadata";
import {
  getExaminationType,
  getIsCandidiasis,
  getIsUnknown,
  getIsExtended,
} from "./readers/examinationType";
import {
  getPh,
  getConsistency,
  getBacteriaCount,
} from "./readers/generalResults";
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

export const parseExamination = async (filename) => {
  const worksheet = await getWorksheet(filename);

  const metadata = getMetadata(worksheet);
  const examinationType = getExaminationType(worksheet);
  const ph = getPh(worksheet);
  const consistency = getConsistency(worksheet);

  let results = {};
  let bacteriaCount;
  if (getIsUnknown(examinationType)) {
    throw new Error("Unknown examination type!");
  } else if (getIsCandidiasis(examinationType)) {
    results = getCandidiasisResults(worksheet);
  } else {
    results = getExaminationResults(worksheet);
    bacteriaCount = getBacteriaCount(worksheet);
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
    bacteriaCount,
    consistency,
    results,
    extendedResults,
  };
};

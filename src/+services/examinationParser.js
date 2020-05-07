import { exceljs } from "../+apis/dependenciesApi";
import { setMetadata } from "./readers/metadata";
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

  const model = {};

  setMetadata(worksheet, model);
  model.examinationType = getExaminationType(worksheet);
  model.ph = getPh(worksheet);
  model.consistency = getConsistency(worksheet);

  if (getIsUnknown(model.examinationType)) {
    throw new Error("Unknown examination type!");
  } else if (getIsCandidiasis(model.examinationType)) {
    model.results = getCandidiasisResults(worksheet);
  } else {
    model.results = getExaminationResults(worksheet);
    model.bacteriaCount = getBacteriaCount(worksheet);
  }

  if (getIsExtended(model.examinationType)) {
    model.hasAkkermansiaMuciniphila = setHasAkkermansiaMuciniphila(worksheet);
    model.hasFaecalibactriumPrausnitzii = setHasFaecalibactriumPrausnitzii(
      worksheet
    );
  }

  return model;
};

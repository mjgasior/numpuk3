import { exceljs } from "../../+apis/dependenciesApi";
import { setHasMarkers } from "./+utils/normalizer";

const EXTENDED_RESULTS_DATA = {
  akkermansiaMuciniphilaResult: "P14",
  faecalibactriumPrausnitziiResult: "P17",
};

export const setHasAkkermansiaMuciniphila = (worksheet) => {
  const cell = worksheet.getCell(
    EXTENDED_RESULTS_DATA.akkermansiaMuciniphilaResult
  );
  if (cell.type !== exceljs.ValueType.String) {
    throw new Error("Akkermansia Muciniphila result is not a string!");
  }
  return setHasMarkers(cell.value);
};

export const setHasFaecalibactriumPrausnitzii = (worksheet) => {
  const cell = worksheet.getCell(
    EXTENDED_RESULTS_DATA.faecalibactriumPrausnitziiResult
  );
  if (cell.type !== exceljs.ValueType.String) {
    throw new Error("Faecalibactrium Prausnitzii result is not a string!");
  }
  return setHasMarkers(cell.value);
};

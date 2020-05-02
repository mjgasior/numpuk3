const EXAMINATION_TYPE = {
  UNKNOWN: "UNKNOWN",
  CANDIDIASIS: "CANDIDIASIS",
  REGULAR: "REGULAR",
  EXTENDED: "EXTENDED",
};

export const getIsCandidiasis = (examinationType) =>
  examinationType === EXAMINATION_TYPE.CANDIDIASIS;

export const getIsExtended = (examinationType) =>
  examinationType === EXAMINATION_TYPE.EXTENDED;

export const getIsUnknown = (examinationType) =>
  examinationType === EXAMINATION_TYPE.UNKNOWN;

export const getExaminationType = (worksheet) => {
  if (isExtended(worksheet)) {
    return EXAMINATION_TYPE.EXTENDED;
  }

  if (isRegular(worksheet)) {
    return EXAMINATION_TYPE.REGULAR;
  }

  if (isCandidiasis(worksheet)) {
    return EXAMINATION_TYPE.CANDIDIASIS;
  }

  return EXAMINATION_TYPE.UNKNOWN;
};

const HAS_AKKERMANSIA_CELL = "P14";
const HAS_FAECALIBACTRIUM_CELL = "P17";

const isExtended = (worksheet) => {
  const hasAkkermansia = worksheet.getCell(HAS_AKKERMANSIA_CELL).value;
  const hasFaecalibactrium = worksheet.getCell(HAS_FAECALIBACTRIUM_CELL).value;
  return hasAkkermansia !== null && hasFaecalibactrium !== null;
};

const NAME_OF_FIRST_REGULAR_RESULT_CELL = "G24";

const isRegular = (worksheet) => {
  const nameOfFirstRegularResult = worksheet.getCell(
    NAME_OF_FIRST_REGULAR_RESULT_CELL
  ).value;

  return nameOfFirstRegularResult !== null;
};

const NAME_OF_CANDIDA_RESULT_CELL = "G8";

const isCandidiasis = (worksheet) => {
  const nameOfCandidaResult = worksheet.getCell(NAME_OF_CANDIDA_RESULT_CELL)
    .value;
  const nameOfFirstRegularResult = worksheet.getCell(
    NAME_OF_FIRST_REGULAR_RESULT_CELL
  ).value;

  return nameOfCandidaResult !== null && nameOfFirstRegularResult === null;
};

import { moment } from "../../../+apis/dependenciesApi";
import { log } from "./../../../+utils/log";

export const setAge = (birthDate, currentDate) => {
  const date1 = moment(birthDate, "DD.MM.YYYY");
  const date2 = moment(currentDate, "DD.MM.YYYY");

  const diff = moment.duration(date2.diff(date1));
  return diff.asYears().toFixed(3);
};

export const setDate = (stringDate) => {
  if (stringDate) {
    const date = moment(stringDate, "DD.MM.YYYY");
    if (date.isValid()) {
      return date.format("DD.MM.YYYY");
    }
    log.warn(`${stringDate} is invalid date format`);
  }
  return undefined;
};

export const setHasMarkers = (marker) => {
  switch (marker) {
    case "DODATNI":
      return true;
    case "UJEMNY":
      return false;
    default:
      throw new Error(`${marker} is not a valid marker value`);
  }
};

const GENDER = {
  FEMALE: "FEMALE",
  MALE: "MALE",
  UNKNOWN: "UNKNOWN",
};

export const setGender = (gender) => {
  switch (gender) {
    case "K":
      return GENDER.FEMALE;
    case "M":
      return GENDER.MALE;
    default:
      log.warn(`${gender} is not a valid gender value`);
      return GENDER.UNKNOWN;
  }
};

const CONSISTENCY = {
  LIQUID: "LIQUID",
  HALF_LIQUID: "HALF_LIQUID",
  RIGID: "RIGID",
  UNKNOWN: "UNKNOWN",
};

export const setConsistency = (stoolConsistency) => {
  switch (stoolConsistency) {
    case "stała":
      return CONSISTENCY.RIGID;
    case "stałe":
      log.warn(`${stoolConsistency} was corrected`);
      return CONSISTENCY.RIGID;
    case "płynna":
      return CONSISTENCY.LIQUID;
    case "półpłynna":
      return CONSISTENCY.HALF_LIQUID;
    default:
      log.warn(`${stoolConsistency} is not a valid consistency value`);
      return CONSISTENCY.UNKNOWN;
  }
};

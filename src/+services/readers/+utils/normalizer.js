import { moment } from "../../../+apis/dependenciesApi";

export const setAge = (birthDate, currentDate) => {
  const date1 = moment(birthDate, "DD.MM.YYYY");
  const date2 = moment(currentDate, "DD.MM.YYYY");

  const diff = moment.duration(date2.diff(date1));
  return diff.asYears().toFixed(3);
};

export const setDate = (stringDate) => {
  const date = moment(stringDate, "DD.MM.YYYY");
  if (date.isValid()) {
    return date.format("DD.MM.YYYY");
  }
  console.warn(`${stringDate} is invalid date format`);
  return undefined;
};

export const setHasMarkers = (marker) => {
  switch (marker) {
    case "DODATNI":
      return true;
    case "UJEMNY":
      return false;
    default:
      throw new Error("Unknown marker - neither true nor false");
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
      console.warn("Unknown gender");
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
    case "płynna":
      return CONSISTENCY.LIQUID;
    case "półpłynna":
      return CONSISTENCY.HALF_LIQUID;
    default:
      console.warn("Unknown type of consistency");
      return CONSISTENCY.UNKNOWN;
  }
};

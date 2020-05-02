export const setHasMarkers = (marker) => {
  switch (marker) {
    case "DODATNI":
      return true;
    case "UJEMNY":
      return false;
  }
  throw "Unknown marker - neither true nor false";
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

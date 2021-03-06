import { isPeselValid, getBirthdateFromPesel } from "./+utils/peselParser";
import { setGender, setDate, setAge } from "./+utils/normalizer";
import { exceljs, moment } from "../../+apis/dependenciesApi";
import { logger } from "../logger";

const META_DATA_SECTION = {
  examinationId: "D2",
  patientName: "D4",
  birthdate: "D5",
  gender: "D6",
  personalId: "D7",
  address: "D8",
  sampleId: "D9",
  dateOfSampling: "D10",
  dateOfSampleRegistration: "D11",
  dateOfTestEnd: "D12",
};

export const setMetadata = (worksheet, metadata) => {
  Object.keys(META_DATA_SECTION).forEach((key) => {
    const cell = worksheet.getCell(META_DATA_SECTION[key]);

    if (cell.type === exceljs.ValueType.Date) {
      const date = moment(cell.value).format("DD.MM.YYYY");
      logger.debug(
        `Date ${cell.value} parsed into ${date} for ${key} of cell ${META_DATA_SECTION[key]}`
      );
      metadata[key] = date;
    } else {
      const trimmed = cell.text.trim();
      if (trimmed.toLowerCase() === "nie podano") {
        metadata[key] = undefined;
      } else {
        metadata[key] = trimmed;
      }
    }
  });

  metadata.gender = setGender(metadata.gender);
  metadata.birthdate = setBirthdate(metadata.birthdate, metadata.personalId);

  metadata.dateOfSampling = setDate(metadata.dateOfSampling);
  metadata.dateOfSampleRegistration = setDate(
    metadata.dateOfSampleRegistration
  );
  metadata.dateOfTestEnd = setDate(metadata.dateOfTestEnd);

  metadata.ageAtTest = setAge(
    metadata.birthdate,
    metadata.dateOfSampleRegistration
  );

  if (metadata.personalId !== undefined && !isPeselValid(metadata.personalId)) {
    logger.warn(`${metadata.personalId} is an invalid PESEL number`);
  }
};

const setBirthdate = (birthdate, personalId) => {
  const formattedBirthdate = setDate(birthdate);
  if (formattedBirthdate === undefined) {
    if (isPeselValid(personalId)) {
      const date = getBirthdateFromPesel(personalId);
      logger.warn(`${date} set from PESEL`);
      return date;
    }

    logger.error(
      "Could not set birth date - not valid both birthday field and PESEL."
    );
    return undefined;
  } else {
    return formattedBirthdate;
  }
};

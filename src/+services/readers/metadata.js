import { isPeselValid } from "./+utils/peselParser";
import { setGender, setDate, setAge } from "./+utils/normalizer";
import { log } from "../../+utils/log";
import { exceljs } from "../../+apis/dependenciesApi";

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

export const getMetadata = (worksheet) => {
  let metadata = {};
  Object.keys(META_DATA_SECTION).forEach((key) => {
    const cell = worksheet.getCell(META_DATA_SECTION[key]);

    if (cell.type === exceljs.ValueType.Number) {
      log.debug(`"Number" ${cell.value}`);
      metadata[key] = cell.value;
    } else if (cell.type === exceljs.ValueType.String) {
      const trimmed = cell.value.trim();
      if (trimmed.toLowerCase() === "nie podano") {
        metadata[key] = undefined;
      } else {
        metadata[key] = trimmed;
      }
    } else {
      log.debug(`"Other" ${cell.type}`);
    }
  });

  metadata.gender = setGender(metadata.gender);

  metadata.birthdate = setDate(metadata.birthdate);
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
    log.warn(`${metadata.personalId} is an invalid PESEL number`);
  }

  return metadata;
};

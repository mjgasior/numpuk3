import { isPeselValid } from "./+utils/peselParser";
import { setGender, setDate, setAge } from "./+utils/normalizer";

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
    metadata[key] = worksheet.getCell(META_DATA_SECTION[key]).value;
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

  if (!isPeselValid(metadata.personalId)) {
    console.warn("Invalid PESEL number");
  }

  return metadata;
};

import { isPeselValid, getBirthdate } from "./+utils/peselParser";
import { setGender } from "./+utils/normalizer";

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
    console.log(
      `TYPE: ${worksheet.getCell(META_DATA_SECTION[key]).type} VALUE: ${
        worksheet.getCell(META_DATA_SECTION[key]).value
      }`
    );
    metadata[key] = worksheet.getCell(META_DATA_SECTION[key]).value;
  });

  metadata.gender = setGender(metadata.gender);

  metadata.ageAtTest = getAgeAtMomentOfTest(
    metadata.personalId,
    metadata.dateOfSampleRegistration
  );

  return metadata;
};

const getAgeAtMomentOfTest = (pesel, dateOfSampleRegistration) => {
  if (isPeselValid(pesel)) {
    const difference = new Date(dateOfSampleRegistration) - getBirthdate(pesel);
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  }
  console.warn("Invalid PESEL");
  return -1;
};

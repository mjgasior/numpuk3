const META_DATA_SECTION = {
  examinationId: "D2",
  patientName: "D4",
  birthday: "D5",
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

  return metadata;
};

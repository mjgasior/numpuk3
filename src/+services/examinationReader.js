import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (metadataVisibility) => {
  const examinations = await getExaminationsAsync(metadataVisibility);
  console.log(examinations);
  return examinations;
};

const getExaminationsAsync = (metadataVisibility, hasKlebsiellaPneumoniae) => {
  let findQuery = {};
  if (hasKlebsiellaPneumoniae) {
    findQuery = { "results.Klebsiella pneumoniae": { $exists: true } };
  }

  return new Promise((resolve, reject) => {
    db.find(findQuery)
      .sort({ examinationId: 1 })
      .projection(getProjection(metadataVisibility))
      .exec(function (err, docs) {
        if (err) {
          logger.error(err);
          reject(err);
        }
        resolve(docs);
      });
  });
};

const getProjection = (metadataVisibility) => {
  const MAPPER = {
    gender: "metadata.gender",
    ageAtTest: "metadata.ageAtTest",
    ph: "ph",
    consistency: "consistency",
    bacteriaCount: "bacteriaCount",
  };

  const projection = {};

  Object.keys(metadataVisibility).forEach((data) => {
    if (metadataVisibility[data] === 0) {
      projection[MAPPER[data]] = 0;
    }
  });

  return projection;
};

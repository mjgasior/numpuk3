import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (metadataVisibility, testsVisibility) => {
  const examinations = await getExaminationsAsync(
    metadataVisibility,
    testsVisibility
  );
  return examinations;
};

const getExaminationsAsync = (
  metadataVisibility,
  testsVisibility,
  hasKlebsiellaPneumoniae
) => {
  let findQuery = {};
  if (hasKlebsiellaPneumoniae) {
    findQuery = { "results.Klebsiella pneumoniae": { $exists: true } };
  }

  return new Promise((resolve, reject) => {
    db.find(findQuery)
      .sort({ examinationId: 1 })
      .projection(getProjection(metadataVisibility, testsVisibility))
      .exec(function (err, docs) {
        if (err) {
          logger.error(err);
          reject(err);
        }
        resolve(docs);
      });
  });
};

const getProjection = (metadataVisibility, testsVisibility) => {
  const projection = {};

  Object.keys(metadataVisibility).forEach((data) => {
    if (!metadataVisibility[data]) {
      projection[data] = 0;
    }
  });

  Object.keys(testsVisibility).forEach((data) => {
    if (!testsVisibility[data]) {
      projection[`results.${data}`] = 0;
    }
  });

  return projection;
};

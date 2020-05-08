import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (
  metadataVisibility,
  testsVisibility,
  pagination
) => {
  const projection = getProjection(metadataVisibility, testsVisibility);
  const examinations = await getExaminationsAsync(projection, pagination);
  const count = await getExaminationsCountAsync();

  return { examinations, count };
};

const getExaminationsAsync = (
  projection,
  pagination,
  hasKlebsiellaPneumoniae
) => {
  const { page, rowsPerPage } = pagination;
  let findQuery = {};
  if (hasKlebsiellaPneumoniae) {
    findQuery = { "results.Klebsiella pneumoniae": { $exists: true } };
  }

  return new Promise((resolve, reject) => {
    db.find(findQuery)
      .skip(page * rowsPerPage)
      .limit(rowsPerPage)
      .sort({ examinationId: 1 })
      .projection(projection)
      .exec((err, docs) => {
        if (err) {
          logger.error(err);
          reject(err);
        }
        resolve(docs);
      });
  });
};

const getExaminationsCountAsync = () => {
  return new Promise((resolve, reject) => {
    db.count({}, (err, count) => {
      if (err) {
        logger.error(err);
        reject(err);
      }
      resolve(count);
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

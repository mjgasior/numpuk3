import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (
  metadataVisibility,
  testsVisibility,
  testFilters,
  pagination
) => {
  const findQuery = getQuery(testFilters);
  const projection = getProjection(metadataVisibility, testsVisibility);

  const examinations = await getExaminationsAsync(
    projection,
    findQuery,
    pagination
  );

  const count = await getExaminationsCountAsync(findQuery);

  return { examinations, count };
};

const getExaminationsAsync = (projection, findQuery, pagination) => {
  const { page, rowsPerPage } = pagination;

  return new Promise((resolve, reject) => {
    try {
      const docs = db
        .chain()
        .find(findQuery)
        .offset(page * rowsPerPage)
        .limit(rowsPerPage)
        .simplesort("examinationId")
        .data();
      console.log(docs);
      resolve(docs);
    } catch (error) {
      logger.error(error);
      reject(error);
    }
  });
};

const getExaminationsCountAsync = (query) => {
  return new Promise((resolve, reject) => {
    try {
      const count = db.count();
      console.log(count);
      resolve(count);
    } catch (error) {
      logger.error(error);
      reject(error);
    }
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

const getQuery = (testFilters) => {
  const query = {};
  Object.keys(testFilters).forEach((data) => {
    const value = testFilters[data];
    if (value === true) {
      query[`results.${data}`] = { $gt: 0 };
    } else if (value === false) {
      query[`results.${data}`] = 0;
    }
  });
  return query;
};

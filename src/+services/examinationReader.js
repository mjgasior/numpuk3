import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (
  metadataVisibility,
  metadataFilters,
  testsVisibility,
  testFilters,
  pagination
) => {
  const findQuery = getQuery(metadataFilters, testFilters);
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

const getExaminationsCountAsync = (query) => {
  return new Promise((resolve, reject) => {
    db.count(query, (err, count) => {
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

const getQuery = (metadataFilters, testFilters) => {
  const query = getMetadataQuery(metadataFilters);

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

const GENDER = {
  FEMALE: "FEMALE",
  MALE: "MALE",
};

const MARKER = {
  POSITIVE: "POSITIVE",
  NEGATIVE: "NEGATIVE",
};

const getMetadataQuery = ({
  gender,
  hasAkkermansiaMuciniphila,
  hasFaecalibactriumPrausnitzii,
  ageAtTest,
  ph,
  bacteriaCount,
  consistency,
}) => {
  const query = {};

  if (gender !== undefined) {
    query.gender = gender ? GENDER.FEMALE : GENDER.MALE;
  }

  if (hasAkkermansiaMuciniphila !== undefined) {
    query.hasAkkermansiaMuciniphila = hasAkkermansiaMuciniphila
      ? MARKER.POSITIVE
      : MARKER.NEGATIVE;
  }

  if (hasFaecalibactriumPrausnitzii !== undefined) {
    query.hasFaecalibactriumPrausnitzii = hasFaecalibactriumPrausnitzii
      ? MARKER.POSITIVE
      : MARKER.NEGATIVE;
  }

  if (ageAtTest.min > 0 || ageAtTest.max < 140) {
    query.$and = [
      { ageAtTest: { $gte: ageAtTest.min } },
      { ageAtTest: { $lte: ageAtTest.max } },
    ];
  }

  if (ph.min > 0 || ph.max < 14) {
    query.$and = [
      ...query.$and,
      { ph: { $gte: ph.min } },
      { ph: { $lte: ph.max } },
    ];
  }

  console.log(query);

  if (bacteriaCount !== undefined) {
    logger.info("Bacteria count filter not supported!");
  }

  if (consistency !== undefined) {
    logger.info("Bacteria count filter not supported!");
  }

  return query;
};

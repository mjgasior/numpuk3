import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (filters) => {
  const examinations = await getExaminationsAsync(filters);
  return examinations;
};

const getExaminationsAsync = (filters) => {
  console.log(filters);
  return new Promise((resolve, reject) => {
    db.find({})
      .sort({ "metadata.examinationId": 1 })
      .exec(function (err, docs) {
        if (err) {
          logger.error(err);
          reject(err);
        }
        resolve(docs);
      });
  });
};

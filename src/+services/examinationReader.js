import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async () => {
  const examinations = await getExaminationsAsync();
  return examinations;
};

const getExaminationsAsync = () => {
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

import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const getExaminations = async (hasKlebsiellaPneumoniae) => {
  const examinations = await getExaminationsAsync(hasKlebsiellaPneumoniae);
  return examinations;
};

const getExaminationsAsync = (hasKlebsiellaPneumoniae) => {
  console.log(hasKlebsiellaPneumoniae);
  let findQuery = {};
  if (hasKlebsiellaPneumoniae) {
    findQuery = { "results.Klebsiella pneumoniae": { $exists: true } };
  }

  return new Promise((resolve, reject) => {
    db.find(findQuery)
      .sort({ "metadata.examinationId": 1 })
      .exec(function (err, docs) {
        if (err) {
          logger.error(err);
          reject(err);
        }
        console.log(docs);
        resolve(docs);
      });
  });
};

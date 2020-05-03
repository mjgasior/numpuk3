import { db, log } from "../+apis/dependenciesApi";

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
          log.error(err);
          reject(err);
        }
        resolve(docs);
      });
  });
};

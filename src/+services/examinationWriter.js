import { db, log } from "../+apis/dependenciesApi";

export const putExamination = async (examination) => {
  const savedExamination = await saveDocumentAsync(examination);
  return savedExamination;
};

const saveDocumentAsync = (examination) => {
  return new Promise((resolve, reject) => {
    db.insert(examination, (err, newDoc) => {
      if (err) {
        log.error(err);
        reject(err);
      }
      resolve(newDoc);
    });
  });
};

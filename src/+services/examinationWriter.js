import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const putExamination = async (examination) => {
  const savedExamination = await saveDocumentAsync(examination);
  return savedExamination;
};

const saveDocumentAsync = (examination) => {
  return new Promise((resolve, reject) => {
    console.log(db);
    console.log(db.insert);
    /*db.insert(examination, (err, newDoc) => {
      if (err) {
        logger.error(err);
        reject(err);
      }
      resolve(newDoc);
    });*/
    resolve({});
  });
};

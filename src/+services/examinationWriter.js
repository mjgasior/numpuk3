import { db } from "../+apis/dependenciesApi";
import { logger } from "./logger";

export const putExamination = async (examination) => {
  const savedExamination = await saveDocumentAsync(examination);
  return savedExamination;
};

const saveDocumentAsync = (examination) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = db.insert(examination);
      resolve(doc);
    } catch (error) {
      logger.error(error);
      reject(error);
    }
  });
};

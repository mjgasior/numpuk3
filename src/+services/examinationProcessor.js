import { parseExamination } from "./examinationParser";
import { logger } from "./logger";
import { putExamination } from "./examinationWriter";

export const processExaminations = async (
  files,
  directory,
  setProcessedFiles
) => {
  let errorCount = 0;
  const errorFiles = [];
  for (let index = 0; index < files.length; index++) {
    const filepath = `${directory}/${files[index]}`;

    try {
      logger.info(`Reading file: ${filepath}`);
      const exam = await parseExamination(filepath);
      await putExamination(exam);
      logger.info(`Saved file: ${filepath}`);
    } catch (error) {
      errorCount++;
      errorFiles.push(filepath);
      logger.error(error);
    }
    setProcessedFiles(index + 1);
  }
  logger.info(`${errorCount} files with major errors`);
  logger.info(errorFiles);
};

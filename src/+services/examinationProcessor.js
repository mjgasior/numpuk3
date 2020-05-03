import { parseExamination } from "./examinationParser";
import { log } from "../+apis/dependenciesApi";
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
      log.info(`Reading file: ${filepath}`);
      const exam = await parseExamination(filepath);
      // await putExamination(exam);
      log.info(`Saved file: ${filepath}`);
    } catch (error) {
      errorCount++;
      errorFiles.push(filepath);
      log.error(error);
    }
    setProcessedFiles(index + 1);
  }
  log.info(`${errorCount} files with major errors`);
  log.info(errorFiles);
};

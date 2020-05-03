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
      const exam = await parseExamination(filepath);
      log.info("READ");
      const savedExam = await putExamination(exam);
      log.info("SAVED");
      console.log(savedExam);
    } catch (error) {
      errorCount++;
      errorFiles.push(filepath);
      log.error(error);
    }
    setProcessedFiles(index + 1);
  }
  log.info(`${errorCount} files with errors`);
  log.info(errorFiles);
};

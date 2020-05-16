import { getExaminations } from "./examinationReader";
import {
  createDocument,
  setColumnsInDocument,
  addRowInDocument,
  saveDocument,
} from "./creator/documentWriter";
import { logger } from "./logger";

export const saveExaminations = async (
  dictionary,
  directory,
  metadataVisibility,
  metadataFilters,
  testsVisibility,
  testFilters
) => {
  try {
    logger.info(`Creating new document in ${directory}`);
    const document = createDocument();

    logger.info("Document stream created.");
    setColumnsInDocument(
      document,
      dictionary,
      metadataVisibility,
      testsVisibility
    );

    logger.info("Fetching data from database.");
    const data = await getExaminations(
      metadataVisibility,
      metadataFilters,
      testsVisibility,
      testFilters,
      {
        page: 0,
        rowsPerPage: 100,
      }
    );

    logger.info("Saving data.");
    data.examinations.forEach((element) => {
      const { results, ...rest } = element;
      addRowInDocument(document, { ...rest, ...results });
    });

    logger.info("Saving data to file.");
    saveDocument(document, directory);
    return 0;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

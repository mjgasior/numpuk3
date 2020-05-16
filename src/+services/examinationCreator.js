import { getExaminations, getCount } from "./examinationReader";
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

    logger.info("Fetching count from database.");
    const count = await getCount(metadataFilters, testFilters);
    console.log(count);

    await runDataExport(
      document,
      count,
      metadataVisibility,
      metadataFilters,
      testsVisibility,
      testFilters
    );

    logger.info("Saving data to file.");
    saveDocument(document, directory);
    return 0;
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const runDataExport = async (
  document,
  count,
  metadataVisibility,
  metadataFilters,
  testsVisibility,
  testFilters
) => {
  const PAGE_SIZE = 10;
  const pages = Math.ceil(count / PAGE_SIZE);

  for (let page = 0; page < pages; page++) {
    logger.info(`Fetching data from database - page ${page} of ${pages}`);
    const data = await getExaminations(
      metadataVisibility,
      metadataFilters,
      testsVisibility,
      testFilters,
      {
        page,
        rowsPerPage: PAGE_SIZE,
      }
    );

    logger.info(`Saving data to the stream - page ${page} of ${pages}`);
    data.examinations.forEach((element) => {
      const { results, ...rest } = element;
      addRowInDocument(document, { ...rest, ...results });
    });
  }
};

import { readFile } from "../../+utils/examinations";

export const processFiles = async (filename) => {
  const spreadsheet = await readFile(filename);
};

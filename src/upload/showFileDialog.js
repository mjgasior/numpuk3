import { showDirectoryDialog } from "../+utils/dialog";
import { getFilesInDirectory } from "../+utils/files";
import {
  EXAMINATION_FILE_EXTENSION,
  EXAMINATION_FILE_EXTENSION_DOT,
} from "../+utils/examinations";

export const showFileDialog = async () => {
  let options = {
    title: "Wczytaj badania z lokalizacji",
    buttonLabel: "Wczytaj",
    filters: [
      {
        name: "Badania w formacie Excel",
        extensions: [EXAMINATION_FILE_EXTENSION],
      },
    ],
  };

  const directory = await showDirectoryDialog(options);
  if (directory) {
    return await getFilesInDirectory(directory, EXAMINATION_FILE_EXTENSION_DOT);
  }
};

import { showDirectoryDialog } from "../+utils/dialog";
import { getFilesInDirectory } from "../+utils/files";
import { EXAMINATION_FILE_EXTENSION_DOT } from "../+utils/examinations";

export const showFileDialog = async (t) => {
  const options = {
    title: t("n3_load_directory"),
    buttonLabel: t("n3_load"),
  };

  let selectedFiles = [];
  const selectedDirectory = await showDirectoryDialog(options);
  if (selectedDirectory) {
    selectedFiles = await getFilesInDirectory(
      selectedDirectory,
      EXAMINATION_FILE_EXTENSION_DOT
    );
  }
  return { selectedFiles, selectedDirectory };
};

import { showDirectoryDialog } from "../../+utils/dialog";

export const showExportDirectoryDialog = async (t) => {
  const options = {
    title: t("n3_load_directory_title"),
    buttonLabel: t("n3_load_directory"),
  };

  return await showDirectoryDialog(options);
};

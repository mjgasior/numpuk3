import { showFileDialog } from "../+utils/dialog";

export const showSelectFileDialog = async (t) => {
  const options = {
    title: t("n3_load_file_title"),
    buttonLabel: t("n3_load_file"),
  };

  return await showFileDialog(options);
};

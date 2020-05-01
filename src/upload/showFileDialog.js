import { showDirectoryDialog } from "../+utils/dialog";
import { getFilesInDirectory } from "../+utils/files";

export const showFileDialog = async () => {
  let options = {
    title: "Wczytaj badania z lokalizacji",
    buttonLabel: "Wczytaj",
    filters: [{ name: "Badania w formacie Excel", extensions: ["xlsx"] }],
  };

  const directory = await showDirectoryDialog(options);

  if (directory) {
    getFilesInDirectory(directory, ".xlsx");
  }
};

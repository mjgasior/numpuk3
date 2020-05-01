import { showDirectoryDialog } from "../+utils/dialog";

export const showFileDialog = async () => {
  let options = {
    title: "Wczytaj badania z lokalizacji",
    buttonLabel: "Wczytaj",
    filters: [{ name: "Badania w formacie Excel", extensions: ["xlsx"] }],
  };

  const directory = await showDirectoryDialog(options);
  console.log(directory);
};

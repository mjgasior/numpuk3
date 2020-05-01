import { dialog } from "./../+utils/electron";

export const showFileDialog = async () => {
  console.log(__dirname);
  let options = {
    title: "Wczytaj badania z lokalizacji",
    defaultPath: __dirname,
    buttonLabel: "Wczytaj",
    filters: [{ name: "Badania w formacie Excel", extensions: ["xlsx"] }],
    properties: ["openDirectory"],
  };

  let filePaths = await dialog.showOpenDialog(options);
  console.log(filePaths.filePaths);
};

import { dialog } from "./apis/electronApi";

export const showDirectoryDialog = async ({ title, buttonLabel }) => {
  const options = {
    title,
    defaultPath: __dirname,
    buttonLabel,
    properties: ["openDirectory"],
  };

  const dialogResponse = await dialog.showOpenDialog(options);
  if (dialogResponse.canceled) {
    return undefined;
  }
  return dialogResponse.filePaths[0];
};

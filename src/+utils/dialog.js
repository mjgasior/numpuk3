import { dialog } from "./electron";

export const showDirectoryDialog = async ({ title, buttonLabel, filters }) => {
  const options = {
    title,
    defaultPath: __dirname,
    buttonLabel,
    filters,
    properties: ["openDirectory"],
  };

  const dialogResponse = await dialog.showOpenDialog(options);
  if (dialogResponse.canceled) {
    return undefined;
  }
  return dialogResponse.filePaths[0];
};

import { dialog } from "./apis/electronApi";

export const showDirectoryDialog = async ({ title, buttonLabel }) => {
  return await showDialog(title, buttonLabel, ["openDirectory"]);
};

export const showFileDialog = async ({ title, buttonLabel }) => {
  return await showDialog(title, buttonLabel, ["openFile"]);
};

const showDialog = async (title, buttonLabel, properties) => {
  const options = {
    title,
    defaultPath: __dirname,
    buttonLabel,
    properties,
  };

  const dialogResponse = await dialog.showOpenDialog(options);
  if (dialogResponse.canceled) {
    return undefined;
  }
  return dialogResponse.filePaths[0];
};

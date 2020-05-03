let dialog = {};
let browserWindow = {};

if (window.require) {
  const electron = window.require("electron");

  dialog = electron.remote.dialog;
  browserWindow = electron.remote.getCurrentWindow();
}

export { dialog, browserWindow };

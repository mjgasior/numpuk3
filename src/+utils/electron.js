let fs = {};
let ipcRenderer = {};
let dialog = {};
let browserWindow = {};

if (window.require) {
  const electron = window.require("electron");
  fs = electron.remote.require("fs");
  ipcRenderer = electron.ipcRenderer;
  dialog = electron.remote.dialog;
  browserWindow = electron.remote.getCurrentWindow();
}

export { fs, ipcRenderer, dialog, browserWindow };

let fs = {};
let ipcRenderer = {};
let dialog = {};
let browserWindow = {};
let path = {};

if (window.require) {
  const electron = window.require("electron");
  fs = electron.remote.require("fs");
  path = electron.remote.require("path");
  ipcRenderer = electron.ipcRenderer;
  dialog = electron.remote.dialog;
  browserWindow = electron.remote.getCurrentWindow();
}

export { fs, ipcRenderer, dialog, browserWindow, path };

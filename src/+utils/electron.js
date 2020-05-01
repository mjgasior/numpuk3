let fs = {};
let ipcRenderer = {};
let dialog = {};

if (window.require) {
  const electron = window.require("electron");
  fs = electron.remote.require("fs");
  ipcRenderer = electron.ipcRenderer;
  dialog = electron.remote.dialog;
}

export { fs, ipcRenderer, dialog };

let exceljs = null;

if (window.require) {
  const electron = window.require("electron");
  exceljs = electron.remote.require("exceljs");
}

export { exceljs };

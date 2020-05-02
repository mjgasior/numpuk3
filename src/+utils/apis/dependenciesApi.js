let exceljs = null;
let moment = {};

if (window.require) {
  const electron = window.require("electron");
  exceljs = electron.remote.require("exceljs");
  moment = electron.remote.require("moment");
}

export { exceljs, moment };

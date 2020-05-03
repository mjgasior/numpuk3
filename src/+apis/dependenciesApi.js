let exceljs = null;
let moment = {};
let log = {
  info: (m) => console.log(m),
  error: (m) => console.error(m),
  warn: (m) => console.warn(m),
};

if (window.require) {
  const electron = window.require("electron");
  exceljs = electron.remote.require("exceljs");
  moment = electron.remote.require("moment");
  log = electron.remote.require("electron-log");
}

export { exceljs, moment, log };

let exceljs = null;
let moment = {};
let log = {
  info: (m) => console.log(m),
  error: (m) => console.error(m),
  warn: (m) => console.warn(m),
};
let db;

if (window.require) {
  const electron = window.require("electron");
  exceljs = electron.remote.require("exceljs");
  moment = electron.remote.require("moment");
  log = electron.remote.require("electron-log");
  db = electron.remote.getGlobal("database");
}

export { exceljs, moment, log, db };

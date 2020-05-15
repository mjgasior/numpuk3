let exceljs = null;
let moment = {};
let log = {
  info: (m) => console.log(m),
  error: (m) => console.error(m),
  warn: (m) => console.warn(m),
};
let db;
let tests = {
  types: { anaerobic: [], fungi: [], gramMinus: [], gramPlus: [] },
  save: () => null,
};

if (window.require) {
  const electron = window.require("electron");
  exceljs = electron.remote.require("exceljs");
  moment = electron.remote.require("moment");
  log = electron.remote.require("electron-log");
  db = electron.remote.getGlobal("database");
  tests = electron.remote.getGlobal("tests");
}

export { exceljs, moment, log, db, tests };

let fs = {};
let path = {};
let util = {};
let exceljs = null;

if (window.require) {
  const electron = window.require("electron");

  fs = electron.remote.require("fs");
  path = electron.remote.require("path");
  util = electron.remote.require("util");
  exceljs = electron.remote.require("exceljs");
}

export { fs, path, util, exceljs };

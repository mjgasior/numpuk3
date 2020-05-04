let fs = {};
let path = {};
let util = {};
let shell = {};

if (window.require) {
  const electron = window.require("electron");

  fs = electron.remote.require("fs");
  path = electron.remote.require("path");
  util = electron.remote.require("util");

  shell = window.require("electron").shell;
}

export { fs, path, util, shell };

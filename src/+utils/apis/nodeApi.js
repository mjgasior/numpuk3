let fs = {};
let path = {};
let util = {};

if (window.require) {
  const electron = window.require("electron");

  fs = electron.remote.require("fs");
  path = electron.remote.require("path");
  util = electron.remote.require("util");
}

export { fs, path, util };

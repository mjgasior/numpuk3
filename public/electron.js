require("dotenv").config();
const { app, BrowserWindow } = require("electron");
const log = require("electron-log");
const { initializeTypes } = require("./testTypes");
initializeTypes();

const path = require("path");
const isDev = require("electron-is-dev");

const Datastore = require("nedb");
let userData = app.getPath("userData");
let databaseFilepath = path.join(userData, "values.db");

log.info(databaseFilepath);

let db = new Datastore({
  filename: databaseFilepath,
  autoload: true,
  onload: (err) => {
    if (err) {
      log.error("Error loading the DB: " + err);
    }
  },
  timestampData: true,
});

db.ensureIndex({ fieldName: "examinationId", unique: true }, function (err) {
  if (err) {
    log.error("Error loading the DB: " + err);
  }
});

global.database = db;

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    icon: `${path.join(__dirname, "./favicon.ico")}`,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });
  mainWindow.setMenu(null);

  mainWindow.loadURL(
    isDev
      ? process.env.ELECTRON_START_URL
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.on("ready", createWindow);

require("dotenv").config();
const { app, BrowserWindow } = require("electron");
const log = require("electron-log");

const path = require("path");
const isDev = require("electron-is-dev");

const Datastore = require("nedb");
let userData = app.getAppPath("userData");
let databaseTest = path.join(userData, "values.db");
let db = new Datastore({
  filename: databaseTest,
  autoload: true,
  onload: (err) => {
    if (err) {
      log.error("Error loading the DB: " + err);
    }
  },
  timestampData: true,
});

global.database = db;

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    frame: false,
    fullscreen: true,
    icon: `${path.join(__dirname, "./favicon.ico")}`,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

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

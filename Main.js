const { app, BrowserWindow } = require("electron");

function createWindow() {
  // create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app
  win.loadFile("index.html");

  // open the DevTools
  win.webContents.openDevTools();
}

app.on("ready", createWindow);

const { app, BrowserWindow } = require("electron");

function createWindow() {
  // create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL("http://localhost:3000/");

  // open the DevTools
  win.webContents.openDevTools();
}

app.on("ready", createWindow);

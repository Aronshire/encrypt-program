const electron = require('electron');
const url = require("url"); 
const path = require("path");
const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, "assest/images/icon.png"),
        movable: true,
        resizable: false,
        titleBarStyle: "hidden",
        titleBarOverlay: {
          color: '#eef2ff',
          symbolColor: '#374151'
        }
    });

    mainWindow.loadFile("index.html");


})
const { app, BrowserWindow } = require('electron');

function createWindows() {
    let appWindow = new BrowserWindow();
    appWindow.loadURL('https://pranavsharma.dev/');
}

app.on('ready', createWindows);
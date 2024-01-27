require('dotenv').config()
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const { default: testConnection } = require('./sequelize');

function createWindow() {
  // Create the browser window.
  return new BrowserWindow({
    title: "Las Rosas",
    width: 500,
    height: 500,
    maxHeight: 600,
    maxWidth: 600,
    minHeight: 400,
    minWidth: 400,
    backgroundColor: '#7B435B',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  const window = createWindow();

  window.openDevTools();

  window.loadURL('http:/localhost:3000')

  ipcMain.on('window', (event, path) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.loadURL(path);
  })

}
)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
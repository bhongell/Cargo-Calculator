const { app, BrowserWindow } = require('electron/main');
const {autoUpdater, AppUpdater} = require("electron-updater");

autoUpdater.autoDownload=false;
autoUpdater.autoInstallOnAppQuit=true;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'CCicon.png'
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  autoUpdater.checkForUpdates();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
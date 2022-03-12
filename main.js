const { app, BrowserWindow } = require('electron')
const path=require('path');
const fs=require('fs')
const ipc=require('electron').ipcMain;
var os=require('os')


ipc.on('closed-main-window',()=>{
    //close the app
    app.quit()
})

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation:false
      }
    })
    //loading index.html file
    win.loadURL('file://'+__dirname+'/src/index.html');

   
  }



  app.whenReady().then(() => {
    createWindow()
  })
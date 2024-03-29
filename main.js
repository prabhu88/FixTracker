/*
 * Copyright (c) 2023 S. Prabhu (s.prabhu.mtech88@gmail.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain,Menu} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
function createWindow() {    
    if (!isDev) {        
        require(path.join(__dirname, 'build-server/server'));
    }

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,    
        },
        icon: path.join(__dirname,'public/logo.ico')
    });

    const menu = Menu.buildFromTemplate([
        {
          label: 'Main Menu',
          submenu: [
            {
              click: () => mainWindow.webContents.send('update-counter', 'Home'),
              label: 'Home',
            },
            {
              click: () => mainWindow.webContents.send('update-counter', 'Profile'),
              label: 'Profile',
            },
            {
                click: () => app.quit(),
                label: 'Quit',
            }
          ]
        }
    ])
    Menu.setApplicationMenu(menu)
    // and load the index.html of the app.
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    mainWindow.webContents.openDevTools({ mode: 'detach' })

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('informed', (event, arg) => {    
    console.log(arg);
    let colors = (arg.split('-'))[0]
    mainWindow.setTitle(arg)
    mainWindow.setBackgroundColor(colors)    
});
ipcMain.on('QUIT', () => {    
    app.quit();
});
ipcMain.on('update-counter',(eveent,arg)=>{

})
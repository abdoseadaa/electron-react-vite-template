import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Make sure this path is correct
      nodeIntegration: false, // Should be false for security
      contextIsolation: true,  // Should be true to use contextBridge
    },
  });

  const isDev = process.env.NODE_ENV === 'development';
  const startURL = isDev
    ? 'http://localhost:5173' // Vite development server
    : `file://${path.join(__dirname, '../../frontend/dist/index.html')}`;



    console.log({startURL , isDev , name : "abdo hello how are you "});
    
  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

console.log("is their changes ? abdo hello how are you ");


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

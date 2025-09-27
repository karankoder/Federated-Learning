import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // Window control APIs
  minimizeWindow: () => ipcRenderer.send('window:minimize'),
  maximizeWindow: () => ipcRenderer.send('window:maximize'),
  closeWindow: () => ipcRenderer.send('window:close'),

  // App control API
  quitApp: () => ipcRenderer.send('app:quit'),

  // Open external links
  openExternalLink: (url: string) =>
    ipcRenderer.send('shell:openExternal', url),
});

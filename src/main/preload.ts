// src/main/preload.ts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel: string, data: any) => ipcRenderer.send(channel, data),
    on: (channel: string, func: (...args: any[]) => void) => {
      const subscription = (_event: Event, ...args: any[]) => func(...args);
      ipcRenderer.on(channel, subscription as any);

      return () => ipcRenderer.removeListener(channel, subscription as any);
    },
  },
});

const { contextBridge, ipcRenderer } = require('electron/renderer');
const { testConnection } = require('./sequelize');


contextBridge.exposeInMainWorld('electronAPI', {
    // window: (path) => ipcRenderer.send('window', path),
    test: async() =>  await testConnection(),
    handleChannel: () => ipcRenderer.invoke('db')
})
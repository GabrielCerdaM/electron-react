const { contextBridge, ipcRenderer } = require('electron/renderer');
const { testConnection } = require('./sequelize');


contextBridge.exposeInMainWorld('api', {
    // window: (path) => ipcRenderer.send('window', path),
    test: async () => await testConnection(),
    handleChannel: () => ipcRenderer.invoke('db'),
    login: () => ipcRenderer.invoke('login')
})
const { contextBridge, ipcRenderer } = require('electron/renderer');
const { testConnection } = require('./sequelize');


contextBridge.exposeInMainWorld('api', {
    // window: (path) => ipcRenderer.send('window', path),
    // test: async () => await testConnection(),
    test: async (formData) => ipcRenderer.send('formData', formData),
    handleChannel: () => ipcRenderer.invoke('db'),
    login: () => ipcRenderer.invoke('login')
})
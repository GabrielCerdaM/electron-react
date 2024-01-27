const { contextBridge, ipcRenderer } = require('electron/renderer');
const { testConnection } = require('./sequelize');
contextBridge.exposeInMainWorld('electronAPI', {
    //   setTitle: (title) => ipcRenderer.send('set-title', title)
    window: (path) => ipcRenderer.send('window', path),
    test_connection: async () => {
        try {
            return await testConnection();
        } catch (error) {
            console.log(error);            
        }
        return false;
        // ipcRenderer.send('test-connection')
    }
})
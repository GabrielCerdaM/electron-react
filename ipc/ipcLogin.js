const { ipcMain } = require("electron");
const { User } = require('./../Model/User');
const handleLogin = async () => {
    return await User.findAll();
}

function ipcLogin() {
    ipcMain.handle('login', handleLogin);
}
module.exports = { ipcLogin }
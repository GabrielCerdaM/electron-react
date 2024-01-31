const { ipcMain } = require("electron");
const { User } = require('./../Model/User');
const {getAllUsers} = require("../Services/UserService");
const UserRepository = require("../Repository/UserRepository");
const handleLogin = async () => {
    return await User.findAll();
}

function ipcLogin() {
    ipcMain.handle('login', handleLogin);
}

ipcMain.on('formData', (event, formData) => {
    // Handle formData as needed
    try {
        const resp = UserRepository.create(formData);
        console.log({resp});
    } catch (error) {
        console.log({error});
    }
});
module.exports = { ipcLogin }
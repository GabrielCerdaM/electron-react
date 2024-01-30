import { ipcMain } from "electron";
import { User } from './../Model/User';
const handleLogin = async () => {
    return await User.findAll();
}

export default function ipcLogin() {
    ipcMain.handle('login', handleLogin);
}
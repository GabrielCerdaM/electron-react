import { ipcMain } from "electron";
import { User } from './../Model/User';
const handleTest = async () => {
    return await User.findAll();
}

export default function ipcTest() {
    ipcMain.handle('db', handleTest);
}
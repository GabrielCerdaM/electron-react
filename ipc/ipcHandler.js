import ipcLogin  from './ipcLogin';
import ipcTest from './ipcTest';
export default function ipcHandler(){
    ipcLogin();
    ipcTest();
}
/* 
import { Workbox } from 'workbox-window';

const swRegister = async () => {
    if ('serviceWorker' in navigator) {
    const wb = new Workbox('./sw.js');
  
    wb.register();
    }
}

export default swRegister;
 */

import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Service worker not supported in this browser');
};
 
export default swRegister;
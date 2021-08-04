/* 
// These JavaScript module imports need to be bundled:
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';

// Use the imported Workbox libraries to implement caching,
// routing, and other logic:
precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({cacheName: 'images'}),
);
 */

import CacheHelper from './utility/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
 
  // TODO: Caching App Shell Resource
});
 
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
 
  // TODO: Delete old caches
});
 
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
 
  // TODO: Add/get fetch request to/from caches
});
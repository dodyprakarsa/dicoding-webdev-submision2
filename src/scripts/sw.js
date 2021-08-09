import 'regenerator-runtime';
import CacheHelper from './utility/cache-helper';

const { assets } = global.serviceWorkerOption;

// TODO: Caching App Shell Resource
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

// TODO: Delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// TODO: Add/get fetch request to/from caches
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

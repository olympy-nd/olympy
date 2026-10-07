/* Olympy service worker — build ebda53e5999b
   Makes repeat visits open instantly from the device and keeps working on weak or no network.
   It never touches localStorage, so saved drafts and settings are not affected. */
'use strict';
const BUILD = 'ebda53e5999b';
const CACHE = 'olympy-' + BUILD;
const RUNTIME = 'olympy-runtime-v1';
const PRECACHE = ["./", "app-dd4efc7296e7.js", "olympy-ui-dc26233e97b8.css", "assets/logo-9f7dc8dfc49d.png", "manifest.webmanifest", "assets/icon-192.png", "assets/apple-touch-icon.png", "assets/resource-4073c72e7248.woff2", "assets/resource-1c00b6198903.woff2", "assets/resource-63500720cebd.woff2", "assets/resource-c08169c2c58c.woff2"];
const SCOPE = new URL('./', self.registration.scope).href;
const NAV_TIMEOUT_MS = 2000;

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(PRECACHE.map(async path => {
      const url = new URL(path, SCOPE).href;
      // hashed files that an older build already downloaded are copied, not downloaded again
      if (path !== './') {
        const old = await caches.match(url);
        if (old) return cache.put(url, old);
      }
      const res = await fetch(new Request(url, { cache: 'reload' }));
      if (res.ok) await cache.put(url, res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('olympy-') && k !== CACHE && k !== RUNTIME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function fromNetworkAndStore(request, cacheName, key) {
  const res = await fetch(request);
  if (res && (res.ok || res.type === 'opaque')) {
    const copy = res.clone();
    caches.open(cacheName).then(c => c.put(key || request, copy)).catch(() => {});
  }
  return res;
}

// page itself: fresh from the network when it answers quickly, otherwise the saved copy
async function handleNavigation(request) {
  const network = fromNetworkAndStore(request, CACHE, SCOPE);
  const cached = await caches.match(SCOPE);
  if (!cached) return network;
  const timeout = new Promise(resolve => setTimeout(() => resolve(cached), NAV_TIMEOUT_MS));
  try {
    return await Promise.race([network.catch(() => cached), timeout]);
  } catch (e) {
    return cached;
  }
}

// versioned files, fonts, images, the Excel library: device copy first
async function handleStatic(request) {
  const cached = await caches.match(request, { ignoreSearch: false });
  if (cached) return cached;
  return fromNetworkAndStore(request, RUNTIME);
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (request.mode === 'navigate' && url.href.startsWith(SCOPE)) {
    event.respondWith(handleNavigation(request));
    return;
  }
  if (url.origin === self.location.origin && url.href.startsWith(SCOPE)) {
    if (url.pathname.endsWith('/sw.js')) return;
    if (/\.(js|css|woff2|png|jpe?g|webp|svg|webmanifest|txt)$/i.test(url.pathname)) {
      event.respondWith(handleStatic(request));
    }
    return;
  }
  if (url.hostname === 'cdnjs.cloudflare.com') {
    event.respondWith(handleStatic(request));
  }
  // everything else (data/API requests) goes to the network untouched
});

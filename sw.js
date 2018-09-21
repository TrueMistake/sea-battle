/*‘use strict’;
importScripts(‘sw - toolbox.js’);

toolbox.precache([“index.html”]);
toolbox.router.get(‘/ *’,toolbox.cacheFirst);
toolbox.router.get(‘/ *’, toolbox.networkFirst, { networkTimeoutSeconds: 5});*/
‘use strict’;
importScripts(‘sw-toolbox.js’);
toolbox.precache([“index.html”]);
toolbox.router.get(`/*`, toolbox.cacheFirst);
toolbox.router.get(`/*`, toolbox.networkFirst, { networkTimeoutSeconds: 5});
self.addEventListener('push', function(event) {
    event.waitUntil(
        self.registration.showNotification('Got Push?', {
            body: 'Push Message received'
        }));
});
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache) {
        })
);
});
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json'
            ]);
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

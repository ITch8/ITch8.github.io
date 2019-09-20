importScripts("./precache-manifest.1611f69036847b170c555fc8330d4d84.js");


        importScripts('./static/workbox-v3.6.3/workbox-sw.js');
        workbox.setConfig({
            modulePathPrefix: './static/workbox-v3.6.3/'
        });
    /**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author lc(lichuang516@126.com)
 */

/* globals workbox */
workbox.core.setCacheNameDetails({
    prefix: 'lavas-cache',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time',
    googleAnalytics: 'ga'
});
// workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener('message', event => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});

/**
 * example runningCache with api
 */
// workbox.routing.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workbox.strategies.networkFirst());

workbox.routing.registerRoute(new RegExp('https://cnodejs.org/api/v1/topics'),
    workbox.strategies.cacheFirst());
// networkOnly, cacheFirst, cacheOnly, staleWhileRevalidate

/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workbox.routing.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workbox.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 100,
//                 maxAgeSeconds: 7 * 24 * 60 * 60
//             }),
//             new workbox.cacheableResponse.Plugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );


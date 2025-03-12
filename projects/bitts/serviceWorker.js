const CACHE_NAME = 'bit-calculator-cache-v1';
const urlsToCache = [
	'index.html',
	'icon-192x192.png',
	'icon-512x512.png'
];
self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
		console.log('Opened cache');
		console.log(cache);
		return cache.addAll(urlsToCache);
	}));
});
self.addEventListener('fetch', event => {
	event.respondWith(caches.match(event.request).then(response => {
		if (response) {
			return response; // キャッシュがヒットした場合はそれを返す
		}
		return fetch(event.request).then(
			networkResponse => {
				if (!networkResponse || networkResponse.status !== 200) {
					return networkResponse;
				}
				return networkResponse;
			}
		).catch(() => {
			// ネットワークエラー時の処理
		});
	}));
});

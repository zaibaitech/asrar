// Custom service-worker code, bundled by next-pwa (customWorkerDir defaults
// to "worker") and loaded into the generated public/sw.js via importScripts.
// Adds only `push` and `notificationclick`; Workbox precaching / runtime
// caching in sw.js is untouched.
import { parsePushPayload, resolveClickUrl } from './pushLogic';

self.addEventListener('push', (event) => {
  const text = event.data ? event.data.text() : '';
  const { title, options } = parsePushPayload(text);
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const target = resolveClickUrl(data.url, self.location.origin, data.topic);
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url === target && 'focus' in client) return client.focus();
      }
      return self.clients.openWindow ? self.clients.openWindow(target) : undefined;
    }),
  );
});

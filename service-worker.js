const CACHE='signature-fragrance-v6-1-bottleblend';
const APP_SHELL=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==self.location.origin)return;if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const clone=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',clone)).catch(()=>{});return res}).catch(()=>caches.match('./index.html')));return}e.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(r,clone)).catch(()=>{})}return res})))});

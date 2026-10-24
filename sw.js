const C = "ff-v9";
const F = ["./", "index.html", "swin.onnx", "policy.json", "manifest.json",
  "ort.min.js", "ort-wasm.wasm", "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm", "ort-wasm-simd-threaded.wasm",
  "hero.jpg"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(F))));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))));
self.addEventListener("fetch", e => e.respondWith(
  caches.match(e.request).then(r => r || fetch(e.request))));
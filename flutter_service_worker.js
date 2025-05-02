'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "505401ae2fecb36a26805be134171b2d",
"version.json": "6d67d71942abb3994228f3bb6365d480",
"index.html": "ff0796cbb7e31a75bbd13be293128f4f",
"/": "ff0796cbb7e31a75bbd13be293128f4f",
"main.dart.js": "2686962108058f64ffeba7fd85829b7f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "4bb92599e8f365334e9b0cc70aef2c68",
"icons/Icon-192.png": "616d4f8b6fb7e29271a35d4f68de58f6",
"icons/Icon-maskable-192.png": "616d4f8b6fb7e29271a35d4f68de58f6",
"icons/Icon-maskable-512.png": "b409299574b6b085eb29a6f4122ffd78",
"icons/Icon-512.png": "b409299574b6b085eb29a6f4122ffd78",
"manifest.json": "7f717b5a46e5a2d596bf6c1a0eb89304",
".git/config": "894cf61e8d44b3be3dcc59541cf6c0b2",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6a/525b078910f12be4de60df2e069766984608c6": "d1671a42be058e23a150feecdba4da6f",
".git/objects/69/e734cfac6b4bb9712e16c8cba6c7f15ba48796": "85a03ca946753020c6814d027ae62e17",
".git/objects/51/94ac11d5ea888a7c0f4c3bb7bc375771df533a": "f0d5fc80db1135092d962893d6b74724",
".git/objects/94/08c0d14d48b7c02b868cde54b359c01f214d1f": "8f89a2f48a1d73cb71e21e635783ab99",
".git/objects/d7/93911b5003c51dcf177a9a1ffb9d99adcf0ac2": "9ca0243be7a8df37c6ee83915a2621d4",
".git/objects/a2/457d7ca039d7e4d22af427673116b8c1ce81ec": "d78271244e149349f564aa1dee18146b",
".git/objects/a2/c747c743b61b1282d7660d3b4c7441470a0cce": "9d53e2d8dd7062d4283d8ad342a6abe3",
".git/objects/d1/2570be8fdcd45a15130e9d17a83e85dc23a52a": "272e96a447c56d6be0735b08dacb11ef",
".git/objects/f4/057de099c24a5dff806a841493e4385c1a3b9b": "32ee8c6c9b4f2ab8b5d2686ac7f4a6ac",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/ee/b892e562c15a5c19e1c84ea9e1c722320faa78": "ba94060f608e66aa61e0398aa503de1b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9bf8c5b852c6f88cd8d7efd7ceffa5565200a2": "84c74ecea85bc4223dae61c0f7d2cf6e",
".git/objects/f5/bb866b67bfeef11c5211738bda4e056e011c93": "f495dd17c9abcbf3549078dcf8d30860",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/26a869a4ec953ef442868ace9470a77a841c0d": "216f21ef829ba792921bf3931f702193",
".git/objects/fe/afa298506eb553542f238cf0785b84eb4eac42": "c4b1e46cfd5e6ae8d5dacbec8f224c96",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/47138e7ce0389453b0ed5fab6f5fe23975a1dc": "f930943f8395f0225c31407bffdd8b70",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/10/c39c81d4a01fa6346e02c1a163fc1370e54da4": "789fb669310d93f29b522161ca92c1fa",
".git/objects/72/3488e149c66b400b438442ee11cbb295641562": "af8b3dba3aaba8ecbfcc942e3b6b3fd6",
".git/objects/09/ccd60e81340dd8ebf74ad2f15f212fda786b18": "c36a1d6f687d9c7d78a1922e89e0ad62",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/97/a0290721471bc102b904a03d4212046185502d": "2c581b52e49a4db724300c3a28d4fec6",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/1e3d1833710bb97ca50daa17639974cf5ba323": "fe99c369c48226782ef38fb245e83a34",
".git/objects/b9/b2a5b4cb21c4a0e72e213922389c7b289be977": "a8f6e519046fc0b99f7ab75a4680848c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/905b63829159c9bcf4b46b653310c6b8353f84": "57759eb74a2ca9d49d2322e2397085b1",
".git/objects/79/a95563af3a1d128d27d2ed27a6d42d9be24de6": "673ce58646c20f98f5c5fa3963c437e8",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/77/77b3be65d2fb4bb31f6392e91cc696139f93ba": "a1ba754943f17b3ad7b5ccd5b8199d5e",
".git/objects/4a/698a8f2d3abe62d5f8cfebe94a4e7214b485e1": "001bd668f3324c8ac6865fc42b7e3e2b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/cdb34f90bc6b3c8d3deac09f4f00f734be191e": "a37a4cf6338a8c823fee001aeeda231f",
".git/objects/78/12ee37dbaa5c0417a31db8c062888f1ba33a4a": "ff091a2ee2e91daee5634b9b1765db08",
".git/objects/8b/02be6b700a121347c686f37c62163e10fde2bf": "eb6bdf29fc09d01bc91c70c143196694",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc0610e5c8834858f1973da362386935",
".git/logs/refs/heads/main": "0064b64a5c7a4c451a2c29c18a7ab84a",
".git/logs/refs/remotes/origin/main": "df2e7517ff61244402be96e155eb92b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b0ede9692190f5974962d31fb1a90897",
".git/refs/remotes/origin/main": "b0ede9692190f5974962d31fb1a90897",
".git/index": "7f88e5dfecaaedf6525930922dfb25ff",
".git/COMMIT_EDITMSG": "8b2fea08a1516b5bda2171f7e1f9f147",
"assets/AssetManifest.json": "d2727a34f62ff69ae7d2e630fdedd9f1",
"assets/NOTICES": "f0bd519ebb6deae5d0f46414dbaf0bae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "eb7b36ca530b571020938991905bb344",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "005d20b1a72711f64b868fbe16692cd9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d29dfd33620bcc3cd2c92ee9c0f2931a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6f624f49774562b2b22602cf19b161fd",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1d1c22f1cf36a020c227cc9f47df4770",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/logo.png": "bdfe07cde2e93c13628c3a366bdfea56",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

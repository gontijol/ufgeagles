'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b6fe0ca997e993a56486342b489656f8",
".git/config": "3eaf0d9f21185ba4d3f5d2096c9b8c4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf9de7990e09330c97844519f0f26880",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d17065a2bb6a8f2d3c7766c1aee403c5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ed7180aa2b2b57d9c045467f22fdaae",
".git/logs/refs/heads/main": "8ed7180aa2b2b57d9c045467f22fdaae",
".git/logs/refs/remotes/origin/main": "076262791bbfbd2d2fd42ef31fc9cb13",
".git/objects/0d/cce0170e70777ccc1ddd1eea826089f51a6555": "9e3fda08155dcd74abd3390820e5f1be",
".git/objects/12/46f73883e0715be649be27cf5194cc4f2fb282": "aafab2c9a77f3b10bb2d7b58d29bd4d8",
".git/objects/19/0a0c18c706a9f7b8a5fa002a4ebd204db520e6": "a916cec2b49f518f69a495a275535be2",
".git/objects/1d/aae2dbc0cf680321d6da265f749db5b034ec0d": "0d57663d401f24182c4999ec0ca18596",
".git/objects/1f/c07ebcc864c977032867d6e15836fcfee101a1": "ac32938be639d72680d8b94d8db72061",
".git/objects/1f/d380cc71966afd441886347f8560ebfaacb2de": "5465086ee7c2caee4479b6dc3f981336",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/5d7fb145df362cbd4cad50b518926500ee5531": "7157d5661637f6a3668b5af61fc36d52",
".git/objects/45/abe87e4ef9cee3f2f5ebaf85dab44437a8ea92": "37df18677f4c786b416c8b6352514ff4",
".git/objects/47/e0bd3d7218df60e5d410a0cfbe1a58924bef01": "b8e5c2cefc25fb9bf3d9606a3295834b",
".git/objects/50/8993790106f07b11a264e64e43edcdf0348e2a": "8564009fcd8e4f8f0e5bc418f46f621f",
".git/objects/51/1e9ea7389235ff31423b145acd288e4fcd1376": "4c7d975425edbf2398bc07f8064b5105",
".git/objects/5b/5343a4557faa525383f189b3be00af958a85b4": "56e7225c3811f668ecb78126cad767fa",
".git/objects/67/1870b7e925e42419ccd0568df9e33501abf38a": "42620d06583116775a0ea8c8185cb088",
".git/objects/71/96aca524368618f74987f27cea233a79912efd": "f3bf87f0e55c63321c40f94f13182986",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/82/6405a4da7044127de42dab77e344a2cf936dd7": "8ef25fbb366275cd5f85982e32c8f373",
".git/objects/82/ab30808c471ce1b4daddf97acbdfcbaa5fcb79": "ee7f8501b34f4afc16e292510d988640",
".git/objects/87/501853a42b539526bd6214d388713929f7a9ec": "7d822ca827288c410dc0c9cbfc2f48a7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/99/164e6938f1aa055b7fb09a75adfa98a7a06cbe": "68a7525a9b211437680bc7257c18ae25",
".git/objects/99/7c261890282ba84321a2bdc95eed108128531f": "4ff1bfd233f790c7623af1471fa611d5",
".git/objects/9c/040af77d57ee1a0320a46d92430c583cafba23": "605a5a876f6dd2f8449bc2dd905fe97d",
".git/objects/9d/38ca8b8ed116e1aea4f9ab8ac8a768537d4f88": "aba7ce41dc2008b31fe02bf2b4afc2bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/11fc283079865cb3537cd6399d288b33ae1abe": "106d76e562df2cb729dbee44430361d6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/c492eb740db8e159e35f70b236859554c4a456": "18a7490d870d1e4af8387e8927f5fd28",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/e3/1c76d7fde113576628b027158341b68f7b8c2d": "b3ba58d594c9d5b0521b4d552eb1c4e6",
".git/objects/e4/9661e58a701d43eb3258329a96645f4227dc67": "7eae8488f7935babeafb1158efd42475",
".git/objects/e4/a41f63e4bc6dc045bdf8de41326d8058d37f87": "72cf099f5ff95eb3928236fa8edffa00",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/c9be47fcdba7973c126916b9ba6cf96ba727d7": "0d5aa0753b3fd4a4f39c88fba33d1b87",
".git/objects/f5/6c08db028b223700f5b0c1d7ca9dc255de31de": "7d4cff983f706156f04b2b0a00627281",
".git/refs/heads/main": "8425158cdafa91cafa9d4e824157e86f",
".git/refs/remotes/origin/main": "8425158cdafa91cafa9d4e824157e86f",
"assets/AssetManifest.json": "542df17f86ab539035eaba404b78d32b",
"assets/assets/images/animals.jpg": "92da7c37b68c35b5be2bb1a90b57072d",
"assets/assets/images/animals.psd": "16d12a73ca75d396b75714a0c329fe12",
"assets/assets/images/clashroyale.jpg": "56c018804ac55d008d85515c36e4e64c",
"assets/assets/images/cover.jpg": "4cc43f5c5743ead6b51c7f0dd8481895",
"assets/assets/images/cover.psd": "b168662f9e136eb1d55f07629cb56bb2",
"assets/assets/images/csgo.jpg": "cb7c7b59c95bbcde756958484197727b",
"assets/assets/images/dota.jpg": "5492222dca8fb14b4661b00731a0bc05",
"assets/assets/images/freefire.jpg": "62542893555f142cac4c39d2e9dc7099",
"assets/assets/images/lol.jpg": "5e0fa3b37af43fee33dc6c59ebf98f6d",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "8bead80ca84a18bf3a301d5164687113",
"assets/assets/images/photography.psd": "fe839fbb221a6cbd58ef440a95e9acf7",
"assets/assets/images/trekking.jpg": "f0bca4e9824fbe7cdfb89b615a6014ae",
"assets/assets/images/trekking.psd": "4894c2a6ea87f4630399747a206723cb",
"assets/assets/images/valorant.jpg": "d3d8a0a6dbf28c5bcf156e9ab1e3ac9c",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "2750eb1b05c188a6c6e5a13ad4ffe0e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "46b940be39f6a32ec69bed48a375f80a",
"/": "46b940be39f6a32ec69bed48a375f80a",
"main.dart.js": "750bb4c76a9c00baf1c016fbef51c894",
"manifest.json": "b265d13b5878a5989b7486ff87fdc0ed",
"ufgeagles/.git/config": "3cf586945d486b9e922663f484439e95",
"ufgeagles/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"ufgeagles/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"ufgeagles/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"ufgeagles/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"ufgeagles/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"ufgeagles/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"ufgeagles/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"ufgeagles/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"ufgeagles/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"ufgeagles/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"ufgeagles/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"ufgeagles/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"ufgeagles/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"ufgeagles/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"ufgeagles/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"ufgeagles/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"version.json": "3045a0560582256a230d8195b99dabee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

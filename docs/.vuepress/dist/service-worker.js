/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "About.html",
    "revision": "fb59f6c422cb562d66f37caf23b282f5"
  },
  {
    "url": "assets/css/0.styles.fcb1cc4e.css",
    "revision": "4252c4bc8c6562aadb956dd5f443b024"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.82db5e1e.js",
    "revision": "856882cfd2babfebfcabfa89ecf27c7d"
  },
  {
    "url": "assets/js/11.b63c8955.js",
    "revision": "87b741f577ffac0b12a25d97dbb85b42"
  },
  {
    "url": "assets/js/2.35b04562.js",
    "revision": "88a6993566aeb4b9d09feb9ac8b71466"
  },
  {
    "url": "assets/js/3.ed5b8292.js",
    "revision": "5381c5798fbcd99de371bafc9bf21fdd"
  },
  {
    "url": "assets/js/4.1a35591d.js",
    "revision": "c5e3d5aadeeb59e8d4167fda2d5d5109"
  },
  {
    "url": "assets/js/5.0c98de15.js",
    "revision": "32404b9b98b7baab6a5aba24d0567e06"
  },
  {
    "url": "assets/js/6.5bbadbe9.js",
    "revision": "24805147f5abd5c4ceae3ffff3cee063"
  },
  {
    "url": "assets/js/7.0d1ea96e.js",
    "revision": "ec0abfc53528b89b3424cecdb0e1db84"
  },
  {
    "url": "assets/js/8.8336adb3.js",
    "revision": "ebe2cd15cedf3419f4cd73abc68394ba"
  },
  {
    "url": "assets/js/9.8285919e.js",
    "revision": "16771fad548ceeefb8185490ccdaabda"
  },
  {
    "url": "assets/js/app.e3bfa048.js",
    "revision": "df6ae1f8db430305014ab7bf974b8258"
  },
  {
    "url": "images/logo.svg",
    "revision": "914a04a2f97898f06902ecdcae7c0674"
  },
  {
    "url": "index.html",
    "revision": "c6485324c8fe42ec577c647602e2eb13"
  },
  {
    "url": "Playground.html",
    "revision": "24dc117df3c91b4c9fcb7babf6d35bc5"
  },
  {
    "url": "Updates.html",
    "revision": "020a8fa59097fbbca72fe64c5535a72f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

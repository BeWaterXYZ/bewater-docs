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
    "url": "404.html",
    "revision": "f9cbfc874737a77e88bbba958f747a30"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/20230516170134.png",
    "revision": "51f6c617bb267f46c9a64a173b8a45e2"
  },
  {
    "url": "assets/20230516170315.png",
    "revision": "9ff88ba82143d51c3aa7f869c7466bcd"
  },
  {
    "url": "assets/browsing-events.png",
    "revision": "c894133b6e621c453ca0ccbb8d156199"
  },
  {
    "url": "assets/css/0.styles.5beffba2.css",
    "revision": "524519764546c4879917431d693c8c41"
  },
  {
    "url": "assets/github-auth-cancel.png",
    "revision": "86b08aa9457fea942ef5da3f32e39054"
  },
  {
    "url": "assets/github-auth.png",
    "revision": "95c86d01c689ccd7b236fd6e15dd3c73"
  },
  {
    "url": "assets/github-connect.png",
    "revision": "c0e97f6c8392e8c98e914b9f1ff7b56a"
  },
  {
    "url": "assets/github-err.png",
    "revision": "2523ae5265aad7aac65babd32cbc3ed6"
  },
  {
    "url": "assets/github-reauth.png",
    "revision": "23a8fbe28e313ae275b7c8edc2bfc199"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85fab959.js",
    "revision": "df39cc99e8c08baa38a66211e80261ba"
  },
  {
    "url": "assets/js/11.a61ecbf0.js",
    "revision": "4395265b547506e341021caab2c6abf6"
  },
  {
    "url": "assets/js/12.edefdd96.js",
    "revision": "027af1cf60bd0689e5099ee8a2663db3"
  },
  {
    "url": "assets/js/13.1c06d5ae.js",
    "revision": "7a7d01726f5343cb785d0915e61cbd60"
  },
  {
    "url": "assets/js/14.630ee6c9.js",
    "revision": "4b56b3698380f9a06b0093d19150311a"
  },
  {
    "url": "assets/js/15.371b54a1.js",
    "revision": "ed83c8a9ae3e4de721dd93daed6f0374"
  },
  {
    "url": "assets/js/16.655b7ed4.js",
    "revision": "6aef4a719442361a7a9b9c9204473f04"
  },
  {
    "url": "assets/js/17.2cc09bc8.js",
    "revision": "e78677093b7e33ffa8e5132b952f1285"
  },
  {
    "url": "assets/js/18.0844546e.js",
    "revision": "219507e157b2451d934bec060bea28d2"
  },
  {
    "url": "assets/js/19.7e7442c9.js",
    "revision": "3d1fc3cf34687e5341b48605b7d90d53"
  },
  {
    "url": "assets/js/20.7b04c249.js",
    "revision": "d0f821de776d6ea05440c4f7d5b82c6c"
  },
  {
    "url": "assets/js/21.f0356158.js",
    "revision": "4abf69a443183d984ceafd851ea64852"
  },
  {
    "url": "assets/js/22.c6e0d70e.js",
    "revision": "58dfdf268d8972a07141b7c6849c1e4a"
  },
  {
    "url": "assets/js/4.038d83e5.js",
    "revision": "5e42a11ba1fe568ea3ae424ae7d9e7ec"
  },
  {
    "url": "assets/js/5.59ecb527.js",
    "revision": "3555ffd89590d5e183c5283333c8c568"
  },
  {
    "url": "assets/js/6.254412e7.js",
    "revision": "d054bc22b8c4776d41ef048238b4296f"
  },
  {
    "url": "assets/js/7.fcdef11b.js",
    "revision": "999d5cbf381bbea0d0dfb9392dfa1b09"
  },
  {
    "url": "assets/js/8.09b38488.js",
    "revision": "f150c3cea54d7e889e4212b284bddf81"
  },
  {
    "url": "assets/js/9.78756d57.js",
    "revision": "ab51457e58a5ab9a01ab160d3b7a783f"
  },
  {
    "url": "assets/js/app.3ee20633.js",
    "revision": "8169556de23d333b3b1adc557de15b71"
  },
  {
    "url": "assets/js/vendors~flowchart.b8d646e1.js",
    "revision": "03bb07b1fc48513e5d0525a06524b47f"
  },
  {
    "url": "assets/js/vendors~notification.ea0b2faa.js",
    "revision": "6e5e8ea547fe94cdecc2bbda2c3da349"
  },
  {
    "url": "assets/logotype-light.png",
    "revision": "930b9bbbdf9d39f55033eae2575a7641"
  },
  {
    "url": "assets/management.png",
    "revision": "bc3a58636594aff34ef4180b105b3e5c"
  },
  {
    "url": "assets/participation.png",
    "revision": "4eb859ab1a055ab3609192ebf7637447"
  },
  {
    "url": "assets/registration.png",
    "revision": "aa6e55124e333e6f7648187596bfbf34"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e1b148a02d7838229c28db807dd41627"
  },
  {
    "url": "guide/index.html",
    "revision": "3cee72e56601a9ddb352450eea8b63fb"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5eb7a959b9f74eb9245bf5cc4f12837b"
  },
  {
    "url": "icons/android-chrome-372x372.png",
    "revision": "1eabbf408e53ac33cd33716f3ba27dbe"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "4c8ddaae8be6e9e8b42a2ba8a81f5fd0"
  },
  {
    "url": "index.html",
    "revision": "38b6658ece3e0e9ccf0c39224bfdb985"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "8b680ae9fb98c4eeba5e3cacf9c7e479"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "2e483208915a4a3df0187fafe9878a5a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "278b5ea7f774690f88b8df96058378bb"
  },
  {
    "url": "zh/index.html",
    "revision": "50ebb5220b17dc7793568811fe926227"
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

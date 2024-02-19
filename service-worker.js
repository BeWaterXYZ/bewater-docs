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
    "revision": "158cd97c4a31c560e0f32f393be786f7"
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
    "url": "assets/20240219125630.png",
    "revision": "61bdf7a6d1457cf76c463bead2ecaf5d"
  },
  {
    "url": "assets/20240219131209.png",
    "revision": "20c159cc16b529fabd6f97e6ef5ace0c"
  },
  {
    "url": "assets/20240219132032.png",
    "revision": "bb89331b614c6b1844a70d6958626580"
  },
  {
    "url": "assets/20240219132408.png",
    "revision": "c920333f513c495eeebe9838df5364b2"
  },
  {
    "url": "assets/20240219132705.png",
    "revision": "09b0b7a09e4fc3f7c375894a4be2b6ef"
  },
  {
    "url": "assets/20240219133215.png",
    "revision": "4834e3192b1dca5db713d16e36a94eba"
  },
  {
    "url": "assets/20240219133457.png",
    "revision": "af0cbde651bfb673edce0e56327e0413"
  },
  {
    "url": "assets/20240219134200.png",
    "revision": "3c77c5291c02816ceeb3d3d5b48677d5"
  },
  {
    "url": "assets/20240219134440.png",
    "revision": "bc102d99615084e2faa61811920e47b6"
  },
  {
    "url": "assets/20240219135148.png",
    "revision": "1a96d0d8e5a347531c7b64f725cb77ca"
  },
  {
    "url": "assets/20240219135304.png",
    "revision": "2cd2e25abef620ef8afb313ad8620bda"
  },
  {
    "url": "assets/20240219135755.png",
    "revision": "0103a18ef17962d3dc3712312a11ea08"
  },
  {
    "url": "assets/20240219140305.png",
    "revision": "8caa51a7d41166a9639172c5923e6746"
  },
  {
    "url": "assets/browsing-events.png",
    "revision": "c894133b6e621c453ca0ccbb8d156199"
  },
  {
    "url": "assets/css/0.styles.a3f99fa9.css",
    "revision": "91dfc7455e196dcd71d38c159fa0007f"
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
    "url": "assets/js/1.4edaf371.js",
    "revision": "84169934cfa10404d51cdbce65f937ce"
  },
  {
    "url": "assets/js/12.3b0e76d6.js",
    "revision": "ca63831a9af48e29fc878753f4549a5d"
  },
  {
    "url": "assets/js/13.3f5d0f94.js",
    "revision": "0525c1f59da97ffb0c503a1c64486c16"
  },
  {
    "url": "assets/js/14.81200afb.js",
    "revision": "9e15238ba30f0888dac0f149c5f37b08"
  },
  {
    "url": "assets/js/15.a4813d51.js",
    "revision": "0116376b44eabbec91ec48950b6c436c"
  },
  {
    "url": "assets/js/16.91f7e800.js",
    "revision": "df958bd738b7876bd17478446ac56d68"
  },
  {
    "url": "assets/js/17.765cc525.js",
    "revision": "6d18b4870857d4d36af7652da8c9789e"
  },
  {
    "url": "assets/js/18.689f5d63.js",
    "revision": "5bbd6bee76c08a7ab5678368e1c6ee75"
  },
  {
    "url": "assets/js/19.a538f4bb.js",
    "revision": "52d0203b8b121c43a8d281065e121f0c"
  },
  {
    "url": "assets/js/2.7648212a.js",
    "revision": "f8f7a0829ee36fe032f963c1bc37ba45"
  },
  {
    "url": "assets/js/20.d8f3ce79.js",
    "revision": "2b5f31c1e6c3a69afac96d97fb3ab2cf"
  },
  {
    "url": "assets/js/21.8f8e4d5b.js",
    "revision": "86a7c4d5bbb12067afe1094ea4bc56f0"
  },
  {
    "url": "assets/js/22.5aa34358.js",
    "revision": "27c9ed16bdb1a322614b57341f6a6a00"
  },
  {
    "url": "assets/js/23.2f046e0b.js",
    "revision": "db184263a9fab264b9f69e10143a3f8d"
  },
  {
    "url": "assets/js/24.8e0e2811.js",
    "revision": "a0110accee5a125488e737940460a35d"
  },
  {
    "url": "assets/js/25.1c715a58.js",
    "revision": "d9cd00fc907f04cccc51cbe87bf024d6"
  },
  {
    "url": "assets/js/26.f6ebf71d.js",
    "revision": "62561f8fe7a2424bb2d9d79458934597"
  },
  {
    "url": "assets/js/27.3d0a9b20.js",
    "revision": "03b3a49801facbe593d61065b6ac1bdf"
  },
  {
    "url": "assets/js/28.6e702827.js",
    "revision": "d6ed4689868b2d3da2aca4f84816bf90"
  },
  {
    "url": "assets/js/29.8a948962.js",
    "revision": "ade79a6f5e9666bb027ad92e7e6f2ad3"
  },
  {
    "url": "assets/js/3.08527352.js",
    "revision": "99142693a06acb621d62c6aa4f14d850"
  },
  {
    "url": "assets/js/30.08f3fc6d.js",
    "revision": "304cb2f64b505cf36b1520d748b9272f"
  },
  {
    "url": "assets/js/31.cead1db0.js",
    "revision": "ae902b4b9e94651dcfa47baf57b65640"
  },
  {
    "url": "assets/js/32.ff61a1b1.js",
    "revision": "6c53e4d6bb6a84b1e2b86106af1ed724"
  },
  {
    "url": "assets/js/33.4b349d91.js",
    "revision": "4201dec4883faa6ce19e38a83443a8f4"
  },
  {
    "url": "assets/js/34.d3849f94.js",
    "revision": "5910566882b192419fd95af36e37c7b6"
  },
  {
    "url": "assets/js/35.6df9cee5.js",
    "revision": "67f892d882f37d70e4408a88d914226b"
  },
  {
    "url": "assets/js/36.1e69f568.js",
    "revision": "b4204674e1b97f25cf358cdbb50df109"
  },
  {
    "url": "assets/js/37.db76ab4d.js",
    "revision": "8dde07e277dd53d3d545ffa28e67b9c7"
  },
  {
    "url": "assets/js/38.50f18c06.js",
    "revision": "bda25aea19ba96d7d58c7aa9d78ceb51"
  },
  {
    "url": "assets/js/39.dd02a3cf.js",
    "revision": "8b9620c10b34c828ceff6600fe390a7a"
  },
  {
    "url": "assets/js/4.2ef1faa5.js",
    "revision": "1a40100f6520e0d2e2f2a25be1a8808d"
  },
  {
    "url": "assets/js/40.3d8c7771.js",
    "revision": "6c540150fe434bc4ff69325ed1b915c9"
  },
  {
    "url": "assets/js/41.83b29ece.js",
    "revision": "8b2527c4d095e21d867885359d9d6950"
  },
  {
    "url": "assets/js/42.050a6bdb.js",
    "revision": "c13ff42821dec148eee80190cbbebefb"
  },
  {
    "url": "assets/js/43.463185b6.js",
    "revision": "db1cb86bde76d3664a9b481dff944543"
  },
  {
    "url": "assets/js/44.292bc67d.js",
    "revision": "6e0d7b8583d8e3b95a8d440194c012b0"
  },
  {
    "url": "assets/js/5.3d2614d9.js",
    "revision": "4179cafa729bc049886cf977206b9c22"
  },
  {
    "url": "assets/js/6.1969f600.js",
    "revision": "a65742678450eae4132014698fdb72a4"
  },
  {
    "url": "assets/js/7.7b307e43.js",
    "revision": "81633c611f28e8229955975af2653d64"
  },
  {
    "url": "assets/js/app.ff141689.js",
    "revision": "376ffe1e8c4d39f6a3abd55f5eb8e73e"
  },
  {
    "url": "assets/js/vendors~docsearch.ee41545b.js",
    "revision": "e1b08506b923019cbab0207abdc4e52c"
  },
  {
    "url": "assets/js/vendors~flowchart.f3089efa.js",
    "revision": "cd6e48b36a32c7ba52c2ef3243bb6f53"
  },
  {
    "url": "assets/js/vendors~notification.e4b17194.js",
    "revision": "04d84046b21a45c4bc68053c10d75e69"
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
    "revision": "1ddd2016492a5866cef009560116dad3"
  },
  {
    "url": "guide/index.html",
    "revision": "6e914c94279a0c18e5db655bb96256a6"
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
    "revision": "fb1f1ab8fe16e883efb0828fde0406b4"
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
    "url": "zh/aixcrypto/chapter1.html",
    "revision": "e9f2ed050bfdec4402422050e06489d8"
  },
  {
    "url": "zh/aixcrypto/chapter2.html",
    "revision": "3df1c52c98ed212424dc067cc23a0241"
  },
  {
    "url": "zh/aixcrypto/chapter3.html",
    "revision": "b1f6c460f46185d3e0d796cf355514c8"
  },
  {
    "url": "zh/aixcrypto/chapter4.html",
    "revision": "8e0898e94ff3cba14f9563588381001a"
  },
  {
    "url": "zh/aixcrypto/chapter5.html",
    "revision": "6be294e06b3ea3406b3321a2b4cffc55"
  },
  {
    "url": "zh/aixcrypto/chapter6.html",
    "revision": "e801f5b54f3df7837f1df8fb26d6c2f8"
  },
  {
    "url": "zh/aixcrypto/introduction.html",
    "revision": "7c460a1d6665ca104d29cf352a428912"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "623964635cb95e077a220549cc6a8080"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "14889ad53e6132340900e16069a65d3d"
  },
  {
    "url": "zh/index.html",
    "revision": "3d9defd8a9e67f6d46497c1de1afdf49"
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

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
    "revision": "6e48ecaaa8ab7e2c19f5523335c6425b"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/20230516170134.png",
    "revision": "4e46a9a3b3fb61dcd7fb095d8c5236c5"
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
    "url": "assets/ai-c-tu11x.jpg",
    "revision": "e73be75d674acba363c45c5bd2f48858"
  },
  {
    "url": "assets/ai-c-tu13.jpg",
    "revision": "d78973146c1baf46023acc94970d1d7b"
  },
  {
    "url": "assets/ai-c-tu16.jpg",
    "revision": "86705c768feb972f9244f352d63f442f"
  },
  {
    "url": "assets/ai-c-tu17.png",
    "revision": "088ec5d934ef34433ef7a153714e05cf"
  },
  {
    "url": "assets/ai-c-tu18.png",
    "revision": "90bd273ae081031907eb97b60dae9960"
  },
  {
    "url": "assets/ai-c-tu19.jpg",
    "revision": "9572ac74670853691ed5bcec7e3c559a"
  },
  {
    "url": "assets/ai-c-tu20.png",
    "revision": "3c508dba21ccdc10ce21343e134c723c"
  },
  {
    "url": "assets/ai-c-tu21.jpg",
    "revision": "ccab4b8e4a234fc9c3485d07d4df490b"
  },
  {
    "url": "assets/ai-c-tu22.jpg",
    "revision": "37e5fb64ea1aa0e0da00e98b1fc9d999"
  },
  {
    "url": "assets/ai-c-tu23.jpg",
    "revision": "d8dd97c04942052663c1de1b3f5a299e"
  },
  {
    "url": "assets/ai-c-tu24.jpg",
    "revision": "ff06228fdef5470721c3c9d4816d089a"
  },
  {
    "url": "assets/ai-c-tu25.jpg",
    "revision": "68c8ee7c7d85a66c2b5d9579d899332e"
  },
  {
    "url": "assets/ai-c-tu26.jpg",
    "revision": "88edca6b4315697c6c68700c2ee97994"
  },
  {
    "url": "assets/ai-c-tu27.jpg",
    "revision": "8a3429bd1a97c37167ac43482dda4cfa"
  },
  {
    "url": "assets/ai-c-tu28.jpg",
    "revision": "1b84480595b584c1288ee50d77a2ea94"
  },
  {
    "url": "assets/ai-c-tu29.jpg",
    "revision": "5d7f51a9f6d29bdb2e50f1df3d94eba4"
  },
  {
    "url": "assets/ai-c-tu30.png",
    "revision": "41df03b23d7b7d5cb77ec7a887ea23cd"
  },
  {
    "url": "assets/ai-c-tu31.jpg",
    "revision": "5544821a4ea97f928faffdcb3a64a96d"
  },
  {
    "url": "assets/ai-c-tu32.jpg",
    "revision": "8ef410404352f3f3d8a20fd331c5ff9b"
  },
  {
    "url": "assets/ai-c-tu33.jpg",
    "revision": "f1d27443a0f709d221710043df15421b"
  },
  {
    "url": "assets/ai-c-tu34.jpg",
    "revision": "d4e987d419423a5e518bf32345e2662d"
  },
  {
    "url": "assets/ai-c-tu35.jpg",
    "revision": "e211b0f035d1318107b9293cd5a1a909"
  },
  {
    "url": "assets/ai-c-tu36.png",
    "revision": "71a5ee29d6fbf45baa923117abfb3a7c"
  },
  {
    "url": "assets/ai-c-tu37.png",
    "revision": "084a01adf21b7e6db0b07fc31cfe1507"
  },
  {
    "url": "assets/ai-c-tu38.jpg",
    "revision": "00da62cedf25d6e5284fe98ef81460d8"
  },
  {
    "url": "assets/ai-c-tu39.jpg",
    "revision": "581cbf061dcd6ab827b3d1e2bb379e73"
  },
  {
    "url": "assets/ai-c-tu40.jpg",
    "revision": "5e3a86c14bcaefd9461533ba1dff7dee"
  },
  {
    "url": "assets/ai-c-tu8.2.jpg",
    "revision": "e741b9ae9057e78b78a837f99ccdf9a3"
  },
  {
    "url": "assets/ai-cy-tu15.jpg",
    "revision": "47b5cce9c19e0031a683d2bd3135fc39"
  },
  {
    "url": "assets/browsing-events.png",
    "revision": "4768d41aa9fd131e325dc618f748a5b3"
  },
  {
    "url": "assets/c-tu-14.jpg",
    "revision": "98485f281acc8fdeb3c58a7b28d4c650"
  },
  {
    "url": "assets/css/0.styles.60130a2d.css",
    "revision": "d8e0eb49f7c4a89ed587a9e032d39ec9"
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
    "url": "assets/host-tu-1.jpeg",
    "revision": "1b9187ce40c1988d89cfa2f185d60a1f"
  },
  {
    "url": "assets/host-tu-10.png",
    "revision": "9927d39a246b2d28d4fc96edeec5858d"
  },
  {
    "url": "assets/host-tu-11.png",
    "revision": "824daab4c7940e3cd1cf91efcf0b005c"
  },
  {
    "url": "assets/host-tu-12.png",
    "revision": "20241a83d7741c8d6830cae56cb22374"
  },
  {
    "url": "assets/host-tu-13.png",
    "revision": "0d0457c01ed6d04bb9b92996360eb730"
  },
  {
    "url": "assets/host-tu-14.png",
    "revision": "3a9ba1a8dbaa225a44866c6169f87ecf"
  },
  {
    "url": "assets/host-tu-15.png",
    "revision": "a43d695dd3f2d0fb9cd18de41cdeaa95"
  },
  {
    "url": "assets/host-tu-2.png",
    "revision": "1770be850b2a8e3f1537de1886b15a1d"
  },
  {
    "url": "assets/host-tu-3.png",
    "revision": "ec3a45311e4e834343ffb33beba7c123"
  },
  {
    "url": "assets/host-tu-4.jpeg",
    "revision": "534b1f0767dd3b480b2658345eec27c7"
  },
  {
    "url": "assets/host-tu-5.png",
    "revision": "0bf3f23966ab8f60365bd7c0e6939e68"
  },
  {
    "url": "assets/host-tu-6.png",
    "revision": "7b41cc0f68fc20bf5d9ec59eb1a683cc"
  },
  {
    "url": "assets/host-tu-7.png",
    "revision": "47d5620c582f57b6766d17bdd0a662a4"
  },
  {
    "url": "assets/host-tu-8.png",
    "revision": "c0948e08ad2f1f8ed623ed21a09668b3"
  },
  {
    "url": "assets/host-tu-9.png",
    "revision": "d3c15342a2dd7b26397343dec19b18e2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1e1770c3.js",
    "revision": "74fcd20c390e597804b4f430f2d0e9ca"
  },
  {
    "url": "assets/js/12.97a72e95.js",
    "revision": "d23974189b619b65c9f77dfea9d2525c"
  },
  {
    "url": "assets/js/13.c9f4a76f.js",
    "revision": "cb03dfa3613937b711249e2539cf5985"
  },
  {
    "url": "assets/js/14.0e6d3904.js",
    "revision": "d09da6654ebe01b9e78415677be5bbae"
  },
  {
    "url": "assets/js/15.064af85d.js",
    "revision": "24feff0196b79d4bb9a428b51c0f4241"
  },
  {
    "url": "assets/js/16.27696f00.js",
    "revision": "19c918236b8656970066b9bf2474d923"
  },
  {
    "url": "assets/js/17.799805cf.js",
    "revision": "ddd67031d982af7561947a8ae1582570"
  },
  {
    "url": "assets/js/18.d3ab5f44.js",
    "revision": "c2d90977df699c01aff6a9f5d421dd20"
  },
  {
    "url": "assets/js/19.0804e2aa.js",
    "revision": "17eae454a2decabbbd88e78cd4c5b1ba"
  },
  {
    "url": "assets/js/2.fd7fa746.js",
    "revision": "f4820b7d5aa4623b39e01618ed38a4f9"
  },
  {
    "url": "assets/js/20.91bbde8a.js",
    "revision": "373c8bfdbe95b276cb618e52a1eb6b11"
  },
  {
    "url": "assets/js/21.1366ba85.js",
    "revision": "1b3a03b84b34b4856659ce5b0c482cba"
  },
  {
    "url": "assets/js/22.802e5d88.js",
    "revision": "f21fdfa4542b2fa80a0af6c4c462eed2"
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
    "url": "assets/js/26.cb58ece4.js",
    "revision": "52a44cf8363a5595363bc879c394b836"
  },
  {
    "url": "assets/js/27.3d0a9b20.js",
    "revision": "03b3a49801facbe593d61065b6ac1bdf"
  },
  {
    "url": "assets/js/28.e0a00659.js",
    "revision": "5c7c444062094938c8ba84c6d45deba0"
  },
  {
    "url": "assets/js/29.8a948962.js",
    "revision": "ade79a6f5e9666bb027ad92e7e6f2ad3"
  },
  {
    "url": "assets/js/3.5fa0be3d.js",
    "revision": "9d5d8354b217a3a7153f1b842c6e6525"
  },
  {
    "url": "assets/js/30.d2201f73.js",
    "revision": "d36c67c6079ead8e166185064bebad36"
  },
  {
    "url": "assets/js/31.ecd5ef92.js",
    "revision": "12cd66dbfd232096f23a0da56b77c86c"
  },
  {
    "url": "assets/js/32.6d30d509.js",
    "revision": "b2f42bb8c5b21661d78c3e4667ef026a"
  },
  {
    "url": "assets/js/33.7c3da672.js",
    "revision": "10e0b28303e6f20b878b0faff021876a"
  },
  {
    "url": "assets/js/34.05220c72.js",
    "revision": "36f993666cdfb1e7dc4cdaba1d36c8a5"
  },
  {
    "url": "assets/js/35.9b6c61d6.js",
    "revision": "bc8c4bfa1c14b633df4e60bf3b9f28ca"
  },
  {
    "url": "assets/js/36.a21c4ff0.js",
    "revision": "c8aa483e7aba9768c6dedde636f2549d"
  },
  {
    "url": "assets/js/37.e473353c.js",
    "revision": "7222646c4aa580da2562fc2f157bfdbb"
  },
  {
    "url": "assets/js/38.dd4f5923.js",
    "revision": "7d5dff6efaa87d338fa5847f7da5784c"
  },
  {
    "url": "assets/js/39.269c2754.js",
    "revision": "5013263edb2b71c202da7a54e5d76d29"
  },
  {
    "url": "assets/js/4.2ef1faa5.js",
    "revision": "1a40100f6520e0d2e2f2a25be1a8808d"
  },
  {
    "url": "assets/js/40.9ac8c2d7.js",
    "revision": "b8d2aebd053db8e7771d63ab3267e667"
  },
  {
    "url": "assets/js/41.e15ecc4d.js",
    "revision": "26ba1b19827a626404cc830e1f14e662"
  },
  {
    "url": "assets/js/42.85a40b40.js",
    "revision": "156d4372870f248ef76b71a585f77cfd"
  },
  {
    "url": "assets/js/43.e5535ecd.js",
    "revision": "d5da0d5cd29573e1a52c2a1817ff1b6b"
  },
  {
    "url": "assets/js/44.5b21f9e2.js",
    "revision": "32d9911b455615980a2757380119941f"
  },
  {
    "url": "assets/js/45.6262e0d2.js",
    "revision": "fa53436c5b4d25795f9fc80e287bef3b"
  },
  {
    "url": "assets/js/46.45c04d9d.js",
    "revision": "7ef9e7ddec386461b50c95740ff0c0a3"
  },
  {
    "url": "assets/js/47.e30791f5.js",
    "revision": "d65f373d212f96a31d7cdb8b18c974d5"
  },
  {
    "url": "assets/js/48.ee9cc3ef.js",
    "revision": "9d7b93e9a41fa6c8f66050ce4c499b88"
  },
  {
    "url": "assets/js/49.2ef8b29b.js",
    "revision": "6d63534f61b8018731eed53f49667f13"
  },
  {
    "url": "assets/js/5.3d2614d9.js",
    "revision": "4179cafa729bc049886cf977206b9c22"
  },
  {
    "url": "assets/js/50.378d9760.js",
    "revision": "c893c588d98004f68b74c3045157fecb"
  },
  {
    "url": "assets/js/51.9812f9dd.js",
    "revision": "8458329dfa8f1aa30d333b4ea94d9b7b"
  },
  {
    "url": "assets/js/52.b6dccc7e.js",
    "revision": "d5f6bdfb8db699ac68fef43ae143b819"
  },
  {
    "url": "assets/js/53.fc9e57f4.js",
    "revision": "a1abf7249987700b2ae1aef630f533f2"
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
    "url": "assets/js/app.f5dd811c.js",
    "revision": "e7df05ea8abd096db571689e2715fdc6"
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
    "revision": "82dc56662e67e94a4565a983542c911b"
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
    "url": "guide/host-started.html",
    "revision": "696d60e064f9a53054842f37a755cca5"
  },
  {
    "url": "guide/index.html",
    "revision": "d0e81b86ae2f1e18b7ee7855b7e32e49"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "7f4232e0e36b53de4a0b7d2f219c191b"
  },
  {
    "url": "icons/android-chrome-372x372.png",
    "revision": "addc60b0a05faa685b4cd53737ab8729"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "e159ddbc22b37975bde5bff393badec4"
  },
  {
    "url": "index.html",
    "revision": "f04a3f3bc5188f852c4951df0ae50a5a"
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
    "revision": "b18565cff659dc842884698eaba6e499"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/aixcrypto/chapter1.html",
    "revision": "56f4b96677be704bd9e27df9adfef29f"
  },
  {
    "url": "zh/aixcrypto/chapter2.html",
    "revision": "2ce288725656612bb3e5a49045b5642b"
  },
  {
    "url": "zh/aixcrypto/chapter3.html",
    "revision": "7645b11b0c46ff4a35a1c879a7b81eec"
  },
  {
    "url": "zh/aixcrypto/chapter4.html",
    "revision": "aa83eb3abc46b464ba521fe57f18abe8"
  },
  {
    "url": "zh/aixcrypto/chapter5.html",
    "revision": "6d377794fd339791099352c00b449944"
  },
  {
    "url": "zh/aixcrypto/chapter6.html",
    "revision": "070ff372d1bded57a106e701939ae0f5"
  },
  {
    "url": "zh/aixcrypto/chapter7.html",
    "revision": "84d81ee5e389335d848cf600fc754ded"
  },
  {
    "url": "zh/aixcrypto/index.html",
    "revision": "046c1d3b417fe1f8a126e90e55a14ec4"
  },
  {
    "url": "zh/guide/host-started.html",
    "revision": "9ff4d3531accc702c20cb312a9209440"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "11720357a5b368cdf6ac3b7919dee33e"
  },
  {
    "url": "zh/index.html",
    "revision": "f31dabb614d20d3d2214b040fb011496"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter1.html",
    "revision": "ccf5f8bdf9e67969762f740892066f2f"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter2.html",
    "revision": "5f04191ce4e38c0da76497d2f376d071"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter3.html",
    "revision": "c25af810c954d2b0b58add3622f9324c"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter4.html",
    "revision": "b9fceb48198493a0a026d939938cd7a7"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter5.html",
    "revision": "46624e9e467d5f24b8751d5ccd840bf1"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter6.html",
    "revision": "c3994597242deec35b6922ef2f2ec86a"
  },
  {
    "url": "zh/the-stage-of-edge-ai/chapter7.html",
    "revision": "99410dc9454aad0a89a649a31cc90b44"
  },
  {
    "url": "zh/the-stage-of-edge-ai/index.html",
    "revision": "0243e05d474ddd34eb46af0be4f5ddee"
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

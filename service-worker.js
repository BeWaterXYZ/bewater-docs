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
    "revision": "ba49b08aba5516d3ae2267f3ac7f9d9b"
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
    "revision": "c894133b6e621c453ca0ccbb8d156199"
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
    "url": "assets/js/21.855cf10c.js",
    "revision": "4c53b11749b789124f8381acb1014825"
  },
  {
    "url": "assets/js/22.654a5ecd.js",
    "revision": "d1ba88339bf2fbda40cda45be8d75f52"
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
    "url": "assets/js/28.45980cca.js",
    "revision": "ebaaa099439c01902ace1060f3d1ea7f"
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
    "url": "assets/js/30.b46669b8.js",
    "revision": "0271b7e49bf88a02ae5275dff90eedf6"
  },
  {
    "url": "assets/js/31.cead1db0.js",
    "revision": "ae902b4b9e94651dcfa47baf57b65640"
  },
  {
    "url": "assets/js/32.473b0f92.js",
    "revision": "aa389dd7b68c93a1d2f5319bc23ce2ba"
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
    "url": "assets/js/35.a0384504.js",
    "revision": "27a2a92d32a05e05106fa00fdf884dac"
  },
  {
    "url": "assets/js/36.dbe8eeb7.js",
    "revision": "dad4fb70414938cc71f5f46e930d03b2"
  },
  {
    "url": "assets/js/37.c12d2f71.js",
    "revision": "05f8fbc3106edf4f787c0e00d8f8231c"
  },
  {
    "url": "assets/js/38.3db0daf3.js",
    "revision": "79cd6f9a87daa31847882aab108003c2"
  },
  {
    "url": "assets/js/39.ac1825ae.js",
    "revision": "97ab8120c6c6b15f37948337a4c3f9fe"
  },
  {
    "url": "assets/js/4.2ef1faa5.js",
    "revision": "1a40100f6520e0d2e2f2a25be1a8808d"
  },
  {
    "url": "assets/js/40.56e2fffe.js",
    "revision": "7486c9158b51b5ce4e239f558687d9b3"
  },
  {
    "url": "assets/js/41.fdf851b6.js",
    "revision": "c509b785905c5e9b4bed5877052a398a"
  },
  {
    "url": "assets/js/42.784c164a.js",
    "revision": "e9c551a556a7d5f423e239803d3bb053"
  },
  {
    "url": "assets/js/43.116d2d0d.js",
    "revision": "de46fecd13dffff8ba933a8665e3725f"
  },
  {
    "url": "assets/js/44.d5ec72a7.js",
    "revision": "fb6d5ba6f858166ee1fc4f127f657bc6"
  },
  {
    "url": "assets/js/45.acc4e56a.js",
    "revision": "c15e1002bb6abed2103b19563c199b6b"
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
    "url": "assets/js/app.3dc7c744.js",
    "revision": "a9c364b6b306dac3dc313be37effa589"
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
    "revision": "f1087b0d7966b5037d1d675845baf2cd"
  },
  {
    "url": "guide/index.html",
    "revision": "b24e9d72f60be5bfd2fc88d53c7dcca6"
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
    "revision": "f6a8f5017fa9eda50a3482eff7ba2d06"
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
    "revision": "4867211154a3e8d9d0983cab2f4d6af8"
  },
  {
    "url": "zh/aixcrypto/chapter2.html",
    "revision": "479ada3abd9fa18216b07ed8c6eeb3f3"
  },
  {
    "url": "zh/aixcrypto/chapter3.html",
    "revision": "d3ef64ced36462b37a104d3bb4edb775"
  },
  {
    "url": "zh/aixcrypto/chapter4.html",
    "revision": "ba437ce9c6108f8a8f77d819b90cc2e1"
  },
  {
    "url": "zh/aixcrypto/chapter5.html",
    "revision": "621829573ae8da27024fec991fe99c29"
  },
  {
    "url": "zh/aixcrypto/chapter6.html",
    "revision": "9e10f46a9e62d0c46966df814fe66be5"
  },
  {
    "url": "zh/aixcrypto/chapter7.html",
    "revision": "99543093e840fb0d8a8e4ccf7e371c6c"
  },
  {
    "url": "zh/aixcrypto/index.html",
    "revision": "4b0ccc8293e612ab75ac957e3208350f"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "299193bcee1e117a9205a3cf9be19f1f"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "3f0351f4b037ce7beade3e2d19574f1a"
  },
  {
    "url": "zh/index.html",
    "revision": "0ff94a4dc8d3a704fb5ef59d5450731f"
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
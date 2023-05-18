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
    "revision": "323a5722aae3e7e94ad2fd3e41497cdf"
  },
  {
    "url": "api/cli.html",
    "revision": "138a630ce8cc9cd30e25826bb56d6243"
  },
  {
    "url": "api/node.html",
    "revision": "42bb9795247b44e937ec4515badad102"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.93883742.css",
    "revision": "c777ce10a53c51bb8756bb1b9de5393b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.acf6dabb.js",
    "revision": "51ec42d627b99c9f956e4765f972a357"
  },
  {
    "url": "assets/js/100.8e617efc.js",
    "revision": "b373a08e973be8b8bee3b224ef45d990"
  },
  {
    "url": "assets/js/101.e230a5be.js",
    "revision": "2472d6bff1f72ed742d497034101ba45"
  },
  {
    "url": "assets/js/102.892fe721.js",
    "revision": "bba6cdfb27bacc9a53b218ef0da14899"
  },
  {
    "url": "assets/js/103.be930db8.js",
    "revision": "fc6b31164e0f11ce868313515711dcac"
  },
  {
    "url": "assets/js/104.4a81f743.js",
    "revision": "2a2ca7324264cabce40b8d341e4014b6"
  },
  {
    "url": "assets/js/105.424aaacc.js",
    "revision": "11dc026ec8a4a3faf9f426889ea5a751"
  },
  {
    "url": "assets/js/106.1978416e.js",
    "revision": "3f512e5b9be52b5079283e700065aa39"
  },
  {
    "url": "assets/js/107.4b87b5e0.js",
    "revision": "081169a54d46dc844ba857dfc7b6a4de"
  },
  {
    "url": "assets/js/108.1de58bea.js",
    "revision": "d2dfe63c4630aef23138f00a20e9c436"
  },
  {
    "url": "assets/js/109.60e958f2.js",
    "revision": "44438ede7c2c6074b9414386813e0f1f"
  },
  {
    "url": "assets/js/11.41efa7e5.js",
    "revision": "97665f27cad1ee46fc8e563274b11a5d"
  },
  {
    "url": "assets/js/12.97fc9c94.js",
    "revision": "5078a83fdbbf81a09b0ef2f18f6901e3"
  },
  {
    "url": "assets/js/13.9072f1ab.js",
    "revision": "bdbfe232343c971c2918c31c6bb16c0d"
  },
  {
    "url": "assets/js/14.d84b835f.js",
    "revision": "f1fee471f4af992c442d3beeebb90909"
  },
  {
    "url": "assets/js/15.f3dcd79e.js",
    "revision": "e0c9a70d7400a0794b321f6f6781472f"
  },
  {
    "url": "assets/js/16.b1ee0424.js",
    "revision": "5a7989c93cf968849fd6ecb9e4317ac4"
  },
  {
    "url": "assets/js/17.b5629770.js",
    "revision": "78260462071cc3e5685bfe8ddbf77877"
  },
  {
    "url": "assets/js/18.53f36a61.js",
    "revision": "fdb7c89f17e88fc5a9a589e450bea6c1"
  },
  {
    "url": "assets/js/19.8ff6299f.js",
    "revision": "239726f2a288eb44db983c9046ed1011"
  },
  {
    "url": "assets/js/20.4306003a.js",
    "revision": "5496240ad87539c9af872e6b7faeeb0b"
  },
  {
    "url": "assets/js/21.b1b24063.js",
    "revision": "d575855437cab2cbc09507ed51a02c45"
  },
  {
    "url": "assets/js/22.2c31c649.js",
    "revision": "d36e606ad52f841ecfbe1711cfdcd197"
  },
  {
    "url": "assets/js/23.4acd384c.js",
    "revision": "9b882dc789c8dbb95a286d94898f9d6e"
  },
  {
    "url": "assets/js/24.d58de7f6.js",
    "revision": "8a60d24d216f92d35b0eddd4fc17baaa"
  },
  {
    "url": "assets/js/25.e5fc64e6.js",
    "revision": "8f0054fafbe8666451cabfa556334a9c"
  },
  {
    "url": "assets/js/26.f7d96fc2.js",
    "revision": "2c99d2d3b6d2ea9042f72e30a3026c88"
  },
  {
    "url": "assets/js/27.c1214559.js",
    "revision": "98a1c2b3d058409b652629db706c3d31"
  },
  {
    "url": "assets/js/28.46ea13bc.js",
    "revision": "a55c9a707facbb130d296bc009837662"
  },
  {
    "url": "assets/js/29.74fb8e40.js",
    "revision": "b26cb651a89ee4e8c5cfb97731af3ad2"
  },
  {
    "url": "assets/js/30.a7fac625.js",
    "revision": "c24300b14119d96d8782a941f9068a86"
  },
  {
    "url": "assets/js/31.40908987.js",
    "revision": "73201cad422ccf5c299fa3fdc56ea785"
  },
  {
    "url": "assets/js/32.729eae48.js",
    "revision": "186b4e6e770ea636de1aa5612245c38b"
  },
  {
    "url": "assets/js/33.3aae2eb9.js",
    "revision": "4902a2febc8bab97f1ebad1e6418acd6"
  },
  {
    "url": "assets/js/34.15ce5d1d.js",
    "revision": "e7defb481da997b4de0a0a39f56d9e92"
  },
  {
    "url": "assets/js/35.94f907a2.js",
    "revision": "6759ba1acfe7944e89152dfd5dfc8bca"
  },
  {
    "url": "assets/js/36.802fc9a1.js",
    "revision": "4ed6abe93427754786311ba2634a3b2b"
  },
  {
    "url": "assets/js/37.d2a35352.js",
    "revision": "bff1e9d8724d3b551febed5ea53fae8a"
  },
  {
    "url": "assets/js/38.748adb9f.js",
    "revision": "eb5ec6bcdae0c6ccf1430366bc62e2f1"
  },
  {
    "url": "assets/js/39.05bcaba4.js",
    "revision": "2edc2370a13adef9a7b7fd704679b67d"
  },
  {
    "url": "assets/js/40.b9bfdc39.js",
    "revision": "a9a68e1462bd7ae14d22dbb6888844a5"
  },
  {
    "url": "assets/js/41.9b741abd.js",
    "revision": "d772b557c40a6ff8a7fdb7f5ad7b9712"
  },
  {
    "url": "assets/js/42.9c6b5616.js",
    "revision": "c9eb11202c640308161542fe3179dbbe"
  },
  {
    "url": "assets/js/43.cfbc9876.js",
    "revision": "0f41407aabf6bf2d19c9810e10b6d000"
  },
  {
    "url": "assets/js/44.ae2778f6.js",
    "revision": "61dc00eec19aa009382832f31c5bc671"
  },
  {
    "url": "assets/js/45.b52148df.js",
    "revision": "4d8eaa21c4bcb814275a75c84d303876"
  },
  {
    "url": "assets/js/46.12a45eea.js",
    "revision": "45b9482a3fb689620d1a27a4aef44434"
  },
  {
    "url": "assets/js/47.5c50a129.js",
    "revision": "c46e40d7f52cf62883a1987a3a14b8b8"
  },
  {
    "url": "assets/js/48.7151b8a6.js",
    "revision": "c5aea13c73027c1ad0020bb167d95075"
  },
  {
    "url": "assets/js/49.0405dc1f.js",
    "revision": "d9f136d4f7d0323e8e2e2346de75a15a"
  },
  {
    "url": "assets/js/5.9c1513fd.js",
    "revision": "5935920901e811d92afce34b4790c62f"
  },
  {
    "url": "assets/js/50.11261fe7.js",
    "revision": "1413456e2013b7325cc92bd6cd058ae7"
  },
  {
    "url": "assets/js/51.5caeff4e.js",
    "revision": "98d3c1ee60e160bab45c1194513c7835"
  },
  {
    "url": "assets/js/52.048a9476.js",
    "revision": "919753b7c3dec95fbf14194431eda149"
  },
  {
    "url": "assets/js/53.f94203b3.js",
    "revision": "e9373797da6f9de61b3f9b5c39d0cea6"
  },
  {
    "url": "assets/js/54.3d9d272b.js",
    "revision": "63fc1f1a2e471b619b3ec223d1017146"
  },
  {
    "url": "assets/js/55.b376a384.js",
    "revision": "2d8446f51a901424d368da8b34a55227"
  },
  {
    "url": "assets/js/56.d3519764.js",
    "revision": "1f3417fd871d842686d52ccde79a9ff2"
  },
  {
    "url": "assets/js/57.2319ee15.js",
    "revision": "ce2e02b0f1e00daca6a8fcd60fd99862"
  },
  {
    "url": "assets/js/58.7eb08ec1.js",
    "revision": "419d985c62c1a3f0ccff9ebbabbe5228"
  },
  {
    "url": "assets/js/59.ece84265.js",
    "revision": "5dc7d6fe4f593387516e706710609bec"
  },
  {
    "url": "assets/js/6.33e46146.js",
    "revision": "ece951023ac463c099f290c590309895"
  },
  {
    "url": "assets/js/60.5d524e2e.js",
    "revision": "e30b93c6e9c3e3bf4ad2fc451a98f152"
  },
  {
    "url": "assets/js/61.6b5f70c9.js",
    "revision": "d2ab9783541695c2393fa78ff9577257"
  },
  {
    "url": "assets/js/62.e0a5e7a6.js",
    "revision": "add8fdee8fdbfcc933a7b5d42f0e0c42"
  },
  {
    "url": "assets/js/63.11b72ffa.js",
    "revision": "255c6d9b13695376dd8ca179c47d120f"
  },
  {
    "url": "assets/js/64.6dfd4a8b.js",
    "revision": "88194e57223265fd8325423d6749f857"
  },
  {
    "url": "assets/js/65.7eeea0bb.js",
    "revision": "e034a3cb712a52c83db54741d91daead"
  },
  {
    "url": "assets/js/66.64fb634e.js",
    "revision": "e2feeb57104c9cac60d8e964c3f52a1a"
  },
  {
    "url": "assets/js/67.a0df6f5e.js",
    "revision": "f612438a8526935c16407df71fa82c3b"
  },
  {
    "url": "assets/js/68.9f61f990.js",
    "revision": "cc9352d8b8bd008ab1b4d86c5f668fba"
  },
  {
    "url": "assets/js/69.a471d235.js",
    "revision": "943f478acbb8a57edfa3283cc023bd53"
  },
  {
    "url": "assets/js/7.a181359b.js",
    "revision": "e744bb5847e56e02297c0fec49388a9a"
  },
  {
    "url": "assets/js/70.2f6b4d93.js",
    "revision": "d6343919156c415f01b12973ba185270"
  },
  {
    "url": "assets/js/71.d1e349e7.js",
    "revision": "2a8ff13867eeb1fe67f3d2a27b3c21dc"
  },
  {
    "url": "assets/js/72.20c3c993.js",
    "revision": "761945108942da7c9d83986d7940d3b4"
  },
  {
    "url": "assets/js/73.965b4ddb.js",
    "revision": "77c654675728397450ed40cd6732a0e5"
  },
  {
    "url": "assets/js/74.eb1ff6a4.js",
    "revision": "24e69120f2af0026f91cb5249447b311"
  },
  {
    "url": "assets/js/75.fd418983.js",
    "revision": "769dd2c2b6668bd0e156c663b757611d"
  },
  {
    "url": "assets/js/76.df820c42.js",
    "revision": "68ac137b32ba10ceb402f53b22d57e15"
  },
  {
    "url": "assets/js/77.7753391b.js",
    "revision": "52ecd27b2cc6d4d7c078ebc37968a0c0"
  },
  {
    "url": "assets/js/78.840c38a0.js",
    "revision": "942b7e4dbc512d60a2a61260c08a3a15"
  },
  {
    "url": "assets/js/79.17909113.js",
    "revision": "e01a503505efd82fb3aede84ecdb8e62"
  },
  {
    "url": "assets/js/8.7f57b14a.js",
    "revision": "568dfc35d493235f94edbdd0de15a643"
  },
  {
    "url": "assets/js/80.fe3679ff.js",
    "revision": "ede2053a4fddcc7ce82436aaba209a53"
  },
  {
    "url": "assets/js/81.28705d94.js",
    "revision": "f305770807bea9f34caacbff71a017ba"
  },
  {
    "url": "assets/js/82.c33b6a1e.js",
    "revision": "ecfc9944a859c52f7c8da2bce4bd65ca"
  },
  {
    "url": "assets/js/83.a7667c43.js",
    "revision": "8f90c6fc45a2e15133888f2245646aff"
  },
  {
    "url": "assets/js/84.5b081427.js",
    "revision": "74cc9a3d194a77ec184aa1b92b0aeb06"
  },
  {
    "url": "assets/js/85.d1d57ea5.js",
    "revision": "218fb0ce9e9deac9906f2f86e0f5e1d0"
  },
  {
    "url": "assets/js/86.09c15a6a.js",
    "revision": "557ca8adf23c664c48fe13afdaaa2a52"
  },
  {
    "url": "assets/js/87.efbaa558.js",
    "revision": "12a37e58d395380e8d97521203004473"
  },
  {
    "url": "assets/js/88.3b26889a.js",
    "revision": "7069fc15309ea8aba931776d8f37ee64"
  },
  {
    "url": "assets/js/89.8e171527.js",
    "revision": "55e983789d5d95f92fff793836d8b8d7"
  },
  {
    "url": "assets/js/9.7f061a98.js",
    "revision": "d1bb633eeb390025bb1cb3624c4ab66c"
  },
  {
    "url": "assets/js/90.29005871.js",
    "revision": "ab3c30b5db023fb2a97cefe70543328e"
  },
  {
    "url": "assets/js/91.25c71437.js",
    "revision": "bf4daa10b7b6bb4f5e358895bbc8bbaa"
  },
  {
    "url": "assets/js/92.e2cebe1c.js",
    "revision": "2a756aebaf75c7bdc1bbe5b28eedec0a"
  },
  {
    "url": "assets/js/93.6c81f82f.js",
    "revision": "f0b9a8cb1618ad3078d64f370c42284e"
  },
  {
    "url": "assets/js/94.2e57395d.js",
    "revision": "1b06e42e69df581f206e3c2368a5c395"
  },
  {
    "url": "assets/js/95.8db429e4.js",
    "revision": "18c2018fd942eecd20c7762dc7559e3f"
  },
  {
    "url": "assets/js/96.b1470b0e.js",
    "revision": "0828b10c2cd9cf75c45ac0fb9d7261db"
  },
  {
    "url": "assets/js/97.89ffbbba.js",
    "revision": "62e2e8113e37bc63b6a3483afa872625"
  },
  {
    "url": "assets/js/98.45570a16.js",
    "revision": "985f6e7074478cac0b55a0f76408510b"
  },
  {
    "url": "assets/js/99.41c5e840.js",
    "revision": "ca79861b34bc57ccdd73494f79a3cdaf"
  },
  {
    "url": "assets/js/app.8d7e495d.js",
    "revision": "2b09a238e18dc70f412873c5abca1599"
  },
  {
    "url": "assets/js/vendors~docsearch.41fff005.js",
    "revision": "f4aa634c17702558519d8f32aaaa4aea"
  },
  {
    "url": "assets/js/vendors~flowchart.338aebc6.js",
    "revision": "f9a471336f158c934ae7e8f31542ba12"
  },
  {
    "url": "assets/js/vendors~notification.96ceaf0b.js",
    "revision": "2a1dafa8cf23250745518b474a26a948"
  },
  {
    "url": "config/index.html",
    "revision": "dee9eeec11068009469efb55627d2805"
  },
  {
    "url": "faq/index.html",
    "revision": "f1b915cbabb3f2bcee298a94afdd2973"
  },
  {
    "url": "guide/assets.html",
    "revision": "c194f5aa3053259336bc7f8bd9ad7dce"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "dfb2ecf4d5cff8d6bc0ae6f17663c139"
  },
  {
    "url": "guide/deploy.html",
    "revision": "539a1e432991400c789577b2929a87c0"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "95fac3889023d88232ef60c4f7ead7d2"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "21142fdf1df71ce6bdd81312113a9e66"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f5b468b82238037a124196153b4d6c90"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "aa7b95fe7249e9dd02a67aef2e213635"
  },
  {
    "url": "guide/i18n.html",
    "revision": "ee43b35a6e09c8b5f053bc5e41ed0752"
  },
  {
    "url": "guide/index.html",
    "revision": "60c5d212544202b82f66889dd703b9fe"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "30018e8a3b580f32fdf275f68b076a3f"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ea763d9786dc23ac65b85d6061da52e1"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "d354225d29a1692aa5b46cb407234ed4"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "151e57fb2dde47dd7ef376a382cf7c65"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "36772e341373f61d4a110d3a547a6933"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "41c9dd14a1f078c0c6aafa56b549f33a"
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
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "360153482e718a56fb9dd123b6db6b21"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "02567b1e1c8c982ba454228b592e4094"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "b55b8a319a5b3a69c0951bdba8c3d0e9"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "88fbef9e14fcda07f1da170bf9c7c5ee"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "66de75394a5218bdd8fc147a32ae25cd"
  },
  {
    "url": "plugin/index.html",
    "revision": "130e148c0262145d071a058c2d56a620"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "b2f9f03becf7071a81365676d63cb022"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "bf31065f1e09ebbe55d5e98b912ac8f2"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "69ba626282e9b8347d2bd7c19f7de9fb"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "dee793f7cf52fafd45e8db18e6b46cea"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "8c0e5882014a1e4151eee07e9bd7a95e"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "dc75285a15fb666dd0365102782d0d6d"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "cdc261cfe4ca4b988aaabbdd68fe6cf9"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "d02893c176c517a959810fdb58e2259e"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "54d85dae8f5f92f9c3c0e3ff41f430fe"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c7d42ede22f6005d156caf60c56ff91d"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "80a9bf5e0ab7b9a9e8621a04379c56bb"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "b9b5bbec6ce4da1584f98bf791418bbf"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "68672cbd34f217c10dc8a736a2a2307c"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "a90bf2358c985b03275962057fcb9dc9"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "19748fbfbc6576b412cbf81a9d72005c"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "858510e7a44f1d75db3ab45f9b21cd46"
  },
  {
    "url": "theme/index.html",
    "revision": "d017da9edd3a4ce91cdb3bfd63d64c6a"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "5fe8abbdaf66a7de69a9610bf2fc13ac"
  },
  {
    "url": "theme/option-api.html",
    "revision": "1db1c251a483e2f6c97f83e60585d4b1"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "9158f7846a9b3a2cac0a4ebfc278f7eb"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "6aeda39d3013155f7ce9c3c9d2cf2055"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "a5070f1f0d332a2f18103c23458221bb"
  },
  {
    "url": "zh/api/node.html",
    "revision": "3cfe72b8a19b43520c3f06e615a0a384"
  },
  {
    "url": "zh/config/index.html",
    "revision": "1650a29c5ea0f314c8362fac4df76eab"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "7375947dcab851c92ebd591e0463280e"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "04553d2e59eafdeea2d589faea52fae1"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "8f3b897d8ae064c467e6251d6a0a78cf"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "262d419a180c4d44c9955e738ad6346c"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "89140b7dfecec8d4c81b330dbe9d09aa"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "920d768d406fae5dce63d9d31bfbdbee"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "b804b8eb8559bda5562fb4711753de9d"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "58c0627d90a48b7e0d6ba30d26a3f019"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "1b58cf30ed1da8621357f63a161f8af9"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e723f77147bb22d0013791acf4df2677"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "3768f470c40f62b5679f79378ae6404c"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "31ba0b2b7cc7a89b02855e06126e90de"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "0b4ba0a62618f9d2d08ddab82b28949f"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "15d39d0531852e17dea1aed5a038f400"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "22b9a7bae8d9ce231d927788c84823d1"
  },
  {
    "url": "zh/index.html",
    "revision": "a2f3f4f55514387c8f914939b47d821e"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "29520e2b2b17a18a600eeba485318c45"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "45ca22e3d8b14e6e8d327c4fe757f9e8"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "32e634961bbca59aa9f206f83fa28044"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "3dff4d084adc70160c238a533f520541"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "cc1d188f9bed8efe1dfe7e0e78fee25f"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "e718e7e53a8c0ebae8ef935b38dfe2b1"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "80be2517c933fa5b4b571955ef9a3c98"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "2564876798fa2f4723533bb4d85da134"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "69395ac84f06b985edca3bc074818490"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "434202517e45918431a3a6ee1be916e0"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "6b47daff52ee85b2e055c1dc3e016ded"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "519d92682d3493728578f15c760f02f3"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "1d3edfb0221d9154c841d374c42b6f9d"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "85f32c9c1440651dc96625406722a1f1"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "1b3717eec3a12eed767d49f2c0749a7d"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "099031f62725ec1a319362881c62f73a"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "ee6f97f8eeb078fb7054691daa1ad53b"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "9c811496ff9e7ea081c0067223a2cca3"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "21d26de2e9a4f69f01fc423a97eb3cee"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "87a870715e8b839d60a33e42e1efc8b7"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "503515da2ec7bf74958104e37aaac0c5"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "92640b9077e50ef949b8f9d2368f4fc7"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "c495c332c58a395d144b06dbcf80fa3b"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "397e725a3bd1f2ad505400ed78c7efa8"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "698470f30569df433763e95f769c5586"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "aa28b1b74d55cc5ceeab215576c659dd"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "af7383f68b461b0d9b4cd5bf0ecd59ce"
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

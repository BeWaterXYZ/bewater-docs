import { defineConfig } from 'vuepress/config'
import {
  Sidebar4EN,
  Sidebar4ZH,
  NavItems4EN,
  NavItems4ZH
} from './config/index'

export default defineConfig(ctx => ({
  theme: '@vuepress/default',
  dest: './docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: `BeWater Docs`,
      description: 'A SOP framework for our business clients to host professional online and offline challenges to build their ecosystem.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'BeWater 文档',
      description: 'Web3 创新平台'
    }
  },
  themeConfig: {
    logo: '/logo.png',
    // repo: 'BeWaterXYZ/bewater-docs',
    docsDir: 'bewater-docs/docs/docs',
    editLinks: false,
    lastUpdated: false,
    algolia: null,
    smoothScroll: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        nav: NavItems4EN,
        sidebar: Sidebar4EN
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        nav: NavItems4ZH,
        sidebar: Sidebar4ZH
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ['@vuepress/medium-zoom', true],
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     ga: 'UA-128189152-1'
    //   }
    // ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'G-Y289NM5K6X',
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
      }
    ],
    ['vuepress-plugin-flowchart'],
  ],
  extraWatchFiles: ['.vuepress/config/**'],
  evergreen: false
}))

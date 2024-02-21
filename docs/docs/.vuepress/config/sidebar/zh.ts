import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar,
  getAIxCryptoSidebar,
  // getApiSidebar,
  // getPluginSidebar,
  // getThemeSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/zh/guide/': getGuideSidebar('使用指南', '深入'),
  '/zh/aixcrypto/': getAIxCryptoSidebar('AI x Crypto 报告'),
}

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
  '/zh/aixcrypto/': getAIxCryptoSidebar(
                      '1. 导言',
                      '2. 人工智能 x 密码的核心框架',
                      '3. 大创意',
                      '4. 建设者的机遇',
                      'A.	附录：机器学习如何工作？',
                      'B.	附录：ML 面临的挑战',
                      'C.	附录：展望'
                    ),
}

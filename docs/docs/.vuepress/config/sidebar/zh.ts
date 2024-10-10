import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar,
  getAIxCryptoSidebar,
  getTheStageOfEdgeAISidebar,
  // getApiSidebar,
  // getPluginSidebar,
  // getThemeSidebar
} from './shared'

export const Sidebar4ZH: SidebarConfig4Multiple = {
  '/zh/guide/': getGuideSidebar('使用指南', '深入'),
  '/zh/aixcrypto/': getAIxCryptoSidebar('AI x Crypto 报告'),
  '/zh/the-stage-of-edge-ai/': getTheStageOfEdgeAISidebar('边缘 AI 研究'),
}

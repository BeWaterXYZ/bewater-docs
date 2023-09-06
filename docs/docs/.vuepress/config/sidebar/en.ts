import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getGuideSidebar,
  // getApiSidebar,
  // getPluginSidebar,
  // getThemeSidebar
} from './shared'

export const Sidebar4EN: SidebarConfig4Multiple = {
  '/guide/': getGuideSidebar('BeWater Guide', 'Advanced'),
}

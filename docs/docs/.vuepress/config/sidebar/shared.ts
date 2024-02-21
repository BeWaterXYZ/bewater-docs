import fs from 'fs'
import path from 'path'
import { SidebarConfigArray } from 'vuepress/config'

var officialPlugins = []

// officialPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../../../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

export function getPluginSidebar (
  pluginTitle: string,
  pluginIntro: string,
  officialPluginTitle: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api'
      ]
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officialPlugins
    }
  ]
  return sidebar
}

export function getThemeSidebar (
  groupA: string,
  introductionA: string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introductionA],
        'using-a-theme',
        'writing-a-theme',
        'option-api',
        'default-theme-config',
        'blog-theme',
        'inheritance'
      ]
    }
  ]
  return sidebar
}

export function getApiSidebar (): SidebarConfigArray {
  return ['cli', 'node']
}

export function getGuideSidebar (groupA, groupB): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        // 'getting-started',
        // 'directory-structure',
        // 'basic-config',
        // 'typescript-as-config',
        // 'assets',
        // 'markdown',
        // 'using-vue',
        // 'i18n',
        // 'deploy'
      ]
    },
    // {
    //   title: groupB,
    //   collapsable: false,
    //   children: [
    //     'frontmatter',
    //     'permalinks',
    //     'markdown-slot',
    //     'global-computed'
    //   ]
    // }
  ]

  return sidebar
}

export function getAIxCryptoSidebar(a): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: a,
      collapsable: false,
      children: [
        '',
        'chapter1',
        'chapter2',
        'chapter3',
        'chapter4',
        'chapter5',
        'chapter6',
      ]
    },
    // {
    //   title: b,
    //   collapsable: true,
    //   children: [
    //     'chapter1',
    //   ]
    // },
    // {
    //   title: c,
    //   collapsable: true,
    //   children: [
    //     'chapter2',
    //   ]
    // },
    // {
    //   title: d,
    //   collapsable: true,
    //   children: [
    //     'chapter3',
    //   ]
    // },
    // {
    //   title: e,
    //   collapsable: true,
    //   children: [
    //     'chapter4',
    //   ]
    // },
    // {
    //   title: f,
    //   collapsable: true,
    //   children: [
    //     'chapter5',
    //   ]
    // },
    // {
    //   title: g,
    //   collapsable: true,
    //   children: [
    //     'chapter6',
    //   ]
    // },
  ]
  return sidebar
}

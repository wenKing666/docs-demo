import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WT的个人博客",
  description: "永远相信美好的事情即将发生",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/docs-demo/favicon.ico",
    outlineTitle: "目录",
    head: [["link", { rel: "icon", href: "favicon.ico" }]],
    nav: [
      { text: '主页', link: '/' },
      { text: '个人介绍', link: '/个人介绍' },
      { text: '前端学习', items:[
      { text: '菜鸟教程', link: 'https://www.runoob.com/' },
      ]}
    ],

    sidebar: [
      {
        text: '关于本人',
        items: [
          { text: '个人介绍', link: '/个人介绍' },
        ]
      },
      {
        text: '随笔',
        items: [
          { text: '小记', link: '/小记' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wenKing666' }
    ],
    footer:{
      copyright:"Copyright@ 2025 WenTao"
    },
    search:{
      provider:"local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清楚查询条件",
            footer: {
              selectText: "xu"
            }
          }
        }
      }
    }
  }
})

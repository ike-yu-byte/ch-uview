// import { defineConfig } from "vitepress";

// // https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "uview plus文档",
//   description: "A VitePress Site",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: "Home", link: "/" },
//       { text: "Examples", link: "/markdown-examples" },
//     ],

//     sidebar: [
//       {
//         text: "Examples",
//         items: [
//           { text: "Markdown Examples", link: "/markdown-examples" },
//           { text: "Runtime API Examples", link: "/api-examples" },
//         ],
//       },
//     ],

//     socialLinks: [
//       { icon: "github", link: "https://github.com/vuejs/vitepress" },
//     ],
//   },
// });

import { defineConfig } from "vitepress";

export default defineConfig({
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "uview plus 文档",
      description: "uview plus 跨端组件库文档",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "指南", link: "/zh/guide" },
          { text: "组件", link: "/zh/components" },
        ],
        sidebar: [
          {
            text: "基础教程",
            collapsed: false,
            items: [
              { text: "快速开始", link: "/zh/guide" },
              { text: "安装配置", link: "/zh/installation" },
            ],
          },
          {
            text: "组件",
            items: [
              { text: "Button 按钮", link: "/zh/components/button" },
              { text: "Input 输入框", link: "/zh/components/input" },
            ],
          },
        ],
        footer: {
          message: "根据MIT许可证发布。",
          copyright: "Copyright © 2025-present CH",
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "uview plus Docs",
      description: "Documentation for uview plus component library",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/guide" },
          { text: "Components", link: "/en/components" },
        ],
        sidebar: [
          {
            text: "Basic Tutorial",
            collapsed: false,
            items: [
              { text: "Quick Start", link: "/en/guide" },
              { text: "Installation", link: "/en/installation" },
            ],
          },
          {
            text: "Components",
            items: [
              { text: "Button", link: "/en/components/button" },
              { text: "Input", link: "/en/components/input" },
            ],
          },
        ],
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2019-present CH",
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      // 社交链接
      { icon: "github", link: "https://github.com/ike-yu-byte/ch-uview" },
    ],
    // 可全局共享的配置
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: "Search for Documents",
                buttonAriaLabel: "Search for Documents",
              },
              modal: {
                noResultsText: "Unable to find relevant results",
                resetButtonTitle: "Clear query criteria",
                footer: {
                  selectText: "select",
                  navigateText: "switch",
                },
              },
            },
          },
        },
      },
    },
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]], // 配置favicon
  // 其他全局配置
  lastUpdated: true,
  appearance: "dark", // 默认主题
});

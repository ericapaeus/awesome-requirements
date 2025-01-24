import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "Awesome Requirements",
    description: "Requirements Docs Website",
    markdown: {
      config: (md) => {
        // 配置 markdown-it 插件
      }
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '项目概述', link: '/docs/overview/background', activeMatch: '^/docs/overview/' },
        { text: '业务需求', link: '/docs/requirements/user-roles', activeMatch: '^/docs/requirements/' },
        { text: '技术规格', link: '/docs/specifications/interfaces', activeMatch: '^/docs/specifications/' },
        { text: '附录', link: '/docs/appendix/reports', activeMatch: '^/docs/appendix/' },
        { text: 'Prompt', link: '/prompts/logs', activeMatch: '^/prompts/' }
      ],

      sidebar: {
        '/docs/overview/': [
          {
            text: '项目概述',
            items: [
              { text: '项目背景', link: '/docs/overview/background' },
              { text: '项目目标', link: '/docs/overview/target' },
              { text: '建设内容', link: '/docs/overview/content' },
              { text: '系统现状', link: '/docs/overview/current-system' }
            ]
          }
        ],
        '/docs/requirements/': [
          {
            text: '总体需求',
            items: [
              { text: '用户角色', link: '/docs/requirements/user-roles' },
              { text: '功能架构', link: '/docs/requirements/architecture' },
              { text: '业务流程', link: '/docs/requirements/business-process' },
              { text: '界面设计', link: '/docs/requirements/ui-design' },
              { text: '运行环境', link: '/docs/requirements/environment' }
            ]
          },
          {
            text: '功能需求',
            items: [
              { text: '系统首页', link: '/docs/requirements/main-page' }
            ]
          },
          {
            text: '非功能需求',
            items: [
              { text: '性能需求', link: '/docs/requirements/performance' },
              { text: '安全需求', link: '/docs/requirements/security' },
              { text: '兼容性需求', link: '/docs/requirements/compatibility' },
              { text: '可靠性需求', link: '/docs/requirements/reliability' },
              { text: '故障处理需求', link: '/docs/requirements/fault-handling' }
            ]
          }
        ],
        '/docs/specifications/': [
          {
            text: '技术规格',
            items: [
              { text: '接口设计', link: '/docs/specifications/interfaces' },
              { text: '数据库设计', link: '/docs/specifications/database' },
              { text: '原型设计', link: '/docs/specifications/prototype' }
            ]
          }
        ],
        '/docs/appendix/': [
          {
            text: '附录',
            items: [
              { text: '报表清单', link: '/docs/appendix/reports' },
              { text: '项目过程资料', link: '/docs/appendix/process' }
            ]
          }
        ],
        '/prompts/': [
          {
            text: 'Prompt',
            items: [
              { text: '对话记录', link: '/prompts/logs' }
            ]
          }
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  })
)

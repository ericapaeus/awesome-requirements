import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "安徽省病虫疫情信息调度指挥平台（二期）软件系统",
    description: "打造具有本省特色、与国家系统对接共享的省级植保调度指挥平台",
    markdown: {
      config: (md) => {
        // 配置 markdown-it 插件
      }
    },
    vite: {
      build: {
        rollupOptions: {
          external: ['vitepress-export-pdf']
        }
      },
      optimizeDeps: {
        exclude: ['vitepress-export-pdf']
      }
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '项目概述', link: '/docs/overview/background', activeMatch: '^/docs/overview/' },
        { text: '业务需求', link: '/docs/requirements/main-page', activeMatch: '^/docs/requirements/' },
        { text: '技术规格', link: '/docs/specifications/interfaces', activeMatch: '^/docs/specifications/' },
        { text: '附录', link: '/docs/appendix/reports', activeMatch: '^/docs/appendix/' },
        { text: '关于', link: '/prompts/readme', activeMatch: '^/prompts/' }
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
          },
          {
            text: '总体需求',
            items: [
              { text: '用户角色', link: '/docs/overview/user-roles' },
              { text: '功能架构', link: '/docs/overview/architecture' },
              { text: '业务流程', link: '/docs/overview/business-process' },
              { text: '界面设计', link: '/docs/overview/ui-design' },
              { text: '运行环境', link: '/docs/overview/environment' }
            ]
          }
        ],
        '/docs/requirements/': [
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
            text: '关于',
            items: [
              { text: '项目说明', link: '/prompts/readme' },
              { text: '第1步 准备工作', link: '/prompts/step1-get-ready' },
              { text: '第2步 项目概述', link: '/prompts/step2-overview' },
              { text: 'charts demo', link: '/docs/charts/demo' }
            ]
          }
        ],
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],

      footer: {
        message: 'PGG2 From Jinhetech.',
        copyright: `Copyright © ${new Date().getFullYear()} 金禾天成`
      }
    },
  })
)


import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: "安徽省病虫疫情信息调度指挥平台（二期）软件系统",
    description: "打造具有本省特色、与国家系统对接共享的省级植保调度指挥平台",
    ignoreDeadLinks: true,  // 禁用死链接检查
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
      },
      ssr: {
        noExternal: ['vue-echarts', 'resize-detector', 'echarts']
      },
      server: {
        fs: {
          allow: ['..']
        }
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../', import.meta.url))
        }
      }
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
        { text: '项目概述', link: '/docs/overview/background' },
        { text: '业务需求', link: '/docs/requirements/index' },
        { text: '场景故事', link: '/docs/scenarios/index' },
        { text: '测试用例', link: '/docs/test-cases/index' },
        { text: '数据与代码', link: '/docs/database-code/index' },
        { text: '集成与测试', link: '/docs/integration/index' },
        { text: '技术规格', link: '/docs/specifications/interfaces' },
        { text: '附录', link: '/docs/appendix/reports', activeMatch: '^/docs/appendix/' },
        { text: '关于', link: '/docs/about/readme', activeMatch: '^/docs/about/' }
      ],

      sidebar: {
        '/docs/overview/': [
          {
            text: '项目概述',
            items: [
              { text: '项目背景', link: '/docs/overview/background' },
              { text: '项目目标', link: '/docs/overview/target' },
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
              { text: '功能概述', link: '/docs/requirements/index' },
              { text: '1. 工作平台', link: '/docs/requirements/1-work-platform' },
              { text: '2. 物联网数据管理', link: '/docs/requirements/2-iot-management' },
              { text: '3. 病虫预警分析', link: '/docs/requirements/3-pest-warning' },
              { text: '4. 国家系统对接', link: '/docs/requirements/4-national-system' },
              { text: '5. 防治监管', link: '/docs/requirements/5-prevention-supervision' },
              { text: '6. 业务应用', link: '/docs/requirements/6-business-application' },
              { text: '7. 病虫害知识库', link: '/docs/requirements/7-pest-knowledge-base' },
              { text: '8. 指挥调度一张图', link: '/docs/requirements/8-command-map' }
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
        '/docs/about/': [
          {
            text: '关于',
            items: [
              { text: '写在前面的话', link: '/docs/about/readme' },
              { text: '第1步 准备工作', link: '/docs/about/step1-get-ready' },
              { text: '第2步 项目概述', link: '/docs/about/step2-overview' },
              { text: '第3步 业务需求', link: '/docs/about/step3-requirements' },
              { text: '第4步 场景与故事', link: '/docs/about/step4-scenarios' },
              { text: '第5步 测试用例与数据', link: '/docs/about/step5-test-cases' },
              { text: '第6步 数据库设计与代码', link: '/docs/about/step6-database-code' },
              { text: '第7步 集成与测试', link: '/docs/about/step7-integration' },
              { text: 'charts demo', link: '/docs/charts/demo' }
            ]
          }
        ],
        '/docs/scenarios/': [
          {
            text: '场景故事',
            items: [
              { text: '概述', link: '/docs/scenarios/index' },
              { text: '用户故事地图', link: '/docs/scenarios/story-map' },
              { text: '需求转用户故事', link: '/docs/scenarios/requirements-to-stories' },
              { text: '用户故事转场景', link: '/docs/scenarios/stories-to-scenarios' },
              { text: '场景展示', link: '/docs/scenarios/presentation' }
            ]
          },
          {
            text: '功能需求',
            items: [
              { text: '1. 工作平台', link: '/docs/scenarios/requirements/1-work-platform' },
              { text: '2. 物联网数据管理', link: '/docs/scenarios/requirements/2-iot-management' },
              { text: '3. 病虫预警分析', link: '/docs/scenarios/requirements/3-pest-warning' },
              { text: '4. 国家系统对接', link: '/docs/scenarios/requirements/4-national-system' },
              { text: '5. 防治监管', link: '/docs/scenarios/requirements/5-prevention-supervision' },
              { text: '6. 业务应用', link: '/docs/scenarios/requirements/6-business-application' },
              { text: '7. 病虫害知识库', link: '/docs/scenarios/requirements/7-pest-knowledge-base' },
              { text: '8. 指挥调度一张图', link: '/docs/scenarios/requirements/8-command-map' }
            ]
          }
        ],
        '/docs/test-cases/': [
          {
            text: '测试概述',
            items: [
              { text: '测试说明', link: '/docs/test-cases/index' }
            ]
          },
          {
            text: '功能模块测试',
            items: [
              { text: '1. 工作平台', link: '/docs/test-cases/1-work-platform' },
              { text: '2. 物联网数据管理', link: '/docs/test-cases/2-iot-management' },
              { text: '3. 病虫预警分析', link: '/docs/test-cases/3-pest-warning' },
              { text: '4. 国家系统对接', link: '/docs/test-cases/4-national-system' },
              { text: '5. 防治监管', link: '/docs/test-cases/5-prevention-control' },
              { text: '6. 业务应用', link: '/docs/test-cases/6-business-application' },
              { text: '7. 病虫害知识库', link: '/docs/test-cases/7-pest-knowledge' },
              { text: '8. 指挥调度一张图', link: '/docs/test-cases/8-command-map' }
            ]
          },
          {
            text: '测试类型',
            items: [
              { text: '功能测试', link: '/docs/test-cases/functional-test' },
              { text: '性能测试', link: '/docs/test-cases/performance-test' },
              { text: '接口测试', link: '/docs/test-cases/interface-test' },
              { text: '安全测试', link: '/docs/test-cases/security-test' }
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


import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome Requirements",
  description: "Requirements Docs Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Examples', link: '/docs/examples/markdown-examples' },
      { text: 'Prompt', link: '/prompts/logs' }
    ],

    sidebar: {
      '/docs/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/docs/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/docs/examples/api-examples' }
          ]
        }
      ],
      '/prompts/': [
        {
          text: 'Prompt',
          items: [
            { text: 'Prompt Examples', link: '/prompts/logs' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

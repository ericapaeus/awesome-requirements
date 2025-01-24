// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ECharts from '../components/ECharts.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      import('mermaid').then(m => {
        m.default.initialize({ startOnLoad: true })
      })
    }
    app.component('ECharts', ECharts)
  }
} as Theme

import { defineConfig } from 'vitepress'
import { sidebarData } from '../dist/js/sidebar-collapsed.mjs'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passeli Merit API",
  description: "Documentation for Passeli Merit API",
  lastUpdated: true,
  head: [
    //['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/dist/images/favicon.png" }],
  ],
  themeConfig: {
    outline: 'deep',
    logo: '/dist/images/favicon.png',
    // outline: false, // disables the 'on this page' text.
    // aside: false, // disables the 'on this page' area.
    editLink: {
      pattern: 'https://github.com/fidesosu/passelimerit-docs/tree/main/:path'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            
          }
        }
      }
    }, 
    nav: [
      {
        text: 'Passeli Merit',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Merit API', link: '/aktiva-merit-api' },
        ]
      }
    ],
    sidebar: sidebarData,
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fi: {
      label: 'Finnish',
      lang: 'fi', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fi/' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  }
})
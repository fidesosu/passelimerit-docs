import { defineConfig } from 'vitepress'
import { sidebarData } from '../dist/js/sidebar-collapsed.mjs'
import footnote from 'markdown-it-footnote'

import MarkdownIt from "markdown-it";
import { tab } from "@mdit/plugin-tab";

const mdIt = MarkdownIt().use(tab, {
  // your options, name is required
  name: "tabs",
});

mdIt.render("content");

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passeli Merit API",
  description: "Documentation for Passeli Merit API",
  lastUpdated: true,
  head: [
    //['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/dist/images/favicon.png" }],
  ],
  themeConfig: {
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
      provider: 'local'
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
  }
})
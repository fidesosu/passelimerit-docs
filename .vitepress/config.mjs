import { defineConfig } from 'vitepress'
import { sidebarData } from '../dist/js/sidebar-collapsed.mjs'
//import { generateSidebar } from 'vitepress-sidebar';

//const vitepressSidebarOptions = {
//  includeFolderIndexFile: true,
//  documentRootPath: '/parts',
//};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passeli Merit API",
  description: "Documentation for Passeli Merit API",
  lastUpdated: true,
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/dist/images/favicon.png" }],
  ],
  themeConfig: {
    logo: '/dist/images/favicon.png',
    // outline: false, // disables the 'on this page' text.
    // aside: false, // disables the 'on this page' area.
    // https://vitepress.dev/reference/default-theme-config
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
    // sidebar: generateSidebar(vitepressSidebarOptions) // Delete if not needed
    sidebar: sidebarData,
  }
})
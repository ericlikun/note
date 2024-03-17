// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const DOMAIN_NAME = 'note.likun.cc';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: DOMAIN_NAME,
  tagline: 'by ElwynLi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://' + DOMAIN_NAME,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ElwynLi', // Usually your GitHub org/user name.
  projectName: 'note', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
	defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {

          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: '最近发布'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/website-social-card.jpg',
      navbar: {
        title: '学习知识笔记',
        logo: {
          alt: 'Website Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
	          to: '/blog',
	          label: '博客',
	          position: 'left'},
          {
            href: 'https://github.com/elwynli/note',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '进入',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} ${DOMAIN_NAME} <br>
        	<p style="font-size: 9px;">
        	</p>
        `,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['autohotkey', 'autoit', 'php', 'vim', 'lisp', 'python'],
      },
    }),
};

export default config;

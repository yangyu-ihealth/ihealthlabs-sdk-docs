/* eslint-disable */
const {
  tailwindPlugin,
  webpackPlugin,
  posthogPlugin,
} = require('./src/plugins');

const isDev = process.env.NODE_ENV === 'development';

const pageOptions = {
  sidebarCollapsible: false,
  editUrl: 'https://github.com/dyte-in/docs/tree/main',
  showLastUpdateAuthor: false,
  showLastUpdateTime: false,
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'iHealth SDK Docs',
  tagline: 'Real-time audio & video SDKs, ready to launch 🚀',
  url: 'https://docs.dyte.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'iHealthlabs', 
  projectName: 'docs',
  clientModules: [require.resolve('./src/css/tailwind.css')],
  themeConfig: {
    image: '/logo.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Dyte Docs',
        src: '/logo.svg',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: '(^/docs)',
        },
        {
          label: 'API Reference',
          to: '/android/quickstart',
        },
        {
          label: 'Guides',
          to: '/guides/subscribing-to-server-events',
        },
      ],
    },
    hideableSidebar: true,
    prism: {
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: process.env.ALGOLIA_API_KEY && {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'prod_docs',
      contextualSearch: true,
      appId: process.env.ALGOLIA_APP_ID,
      searchParameters: {},
    },
    posthog: {
      apiKey: process.env.POSTHOG_API_KEY,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs/main',
          id: 'default',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars-docs.js'),
          sidebarCollapsible: false,
        },
        blog: false,
      },
    ],
  ],
  plugins: [
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    ['@cmfcmf/docusaurus-search-local',
      ({
        indexDocs: true,
        docsRouteBasePath: '/docs',
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        blogRouteBasePath: '/blog',
        indexPages: false,
        language: "en",
        style: undefined,
        lunr: {
          tokenizerSeparator: /[\s\-]+/
        }
      })
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/react-native',
        routeBasePath: 'react-native',
        id: 'react-native',
        sidebarPath: require.resolve('./sidebars/sidebars-react-native.js'),
        onlyIncludeVersions: !isDev
          ? require('./react-native_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/android',
        routeBasePath: 'android',
        id: 'android',
        sidebarPath: require.resolve('./sidebars/sidebars-android.js'),
        onlyIncludeVersions: !isDev
          ? require('./android_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/ios',
        routeBasePath: 'ios',
        id: 'ios',
        sidebarPath: require.resolve('./sidebars/sidebars-ios.js'),
        onlyIncludeVersions: !isDev
          ? require('./ios_versions.json')
          : undefined,
        ...pageOptions,
      },
    ],
  ],
};
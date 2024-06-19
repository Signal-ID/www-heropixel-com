/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const users = require('./showcase.json');
const versions = require('./versions.json');

const lastVersion = versions[0];
const copyright = `Copyright © ${new Date().getFullYear()} Signal ID, LLC.`;

const commonDocsOptions = {
  breadcrumbs: false,
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  editUrl:
    'https://github.com/facebook/react-native-website/blob/main/website/',
  remarkPlugins: [require('@react-native-website/remark-snackplayer')],
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hero Pixel by Signal ID',
  tagline: 'Our most advanced remarketing pixel to date.',
  organizationName: 'Signal ID',
  projectName: 'hero-pixel',
  url: 'https://heropixel.com',
  baseUrl: '/',
  clientModules: [
    require.resolve('./modules/snackPlayerInitializer.js'),
    require.resolve('./modules/jumpToFragment.js'),
  ],
  trailingSlash: false, // because trailing slashes can break some existing relative links
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {src: 'https://snack.expo.dev/embed.js', defer: true},
    {src: 'https://platform.twitter.com/widgets.js', async: true},
  ],
  favicon: 'img/heropixel/hero-pixel-icon.png',
  titleDelimiter: '·',
  customFields: {
    users,
    // facebookAppId: '123',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'ignore', //'throw',
  webpack: {
    jsLoader: isServer => ({
      loader: require.resolve('esbuild-loader'),
      options: {
        loader: 'tsx',
        format: isServer ? 'cjs' : undefined,
        target: isServer ? 'node12' : 'es2017',
      },
    }),
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editCurrentVersion: true,
          onlyIncludeVersions: isDeployPreview
            ? ['current', ...versions.slice(0, 2)]
            : undefined,
          versions: {
            [lastVersion]: {
              badge: false, // Do not show version badge for last RN version
            },
          },
          ...commonDocsOptions,
        },
        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
          feedOptions: {
            type: 'all',
            copyright,
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/_shared.scss'),
            require.resolve('./src/css/styles.hasura.css'),
            require.resolve('./src/css/heropixel-custom.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
        // TODO: GA is deprecated, remove once we're sure data is streaming in GA4 via gtag.
        // googleAnalytics: {
        //   trackingID: '123',
        // },
        // gtag: {
        //   trackingID: '123',
        // },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    // [
    //   'content-docs',
    //   /** @type {import('@docusaurus/plugin-content-docs').Options} */
    //   ({
    //     id: 'architecture',
    //     path: 'architecture',
    //     routeBasePath: '/architecture',
    //     sidebarPath: require.resolve('./sidebarsArchitecture.json'),
    //     ...commonDocsOptions,
    //   }),
    // ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#20232a',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#20232a',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/pwa/manifest-icon-512.png',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/pwa/manifest-icon-512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#20232a',
          },
        ],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_ukraine',
      //   content:
      //     '',
      //   backgroundColor: '#20232a',
      //   textColor: '#fff',
      //   isCloseable: false,
      // },
      prism: {
        defaultLanguage: 'jsx',
        theme: require('./core/PrismTheme'),
        additionalLanguages: [
          'diff',
          'bash',
          'json',
          'java',
          'kotlin',
          'objectivec',
          'swift',
          'groovy',
          'ruby',
          'flow',
        ],
      },
      navbar: {
        logo: {
          src: 'img/heropixel/hero-pixel-logo.png',
          alt: 'Hero Pixel',
          href: 'https://heropixel.com/home',
        },
        style: 'primary',
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: '/versions',
                label: 'All versions',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'intro-to-pixel-tech',
            label: 'How it Works',
            position: 'right',
          },
          {
            label: 'Guides & Docs',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                label: 'Documentation',
                type: 'doc',
                docId: 'start-registration',
              },
              {
                label: 'Integrations',
                type: 'doc',
                docId: 'intro-to-integrations',
              },
              {
                label: 'GraphQL APIs',
                type: 'doc',
                docId: 'intro-to-graphql',
              },
              {
                label: 'REST APIs',
                type: 'doc',
                docId: 'intro-to-rest',
              },
            ],
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/facebook/react-native',
          //   'aria-label': 'GitHub repository',
          //   position: 'right',
          //   className: 'navbar-github-link',
          // },
        ],
      },
      image: 'img/logo-og.png',
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/start-registration',
              },
              {
                label: 'Integrations',
                to: 'docs/intro-to-integrations',
              },
              {
                label: 'GraphQL APIs',
                to: 'docs/intro-to-graphql',
              },
              {
                label: 'REST APIs',
                to: 'docs/intro-to-rest',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Sales',
                to: 'showcase',
              },
              {
                label: 'Support',
                href: 'https://app.heropixel.com/support-tickets/',
              },
            ],
          },
          {
            title: 'Find us',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Signal-ID/www-heropixel-com/discussions',
              },
            ],
          },
          {
            title: 'Corporate',
            items: [
              {
                label: 'Privacy Policy',
                href: '/privacy-policy',
              },
              {
                label: 'Terms and Conditions',
                href: '/terms-and-conditions',
              },
            ],
          },
        ],
        logo: {
          alt: 'Hero Pixel Logo',
          src: 'img/heropixel/hero-pixel-logo.png',
          href: 'https://heropixel.com/home',
        },
        copyright,
      },
      algolia: {
        appId: 'OXSIEUMH6D',
        apiKey: '0be456a6896a69b14b8b9dd1e33347d7',
        indexName: 'react-native-v2',
        contextualSearch: true,
      },
      metadata: [
        {
          property: 'og:image',
          content: 'https://heropixel.com/img/heropixel/hero-pixel-icon.png',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content: 'https://heropixel.com/img/heropixel/hero-pixel-icon.png',
        },
        {name: 'twitter:site', content: '@reactnative'},
      ],
    }),
};

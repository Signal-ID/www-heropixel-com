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
  // editUrl: 'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/',
  remarkPlugins: [],
};

const isDeployPreview = process.env.PREVIEW_DEPLOY === 'true';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'HeroPixel by Signal ID',
  tagline: 'The most advanced remarketing technology to date.',
  organizationName: 'Signal ID',
  projectName: 'heropixel',
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
    {src: '/js/heropixel.js', async: true},
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
  onBrokenLinks: 'throw', //'throw',
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
          editCurrentVersion: false,
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
            href: '/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
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
            href: '/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
            color: '#06bcee',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            href: '/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
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
          src: 'img/heropixel/Hero-Pixel-Horizontal-Logo-RGB-Black-Medium.png',
          srcDark:
            'img/heropixel/Hero-Pixel-Horizontal-Logo-RGB-White-Medium.png',
          alt: 'HeroPixel',
          href: '/docs',
        },
        style: 'primary',
        items: [
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownActiveClassDisabled: true,
          //   dropdownItemsAfter: [
          //     {
          //       to: '/versions',
          //       label: 'All versions',
          //     },
          //   ],
          // },
          {
            type: 'html',
            position: 'left',
            value:
              '<iframe src="https://status.heropixel.com/badge?theme=light" class="statusiframe" width="250" height="30" frameborder="0" scrolling="no"></iframe>',
          },
          {
            type: 'doc',
            docId: 'intro-to-pixel-tech',
            label: 'What is HeroPixel',
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
                label: 'Optin Forms',
                type: 'doc',
                docId: 'leadcapture/overview',
              },
              {
                label: 'Personalization',
                type: 'doc',
                docId: 'personalization/personalized-landing-pages',
              },
              {
                label: 'Integrations',
                type: 'doc',
                docId: 'intro-to-integrations',
              },
              {
                label: 'API',
                type: 'doc',
                docId: 'intro-to-graphql',
              },
              {
                label: 'ConsentGuard ™',
                type: 'doc',
                docId: 'consentguard/consentguard-overview',
              },
              // {
              //   label: 'GraphQL APIs',
              //   type: 'doc',
              //   docId: 'intro-to-graphql',
              // },
              // {
              //   label: 'REST APIs',
              //   type: 'doc',
              //   docId: 'intro-to-rest',
              // },
            ],
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://app.heropixel.com/',
            label: 'Login',
            position: 'right',
          },
          {
            href: 'https://github.com/Signal-ID/www-heropixel-com/discussions',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'navbar-github-link',
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
                to: '/docs/start-registration',
              },
              {
                label: 'Personalization',
                to: 'docs/personalization/personalized-landing-pages',
              },
              {
                label: 'Integrations',
                to: '/docs/intro-to-integrations',
              },
              {
                label: 'ConsentGuard ™ Cookie Banner',
                to: '/docs/consentguard/consentguard-overview',
              },
              // {
              //   label: 'GraphQL APIs',
              //   to: 'docs/intro-to-graphql',
              // },
              // {
              //   label: 'REST APIs',
              //   to: 'docs/intro-to-rest',
              // },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Sales',
                href: 'https://calendly.com/mark-heropixel/20min',
              },
              {
                label: 'Support',
                href: 'mailto:support@heropixel.com',
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
              {
                label: 'Acceptable Use Policy',
                href: '/acceptable-use',
              },
              {
                label: 'Do Not Sell My Personal Info',
                href: 'https://app.heropixel.com/optout',
              },
              {
                label: 'Consumer Rights Request',
                href: 'https://app.heropixel.com/consumer-rights-request',
              },
              {
                label: 'Privacy Center +1 (855) 474-7028',
                href: 'tel:8554747028',
              },
            ],
          },
        ],
        logo: {
          alt: 'HeroPixelLogo',
          src: 'img/heropixel/hero-pixel-logo.png',
          href: '/docs',
        },
        copyright,
      },
      algolia: {
        appId: 'LJFBTPOMFA',
        apiKey: 'c39d32c5be6710730744b17ae6d28155',
        indexName: 'heropixel',
        contextualSearch: true,
        debug: false,
      },
      metadata: [
        {
          property: 'og:image',
          content:
            'https://heropixel.com/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content:
            'https://heropixel.com/img/heropixel/Hero-Pixel-Icon-RGB-Black-Medium.svg',
        },
        {name: 'twitter:site', content: '@reactnative'},
      ],
    }),
};

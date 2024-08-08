/*! For license information please see 784abe2e.48fa6068.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7343],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        c =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function u(e, n, t) {
        var i,
          s = {},
          u = null,
          d = null;
        for (i in (void 0 !== t && (u = '' + t),
        void 0 !== n.key && (u = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          r.call(n, i) && !a.hasOwnProperty(i) && (s[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === s[i] && (s[i] = n[i]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: d,
          props: s,
          _owner: c.current,
        };
      }
      (n.Fragment = s), (n.jsx = u), (n.jsxs = u);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    3155: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => r,
          default: () => l,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => u,
        });
      var i = t(2540),
        o = t(3023);
      const s = {
          id: 'using-jitsu',
          title: 'Recording User Preferences',
          description:
            'Documentation on how to integrate and use Jitsu with ConsentGuard.',
        },
        r = void 0,
        c = {
          id: 'consentguard/using-jitsu',
          title: 'Recording User Preferences',
          description:
            'Documentation on how to integrate and use Jitsu with ConsentGuard.',
          source:
            '@site/versioned_docs/version-0.0.1/consentguard/using-jitsu.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/using-jitsu',
          permalink: '/docs/consentguard/using-jitsu',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723086403e3,
          frontMatter: {
            id: 'using-jitsu',
            title: 'Recording User Preferences',
            description:
              'Documentation on how to integrate and use Jitsu with ConsentGuard.',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'Explicit Consent',
            permalink: '/docs/consentguard/explicit-consent',
          },
          next: {
            title: 'Customizing Colors',
            permalink: '/docs/consentguard/customizing-colors',
          },
        },
        a = {},
        u = [
          {
            value: 'Using Jitsu with ConsentGuard',
            id: 'using-jitsu-with-consentguard',
            level: 2,
          },
          {value: 'Overview', id: 'overview', level: 3},
          {value: 'Why Use Jitsu?', id: 'why-use-jitsu', level: 3},
          {
            value: 'Getting a Jitsu Cloud Account',
            id: 'getting-a-jitsu-cloud-account',
            level: 3,
          },
          {
            value: 'Integration with ConsentGuard',
            id: 'integration-with-consentguard',
            level: 3,
          },
          {
            value: 'Hero Pixel Integration',
            id: 'hero-pixel-integration',
            level: 3,
          },
          {value: 'Configuration', id: 'configuration', level: 3},
          {
            value: 'Step 1: Configure the Cookie Consent Options',
            id: 'step-1-configure-the-cookie-consent-options',
            level: 4,
          },
          {
            value: 'Benefits of Recording User Preferences',
            id: 'benefits-of-recording-user-preferences',
            level: 3,
          },
          {value: 'Additional Resources', id: 'additional-resources', level: 3},
        ];
      function d(e) {
        const n = {
          a: 'a',
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h2, {
              id: 'using-jitsu-with-consentguard',
              children: 'Using Jitsu with ConsentGuard',
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Jitsu is a powerful open-source data integration platform that can collect and store user preferences for ConsentGuard. This documentation will explain how to integrate Jitsu with ConsentGuard, the special Jitsu URL, and how to get a Jitsu Cloud account.',
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'why-use-jitsu', children: 'Why Use Jitsu?'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Tracking user preferences is essential for compliance and to demonstrate that you are honoring user choices. Jitsu allows you to store and analyze these preferences, ensuring transparency and accountability.',
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'getting-a-jitsu-cloud-account',
              children: 'Getting a Jitsu Cloud Account',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'To get started with Jitsu, you need a Jitsu Cloud account. You can sign up for a free account ',
                (0, i.jsx)(n.a, {href: 'https://jitsu.com/', children: 'here'}),
                '. A Jitsu Cloud account includes a free ClickHouse database, which can be used to store and query user preferences.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'integration-with-consentguard',
              children: 'Integration with ConsentGuard',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'ConsentGuard can send all user preferences to Jitsu for storage. This integration allows you to easily connect to any database, including the free ClickHouse DB provided by Jitsu Cloud.',
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'hero-pixel-integration',
              children: 'Hero Pixel Integration',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Hero Pixel offers a complimentary Jitsu URL and write key that maps user preferences directly to your account. This data can be accessed through our extensive integrations, and we use opt-out data to control the Hero Pixel.',
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "To configure Jitsu with ConsentGuard, you need to include the Jitsu URL and write key in your configuration options. Here's how you can do it:",
            }),
            '\n',
            (0, i.jsx)(n.h4, {
              id: 'step-1-configure-the-cookie-consent-options',
              children: 'Step 1: Configure the Cookie Consent Options',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Place your configuration options for the banner by defining the global ',
                (0, i.jsx)(n.code, {children: 'window.cookieConsentOptions'}),
                ' object. Place this script BEFORE the inclusion of the main cookie banner script:',
              ],
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  "<script data-consent-category=\"essential\">\n  window.cookieConsentOptions = window.cookieConsentOptions || {};\n  window.cookieConsentOptions = {\n    writeKey: 'YOUR_JITSU_WRITE_KEY',\n    jitsuUrl: 'https://your-jitsu-url.com',\n    privacy_policy_link: 'https://yourwebsite.com/privacy-policy',\n  };\n</script>\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'benefits-of-recording-user-preferences',
              children: 'Benefits of Recording User Preferences',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Compliance:'}),
                    ' Demonstrate that you are honoring user preferences by tracking opt-ins and opt-outs.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Integration:'}),
                    ' Easily connect to any database, including the free ClickHouse DB provided by Jitsu Cloud.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Analytics:'}),
                    ' Analyze user preferences and behaviors to improve your website and services.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Control:'}),
                    ' Use the opt-out data to control the Hero Pixel, ensuring that user preferences are respected.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {
              id: 'additional-resources',
              children: 'Additional Resources',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For more information on setting up Jitsu and integrating it with your projects, refer to the ',
                (0, i.jsx)(n.a, {
                  href: 'https://jitsu.com/docs/',
                  children: 'Jitsu Documentation',
                }),
                '.',
              ],
            }),
          ],
        });
      }
      function l(e = {}) {
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => r, x: () => c});
      var i = t(3696);
      const o = {},
        s = i.createContext(o);
      function r(e) {
        const n = i.useContext(s);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : r(e.components)),
          i.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

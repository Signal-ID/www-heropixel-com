/*! For license information please see e722f956.173c9a93.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4897],
  {
    2192: (e, t, i) => {
      var n = i(3696),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, i) {
        var n,
          o = {},
          c = null,
          d = null;
        for (n in (void 0 !== i && (c = '' + i),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          r.call(t, n) && !l.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: a.current,
        };
      }
      (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, i) => {
      e.exports = i(2192);
    },
    8110: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => l,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => c,
        });
      var n = i(2540),
        s = i(3023);
      const o = {
          id: 'dont-install-with-shopify-settings',
          title: 'Shopify Settings Limitations',
          description: 'desc',
        },
        r =
          "Why Our Pixel Snippet Cannot Be Installed Using Shopify's ScriptTag or Web Pixels",
        a = {
          id: 'dont-install-with-shopify-settings',
          title: 'Shopify Settings Limitations',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/dont-install-with-shopify-settings.md',
          sourceDirName: '.',
          slug: '/dont-install-with-shopify-settings',
          permalink: '/docs/dont-install-with-shopify-settings',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719034063e3,
          frontMatter: {
            id: 'dont-install-with-shopify-settings',
            title: 'Shopify Settings Limitations',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Google Tag Manager Limitations',
            permalink: '/docs/dont-install-with-gtm',
          },
          next: {title: 'Pageview', permalink: '/docs/event-pageview'},
        },
        l = {},
        c = [
          {value: 'The Official Result', id: 'the-official-result', level: 2},
          {value: 'Impact', id: 'impact', level: 2},
          {
            value: 'Shopify Documentation and Statements',
            id: 'shopify-documentation-and-statements',
            level: 2,
          },
          {value: 'Alternative Method', id: 'alternative-method', level: 2},
        ];
      function d(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.p, {
              children:
                'Shopify refers to their environment for loading scripts through their platform as the "ScriptTag" API or "web pixels" within the "Checkout UI Extensions" framework.',
            }),
            '\n',
            (0, n.jsx)(t.h1, {
              id: 'why-our-pixel-snippet-cannot-be-installed-using-shopifys-scripttag-or-web-pixels',
              children:
                "Why Our Pixel Snippet Cannot Be Installed Using Shopify's ScriptTag or Web Pixels",
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'the-official-result',
              children: 'The Official Result',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "No, our pixel snippet cannot be installed using Shopify's ScriptTag or web pixels due to Shopify\u2019s sandbox environment for scripts. This sandboxing restricts scripts from accessing critical data needed for the pixel to function properly.",
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'impact', children: 'Impact'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "Using Shopify's ScriptTag or web pixels to load our pixel snippet leads to several limitations:",
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Domain Authorization'}),
                    ': Our pixel requires firing directly on the authorized domain. Loading it through Shopify\u2019s ScriptTag or web pixels results in it being fired in a sandboxed environment, not the authorized domain.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: 'Access to Page Information',
                    }),
                    ': The pixel cannot read essential page information such as the URL or metadata.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Third-Party Cookies'}),
                    ': The pixel is unable to access third-party cookies, crucial for tracking and analytics.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "These limitations prevent our pixel from functioning correctly when installed through Shopify's ScriptTag or web pixels.",
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'shopify-documentation-and-statements',
              children: 'Shopify Documentation and Statements',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Shopify\u2019s sandbox environment imposes several restrictions on scripts that impact our pixel\u2019s functionality:',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        (0, n.jsx)(t.strong, {
                          children: 'Sandboxed JavaScript',
                        }),
                        ': Shopify\u2019s sandboxed environment for web pixels ensures a secure execution by limiting access to the global window object and other features that could compromise security.',
                      ],
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children: (0, n.jsx)(t.a, {
                            href: 'https://shopify.dev/docs/api/checkout-ui-extensions',
                            children: 'Shopify Web Pixels',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        (0, n.jsx)(t.strong, {
                          children: 'Content Security Policies',
                        }),
                        ': Shopify enforces strict content security policies that restrict the capabilities of JavaScript loaded through its settings, preventing it from accessing sensitive data on the page.',
                      ],
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children: (0, n.jsx)(t.a, {
                            href: 'https://shopify.dev/docs/api/admin-rest/2023-10/resources/scripttag',
                            children: 'Shopify Content Security Policy',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        (0, n.jsx)(t.strong, {
                          children: 'Data Layer and Event Subscription',
                        }),
                        ': Shopify provides APIs for subscribing to customer events in a controlled manner, but direct interaction with the data layer is restricted.',
                      ],
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children: (0, n.jsx)(t.a, {
                            href: 'https://shopify.dev/docs/api/checkout-ui-extensions',
                            children: 'About Web Pixels',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'For a more detailed and up-to-date explanation, refer to Shopify\u2019s official documentation on ',
                (0, n.jsx)(t.a, {
                  href: 'https://shopify.dev/docs/api/checkout-ui-extensions',
                  children: 'Sandboxed JavaScript',
                }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'alternative-method',
              children: 'Alternative Method',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'To ensure our pixel functions correctly, it must be installed directly in the ',
                (0, n.jsx)(t.code, {children: '<head>'}),
                ' section of your website. For detailed instructions on how to do this, please refer to our ',
                (0, n.jsx)(t.a, {
                  href: '/docs/start-pixel-installation',
                  children: 'installation guide',
                }),
                '.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, i) => {
      i.d(t, {R: () => r, x: () => a});
      var n = i(3696);
      const s = {},
        o = n.createContext(s);
      function r(e) {
        const t = n.useContext(o);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          n.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
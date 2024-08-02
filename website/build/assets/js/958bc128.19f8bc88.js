/*! For license information please see 958bc128.19f8bc88.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3805],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        o = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        r =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var i,
          a = {},
          d = null,
          c = null;
        for (i in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, i) && !l.hasOwnProperty(i) && (a[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === a[i] && (a[i] = t[i]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: c,
          props: a,
          _owner: r.current,
        };
      }
      (t.Fragment = a), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    1826: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => a,
          metadata: () => r,
          toc: () => d,
        });
      var i = n(2540),
        o = n(3023);
      const a = {
          id: 'dont-install-with-gtm',
          title: 'Google Tag Manager Limitations',
          description: 'desc',
        },
        s =
          'Why Google Tag Manager Cannot Be Used to Install Our Pixel Snippet...',
        r = {
          id: 'dont-install-with-gtm',
          title: 'Google Tag Manager Limitations',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/dont-install-with-gtm.md',
          sourceDirName: '.',
          slug: '/dont-install-with-gtm',
          permalink: '/docs/dont-install-with-gtm',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719034063e3,
          frontMatter: {
            id: 'dont-install-with-gtm',
            title: 'Google Tag Manager Limitations',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Get Your Leads',
            permalink: '/docs/start-get-your-leads',
          },
          next: {
            title: 'Shopify Settings Limitations',
            permalink: '/docs/dont-install-with-shopify-settings',
          },
        },
        l = {},
        d = [
          {value: 'The Official Result', id: 'the-official-result', level: 2},
          {value: 'Impact', id: 'impact', level: 2},
          {
            value: 'Google Documentation and Statements',
            id: 'google-documentation-and-statements',
            level: 2,
          },
          {value: 'Alternative Method', id: 'alternative-method', level: 2},
        ];
      function c(e) {
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'why-google-tag-manager-cannot-be-used-to-install-our-pixel-snippet',
              children:
                'Why Google Tag Manager Cannot Be Used to Install Our Pixel Snippet...',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'the-official-result',
              children: 'The Official Result',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'No, our pixel snippet cannot be installed using Google Tag Manager (GTM) due to Google\u2019s new sandbox environment for scripts. This sandboxing prevents the pixel from accessing crucial data required for its functionality.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'impact', children: 'Impact'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Using GTM to load our pixel snippet results in several limitations:',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Domain Authorization'}),
                    ': Our pixel can only be fired directly on the authorized domain. Firing the pixel inside GTM loads it in a Google sandboxed domain, which is not authorized.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children: 'Access to Page Information',
                    }),
                    ': The pixel cannot read the URL, metadata, or other essential page information.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Third-Party Cookies'}),
                    ': The pixel cannot access third-party cookies, which are necessary for tracking and analytics.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Critical Fingerprinting'}),
                    ": The sandbox's design is to prevent us from accessing certain browser functions that are necessary to create a unique fingerprint of the users machine.",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'These limitations make it impossible for our pixel to function correctly when triggered from GTM.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'google-documentation-and-statements',
              children: 'Google Documentation and Statements',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "Google provides detailed information on sandboxed JavaScript in the context of Google Tag Manager (GTM). Here's a summary of their approach and guidelines regarding rendering scripts in a sandboxed environment:",
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        (0, i.jsx)(t.strong, {
                          children: 'Sandboxed JavaScript',
                        }),
                        ': Google Tag Manager uses sandboxed JavaScript to ensure a secure execution environment for custom templates. This sandboxing limits the scope of JavaScript, removing or restricting certain features to prevent malicious actions and enhance security.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://developers.google.com/tag-platform/tag-manager/templates/sandboxed-javascript',
                            children: 'Google Tag Manager Sandboxed JavaScript',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        (0, i.jsx)(t.strong, {
                          children: 'Execution Environment',
                        }),
                        ': The sandboxed environment is based on ECMAScript 5.1, with certain modern features removed. This includes restrictions on accessing certain global objects and methods that could potentially compromise security.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://developers.google.com/tag-platform/tag-manager/web',
                            children: 'Google Tag Manager Web',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        (0, i.jsx)(t.strong, {
                          children: 'Permissions and Restrictions',
                        }),
                        ': Custom templates in GTM require explicit permissions to perform certain actions. The template APIs define what actions are allowed, and these permissions are automatically detected and enforced during the template creation process.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://developers.google.com/tag-platform/tag-manager/templates/permissions',
                            children: 'Google Tag Manager Templates',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        (0, i.jsx)(t.strong, {
                          children: 'Data Layer and Variables',
                        }),
                        ': In a sandboxed environment, accessing the global ',
                        (0, i.jsx)(t.code, {children: 'window'}),
                        ' object or directly interacting with the data layer can be restricted. Instead, GTM provides specific APIs to interact with the data layer in a controlled manner.',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://developers.google.com/tag-platform/tag-manager/templates/data-layer',
                            children: 'Google Tag Manager Data Layer',
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
            (0, i.jsxs)(t.p, {
              children: [
                'For a more detailed and up-to-date explanation, refer to Google\u2019s official documentation on ',
                (0, i.jsx)(t.a, {
                  href: 'https://developers.google.com/tag-platform/tag-manager/templates/sandboxed-javascript',
                  children: 'Sandboxed JavaScript',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'alternative-method',
              children: 'Alternative Method',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'To ensure our pixel functions correctly, it must be installed directly in the ',
                (0, i.jsx)(t.code, {children: '<head>'}),
                ' section of your website. For detailed instructions on how to do this, please refer to our ',
                (0, i.jsx)(t.a, {
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
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => r});
      var i = n(3696);
      const o = {},
        a = i.createContext(o);
      function s(e) {
        const t = i.useContext(a);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          i.createElement(a.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

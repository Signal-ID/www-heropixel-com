/*! For license information please see 4a9bda00.a63da56c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [378],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        r = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, n) {
        var s,
          o = {},
          c = null,
          d = null;
        for (s in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          i.call(t, s) && !a.hasOwnProperty(s) && (o[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === o[s] && (o[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: l.current,
        };
      }
      (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7896: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var s = n(2540),
        r = n(3023);
      const o = {
          id: 'start-get-your-leads',
          title: 'Get Your Leads',
          description: 'desc',
        },
        i = 'Accessing Your Leads',
        l = {
          id: 'start-get-your-leads',
          title: 'Get Your Leads',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/start-get-your-leads.md',
          sourceDirName: '.',
          slug: '/start-get-your-leads',
          permalink: '/docs/start-get-your-leads',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 'start-get-your-leads',
            title: 'Get Your Leads',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Pixel Installation',
            permalink: '/docs/start-pixel-installation',
          },
          next: {
            title: 'Google Tag Manager Limitations',
            permalink: '/docs/dont-install-with-gtm',
          },
        },
        a = {},
        c = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {value: 'FOLLOW THESE STEPS', id: 'follow-these-steps', level: 2},
          {value: 'Integrations', id: 'integrations', level: 2},
          {value: 'Support', id: 'support', level: 2},
        ];
      function d(e) {
        const t = {
          a: 'a',
          blockquote: 'blockquote',
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {
              id: 'accessing-your-leads',
              children: 'Accessing Your Leads',
            }),
            '\n',
            (0, s.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, s.jsxs)(t.p, {
                  children: [
                    'During the pixel creation process you had the option to setup an integration which will automatically send leads to your remarketing channels. For more information on managing your integrations see the ',
                    (0, s.jsx)(t.a, {
                      href: '/docs/intro-to-integrations',
                      children: 'Integrations Guides',
                    }),
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                "This guide will walk you through reviewing the leads that you've receiving and then downloading an export of them.",
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'follow-these-steps',
              children: 'FOLLOW THESE STEPS',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, {
                      children: (0, s.jsx)(t.strong, {
                        children: 'Access the Leads Area',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(t.li, {children: 'Open your web browser.'}),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Navigate to the leads URL: ',
                            (0, s.jsx)(t.a, {
                              href: 'https://app.heropixel.com/leads',
                              children: 'app.heropixel.com/leads',
                            }),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'You will be presented with all of the leads associated with your selected organization.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, {
                      children: (0, s.jsx)(t.strong, {
                        children: 'Search or Filter Your Leads',
                      }),
                    }),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'Use the filter options on this page to narrow down the list of leads.',
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'You can filter by various attributes to find specific leads.',
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
            (0, s.jsx)(t.h2, {id: 'integrations', children: 'Integrations'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'HeroPixel offers native integrations that allow you to automatically send leads to your ecosystem. ',
                (0, s.jsx)(t.a, {
                  href: '/docs/intro-to-integrations',
                  children: 'See all Integrations',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'support', children: 'Support'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'If you encounter any issues or need further assistance, contact our support team at ',
                    (0, s.jsx)(t.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => l});
      var s = n(3696);
      const r = {},
        o = s.createContext(r);
      function i(e) {
        const t = s.useContext(o);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          s.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

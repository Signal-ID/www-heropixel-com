/*! For license information please see 4a9bda00.87496723.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [378],
  {
    2192: (e, t, n) => {
      var o = n(3696),
        r = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, n) {
        var o,
          s = {},
          c = null,
          d = null;
        for (o in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          i.call(t, o) && !a.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: s,
          _owner: l.current,
        };
      }
      (t.Fragment = s), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7896: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => c,
        });
      var o = n(2540),
        r = n(3023);
      const s = {
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
          lastUpdatedAt: 1719276021e3,
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
          {
            value: 'Or Integrate it with your ecosystem',
            id: 'or-integrate-it-with-your-ecosystem',
            level: 2,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
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
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'accessing-your-leads',
              children: 'Accessing Your Leads',
            }),
            '\n',
            (0, o.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, o.jsxs)(t.p, {
                  children: [
                    'During the pixel creation process you had the option to setup an integration which will automatically send leads to your remarketing channels. For more information on managing your integrations see the ',
                    (0, o.jsx)(t.a, {
                      href: '/docs/intro-to-integrations',
                      children: 'Integrations Guides',
                    }),
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                "This guide will walk you through reviewing the leads that you've receiving and then downloading an export of them.",
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'follow-these-steps',
              children: 'FOLLOW THESE STEPS',
            }),
            '\n',
            (0, o.jsxs)(t.ol, {
              children: [
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, o.jsx)(t.p, {
                      children: (0, o.jsx)(t.strong, {
                        children: 'Access the Leads Area',
                      }),
                    }),
                    '\n',
                    (0, o.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(t.li, {children: 'Open your web browser.'}),
                        '\n',
                        (0, o.jsxs)(t.li, {
                          children: [
                            'Navigate to the leads URL: ',
                            (0, o.jsx)(t.a, {
                              href: 'https://app.heropixel.com/leads',
                              children: 'app.heropixel.com/leads',
                            }),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, o.jsx)(t.li, {
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
                (0, o.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, o.jsx)(t.p, {
                      children: (0, o.jsx)(t.strong, {
                        children: 'Search or Filter Your Leads',
                      }),
                    }),
                    '\n',
                    (0, o.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            "Use the filter options on this page to narrow down the list of leads you're going to export.",
                        }),
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            'Remember that larger lists take more time.',
                        }),
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            "You'll receive all of the lead attributes in your exported document.",
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, o.jsx)(t.p, {
                      children: (0, o.jsx)(t.strong, {
                        children: 'Click the EXPORT LEADS button',
                      }),
                    }),
                    '\n',
                    (0, o.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            'In the upper right of the page you\'ll find a black button to "Export Leads"',
                        }),
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            'This button will honor whatever you have set in your filters and should match exactly what you see in your lead list.',
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
            (0, o.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, o.jsx)(t.p, {
                  children:
                    'When you\'ve done this correctly you\'ll receive a notice at the top of your screen stating "Your leads are exporting". This process may take some time depending on the size of your list.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'or-integrate-it-with-your-ecosystem',
              children: 'Or Integrate it with your ecosystem',
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                "Here's a short list of integrations that we offer natively from HeroPixel Choose from any of these integrations and send the leads directly into your ecosystem without incurring additional charges. ",
                (0, o.jsx)(t.a, {
                  href: '/docs/intro-to-integrations',
                  children: 'See all Integrations',
                }),
                '.',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, o.jsxs)(t.ul, {
              children: [
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    (0, o.jsx)(t.strong, {
                      children: 'Is Your Export Stalling?',
                    }),
                    '\n',
                    (0, o.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            'Exports can take up to two hours depending on the number of customers that are exporting before you.',
                        }),
                        '\n',
                        (0, o.jsx)(t.li, {
                          children:
                            'If your export has taken longer than 6 hours, contact support.',
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
            (0, o.jsx)(t.h2, {id: 'support', children: 'Support'}),
            '\n',
            (0, o.jsxs)(t.ul, {
              children: [
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    'If you encounter any issues or need further assistance, contact our support team at ',
                    (0, o.jsx)(t.a, {
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
      function h(e = {}) {
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => l});
      var o = n(3696);
      const r = {},
        s = o.createContext(r);
      function i(e) {
        const t = o.useContext(s);
        return o.useMemo(
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
          o.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

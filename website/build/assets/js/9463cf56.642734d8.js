/*! For license information please see 9463cf56.642734d8.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1371],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var r,
          i = {},
          a = null,
          c = null;
        for (r in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, r) && !d.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: c,
          props: i,
          _owner: l.current,
        };
      }
      (t.Fragment = i), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7754: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => a,
        });
      var r = n(2540),
        o = n(3023);
      const i = {
          id: 'ontraport',
          title: 'Ontraport',
          description: 'A destination connector for Ontraport',
        },
        s = 'Ontraport',
        l = {
          id: 'destinations/ontraport',
          title: 'Ontraport',
          description: 'A destination connector for Ontraport',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/ontraport.md',
          sourceDirName: 'destinations',
          slug: '/destinations/ontraport',
          permalink: '/docs/destinations/ontraport',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'ontraport',
            title: 'Ontraport',
            description: 'A destination connector for Ontraport',
          },
          sidebar: 'integrations',
          previous: {title: 'MySQL', permalink: '/docs/destinations/mysql'},
          next: {title: 'Oracle', permalink: '/docs/destinations/oracle'},
        },
        d = {},
        a = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Supported Sync Modes', id: 'supported-sync-modes', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 2},
          {
            value: 'Step 1: Obtain API Credentials',
            id: 'step-1-obtain-api-credentials',
            level: 3,
          },
          {
            value: 'Step 2: Set up the Ontraport Destination in HeroPixel',
            id: 'step-2-set-up-the-ontraport-destination-in-heropixel',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Common Issues', id: 'common-issues', level: 3},
        ];
      function c(e) {
        const t = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.h1, {id: 'ontraport', children: 'Ontraport'}),
            '\n',
            (0, r.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'The Ontraport destination connector allows you to sync data to Ontraport, a comprehensive business automation platform. This connector supports full refresh, incremental append, and incremental dedup sync modes, providing flexibility for various data integration needs.',
            }),
            '\n',
            (0, r.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'The Ontraport destination connector supports the following sync modes:',
            }),
            '\n',
            (0, r.jsxs)(t.table, {
              children: [
                (0, r.jsx)(t.thead, {
                  children: (0, r.jsxs)(t.tr, {
                    children: [
                      (0, r.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, r.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(t.tbody, {
                  children: [
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'Each synced record will correspond to a contact in Ontraport, with the data being written based on the provided API credentials and optional tags.',
            }),
            '\n',
            (0, r.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, r.jsx)(t.p, {
              children: 'To use the Ontraport destination connector, you need:',
            }),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsx)(t.li, {children: 'An Ontraport account'}),
                '\n',
                (0, r.jsx)(t.li, {children: 'APP ID'}),
                '\n',
                (0, r.jsx)(t.li, {children: 'API Key'}),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, r.jsx)(t.h3, {
              id: 'step-1-obtain-api-credentials',
              children: 'Step 1: Obtain API Credentials',
            }),
            '\n',
            (0, r.jsxs)(t.ol, {
              children: [
                '\n',
                (0, r.jsx)(t.li, {
                  children: 'Log in to your Ontraport account.',
                }),
                '\n',
                (0, r.jsx)(t.li, {
                  children:
                    'Navigate to the "Administration" section under "Integrations".',
                }),
                '\n',
                (0, r.jsx)(t.li, {
                  children:
                    'Go to "API Keys" and generate a new API Key. Copy the APP ID and API Key for use in the connector setup.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h3, {
              id: 'step-2-set-up-the-ontraport-destination-in-heropixel',
              children: 'Step 2: Set up the Ontraport Destination in HeroPixel',
            }),
            '\n',
            (0, r.jsxs)(t.ol, {
              children: [
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, r.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, r.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, r.jsx)(t.strong, {children: 'Ontraport'}),
                    ' from the ',
                    (0, r.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, r.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            (0, r.jsx)(t.strong, {children: 'APP ID'}),
                            ': Your Ontraport APP ID.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            (0, r.jsx)(t.strong, {children: 'API Key'}),
                            ': Your Ontraport API key.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            (0, r.jsx)(t.strong, {children: 'Tags'}),
                            ': A comma-separated list of tags to add to the contacts being added to the records (optional).',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, r.jsx)(t.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, r.jsx)(t.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.strong, {children: 'Invalid API Credentials'}),
                    ': Ensure that you have copied the APP ID and API Key correctly from your Ontraport account.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, r.jsx)(t.a, {
                  href: 'https://api.ontraport.com/doc/',
                  children: 'Ontraport API Documentation',
                }),
                ' or contact Ontraport support.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => l});
      var r = n(3696);
      const o = {},
        i = r.createContext(o);
      function s(e) {
        const t = r.useContext(i);
        return r.useMemo(
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
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          r.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

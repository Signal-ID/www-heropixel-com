/*! For license information please see 14101884.8034f587.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2660],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var i,
          r = {},
          d = null,
          c = null;
        for (i in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          o.call(t, i) && !a.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: l.current,
        };
      }
      (t.Fragment = r), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4600: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      var i = n(2540),
        s = n(3023);
      const r = {
          id: 'smartlead',
          title: 'Smartlead',
          description: 'A destination connector for Smartlead',
        },
        o = 'Smartlead',
        l = {
          id: 'destinations/smartlead',
          title: 'Smartlead',
          description: 'A destination connector for Smartlead',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/smartlead.md',
          sourceDirName: 'destinations',
          slug: '/destinations/smartlead',
          permalink: '/docs/destinations/smartlead',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'smartlead',
            title: 'Smartlead',
            description: 'A destination connector for Smartlead',
          },
          sidebar: 'integrations',
          previous: {
            title: 'SFTP JSON',
            permalink: '/docs/destinations/sftp-json',
          },
          next: {
            title: 'Snowflake Cortex',
            permalink: '/docs/destinations/snowflake-cortex',
          },
        },
        a = {},
        d = [
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
            value: 'Step 2: Set up the Smartlead Destination in HeroPixel',
            id: 'step-2-set-up-the-smartlead-destination-in-heropixel',
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {id: 'smartlead', children: 'Smartlead'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The Smartlead destination connector allows you to sync data to Smartlead, a platform designed for lead generation and management. This connector supports full refresh and incremental dedup sync modes, providing an efficient way to manage and integrate your data.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The Smartlead destination connector supports the following sync modes:',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, i.jsx)(t.td, {
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
            (0, i.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Each synced record will correspond to a contact in Smartlead, with the data being written based on the provided API key, campaign ID, and optional tags.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'To use the Smartlead destination connector, you need:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {children: 'A Smartlead account'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'Account level API Key'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'Campaign ID'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-1-obtain-api-credentials',
              children: 'Step 1: Obtain API Credentials',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Log in to your Smartlead account.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Navigate to the "API Settings" section under "Account".',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    "Generate a new API Key if you don't have one already. Copy this key for use in the connector setup.",
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Obtain the Campaign ID for the campaign you want to sync data to.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-2-set-up-the-smartlead-destination-in-heropixel',
              children: 'Step 2: Set up the Smartlead Destination in HeroPixel',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, i.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, i.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, i.jsx)(t.strong, {children: 'Smartlead'}),
                    ' from the ',
                    (0, i.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {
                              children: 'Account level API Key',
                            }),
                            ': Your Smartlead API key.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'Campaign ID'}),
                            ': The ID of the campaign to drop the individuals into.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'Tags'}),
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
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, i.jsx)(t.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Invalid API Key'}),
                    ': Ensure that you have copied the API key correctly from your Smartlead account.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Campaign ID not found'}),
                    ': Verify that the Campaign ID is correct and exists in your Smartlead account.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, i.jsx)(t.a, {
                  href: 'https://smartlead.com/api-docs',
                  children: 'Smartlead API Documentation',
                }),
                ' or contact Smartlead support.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => o, x: () => l});
      var i = n(3696);
      const s = {},
        r = i.createContext(s);
      function o(e) {
        const t = i.useContext(r);
        return i.useMemo(
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
              ? e.components(s)
              : e.components || s
            : o(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

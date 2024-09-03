/*! For license information please see ca09c840.28b33e85.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6091],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        r =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var i,
          o = {},
          d = null,
          c = null;
        for (i in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, i) && !a.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: o,
          _owner: r.current,
        };
      }
      (t.Fragment = o), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4128: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => d,
        });
      var i = n(2540),
        s = n(3023);
      const o = {
          id: 'klaviyo',
          title: 'Klaviyo',
          description: 'A destination connector for Klaviyo',
        },
        l = 'Klaviyo',
        r = {
          id: 'destinations/klaviyo',
          title: 'Klaviyo',
          description: 'A destination connector for Klaviyo',
          source: '@site/versioned_docs/version-0.0.1/destinations/klaviyo.md',
          sourceDirName: 'destinations',
          slug: '/destinations/klaviyo',
          permalink: '/docs/destinations/klaviyo',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 'klaviyo',
            title: 'Klaviyo',
            description: 'A destination connector for Klaviyo',
          },
          sidebar: 'integrations',
          previous: {
            title: 'InfusionSoft/Keap',
            permalink: '/docs/destinations/keap',
          },
          next: {title: 'Mailchimp', permalink: '/docs/destinations/mailchimp'},
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
            value: 'Step 2: Set up the Klaviyo Destination in HeroPixel',
            id: 'step-2-set-up-the-klaviyo-destination-in-heropixel',
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
            (0, i.jsx)(t.h1, {id: 'klaviyo', children: 'Klaviyo'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The Klaviyo destination connector allows you to sync data to Klaviyo, a marketing automation platform designed for e-commerce. This connector supports full refresh and incremental append sync modes, making it suitable for various data integration needs.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The Klaviyo destination connector supports the following sync modes:',
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
                          children: 'Yes',
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
                          children: 'No',
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
                'Each synced record will correspond to a contact in Klaviyo, with the data being written to a specified list.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'To use the Klaviyo destination connector, you need:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {children: 'A Klaviyo account'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'API Private Key'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'List ID'}),
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
                (0, i.jsx)(t.li, {children: 'Log in to your Klaviyo account.'}),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Navigate to the "Account" section under "Settings".',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Go to "API Keys" and generate a new API Private Key. Copy this key for use in the connector setup.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Obtain the List ID for the list you want to sync data to.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-2-set-up-the-klaviyo-destination-in-heropixel',
              children: 'Step 2: Set up the Klaviyo Destination in HeroPixel',
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
                    (0, i.jsx)(t.strong, {children: 'Klaviyo'}),
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
                            (0, i.jsx)(t.strong, {children: 'API Private Key'}),
                            ': Your Klaviyo API private key.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'List ID'}),
                            ': The ID of the list to write to.',
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
                    ': Ensure that you have copied the API key correctly from your Klaviyo account.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'List ID not found'}),
                    ': Verify that the List ID is correct and exists in your Klaviyo account.',
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
                  href: 'https://www.klaviyo.com/docs',
                  children: 'Klaviyo API Documentation',
                }),
                ' or contact Klaviyo support.',
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
      n.d(t, {R: () => l, x: () => r});
      var i = n(3696);
      const s = {},
        o = i.createContext(s);
      function l(e) {
        const t = i.useContext(o);
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
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          i.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

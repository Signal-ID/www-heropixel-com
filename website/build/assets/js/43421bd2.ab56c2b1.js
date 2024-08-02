/*! For license information please see 43421bd2.ab56c2b1.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8269],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var s,
          o = {},
          d = null,
          a = null;
        for (s in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          r.call(t, s) && !c.hasOwnProperty(s) && (o[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === o[s] && (o[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: o,
          _owner: l.current,
        };
      }
      (t.Fragment = o), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4912: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => d,
        });
      var s = n(2540),
        i = n(3023);
      const o = {
          id: 'hubspot',
          title: 'HubSpot',
          description: 'A destination connector for HubSpot',
        },
        r = 'HubSpot',
        l = {
          id: 'destinations/hubspot',
          title: 'HubSpot',
          description: 'A destination connector for HubSpot',
          source: '@site/versioned_docs/version-0.0.1/destinations/hubspot.md',
          sourceDirName: 'destinations',
          slug: '/destinations/hubspot',
          permalink: '/docs/destinations/hubspot',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'hubspot',
            title: 'HubSpot',
            description: 'A destination connector for HubSpot',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Google Sheets',
            permalink: '/docs/destinations/google-sheets',
          },
          next: {title: 'Iceberg', permalink: '/docs/destinations/iceberg'},
        },
        c = {},
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
            value: 'Step 2: Set up the HubSpot Destination in Airbyte',
            id: 'step-2-set-up-the-hubspot-destination-in-airbyte',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Common Issues', id: 'common-issues', level: 3},
        ];
      function a(e) {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {id: 'hubspot', children: 'HubSpot'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The HubSpot destination connector allows you to sync data to HubSpot, a leading CRM platform. This connector supports incremental dedup sync mode, providing an efficient way to manage and integrate your data.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The HubSpot destination connector supports the following sync modes:',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, s.jsx)(t.td, {
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
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Each synced record will correspond to a contact in HubSpot, with the data being written based on the provided access token and lifecycle stage.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'To use the HubSpot destination connector, you need:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'A HubSpot account'}),
                '\n',
                (0, s.jsx)(t.li, {children: 'Private app access token'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'step-1-obtain-api-credentials',
              children: 'Step 1: Obtain API Credentials',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'Log in to your HubSpot account.'}),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Navigate to the "Private Apps" section under "Settings".',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    "Create a new private app if you don't have one already.",
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Generate an access token for the private app. Copy this token for use in the connector setup.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'step-2-set-up-the-hubspot-destination-in-airbyte',
              children: 'Step 2: Set up the HubSpot Destination in Airbyte',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, s.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, s.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, s.jsx)(t.strong, {children: 'HubSpot'}),
                    ' from the ',
                    (0, s.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'Access Token'}),
                            ': Your HubSpot private app access token.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'Lifecycle Stage'}),
                            ': The lifecycle stage to be applied to new contacts (optional).',
                          ],
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
                    'Click ',
                    (0, s.jsx)(t.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Invalid Access Token'}),
                    ': Ensure that you have copied the access token correctly from your HubSpot account.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Permission Denied'}),
                    ': Verify that the access token has the necessary permissions to write data to HubSpot.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, s.jsx)(t.a, {
                  href: 'https://developers.hubspot.com/docs/api/overview',
                  children: 'HubSpot API Documentation',
                }),
                ' or contact HubSpot support.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => l});
      var s = n(3696);
      const i = {},
        o = s.createContext(i);
      function r(e) {
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
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          s.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

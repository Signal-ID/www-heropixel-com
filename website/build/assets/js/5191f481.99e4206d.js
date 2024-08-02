/*! For license information please see 5191f481.99e4206d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5636],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, t) {
        var s,
          o = {},
          c = null,
          d = null;
        for (s in (void 0 !== t && (c = '' + t),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          r.call(n, s) && !a.hasOwnProperty(s) && (o[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === o[s] && (o[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: l.current,
        };
      }
      (n.Fragment = o), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    5934: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var s = t(2540),
        i = t(3023);
      const o = {
          id: 'keap',
          title: 'InfusionSoft/Keap',
          description: 'A destination connector for InfusionSoft/Keap',
        },
        r = 'InfusionSoft/Keap',
        l = {
          id: 'destinations/keap',
          title: 'InfusionSoft/Keap',
          description: 'A destination connector for InfusionSoft/Keap',
          source: '@site/versioned_docs/version-0.0.1/destinations/keap.md',
          sourceDirName: 'destinations',
          slug: '/destinations/keap',
          permalink: '/docs/destinations/keap',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'keap',
            title: 'InfusionSoft/Keap',
            description: 'A destination connector for InfusionSoft/Keap',
          },
          sidebar: 'integrations',
          previous: {title: 'Kafka', permalink: '/docs/destinations/kafka'},
          next: {title: 'Klaviyo', permalink: '/docs/destinations/klaviyo'},
        },
        a = {},
        c = [
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
            value:
              'Step 2: Set up the InfusionSoft/Keap Destination in Airbyte',
            id: 'step-2-set-up-the-infusionsoftkeap-destination-in-airbyte',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Common Issues', id: 'common-issues', level: 3},
        ];
      function d(e) {
        const n = {
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
            (0, s.jsx)(n.h1, {
              id: 'infusionsoftkeap',
              children: 'InfusionSoft/Keap',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The InfusionSoft/Keap destination connector allows you to sync data to InfusionSoft/Keap, a powerful CRM and marketing automation platform. This connector supports full refresh and incremental append sync modes, making it suitable for various data integration needs.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The InfusionSoft/Keap destination connector supports the following sync modes:',
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, s.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, s.jsx)(n.td, {
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
            (0, s.jsx)(n.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Each synced record will correspond to a contact in InfusionSoft/Keap, with the data being written based on the provided access token, tag ID, and contact type.',
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'To use the InfusionSoft/Keap destination connector, you need:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {children: 'A InfusionSoft/Keap account'}),
                '\n',
                (0, s.jsx)(n.li, {children: 'Personal Access Token'}),
                '\n',
                (0, s.jsx)(n.li, {children: 'Tag ID'}),
                '\n',
                (0, s.jsx)(n.li, {children: 'Contact Type'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'step-1-obtain-api-credentials',
              children: 'Step 1: Obtain API Credentials',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'Log in to your InfusionSoft/Keap account.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'Navigate to the "Settings" section under "API".',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Generate a Personal Access Token. Copy this token for use in the connector setup.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Obtain the Tag ID and Contact Type for your data sync.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'step-2-set-up-the-infusionsoftkeap-destination-in-airbyte',
              children:
                'Step 2: Set up the InfusionSoft/Keap Destination in Airbyte',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Click ',
                    (0, s.jsx)(n.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, s.jsx)(n.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, s.jsx)(n.strong, {children: 'InfusionSoft/Keap'}),
                    ' from the ',
                    (0, s.jsx)(n.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {
                              children: 'Personal Access Token',
                            }),
                            ': Your InfusionSoft/Keap personal access token.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'Tag ID'}),
                            ': The Tag ID to write to.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'Contact Type'}),
                            ': The Contact Type to write to (e.g., Lead, Client, Prospect, Other).',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Click ',
                    (0, s.jsx)(n.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Invalid Access Token'}),
                    ': Ensure that you have copied the access token correctly from your InfusionSoft/Keap account.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Tag ID not found'}),
                    ': Verify that the Tag ID is correct and exists in your InfusionSoft/Keap account.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Invalid Contact Type'}),
                    ': Ensure the contact type is valid and correctly specified.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For further assistance, refer to the ',
                (0, s.jsx)(n.a, {
                  href: 'https://developer.infusionsoft.com/docs/rest/',
                  children: 'InfusionSoft/Keap API Documentation',
                }),
                ' or contact InfusionSoft/Keap support.',
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => r, x: () => l});
      var s = t(3696);
      const i = {},
        o = s.createContext(i);
      function r(e) {
        const n = s.useContext(o);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          s.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

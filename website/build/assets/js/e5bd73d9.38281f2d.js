/*! For license information please see e5bd73d9.38281f2d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9060],
  {
    2192: (e, t, i) => {
      var n = i(3696),
        s = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        r =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, i) {
        var n,
          l = {},
          d = null,
          a = null;
        for (n in (void 0 !== i && (d = '' + i),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          o.call(t, n) && !c.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: a,
          props: l,
          _owner: r.current,
        };
      }
      (t.Fragment = l), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, i) => {
      e.exports = i(2192);
    },
    1057: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => d,
        });
      var n = i(2540),
        s = i(3023);
      const l = {
          id: 'mailchimp',
          title: 'Mailchimp',
          description: 'A destination connector for Mailchimp',
        },
        o = 'Mailchimp',
        r = {
          id: 'destinations/mailchimp',
          title: 'Mailchimp',
          description: 'A destination connector for Mailchimp',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/mailchimp.md',
          sourceDirName: 'destinations',
          slug: '/destinations/mailchimp',
          permalink: '/docs/destinations/mailchimp',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 'mailchimp',
            title: 'Mailchimp',
            description: 'A destination connector for Mailchimp',
          },
          sidebar: 'integrations',
          previous: {title: 'Klaviyo', permalink: '/docs/destinations/klaviyo'},
          next: {title: 'Milvus', permalink: '/docs/destinations/milvus'},
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
            value: 'Step 2: Set up the Mailchimp Destination in HeroPixel',
            id: 'step-2-set-up-the-mailchimp-destination-in-heropixel',
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {id: 'mailchimp', children: 'Mailchimp'}),
            '\n',
            (0, n.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'The Mailchimp destination connector allows you to sync data to Mailchimp, a popular email marketing platform. This connector supports incremental dedup sync mode, providing an efficient way to manage and integrate your data.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'The Mailchimp destination connector supports the following sync modes:',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, n.jsx)(t.td, {
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
            (0, n.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Each synced record will correspond to a contact in Mailchimp, with the data being written to a specified list and optionally tagged.',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'To use the Mailchimp destination connector, you need:',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {children: 'A Mailchimp account'}),
                '\n',
                (0, n.jsx)(t.li, {children: 'Account level API Key'}),
                '\n',
                (0, n.jsx)(t.li, {children: 'List ID'}),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'step-1-obtain-api-credentials',
              children: 'Step 1: Obtain API Credentials',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children: 'Log in to your Mailchimp account.',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: 'Navigate to the "Account" section under "Extras".',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'Go to "API Keys" and generate a new API Key. Copy this key for use in the connector setup.',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'Obtain the List ID for the list you want to sync data to.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'step-2-set-up-the-mailchimp-destination-in-heropixel',
              children: 'Step 2: Set up the Mailchimp Destination in HeroPixel',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, n.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, n.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, n.jsx)(t.strong, {children: 'Mailchimp'}),
                    ' from the ',
                    (0, n.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.strong, {
                              children: 'Account level API Key',
                            }),
                            ': Your Mailchimp API key.',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.strong, {children: 'List ID'}),
                            ': The ID of the Mailchimp list to push these individual profiles into.',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.strong, {children: 'Tags'}),
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
                (0, n.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, n.jsx)(t.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Invalid API Key'}),
                    ': Ensure that you have copied the API key correctly from your Mailchimp account.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'List ID not found'}),
                    ': Verify that the List ID is correct and exists in your Mailchimp account.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, n.jsx)(t.a, {
                  href: 'https://mailchimp.com/developer/marketing/docs/fundamentals/',
                  children: 'Mailchimp API Documentation',
                }),
                ' or contact Mailchimp support.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, i) => {
      i.d(t, {R: () => o, x: () => r});
      var n = i(3696);
      const s = {},
        l = n.createContext(s);
      function o(e) {
        const t = n.useContext(l);
        return n.useMemo(
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
            : o(e.components)),
          n.createElement(l.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
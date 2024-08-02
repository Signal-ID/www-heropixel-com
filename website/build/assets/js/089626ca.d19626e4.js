/*! For license information please see 089626ca.d19626e4.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2310],
  {
    2192: (e, t, n) => {
      var o = n(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        l =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, t, n) {
        var o,
          s = {},
          h = null,
          c = null;
        for (o in (void 0 !== n && (h = '' + n),
        void 0 !== t.key && (h = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          r.call(t, o) && !d.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: i,
          type: e,
          key: h,
          ref: c,
          props: s,
          _owner: l.current,
        };
      }
      (t.Fragment = s), (t.jsx = h), (t.jsxs = h);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7198: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => r,
          default: () => a,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => h,
        });
      var o = n(2540),
        i = n(3023);
      const s = {
          id: 'webhook',
          title: 'Webhook',
          description: 'A destination connector for Webhook',
        },
        r = 'Webhook',
        l = {
          id: 'destinations/webhook',
          title: 'Webhook',
          description: 'A destination connector for Webhook',
          source: '@site/versioned_docs/version-0.0.1/destinations/webhook.md',
          sourceDirName: 'destinations',
          slug: '/destinations/webhook',
          permalink: '/docs/destinations/webhook',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'webhook',
            title: 'Webhook',
            description: 'A destination connector for Webhook',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Weaviate',
            permalink: '/docs/destinations/weaviate',
          },
          next: {
            title: 'Yellowbrick',
            permalink: '/docs/destinations/yellowbrick',
          },
        },
        d = {},
        h = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Supported Sync Modes', id: 'supported-sync-modes', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 2},
          {
            value: 'Step 1: Configure the Webhook URL',
            id: 'step-1-configure-the-webhook-url',
            level: 3,
          },
          {
            value: 'Step 2: Set up the Webhook Destination in Hero Pixel',
            id: 'step-2-set-up-the-webhook-destination-in-hero-pixel',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Common Issues', id: 'common-issues', level: 3},
        ];
      function c(e) {
        const t = {
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
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {id: 'webhook', children: 'Webhook'}),
            '\n',
            (0, o.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'The Webhook destination connector allows you to sync data to any specified webhook endpoint. This connector supports incremental append sync mode, providing an efficient way to send data in real-time or in batches to a webhook.',
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'The Webhook destination connector supports the following sync modes:',
            }),
            '\n',
            (0, o.jsxs)(t.table, {
              children: [
                (0, o.jsx)(t.thead, {
                  children: (0, o.jsxs)(t.tr, {
                    children: [
                      (0, o.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, o.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, o.jsxs)(t.tbody, {
                  children: [
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, o.jsx)(t.td, {
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
            (0, o.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, o.jsx)(t.p, {
              children:
                'Each synced record will be posted to the specified webhook URL in the format defined by the webhook body type (JSON, CSV, or Parquet).',
            }),
            '\n',
            (0, o.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, o.jsx)(t.p, {
              children: 'To use the Webhook destination connector, you need:',
            }),
            '\n',
            (0, o.jsxs)(t.ul, {
              children: [
                '\n',
                (0, o.jsx)(t.li, {children: 'A valid webhook URL'}),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, o.jsx)(t.h3, {
              id: 'step-1-configure-the-webhook-url',
              children: 'Step 1: Configure the Webhook URL',
            }),
            '\n',
            (0, o.jsxs)(t.ol, {
              children: [
                '\n',
                (0, o.jsx)(t.li, {
                  children:
                    'Obtain the webhook URL where you want to send the data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h3, {
              id: 'step-2-set-up-the-webhook-destination-in-hero-pixel',
              children: 'Step 2: Set up the Webhook Destination in Hero Pixel',
            }),
            '\n',
            (0, o.jsxs)(t.ol, {
              children: [
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, o.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, o.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, o.jsx)(t.strong, {children: 'Webhook'}),
                    ' from the ',
                    (0, o.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, o.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, o.jsxs)(t.li, {
                          children: [
                            (0, o.jsx)(t.strong, {children: 'Webhook URL'}),
                            ': The webhook endpoint to post data to.',
                          ],
                        }),
                        '\n',
                        (0, o.jsxs)(t.li, {
                          children: [
                            (0, o.jsx)(t.strong, {
                              children: 'Webhook Body Type',
                            }),
                            ': The type of data to post (options: JSON, CSV, Parquet).',
                          ],
                        }),
                        '\n',
                        (0, o.jsxs)(t.li, {
                          children: [
                            (0, o.jsx)(t.strong, {children: 'Batch Size'}),
                            ': The number of records to post in each batch (default is 5000, minimum is 1, maximum is 10000).',
                          ],
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
                    'Click ',
                    (0, o.jsx)(t.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, o.jsx)(t.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, o.jsxs)(t.ul, {
              children: [
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    (0, o.jsx)(t.strong, {children: 'Invalid Webhook URL'}),
                    ': Ensure that the webhook URL is correctly entered and accessible.',
                  ],
                }),
                '\n',
                (0, o.jsxs)(t.li, {
                  children: [
                    (0, o.jsx)(t.strong, {
                      children: 'Batch Size Configuration',
                    }),
                    ': Ensure the batch size is within the allowed range (1 to 10000).',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function a(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => l});
      var o = n(3696);
      const i = {},
        s = o.createContext(i);
      function r(e) {
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
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          o.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

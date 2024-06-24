/*! For license information please see 6c10c253.da9e201d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5278],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        d =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, n) {
        var i,
          r = {},
          c = null,
          l = null;
        for (i in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          o.call(t, i) && !a.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: l,
          props: r,
          _owner: d.current,
        };
      }
      (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    3532: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => c,
        });
      var i = n(2540),
        s = n(3023);
      const r = {id: 'duckdb', title: 'DuckDB', description: 'desc'},
        o = 'DuckDB',
        d = {
          id: 'destinations/duckdb',
          title: 'DuckDB',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/duckdb.md',
          sourceDirName: 'destinations',
          slug: '/destinations/duckdb',
          permalink: '/docs/destinations/duckdb',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/duckdb.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'duckdb', title: 'DuckDB', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Databricks',
            permalink: '/docs/destinations/databricks',
          },
          next: {title: 'DynamoDB', permalink: '/docs/destinations/dynamodb'},
        },
        a = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Use with MotherDuck', id: 'use-with-motherduck', level: 2},
          {
            value: 'Specifying a MotherDuck Database',
            id: 'specifying-a-motherduck-database',
            level: 3,
          },
          {
            value: 'Authenticating to MotherDuck',
            id: 'authenticating-to-motherduck',
            level: 3,
          },
          {value: 'Sync Overview', id: 'sync-overview', level: 3},
          {value: 'Output schema', id: 'output-schema', level: 4},
          {value: 'Features', id: 'features', level: 4},
          {
            value: 'Performance consideration',
            id: 'performance-consideration',
            level: 4,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {
            value:
              'Error message <code>Request failed:  (UNAVAILABLE, RPC &#39;GET_WELCOME_PACK&#39;)</code>',
            id: 'error-message-request-failed--unavailable-rpc-get_welcome_pack',
            level: 3,
          },
        ];
      function l(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
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
            (0, i.jsx)(t.h1, {id: 'duckdb', children: 'DuckDB'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                (0, i.jsx)(t.a, {
                  href: 'https://duckdb.org/',
                  children: 'DuckDB',
                }),
                ' is an in-process SQL OLAP database management system and this destination is meant to use locally if you have multiple smaller sources such as GitHub repos, some social media and local CSVs or files you want to run analytics workloads on. This destination writes data to the ',
                (0, i.jsx)(t.a, {
                  href: 'https://motherduck.com',
                  children: 'MotherDuck',
                }),
                ' service, or to a file on the ',
                (0, i.jsx)(t.em, {children: 'local'}),
                ' filesystem on the host running Airbyte.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'use-with-motherduck',
              children: 'Use with MotherDuck',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'This DuckDB destination is compatible with ',
                (0, i.jsx)(t.a, {
                  href: 'https://motherduck.com',
                  children: 'MotherDuck',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'specifying-a-motherduck-database',
              children: 'Specifying a MotherDuck Database',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'To specify a MotherDuck-hosted database as your destination, simply provide your database uri with the normal ',
                (0, i.jsx)(t.code, {children: 'md:'}),
                ' database prefix in the ',
                (0, i.jsx)(t.code, {children: 'destination_path'}),
                ' configuration option.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.admonition, {
              type: 'caution',
              children: (0, i.jsxs)(t.p, {
                children: [
                  'We do not recommend providing your API token in the ',
                  (0, i.jsx)(t.code, {children: 'md:'}),
                  ' connection string, as this may cause your token to be printed to execution logs. Please use the ',
                  (0, i.jsx)(t.code, {children: 'MotherDuck API Key'}),
                  ' setting instead.',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'authenticating-to-motherduck',
              children: 'Authenticating to MotherDuck',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'For authentication, you can can provide your ',
                (0, i.jsx)(t.a, {
                  href: 'https://motherduck.com/docs/authenticating-to-motherduck/#syntax',
                  children: 'MotherDuck Service Credential',
                }),
                ' as the ',
                (0, i.jsx)(t.code, {children: 'motherduck_api_key'}),
                ' configuration option.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'sync-overview', children: 'Sync Overview'}),
            '\n',
            (0, i.jsx)(t.h4, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, i.jsx)(t.p, {children: 'Each table will contain 3 columns:'}),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': a uuid assigned by Airbyte to each event that is processed.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {id: 'features', children: 'Features'}),
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
                        children: 'Supported',
                      }),
                      (0, i.jsx)(t.th, {style: {textAlign: 'left'}}),
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
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
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
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'performance-consideration',
              children: 'Performance consideration',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'This integration will be constrained by the speed at which your filesystem accepts writes.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, i.jsxs)(t.h3, {
              id: 'error-message-request-failed--unavailable-rpc-get_welcome_pack',
              children: [
                'Error message ',
                (0, i.jsx)(t.code, {
                  children:
                    "Request failed:  (UNAVAILABLE, RPC 'GET_WELCOME_PACK')",
                }),
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'This error may indicate that you are connecting with a ',
                (0, i.jsx)(t.code, {children: '0.10.x'}),
                ' DuckDB client (as per DuckDB Destination connector versions ',
                (0, i.jsx)(t.code, {children: '>=0.4.0'}),
                ') and your database has not yet been upgraded to a version ',
                (0, i.jsx)(t.code, {children: '>=0.10.x'}),
                ". To resolve this, you'll need to manually upgrade your database or revert to a previous version of the DuckDB Destination connector.",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(l, {...e})})
          : l(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => o, x: () => d});
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
      function d(e) {
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

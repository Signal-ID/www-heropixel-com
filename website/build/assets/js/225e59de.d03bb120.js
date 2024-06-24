/*! For license information please see 225e59de.d03bb120.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2326],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        o =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var i,
          r = {},
          a = null,
          d = null;
        for (i in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          l.call(t, i) && !c.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: a,
          ref: d,
          props: r,
          _owner: o.current,
        };
      }
      (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    2403: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => a,
        });
      var i = n(2540),
        s = n(3023);
      const r = {id: 'clickhouse', title: 'ClickHouse', description: 'desc'},
        l = 'ClickHouse',
        o = {
          id: 'destinations/clickhouse',
          title: 'ClickHouse',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/clickhouse.md',
          sourceDirName: 'destinations',
          slug: '/destinations/clickhouse',
          permalink: '/docs/destinations/clickhouse',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/clickhouse.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'clickhouse',
            title: 'ClickHouse',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {title: 'Chroma', permalink: '/docs/destinations/chroma'},
          next: {
            title: 'ConvertKit',
            permalink: '/docs/destinations/convertkit',
          },
        },
        c = {},
        a = [
          {value: 'Features', id: 'features', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 4},
          {
            value: 'Getting Started (Airbyte Cloud)',
            id: 'getting-started-airbyte-cloud',
            level: 2,
          },
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 4},
          {
            value: 'Configure Network Access',
            id: 'configure-network-access',
            level: 4,
          },
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {value: 'Target Database', id: 'target-database', level: 4},
          {
            value: 'Setup the ClickHouse Destination in Hero Pixel',
            id: 'setup-the-clickhouse-destination-in-hero-pixel',
            level: 3,
          },
          {value: 'Naming Conventions', id: 'naming-conventions', level: 2},
        ];
      function d(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
          pre: 'pre',
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
            (0, i.jsx)(t.h1, {id: 'clickhouse', children: 'ClickHouse'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'features', children: 'Features'}),
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
                        children: 'Supported?(Yes/No)',
                      }),
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
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
                          children: 'Yes',
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
                          children: 'Yes',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Each stream will be output into its own table in ClickHouse. Each table will contain 3 columns:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': a uuid assigned by Airbyte to each event that is processed. The column type in ClickHouse is ',
                    (0, i.jsx)(t.code, {children: 'String'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source. The column type in ClickHouse is ',
                    (0, i.jsx)(t.code, {children: 'DateTime64'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data. The column type in ClickHouse is ',
                    (0, i.jsx)(t.code, {children: 'String'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'getting-started-airbyte-cloud',
              children: 'Getting Started (Airbyte Cloud)',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Hero Pixel only supports connecting to your ClickHouse instance with SSL or TLS encryption, which is supported by ',
                (0, i.jsx)(t.a, {
                  href: 'https://github.com/ClickHouse/clickhouse-jdbc',
                  children: 'ClickHouse JDBC driver',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, i.jsx)(t.h4, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, i.jsx)(t.p, {
              children: "To use the ClickHouse destination, you'll need:",
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'A ClickHouse server version 21.8.10.19 or above',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configure-network-access',
              children: 'Configure Network Access',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Make sure your ClickHouse database can be accessed by Hero Pixel. If your database is within a VPC, you may need to allow access from the Hero Pixel IPs.',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'permissions',
              children: (0, i.jsx)(t.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You need a ClickHouse user with the following permissions:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'can create tables and write rows.',
                }),
                '\n',
                (0, i.jsx)(t.li, {children: 'can create databases e.g:'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children: 'You can create such a user by running:',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                children:
                  'GRANT CREATE ON * TO heropixel_user;\nGRANT CREATE ON default * TO heropixel_user;\nGRANT DROP ON * TO heropixel_user;\nGRANT TRUNCATE ON * TO heropixel_user;\nGRANT INSERT ON * TO heropixel_user;\nGRANT SELECT ON * TO heropixel_user;\nGRANT CREATE DATABASE ON airbyte_internal.* TO heropixel_user;\nGRANT CREATE TABLE ON airbyte_internal.* TO heropixel_user;\nGRANT DROP ON airbyte_internal.* TO heropixel_user;\nGRANT TRUNCATE ON airbyte_internal.* TO heropixel_user;\nGRANT INSERT ON airbyte_internal.* TO heropixel_user;\nGRANT SELECT ON airbyte_internal.* TO heropixel_user;\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can also use a pre-existing user but we highly recommend creating a dedicated user for Hero Pixel.',
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'target-database',
              children: 'Target Database',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You will need to choose an existing database or create a new database that will be used to store synced data from Hero Pixel.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'setup-the-clickhouse-destination-in-hero-pixel',
              children: 'Setup the ClickHouse Destination in Hero Pixel',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "You should now have all the requirements needed to configure ClickHouse as a destination in the UI. You'll need the following information to configure the ClickHouse destination:",
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.strong, {children: 'Host'}),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.strong, {children: 'Port'}),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.strong, {children: 'Username'}),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.strong, {children: 'Password'}),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.strong, {children: 'Database'}),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.strong, {children: 'Jdbc_url_params'}),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'naming-conventions',
              children: 'Naming Conventions',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'From ',
                (0, i.jsx)(t.a, {
                  href: 'https://clickhouse.com/docs/en/sql-reference/syntax/',
                  children: 'ClickHouse SQL Identifiers syntax',
                }),
                ':',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'SQL identifiers and key words must begin with a letter (a-z, but also letters with diacritical marks and non-Latin letters) or an underscore (_).',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Subsequent characters in an identifier or key word can be letters, underscores, digits (0-9).',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Identifiers can be quoted or non-quoted. The latter is preferred.',
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'If you want to use identifiers the same as keywords or you want to use other symbols in identifiers, quote it using double quotes or backticks, for example, "id", ',
                    (0, i.jsx)(t.code, {children: 'id'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'If you want to write portable applications you are advised to always quote a particular name or never quote it.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "Therefore, Hero Pixel's ClickHouse destination will create tables and schemas using the Unquoted identifiers when possible or fallback to Quoted Identifiers if the names are containing special characters.",
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => l, x: () => o});
      var i = n(3696);
      const s = {},
        r = i.createContext(s);
      function l(e) {
        const t = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function o(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

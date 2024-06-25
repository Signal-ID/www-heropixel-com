/*! For license information please see 8fa4bbfb.43c45643.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4390],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        o =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var s,
          i = {},
          l = null,
          d = null;
        for (s in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          a.call(t, s) && !c.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: d,
          props: i,
          _owner: o.current,
        };
      }
      (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    3570: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => l,
        });
      var s = n(2540),
        r = n(3023);
      const i = {id: 'iceberg', title: 'Iceberg', description: 'desc'},
        a = 'Iceberg',
        o = {
          id: 'destinations/iceberg',
          title: 'Iceberg',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/iceberg.md',
          sourceDirName: 'destinations',
          slug: '/destinations/iceberg',
          permalink: '/docs/destinations/iceberg',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/iceberg.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'iceberg', title: 'Iceberg', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'HubSpot', permalink: '/docs/destinations/hubspot'},
          next: {title: 'Kafka', permalink: '/docs/destinations/kafka'},
        },
        c = {},
        l = [
          {value: 'Sync overview', id: 'sync-overview', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Features', id: 'features', level: 3},
          {
            value: 'Performance considerations',
            id: 'performance-considerations',
            level: 3,
          },
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
        ];
      function d(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {id: 'iceberg', children: 'Iceberg'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This page guides you through the process of setting up the Iceberg destination connector.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'The incoming Hero Pixel data is structured in keyspaces and tables and is partitioned and replicated\nacross different nodes in the cluster. This connector maps an incoming ',
                (0, s.jsx)(t.code, {children: 'stream'}),
                ' to an Iceberg\n',
                (0, s.jsx)(t.code, {children: 'table'}),
                ' and a ',
                (0, s.jsx)(t.code, {children: 'namespace'}),
                ' to an Iceberg ',
                (0, s.jsx)(t.code, {children: 'database'}),
                '. Fields in the Hero Pixel message become different\ncolumns in the Iceberg tables. Each table will contain the following columns.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': A random generated uuid.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was received from the data source.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json text representing the extracted data.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'features', children: 'Features'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This section should contain a table with the following format:',
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
                        children: 'Supported?(Yes/No)',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
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
                          children: '\u2705',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Replicate Incremental Deletes',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: '\u274c',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SSH Tunnel Support',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: '\u274c',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'performance-considerations',
              children: 'Performance considerations',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Every ten thousand pieces of incoming Hero Pixel data in a stream \u2014\u2014\u2014\u2014we call it a batch, would produce\none data file (Parquet/Avro) in an Iceberg table. As the quantity of Iceberg data files grows, it causes an\nunnecessary amount of metadata and less efficient queries from file open costs. Iceberg provides\ndata file compaction action to improve this case, you can read more about compaction\n',
                (0, s.jsx)(t.a, {
                  href: 'https://iceberg.apache.org/docs/latest/maintenance/#compact-data-files',
                  children: 'HERE',
                }),
                '. This connector also\nprovides auto compact action when stream closes, by ',
                (0, s.jsx)(t.code, {children: 'Auto compact data files'}),
                ' property. Any you can\nspecify the target size of compacted Iceberg data file.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Iceberg catalog'}),
                    ' : Iceberg uses ',
                    (0, s.jsx)(t.code, {children: 'catalog'}),
                    ' to manage tables. this connector already supports:',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.a, {
                              href: 'https://iceberg.apache.org/docs/latest/hive/#global-hive-catalog',
                              children: 'HiveCatalog',
                            }),
                            ' connects to a\n',
                            (0, s.jsx)(t.strong, {children: 'Hive metastore'}),
                            ' to keep track of Iceberg tables.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.a, {
                              href: 'https://iceberg.apache.org/docs/latest/java-api-quickstart/#using-a-hadoop-catalog',
                              children: 'HadoopCatalog',
                            }),
                            '\ndoesn\u2019t need to connect to a Hive MetaStore, but can only be used with ',
                            (0, s.jsx)(t.strong, {
                              children: 'HDFS or similar file\nsystems',
                            }),
                            ' that support atomic rename. For ',
                            (0, s.jsx)(t.code, {children: 'HadoopCatalog'}),
                            ', this connector use ',
                            (0, s.jsx)(t.strong, {children: 'Storage Config'}),
                            '\n(S3 or HDFS) to manage Iceberg tables.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.a, {
                              href: 'https://iceberg.apache.org/docs/latest/jdbc/',
                              children: 'JdbcCatalog',
                            }),
                            ' uses a table in a relational\ndatabase to manage Iceberg tables through JDBC. So far, this connector supports ',
                            (0, s.jsx)(t.strong, {children: 'PostgreSQL'}),
                            '\nonly.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.a, {
                              href: 'https://iceberg.apache.org/docs/latest/spark-configuration/#catalog-configuration',
                              children: 'RESTCatalog',
                            }),
                            '\nconnects to a REST server, which manages Iceberg tables.',
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
                    (0, s.jsx)(t.strong, {children: 'Storage medium'}),
                    ' means where Iceberg data files storages in. So far, this connector supports\n',
                    (0, s.jsx)(t.strong, {children: 'S3/S3N/S3N'}),
                    ' object-storage. When using the RESTCatalog, it is possible to have storage be\nmanaged by the server.',
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
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => a, x: () => o});
      var s = n(3696);
      const r = {},
        i = s.createContext(r);
      function a(e) {
        const t = s.useContext(i);
        return s.useMemo(
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
              ? e.components(r)
              : e.components || r
            : a(e.components)),
          s.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

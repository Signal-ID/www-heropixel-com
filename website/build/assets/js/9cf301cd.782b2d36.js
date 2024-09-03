/*! For license information please see 9cf301cd.782b2d36.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4258],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        o =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var s,
          r = {},
          d = null,
          c = null;
        for (s in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          l.call(n, s) && !a.hasOwnProperty(s) && (r[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === r[s] && (r[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: o.current,
        };
      }
      (n.Fragment = r), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    3919: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => d,
        });
      var s = t(2540),
        i = t(3023);
      const r = {id: 'dynamodb', title: 'DynamoDB', description: 'desc'},
        l = 'DynamoDB',
        o = {
          id: 'destinations/dynamodb',
          title: 'DynamoDB',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/dynamodb.md',
          sourceDirName: 'destinations',
          slug: '/destinations/dynamodb',
          permalink: '/docs/destinations/dynamodb',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {id: 'dynamodb', title: 'DynamoDB', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'DuckDB', permalink: '/docs/destinations/duckdb'},
          next: {
            title: 'Elasticsearch',
            permalink: '/docs/destinations/elasticsearch',
          },
        },
        a = {},
        d = [
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
          {value: 'Setup guide', id: 'setup-guide', level: 3},
        ];
      function c(e) {
        const n = {
          a: 'a',
          code: 'code',
          em: 'em',
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
            (0, s.jsx)(n.h1, {id: 'dynamodb', children: 'DynamoDB'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'This destination writes data to AWS DynamoDB.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The HeroPixelDynamoDB destination allows you to sync data to AWS DynamoDB. Each stream is written to\nits own table under the DynamoDB.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(n.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Each stream will be output into its own DynamoDB table. Each table will a collections of ',
                (0, s.jsx)(n.code, {children: 'json'}),
                '\nobjects containing 4 fields:',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_ab_id'}),
                    ': a uuid assigned by HeroPixelto each event that is processed.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the extracted data.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: 'sync_time'}),
                    ': a timestamp representing when the sync up task be triggered.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'features', children: 'Features'}),
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
                        style: {textAlign: 'center'},
                        children: 'Support',
                      }),
                      (0, s.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Warning: this mode deletes all previously synced data in the configured DynamoDB table.',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'center'},
                          children: '\u274c',
                        }),
                        (0, s.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Namespace will be used as part of the table name.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'performance-considerations',
              children: 'Performance considerations',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'This connector by default uses 10 capacity units for both Read and Write in DynamoDB tables. Please\nprovision more capacity units in the DynamoDB console when there are performance constraints.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Allow connections from HeroPixelserver to your AWS DynamoDB tables (if they exist in separate\nVPCs).',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'The credentials for AWS DynamoDB (for the COPY strategy).',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Fill up DynamoDB info',
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {
                              children: 'DynamoDB Endpoint',
                            }),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'Leave empty if using AWS DynamoDB, fill in endpoint URL if using customized endpoint.',
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
                            (0, s.jsx)(n.strong, {
                              children: 'DynamoDB Table Name',
                            }),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'The name prefix of the DynamoDB table to store the extracted data. The table name is \\',
                                    (0, s.jsx)(n.em, {children: '\\'}),
                                    '.',
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
                            (0, s.jsx)(n.strong, {children: 'DynamoDB Region'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children: 'The region of the DynamoDB.',
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
                            (0, s.jsx)(n.strong, {children: 'Access Key Id'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'See\n',
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys',
                                      children: 'this',
                                    }),
                                    '\non how to generate an access key.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'We recommend creating an HeroPixelspecific user. This user will require\n',
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_specific-table.html',
                                      children: 'read and write permissions',
                                    }),
                                    '\nto the DynamoDB table.',
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
                            (0, s.jsx)(n.strong, {
                              children: 'Secret Access Key',
                            }),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'Corresponding key to the above key id.',
                                }),
                                '\n',
                              ],
                            }),
                            '\n',
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
                    'Make sure your DynamoDB tables are accessible from HeroPixel',
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(n.li, {
                          children: 'This depends on your networking setup.',
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            "You can check AWS DynamoDB documentation with a tutorial on how to properly configure your\nDynamoDB's access\n",
                            (0, s.jsx)(n.a, {
                              href: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-overview.html',
                              children: 'here',
                            }),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, s.jsx)(n.li, {
                          children:
                            'The easiest way to verify if HeroPixelis able to connect to your DynamoDB tables is via the check\nconnection tool in the UI.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => l, x: () => o});
      var s = t(3696);
      const i = {},
        r = s.createContext(i);
      function l(e) {
        const n = s.useContext(r);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : l(e.components)),
          s.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

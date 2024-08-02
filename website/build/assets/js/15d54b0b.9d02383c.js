/*! For license information please see 15d54b0b.9d02383c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5780],
  {
    2192: (e, t, s) => {
      var l = s(3696),
        r = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, s) {
        var l,
          n = {},
          c = null,
          o = null;
        for (l in (void 0 !== s && (c = '' + s),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (o = t.ref),
        t))
          i.call(t, l) && !d.hasOwnProperty(l) && (n[l] = t[l]);
        if (e && e.defaultProps)
          for (l in (t = e.defaultProps)) void 0 === n[l] && (n[l] = t[l]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: o,
          props: n,
          _owner: a.current,
        };
      }
      (t.Fragment = n), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, s) => {
      e.exports = s(2192);
    },
    1474: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => d,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => n,
          metadata: () => a,
          toc: () => c,
        });
      var l = s(2540),
        r = s(3023);
      const n = {
          id: 'starburst-galaxy',
          title: 'Starburst Galaxy',
          description: 'starburst-galaxy',
        },
        i = 'Starburst Galaxy destination user guide',
        a = {
          id: 'destinations/starburst-galaxy',
          title: 'Starburst Galaxy',
          description: 'starburst-galaxy',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/starburst-galaxy.md',
          sourceDirName: 'destinations',
          slug: '/destinations/starburst-galaxy',
          permalink: '/docs/destinations/starburst-galaxy',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'starburst-galaxy',
            title: 'Starburst Galaxy',
            description: 'starburst-galaxy',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Snowflake',
            permalink: '/docs/destinations/snowflake',
          },
          next: {title: 'Teradata', permalink: '/docs/destinations/teradata'},
        },
        d = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Features', id: 'features', level: 2},
          {value: 'Data storage', id: 'data-storage', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Staging files', id: 'staging-files', level: 2},
          {value: 'S3', id: 's3', level: 3},
          {
            value: 'Target Iceberg SQL table',
            id: 'target-iceberg-sql-table',
            level: 2,
          },
          {value: 'Output schema', id: 'output-schema', level: 2},
          {value: 'Datatype support', id: 'datatype-support', level: 3},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
        ];
      function o(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
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
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(t.h1, {
              id: 'starburst-galaxy-destination-user-guide',
              children: 'Starburst Galaxy destination user guide',
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                'The Starburst Galaxy destination syncs data to Starburst Galaxy ',
                (0, l.jsx)(t.a, {
                  href: 'https://docs.starburst.io/starburst-galaxy/sql/great-lakes.html',
                  children: 'great lake catalogs',
                }),
                '\nin ',
                (0, l.jsx)(t.a, {
                  href: 'https://iceberg.apache.org/',
                  children: 'Apache Iceberg',
                }),
                ' table format. Each stream is written to its own Iceberg table.',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'features', children: 'Features'}),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Supported',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Overwrite Sync',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, l.jsx)(t.strong, {children: 'Warning'}),
                            ': this mode deletes all previously synced data in the destination table.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Append Sync',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Append + Deduped',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u274c',
                        }),
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SSL',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SSL is enabled.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'data-storage', children: 'Data storage'}),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                'Starburst Galaxy supports various ',
                (0, l.jsx)(t.a, {
                  href: 'https://docs.starburst.io/starburst-galaxy/catalogs/index.html#object-storage',
                  children: 'object storages',
                }),
                ';\nhowever, only Amazon S3 is supported by this connector.',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Category',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Parameter',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Starburst Galaxy',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {children: 'Hostname'}),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Required. Located in the ',
                            (0, l.jsx)(t.strong, {children: 'Connection info'}),
                            ' section of the ',
                            (0, l.jsx)(t.a, {
                              href: 'https://docs.starburst.io/starburst-galaxy/clusters/index.html#manage-clusters',
                              children: 'view clusters',
                            }),
                            ' pane in Starburst Galaxy.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {children: 'Port'}),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Optional. Located in the ',
                            (0, l.jsx)(t.strong, {children: 'Connection info'}),
                            ' section of the ',
                            (0, l.jsx)(t.a, {
                              href: 'https://docs.starburst.io/starburst-galaxy/clusters/index.html#manage-clusters',
                              children: 'view clusters',
                            }),
                            ' pane in Starburst Galaxy. Defaults to ',
                            (0, l.jsx)(t.code, {children: '443'}),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {children: 'User'}),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Required. Galaxy user found in the ',
                            (0, l.jsx)(t.strong, {children: 'Connection info'}),
                            ' section of the ',
                            (0, l.jsx)(t.a, {
                              href: 'https://docs.starburst.io/starburst-galaxy/clusters/index.html#manage-clusters',
                              children: 'view clusters',
                            }),
                            ' pane in Starburst Galaxy.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {children: 'Password'}),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Required. Password for the specified Galaxy user.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Amazon S3 catalog',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Required. Name of the ',
                            (0, l.jsx)(t.a, {
                              href: 'https://docs.starburst.io/starburst-galaxy/catalogs/s3.html',
                              children: 'Amazon S3 catalog',
                            }),
                            ' created in the Galaxy domain.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Amazon S3 catalog schema',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Optional. The default Starburst Galaxy Amazon S3 catalog schema where tables are written to if the source does not specify a namespace. Each data stream is written to a table in this schema. Defaults to ',
                            (0, l.jsx)(t.code, {children: 'public'}),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Staging Object Store - Amazon S3',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Bucket name',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Required. Name of the bucket where the staging data is stored.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Bucket path',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Required. Sets the subdirectory of the specified S3 bucket used for storing staging data.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Bucket region',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Required. Sets the region of the specified S3 bucket.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Access key',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Required. AWS/Minio credential.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Secret key',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Required. AWS/Minio credential.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'General',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: 'Purge staging Iceberg table',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'boolean',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Optional. Indicates that staging Iceberg table is purged after a data sync is complete. Enabled by default. Disable it for debugging purposes only.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'staging-files', children: 'Staging files'}),
            '\n',
            (0, l.jsx)(t.h3, {id: 's3', children: 'S3'}),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                'Data streams are written to a temporary Iceberg table, and then loaded into Amazon S3 Starburst Galaxy catalog in the Iceberg table format.\nStaging table is deleted after a sync is complete if the ',
                (0, l.jsx)(t.code, {children: 'Purge staging Iceberg table'}),
                ' is enabled.\nThe following is an example of a full path for a staging file:',
              ],
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-text',
                children:
                  's3://<bucket-name>/<bucket-path>/<namespace/schema>/<temp Iceberg table name {_airbyte_tmp_random-three-chars_stream-name}>\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, {children: 'For example:'}),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-text',
                children:
                  's3://galaxy_bucket/data_output_path/test_schema/_airbyte_tmp_qey_user\n     \u2191              \u2191                     \u2191                \u2191\n     |              |                     |                temporary Iceberg table holding data\n     |              |                     source namespace or provided schema name\n     |              |\n     |              bucket path\n     bucket name\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.h2, {
              id: 'target-iceberg-sql-table',
              children: 'Target Iceberg SQL table',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Streams are synced in the Starburst Galaxy Amazon S3 catalog with Iceberg table format.',
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Each table in the output schema has the following columns:',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Column',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Description',
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: '_airbyte_ab_id',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'varchar',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'UUID.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: '_airbyte_emitted_at',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'timestamp(6)',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Data emission timestamp.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Data fields from the source stream',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'various',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'All the fields from the source stream will be populated as an individual column in the target table.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: '_airbyte_additional_properties',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'map(varchar, varchar)',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Additional properties.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                "The Hero Pixel data stream's JSON schema is converted to an Avro schema. The JSON object is then converted to an Avro record;\nthe Avro record is written to a staging Iceberg table. As the data stream can be generated from any data source,\nthe JSON-to-Avro conversion process has arbitrary rules and limitations.",
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'datatype-support',
              children: 'Datatype support',
            }),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                'Learn more about ',
                (0, l.jsx)(t.a, {
                  href: 'https://docs.starburst.io/latest/connector/iceberg.html#iceberg-to-trino-type-mapping',
                  children: 'Starburst Galaxy Iceberg type mapping',
                }),
                '.',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, l.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, l.jsxs)(t.ul, {
              children: [
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.starburst.io/starburst-galaxy/clusters/index.html',
                      children: 'Starburst Galaxy cluster',
                    }),
                    '. Required credentials are found in the ',
                    (0, l.jsx)(t.strong, {children: 'Connection info'}),
                    ' section of the ',
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.starburst.io/starburst-galaxy/clusters/index.html#manage-clusters',
                      children: 'view clusters',
                    }),
                    ' page',
                  ],
                }),
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    'A ',
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.starburst.io/starburst-galaxy/catalogs/s3.html',
                      children: 'Starburst Galaxy S3 catalog',
                    }),
                    ' created within the Galaxy domain, and ',
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.starburst.io/starburst-galaxy/catalogs/index.html#add-a-catalog-to-a-cluster',
                      children: 'attached to a running cluster',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys',
                      children: 'Credentials for S3 bucket',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    'Grant S3 bucket ',
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.starburst.io/starburst-galaxy/security/privileges.html#location-privileges-',
                      children: 'location privileges',
                    }),
                    ' to the role user is assigned to.',
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
          ? (0, l.jsx)(t, {...e, children: (0, l.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, t, s) => {
      s.d(t, {R: () => i, x: () => a});
      var l = s(3696);
      const r = {},
        n = l.createContext(r);
      function i(e) {
        const t = l.useContext(n);
        return l.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          l.createElement(n.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

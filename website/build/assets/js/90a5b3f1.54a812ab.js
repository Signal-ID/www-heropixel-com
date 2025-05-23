/*! For license information please see 90a5b3f1.54a812ab.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6432],
  {
    2192: (e, t, s) => {
      var n = s(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, s) {
        var n,
          r = {},
          d = null,
          o = null;
        for (n in (void 0 !== s && (d = '' + s),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (o = t.ref),
        t))
          a.call(t, n) && !c.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: o,
          props: r,
          _owner: l.current,
        };
      }
      (t.Fragment = r), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, s) => {
      e.exports = s(2192);
    },
    7003: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databrick_new_cluster-ebe107ed1070b7c81439c862721f306c.png';
    },
    3748: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_add_external_location-602bd5e04d96f820b2b82856fe425cfe.png';
    },
    6729: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_cluster_connection_details2-5ae9e21d8d489be08483f3bb479953b9.png';
    },
    6249: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_cluster_details_open-554fad837f72d8bfbaba11ecef2aa284.png';
    },
    6422: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_generate_token-a6eaed2a1d9acfca77414655bd689145.png';
    },
    5571: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_new_external_location-e3235d583f300daa88c1a45938bf0c2c.png';
    },
    3016: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_new_metastore-1350d667b628f9a837c91e9d9381e1a5.png';
    },
    2687: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_new_warehouse-1da87ce787e707aafbdfb143a64f98b6.png';
    },
    2548: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_open_sql_warehouse-45c92346a31613a0a1398f4cd9c3aafe.png';
    },
    6536: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_open_worspace-54fcb71a96d4c89ad57d2f9b452c7cc8.png';
    },
    6001: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_sql_warehouse_connection_details-91f70fd5a196d5fd21ade7c83c906fa4.png';
    },
    1835: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databricks_workspace_quciksetup-6495a7120b383a389690c12dce72b90c.png';
    },
    4355: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/databrikcs_metastore_fields-33efe65b3c761bc56abd20f0ff68767e.png';
    },
    7472: (e, t, s) => {
      s.d(t, {A: () => n});
      const n =
        s.p +
        'assets/images/dtabricks_token_user_new-01e5f8918dcc0d95610a75a17ddc63fb.png';
    },
    9029: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      var n = s(2540),
        i = s(3023);
      const r = {id: 'databricks', title: 'Databricks', description: 'desc'},
        a = 'Databricks Lakehouse',
        l = {
          id: 'destinations/databricks',
          title: 'Databricks',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/databricks.md',
          sourceDirName: 'destinations',
          slug: '/destinations/databricks',
          permalink: '/docs/destinations/databricks',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 'databricks',
            title: 'Databricks',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {title: 'Convex', permalink: '/docs/destinations/convex'},
          next: {title: 'DuckDB', permalink: '/docs/destinations/duckdb'},
        },
        c = {},
        d = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Databricks AWS Setup', id: 'databricks-aws-setup', level: 2},
          {
            value: '1. Create a Databricks Workspace',
            id: '1-create-a-databricks-workspace',
            level: 3,
          },
          {
            value: '2. Create a metastore and attach it to workspace',
            id: '2-create-a-metastore-and-attach-it-to-workspace',
            level: 3,
          },
          {
            value: 'Setup storage bucket and IAM role in AWS',
            id: 'setup-storage-bucket-and-iam-role-in-aws',
            level: 4,
          },
          {value: 'Create metastore', id: 'create-metastore', level: 4},
          {
            value: '3. Create Databricks SQL Warehouse',
            id: '3-create-databricks-sql-warehouse',
            level: 3,
          },
          {
            value: '4. Databricks SQL Warehouse connection details',
            id: '4-databricks-sql-warehouse-connection-details',
            level: 3,
          },
          {
            value: '5. Create Databricks Cluster',
            id: '5-create-databricks-cluster',
            level: 3,
          },
          {
            value: '6. Databricks Cluster connection details',
            id: '6-databricks-cluster-connection-details',
            level: 3,
          },
          {
            value: '7. Create Databricks Token',
            id: '7-create-databricks-token',
            level: 3,
          },
          {
            value: '8. Adding External Locations (Optional)',
            id: '8-adding-external-locations-optional',
            level: 3,
          },
          {value: 'HeroPixelSetup', id: 'heropixelsetup', level: 2},
          {value: 'Databricks fields', id: 'databricks-fields', level: 3},
          {value: 'Data Source', id: 'data-source', level: 3},
          {
            value: 'Managed tables data source type',
            id: 'managed-tables-data-source-type',
            level: 4,
          },
          {
            value: 'Amazon S3 data source type (External storage)',
            id: 'amazon-s3-data-source-type-external-storage',
            level: 4,
          },
          {
            value: 'Azure Blob Storage data source type (External storage)',
            id: 'azure-blob-storage-data-source-type-external-storage',
            level: 4,
          },
          {value: 'Sync Mode', id: 'sync-mode', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {
            value: 'Staging Files (Delta Format)',
            id: 'staging-files-delta-format',
            level: 2,
          },
          {value: 'S3', id: 's3', level: 3},
          {value: 'Azure', id: 'azure', level: 3},
          {
            value: 'Unmanaged Spark SQL Table',
            id: 'unmanaged-spark-sql-table',
            level: 2,
          },
          {value: 'Output Schema', id: 'output-schema', level: 2},
          {value: 'Related tutorial', id: 'related-tutorial', level: 2},
        ];
      function o(e) {
        const t = {
          a: 'a',
          blockquote: 'blockquote',
          code: 'code',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          img: 'img',
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'databricks-lakehouse',
              children: 'Databricks Lakehouse',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'This destination syncs data to Delta Lake on Databricks Lakehouse. Each stream is written to its own\n',
                (0, n.jsx)(t.a, {
                  href: 'https://delta.io/',
                  children: 'delta-table',
                }),
                '.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'This connector requires a JDBC driver to connect to the Databricks cluster. By using the driver and\nthe connector, you must agree to the\n',
                (0, n.jsx)(t.a, {
                  href: 'https://databricks.com/jdbc-odbc-driver-license',
                  children: 'JDBC ODBC driver license',
                }),
                '. This means that you can\nonly use this connector to connect third party applications to Apache Spark SQL within a Databricks\noffering using the ODBC and/or JDBC protocols.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Currently, this connector requires 30+MB of memory for each stream. When syncing multiple streams,\nit may run into an out-of-memory error if the allocated memory is too small. This performance\nbottleneck is tracked. Once this issue is resolved, the connector should be able to sync an almost infinite number of streams with less than 500MB of memory.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'databricks-aws-setup',
              children: 'Databricks AWS Setup',
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '1-create-a-databricks-workspace',
              children: '1. Create a Databricks Workspace',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Follow Databricks guide\n',
                    (0, n.jsx)(t.a, {
                      href: 'https://docs.databricks.com/administration-guide/workspace/create-workspace.html#create-a-workspace-using-the-account-console',
                      children: 'Create a workspace using the account console',
                    }),
                    '.',
                    '\n',
                    (0, n.jsxs)(t.blockquote, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.p, {
                          children: [
                            (0, n.jsx)(t.strong, {
                              children: (0, n.jsx)(t.em, {
                                children: 'IMPORTANT:',
                              }),
                            }),
                            " Don't forget to create a\n",
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.databricks.com/administration-guide/cloud-configurations/aws/iam-role.html#create-a-cross-account-iam-role',
                              children: 'cross-account IAM role',
                            }),
                            '\nfor workspaces',
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
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' Alternatively use Databricks quickstart for new workspace\n',
                    (0, n.jsx)(t.img, {
                      src: s(1835).A + '',
                      width: '1470',
                      height: '208',
                    }),
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '2-create-a-metastore-and-attach-it-to-workspace',
              children: '2. Create a metastore and attach it to workspace',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'IMPORTANT:'}),
                    }),
                    ' The metastore should be in the same region as the workspaces you want to use to\naccess the data. Make sure that this matches the region of the cloud storage bucket you created\nearlier.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'setup-storage-bucket-and-iam-role-in-aws',
              children: 'Setup storage bucket and IAM role in AWS',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Follow\n',
                (0, n.jsx)(t.a, {
                  href: 'https://docs.databricks.com/data-governance/unity-catalog/get-started.html#configure-a-storage-bucket-and-iam-role-in-aws',
                  children: 'Configure a storage bucket and IAM role in AWS',
                }),
                '\nto setup AWS bucket with necessary permissions.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'create-metastore',
              children: 'Create metastore',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Login into Databricks ',
                        (0, n.jsx)(t.a, {
                          href: 'https://accounts.cloud.databricks.com/login',
                          children: 'account console',
                        }),
                        ' with admin\npermissions.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Go to Data tab and hit Create metastore button:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(3016).A + '',
                        width: '1479',
                        height: '215',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: 'Provide all necessary data and click Create:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(4355).A + '',
                        width: '801',
                        height: '729',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children: (0, n.jsx)(t.code, {children: 'Name'}),
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.code, {children: 'Region'}),
                            ' The metastore should be in same region as the workspace.',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.code, {children: 'S3 bucket path'}),
                            ' created at\n',
                            (0, n.jsx)(t.a, {
                              href: '#setup-storage-bucket-and-iam-role-in-aws',
                              children:
                                'Setup storage bucket and IAM role in AWS',
                            }),
                            ' step.',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.code, {children: 'IAM role ARN'}),
                            ' created at\n',
                            (0, n.jsx)(t.a, {
                              href: '#setup-storage-bucket-and-iam-role-in-aws',
                              children:
                                'Setup storage bucket and IAM role in AWS',
                            }),
                            ' step.\nExample: ',
                            (0, n.jsx)(t.code, {
                              children:
                                'arn:aws:iam::<AWS_ACCOUNT_ID>:role/<AWS_IAM_ROLE_NAME>',
                            }),
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
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Select the workspaces in ',
                        (0, n.jsx)(t.code, {children: 'Assign to workspaces'}),
                        ' tab and click Assign.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '3-create-databricks-sql-warehouse',
              children: '3. Create Databricks SQL Warehouse',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' If you use Databricks cluster skip this step',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Open the workspace tab and click on created workspace console:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(6536).A + '',
                        width: '1480',
                        height: '221',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Create SQL warehouse:'}),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(2687).A + '',
                        width: '584',
                        height: '492',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {children: 'Switch to SQL tab'}),
                        '\n',
                        (0, n.jsx)(t.li, {children: 'Click New button'}),
                        '\n',
                        (0, n.jsx)(t.li, {children: 'Choose SQL Warehouse'}),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        "After SQL warehouse was created we can it's Connection details to con",
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '4-databricks-sql-warehouse-connection-details',
              children: '4. Databricks SQL Warehouse connection details',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' If you use Databricks cluster skip this step',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Open workspace console.'}),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: 'Go to SQL Warehouse section and open it',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(2548).A + '',
                        width: '961',
                        height: '435',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Open Connection Details tab:'}),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(6001).A + '',
                        width: '879',
                        height: '689',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'IMPORTANT:'}),
                    }),
                    ' ',
                    (0, n.jsx)(t.code, {children: 'Server hostname'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: 'Port'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: 'HTTP path'}),
                    ' are used for HeroPixelconnection',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '5-create-databricks-cluster',
              children: '5. Create Databricks Cluster',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' If you use Databricks SQL Warehouse skip this step',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Open the workspace tab and click on created workspace console:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(6536).A + '',
                        width: '1480',
                        height: '221',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Create Cluster:'}),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(7003).A + '',
                        width: '515',
                        height: '443',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children: 'Switch to Data science & Engineering',
                        }),
                        '\n',
                        (0, n.jsx)(t.li, {children: 'Click New button'}),
                        '\n',
                        (0, n.jsx)(t.li, {children: 'Choose Cluster'}),
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
            (0, n.jsx)(t.h3, {
              id: '6-databricks-cluster-connection-details',
              children: '6. Databricks Cluster connection details',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' If you use Databricks SQL Warehouse skip this step',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Open workspace console.'}),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Go to Compute section under Data science & Engineering and click on cluster link:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(6249).A + '',
                        width: '878',
                        height: '438',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Open Advanced options under Configuration, choose JDBC/ODBC tab:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(6729).A + '',
                        width: '844',
                        height: '795',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.blockquote, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.p, {
                          children: [
                            (0, n.jsx)(t.strong, {
                              children: (0, n.jsx)(t.em, {
                                children: 'IMPORTANT:',
                              }),
                            }),
                            ' ',
                            (0, n.jsx)(t.code, {children: 'Server hostname'}),
                            ', ',
                            (0, n.jsx)(t.code, {children: 'Port'}),
                            ', ',
                            (0, n.jsx)(t.code, {children: 'HTTP path'}),
                            ' are used for HeroPixelconnection',
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
            (0, n.jsx)(t.h3, {
              id: '7-create-databricks-token',
              children: '7. Create Databricks Token',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Open workspace console.'}),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'Open User Settings, go to Access tokens tab and click Generate new token:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(7472).A + '',
                        width: '1595',
                        height: '369',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children:
                        'In the new window put a comment (Optional) and lifetime:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(6422).A + '',
                        width: '419',
                        height: '230',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' ',
                    (0, n.jsx)(t.code, {children: 'Lifetime'}),
                    ' can be set to ',
                    (0, n.jsx)(t.code, {children: '0'}),
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: '8-adding-external-locations-optional',
              children: '8. Adding External Locations (Optional)',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' Skip this step if no external data source is used.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {children: 'Open workspace console.'}),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsxs)(t.p, {
                      children: [
                        'Go to ',
                        (0, n.jsx)(t.code, {children: 'Data'}),
                        ' section, expand on ',
                        (0, n.jsx)(t.code, {children: 'External Location'}),
                        ' and click ',
                        (0, n.jsx)(t.code, {children: 'Create Location'}),
                        ' button:',
                      ],
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(3748).A + '',
                        width: '1606',
                        height: '357',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: 'Fill in the fields and click Create button:',
                    }),
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.img, {
                        src: s(5571).A + '',
                        width: '598',
                        height: '623',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' The new ',
                    (0, n.jsx)(t.code, {children: 'Storage credential'}),
                    ' can be added in the ',
                    (0, n.jsx)(t.code, {children: 'Storage Credentials'}),
                    ' tab or use same\nas for Metastore.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'heropixelsetup',
              children: 'HeroPixelSetup',
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'databricks-fields',
              children: 'Databricks fields',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {
                      children:
                        'Agree to the Databricks JDBC Driver Terms & Conditions',
                    }),
                    ' -\n',
                    (0, n.jsx)(t.a, {
                      href: 'https://www.databricks.com/legal/jdbc-odbc-driver-license',
                      children: 'Databricks JDBC ODBC driver license',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'Server Hostname'}),
                    ' - can be taken from\n',
                    (0, n.jsx)(t.a, {
                      href: '#4-databricks-sql-warehouse-connection-details',
                      children:
                        '4. Databricks SQL Warehouse connection details',
                    }),
                    '\nor ',
                    (0, n.jsx)(t.a, {
                      href: '#6-databricks-cluster-connection-details',
                      children: '6. Databricks Cluster connection details',
                    }),
                    ' steps.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'HTTP Path'}),
                    ' - can be taken from\n',
                    (0, n.jsx)(t.a, {
                      href: '#4-databricks-sql-warehouse-connection-details',
                      children:
                        '4. Databricks SQL Warehouse connection details',
                    }),
                    '\nor ',
                    (0, n.jsx)(t.a, {
                      href: '#6-databricks-cluster-connection-details',
                      children: '6. Databricks Cluster connection details',
                    }),
                    ' steps.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'Port'}),
                    ' - can be taken from\n',
                    (0, n.jsx)(t.a, {
                      href: '#4-databricks-sql-warehouse-connection-details',
                      children:
                        '4. Databricks SQL Warehouse connection details',
                    }),
                    '\nor ',
                    (0, n.jsx)(t.a, {
                      href: '#6-databricks-cluster-connection-details',
                      children: '6. Databricks Cluster connection details',
                    }),
                    ' steps.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'Access Token'}),
                    ' - can be taken from ',
                    (0, n.jsx)(t.a, {
                      href: '#7-create-databricks-token',
                      children: '7. Create Databricks Token',
                    }),
                    ' step.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'data-source', children: 'Data Source'}),
            '\n',
            (0, n.jsx)(t.p, {children: 'You could choose a data source type'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {children: 'Managed tables'}),
                '\n',
                (0, n.jsx)(t.li, {children: 'Amazon S3 (External storage)'}),
                '\n',
                (0, n.jsx)(t.li, {
                  children: 'Azure Blob Storage (External storage)',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'managed-tables-data-source-type',
              children: 'Managed tables data source type',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Please check Databricks documentation about\n',
                (0, n.jsx)(t.a, {
                  href: 'https://docs.databricks.com/lakehouse/data-objects.html#what-is-a-managed-table',
                  children: 'What is managed tables',
                }),
              ],
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'TIP:'}),
                    }),
                    ' There is no addition setup should be done for this type.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'amazon-s3-data-source-type-external-storage',
              children: 'Amazon S3 data source type (External storage)',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'IMPORTANT:'}),
                    }),
                    ' Make sure the ',
                    (0, n.jsx)(t.code, {children: 'External Locations'}),
                    ' has been added to the workspace. Check\n',
                    (0, n.jsx)(t.a, {
                      href: '#8-adding-external-locations-optional',
                      children: 'Adding External Locations',
                    }),
                    ' step.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {children: 'Provide your Amazon S3 data:'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'S3 Bucket Name'}),
                    ' - The bucket name',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'S3 Bucket Path'}),
                    ' - Subdirectory under the above bucket to sync the data into',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'S3 Bucket Region'}),
                    ' - See\n',
                    (0, n.jsx)(t.a, {
                      href: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions',
                      children: 'here',
                    }),
                    '\nfor all region codes.',
                    '\n',
                    (0, n.jsxs)(t.blockquote, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.p, {
                          children: [
                            (0, n.jsx)(t.strong, {
                              children: (0, n.jsx)(t.em, {
                                children: 'IMPORTANT:',
                              }),
                            }),
                            ' The metastore should be in the same region as the workspaces you want to use to\naccess the data. Make sure that this matches the region of the cloud storage bucket you created\nearlier.',
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
                    (0, n.jsx)(t.code, {children: 'S3 Access Key ID'}),
                    ' - Corresponding key to the above key id',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'S3 Secret Access Key'}),
                    ' -',
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            'See\n',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys',
                              children: 'this',
                            }),
                            '\non how to generate an access key.',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            'We recommend creating an HeroPixelspecific user. This user will require\n',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html',
                              children: 'read and write permissions',
                            }),
                            '\nto objects in the bucket.',
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
                    (0, n.jsx)(t.code, {children: 'S3 Filename pattern'}),
                    ' - The pattern allows you to set the file-name format for the S3 staging\nfile(s), next placeholders combinations are currently supported: ',
                    (0, n.jsx)(t.code, {children: '{date}'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: '{date:yyyy_MM}'}),
                    ',\n',
                    (0, n.jsx)(t.code, {children: '{timestamp}'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: '{timestamp:millis}'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: '{timestamp:micros}'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: '{part_number}'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: '{sync_id}'}),
                    ',\n',
                    (0, n.jsx)(t.code, {children: '{format_extension}'}),
                    ". Please, don't use empty space and not supportable placeholders, as they\nwon't be recognized",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'azure-blob-storage-data-source-type-external-storage',
              children:
                'Azure Blob Storage data source type (External storage)',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)(t.strong, {
                      children: (0, n.jsx)(t.em, {children: 'IMPORTANT:'}),
                    }),
                    ' The work in progress.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'sync-mode', children: 'Sync Mode'}),
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
                        style: {textAlign: 'center'},
                        children: 'Support',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Warning: this mode deletes all previously synced data in the configured bucket path.',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u274c',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Category',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Parameter',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
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
                          children: 'Databricks',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Server Hostname',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Required. Example: ',
                            (0, n.jsx)(t.code, {
                              children:
                                'abc-12345678-wxyz.cloud.databricks.com',
                            }),
                            '. See ',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url',
                              children: 'documentation',
                            }),
                            '. Please note that this is the server for the Databricks Cluster. It is different from the SQL Endpoint Cluster.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'HTTP Path',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Required. Example: ',
                            (0, n.jsx)(t.code, {
                              children:
                                'sql/protocolvx/o/1234567489/0000-1111111-abcd90',
                            }),
                            '. See ',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url',
                              children: 'documentation',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Port',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Optional. Default to "443". See ',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.databricks.com/integrations/bi/jdbc-odbc-bi.html#get-server-hostname-port-http-path-and-jdbc-url',
                              children: 'documentation',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Personal Access Token',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Required. Example: ',
                            (0, n.jsx)(t.code, {
                              children: 'dapi0123456789abcdefghij0123456789AB',
                            }),
                            '. See ',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.databricks.com/sql/user/security/personal-access-tokens.html',
                              children: 'documentation',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'General',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Databricks catalog',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Optional. The name of the catalog. If not specified otherwise, the "hive_metastore" will be used.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Database schema',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Optional. The default schema tables are written. If not specified otherwise, the "default" will be used.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Schema evolution',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'boolean',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Optional. The connector enables automatic schema evolution in the destination tables.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Purge Staging Data',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'boolean',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'The connector creates staging files and tables on S3 or Azure. By default, they will be purged when the data sync is complete. Set it to ',
                            (0, n.jsx)(t.code, {children: 'false'}),
                            ' for debugging purposes.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Data Source - S3',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Bucket Name',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Name of the bucket to sync data into.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Bucket Path',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Subdirectory under the above bucket to sync the data into.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Region',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'See ',
                            (0, n.jsx)(t.a, {
                              href: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions',
                              children: 'documentation',
                            }),
                            ' for all region codes.',
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Access Key ID',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'AWS/Minio credential.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Secret Access Key',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'AWS/Minio credential.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'S3 Filename pattern',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'The pattern allows you to set the file-name format for the S3 staging file(s), next placeholders combinations are currently supported: ',
                            (0, n.jsx)(t.code, {children: '{date}'}),
                            ', ',
                            (0, n.jsx)(t.code, {children: '{date:yyyy_MM}'}),
                            ', ',
                            (0, n.jsx)(t.code, {children: '{timestamp}'}),
                            ', ',
                            (0, n.jsx)(t.code, {
                              children: '{timestamp:millis}',
                            }),
                            ', ',
                            (0, n.jsx)(t.code, {
                              children: '{timestamp:micros}',
                            }),
                            ', ',
                            (0, n.jsx)(t.code, {children: '{part_number}'}),
                            ', ',
                            (0, n.jsx)(t.code, {children: '{sync_id}'}),
                            ', ',
                            (0, n.jsx)(t.code, {
                              children: '{format_extension}',
                            }),
                            ". Please, don't use empty space and not supportable placeholders, as they won't recognized.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Data Source - Azure',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Account Name',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Name of the account to sync data into.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Container Name',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Container under the above account to sync the data into.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SAS token',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Shared-access signature token for the above account.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Endpoint domain name',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Usually blob.core.windows.net.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                '\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be\nwiped out before each sync. We recommend you provision a dedicated S3 or Azure resource for this\nsync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'staging-files-delta-format',
              children: 'Staging Files (Delta Format)',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 's3', children: 'S3'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Data streams are first written as staging delta-table (',
                (0, n.jsx)(t.a, {
                  href: 'https://parquet.apache.org/',
                  children: 'Parquet',
                }),
                ' +\n',
                (0, n.jsx)(t.a, {
                  href: 'https://databricks.com/blog/2019/08/21/diving-into-delta-lake-unpacking-the-transaction-log.html',
                  children: 'Transaction Log',
                }),
                ')\nfiles on S3, and then loaded into Databricks delta-tables. All the staging files will be deleted\nafter the sync is done. For debugging purposes, here is the full path for a staging file:',
              ],
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-text',
                children:
                  's3://<bucket-name>/<bucket-path>/<uuid>/<stream-name>\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {children: 'For example:'}),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-text',
                children:
                  's3://testing_bucket/data_output_path/98c450be-5b1c-422d-b8b5-6ca9903727d9/users/_delta_log\n     \u2191              \u2191                \u2191                                    \u2191     \u2191\n     |              |                |                                    |     transaction log\n     |              |                |                                    stream name\n     |              |                database schema\n     |              bucket path\n     bucket name\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'azure', children: 'Azure'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Similarly, streams are first written to a staging location, but the Azure option uses CSV format. A\nstaging table is created from the CSV files.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'unmanaged-spark-sql-table',
              children: 'Unmanaged Spark SQL Table',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Currently, all streams are synced into unmanaged Spark SQL tables. See\n',
                (0, n.jsx)(t.a, {
                  href: 'https://docs.databricks.com/data/tables.html#managed-and-unmanaged-tables',
                  children: 'documentation',
                }),
                ' for\ndetails. In summary, you have full control of the location of the data underlying an unmanaged\ntable. In S3, the full path of each data stream is:',
              ],
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-text',
                children:
                  's3://<bucket-name>/<bucket-path>/<database-schema>/<stream-name>\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {children: 'For example:'}),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-text',
                children:
                  's3://testing_bucket/data_output_path/public/users\n     \u2191              \u2191                \u2191      \u2191\n     |              |                |      stream name\n     |              |                database schema\n     |              bucket path\n     bucket name\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'In Azure, the full path of each data stream is:',
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-text',
                children:
                  'abfss://<container-name>@<account-name>.dfs.core.windows.net/<database-schema>/<stream-name>\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Please keep these data directories on S3/Azure. Otherwise, the corresponding tables will have no\ndata in Databricks.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'Each table will have the following columns:',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Column',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
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
                          children: (0, n.jsx)(t.code, {
                            children: '_airbyte_ab_id',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'UUID.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, n.jsx)(t.code, {
                            children: '_airbyte_emitted_at',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'timestamp',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Data emission timestamp.',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, n.jsx)(t.code, {
                            children: '_airbyte_data',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'JSON',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'The data from your source will be in this column',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Under the hood, an HeroPixeldata stream in Json schema is first converted to an Avro schema, then the\nJson object is converted to an Avro record, and finally the Avro record is outputted to the Parquet\nformat. Because the data stream can come from any data source, the Json to Avro conversion process\nhas arbitrary rules and limitations.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'related-tutorial',
              children: 'Related tutorial',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Suppose you are interested in learning more about the Databricks connector or details on how the\nDelta Lake tables are created.',
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, t, s) => {
      s.d(t, {R: () => a, x: () => l});
      var n = s(3696);
      const i = {},
        r = n.createContext(i);
      function a(e) {
        const t = n.useContext(r);
        return n.useMemo(
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
            : a(e.components)),
          n.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

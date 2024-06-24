/*! For license information please see de7944d1.d606ead4.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6715],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        l = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, t, n) {
        var s,
          i = {},
          o = null,
          c = null;
        for (s in (void 0 !== n && (o = '' + n),
        void 0 !== t.key && (o = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          r.call(t, s) && !d.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: l,
          type: e,
          key: o,
          ref: c,
          props: i,
          _owner: a.current,
        };
      }
      (t.Fragment = i), (t.jsx = o), (t.jsxs = o);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7187: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => o,
        });
      var s = n(2540),
        l = n(3023);
      const i = {
          id: 'aws-datalake',
          title: 'AWS Datalake',
          description: 'desc',
        },
        r = 'AWS Datalake',
        a = {
          id: 'destinations/aws-datalake',
          title: 'AWS Datalake',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/aws-datalake.md',
          sourceDirName: 'destinations',
          slug: '/destinations/aws-datalake',
          permalink: '/docs/destinations/aws-datalake',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/aws-datalake.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'aws-datalake',
            title: 'AWS Datalake',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Azure Blog Storage',
            permalink: '/docs/destinations/azure-blob-storage',
          },
          next: {title: 'BigQuery', permalink: '/docs/destinations/bigquery'},
        },
        d = {},
        o = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Setup guide', id: 'setup-guide', level: 2},
          {value: 'Supported sync modes', id: 'supported-sync-modes', level: 2},
          {value: 'Data type map', id: 'data-type-map', level: 2},
          {value: 'Changelog', id: 'changelog', level: 2},
        ];
      function c(e) {
        const t = {
            a: 'a',
            code: 'code',
            h1: 'h1',
            h2: 'h2',
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
            ...(0, l.R)(),
            ...e.components,
          },
          {Details: n} = t;
        return (
          n ||
            (function (e, t) {
              throw new Error(
                'Expected ' +
                  (t ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Details', !0),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(t.h1, {id: 'aws-datalake', children: 'AWS Datalake'}),
              '\n',
              (0, s.jsx)(t.p, {
                children:
                  'This page contains the setup guide and reference information for the AWS Datalake destination\nconnector.',
              }),
              '\n',
              (0, s.jsxs)(t.p, {
                children: [
                  'The AWS Datalake destination connector allows you to sync data to AWS. It will write data as JSON\nfiles in S3 and will make it available through a\n',
                  (0, s.jsx)(t.a, {
                    href: 'https://docs.aws.amazon.com/lake-formation/latest/dg/governed-tables.html',
                    children: 'Lake Formation Governed Table',
                  }),
                  '\nin the Glue Data Catalog so that the data is available throughout other AWS services such as Athena,\nGlue jobs, EMR, Redshift, etc.',
                ],
              }),
              '\n',
              (0, s.jsx)(t.h2, {
                id: 'prerequisites',
                children: 'Prerequisites',
              }),
              '\n',
              (0, s.jsx)(t.p, {
                children: 'To use this destination connector, you will need:',
              }),
              '\n',
              (0, s.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      '\n',
                      (0, s.jsx)(t.p, {children: 'An AWS account'}),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      '\n',
                      (0, s.jsx)(t.p, {
                        children: 'An S3 bucket where the data will be written',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      '\n',
                      (0, s.jsx)(t.p, {
                        children:
                          'An AWS Lake Formation database where tables will be created (one per stream)',
                      }),
                      '\n',
                    ],
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      '\n',
                      (0, s.jsx)(t.p, {
                        children:
                          'AWS credentials in the form of either the pair Access key ID / Secret key ID or a role with the\nfollowing permissions:',
                      }),
                      '\n',
                      (0, s.jsxs)(t.ul, {
                        children: [
                          '\n',
                          (0, s.jsx)(t.li, {
                            children: 'Writing objects in the S3 bucket',
                          }),
                          '\n',
                          (0, s.jsx)(t.li, {
                            children: 'Updating of the Lake Formation database',
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
              (0, s.jsx)(t.p, {
                children:
                  'Please check the Setup guide below if you need guidance creating those.',
              }),
              '\n',
              (0, s.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
              '\n',
              (0, s.jsx)(t.p, {
                children:
                  "You should now have all the requirements needed to configure AWS Datalake as a destination in the\nUI. You'll need the following information to configure the destination:",
              }),
              '\n',
              (0, s.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      'Aws Account Id : The account ID of your AWS account. You will find the instructions to setup a new\nAWS account\n',
                      (0, s.jsx)(t.a, {
                        href: 'https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/',
                        children: 'here',
                      }),
                      '.',
                    ],
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Aws Region : The region in which your resources are deployed',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Authentication mode : The AWS Datalake connector lets you authenticate with either a user or a\nrole. In both case, you will have to make sure that appropriate policies are in place. Select\n"ROLE" if you are using a role, "USER" if using a user with Access key / Secret Access key.',
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      'Target Role Arn : The name of the role, if "Authentication mode" was "ROLE". You will find the\ninstructions to create a new role\n',
                      (0, s.jsx)(t.a, {
                        href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-service.html',
                        children: 'here',
                      }),
                      '.',
                    ],
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      'Access Key Id : The Access Key ID of the user if "Authentication mode" was "USER". You will find\nthe instructions to create a new user\n',
                      (0, s.jsx)(t.a, {
                        href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html',
                        children: 'here',
                      }),
                      '. Make sure to select\n"Programmatic Access" so that you get secret access keys.',
                    ],
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Secret Access Key : The Secret Access Key ID of the user if "Authentication mode" was "USER"',
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      'S3 Bucket Name : The bucket in which the data will be written. You will find the instructions to\ncreate a new S3 bucket\n',
                      (0, s.jsx)(t.a, {
                        href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html',
                        children: 'here',
                      }),
                      '.',
                    ],
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Target S3 Bucket Prefix : A prefix to prepend to the file name when writing to the bucket',
                  }),
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      'Database : The database in which the tables will be created. You will find the instructions to\ncreate a new Lakeformation Database\n',
                      (0, s.jsx)(t.a, {
                        href: 'https://docs.aws.amazon.com/lake-formation/latest/dg/creating-database.html',
                        children: 'here',
                      }),
                      '.',
                    ],
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, s.jsx)(t.p, {
                children: (0, s.jsx)(t.strong, {
                  children: 'Assigning proper permissions',
                }),
              }),
              '\n',
              (0, s.jsx)(t.p, {
                children:
                  'The policy used by the user or the role must have access to the following services:',
              }),
              '\n',
              (0, s.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, s.jsx)(t.li, {children: 'AWS Lake Formation'}),
                  '\n',
                  (0, s.jsx)(t.li, {children: 'AWS Glue'}),
                  '\n',
                  (0, s.jsx)(t.li, {children: 'AWS S3'}),
                  '\n',
                ],
              }),
              '\n',
              (0, s.jsxs)(t.p, {
                children: [
                  'You can use ',
                  (0, s.jsx)(t.a, {
                    href: 'https://awspolicygen.s3.amazonaws.com/policygen.html',
                    children: 'the AWS policy generator',
                  }),
                  ' to help\nyou generate an appropriate policy.',
                ],
              }),
              '\n',
              (0, s.jsxs)(t.p, {
                children: [
                  'Please also make sure that the role or user you will use has appropriate permissions on the database\nin AWS Lakeformation. You will find more information about Lake Formation permissions in the\n',
                  (0, s.jsx)(t.a, {
                    href: 'https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html',
                    children: 'AWS Lake Formation Developer Guide',
                  }),
                  '.',
                ],
              }),
              '\n',
              (0, s.jsx)(t.h2, {
                id: 'supported-sync-modes',
                children: 'Supported sync modes',
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
                            children: 'Yes',
                          }),
                          (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
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
                            children: 'Yes',
                          }),
                          (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                        ],
                      }),
                      (0, s.jsxs)(t.tr, {
                        children: [
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'Namespaces',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'No',
                          }),
                          (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, s.jsx)(t.h2, {
                id: 'data-type-map',
                children: 'Data type map',
              }),
              '\n',
              (0, s.jsx)(t.p, {
                children:
                  'The Glue tables will be created with schema information provided by the source, i.e : You will find\nthe same columns and types in the destination table as in the source except for the following types\nwhich will be translated for compatibility with the Glue Data Catalog:',
              }),
              '\n',
              (0, s.jsxs)(t.table, {
                children: [
                  (0, s.jsx)(t.thead, {
                    children: (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.th, {
                          style: {textAlign: 'left'},
                          children: 'Type in the source',
                        }),
                        (0, s.jsx)(t.th, {
                          style: {textAlign: 'left'},
                          children: 'Type in the destination',
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
                            children: 'number',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'float',
                          }),
                        ],
                      }),
                      (0, s.jsxs)(t.tr, {
                        children: [
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'integer',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'int',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, s.jsx)(t.h2, {id: 'changelog', children: 'Changelog'}),
              '\n',
              (0, s.jsxs)(n, {
                children: [
                  (0, s.jsx)('summary', {children: 'Expand to review'}),
                  (0, s.jsxs)(t.table, {
                    children: [
                      (0, s.jsx)(t.thead, {
                        children: (0, s.jsxs)(t.tr, {
                          children: [
                            (0, s.jsx)(t.th, {
                              style: {textAlign: 'left'},
                              children: 'Version',
                            }),
                            (0, s.jsx)(t.th, {
                              style: {textAlign: 'left'},
                              children: 'Date',
                            }),
                            (0, s.jsx)(t.th, {
                              style: {textAlign: 'left'},
                              children: 'Subject',
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
                                children: '0.1.10',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-06-22',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Update dependencies',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.9',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-06-04',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  '[autopull] Upgrade base image to v1.2.1',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.8',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-05-20',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  '[autopull] base image + poetry + up_to_date',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.7',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-04-29',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Enable STS Role Credential Refresh for Long Sync',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.6',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-03-22',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Support new state message protocol',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.5',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-01-03',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Add new ap-southeast-3 AWS region',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.4',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2023-10-25',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Upgrade AWSWrangler',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.3',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2023-03-28',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Prefer airbyte type for complex types when available',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.2',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2022-09-26',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Fix schema keyerror and add parquet support',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.1',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2022-04-20',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Fix name of required param in specification',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: (0, s.jsx)(t.code, {
                                  children: '0.1.0',
                                }),
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2022-03-29',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Initial release',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, l.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => a});
      var s = n(3696);
      const l = {},
        i = s.createContext(l);
      function r(e) {
        const t = s.useContext(i);
        return s.useMemo(
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
              ? e.components(l)
              : e.components || l
            : r(e.components)),
          s.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

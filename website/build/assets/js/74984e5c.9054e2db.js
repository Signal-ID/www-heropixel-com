/*! For license information please see 74984e5c.9054e2db.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5672],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        d =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var s,
          r = {},
          a = null,
          c = null;
        for (s in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, s) && !o.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: a,
          ref: c,
          props: r,
          _owner: d.current,
        };
      }
      (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9806: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => a,
        });
      var s = n(2540),
        i = n(3023);
      const r = {id: 'redshift', title: 'Redshift', description: 'redshift'},
        l = 'Redshift',
        d = {
          id: 'destinations/redshift',
          title: 'Redshift',
          description: 'redshift',
          source: '@site/versioned_docs/version-0.0.1/destinations/redshift.md',
          sourceDirName: 'destinations',
          slug: '/destinations/redshift',
          permalink: '/docs/destinations/redshift',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/redshift.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'redshift',
            title: 'Redshift',
            description: 'redshift',
          },
          sidebar: 'integrations',
          previous: {title: 'Redis', permalink: '/docs/destinations/redis'},
          next: {title: 'S3', permalink: '/docs/destinations/s3'},
        },
        o = {},
        a = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'For INSERT strategy:', id: 'for-insert-strategy', level: 3},
          {value: 'For COPY strategy:', id: 'for-copy-strategy', level: 3},
          {
            value: 'Step 1: Set up Redshift',
            id: 'step-1-set-up-redshift',
            level: 2,
          },
          {
            value: 'Permissions in Redshift',
            id: 'permissions-in-redshift',
            level: 3,
          },
          {
            value: 'Optional Use of SSH Bastion Host',
            id: 'optional-use-of-ssh-bastion-host',
            level: 3,
          },
          {
            value: 'Step 2: Set up the destination connector in Hero Pixel',
            id: 'step-2-set-up-the-destination-connector-in-hero-pixel',
            level: 2,
          },
          {value: 'Supported sync modes', id: 'supported-sync-modes', level: 2},
          {
            value: 'Performance considerations',
            id: 'performance-considerations',
            level: 2,
          },
          {
            value: 'Connector-specific features &amp; highlights',
            id: 'connector-specific-features--highlights',
            level: 2,
          },
          {
            value: 'Notes about Redshift Naming Conventions',
            id: 'notes-about-redshift-naming-conventions',
            level: 3,
          },
          {value: 'Standard Identifiers', id: 'standard-identifiers', level: 4},
          {
            value: 'Delimited Identifiers',
            id: 'delimited-identifiers',
            level: 4,
          },
          {
            value: 'Data Size Limitations',
            id: 'data-size-limitations',
            level: 3,
          },
          {value: 'Encryption', id: 'encryption', level: 3},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Data type map', id: 'data-type-map', level: 2},
        ];
      function c(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          ol: 'ol',
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
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {id: 'redshift', children: 'Redshift'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This page guides you through the process of setting up the Redshift destination connector.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The Hero Pixel Redshift destination allows you to sync data to Redshift.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This Redshift destination connector has two replication strategies:',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'INSERT: Replicates data via SQL INSERT queries. This is built on top of the destination-jdbc code\nbase and is configured to rely on JDBC 4.2 standard drivers provided by Amazon via Maven Central\n',
                    (0, s.jsx)(t.a, {
                      href: 'https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42',
                      children: 'here',
                    }),
                    ' as described in\nRedshift documentation\n',
                    (0, s.jsx)(t.a, {
                      href: 'https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-install.html',
                      children: 'here',
                    }),
                    '. ',
                    (0, s.jsx)(t.strong, {
                      children:
                        'Not recommended\nfor production workloads as this does not scale well',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'for-insert-strategy',
              children: 'For INSERT strategy:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Host'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Port'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Username'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Password'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Schema'}),
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Database'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'This database needs to exist within the cluster provided.',
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
                    (0, s.jsx)(t.strong, {children: 'JDBC URL Params'}),
                    ' (optional)',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              start: '2',
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'COPY: Replicates data by first uploading data to an S3 bucket and issuing a COPY command. This is\nthe recommended loading approach described by Redshift\n',
                    (0, s.jsx)(t.a, {
                      href: 'https://docs.aws.amazon.com/redshift/latest/dg/c_best-practices-single-copy-command.html',
                      children: 'best practices',
                    }),
                    '.\nRequires an S3 bucket and credentials. Data is copied into S3 as multiple files with a manifest\nfile.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Hero Pixel automatically picks an approach depending on the given configuration - if S3 configuration\nis present, Hero Pixel will use the COPY strategy and vice versa.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'for-copy-strategy',
              children: 'For COPY strategy:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'S3 Bucket Name'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'See ',
                            (0, s.jsx)(t.a, {
                              href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html',
                              children: 'this',
                            }),
                            ' to\ncreate an S3 bucket.',
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
                    (0, s.jsx)(t.strong, {children: 'S3 Bucket Region'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'Place the S3 bucket and the Redshift cluster in the same region to save on networking costs.',
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
                    (0, s.jsx)(t.strong, {children: 'Access Key Id'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'See\n',
                            (0, s.jsx)(t.a, {
                              href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys',
                              children: 'this',
                            }),
                            '\non how to generate an access key.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'We recommend creating an Hero Pixel-specific user. This user will require\n',
                            (0, s.jsx)(t.a, {
                              href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html',
                              children: 'read and write permissions',
                            }),
                            '\nto objects in the staging bucket.',
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
                    (0, s.jsx)(t.strong, {children: 'Secret Access Key'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(t.li, {
                          children: 'Corresponding key to the above key id.',
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
            (0, s.jsx)(t.p, {children: 'Optional parameters:'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Bucket Path'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'The directory within the S3 bucket to place the staging data. For example, if you set this to\n',
                            (0, s.jsx)(t.code, {
                              children: 'yourFavoriteSubdirectory',
                            }),
                            ', we will place the staging data inside\n',
                            (0, s.jsx)(t.code, {
                              children:
                                's3://yourBucket/yourFavoriteSubdirectory',
                            }),
                            '. If not provided, defaults to the root directory.',
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
                    (0, s.jsx)(t.strong, {children: 'S3 Filename pattern'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'The pattern allows you to set the file-name format for the S3 staging file(s), next placeholders combinations are currently supported: ',
                            (0, s.jsx)(t.code, {children: '{date}'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: '{date:yyyy_MM}'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: '{timestamp}'}),
                            ',\n',
                            (0, s.jsx)(t.code, {
                              children: '{timestamp:millis}',
                            }),
                            ', ',
                            (0, s.jsx)(t.code, {
                              children: '{timestamp:micros}',
                            }),
                            ', ',
                            (0, s.jsx)(t.code, {children: '{part_number}'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: '{sync_id}'}),
                            ', ',
                            (0, s.jsx)(t.code, {
                              children: '{format_extension}',
                            }),
                            ".\nThe pattern you supply will apply to anything under the Bucket Path. If this field is left blank, everything syncs under the Bucket Path. Please, don't use empty space and not supportable placeholders, as they won't recognized.",
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
                    (0, s.jsx)(t.strong, {children: 'Purge Staging Data'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Whether to delete the staging files from S3 after completing the sync. Specifically, the\nconnector will create CSV files named\n',
                            (0, s.jsx)(t.code, {
                              children:
                                'bucketPath/namespace/streamName/syncDate_epochMillis_randomUuid.csv',
                            }),
                            ' containing three columns\n(',
                            (0, s.jsx)(t.code, {children: 'ab_id'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'data'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'emitted_at'}),
                            '). Normally these files are deleted after the ',
                            (0, s.jsx)(t.code, {children: 'COPY'}),
                            ' command\ncompletes; if you want to keep them for other purposes, set ',
                            (0, s.jsx)(t.code, {
                              children: 'purge_staging_data',
                            }),
                            ' to ',
                            (0, s.jsx)(t.code, {children: 'false'}),
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
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'NOTE: S3 staging does not use the SSH Tunnel option for copying data, if configured. SSH Tunnel\nsupports the SQL connection only. S3 is secured through public HTTPS access only. Subsequent typing\nand deduping queries on final table are executed over using provided SSH Tunnel configuration.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'step-1-set-up-redshift',
              children: 'Step 1: Set up Redshift',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, {
                      href: 'https://aws.amazon.com/console/',
                      children: 'Log in',
                    }),
                    " to AWS Management console. If you don't have a AWS\naccount already, you\u2019ll need to\n",
                    (0, s.jsx)(t.a, {
                      href: 'https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/',
                      children: 'create',
                    }),
                    '\none in order to use the API.',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, {children: 'Go to the AWS Redshift service.'}),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, {
                      href: 'https://docs.aws.amazon.com/ses/latest/dg/event-publishing-redshift-cluster.html',
                      children: 'Create',
                    }),
                    " and\nactivate AWS Redshift cluster if you don't have one ready.",
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Optional)\n',
                    (0, s.jsx)(t.a, {
                      href: 'https://aws.amazon.com/premiumsupport/knowledge-center/cannot-connect-redshift-cluster/',
                      children: 'Allow',
                    }),
                    '\nconnections from Hero Pixel to your Redshift cluster (if they exist in separate VPCs).',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Optional)\n',
                    (0, s.jsx)(t.a, {
                      href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html',
                      children: 'Create',
                    }),
                    ' a\nstaging S3 bucket (for the COPY strategy).',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'permissions-in-redshift',
              children: 'Permissions in Redshift',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Hero Pixel writes data into two schemas, whichever schema you want your data to land in, e.g.\n',
                (0, s.jsx)(t.code, {children: 'my_schema'}),
                ' and a "Raw Data" schema that Hero Pixel uses to improve ELT reliability. By default, this\nraw data schema is ',
                (0, s.jsx)(t.code, {children: 'airbyte_internal'}),
                " but this can be overridden in the Redshift Destination's\nadvanced settings. Hero Pixel also needs to query Redshift's\n",
                (0, s.jsx)(t.a, {
                  href: 'https://docs.aws.amazon.com/redshift/latest/dg/r_SVV_TABLE_INFO.html',
                  children: 'SVV_TABLE_INFO',
                }),
                ' table for\nmetadata about the tables Hero Pixel manages.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'To ensure the ',
                (0, s.jsx)(t.code, {children: 'airbyte_user'}),
                ' has the correction permissions to:',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'create schemas in your database'}),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'grant usage to any existing schemas you want Hero Pixel to use',
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'grant select to the ',
                    (0, s.jsx)(t.code, {children: 'svv_table_info'}),
                    ' table',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'You can execute the following SQL statements',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-sql',
                children:
                  'GRANT CREATE ON DATABASE database_name TO airbyte_user; -- add create schema permission\nGRANT usage, create on schema my_schema TO airbyte_user; -- add create table permission\nGRANT SELECT ON TABLE SVV_TABLE_INFO TO airbyte_user; -- add select permission for svv_table_info\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'optional-use-of-ssh-bastion-host',
              children: 'Optional Use of SSH Bastion Host',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This connector supports the use of a Bastion host as a gateway to a private Redshift cluster via SSH\nTunneling. Setup of the host is beyond the scope of this document but several tutorials are\navailable online to fascilitate this task. Enter the bastion host, port and credentials in the\ndestination configuration.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'step-2-set-up-the-destination-connector-in-hero-pixel',
              children:
                'Step 2: Set up the destination connector in Hero Pixel',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'Go to local Hero Pixel page.'}),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'In the left navigation bar, click ',
                    (0, s.jsx)(t.strong, {children: 'Destinations'}),
                    '. In the top-right corner, click ',
                    (0, s.jsx)(t.strong, {children: '+ new\ndestination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'On the destination setup page, select ',
                    (0, s.jsx)(t.strong, {children: 'Redshift'}),
                    ' from the Destination type dropdown and enter a\nname for this connector.',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Fill in all the required fields to use the INSERT or COPY strategy.',
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, s.jsx)(t.code, {children: 'Set up destination'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported sync modes',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The Redshift destination connector supports the following sync modes:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'Full Refresh'}),
                '\n',
                (0, s.jsx)(t.li, {children: 'Incremental - Append Sync'}),
                '\n',
                (0, s.jsx)(t.li, {children: 'Incremental - Append + Deduped'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'performance-considerations',
              children: 'Performance considerations',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Synchronization performance depends on the amount of data to be transferred. Cluster scaling issues\ncan be resolved directly using the cluster settings in the AWS Redshift console.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'connector-specific-features--highlights',
              children: 'Connector-specific features & highlights',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'notes-about-redshift-naming-conventions',
              children: 'Notes about Redshift Naming Conventions',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'From ',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.aws.amazon.com/redshift/latest/dg/r_names.html',
                  children: 'Redshift Names & Identifiers',
                }),
                ':',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'standard-identifiers',
              children: 'Standard Identifiers',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Begin with an ASCII single-byte alphabetic character or underscore character, or a UTF-8 multibyte\ncharacter two to four bytes long.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Subsequent characters can be ASCII single-byte alphanumeric characters, underscores, or dollar\nsigns, or UTF-8 multibyte characters two to four bytes long.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Be between 1 and 127 bytes in length, not including quotation marks for delimited identifiers.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: 'Contain no quotation marks and no spaces.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'delimited-identifiers',
              children: 'Delimited Identifiers',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Delimited identifiers (also known as quoted identifiers) begin and end with double quotation marks\n("). If you use a delimited identifier, you must use the double quotation marks for every\nreference to that object. The identifier can contain any standard UTF-8 printable characters other\nthan the double quotation mark itself. Therefore, you can create column or table names that include\notherwise illegal characters, such as spaces or the percent symbol. ASCII letters in delimited\nidentifiers are case-insensitive and are folded to lowercase. To use a double quotation mark in a\nstring, you must precede it with another double quotation mark character.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Therefore, Hero Pixel Redshift destination will create tables and schemas using the Unquoted\nidentifiers when possible or fallback to Quoted Identifiers if the names are containing special\ncharacters.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'data-size-limitations',
              children: 'Data Size Limitations',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Redshift specifies a maximum limit of 16MB (and 65535 bytes for any VARCHAR fields within the JSON\nrecord) to store the raw JSON record data. Thus, when a row is too big to fit, the destination\nconnector will do one of the following.',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Null the value if the varchar size > 65535, The corresponding key information is added to\n',
                    (0, s.jsx)(t.code, {children: '_airbyte_meta'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Null the whole record while trying to preserve the Primary Keys and cursor field declared as part\nof your stream configuration, if the total record size is > 16MB.',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'For DEDUPE sync mode, if we do not find Primary key(s), we fail the sync.',
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children:
                            'For OVERWRITE and APPEND mode, syncs will succeed with empty records emitted, if we fail to\nfind Primary key(s).',
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
            (0, s.jsxs)(t.p, {
              children: [
                'See AWS docs for ',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.aws.amazon.com/redshift/latest/dg/r_SUPER_type.html',
                  children: 'SUPER',
                }),
                ' and\n',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.aws.amazon.com/redshift/latest/dg/limitations-super.html',
                  children: 'SUPER limitations',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'encryption', children: 'Encryption'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'All Redshift connections are encrypted using SSL.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Each stream will be output into its own raw table in Redshift. Each table will contain 3 columns:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_raw_id'}),
                    ': a uuid assigned by Hero Pixel to each event that is processed. The column type in\nRedshift is ',
                    (0, s.jsx)(t.code, {children: 'VARCHAR'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_extracted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.\nThe column type in Redshift is ',
                    (0, s.jsx)(t.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_loaded_at'}),
                    ': a timestamp representing when the row was processed into final table. The\ncolumn type in Redshift is ',
                    (0, s.jsx)(t.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data. The column type in Redshift is\n',
                    (0, s.jsx)(t.code, {children: 'SUPER'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'data-type-map', children: 'Data type map'}),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Hero Pixel type',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Redshift type',
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
                          children: 'STRING',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'VARCHAR',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (BASE64)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'VARCHAR',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (BIG_NUMBER)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'VARCHAR',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (BIG_INTEGER)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'VARCHAR',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'NUMBER',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'DECIMAL / NUMERIC',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'INTEGER',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'BIGINT / INT8',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'BOOLEAN',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'BOOLEAN / BOOL',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (TIMESTAMP_WITH_TIMEZONE)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'TIMESTAMPTZ / TIMESTAMP WITH TIME ZONE',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (TIMESTAMP_WITHOUT_TIMEZONE)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'TIMESTAMP',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (TIME_WITH_TIMEZONE)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'TIMETZ / TIME WITH TIME ZONE',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'STRING (TIME_WITHOUT_TIMEZONE)',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'TIME',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'DATE',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'DATE',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'OBJECT',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SUPER',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'ARRAY',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SUPER',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => l, x: () => d});
      var s = n(3696);
      const i = {},
        r = s.createContext(i);
      function l(e) {
        const t = s.useContext(r);
        return s.useMemo(
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
              ? e.components(i)
              : e.components || i
            : l(e.components)),
          s.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
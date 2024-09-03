/*! For license information please see cb04c399.d9165c09.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7344],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        c =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, n, t) {
        var s,
          r = {},
          o = null,
          d = null;
        for (s in (void 0 !== t && (o = '' + t),
        void 0 !== n.key && (o = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          l.call(n, s) && !a.hasOwnProperty(s) && (r[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === r[s] && (r[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: o,
          ref: d,
          props: r,
          _owner: c.current,
        };
      }
      (n.Fragment = r), (n.jsx = o), (n.jsxs = o);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    931: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => o,
        });
      var s = t(2540),
        i = t(3023);
      const r = {id: 's3-glue', title: 'S3 Glue', description: 's3-glue'},
        l = 'S3-Glue',
        c = {
          id: 'destinations/s3-glue',
          title: 'S3 Glue',
          description: 's3-glue',
          source: '@site/versioned_docs/version-0.0.1/destinations/s3-glue.md',
          sourceDirName: 'destinations',
          slug: '/destinations/s3-glue',
          permalink: '/docs/destinations/s3-glue',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 's3-glue',
            title: 'S3 Glue',
            description: 's3-glue',
          },
          sidebar: 'integrations',
          previous: {title: 'S3', permalink: '/docs/destinations/s3'},
          next: {title: 'SFTP JSON', permalink: '/docs/destinations/sftp-json'},
        },
        a = {},
        o = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Step 1: Set up S3', id: 'step-1-set-up-s3', level: 2},
          {value: 'Step 2: Set up Glue', id: 'step-2-set-up-glue', level: 2},
          {
            value:
              'Step 3: Set up the S3-Glue destination connector in HeroPixel',
            id: 'step-3-set-up-the-s3-glue-destination-connector-in-heropixel',
            level: 2,
          },
          {value: 'Supported sync modes', id: 'supported-sync-modes', level: 2},
          {
            value: 'Supported Output schema',
            id: 'supported-output-schema',
            level: 2,
          },
          {value: 'JSON Lines (JSONL)', id: 'json-lines-jsonl', level: 3},
        ];
      function d(e) {
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
            (0, s.jsx)(n.h1, {id: 's3-glue', children: 'S3-Glue'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'This page guides you through the process of setting up the S3 destination connector with Glue.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, s.jsx)(n.p, {children: 'List of required fields:'}),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Access Key ID'}),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {
                    children: 'Secret Access Key',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'S3 Bucket Name'}),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'S3 Bucket Path'}),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {
                    children: 'S3 Bucket Region',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Glue database'}),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {
                    children: 'Glue serialization library',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Allow connections from HeroPixelserver to your AWS S3/ Minio S3 cluster (if they exist in\nseparate VPCs).',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'An S3 bucket with credentials or an instance profile with read/write permissions configured for\nthe host (ec2, eks).',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html#transit',
                    children: 'Enforce encryption of data in transit',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Allow permissions to access the AWS Glue service from the HeroPixelconnector',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-1-set-up-s3',
              children: 'Step 1: Set up S3',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                (0, s.jsx)(n.a, {
                  href: 'https://console.aws.amazon.com/iam/',
                  children: 'Sign in',
                }),
                ' to your AWS account. Use an existing or create new\n',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#:~:text=IAM%20User%20Guide.-,Programmatic%20access,-You%20must%20provide',
                  children: 'Access Key ID and Secret Access Key',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Prepare S3 bucket that will be used as destination, see\n',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html',
                  children: 'this',
                }),
                ' to create\nan S3 bucket.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                "NOTE: If the S3 cluster is not configured to use TLS, the connection to Amazon S3 silently reverts\nto an unencrypted connection. HeroPixelrecommends all connections be configured to use TLS/SSL as\nsupport for AWS's\n",
                (0, s.jsx)(n.a, {
                  href: 'https://aws.amazon.com/compliance/shared-responsibility-model/',
                  children: 'shared responsibility model',
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-2-set-up-glue',
              children: 'Step 2: Set up Glue',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                (0, s.jsx)(n.a, {
                  href: 'https://console.aws.amazon.com/iam/',
                  children: 'Sign in',
                }),
                ' to your AWS account. Use an existing or create new\n',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#:~:text=IAM%20User%20Guide.-,Programmatic%20access,-You%20must%20provide',
                  children: 'Access Key ID and Secret Access Key',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Prepare the Glue database that will be used as destination, see\n',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.aws.amazon.com/glue/latest/dg/console-databases.html',
                  children: 'this',
                }),
                ' to create a Glue database',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-3-set-up-the-s3-glue-destination-connector-in-heropixel',
              children:
                'Step 3: Set up the S3-Glue destination connector in HeroPixel',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {children: 'Go to local HeroPixelpage.'}),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'In the left navigation bar, click ',
                        (0, s.jsx)(n.strong, {children: 'Destinations'}),
                        '. In the top-right corner, click ',
                        (0, s.jsx)(n.strong, {children: '+ new\ndestination'}),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'On the destination setup page, select ',
                        (0, s.jsx)(n.strong, {children: 'S3'}),
                        ' from the Destination type dropdown and enter a name\nfor this connector.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {children: 'Configure fields:'}),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
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
                                    'See\n',
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html',
                                      children: 'this',
                                    }),
                                    '\non how to create a instanceprofile.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'We recommend creating an HeroPixelspecific user. This user will require\n',
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html',
                                      children: 'read and write permissions',
                                    }),
                                    '\nto objects in the staging bucket.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'If the Access Key and Secret Access Key are not provided, the authentication will rely on the\ninstanceprofile.',
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
                        (0, s.jsxs)(n.li, {
                          children: [
                            'Make sure your S3 bucket is accessible from the machine running HeroPixel',
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'This depends on your networking setup.',
                                }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    "You can check AWS S3 documentation with a tutorial on how to properly configure your S3's\naccess\n",
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-overview.html',
                                      children: 'here',
                                    }),
                                    '.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'If you use instance profile authentication, make sure the role has permission to read/write\non the bucket.',
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'The easiest way to verify if HeroPixelis able to connect to your S3 bucket is via the check\nconnection tool in the UI.',
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
                            (0, s.jsx)(n.strong, {children: 'S3 Bucket Name'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'See ',
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html',
                                      children: 'this',
                                    }),
                                    '\nto create an S3 bucket.',
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
                            (0, s.jsx)(n.strong, {children: 'S3 Bucket Path'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'Subdirectory under the above bucket to sync the data into.',
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
                              children: 'S3 Bucket Region',
                            }),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'See\n',
                                    (0, s.jsx)(n.a, {
                                      href: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions',
                                      children: 'here',
                                    }),
                                    '\nfor all region codes.',
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
                            (0, s.jsx)(n.strong, {children: 'S3 Path Format'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'Additional string format on how to store data under S3 Bucket Path. Default value is\n',
                                    (0, s.jsx)(n.code, {
                                      children:
                                        '${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}_${EPOCH}_',
                                    }),
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
                            (0, s.jsx)(n.strong, {children: 'S3 Endpoint'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'Leave empty if using AWS S3, fill in S3 URL if using Minio S3.',
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
                              children: 'S3 Filename pattern',
                            }),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    'The pattern allows you to set the file-name format for the S3 staging file(s), next\nplaceholders combinations are currently supported: ',
                                    (0, s.jsx)(n.code, {children: '{date}'}),
                                    ', ',
                                    (0, s.jsx)(n.code, {
                                      children: '{date:yyyy_MM}',
                                    }),
                                    ', ',
                                    (0, s.jsx)(n.code, {
                                      children: '{timestamp}',
                                    }),
                                    ',\n',
                                    (0, s.jsx)(n.code, {
                                      children: '{timestamp:millis}',
                                    }),
                                    ', ',
                                    (0, s.jsx)(n.code, {
                                      children: '{timestamp:micros}',
                                    }),
                                    ', ',
                                    (0, s.jsx)(n.code, {
                                      children: '{part_number}',
                                    }),
                                    ', ',
                                    (0, s.jsx)(n.code, {children: '{sync_id}'}),
                                    ',\n',
                                    (0, s.jsx)(n.code, {
                                      children: '{format_extension}',
                                    }),
                                    ". Please, don't use empty space and not supportable placeholders, as they\nwon't recognized.",
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
                            (0, s.jsx)(n.strong, {children: 'Glue database'}),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'The Glue database name that was previously created through the management console or the cli.',
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
                              children: 'Glue serialization library',
                            }),
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                  children:
                                    'The library that your query engine will use for reading and writing data in your lake',
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
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Click ',
                        (0, s.jsx)(n.code, {children: 'Set up destination'}),
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
            (0, s.jsx)(n.p, {
              children:
                'In order for everything to work correctly, it is also necessary that the user whose "S3 Key Id" and\n"S3 Access Key" are used have access to both the bucket and its contents. Policies to use:',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "s3:*",\n      "Resource": [\n        "arn:aws:s3:::YOUR_BUCKET_NAME/*",\n        "arn:aws:s3:::YOUR_BUCKET_NAME"\n      ]\n    }\n  ]\n}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For setting up the necessary Glue policies see\n',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.aws.amazon.com/glue/latest/dg/glue-resource-policies.html',
                  children: 'this',
                }),
                ' and\n',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.aws.amazon.com/glue/latest/dg/create-service-policy.html',
                  children: 'this',
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The full path of the output data with the default S3 Path Format\n',
                (0, s.jsx)(n.code, {
                  children:
                    '${NAMESPACE}/${STREAM_NAME}/${YEAR}_${MONTH}_${DAY}_${EPOCH}_',
                }),
                ' is:',
              ],
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-text',
                children:
                  '<bucket-name>/<source-namespace-if-exists>/<stream-name>/<upload-date>_<epoch>_<partition-id>.<format-extension>\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'For example:'}),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-text',
                children:
                  'testing_bucket/data_output_path/public/users/2021_01_01_1234567890_0.csv.gz\n\u2191              \u2191                \u2191      \u2191     \u2191          \u2191          \u2191 \u2191\n|              |                |      |     |          |          | format extension\n|              |                |      |     |          |          unique incremental part id\n|              |                |      |     |          milliseconds since epoch\n|              |                |      |     upload date in YYYY_MM_DD\n|              |                |      stream name\n|              |                source namespace (if it exists)\n|              bucket path\nbucket name\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'The rationales behind this naming pattern are:',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'Each stream has its own directory.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'The data output files can be sorted by upload time.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'The upload time composes of a date part and millis part so that it is both readable and unique.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'But it is possible to further customize by using the available variables to format the bucket path:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${NAMESPACE}'}),
                    ': Namespace where the stream comes from or configured by the connection namespace\nfields.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${STREAM_NAME}'}),
                    ': Name of the stream',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${YEAR}'}),
                    ': Year in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${MONTH}'}),
                    ': Month in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${DAY}'}),
                    ': Day in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${HOUR}'}),
                    ': Hour in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${MINUTE}'}),
                    ' : Minute in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${SECOND}'}),
                    ': Second in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${MILLISECOND}'}),
                    ': Millisecond in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${EPOCH}'}),
                    ': Milliseconds since Epoch in which the sync was writing the output data in.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '${UUID}'}),
                    ': random uuid string',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {children: 'Note:'}),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Multiple ',
                    (0, s.jsx)(n.code, {children: '/'}),
                    ' characters in the S3 path are collapsed into a single ',
                    (0, s.jsx)(n.code, {children: '/'}),
                    ' character.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'If the output bucket contains too many files, the part id variable is using a ',
                    (0, s.jsx)(n.code, {children: 'UUID'}),
                    ' instead. It\nuses sequential ID otherwise.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Please note that the stream name may contain a prefix, if it is configured on the connection. A data\nsync may create multiple files as the output files can be partitioned by size (targeting a size of\n200MB compressed or lower) .',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'supported-sync-modes',
              children: 'Supported sync modes',
            }),
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
                            'Warning: this mode deletes all previously synced data in the configured bucket path.',
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
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Warning: HeroPixelprovides at-least-once delivery.',
                        }),
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
                          children: '\u274c',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Setting a specific bucket path is equivalent to having separate namespaces.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The HeroPixelS3 destination allows you to sync data to AWS S3 or Minio S3. Each stream is written to\nits own directory under the bucket. \u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the\nconfigured bucket and path will be wiped out before each sync. We recommend you to provision a\ndedicated S3 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'supported-output-schema',
              children: 'Supported Output schema',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Each stream will be outputted to its dedicated directory according to the configuration. The\ncomplete datastore of each stream includes all the output files under that directory. You can think\nof the directory as equivalent of a Table in the database world.',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Under Full Refresh Sync mode, old output files will be purged before new files are created.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Under Incremental - Append Sync mode, new output files will be added that only contain the new\ndata.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'json-lines-jsonl',
              children: 'JSON Lines (JSONL)',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                (0, s.jsx)(n.a, {
                  href: 'https://jsonlines.org/',
                  children: 'JSON Lines',
                }),
                ' is a text format with one JSON per line. Each line has a\nstructure as follows:',
              ],
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source><optional>"\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'For example, given the following two json objects from a source:',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '[\n  {\n    "user_id": 123,\n    "name": {\n      "first": "John",\n      "last": "Doe"\n    }\n  },\n  {\n    "user_id": 456,\n    "name": {\n      "first": "Jane",\n      "last": "Roe"\n    }\n  }\n]\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'depending on whether you want to flatten your data or not (',
                (0, s.jsx)(n.strong, {
                  children: (0, s.jsx)(n.em, {
                    children: 'available as a configuration\noption',
                  }),
                }),
                ')',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'The json objects can have the following formats:',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-text',
                children:
                  '{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-text',
                children:
                  '{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "user_id": 123, "name": { "first": "John", "last": "Doe" } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "user_id": 456, "name": { "first": "Jane", "last": "Roe" } }\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Output files can be compressed. The default option is GZIP compression. If compression is selected,\nthe output filename will have an extra extension (GZIP: ',
                (0, s.jsx)(n.code, {children: '.jsonl.gz'}),
                ').',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => l, x: () => c});
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
      function c(e) {
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

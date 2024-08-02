/*! For license information please see 2f907235.9624f6fb.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4303],
  {
    2192: (e, n, s) => {
      var i = s(3696),
        t = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, n, s) {
        var i,
          r = {},
          a = null,
          d = null;
        for (i in (void 0 !== s && (a = '' + s),
        void 0 !== n.key && (a = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          o.call(n, i) && !c.hasOwnProperty(i) && (r[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === r[i] && (r[i] = n[i]);
        return {
          $$typeof: t,
          type: e,
          key: a,
          ref: d,
          props: r,
          _owner: l.current,
        };
      }
      (n.Fragment = r), (n.jsx = a), (n.jsxs = a);
    },
    2540: (e, n, s) => {
      e.exports = s(2192);
    },
    2936: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => a,
        });
      var i = s(2540),
        t = s(3023);
      const r = {id: 'firebolt', title: 'Firebolt', description: 'desc'},
        o = 'Firebolt',
        l = {
          id: 'destinations/firebolt',
          title: 'Firebolt',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/firebolt.md',
          sourceDirName: 'destinations',
          slug: '/destinations/firebolt',
          permalink: '/docs/destinations/firebolt',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'firebolt', title: 'Firebolt', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Elasticsearch',
            permalink: '/docs/destinations/elasticsearch',
          },
          next: {title: 'Firestore', permalink: '/docs/destinations/firestore'},
        },
        c = {},
        a = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Setup guide', id: 'setup-guide', level: 2},
          {value: 'Supported sync modes', id: 'supported-sync-modes', level: 2},
          {
            value: 'Connector-specific features &amp; highlights',
            id: 'connector-specific-features--highlights',
            level: 2,
          },
          {value: 'Output schema', id: 'output-schema', level: 3},
        ];
      function d(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {id: 'firebolt', children: 'Firebolt'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'This page guides you through the process of setting up the Firebolt destination connector.',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'This Firebolt destination connector has two replication strategies:',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'SQL: Replicates data via SQL INSERT queries. This leverages\n',
                        (0, i.jsx)(n.a, {
                          href: 'https://pypi.org/project/firebolt-sdk/',
                          children: 'Firebolt SDK',
                        }),
                        ' to execute queries directly on Firebolt\n',
                        (0, i.jsx)(n.a, {
                          href: 'https://docs.firebolt.io/godocs/Overview/understanding-engine-fundamentals.html',
                          children: 'Engines',
                        }),
                        '.\n',
                        (0, i.jsx)(n.strong, {
                          children:
                            'Not recommended for production workloads as this does not scale well',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'S3: Replicates data by first uploading data to an S3 bucket, creating an External Table and\nwriting into a final Fact Table. This is the recommended loading\n',
                        (0, i.jsx)(n.a, {
                          href: 'https://docs.firebolt.io/godocs/Guides/loading-data/loading-data.html',
                          children: 'approach',
                        }),
                        '. Requires an S3 bucket and\ncredentials in addition to Firebolt credentials.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {children: 'For SQL strategy:'}),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Host'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Username'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Password'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Database'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Account'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Engine'}),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'Hero Pixel automatically picks an approach depending on the given configuration - if S3 configuration\nis present, Hero Pixel will use the S3 strategy.',
            }),
            '\n',
            (0, i.jsx)(n.p, {children: 'For S3 strategy:'}),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Username'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Password'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Database'}),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.strong, {children: 'Account'}),
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'S3 Bucket Name'}),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'See ',
                            (0, i.jsx)(n.a, {
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
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'S3 Bucket Region'}),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children:
                            'Create the S3 bucket on the same region as the Firebolt database.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Access Key Id'}),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'See\n',
                            (0, i.jsx)(n.a, {
                              href: 'https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys',
                              children: 'this',
                            }),
                            '\non how to generate an access key.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'We recommend creating an Hero Pixel-specific user. This user will require\n',
                            (0, i.jsx)(n.a, {
                              href: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html',
                              children: 'read, write and delete permissions',
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
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Secret Access Key'}),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children: 'Corresponding key to the above key id.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Host (optional)'}),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children:
                            'Firebolt backend URL. Can be left blank for most usecases.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Engine (optional)'}),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children:
                            'If connecting to a non-default engine you should specify its name or url here.',
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
            (0, i.jsx)(n.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Sign up to Firebolt following the\n',
                    (0, i.jsx)(n.a, {
                      href: 'https://docs.firebolt.io/godocs/Guides/managing-your-organization/creating-an-organization.html',
                      children: 'guide',
                    }),
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Follow the getting started ',
                    (0, i.jsx)(n.a, {
                      href: 'https://docs.firebolt.io/godocs/Guides/getting-started.html',
                      children: 'tutorial',
                    }),
                    ' to setup a database.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Create a ',
                    (0, i.jsx)(n.a, {
                      href: 'https://docs.firebolt.io/godocs/Guides/managing-your-organization/service-accounts.html',
                      children: 'service account',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Create an engine as described in\n',
                    (0, i.jsx)(n.a, {
                      href: 'https://docs.firebolt.io/godocs/Guides/working-with-engines/working-with-engines-using-the-firebolt-manager.html',
                      children: 'here',
                    }),
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '(Optional)\n',
                    (0, i.jsx)(n.a, {
                      href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html',
                      children: 'Create',
                    }),
                    ' a\nstaging S3 bucket (for the S3 strategy).',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '(Optional)\n',
                    (0, i.jsx)(n.a, {
                      href: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-iam-policies.html',
                      children: 'Create',
                    }),
                    ' an IAM\nwith programmatic access to read, write and delete objects from an S3 bucket.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'supported-sync-modes',
              children: 'Supported sync modes',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'The Firebolt destination connector supports the following:',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {children: 'Full Refresh'}),
                '\n',
                (0, i.jsx)(n.li, {children: 'Incremental - Append Sync'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'connector-specific-features--highlights',
              children: 'Connector-specific features & highlights',
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Each stream will be output into its own raw\n',
                (0, i.jsx)(n.a, {
                  href: 'https://docs.firebolt.io/working-with-tables.html#fact-and-dimension-tables',
                  children: 'Fact table',
                }),
                ' in\nFirebolt. Each table will contain 3 columns:',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, {children: '_airbyte_ab_id'}),
                    ': a uuid assigned by Hero Pixel to each event that is processed. The column type in\nFirebolt is ',
                    (0, i.jsx)(n.code, {children: 'VARCHAR'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.\nThe column type in Firebolt is ',
                    (0, i.jsx)(n.code, {children: 'TIMESTAMP'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.code, {children: '_airbyte_data'}),
                    ': a json blob representing the event data. The column type in Firebolt is ',
                    (0, i.jsx)(n.code, {children: 'VARCHAR'}),
                    '\nbut can be be parsed with JSON functions.',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, s) => {
      s.d(n, {R: () => o, x: () => l});
      var i = s(3696);
      const t = {},
        r = i.createContext(t);
      function o(e) {
        const n = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          i.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

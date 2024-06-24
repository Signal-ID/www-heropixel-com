/*! For license information please see cc186f79.6de2b2db.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3674],
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
    8132: (e, n, t) => {
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
      const r = {id: 'postgres', title: 'Postgres', description: 'desc'},
        l = 'Postgres',
        o = {
          id: 'destinations/postgres',
          title: 'Postgres',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/postgres.md',
          sourceDirName: 'destinations',
          slug: '/destinations/postgres',
          permalink: '/docs/destinations/postgres',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/postgres.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {id: 'postgres', title: 'Postgres', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Pinecone',
            permalink: '/docs/destinations/pinecone',
          },
          next: {title: 'PubSub', permalink: '/docs/destinations/pubsub'},
        },
        a = {},
        d = [
          {value: 'Warning', id: 'warning', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {
            value: 'Configure Network Access',
            id: 'configure-network-access',
            level: 4,
          },
          {
            value: 'Step 1: Set up Postgres',
            id: 'step-1-set-up-postgres',
            level: 2,
          },
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {
            value: 'Step 2: Set up the Postgres connector in Hero Pixel',
            id: 'step-2-set-up-the-postgres-connector-in-hero-pixel',
            level: 2,
          },
          {value: 'Target Database', id: 'target-database', level: 4},
          {value: 'Naming Conventions', id: 'naming-conventions', level: 2},
          {value: 'Supported sync modes', id: 'supported-sync-modes', level: 2},
          {value: 'Schema map', id: 'schema-map', level: 2},
          {
            value: 'Output Schema (Raw Tables)',
            id: 'output-schema-raw-tables',
            level: 3,
          },
          {
            value: 'Final Tables Data type mapping',
            id: 'final-tables-data-type-mapping',
            level: 3,
          },
          {value: 'Naming limitations', id: 'naming-limitations', level: 3},
          {
            value: 'Creating dependent objects',
            id: 'creating-dependent-objects',
            level: 2,
          },
          {
            value: 'Vendor-Specific Connector Limitations',
            id: 'vendor-specific-connector-limitations',
            level: 2,
          },
        ];
      function c(e) {
        const n = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          em: 'em',
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
            (0, s.jsx)(n.h1, {id: 'postgres', children: 'Postgres'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'This page guides you through the process of setting up the Postgres destination connector.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'warning', children: 'Warning'}),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'warning',
              children: (0, s.jsx)(n.p, {
                children:
                  'Postgres, while an excellent relational database, is not a data warehouse. Please only consider using postgres as a destination for small data volumes (e.g. less than 10GB) or for testing purposes. For larger data volumes, we recommend using a data warehouse like BigQuery, Snowflake, or Redshift.',
              }),
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: "To use the Postgres destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'A Postgres server version 9.5 or above',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Hero Pixel only supports connecting to your Postgres instances with SSL or TLS encryption. TLS is\nused by default.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "You'll need the following information to configure the Postgres destination:",
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Host'}),
                    ' - The host name of the server.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Port'}),
                    ' - The port number the server is listening on. Defaults to the PostgreSQL\u2122 standard port\nnumber (5432).',
                  ],
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Username'}),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Password'}),
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Default Schema Name'}),
                    ' - Specify the schema (or several schemas separated by commas) to be set in\nthe search-path. These schemas will be used to resolve unqualified object names used in statements\nexecuted over this connection.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Database'}),
                    ' - The database name. The default is to connect to a database with the same name as\nthe user name.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'JDBC URL Params'}),
                    ' (optional)',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.a, {
                href: 'https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database',
                children: 'Refer to this guide for more details',
              }),
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'configure-network-access',
              children: 'Configure Network Access',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "Make sure your Postgres database can be accessed by Hero Pixel. If your database is within a VPC, you\nmay need to allow access from the IP you're using to expose Hero Pixel.",
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-1-set-up-postgres',
              children: 'Step 1: Set up Postgres',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'permissions',
              children: (0, s.jsx)(n.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You need a Postgres user with the following permissions:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'can create tables and write rows.',
                }),
                '\n',
                (0, s.jsx)(n.li, {children: 'can create schemas e.g:'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'You can create such a user by running:',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                children:
                  "CREATE USER hero_user WITH PASSWORD '<password>';\nGRANT CREATE, TEMPORARY ON DATABASE <database> TO hero_user;\n",
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You can also use a pre-existing user but we highly recommend creating a dedicated user for Hero Pixel.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-2-set-up-the-postgres-connector-in-hero-pixel',
              children: 'Step 2: Set up the Postgres connector in Hero Pixel',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'target-database',
              children: 'Target Database',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You will need to choose an existing database or create a new database that will be used to store\nsynced data from Hero Pixel.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'naming-conventions',
              children: 'Naming Conventions',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'From\n',
                (0, s.jsx)(n.a, {
                  href: 'https://www.postgresql.org/docs/9.0/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS',
                  children: 'Postgres SQL Identifiers syntax',
                }),
                ':',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'SQL identifiers and key words must begin with a letter (a-z, but also letters with diacritical\nmarks and non-Latin letters) or an underscore (_).',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'Subsequent characters in an identifier or key word can be letters, underscores, digits (0-9), or\ndollar signs ($).',
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'Note that dollar signs are not allowed in identifiers according to the SQL standard, so their use\nmight render applications less portable. The SQL standard will not define a key word that contains\ndigits or starts or ends with an underscore, so identifiers of this form are safe against possible\nconflict with future extensions of the standard.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'The system uses no more than NAMEDATALEN-1 bytes of an identifier; longer names can be written in\ncommands, but they will be truncated. By default, NAMEDATALEN is 64 so the maximum identifier\nlength is 63 bytes',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'Quoted identifiers can contain any character, except the character with code zero. (To include a\ndouble quote, write two double quotes.) This allows constructing table or column names that would\notherwise not be possible, such as ones containing spaces or ampersands. The length limitation\nstill applies.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'Quoting an identifier also makes it case-sensitive, whereas unquoted names are always folded to\nlower case.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'In order to make your applications portable and less error-prone, use consistent quoting with each\nname (either always quote it or never quote it).',
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'info',
              children: (0, s.jsx)(n.p, {
                children:
                  'Hero Pixel Postgres destination will create raw tables and schemas using the Unquoted identifiers by\nreplacing any special characters with an underscore. All final tables and their corresponding\ncolumns are created using Quoted identifiers preserving the case sensitivity. Special characters in final\ntables are replaced with underscores.',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'Log into your Hero Pixel account.',
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'In the left navigation bar, click ',
                    (0, s.jsx)(n.strong, {children: 'Destinations'}),
                    '. In the top-right corner, click ',
                    (0, s.jsx)(n.strong, {children: 'new\ndestination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'On the Set up the destination page, enter the name for the Postgres connector and select\n',
                    (0, s.jsx)(n.strong, {children: 'Postgres'}),
                    ' from the Destination type dropdown.',
                  ],
                }),
                '\n',
                (0, s.jsx)(n.li, {children: 'Enter a name for your source.'}),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'For the ',
                    (0, s.jsx)(n.strong, {children: 'Host'}),
                    ', ',
                    (0, s.jsx)(n.strong, {children: 'Port'}),
                    ', and ',
                    (0, s.jsx)(n.strong, {children: 'DB Name'}),
                    ', enter the hostname, port number, and name for your\nPostgres database.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'List the ',
                    (0, s.jsx)(n.strong, {children: 'Default Schemas'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'note',
              children: (0, s.jsx)(n.p, {
                children:
                  "The schema names are case sensitive. The 'public' schema is set by default. Multiple schemas may be\nused at one time. No schemas set explicitly - will sync all of existing.",
              }),
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              start: '7',
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'For ',
                        (0, s.jsx)(n.strong, {children: 'User'}),
                        ' and ',
                        (0, s.jsx)(n.strong, {children: 'Password'}),
                        ', enter the username and password you created in\n',
                        (0, s.jsx)(n.a, {
                          href: '#step-1-optional-create-a-dedicated-read-only-user',
                          children: 'Step 1',
                        }),
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
                    (0, s.jsx)(n.p, {
                      children: 'Toggle the switch to connect using SSL.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {children: 'For SSL Modes, select:'}),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'disable'}),
                            ' to disable encrypted communication between Hero Pixel and the source',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'allow'}),
                            ' to enable encrypted communication only when required by the source',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'prefer'}),
                            " to allow unencrypted communication only when the source doesn't support encryption",
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'require'}),
                            " to always require encryption. Note: The connection will fail if the source doesn't\nsupport encryption.",
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'verify-ca'}),
                            ' to always require encryption and verify that the source has a valid SSL\ncertificate',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'verify-full'}),
                            ' to always require encryption and verify the identity of the source',
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
                        'To customize the JDBC connection beyond common options, specify additional supported\n',
                        (0, s.jsx)(n.a, {
                          href: 'https://jdbc.postgresql.org/documentation/head/connect.html',
                          children: 'JDBC URL parameters',
                        }),
                        ' as key-value\npairs separated by the symbol & in the ',
                        (0, s.jsx)(n.strong, {
                          children: 'JDBC URL Parameters (Advanced)',
                        }),
                        ' field.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: 'Example: key1=value1&key2=value2&key3=value3',
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'These parameters will be added at the end of the JDBC URL that the Hero Pixel will use to connect\nto your Postgres database.',
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'The connector now supports ',
                        (0, s.jsx)(n.code, {children: 'connectTimeout'}),
                        ' and defaults to 60 seconds. Setting connectTimeout\nto 0 seconds will set the timeout to the longest time available.',
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        (0, s.jsx)(n.strong, {children: 'Note:'}),
                        ' Do not use the following keys in JDBC URL Params field as they will be overwritten by\nHero Pixel: ',
                        (0, s.jsx)(n.code, {children: 'currentSchema'}),
                        ', ',
                        (0, s.jsx)(n.code, {children: 'user'}),
                        ', ',
                        (0, s.jsx)(n.code, {children: 'password'}),
                        ', ',
                        (0, s.jsx)(n.code, {children: 'ssl'}),
                        ', and ',
                        (0, s.jsx)(n.code, {children: 'sslmode'}),
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
            (0, s.jsx)(n.admonition, {
              type: 'warning',
              children: (0, s.jsx)(n.p, {
                children:
                  'This is an advanced configuration option. Users are advised to use it with caution.',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              start: '11',
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: 'For SSH Tunnel Method, select:',
                    }),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'No Tunnel'}),
                            ' for a direct connection to the database',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {
                              children: 'SSH Key Authentication',
                            }),
                            ' to use an RSA Private as your secret for establishing the SSH\ntunnel',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {
                              children: 'Password Authentication',
                            }),
                            ' to use a password as your secret for establishing the SSH tunnel',
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
            (0, s.jsx)(n.admonition, {
              type: 'warning',
              children: (0, s.jsxs)(n.p, {
                children: [
                  'Since Hero Pixel requires encrypted communication, select ',
                  (0, s.jsx)(n.strong, {children: 'SSH Key Authentication'}),
                  ' or\n',
                  (0, s.jsx)(n.strong, {children: 'Password Authentication'}),
                  ' if you selected ',
                  (0, s.jsx)(n.strong, {children: 'disable'}),
                  ', ',
                  (0, s.jsx)(n.strong, {children: 'allow'}),
                  ', or ',
                  (0, s.jsx)(n.strong, {children: 'prefer'}),
                  ' as the ',
                  (0, s.jsx)(n.strong, {children: 'SSL\nMode'}),
                  '; otherwise, the connection will fail.',
                ],
              }),
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              start: '12',
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Click ',
                    (0, s.jsx)(n.strong, {children: 'Set up destination'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'supported-sync-modes',
              children: 'Supported sync modes',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The Postgres destination connector supports the\nfollowing sync modes:',
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
                        style: {textAlign: 'left'},
                        children: 'Supported?(Yes/No)',
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
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, s.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
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
                          style: {textAlign: 'left'},
                          children: 'Yes',
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
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, s.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'schema-map', children: 'Schema map'}),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'output-schema-raw-tables',
              children: 'Output Schema (Raw Tables)',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Each stream will be mapped to a separate raw table in Postgres. The default schema in which the raw\ntables are created is ',
                (0, s.jsx)(n.code, {children: 'airbyte_internal'}),
                '. This can be overridden in the configuration. Each table\nwill contain 3 columns:',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_raw_id'}),
                    ': a uuid assigned by Hero Pixel to each event that is processed. The column type in\nPostgres is ',
                    (0, s.jsx)(n.code, {children: 'VARCHAR'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_extracted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.\nThe column type in Postgres is ',
                    (0, s.jsx)(n.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_loaded_at'}),
                    ': a timestamp representing when the row was processed into final table. The\ncolumn type in Postgres is ',
                    (0, s.jsx)(n.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data. The column type in Postgres is\n',
                    (0, s.jsx)(n.code, {children: 'JSONB'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'final-tables-data-type-mapping',
              children: 'Final Tables Data type mapping',
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Hero Pixel Type',
                      }),
                      (0, s.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Postgres Type',
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
                          children: 'string',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'VARCHAR',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'number',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'DECIMAL',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'BIGINT',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'boolean',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'BOOLEAN',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'object',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'JSONB',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'array',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'JSONB',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'timestamp_with_timezone',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'TIMESTAMP WITH TIME ZONE',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'timestamp_without_timezone',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'TIMESTAMP',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'time_with_timezone',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'TIME WITH TIME ZONE',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'time_without_timezone',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'TIME',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'date',
                        }),
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'DATE',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'naming-limitations',
              children: 'Naming limitations',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Postgres restricts all identifiers to 63 characters or less. If your stream includes column names\nlonger than 63 characters, they will be truncated to this length. If this results in two columns\nhaving the same name, Hero Pixel may modify these column names to avoid the collision.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'creating-dependent-objects',
              children: 'Creating dependent objects',
            }),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'caution',
              children: (0, s.jsxs)(n.p, {
                children: [
                  'This section involves running ',
                  (0, s.jsx)(n.code, {children: 'DROP ... CASCADE'}),
                  ' on the tables that Hero Pixel produces. Make sure you\nfully understand the consequences before enabling this option. ',
                  (0, s.jsx)(n.strong, {children: 'Permanent'}),
                  ' data loss is possible\nwith this option!',
                ],
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You may want to create objects that depend on the tables generated by Hero Pixel, such as views. If you\ndo so, we strongly recommend:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'Using a tool like ',
                    (0, s.jsx)(n.code, {children: 'dbt'}),
                    ' to automate the creation',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'And using an orchestrator to trigger ',
                    (0, s.jsx)(n.code, {children: 'dbt'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'This is because you will need to enable the "Drop tables with CASCADE" option. The connector\nsometimes needs to recreate the tables; if you have created dependent objects, Postgres will require\nthe connector to run drop statements with CASCADE enabled. However, this will cause the connector to\n',
                (0, s.jsx)(n.strong, {
                  children: 'also drop the dependent objects',
                }),
                '. Therefore, you MUST have a way to recreate those dependent\nobjects from scratch.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'vendor-specific-connector-limitations',
              children: 'Vendor-Specific Connector Limitations',
            }),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'warning',
              children: (0, s.jsxs)(n.p, {
                children: [
                  'Not all implementations or deployments of a database will be the same. This section lists specific limitations and known issues with the connector based on ',
                  (0, s.jsx)(n.em, {children: 'how'}),
                  ' or\n',
                  (0, s.jsx)(n.em, {children: 'where'}),
                  ' it is deployed.',
                ],
              }),
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

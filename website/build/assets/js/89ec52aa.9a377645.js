/*! For license information please see 89ec52aa.9a377645.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1597],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        o =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var s,
          l = {},
          d = null,
          a = null;
        for (s in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          r.call(n, s) && !c.hasOwnProperty(s) && (l[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === l[s] && (l[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: l,
          _owner: o.current,
        };
      }
      (n.Fragment = l), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    7158: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => d,
        });
      var s = t(2540),
        i = t(3023);
      const l = {
          id: 'yellowbrick',
          title: 'yellowbrick',
          description: 'yellowbrick',
        },
        r = 'Yellowbrick',
        o = {
          id: 'destinations/yellowbrick',
          title: 'yellowbrick',
          description: 'yellowbrick',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/yellowbrick.md',
          sourceDirName: 'destinations',
          slug: '/destinations/yellowbrick',
          permalink: '/docs/destinations/yellowbrick',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/yellowbrick.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'yellowbrick',
            title: 'yellowbrick',
            description: 'yellowbrick',
          },
          sidebar: 'integrations',
          previous: {
            title: 'weaviate',
            permalink: '/docs/destinations/weaviate',
          },
        },
        c = {},
        d = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {
            value: 'Configure Network Access',
            id: 'configure-network-access',
            level: 4,
          },
          {
            value: 'Step 1: Set up Yellowbrick',
            id: 'step-1-set-up-yellowbrick',
            level: 2,
          },
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {
            value: 'Step 2: Set up the Yellowbrick connector in Hero Pixel',
            id: 'step-2-set-up-the-yellowbrick-connector-in-hero-pixel',
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
        ];
      function a(e) {
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
            (0, s.jsx)(n.h1, {id: 'yellowbrick', children: 'Yellowbrick'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'This page guides you through the process of setting up the Yellowbrick destination connector.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Hero Pixel Cloud only supports connecting to your Yellowbrick instances with SSL or TLS encryption. TLS is\nused by default. Other than that, you can proceed with the open-source instructions below.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "You'll need the following information to configure the Yellowbrick destination:",
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
                    ' - The port number the server is listening on. Defaults to the PostgreSQL\u2122 standard port number (5432).',
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
                    ' - Specify the schema (or several schemas separated by commas) to be set in the search-path. These schemas will be used to resolve unqualified object names used in statements executed over this connection.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Database'}),
                    ' - The database name. The default is to connect to a database with the same name as the user name.',
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
                href: 'https://docs.yellowbrick.com/6.9.0/client_tools/setup_database_connection.html',
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
                "Make sure your Yellowbrick database can be accessed by Hero Pixel. If your database is within a VPC, you\nmay need to allow access from the IP you're using to expose Hero Pixel.",
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-1-set-up-yellowbrick',
              children: 'Step 1: Set up Yellowbrick',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'permissions',
              children: (0, s.jsx)(n.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You need a Yellowbrick user with the following permissions:',
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
                  "CREATE USER airbyte_user WITH ENCRYPTED PASSWORD '<password>';\nGRANT CREATE, TEMPORARY ON DATABASE <database> TO airbyte_user;\n",
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You can also use a pre-existing user but we highly recommend creating a dedicated user for Hero Pixel.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'step-2-set-up-the-yellowbrick-connector-in-hero-pixel',
              children:
                'Step 2: Set up the Yellowbrick connector in Hero Pixel',
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
                'From ',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.yellowbrick.com/6.9.0/ybd_sqlref/sql_identifiers.html#sql-identifiers-1',
                  children: 'Yellowbrick SQL Identifiers syntax',
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Note the following restrictions on unquoted SQL identifiers:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'SQL identifiers that are not quoted must begin with a letter (a-z) or an underscore (',
                    (0, s.jsx)(n.em, {children: '). The pg'}),
                    ' prefix is also disallowed and reserved for system objects.',
                  ],
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Subsequent characters in an unquoted identifier can be letters, digits (0-9), or underscores. Unquoted SQL identifiers are case-insensitive.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Special characters such as #, $, and so on, are not allowed anywhere in an unquoted identifier.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: 'Unquoted SQL identifiers are case-insensitive.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Quoted identifiers (or delimited identifiers) are names enclosed in double quotes ("). Quoted identifiers are case-sensitive. By using quoted identifiers, you can create object names that contain explicit uppercase and lowercase letters, as well as special characters. However, you cannot use double quotes within object names.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Space characters are not allowed in database names.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.admonition, {
              type: 'info',
              children: (0, s.jsx)(n.p, {
                children:
                  'Hero Pixel Yellowbrick destination will create raw tables and schemas using the Unquoted\nidentifiers by replacing any special characters with an underscore. All final tables and their corresponding\ncolumns are created using Quoted identifiers preserving the case sensitivity.',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(n.p, {
                      children: 'Log into your Hero Pixel account.',
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
                        'In the left navigation bar, click ',
                        (0, s.jsx)(n.strong, {children: 'Destinations'}),
                        '. In the top-right corner, click ',
                        (0, s.jsx)(n.strong, {children: 'new destination'}),
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
                        'On the Set up the destination page, enter the name for the Yellowbrick connector\nand select ',
                        (0, s.jsx)(n.strong, {children: 'Yellowbrick'}),
                        ' from the Destination type dropdown.',
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
                      children: 'Enter a name for your source.',
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
                        'For the ',
                        (0, s.jsx)(n.strong, {children: 'Host'}),
                        ', ',
                        (0, s.jsx)(n.strong, {children: 'Port'}),
                        ', and ',
                        (0, s.jsx)(n.strong, {children: 'DB Name'}),
                        ', enter the hostname, port number, and name for your Yellowbrick database.',
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
                        'List the ',
                        (0, s.jsx)(n.strong, {children: 'Default Schemas'}),
                        '.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.admonition, {
                      type: 'note',
                      children: (0, s.jsx)(n.p, {
                        children:
                          "The schema names are case sensitive. The 'public' schema is set by default. Multiple schemas may be used at one time. No schemas set explicitly - will sync all of existing.",
                      }),
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
                        'For ',
                        (0, s.jsx)(n.strong, {children: 'User'}),
                        ' and ',
                        (0, s.jsx)(n.strong, {children: 'Password'}),
                        ', enter the username and password you created in ',
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
                            " to always require encryption. Note: The connection will fail if the source doesn't support encryption.",
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.strong, {children: 'verify-ca'}),
                            ' to always require encryption and verify that the source has a valid SSL certificate',
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
                        'To customize the JDBC connection beyond common options, specify additional supported ',
                        (0, s.jsx)(n.a, {
                          href: 'https://jdbc.postgresql.org/documentation/head/connect.html',
                          children: 'JDBC URL parameters',
                        }),
                        ' as key-value pairs separated by the symbol & in the ',
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
                        'These parameters will be added at the end of the JDBC URL that the Hero Pixel will use to connect to your Yellowbrick database.',
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'The connector now supports ',
                        (0, s.jsx)(n.code, {children: 'connectTimeout'}),
                        ' and defaults to 60 seconds. Setting connectTimeout to 0 seconds will set the timeout to the longest time available.',
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        (0, s.jsx)(n.strong, {children: 'Note:'}),
                        ' Do not use the following keys in JDBC URL Params field as they will be overwritten by Hero Pixel:\n',
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
                    (0, s.jsx)(n.admonition, {
                      type: 'warning',
                      children: (0, s.jsx)(n.p, {
                        children:
                          'This is an advanced configuration option. Users are advised to use it with caution.',
                      }),
                    }),
                    '\n',
                  ],
                }),
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
                            ' to use an RSA Private as your secret for establishing the SSH tunnel',
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
                    (0, s.jsx)(n.admonition, {
                      type: 'warning',
                      children: (0, s.jsxs)(n.p, {
                        children: [
                          'Since Hero Pixel Cloud requires encrypted communication, select ',
                          (0, s.jsx)(n.strong, {
                            children: 'SSH Key Authentication',
                          }),
                          ' or ',
                          (0, s.jsx)(n.strong, {
                            children: 'Password Authentication',
                          }),
                          ' if you selected ',
                          (0, s.jsx)(n.strong, {children: 'disable'}),
                          ', ',
                          (0, s.jsx)(n.strong, {children: 'allow'}),
                          ', or ',
                          (0, s.jsx)(n.strong, {children: 'prefer'}),
                          ' as the ',
                          (0, s.jsx)(n.strong, {children: 'SSL Mode'}),
                          '; otherwise, the connection will fail.',
                        ],
                      }),
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
                        (0, s.jsx)(n.strong, {children: 'Set up destination'}),
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
            (0, s.jsx)(n.h2, {
              id: 'supported-sync-modes',
              children: 'Supported sync modes',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The Yellowbrick destination connector supports the sync modes:',
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
                'Each stream will be mapped to a separate raw table in Yellowbrick. The default schema in which the raw tables are\ncreated is ',
                (0, s.jsx)(n.code, {children: 'airbyte_internal'}),
                '. This can be overridden in the configuration.\nEach table will contain 3 columns:',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_raw_id'}),
                    ': a uuid assigned by Hero Pixel to each event that is processed. The column type in\nYellowbrick is ',
                    (0, s.jsx)(n.code, {children: 'VARCHAR'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_extracted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.\nThe column type in Yellowbrick is ',
                    (0, s.jsx)(n.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_loaded_at'}),
                    ': a timestamp representing when the row was processed into final table.\nThe column type in Yellowbrick is ',
                    (0, s.jsx)(n.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data. The column type in Yellowbrick\nis ',
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
                        children: 'Yellowbrick Type',
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
                          children: 'VARCHAR',
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
                          children: 'VARCHAR',
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
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => r, x: () => o});
      var s = t(3696);
      const i = {},
        l = s.createContext(i);
      function r(e) {
        const n = s.useContext(l);
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
            : r(e.components)),
          s.createElement(l.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

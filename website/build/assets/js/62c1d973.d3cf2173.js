/*! For license information please see 62c1d973.d3cf2173.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [136],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
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
          o.call(n, s) && !a.hasOwnProperty(s) && (r[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === r[s] && (r[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: l.current,
        };
      }
      (n.Fragment = r), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    5333: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      var s = t(2540),
        i = t(3023);
      const r = {id: 'mysql', title: 'MySQL', description: 'desc'},
        o = 'MySQL',
        l = {
          id: 'destinations/mysql',
          title: 'MySQL',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/mysql.md',
          sourceDirName: 'destinations',
          slug: '/destinations/mysql',
          permalink: '/docs/destinations/mysql',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {id: 'mysql', title: 'MySQL', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'MsSQL', permalink: '/docs/destinations/mssql'},
          next: {title: 'Ontraport', permalink: '/docs/destinations/ontraport'},
        },
        a = {},
        d = [
          {value: 'Features', id: 'features', level: 2},
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Troubleshooting', id: 'troubleshooting', level: 4},
          {value: 'Network Access', id: 'network-access', level: 4},
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {value: 'Target Database', id: 'target-database', level: 4},
          {
            value: 'Setup the MySQL destination in HeroPixel',
            id: 'setup-the-mysql-destination-in-heropixel',
            level: 3,
          },
          {
            value: 'Default JDBC URL Parameters',
            id: 'default-jdbc-url-parameters',
            level: 3,
          },
          {value: 'Known Limitations', id: 'known-limitations', level: 2},
          {
            value: 'Connection via SSH Tunnel',
            id: 'connection-via-ssh-tunnel',
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
            (0, s.jsx)(n.h1, {id: 'mysql', children: 'MySQL'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'There are two flavors of connectors for this destination:',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'destination-mysql connector. Supports both SSL and non SSL connections.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'destination-mysql-strict-encrypt connector. Pretty same as connector above, but supports SSL connections only.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'features', children: 'Features'}),
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
                          children: 'No',
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
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'SSH Tunnel Connection',
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
            (0, s.jsx)(n.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: "To use the MySQL destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'To sync data to MySQL ',
                    (0, s.jsx)(n.strong, {children: 'with'}),
                    ' typing and deduping: MySQL database 8.0.0 or above',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'To sync data to MySQL ',
                    (0, s.jsx)(n.strong, {children: 'without'}),
                    ' typing and deduping: MySQL 5.0 or above.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Some users reported that they could not connect to Amazon RDS MySQL or MariaDB. This can be diagnosed with the error message: ',
                (0, s.jsx)(n.code, {
                  children: 'Cannot create a PoolableConnectionFactory',
                }),
                '.\nTo solve this issue add ',
                (0, s.jsx)(n.code, {children: 'enabledTLSProtocols=TLSv1.2'}),
                ' in the JDBC parameters.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'network-access',
              children: 'Network Access',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Make sure your MySQL database can be accessed by HeroPixel If your database is within a VPC, you may need to allow access from the HHeroPixelPs.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'permissions',
              children: (0, s.jsx)(n.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'You need a MySQL user with ',
                (0, s.jsx)(n.code, {children: 'CREATE, INSERT, SELECT, DROP'}),
                ' permissions. We highly recommend creating an HeroPixelspecific user for this purpose.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'target-database',
              children: 'Target Database',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "MySQL doesn't differentiate between a database and schema. A database is essentially a schema where all the tables live in. You will need to choose an existing database or create a new database. This will act as a default database/schema where the tables will be created if the source doesn't provide a namespace.",
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'setup-the-mysql-destination-in-heropixel',
              children: 'Setup the MySQL destination in HeroPixel',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Before setting up MySQL destination in HeroPixel you need to set the ',
                (0, s.jsx)(n.a, {
                  href: 'https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile',
                  children: 'local_infile',
                }),
                ' system variable to true. You can do this by running the query ',
                (0, s.jsx)(n.code, {
                  children: 'SET GLOBAL local_infile = true',
                }),
                ' with a user with ',
                (0, s.jsx)(n.a, {
                  href: 'https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#priv_system-variables-admin',
                  children: 'SYSTEM_VARIABLES_ADMIN',
                }),
                ' permission. This is required cause HHeroPixelses ',
                (0, s.jsx)(n.code, {children: 'LOAD DATA LOCAL INFILE'}),
                ' to load data into table.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "You should now have all the requirements needed to configure MySQL as a destination in the UI. You'll need the following information to configure the MySQL destination:",
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Host'}),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Port'}),
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
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Database'}),
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'jdbc_url_params'}),
                    ' (Optional)',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'default-jdbc-url-parameters',
              children: 'Default JDBC URL Parameters',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The following JDBC URL parameters are set by HeroPixeland cannot be overridden by the ',
                (0, s.jsx)(n.code, {children: 'jdbc_url_params'}),
                ' field:',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: 'useSSL=true'}),
                    ' (unless ',
                    (0, s.jsx)(n.code, {children: 'ssl'}),
                    ' is set to false)',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: 'requireSSL=true'}),
                    ' (unless ',
                    (0, s.jsx)(n.code, {children: 'ssl'}),
                    ' is set to false)',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {
                      children: 'verifyServerCertificate=false',
                    }),
                    ' (unless ',
                    (0, s.jsx)(n.code, {children: 'ssl'}),
                    ' is set to false)',
                  ],
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.code, {
                    children: 'zeroDateTimeBehavior=convertToNull',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'known-limitations',
              children: 'Known Limitations',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Note that MySQL documentation discusses identifiers case sensitivity using the ',
                (0, s.jsx)(n.code, {children: 'lower_case_table_names'}),
                ' system variable. One of their recommendations is:',
              ],
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-text',
                children:
                  '"It is best to adopt a consistent convention, such as always creating and referring to databases and tables using lowercase names.\n This convention is recommended for maximum portability and ease of use."\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.a, {
                href: 'https://dev.mysql.com/doc/refman/8.0/en/identifier-case-sensitivity.html',
                children: 'Source: MySQL docs',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'As a result, HeroPixelMySQL destination forces all identifier (table, schema and columns) names to be lowercase.',
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'connection-via-ssh-tunnel',
              children: 'Connection via SSH Tunnel',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'HeroPixelhas the ability to connect to a MySQl instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address).',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'When using an SSH tunnel, you are configuring HeroPixelto connect to an intermediate server (a.k.a. a bastion sever) that ',
                (0, s.jsx)(n.em, {children: 'does'}),
                ' have direct access to the database. HHeroPixelonnects to the bastion and then asks the bastion to connect directly to the server.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Using this feature requires additional configuration, when creating the destination. We will talk through what each piece of configuration means.',
            }),
            '\n',
            (0, s.jsxs)(n.ol, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Configure all fields for the destination as you normally would, except ',
                        (0, s.jsx)(n.code, {children: 'SSH Tunnel Method'}),
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
                        (0, s.jsx)(n.code, {children: 'SSH Tunnel Method'}),
                        ' defaults to ',
                        (0, s.jsx)(n.code, {children: 'No Tunnel'}),
                        ' (meaning a direct connection). If you want to use an SSH Tunnel choose ',
                        (0, s.jsx)(n.code, {
                          children: 'SSH Key Authentication',
                        }),
                        ' or ',
                        (0, s.jsx)(n.code, {
                          children: 'Password Authentication',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(n.ol, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            'Choose ',
                            (0, s.jsx)(n.code, {
                              children: 'Key Authentication',
                            }),
                            ' if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key).',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            'Choose ',
                            (0, s.jsx)(n.code, {
                              children: 'Password Authentication',
                            }),
                            ' if you will be using a password as your secret for establishing the SSH Tunnel.',
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
                          'Since HeroPixelrequires encrypted communication, select ',
                          (0, s.jsx)(n.strong, {
                            children: 'SSH Key Authentication',
                          }),
                          ' or ',
                          (0, s.jsx)(n.strong, {
                            children: 'Password Authentication',
                          }),
                          ' if you selected ',
                          (0, s.jsx)(n.strong, {children: 'preferred'}),
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
                        (0, s.jsx)(n.code, {
                          children: 'SSH Tunnel Jump Server Host',
                        }),
                        ' refers to the intermediate (bastion) server that HeroPixelwill connect to. This should be a hostname or an IP Address.',
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
                        (0, s.jsx)(n.code, {children: 'SSH Connection Port'}),
                        ' is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ',
                        (0, s.jsx)(n.code, {children: '22'}),
                        ', so unless you have explicitly changed something, go with the default.',
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
                        (0, s.jsx)(n.code, {children: 'SSH Login Username'}),
                        ' is the username that HeroPixelshould use when connection to the bastion server. This is NOT the MySQl username.',
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
                        'If you are using ',
                        (0, s.jsx)(n.code, {
                          children: 'Password Authentication',
                        }),
                        ', then ',
                        (0, s.jsx)(n.code, {children: 'SSH Login Username'}),
                        ' should be set to the password of the User from the previous step. If you are using ',
                        (0, s.jsx)(n.code, {
                          children: 'SSH Key Authentication',
                        }),
                        ' leave this blank. Again, this is not the MySQl password, but the password for the OS-user that HeroPixelis using to perform commands on the bastion.',
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
                        'If you are using ',
                        (0, s.jsx)(n.code, {
                          children: 'SSH Key Authentication',
                        }),
                        ', then ',
                        (0, s.jsx)(n.code, {children: 'SSH Private Key'}),
                        ' should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ',
                        (0, s.jsx)(n.code, {
                          children: '-----BEGIN RSA PRIVATE KEY-----',
                        }),
                        ' and ending with ',
                        (0, s.jsx)(n.code, {
                          children: '-----END RSA PRIVATE KEY-----',
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
      t.d(n, {R: () => o, x: () => l});
      var s = t(3696);
      const i = {},
        r = s.createContext(i);
      function o(e) {
        const n = s.useContext(r);
        return s.useMemo(
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
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          s.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
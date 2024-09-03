/*! For license information please see 3a9a46de.880aa0b6.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4546],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var s,
          r = {},
          d = null,
          a = null;
        for (s in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          o.call(n, s) && !c.hasOwnProperty(s) && (r[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === r[s] && (r[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: r,
          _owner: l.current,
        };
      }
      (n.Fragment = r), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    8807: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      var s = t(2540),
        i = t(3023);
      const r = {id: 'mssql', title: 'MsSQL', description: 'desc'},
        o = 'MSSQL',
        l = {
          id: 'destinations/mssql',
          title: 'MsSQL',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/mssql.md',
          sourceDirName: 'destinations',
          slug: '/destinations/mssql',
          permalink: '/docs/destinations/mssql',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {id: 'mssql', title: 'MsSQL', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'MongoDB', permalink: '/docs/destinations/mongodb'},
          next: {title: 'MySQL', permalink: '/docs/destinations/mysql'},
        },
        c = {},
        d = [
          {value: 'Features', id: 'features', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 2},
          {
            value:
              'Microsoft SQL Server specifics or why NVARCHAR type is used here:',
            id: 'microsoft-sql-server-specifics-or-why-nvarchar-type-is-used-here',
            level: 4,
          },
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {
            value: 'Normalization Requirements',
            id: 'normalization-requirements',
            level: 3,
          },
          {value: 'Setup guide', id: 'setup-guide', level: 3},
          {value: 'Network Access', id: 'network-access', level: 4},
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {value: 'Target Database', id: 'target-database', level: 4},
          {
            value: 'SSL configuration (optional)',
            id: 'ssl-configuration-optional',
            level: 4,
          },
          {
            value: 'Setup the MSSQL destination in HeroPixel',
            id: 'setup-the-mssql-destination-in-heropixel',
            level: 3,
          },
          {
            value: 'Connection via SSH Tunnel',
            id: 'connection-via-ssh-tunnel',
            level: 2,
          },
        ];
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
            (0, s.jsx)(n.h1, {id: 'mssql', children: 'MSSQL'}),
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
            (0, s.jsx)(n.h2, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Each stream will be output into its own table in SQL Server. Each table will contain 3 columns:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_ab_id'}),
                    ': a uuid assigned by HeroPixelto each event that is processed. The column type in SQL Server is ',
                    (0, s.jsx)(n.code, {children: 'VARCHAR(64)'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source. The column type in SQL Server is ',
                    (0, s.jsx)(n.code, {children: 'DATETIMEOFFSET(7)'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_data'}),
                    ': a JSON blob representing with the event data. The column type in SQL Server is ',
                    (0, s.jsx)(n.code, {children: 'NVARCHAR(MAX)'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'microsoft-sql-server-specifics-or-why-nvarchar-type-is-used-here',
              children:
                'Microsoft SQL Server specifics or why NVARCHAR type is used here:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'NVARCHAR is Unicode - 2 bytes per character, therefore max. of 1 billion characters; will handle East Asian, Arabic, Hebrew, Cyrillic etc. characters just fine.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    "VARCHAR is non-Unicode - 1 byte per character, max. capacity is 2 billion characters, but limited to the character set you're SQL Server is using, basically - no support for those languages mentioned before",
                }),
                '\n',
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
              children: "To use the SQL Server destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'MS SQL Server: ',
                (0, s.jsx)(n.code, {children: 'Azure SQL Database'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'Azure Synapse Analytics'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'Azure SQL Managed Instance'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2019'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2017'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2016'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2014'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2012'}),
                ', or ',
                (0, s.jsx)(n.code, {children: 'PDW 2008R2 AU34'}),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'normalization-requirements',
              children: 'Normalization Requirements',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'To sync ',
                (0, s.jsx)(n.strong, {children: 'with'}),
                " normalization you'll need to use MS SQL Server of the following versions: ",
                (0, s.jsx)(n.code, {children: 'SQL Server 2019'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2017'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2016'}),
                ', ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2014'}),
                '. The work of normalization on ',
                (0, s.jsx)(n.code, {children: 'SQL Server 2012'}),
                ' and bellow are not guaranteed.',
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
                    'MS SQL Server: ',
                    (0, s.jsx)(n.code, {children: 'Azure SQL Database'}),
                    ', ',
                    (0, s.jsx)(n.code, {children: 'Azure Synapse Analytics'}),
                    ', ',
                    (0, s.jsx)(n.code, {
                      children: 'Azure SQL Managed Instance',
                    }),
                    ', ',
                    (0, s.jsx)(n.code, {children: 'SQL Server 2019'}),
                    ', ',
                    (0, s.jsx)(n.code, {children: 'SQL Server 2017'}),
                    ', ',
                    (0, s.jsx)(n.code, {children: 'SQL Server 2016'}),
                    ', ',
                    (0, s.jsx)(n.code, {children: 'SQL Server 2014'}),
                    ', ',
                    (0, s.jsx)(n.code, {children: 'SQL Server 2012'}),
                    ', or ',
                    (0, s.jsx)(n.code, {children: 'PDW 2008R2 AU34'}),
                    '.',
                  ],
                }),
                '\n',
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
                'Make sure your SQL Server database can be accessed by HeroPixel If your database is within a VPC, you may need to allow access from the HHeroPixelPs.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'permissions',
              children: (0, s.jsx)(n.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You need a user configured in SQL Server that can create tables and write rows. We highly recommend creating an HeroPixelspecific user for this purpose.\nIn order to allow for normalization, please grant ALTER permissions for the user configured.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'target-database',
              children: 'Target Database',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You will need to choose an existing database or create a new database that will be used to store synced data from HeroPixel',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'ssl-configuration-optional',
              children: 'SSL configuration (optional)',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'HeroPixelsupports a SSL-encrypted connection to the database. If you want to use SSL to securely access your database, ensure that ',
                (0, s.jsx)(n.a, {
                  href: 'https://support.microsoft.com/en-us/topic/how-to-enable-ssl-encryption-for-an-instance-of-sql-server-by-using-microsoft-management-console-1c7ae22f-8518-2b3e-93eb-d735af9e344c',
                  children:
                    'the server is configured to use an SSL certificate.',
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'setup-the-mssql-destination-in-heropixel',
              children: 'Setup the MSSQL destination in HeroPixel',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "You should now have all the requirements needed to configure SQL Server as a destination in the UI. You'll need the following information to configure the MSSQL destination:",
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
                  children: (0, s.jsx)(n.strong, {children: 'Schema'}),
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {children: 'Database'}),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(n.li, {
                          children:
                            'This database needs to exist within the schema provided.',
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
                    (0, s.jsx)(n.strong, {children: 'SSL Method'}),
                    ':',
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            'The SSL configuration supports three modes: Unencrypted, Encrypted (trust server certificate), and Encrypted (verify certificate).',
                            '\n',
                            (0, s.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    (0, s.jsx)(n.strong, {
                                      children: 'Unencrypted',
                                    }),
                                    ': Do not use SSL encryption on the database connection',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    (0, s.jsx)(n.strong, {
                                      children:
                                        'Encrypted (trust server certificate)',
                                    }),
                                    ": Use SSL encryption without verifying the server's certificate. This is useful for self-signed certificates in testing scenarios, but should not be used in production.",
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                  children: [
                                    (0, s.jsx)(n.strong, {
                                      children:
                                        'Encrypted (verify certificate)',
                                    }),
                                    ": Use the server's SSL certificate, after standard certificate verification.",
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
                              children: 'Host Name In Certificate',
                            }),
                            " (optional): When using certificate verification, this property can be set to specify an expected name for added security. If this value is present, and the server's certificate's host name does not match it, certificate verification will fail.",
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
            (0, s.jsx)(n.h2, {
              id: 'connection-via-ssh-tunnel',
              children: 'Connection via SSH Tunnel',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'HeroPixelhas the ability to connect to the MS SQL Server instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address).',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'When using an SSH tunnel, you are configuring HeroPixelto connect to an intermediate server (a.k.a. a bastion sever) that have direct access to the database. HHeroPixelonnects to the bastion and then asks the bastion to connect directly to the server.',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means.',
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
                        'Configure all fields for the source as you normally would, except ',
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
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'Choose ',
                        (0, s.jsx)(n.code, {children: 'Key Authentication'}),
                        ' if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key).',
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
                        ',',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'so unless you have explicitly changed something, go with the default.',
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
                        ' is the username that HeroPixelshould use when connection to the bastion server. This is NOT the MS SQL Server username.',
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
                        ' should be set to the password of the User from the previous step.',
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'If you are using ',
                        (0, s.jsx)(n.code, {
                          children: 'SSH Key Authentication',
                        }),
                        ' leave this blank. Again, this is not the MS SQL Server password, but the password for the OS-user that',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(n.p, {
                      children:
                        'HeroPixelis using to perform commands on the bastion.',
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
                        ' should be set to the RSA Private Key that you are using to create the SSH connection.',
                      ],
                    }),
                    '\n',
                    (0, s.jsxs)(n.p, {
                      children: [
                        'This should be the full contents of the key file starting with ',
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
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(a, {...e})})
          : a(e);
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

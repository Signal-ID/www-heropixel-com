/*! For license information please see 806ea99f.08b8c8ae.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2351],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        o =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var s,
          l = {},
          d = null,
          a = null;
        for (s in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          r.call(t, s) && !c.hasOwnProperty(s) && (l[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === l[s] && (l[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: l,
          _owner: o.current,
        };
      }
      (t.Fragment = l), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    6301: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => d,
        });
      var s = n(2540),
        i = n(3023);
      const l = {id: 'oracle', title: 'Oracle', description: 'desc'},
        r = 'Oracle DB',
        o = {
          id: 'destinations/oracle',
          title: 'Oracle',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/oracle.md',
          sourceDirName: 'destinations',
          slug: '/destinations/oracle',
          permalink: '/docs/destinations/oracle',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {id: 'oracle', title: 'Oracle', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Ontraport',
            permalink: '/docs/destinations/ontraport',
          },
          next: {title: 'Pinecone', permalink: '/docs/destinations/pinecone'},
        },
        c = {},
        d = [
          {value: 'Features', id: 'features', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 2},
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 4},
          {value: 'Network Access', id: 'network-access', level: 4},
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {
            value: 'Setup the Oracle destination in HeroPixel',
            id: 'setup-the-oracle-destination-in-heropixel',
            level: 3,
          },
          {value: 'Encryption Options', id: 'encryption-options', level: 2},
        ];
      function a(e) {
        const t = {
          code: 'code',
          em: 'em',
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
            (0, s.jsx)(t.h1, {id: 'oracle-db', children: 'Oracle DB'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'features', children: 'Features'}),
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
                          children: 'Incremental - Append + Deduped',
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
                          children: 'Yes',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Basic Normalization',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: "Doesn't support for nested json yet",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SSH Tunnel Connection',
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
                          children: 'Encryption',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Support Native Network Encryption (NNE) as well as TLS using SSL cert',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'By default, each stream will be output into its own table in Oracle. Each table will contain 3 columns:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_AIRBYTE_AB_ID'}),
                    ': a uuid assigned by HeroPixelto each event that is processed. The column type in Oracle is ',
                    (0, s.jsx)(t.code, {children: 'VARCHAR(64)'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_AIRBYTE_EMITTED_AT'}),
                    ': a timestamp representing when the event was pulled from the data source. The column type in Oracle is ',
                    (0, s.jsx)(t.code, {children: 'TIMESTAMP WITH TIME ZONE'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_AIRBYTE_DATA'}),
                    ': a json blob representing with the event data. The column type in Oracles is ',
                    (0, s.jsx)(t.code, {children: 'NCLOB'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Enabling normalization will also create normalized, strongly typed tables.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: "To use the Oracle destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children: 'An Oracle server version 21 or above',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'network-access',
              children: 'Network Access',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Make sure your Oracle database can be accessed by HeroPixel If your database is within a VPC, you may need to allow access from the HHeroPixelPs.',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'permissions',
              children: (0, s.jsx)(t.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'As HeroPixelnamespaces allows us to store data into different schemas, we have different scenarios and list of required permissions:',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Login user',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Destination user',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Required permissions',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Comment',
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
                          children: 'DBA User',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Any user',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: '-',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Regular user',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Same user as login',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Create, drop and write table, create session',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Regular user',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Any existing user',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Create, drop and write ANY table, create session',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Grants can be provided on a system level by DBA or by target user directly',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Regular user',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Not existing user',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Create, drop and write ANY table, create user, create session',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Grants should be provided on a system level by DBA',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'We highly recommend creating an HeroPixelspecific user for this purpose.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'setup-the-oracle-destination-in-heropixel',
              children: 'Setup the Oracle destination in HeroPixel',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                "You should now have all the requirements needed to configure Oracle as a destination in the UI. You'll need the following information to configure the Oracle destination:",
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
                  children: (0, s.jsx)(t.strong, {children: 'Database'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Connection via SSH Tunnel',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'HeroPixelhas the ability to connect to a Oracle instance via an SSH Tunnel. The reason you might want to do this because it is not possible (or against security policy) to connect to the database directly (e.g. it does not have a public IP address).',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'When using an SSH tunnel, you are configuring HeroPixelto connect to an intermediate server (a.k.a. a bastion sever) that ',
                (0, s.jsx)(t.em, {children: 'does'}),
                ' have direct access to the database. HHeroPixelonnects to the bastion and then asks the bastion to connect directly to the server.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means.',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Configure all fields for the source as you normally would, except ',
                    (0, s.jsx)(t.code, {children: 'SSH Tunnel Method'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'SSH Tunnel Method'}),
                    ' defaults to ',
                    (0, s.jsx)(t.code, {children: 'No Tunnel'}),
                    ' (meaning a direct connection). If you want to use an SSH Tunnel choose ',
                    (0, s.jsx)(t.code, {children: 'SSH Key Authentication'}),
                    ' or ',
                    (0, s.jsx)(t.code, {children: 'Password Authentication'}),
                    '.',
                    '\n',
                    (0, s.jsxs)(t.ol, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Choose ',
                            (0, s.jsx)(t.code, {
                              children: 'Key Authentication',
                            }),
                            ' if you will be using an RSA private key as your secret for establishing the SSH Tunnel (see below for more information on generating this key).',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Choose ',
                            (0, s.jsx)(t.code, {
                              children: 'Password Authentication',
                            }),
                            ' if you will be using a password as your secret for establishing the SSH Tunnel.',
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
                    (0, s.jsx)(t.code, {
                      children: 'SSH Tunnel Jump Server Host',
                    }),
                    ' refers to the intermediate (bastion) server that HeroPixelwill connect to. This should be a hostname or an IP Address.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'SSH Connection Port'}),
                    ' is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ',
                    (0, s.jsx)(t.code, {children: '22'}),
                    ', so unless you have explicitly changed something, go with the default.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'SSH Login Username'}),
                    ' is the username that HeroPixelshould use when connection to the bastion server. This is NOT the Oracle username.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'If you are using ',
                    (0, s.jsx)(t.code, {children: 'Password Authentication'}),
                    ', then ',
                    (0, s.jsx)(t.code, {children: 'SSH Login Username'}),
                    ' should be set to the password of the User from the previous step. If you are using ',
                    (0, s.jsx)(t.code, {children: 'SSH Key Authentication'}),
                    ' leave this blank. Again, this is not the Oracle password, but the password for the OS-user that HeroPixelis using to perform commands on the bastion.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'If you are using ',
                    (0, s.jsx)(t.code, {children: 'SSH Key Authentication'}),
                    ', then ',
                    (0, s.jsx)(t.code, {children: 'SSH Private Key'}),
                    ' should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ',
                    (0, s.jsx)(t.code, {
                      children: '-----BEGIN RSA PRIVATE KEY-----',
                    }),
                    ' and ending with ',
                    (0, s.jsx)(t.code, {
                      children: '-----END RSA PRIVATE KEY-----',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'encryption-options',
              children: 'Encryption Options',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'HeroPixelhas the ability to connect to the Oracle source with 3 network connectivity options:',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'Unencrypted'}),
                    ' the connection will be made using the TCP protocol. In this case, all data over the network will be transmitted in unencrypted form.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'Native network encryption'}),
                    ' gives you the ability to encrypt database connections, without the configuration overhead of TCP / IP and SSL / TLS and without the need to open and listen on different ports. In this case, the ',
                    (0, s.jsx)(t.em, {children: 'SQLNET.ENCRYPTION_CLIENT'}),
                    '\noption will always be set as ',
                    (0, s.jsx)(t.em, {children: 'REQUIRED'}),
                    ' by default: The client or server will only accept encrypted traffic, but the user has the opportunity to choose an ',
                    (0, s.jsx)(t.code, {children: 'Encryption algorithm'}),
                    ' according to the security policies he needs.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'TLS Encrypted'}),
                    ' (verify certificate) - if this option is selected, data transfer will be transfered using the TLS protocol, taking into account the handshake procedure and certificate verification. To use this option, insert the content of the certificate issued by the server into the ',
                    (0, s.jsx)(t.code, {children: 'SSL PEM file'}),
                    ' field',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => o});
      var s = n(3696);
      const i = {},
        l = s.createContext(i);
      function r(e) {
        const t = s.useContext(l);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function o(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          s.createElement(l.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
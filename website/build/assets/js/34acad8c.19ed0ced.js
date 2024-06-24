/*! For license information please see 34acad8c.19ed0ced.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7050],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var s,
          o = {},
          d = null,
          c = null;
        for (s in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          r.call(n, s) && !l.hasOwnProperty(s) && (o[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === o[s] && (o[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: o,
          _owner: a.current,
        };
      }
      (n.Fragment = o), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    1041: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => d,
        });
      var s = t(2540),
        i = t(3023);
      const o = {id: 'mongodb', title: 'MongoDB', description: 'desc'},
        r = 'MongoDB',
        a = {
          id: 'destinations/mongodb',
          title: 'MongoDB',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/mongodb.md',
          sourceDirName: 'destinations',
          slug: '/destinations/mongodb',
          permalink: '/docs/destinations/mongodb',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/mongodb.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'mongodb', title: 'MongoDB', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'Milvus', permalink: '/docs/destinations/milvus'},
          next: {title: 'MsSQL', permalink: '/docs/destinations/mssql'},
        },
        l = {},
        d = [
          {value: 'Features', id: 'features', level: 2},
          {
            value: 'Output Schema for <code>destination-mongodb</code>',
            id: 'output-schema-for-destination-mongodb',
            level: 2,
          },
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 4},
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {value: 'Target Database', id: 'target-database', level: 4},
          {
            value: 'Setup the MongoDB destination in Hero Pixel',
            id: 'setup-the-mongodb-destination-in-hero-pixel',
            level: 3,
          },
          {
            value: 'Connection via SSH Tunnel',
            id: 'connection-via-ssh-tunnel',
            level: 3,
          },
          {value: 'Naming Conventions', id: 'naming-conventions', level: 2},
          {
            value: 'Database Name Case Sensitivity',
            id: 'database-name-case-sensitivity',
            level: 4,
          },
          {
            value: 'Restrictions on Database Names for Windows',
            id: 'restrictions-on-database-names-for-windows',
            level: 4,
          },
          {
            value: 'Restrictions on Database Names for Unix and Linux Systems',
            id: 'restrictions-on-database-names-for-unix-and-linux-systems',
            level: 4,
          },
          {
            value: 'Length of Database Names',
            id: 'length-of-database-names',
            level: 4,
          },
          {
            value: 'Restriction on Collection Names',
            id: 'restriction-on-collection-names',
            level: 4,
          },
        ];
      function c(e) {
        const n = {
          a: 'a',
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
            (0, s.jsx)(n.h1, {id: 'mongodb', children: 'MongoDB'}),
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
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.h2, {
              id: 'output-schema-for-destination-mongodb',
              children: [
                'Output Schema for ',
                (0, s.jsx)(n.code, {children: 'destination-mongodb'}),
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Each stream will be output into its own collection in MongoDB. Each collection will contain 3 fields:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_id'}),
                    ': an identifier assigned to each document that is processed. The filed type in MongoDB is ',
                    (0, s.jsx)(n.code, {children: 'String'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source. The field type in MongoDB is ',
                    (0, s.jsx)(n.code, {children: 'Timestamp'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data. The field type in MongoDB is ',
                    (0, s.jsx)(n.code, {children: 'Object'}),
                    '.',
                  ],
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
            (0, s.jsx)(n.h4, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: "To use the MongoDB destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {children: 'A MongoDB server'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'permissions',
              children: (0, s.jsx)(n.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You need a MongoDB user that can create collections and write documents. We highly recommend creating an Hero Pixel-specific user for this purpose.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'target-database',
              children: 'Target Database',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'You will need to choose an existing database or create a new database that will be used to store synced data from Hero Pixel.',
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'setup-the-mongodb-destination-in-hero-pixel',
              children: 'Setup the MongoDB destination in Hero Pixel',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "You should now have all the requirements needed to configure MongoDB as a destination in the UI. You'll need the following information to configure the MongoDB destination:",
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {
                      children: 'Standalone MongoDb instance',
                    }),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(n.li, {
                          children: 'Host: URL of the database',
                        }),
                        '\n',
                        (0, s.jsx)(n.li, {
                          children:
                            'Port: Port to use for connecting to the database',
                        }),
                        '\n',
                        (0, s.jsx)(n.li, {
                          children:
                            'TLS: indicates whether to create encrypted connection',
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
                    (0, s.jsx)(n.strong, {children: 'Replica Set'}),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(n.li, {
                          children:
                            'Server addresses: the members of a replica set',
                        }),
                        '\n',
                        (0, s.jsx)(n.li, {
                          children: 'Replica Set: A replica set name',
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
                    (0, s.jsx)(n.strong, {children: 'MongoDb Atlas Cluster'}),
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsx)(n.li, {
                          children:
                            'Cluster URL: URL of a cluster to connect to',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.strong, {children: 'Database'}),
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
              ],
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For more information regarding configuration parameters, please see ',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.mongodb.com/drivers/java/sync/v4.3/fundamentals/connection/',
                  children: 'MongoDb Documentation',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {
              id: 'connection-via-ssh-tunnel',
              children: 'Connection via SSH Tunnel',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Hero Pixel has the ability to connect to an MongoDB instance via an SSH Tunnel.\nThe reason you might want to do this because it is not possible (or against security policy) to connect to your MongoDB instance directly (e.g. it does not have a public IP address).',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'When using an SSH tunnel, you are configuring Hero Pixel to connect to an intermediate server (a.k.a. a bastion sever) that ',
                (0, s.jsx)(n.em, {children: 'does'}),
                ' have direct access to the MongoDB instance.\nHero Pixel connects to the bastion and then asks the bastion to connect directly to the server.',
              ],
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
                    'Configure all fields for the source as you normally would, except ',
                    (0, s.jsx)(n.code, {children: 'SSH Tunnel Method'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: 'SSH Tunnel Method'}),
                    ' defaults to ',
                    (0, s.jsx)(n.code, {children: 'No Tunnel'}),
                    ' (meaning a direct connection). If you want to use an SSH Tunnel choose ',
                    (0, s.jsx)(n.code, {children: 'SSH Key Authentication'}),
                    ' or ',
                    (0, s.jsx)(n.code, {children: 'Password Authentication'}),
                    '.',
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
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {
                      children: 'SSH Tunnel Jump Server Host',
                    }),
                    ' refers to the intermediate (bastion) server that Hero Pixel will connect to. This should be a hostname or an IP Address.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: 'SSH Connection Port'}),
                    ' is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ',
                    (0, s.jsx)(n.code, {children: '22'}),
                    ', so unless you have explicitly changed something, go with the default.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, {children: 'SSH Login Username'}),
                    ' is the username that Hero Pixel should use when connection to the bastion server. This is NOT the TiDB username.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'If you are using ',
                    (0, s.jsx)(n.code, {children: 'Password Authentication'}),
                    ', then ',
                    (0, s.jsx)(n.code, {children: 'SSH Login Username'}),
                    ' should be set to the password of the User from the previous step. If you are using ',
                    (0, s.jsx)(n.code, {children: 'SSH Key Authentication'}),
                    ' TiDB password, but the password for the OS-user that Hero Pixel is using to perform commands on the bastion.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    'If you are using ',
                    (0, s.jsx)(n.code, {children: 'SSH Key Authentication'}),
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
            (0, s.jsx)(n.h2, {
              id: 'naming-conventions',
              children: 'Naming Conventions',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The following information comes from the ',
                (0, s.jsx)(n.a, {
                  href: 'https://docs.mongodb.com/manual/reference/limits/',
                  children: 'MongoDB Limits and Thresholds',
                }),
                ' documentation.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'database-name-case-sensitivity',
              children: 'Database Name Case Sensitivity',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Since database names are case insensitive in MongoDB, database names cannot differ only by the case of the characters.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'restrictions-on-database-names-for-windows',
              children: 'Restrictions on Database Names for Windows',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For MongoDB deployments running on Windows, database names cannot contain any of the following characters: /. "$',
                (0, s.jsx)(n.em, {children: '<>:|?'}),
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Also database names cannot contain the null character.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'restrictions-on-database-names-for-unix-and-linux-systems',
              children:
                'Restrictions on Database Names for Unix and Linux Systems',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'For MongoDB deployments running on Unix and Linux systems, database names cannot contain any of the following characters: /. "$',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Also database names cannot contain the null character.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'length-of-database-names',
              children: 'Length of Database Names',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Database names cannot be empty and must have fewer than 64 characters.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'restriction-on-collection-names',
              children: 'Restriction on Collection Names',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'Collection names should begin with an underscore or a letter character, and cannot:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {children: 'contain the $.'}),
                '\n',
                (0, s.jsx)(n.li, {children: 'be an empty string (e.g. "").'}),
                '\n',
                (0, s.jsx)(n.li, {children: 'contain the null character.'}),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'begin with the system. prefix. (Reserved for internal use.)',
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
      t.d(n, {R: () => r, x: () => a});
      var s = t(3696);
      const i = {},
        o = s.createContext(i);
      function r(e) {
        const n = s.useContext(o);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          s.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

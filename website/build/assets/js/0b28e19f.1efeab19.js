/*! For license information please see 0b28e19f.1efeab19.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3256],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        c =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var s,
          r = {},
          a = null,
          d = null;
        for (s in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          l.call(t, s) && !o.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: a,
          ref: d,
          props: r,
          _owner: c.current,
        };
      }
      (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7156: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => a,
        });
      var s = n(2540),
        i = n(3023);
      const r = {
          id: 'elasticsearch',
          title: 'Elasticsearch',
          description: 'desc',
        },
        l = 'Elasticsearch',
        c = {
          id: 'destinations/elasticsearch',
          title: 'Elasticsearch',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/elasticsearch.md',
          sourceDirName: 'destinations',
          slug: '/destinations/elasticsearch',
          permalink: '/docs/destinations/elasticsearch',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/elasticsearch.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'elasticsearch',
            title: 'Elasticsearch',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {
            title: 'DynamoDB',
            permalink: '/docs/destinations/dynamodb',
          },
          next: {title: 'Firebolt', permalink: '/docs/destinations/firebolt'},
        },
        o = {},
        a = [
          {value: 'Sync overview', id: 'sync-overview', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Data type mapping', id: 'data-type-mapping', level: 3},
          {value: 'Features', id: 'features', level: 3},
          {
            value: 'Performance considerations',
            id: 'performance-considerations',
            level: 3,
          },
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'CA certificate', id: 'ca-certificate', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 3},
          {
            value: 'Connection via SSH Tunnel',
            id: 'connection-via-ssh-tunnel',
            level: 3,
          },
        ];
      function d(e) {
        const t = {
          a: 'a',
          br: 'br',
          code: 'code',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
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
            (0, s.jsx)(t.h1, {id: 'elasticsearch', children: 'Elasticsearch'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                "Elasticsearch is a Lucene based search engine that's a type of NoSql storage.",
                (0, s.jsx)(t.br, {}),
                '\n',
                'Documents are created in an ',
                (0, s.jsx)(t.code, {children: 'index'}),
                ', similar to a ',
                (0, s.jsx)(t.code, {children: 'table'}),
                'in a relation database.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'The output schema matches the input schema of a source.\nEach source ',
                (0, s.jsx)(t.code, {children: 'stream'}),
                ' becomes a destination ',
                (0, s.jsx)(t.code, {children: 'index'}),
                '.',
                (0, s.jsx)(t.br, {}),
                '\n',
                'For example, in with a relational database source -',
                (0, s.jsx)(t.br, {}),
                '\n',
                'The DB table name is mapped to the destination index.\nThe DB table columns become fields in the destination document.',
                (0, s.jsx)(t.br, {}),
                '\n',
                'Each row becomes a document in the destination index.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'data-type-mapping',
              children: 'Data type mapping',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.a, {
                  href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html',
                  children:
                    'See Elastic documentation for detailed information about the field types',
                }),
                "\nThis section should contain a table mapping each of the connector's data types to Hero Pixel types. At the moment, Hero Pixel uses the same types used by ",
                (0, s.jsx)(t.a, {
                  href: 'https://json-schema.org/understanding-json-schema/reference/index.html',
                  children: 'JSONSchema',
                }),
                '. ',
                (0, s.jsx)(t.code, {children: 'string'}),
                ', ',
                (0, s.jsx)(t.code, {children: 'date-time'}),
                ', ',
                (0, s.jsx)(t.code, {children: 'object'}),
                ', ',
                (0, s.jsx)(t.code, {children: 'array'}),
                ', ',
                (0, s.jsx)(t.code, {children: 'boolean'}),
                ', ',
                (0, s.jsx)(t.code, {children: 'integer'}),
                ', and ',
                (0, s.jsx)(t.code, {children: 'number'}),
                ' are the most commonly used data types.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Integration Type',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Hero Pixel Type',
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
                          children: 'text',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'string',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'date',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'date-time',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/date.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'object',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'object',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/object.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'array',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'array',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/array.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'boolean',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'boolean',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/boolean.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'numeric',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'numeric',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'number',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.a, {
                            href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/number.html',
                            children: 'more info',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'features', children: 'Features'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This section should contain a table with the following format:',
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
                          children: 'yes',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'yes',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Replicate Incremental Deletes',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'no',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SSL connection',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'yes',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'SSH Tunnel Support',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'yes',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'performance-considerations',
              children: 'Performance considerations',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Batch/bulk writes are performed. Large records may impact performance.',
                (0, s.jsx)(t.br, {}),
                '\n',
                'The connector should be enhanced to support variable batch sizes.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'Elasticsearch >= 7.x'}),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Configuration',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Endpoint URL [ex. ',
                            (0, s.jsx)(t.a, {
                              href: 'https://elasticsearch.savantly.net:9423',
                              children:
                                'https://elasticsearch.savantly.net:9423',
                            }),
                            ']',
                          ],
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children: 'Username [optional] (basic auth)',
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children: 'Password [optional] (basic auth)',
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children: 'CA certificate [optional]',
                        }),
                        '\n',
                        (0, s.jsx)(t.li, {children: 'Api key ID [optional]'}),
                        '\n',
                        (0, s.jsx)(t.li, {
                          children: 'Api key secret [optional]',
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
                    "If authentication is used, the user should have permission to create an index if it doesn't exist, and/or be able to ",
                    (0, s.jsx)(t.code, {children: 'create'}),
                    ' documents',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'ca-certificate',
              children: 'CA certificate',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Ca certificate may be fetched from the Elasticsearch server from /usr/share/elasticsearch/config/certs/http_ca.crt\nFetching example from dockerized Elasticsearch:\n',
                (0, s.jsx)(t.code, {
                  children:
                    'docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt .',
                }),
                " where es01 is a container's name. For more details please visit ",
                (0, s.jsx)(t.a, {
                  href: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html',
                  children:
                    'https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html',
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                "Enter the endpoint URL, select authentication method, and whether to use 'upsert' method when indexing new documents.",
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'connection-via-ssh-tunnel',
              children: 'Connection via SSH Tunnel',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Hero Pixel has the ability to connect to an Elastic instance via an SSH Tunnel.\nThe reason you might want to do this because it is not possible (or against security policy) to connect to your Elastic instance directly (e.g. it does not have a public IP address).',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'When using an SSH tunnel, you are configuring Hero Pixel to connect to an intermediate server (a.k.a. a bastion sever) that ',
                (0, s.jsx)(t.em, {children: 'does'}),
                ' have direct access to the Elastic instance.\nHero Pixel connects to the bastion and then asks the bastion to connect directly to the server.',
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
                    ' refers to the intermediate (bastion) server that Hero Pixel will connect to. This should be a hostname or an IP Address.',
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
                    ' is the username that Hero Pixel should use when connection to the bastion server. This is NOT the TiDB username.',
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
                    ' TiDB password, but the password for the OS-user that Hero Pixel is using to perform commands on the bastion.',
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
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => l, x: () => c});
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
      function c(e) {
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

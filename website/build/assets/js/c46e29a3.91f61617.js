/*! For license information please see c46e29a3.91f61617.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7702],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, t, n) {
        var s,
          r = {},
          o = null,
          a = null;
        for (s in (void 0 !== n && (o = '' + n),
        void 0 !== t.key && (o = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          d.call(t, s) && !c.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: o,
          ref: a,
          props: r,
          _owner: l.current,
        };
      }
      (t.Fragment = r), (t.jsx = o), (t.jsxs = o);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    6696: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => o,
        });
      var s = n(2540),
        i = n(3023);
      const r = {id: 'redis', title: 'Redis', description: 'redis'},
        d = 'Redis',
        l = {
          id: 'destinations/redis',
          title: 'Redis',
          description: 'redis',
          source: '@site/versioned_docs/version-0.0.1/destinations/redis.md',
          sourceDirName: 'destinations',
          slug: '/destinations/redis',
          permalink: '/docs/destinations/redis',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'redis', title: 'Redis', description: 'redis'},
          sidebar: 'integrations',
          previous: {
            title: 'RabbitMQ',
            permalink: '/docs/destinations/rabbitmq',
          },
          next: {title: 'Redshift', permalink: '/docs/destinations/redshift'},
        },
        c = {},
        o = [
          {value: 'Sync overview', id: 'sync-overview', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Features', id: 'features', level: 3},
          {
            value: 'Performance considerations',
            id: 'performance-considerations',
            level: 3,
          },
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
        ];
      function a(e) {
        const t = {
          code: 'code',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
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
            (0, s.jsx)(t.h1, {id: 'redis', children: 'Redis'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The incoming HeroPixeldata is structured depending on the target Redis cache/data type.\nThis connector maps an incoming data from a namespace and stream to a unique Redis key.',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'For the ',
                (0, s.jsx)(t.strong, {
                  children: (0, s.jsx)(t.em, {children: 'hash'}),
                }),
                ' implementation as a Redis data type the keys and the hashes are structured in the following way:',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.strong, {
                  children: (0, s.jsx)(t.em, {children: 'key'}),
                }),
                ':',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {children: ['namespace:stream', ':id']}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.strong, {
                  children: (0, s.jsx)(t.em, {children: 'hash'}),
                }),
                ':',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': Sequential id for a given key generated by using the INCR Redis command.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was received from the data source.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json text/object representing the data that was received from the data source.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'features', children: 'Features'}),
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
                        style: {textAlign: 'center'},
                        children: 'Support',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Existing keys in the Redis cache are deleted and replaced with the new keys.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'New keys are inserted in the same keyspace without touching the existing keys.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u274c',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Namespaces will be used to determine the correct Redis key.',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
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
                          style: {textAlign: 'center'},
                          children: '\u2705',
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
            (0, s.jsx)(t.p, {
              children:
                'As long as you have the necessary memory capacity for your cache, Redis should be able to handle even millions of records without any issues since the data is stored in-memory with the option to\nsave snapshots periodically on disk.',
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
                (0, s.jsx)(t.li, {
                  children:
                    'The connector is fully compatible with redis 2.8.x, 3.x.x and above',
                }),
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
                            (0, s.jsx)(t.strong, {
                              children: (0, s.jsx)(t.em, {children: 'host'}),
                            }),
                            ': Hostname or address of the Redis server where to connect.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: (0, s.jsx)(t.em, {children: 'port'}),
                            }),
                            ': Port of the Redis server where to connect.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: (0, s.jsx)(t.em, {
                                children: 'username',
                              }),
                            }),
                            ': Username for authenticating with the Redis server.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: (0, s.jsx)(t.em, {
                                children: 'password',
                              }),
                            }),
                            ': Password for authenticating with the Redis server.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: (0, s.jsx)(t.em, {
                                children: 'cache_type',
                              }),
                            }),
                            ': Redis cache/data type to use when storing the incoming messages. i.e hash,set,list,stream,etc.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: 'SSL toggle the switch to connect using SSL',
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'For SSL Modes, select:',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'disable'}),
                            ' to disable encrypted communication between HeroPixeland the source',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'verify-full'}),
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
      n.d(t, {R: () => d, x: () => l});
      var s = n(3696);
      const i = {},
        r = s.createContext(i);
      function d(e) {
        const t = s.useContext(r);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : d(e.components)),
          s.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

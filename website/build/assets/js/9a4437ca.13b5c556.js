/*! For license information please see 9a4437ca.13b5c556.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [535],
  {
    2192: (e, t, i) => {
      var n = i(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        d =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, t, i) {
        var n,
          r = {},
          o = null,
          c = null;
        for (n in (void 0 !== i && (o = '' + i),
        void 0 !== t.key && (o = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, n) && !a.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: o,
          ref: c,
          props: r,
          _owner: d.current,
        };
      }
      (t.Fragment = r), (t.jsx = o), (t.jsxs = o);
    },
    2540: (e, t, i) => {
      e.exports = i(2192);
    },
    3757: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => d,
          toc: () => o,
        });
      var n = i(2540),
        s = i(3023);
      const r = {id: 'rabbitmq', title: 'RabbitMQ', description: 'desc'},
        l = 'RabbitMQ',
        d = {
          id: 'destinations/rabbitmq',
          title: 'RabbitMQ',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/rabbitmq.md',
          sourceDirName: 'destinations',
          slug: '/destinations/rabbitmq',
          permalink: '/docs/destinations/rabbitmq',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/rabbitmq.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {id: 'rabbitmq', title: 'RabbitMQ', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'Qdrant', permalink: '/docs/destinations/qdrant'},
          next: {title: 'Redis', permalink: '/docs/destinations/redis'},
        },
        a = {},
        o = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Sync overview', id: 'sync-overview', level: 3},
          {value: 'Output schema', id: 'output-schema', level: 4},
          {value: 'Features', id: 'features', level: 4},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
        ];
      function c(e) {
        const t = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {id: 'rabbitmq', children: 'RabbitMQ'}),
            '\n',
            (0, n.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'The RabbitMQ destination allows you to send/stream data to a RabbitMQ routing key. RabbitMQ is one\nof the most popular open source message brokers.',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, n.jsx)(t.h4, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Each stream will be output a RabbitMQ message with properties. The message properties will be',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'content_type'}),
                    ': set as ',
                    (0, n.jsx)(t.code, {children: 'application/json'}),
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: 'headers'}),
                    ': message headers, which include:',
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.code, {children: 'stream'}),
                            ': the name of stream where the data is coming from',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.code, {children: 'namespace'}),
                            ': namespace if available from the stream',
                          ],
                        }),
                        '\n',
                        (0, n.jsxs)(t.li, {
                          children: [
                            (0, n.jsx)(t.code, {children: 'emitted_at'}),
                            ': timestamp the ',
                            (0, n.jsx)(t.code, {children: 'HeroRecord'}),
                            ' was emitted at.',
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
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'HeroRecord'}),
                ' data will be serialized as JSON and set as the RabbitMQ message body.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {id: 'features', children: 'Features'}),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?(Yes/No)',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, n.jsx)(t.p, {
              children: "To use the RabbitMQ destination, you'll need:",
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'A RabbitMQ host and credentials (username/password) to publish messages, if required.',
                }),
                '\n',
                (0, n.jsx)(t.li, {children: 'A RabbitMQ routing key.'}),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'RabbitMQ exchange is optional. If specified, a binding between exchange and routing key is\nrequired.',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: 'RabbitMQ port is optional (it defaults to 5672).',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: 'RabbitMQ virtual host is also optional.',
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, i) => {
      i.d(t, {R: () => l, x: () => d});
      var n = i(3696);
      const s = {},
        r = n.createContext(s);
      function l(e) {
        const t = n.useContext(r);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function d(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          n.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

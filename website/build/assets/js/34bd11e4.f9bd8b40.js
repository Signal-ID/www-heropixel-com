/*! For license information please see 34bd11e4.f9bd8b40.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [841],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, n) {
        var s,
          r = {},
          c = null,
          d = null;
        for (s in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          o.call(t, s) && !a.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: l.current,
        };
      }
      (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    2365: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var s = n(2540),
        i = n(3023);
      const r = {id: 'kafka', title: 'Kafka', description: 'desc'},
        o = 'Kafka',
        l = {
          id: 'destinations/kafka',
          title: 'Kafka',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/kafka.md',
          sourceDirName: 'destinations',
          slug: '/destinations/kafka',
          permalink: '/docs/destinations/kafka',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {id: 'kafka', title: 'Kafka', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'Iceberg', permalink: '/docs/destinations/iceberg'},
          next: {
            title: 'InfusionSoft/Keap',
            permalink: '/docs/destinations/keap',
          },
        },
        a = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Sync overview', id: 'sync-overview', level: 3},
          {value: 'Output schema', id: 'output-schema', level: 4},
          {value: 'Features', id: 'features', level: 4},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 3},
          {value: 'Network Access', id: 'network-access', level: 4},
          {value: '<strong>Permissions</strong>', id: 'permissions', level: 4},
          {value: 'Target topics', id: 'target-topics', level: 4},
          {
            value: 'Setup the Kafka destination in HeroPixel',
            id: 'setup-the-kafka-destination-in-heropixel',
            level: 3,
          },
        ];
      function d(e) {
        const t = {
          a: 'a',
          code: 'code',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
            (0, s.jsx)(t.h1, {id: 'kafka', children: 'Kafka'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The HeroPixelKafka destination allows you to sync data to Kafka. Each stream is written to the corresponding Kafka topic.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(t.h4, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'Each stream will be output into a Kafka topic.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Currently, this connector only writes data with JSON format. More formats (e.g. Apache Avro) will be supported in the future.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Each record will contain in its key the uuid assigned by HeroPixel and in the value these 3 fields:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': a uuid assigned by HeroPixelto each event that is processed.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_stream'}),
                    ": the name of each record's stream.",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'features', children: 'Features'}),
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
                          children: 'No',
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
                          children: 'No',
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
                  ],
                }),
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
            (0, s.jsx)(t.p, {
              children: "To use the Kafka destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'A Kafka cluster 1.0 or above.'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'network-access',
              children: 'Network Access',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Make sure your Kafka brokers can be accessed by HeroPixel',
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'permissions',
              children: (0, s.jsx)(t.strong, {children: 'Permissions'}),
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'HeroPixelshould be allowed to write messages into topics, and these topics should be created before writing into Kafka or, at least, enable the configuration in the brokers ',
                (0, s.jsx)(t.code, {children: 'auto.create.topics.enable'}),
                ' (which is not recommended for production environments).',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Note that if you choose to use dynamic topic names, you will probably need to enable ',
                (0, s.jsx)(t.code, {children: 'auto.create.topics.enable'}),
                " to avoid your connection failing if there was an update to the source connector's schema. Otherwise a hardcoded topic name may be best.",
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'target-topics', children: 'Target topics'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'You can determine the topics to which messages are written via the ',
                (0, s.jsx)(t.code, {children: 'topic_pattern'}),
                ' configuration parameter. Messages can be written to either a hardcoded, pre-defined topic, or dynamically written to different topics based on the namespace or stream they came from.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'To write all messages to a single hardcoded topic, enter its name in the ',
                (0, s.jsx)(t.code, {children: 'topic_pattern'}),
                ' field e.g: setting ',
                (0, s.jsx)(t.code, {children: 'topic_pattern'}),
                ' to ',
                (0, s.jsx)(t.code, {children: 'my-topic-name'}),
                ' will write all messages from all streams and namespaces to that topic.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'To define the output topics dynamically, you can leverage the ',
                (0, s.jsx)(t.code, {children: '{namespace}'}),
                ' and ',
                (0, s.jsx)(t.code, {children: '{stream}'}),
                ' pattern variables, which cause messages to be written to different topics based on the values present when producing the records. For example, setting the ',
                (0, s.jsx)(t.code, {children: 'topic_pattern'}),
                ' parameter to ',
                (0, s.jsx)(t.code, {children: 'hero/{namespace}/{stream}'}),
                ' means that messages from namespace ',
                (0, s.jsx)(t.code, {children: 'n1'}),
                ' and stream ',
                (0, s.jsx)(t.code, {children: 's1'}),
                ' will get written to the topic ',
                (0, s.jsx)(t.code, {children: 'hero_syncs/n1/s1'}),
                ', and messages from ',
                (0, s.jsx)(t.code, {children: 's2'}),
                ' to ',
                (0, s.jsx)(t.code, {children: 'hero_syncs/n1/s2'}),
                ' etc.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'If you define output topic dynamically, you might want to enable ',
                (0, s.jsx)(t.code, {children: 'auto.create.topics.enable'}),
                " to avoid your connection failing if there was an update to the source connector's schema. Otherwise, you'll need to manually create topics in Kafka as they are added/updated in the source, which is the recommended option for production environments.",
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.strong, {children: 'NOTICE'}),
                ': a naming convention transformation will be applied to the target topic name using the ',
                (0, s.jsx)(t.code, {children: 'StandardNameTransformer'}),
                ' so that some special characters will be replaced.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'setup-the-kafka-destination-in-heropixel',
              children: 'Setup the Kafka destination in HeroPixel',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'You should now have all the requirements needed to configure Kafka as a destination in the UI. You can configure the following parameters on the Kafka destination (though many of these are optional or have default values):',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Bootstrap servers',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Topic pattern'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Test topic'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Sync producer'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Security protocol',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'SASL JAAS config',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'SASL mechanism'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Client ID'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'ACKs'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Enable idempotence',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Compression type',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Batch size'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Linger ms'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Max in flight requests per connection',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Client DNS lookup',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Buffer memory'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Max request size',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Retries'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Socket connection setup timeout',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Socket connection setup max timeout',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Max block ms'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Request timeout'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Delivery timeout',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Send buffer bytes',
                  }),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {
                    children: 'Receive buffer bytes',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'More info about this can be found in the ',
                (0, s.jsx)(t.a, {
                  href: 'https://kafka.apache.org/documentation/#producerconfigs',
                  children: 'Kafka producer configs documentation site',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.em, {children: 'NOTE'}),
                ': Some configurations for SSL are not available yet.',
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
      n.d(t, {R: () => o, x: () => l});
      var s = n(3696);
      const i = {},
        r = s.createContext(i);
      function o(e) {
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
            : o(e.components)),
          s.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

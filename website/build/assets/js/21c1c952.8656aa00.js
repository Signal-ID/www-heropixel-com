/*! For license information please see 21c1c952.8656aa00.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9961],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        r = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        o =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var i,
          s = {},
          a = null,
          c = null;
        for (i in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          d.call(t, i) && !l.hasOwnProperty(i) && (s[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === s[i] && (s[i] = t[i]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: c,
          props: s,
          _owner: o.current,
        };
      }
      (t.Fragment = s), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4661: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => a,
        });
      var i = n(2540),
        r = n(3023);
      const s = {id: 'qdrant', title: 'Qdrant', description: 'de'},
        d = 'Qdrant',
        o = {
          id: 'destinations/qdrant',
          title: 'Qdrant',
          description: 'de',
          source: '@site/versioned_docs/version-0.0.1/destinations/qdrant.md',
          sourceDirName: 'destinations',
          slug: '/destinations/qdrant',
          permalink: '/docs/destinations/qdrant',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'qdrant', title: 'Qdrant', description: 'de'},
          sidebar: 'integrations',
          previous: {title: 'PubSub', permalink: '/docs/destinations/pubsub'},
          next: {title: 'RabbitMQ', permalink: '/docs/destinations/rabbitmq'},
        },
        l = {},
        a = [
          {value: 'Features', id: 'features', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 4},
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 4},
          {
            value: 'Configure Network Access',
            id: 'configure-network-access',
            level: 4,
          },
          {
            value: 'Setup the Qdrant Destination in HeroPixel',
            id: 'setup-the-qdrant-destination-in-heropixel',
            level: 3,
          },
        ];
      function c(e) {
        const t = {
          a: 'a',
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
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {id: 'qdrant', children: 'Qdrant'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'This page guides you through the process of setting up the ',
                (0, i.jsx)(t.a, {
                  href: 'https://qdrant.tech/documentation/',
                  children: 'Qdrant',
                }),
                ' destination connector.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'features', children: 'Features'}),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?(Yes/No)',
                      }),
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Only one stream will exist to collect payload and vectors (optional) from all source streams. This will be in a ',
                (0, i.jsx)(t.a, {
                  href: 'https://qdrant.tech/documentation/concepts/collections/',
                  children: 'collection',
                }),
                ' in ',
                (0, i.jsx)(t.a, {
                  href: 'https://qdrant.tech/documentation/',
                  children: 'Qdrant',
                }),
                ' whose name will be defined by the user. If the collection does not already exist in the Qdrant instance, a new collection with the same name will be created.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'For each ',
                (0, i.jsx)(t.a, {
                  href: 'https://qdrant.tech/documentation/concepts/points/',
                  children: 'point',
                }),
                ' in the collection, a UUID string is generated and used as the ',
                (0, i.jsx)(t.a, {
                  href: 'https://qdrant.tech/documentation/concepts/points/#point-ids',
                  children: 'point id',
                }),
                '. The embeddings generated as defined or extracted from the source stream will be stored as the point vectors. The point payload will contain primarily the record metadata. The text field will then be stored in a field (as defined in the config) in the point payload.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You can connect to a Qdrant instance either in self-hosted mode or cloud mode.',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'For the local mode, you will need to set it up using Docker. Check the Qdrant docs ',
                    (0, i.jsx)(t.a, {
                      href: 'https://qdrant.tech/documentation/guides/installation/#docker',
                      children: 'here',
                    }),
                    ' for an official guide. After setting up, you would need your host, port and if applicable, your gRPC port.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'To setup to an instance in Qdrant cloud, check out ',
                    (0, i.jsx)(t.a, {
                      href: 'https://qdrant.tech/documentation/cloud/',
                      children: 'this official guide',
                    }),
                    ' to get started. After setting up the instance, you would need the instance url and an API key to connect.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, i.jsx)(t.p, {
              children: "To use the Qdrant destination, you'll need:",
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'An account with API access for OpenAI, Cohere (depending on which embedding method you want to use) or neither (if you want to extract the vectors from the source stream)',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'A Qdrant db instance (local mode or cloud mode)',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Qdrant API Credentials (for cloud mode)',
                }),
                '\n',
                (0, i.jsx)(t.li, {children: 'Host and Port (for local mode)'}),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'gRPC port (if applicable in local mode)',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'configure-network-access',
              children: 'Configure Network Access',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "Make sure your Qdrant database can be accessed by HeroPixel If your database is within a VPC, you may need to allow access from the IP you're using to expose HHeroPixel",
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'setup-the-qdrant-destination-in-heropixel',
              children: 'Setup the Qdrant Destination in HeroPixel',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "You should now have all the requirements needed to configure Qdrant as a destination in the UI. You'll need the following information to configure the Qdrant destination:",
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, i.jsx)(t.strong, {children: 'Text fields to embed'}),
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Optional) ',
                    (0, i.jsx)(t.strong, {children: 'Text splitter'}),
                    ' Options around configuring the chunking process provided by the ',
                    (0, i.jsx)(t.a, {
                      href: 'https://python.langchain.com/docs/get_started/introduction',
                      children: 'Langchain Python library',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, i.jsx)(t.strong, {
                      children: 'Fields to store as metadata',
                    }),
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, i.jsx)(t.strong, {children: 'Collection'}),
                    ' The name of the collection in Qdrant db to store your data',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, i.jsx)(t.strong, {
                      children:
                        'The field in the payload that contains the embedded text',
                    }),
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, i.jsx)(t.strong, {children: 'Prefer gRPC'}),
                    ' Whether to prefer gRPC over HTTP.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, i.jsx)(t.strong, {children: 'Distance Metric'}),
                    ' The Distance metrics used to measure similarities among vectors. Select from:',
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://en.wikipedia.org/wiki/Dot_product',
                            children: 'Dot product',
                          }),
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://en.wikipedia.org/wiki/Cosine_similarity',
                            children: 'Cosine similarity',
                          }),
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children: (0, i.jsx)(t.a, {
                            href: 'https://en.wikipedia.org/wiki/Euclidean_distance',
                            children: 'Euclidean distance',
                          }),
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Required) Authentication method',
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            'For local mode',
                            '\n',
                            (0, i.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, i.jsxs)(t.li, {
                                  children: [
                                    (0, i.jsx)(t.strong, {children: 'Host'}),
                                    ' for example localhost',
                                  ],
                                }),
                                '\n',
                                (0, i.jsxs)(t.li, {
                                  children: [
                                    (0, i.jsx)(t.strong, {children: 'Port'}),
                                    ' for example 8000',
                                  ],
                                }),
                                '\n',
                                (0, i.jsxs)(t.li, {
                                  children: [
                                    (0, i.jsx)(t.strong, {
                                      children: 'gRPC Port',
                                    }),
                                    ' (Optional)',
                                  ],
                                }),
                                '\n',
                              ],
                            }),
                            '\n',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            'For cloud mode',
                            '\n',
                            (0, i.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, i.jsxs)(t.li, {
                                  children: [
                                    (0, i.jsx)(t.strong, {children: 'Url'}),
                                    ' The url of the cloud Qdrant instance.',
                                  ],
                                }),
                                '\n',
                                (0, i.jsxs)(t.li, {
                                  children: [
                                    (0, i.jsx)(t.strong, {children: 'API Key'}),
                                    ' The API Key for the cloud Qdrant instance',
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
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '(Optional) Embedding',
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'OpenAI API key'}),
                            ' if using OpenAI for embedding',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'Cohere API key'}),
                            ' if using Cohere for embedding',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            'Embedding ',
                            (0, i.jsx)(t.strong, {children: 'Field name'}),
                            ' and ',
                            (0, i.jsx)(t.strong, {
                              children: 'Embedding dimensions',
                            }),
                            ' if getting the embeddings from stream records',
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
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => d, x: () => o});
      var i = n(3696);
      const r = {},
        s = i.createContext(r);
      function d(e) {
        const t = i.useContext(s);
        return i.useMemo(
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
              ? e.components(r)
              : e.components || r
            : d(e.components)),
          i.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

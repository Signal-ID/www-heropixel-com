/*! For license information please see fa0ff8e8.251fb0e5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [611],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var s,
          r = {},
          a = null,
          c = null;
        for (s in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          o.call(t, s) && !d.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: a,
          ref: c,
          props: r,
          _owner: l.current,
        };
      }
      (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7233: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => a,
        });
      var s = n(2540),
        i = n(3023);
      const r = {id: 'chroma', title: 'Chroma', description: 'desc'},
        o = 'Chroma',
        l = {
          id: 'destinations/chroma',
          title: 'Chroma',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/chroma.md',
          sourceDirName: 'destinations',
          slug: '/destinations/chroma',
          permalink: '/docs/destinations/chroma',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/chroma.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'chroma', title: 'Chroma', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'BigQuery',
            permalink: '/docs/destinations/bigquery',
          },
          next: {
            title: 'ClickHouse',
            permalink: '/docs/destinations/clickhouse',
          },
        },
        d = {},
        a = [
          {value: 'Features', id: 'features', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 4},
          {value: 'Requirements', id: 'requirements', level: 4},
          {
            value: 'Configure Network Access',
            id: 'configure-network-access',
            level: 4,
          },
          {
            value: 'Setup the Chroma Destination in Airbyte',
            id: 'setup-the-chroma-destination-in-airbyte',
            level: 3,
          },
        ];
      function c(e) {
        const t = {
          a: 'a',
          code: 'code',
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
            (0, s.jsx)(t.h1, {id: 'chroma', children: 'Chroma'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'This page guides you through the process of setting up the ',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.trychroma.com/?lang=py',
                  children: 'Chroma',
                }),
                ' destination connector.',
              ],
            }),
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
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Only one stream will exist to collect data from all source streams. This will be in a ',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.trychroma.com/usage-guide#using-collections',
                  children: 'collection',
                }),
                ' in ',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.trychroma.com/?lang=py',
                  children: 'Chroma',
                }),
                ' whose name will be defined by the user, and validated and corrected by Airbyte.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'For each record, a UUID string is generated and used as the document id. The embeddings generated as defined will be stored as embeddings. Data in the text fields will be stored as documents and those in the metadata fields will be stored as metadata.',
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: "To use the Chroma destination, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'An account with API access for OpenAI, Cohere (depending on which embedding method you want to use) or neither (if you want to use the ',
                    (0, s.jsx)(t.a, {
                      href: 'https://docs.trychroma.com/embeddings#default-all-minilm-l6-v2',
                      children: 'default chroma embedding function',
                    }),
                    ')',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'A Chroma db instance (client/server mode or persistent mode)',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: 'Credentials (for cient/server mode)',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: 'Local File path (for Persistent mode)',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configure-network-access',
              children: 'Configure Network Access',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Make sure your Chroma database can be accessed by Hero Pixel. If your database is within a VPC, you may need to allow access from Hero Pixel IPs',
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'setup-the-chroma-destination-in-airbyte',
              children: 'Setup the Chroma Destination in Airbyte',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                "You should now have all the requirements needed to configure Chroma as a destination in the UI. You'll need the following information to configure the Chroma destination:",
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, s.jsx)(t.strong, {children: 'Text fields to embed'}),
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Optional) ',
                    (0, s.jsx)(t.strong, {children: 'Text splitter'}),
                    ' Options around configuring the chunking process provided by the ',
                    (0, s.jsx)(t.a, {
                      href: 'https://python.langchain.com/docs/get_started/introduction',
                      children: 'Langchain Python library',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, s.jsx)(t.strong, {
                      children: 'Fields to store as metadata',
                    }),
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, s.jsx)(t.strong, {children: 'Collection'}),
                    ' The name of the collection in Chroma db to store your data',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Required) Authentication method',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'For client/server mode',
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    (0, s.jsx)(t.strong, {children: 'Host'}),
                                    ' for example localhost',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    (0, s.jsx)(t.strong, {children: 'Port'}),
                                    ' for example 8000',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    (0, s.jsx)(t.strong, {
                                      children: 'Username',
                                    }),
                                    ' (Optional)',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    (0, s.jsx)(t.strong, {
                                      children: 'Password',
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
                        (0, s.jsxs)(t.li, {
                          children: [
                            'For persistent mode',
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    (0, s.jsx)(t.strong, {children: 'Path'}),
                                    ' The path to the local database file. Note that ',
                                    (0, s.jsx)(t.code, {children: 'path'}),
                                    ' must be an absolute path, prefixed with ',
                                    (0, s.jsx)(t.code, {children: '/local'}),
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
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '(Optional) Embedding',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'OpenAI API key'}),
                            ' if using OpenAI for embedding',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'Cohere API key'}),
                            ' if using Cohere for embedding',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Embedding ',
                            (0, s.jsx)(t.strong, {children: 'Field name'}),
                            ' and ',
                            (0, s.jsx)(t.strong, {
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
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
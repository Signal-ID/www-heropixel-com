/*! For license information please see a981025a.844da9d9.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3796],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        s = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        o =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, t) {
        var i,
          d = {},
          c = null,
          a = null;
        for (i in (void 0 !== t && (c = '' + t),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          r.call(n, i) && !l.hasOwnProperty(i) && (d[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === d[i] && (d[i] = n[i]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: a,
          props: d,
          _owner: o.current,
        };
      }
      (n.Fragment = d), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    5570: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => c,
        });
      var i = t(2540),
        s = t(3023);
      const d = {id: 'pinecone', title: 'Pinecone', description: 'des'},
        r = 'Pinecone',
        o = {
          id: 'destinations/pinecone',
          title: 'Pinecone',
          description: 'des',
          source: '@site/versioned_docs/version-0.0.1/destinations/pinecone.md',
          sourceDirName: 'destinations',
          slug: '/destinations/pinecone',
          permalink: '/docs/destinations/pinecone',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/pinecone.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'pinecone', title: 'Pinecone', description: 'des'},
          sidebar: 'integrations',
          previous: {title: 'Oracle', permalink: '/docs/destinations/oracle'},
          next: {title: 'Postgres', permalink: '/docs/destinations/postgres'},
        },
        l = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Features', id: 'features', level: 2},
          {value: 'Data type mapping', id: 'data-type-mapping', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Processing', id: 'processing', level: 3},
          {value: 'Embedding', id: 'embedding', level: 3},
          {value: 'Indexing', id: 'indexing', level: 3},
        ];
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          em: 'em',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {id: 'pinecone', children: 'Pinecone'}),
            '\n',
            (0, i.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'This page guides you through the process of setting up the ',
                (0, i.jsx)(n.a, {
                  href: 'https://pinecone.io/',
                  children: 'Pinecone',
                }),
                ' destination connector.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {children: 'There are three parts to this:'}),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'Processing - split up individual records in chunks so they will fit the context window and decide which fields to use as context and which are supplementary metadata.',
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    "Embedding - convert the text into a vector representation using a pre-trained model (Currently, OpenAI's ",
                    (0, i.jsx)(n.code, {children: 'text-embedding-ada-002'}),
                    " and Cohere's ",
                    (0, i.jsx)(n.code, {children: 'embed-english-light-v2.0'}),
                    ' are supported.)',
                  ],
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'Indexing - store the vectors in a vector database for similarity search',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, i.jsx)(n.p, {
              children: "To use the Pinecone destination, you'll need:",
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'An account with API access for OpenAI or Cohere (depending on which embedding method you want to use)',
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'A Pinecone project with a pre-created index with the correct dimensionality based on your embedding method',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "You'll need the following information to configure the destination:",
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: 'Embedding service API Key',
                    }),
                    ' - The API key for your OpenAI or Cohere account',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Pinecone API Key'}),
                    ' - The API key for your Pinecone account',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Pinecone Environment'}),
                    ' - The name of the Pinecone environment to use',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Pinecone Index name'}),
                    ' - The name of the Pinecone index to load data into',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'features', children: 'Features'}),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, i.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                      (0, i.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Deleting records via CDC is not supported.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, i.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'data-type-mapping',
              children: 'Data type mapping',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'All fields specified as metadata fields will be stored in the metadata object of the document and can be used for filtering. The following data types are allowed for metadata fields:',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {children: 'String'}),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'Number (integer or floating point, gets converted to a 64 bit floating point)',
                }),
                '\n',
                (0, i.jsx)(n.li, {children: 'Booleans (true, false)'}),
                '\n',
                (0, i.jsx)(n.li, {children: 'List of String'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {children: 'All other fields are ignored.'}),
            '\n',
            (0, i.jsx)(n.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, i.jsx)(n.h3, {id: 'processing', children: 'Processing'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Each record will be split into text fields and meta fields as configured in the "Processing" section. All text fields are concatenated into a single string and then split into chunks of configured length. If specified, the metadata fields are stored as-is along with the embedded text chunks. Please note that meta data fields can only be used for filtering and not for retrieval and have to be of type string, number, boolean (all other values are ignored). Please note that there\'s a 40kb limit on the ',
                (0, i.jsx)(n.em, {children: 'total'}),
                ' size of the metadata saved for each entry. Options around configuring the chunking process use the ',
                (0, i.jsx)(n.a, {
                  href: 'https://python.langchain.com/docs/get_started/introduction',
                  children: 'Langchain Python library',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'When specifying text fields, you can access nested fields in the record by using dot notation, e.g. ',
                (0, i.jsx)(n.code, {children: 'user.name'}),
                ' will access the ',
                (0, i.jsx)(n.code, {children: 'name'}),
                ' field in the ',
                (0, i.jsx)(n.code, {children: 'user'}),
                " object. It's also possible to use wildcards to access all fields in an object, e.g. ",
                (0, i.jsx)(n.code, {children: 'users.*.name'}),
                ' will access all ',
                (0, i.jsx)(n.code, {children: 'names'}),
                ' fields in all entries of the ',
                (0, i.jsx)(n.code, {children: 'users'}),
                ' array.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The chunk length is measured in tokens produced by the ',
                (0, i.jsx)(n.code, {children: 'tiktoken'}),
                ' library. The maximum is 8191 tokens, which is the maximum length supported by the ',
                (0, i.jsx)(n.code, {children: 'text-embedding-ada-002'}),
                ' model.',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The stream name gets added as a metadata field ',
                (0, i.jsx)(n.code, {children: '_ab_stream'}),
                ' to each document. If available, the primary key of the record is used to identify the document to avoid duplications when updated versions of records are indexed. It is added as the ',
                (0, i.jsx)(n.code, {children: '_ab_record_id'}),
                ' metadata field.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'embedding', children: 'Embedding'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'The connector can use one of the following embedding methods:',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'OpenAI - using ',
                        (0, i.jsx)(n.a, {
                          href: 'https://beta.openai.com/docs/api-reference/text-embedding',
                          children: 'OpenAI API',
                        }),
                        ' , the connector will produce embeddings using the ',
                        (0, i.jsx)(n.code, {
                          children: 'text-embedding-ada-002',
                        }),
                        ' model with ',
                        (0, i.jsx)(n.strong, {children: '1536 dimensions'}),
                        '. This integration will be constrained by the ',
                        (0, i.jsx)(n.a, {
                          href: 'https://platform.openai.com/docs/guides/rate-limits/overview',
                          children: 'speed of the OpenAI embedding API',
                        }),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(n.p, {
                      children: [
                        'Cohere - using the ',
                        (0, i.jsx)(n.a, {
                          href: 'https://docs.cohere.com/reference/embed',
                          children: 'Cohere API',
                        }),
                        ', the connector will produce embeddings using the ',
                        (0, i.jsx)(n.code, {
                          children: 'embed-english-light-v2.0',
                        }),
                        ' model with ',
                        (0, i.jsx)(n.strong, {children: '1024 dimensions'}),
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
            (0, i.jsxs)(n.p, {
              children: [
                "For testing purposes, it's also possible to use the ",
                (0, i.jsx)(n.a, {
                  href: 'https://python.langchain.com/docs/modules/data_connection/text_embedding/integrations/fake',
                  children: 'Fake embeddings',
                }),
                ' integration. It will generate random embeddings and is suitable to test a data pipeline without incurring embedding costs.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'indexing', children: 'Indexing'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'To get started, use the ',
                (0, i.jsx)(n.a, {
                  href: 'https://docs.pinecone.io/docs/quickstart',
                  children: 'Pinecone web UI or API',
                }),
                ' to create a project and an index before running the destination. All streams will be indexed into the same index, the ',
                (0, i.jsx)(n.code, {children: '_ab_stream'}),
                ' metadata field is used to distinguish between streams. Overall, the size of the metadata fields is limited to 30KB per document.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'OpenAI and Fake embeddings produce vectors with 1536 dimensions, and the Cohere embeddings produce vectors with 1024 dimensions. Make sure to configure the index accordingly.',
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => r, x: () => o});
      var i = t(3696);
      const s = {},
        d = i.createContext(s);
      function r(e) {
        const n = i.useContext(d);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(d.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
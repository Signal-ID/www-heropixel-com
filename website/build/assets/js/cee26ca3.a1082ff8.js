/*! For license information please see cee26ca3.a1082ff8.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6531],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, t, n) {
        var i,
          d = {},
          o = null,
          c = null;
        for (i in (void 0 !== n && (o = '' + n),
        void 0 !== t.key && (o = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          r.call(t, i) && !l.hasOwnProperty(i) && (d[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === d[i] && (d[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: o,
          ref: c,
          props: d,
          _owner: a.current,
        };
      }
      (t.Fragment = d), (t.jsx = o), (t.jsxs = o);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    1717: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => d,
          metadata: () => a,
          toc: () => o,
        });
      var i = n(2540),
        s = n(3023);
      const d = {id: 'weaviate', title: 'Weaviate', description: 'weaviate'},
        r = 'Weaviate',
        a = {
          id: 'destinations/weaviate',
          title: 'Weaviate',
          description: 'weaviate',
          source: '@site/versioned_docs/version-0.0.1/destinations/weaviate.md',
          sourceDirName: 'destinations',
          slug: '/destinations/weaviate',
          permalink: '/docs/destinations/weaviate',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'weaviate',
            title: 'Weaviate',
            description: 'weaviate',
          },
          sidebar: 'integrations',
          previous: {title: 'Vectara', permalink: '/docs/destinations/vectara'},
          next: {title: 'Webhook', permalink: '/docs/destinations/webhook'},
        },
        l = {},
        o = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Features', id: 'features', level: 2},
          {value: 'Data type mapping', id: 'data-type-mapping', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Processing', id: 'processing', level: 3},
          {value: 'Embedding', id: 'embedding', level: 3},
          {value: 'Indexing', id: 'indexing', level: 3},
        ];
      function c(e) {
        const t = {
          a: 'a',
          code: 'code',
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
            (0, i.jsx)(t.h1, {id: 'weaviate', children: 'Weaviate'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'This page guides you through the process of setting up the ',
                (0, i.jsx)(t.a, {
                  href: 'https://weaviate.io/',
                  children: 'Weaviate',
                }),
                ' destination connector.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {children: 'There are three parts to this:'}),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Processing - split up individual records in chunks so they will fit the context window and decide which fields to use as context and which are supplementary metadata.',
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    "Embedding - convert the text into a vector representation using a pre-trained model (Currently, OpenAI's ",
                    (0, i.jsx)(t.code, {children: 'text-embedding-ada-002'}),
                    " and Cohere's ",
                    (0, i.jsx)(t.code, {children: 'embed-english-light-v2.0'}),
                    ' are supported.)',
                  ],
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Indexing - store the vectors in a vector database for similarity search',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, i.jsx)(t.p, {
              children: "To use the Weaviate destination, you'll need:",
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Access to a running Weaviate instance (either self-hosted or via Weaviate Cloud Services), minimum version 1.21.2',
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Either',
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'An account with API access for OpenAI or Cohere (depending on which embedding method you want to use)',
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'Pre-calculated embeddings stored in a field in your source database',
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
            (0, i.jsx)(t.p, {
              children:
                "You'll need the following information to configure the destination:",
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children: 'Embedding service API Key',
                    }),
                    ' - The API key for your OpenAI or Cohere account',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Weaviate cluster URL'}),
                    ' - The URL of the Weaviate cluster to load data into. HeroPixelCloud only supports connecting to your Weaviate Instance instance with TLS encryption.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Weaviate credentials'}),
                    ' - The credentials for your Weaviate instance (either API token or username/password)',
                  ],
                }),
                '\n',
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
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, i.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Provide vector',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Either from field are calculated during the load process',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'data-type-mapping',
              children: 'Data type mapping',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'All fields specified as metadata fields will be stored as properties in the object can be used for filtering. The following data types are allowed for metadata fields:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {children: 'String'}),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Number (integer or floating point, gets converted to a 64 bit floating point)',
                }),
                '\n',
                (0, i.jsx)(t.li, {children: 'Booleans (true, false)'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'List of String'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'All other fields are serialized into their JSON representation.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, i.jsx)(t.h3, {id: 'processing', children: 'Processing'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Each record will be split into text fields and metadata fields as configured in the "Processing" section. All text fields are concatenated into a single string and then split into chunks of configured length. If specified, the metadata fields are stored as-is along with the embedded text chunks. Options around configuring the chunking process use the ',
                (0, i.jsx)(t.a, {
                  href: 'https://python.langchain.com/docs/get_started/introduction',
                  children: 'Langchain Python library',
                }),
                '.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'When specifying text fields, you can access nested fields in the record by using dot notation, e.g. ',
                (0, i.jsx)(t.code, {children: 'user.name'}),
                ' will access the ',
                (0, i.jsx)(t.code, {children: 'name'}),
                ' field in the ',
                (0, i.jsx)(t.code, {children: 'user'}),
                " object. It's also possible to use wildcards to access all fields in an object, e.g. ",
                (0, i.jsx)(t.code, {children: 'users.*.name'}),
                ' will access all ',
                (0, i.jsx)(t.code, {children: 'names'}),
                ' fields in all entries of the ',
                (0, i.jsx)(t.code, {children: 'users'}),
                ' array.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The chunk length is measured in tokens produced by the ',
                (0, i.jsx)(t.code, {children: 'tiktoken'}),
                ' library. The maximum is 8191 tokens, which is the maximum length supported by the ',
                (0, i.jsx)(t.code, {children: 'text-embedding-ada-002'}),
                ' model.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The stream name gets added as a metadata field ',
                (0, i.jsx)(t.code, {children: '_ab_stream'}),
                ' to each document. If available, the primary key of the record is used to identify the document to avoid duplications when updated versions of records are indexed. It is added as the ',
                (0, i.jsx)(t.code, {children: '_ab_record_id'}),
                ' metadata field.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'embedding', children: 'Embedding'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The connector can use one of the following embedding methods:',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        'OpenAI - using ',
                        (0, i.jsx)(t.a, {
                          href: 'https://beta.openai.com/docs/api-reference/text-embedding',
                          children: 'OpenAI API',
                        }),
                        ' , the connector will produce embeddings using the ',
                        (0, i.jsx)(t.code, {
                          children: 'text-embedding-ada-002',
                        }),
                        ' model with ',
                        (0, i.jsx)(t.strong, {children: '1536 dimensions'}),
                        '. This integration will be constrained by the ',
                        (0, i.jsx)(t.a, {
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
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        'Cohere - using the ',
                        (0, i.jsx)(t.a, {
                          href: 'https://docs.cohere.com/reference/embed',
                          children: 'Cohere API',
                        }),
                        ', the connector will produce embeddings using the ',
                        (0, i.jsx)(t.code, {
                          children: 'embed-english-light-v2.0',
                        }),
                        ' model with ',
                        (0, i.jsx)(t.strong, {children: '1024 dimensions'}),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        'From field - if you have pre-calculated embeddings stored in a field in your source database, you can use the ',
                        (0, i.jsx)(t.code, {children: 'From field'}),
                        ' integration to load them into Weaviate. The field must be a JSON array of numbers, e.g. ',
                        (0, i.jsx)(t.code, {children: '[0.1, 0.2, 0.3]'}),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(t.p, {
                      children: [
                        "No embedding - if you don't want to use embeddings or have configured a ",
                        (0, i.jsx)(t.a, {
                          href: 'https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules',
                          children: 'vectorizer',
                        }),
                        ' for your class, you can use the ',
                        (0, i.jsx)(t.code, {children: 'No embedding'}),
                        ' integration.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                "For testing purposes, it's also possible to use the ",
                (0, i.jsx)(t.a, {
                  href: 'https://python.langchain.com/docs/modules/data_connection/text_embedding/integrations/fake',
                  children: 'Fake embeddings',
                }),
                ' integration. It will generate random embeddings and is suitable to test a data pipeline without incurring embedding costs.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'indexing', children: 'Indexing'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "All streams will be indexed into separate classes derived from the stream name.\nIf a class doesn't exist in the schema of the cluster, it will be created using the configure vectorizer configuration. In this case, dynamic schema has to be enabled on the server.",
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'You can also create the class in Weaviate in advance if you need more control over the schema in Weaviate. In this case, the text properies ',
                (0, i.jsx)(t.code, {children: '_ab_stream'}),
                ' and ',
                (0, i.jsx)(t.code, {children: '_ab_record_id'}),
                ' need to be created for bookkeeping reasons. In case a sync is run in ',
                (0, i.jsx)(t.code, {children: 'Overwrite'}),
                ' mode, the class will be deleted and recreated.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                "As properties have to start will a lowercase letter in Weaviate and can't contain spaces or special characters. Field names might be updated during the loading process. The field names ",
                (0, i.jsx)(t.code, {children: 'id'}),
                ', ',
                (0, i.jsx)(t.code, {children: '_id'}),
                ' and ',
                (0, i.jsx)(t.code, {children: '_additional'}),
                ' are reserved keywords in Weaviate, so they will be renamed to ',
                (0, i.jsx)(t.code, {children: 'raw_id'}),
                ', ',
                (0, i.jsx)(t.code, {children: 'raw__id'}),
                ' and ',
                (0, i.jsx)(t.code, {children: 'raw_additional'}),
                ' respectively.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'When using ',
                (0, i.jsx)(t.a, {
                  href: 'https://weaviate.io/developers/weaviate/manage-data/multi-tenancy',
                  children: 'multi-tenancy',
                }),
                ", the tenant id can be configured in the connector configuration. If not specified, multi-tenancy will be disabled. In case you want to index into an already created class, you need to make sure the class is created with multi-tenancy enabled. In case the class doesn't exist, it will be created with multi-tenancy properly configured. If the class already exists but the tenant id is not associated with the class, the connector will automatically add the tenant id to the class. This allows you to configure multiple connections for different tenants on the same schema.",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => a});
      var i = n(3696);
      const s = {},
        d = i.createContext(s);
      function r(e) {
        const t = i.useContext(d);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(d.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

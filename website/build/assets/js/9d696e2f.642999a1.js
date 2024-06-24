/*! For license information please see 9d696e2f.642999a1.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [128],
  {
    2192: (e, n, i) => {
      var t = i(3696),
        s = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        o =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        r = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, i) {
        var t,
          l = {},
          c = null,
          a = null;
        for (t in (void 0 !== i && (c = '' + i),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          d.call(n, t) && !r.hasOwnProperty(t) && (l[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === l[t] && (l[t] = n[t]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: a,
          props: l,
          _owner: o.current,
        };
      }
      (n.Fragment = l), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    80: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => r,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => c,
        });
      var t = i(2540),
        s = i(3023);
      const l = {id: 'milvus', title: 'Milvus', description: 'desc'},
        d = 'Milvus',
        o = {
          id: 'destinations/milvus',
          title: 'Milvus',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/milvus.md',
          sourceDirName: 'destinations',
          slug: '/destinations/milvus',
          permalink: '/docs/destinations/milvus',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/milvus.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {id: 'milvus', title: 'Milvus', description: 'desc'},
          sidebar: 'integrations',
          previous: {title: 'Kafka', permalink: '/docs/destinations/kafka'},
          next: {title: 'MongoDB', permalink: '/docs/destinations/mongodb'},
        },
        r = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Features', id: 'features', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Processing', id: 'processing', level: 3},
          {value: 'Embedding', id: 'embedding', level: 3},
          {value: 'Indexing', id: 'indexing', level: 3},
          {
            value: 'Setting up a collection',
            id: 'setting-up-a-collection',
            level: 3,
          },
          {
            value: 'Langchain integration',
            id: 'langchain-integration',
            level: 3,
          },
        ];
      function a(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
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
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {id: 'milvus', children: 'Milvus'}),
            '\n',
            (0, t.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'This page guides you through the process of setting up the ',
                (0, t.jsx)(n.a, {
                  href: 'https://milvus.io/',
                  children: 'Milvus',
                }),
                ' destination connector.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {children: 'There are three parts to this:'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Processing - split up individual records in chunks so they will fit the context window and decide which fields to use as context and which are supplementary metadata.',
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    "Embedding - convert the text into a vector representation using a pre-trained model (Currently, OpenAI's ",
                    (0, t.jsx)(n.code, {children: 'text-embedding-ada-002'}),
                    " and Cohere's ",
                    (0, t.jsx)(n.code, {children: 'embed-english-light-v2.0'}),
                    ' are supported.)',
                  ],
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Indexing - store the vectors in a vector database for similarity search',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, t.jsx)(n.p, {
              children: "To use the Milvus destination, you'll need:",
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'An account with API access for OpenAI or Cohere (depending on which embedding method you want to use)',
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'Either a running self-managed Milvus instance or a ',
                    (0, t.jsx)(n.a, {
                      href: 'https://zilliz.com/',
                      children: 'Zilliz',
                    }),
                    ' account',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "You'll need the following information to configure the destination:",
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: 'Embedding service API Key',
                    }),
                    ' - The API key for your OpenAI or Cohere account',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Milvus Endpoint URL'}),
                    ' - The URL of your Milvus instance',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'Either ',
                    (0, t.jsx)(n.strong, {children: 'Milvus API token'}),
                    ' or ',
                    (0, t.jsx)(n.strong, {
                      children: 'Milvus Instance Username and Password',
                    }),
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Milvus Collection name'}),
                    ' - The name of the collection to load data into',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'features', children: 'Features'}),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, t.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                      (0, t.jsx)(n.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, t.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, t.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, t.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Partitions',
                        }),
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, t.jsx)(n.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Record-defined ID',
                        }),
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, t.jsx)(n.td, {
                          style: {textAlign: 'left'},
                          children: 'Auto-id needs to be enabled',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, t.jsx)(n.h3, {id: 'processing', children: 'Processing'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Each record will be split into text fields and meta fields as configured in the "Processing" section. All text fields are concatenated into a single string and then split into chunks of configured length. If specified, the metadata fields are stored as-is along with the embedded text chunks. Options around configuring the chunking process use the ',
                (0, t.jsx)(n.a, {
                  href: 'https://python.langchain.com/docs/get_started/introduction',
                  children: 'Langchain Python library',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'When specifying text fields, you can access nested fields in the record by using dot notation, e.g. ',
                (0, t.jsx)(n.code, {children: 'user.name'}),
                ' will access the ',
                (0, t.jsx)(n.code, {children: 'name'}),
                ' field in the ',
                (0, t.jsx)(n.code, {children: 'user'}),
                " object. It's also possible to use wildcards to access all fields in an object, e.g. ",
                (0, t.jsx)(n.code, {children: 'users.*.name'}),
                ' will access all ',
                (0, t.jsx)(n.code, {children: 'names'}),
                ' fields in all entries of the ',
                (0, t.jsx)(n.code, {children: 'users'}),
                ' array.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The chunk length is measured in tokens produced by the ',
                (0, t.jsx)(n.code, {children: 'tiktoken'}),
                ' library. The maximum is 8191 tokens, which is the maximum length supported by the ',
                (0, t.jsx)(n.code, {children: 'text-embedding-ada-002'}),
                ' model.',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The stream name gets added as a metadata field ',
                (0, t.jsx)(n.code, {children: '_ab_stream'}),
                ' to each document. If available, the primary key of the record is used to identify the document to avoid duplications when updated versions of records are indexed. It is added as the ',
                (0, t.jsx)(n.code, {children: '_ab_record_id'}),
                ' metadata field.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'embedding', children: 'Embedding'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'The connector can use one of the following embedding methods:',
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'OpenAI - using ',
                        (0, t.jsx)(n.a, {
                          href: 'https://beta.openai.com/docs/api-reference/text-embedding',
                          children: 'OpenAI API',
                        }),
                        ' , the connector will produce embeddings using the ',
                        (0, t.jsx)(n.code, {
                          children: 'text-embedding-ada-002',
                        }),
                        ' model with ',
                        (0, t.jsx)(n.strong, {children: '1536 dimensions'}),
                        '. This integration will be constrained by the ',
                        (0, t.jsx)(n.a, {
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
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        'Cohere - using the ',
                        (0, t.jsx)(n.a, {
                          href: 'https://docs.cohere.com/reference/embed',
                          children: 'Cohere API',
                        }),
                        ', the connector will produce embeddings using the ',
                        (0, t.jsx)(n.code, {
                          children: 'embed-english-light-v2.0',
                        }),
                        ' model with ',
                        (0, t.jsx)(n.strong, {children: '1024 dimensions'}),
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
            (0, t.jsxs)(n.p, {
              children: [
                "For testing purposes, it's also possible to use the ",
                (0, t.jsx)(n.a, {
                  href: 'https://python.langchain.com/docs/modules/data_connection/text_embedding/integrations/fake',
                  children: 'Fake embeddings',
                }),
                ' integration. It will generate random embeddings and is suitable to test a data pipeline without incurring embedding costs.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'indexing', children: 'Indexing'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                "If the specified collection doesn't exist, the connector will create it for you with a primary key field ",
                (0, t.jsx)(n.code, {children: 'pk'}),
                ' and the configured vector field matching the embedding configuration. Dynamic fields will be enabled. The vector field will have an L2 IVF_FLAT index with an ',
                (0, t.jsx)(n.code, {children: 'nlist'}),
                ' parameter of 1024.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'If you want to change any of these settings, create a new collection in your Milvus instance yourself. Make sure that',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'The primary key field is set to ',
                    (0, t.jsx)(n.a, {
                      href: 'https://milvus.io/docs/create_collection.md',
                      children: 'auto_id',
                    }),
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'There is a vector field with the correct dimensionality (1536 for OpenAI, 1024 for Cohere) and ',
                    (0, t.jsx)(n.a, {
                      href: 'https://milvus.io/docs/build_index.md',
                      children: 'a configured index',
                    }),
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'If the record contains a field with the same name as the primary key, it will be prefixed with an underscore so Milvus can control the primary key internally.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'setting-up-a-collection',
              children: 'Setting up a collection',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'When using the Zilliz cloud, this can be done using the UI - in this case only the collection name and the vector dimensionality needs to be configured, the vector field with index will be automatically created under the name ',
                (0, t.jsx)(n.code, {children: 'vector'}),
                '. Using the REST API, the following command will create the index:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                children:
                  'POST /v1/vector/collections/create\n{\n  "collectionName": "my-collection",\n  "dimension": 1536,\n  "metricType": "L2",\n  "vectorField": "vector",\n  \u201cprimaryField\u201d: \u201cpk\u201d\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'When using a self-hosted Milvus cluster, the collection needs to be created using the Milvus CLI or Python client. The following commands will create a collection set up for loading data via Hero Pixel:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-python',
                children:
                  'from pymilvus import CollectionSchema, FieldSchema, DataType, connections, Collection\n\nconnections.connect() # connect to locally running Milvus instance without authentication\n\npk = FieldSchema(name="pk",dtype=DataType.INT64, is_primary=True, auto_id=True)\nvector = FieldSchema(name="vector",dtype=DataType.FLOAT_VECTOR,dim=1536)\nschema = CollectionSchema(fields=[pk, vector], enable_dynamic_field=True)\ncollection = Collection(name="test_collection", schema=schema)\ncollection.create_index(field_name="vector", index_params={ "metric_type":"L2", "index_type":"IVF_FLAT", "params":{"nlist":1024} })\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'langchain-integration',
              children: 'Langchain integration',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'To initialize a langchain vector store based on the indexed data, use the following code:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-python',
                children:
                  'embeddings = OpenAIEmbeddings(openai_api_key="my-key")\nvector_store = Milvus(embeddings=embeddings, collection_name="my-collection", connection_args={"uri": "my-zilliz-endpoint", "token": "my-api-key"})\nvector_store.fields.append("text")\n# call  vs.fields.append() for all fields you need from the metadata\n\nvector_store.similarity_search("test")\n',
              }),
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => d, x: () => o});
      var t = i(3696);
      const s = {},
        l = t.createContext(s);
      function d(e) {
        const n = t.useContext(l);
        return t.useMemo(
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
            : d(e.components)),
          t.createElement(l.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

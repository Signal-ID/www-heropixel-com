/*! For license information please see 469943d3.7beddfa6.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8507],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        d =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, n, t) {
        var i,
          o = {},
          a = null,
          c = null;
        for (i in (void 0 !== t && (a = '' + t),
        void 0 !== n.key && (a = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          r.call(n, i) && !l.hasOwnProperty(i) && (o[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === o[i] && (o[i] = n[i]);
        return {
          $$typeof: s,
          type: e,
          key: a,
          ref: c,
          props: o,
          _owner: d.current,
        };
      }
      (n.Fragment = o), (n.jsx = a), (n.jsxs = a);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    4169: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => a,
        });
      var i = t(2540),
        s = t(3023);
      const o = {
          id: 'snowflake-cortex',
          title: 'Snowflake Cortex',
          description: 'snowflake-cortex',
        },
        r = 'Snowflake Cortex Destination',
        d = {
          id: 'destinations/snowflake-cortex',
          title: 'Snowflake Cortex',
          description: 'snowflake-cortex',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/snowflake-cortex.md',
          sourceDirName: 'destinations',
          slug: '/destinations/snowflake-cortex',
          permalink: '/docs/destinations/snowflake-cortex',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/snowflake-cortex.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'snowflake-cortex',
            title: 'Snowflake Cortex',
            description: 'snowflake-cortex',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Smartlead',
            permalink: '/docs/destinations/smartlead',
          },
          next: {title: 'Snowflake', permalink: '/docs/destinations/snowflake'},
        },
        l = {},
        a = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Features', id: 'features', level: 2},
          {value: 'Data type mapping', id: 'data-type-mapping', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Processing', id: 'processing', level: 3},
          {value: 'Embedding', id: 'embedding', level: 3},
          {
            value: 'Indexing/Data Storage',
            id: 'indexingdata-storage',
            level: 3,
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
            (0, i.jsx)(n.h1, {
              id: 'snowflake-cortex-destination',
              children: 'Snowflake Cortex Destination',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'This page guides you through the process of setting up the ',
                (0, i.jsx)(n.a, {
                  href: 'https://www.snowflake.com/en/',
                  children: 'Snowflake',
                }),
                ' as a vector destination.',
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
                    " are supported. Coming soon: Hugging Face's ",
                    (0, i.jsx)(n.code, {children: 'e5-base-v2'}),
                    ').',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Snowflake Connection - where to store the vectors. This configures a vector store using Snowflake tables having the ',
                    (0, i.jsx)(n.code, {children: 'VECTOR'}),
                    ' data type.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, i.jsx)(n.p, {
              children: "To use the Snowflake Cortex destination, you'll need:",
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
                    'A Snowflake account with support for vector type columns',
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
                    (0, i.jsx)(n.strong, {children: 'Snowflake Account'}),
                    ' - The account name for your Snowflake account',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Snowflake User'}),
                    ' - The user name for your Snowflake account',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Snowflake Password'}),
                    ' - The password for your Snowflake account',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Snowflake Database'}),
                    ' - The database name in Snowflake to load data into',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Snowflake Warehouse'}),
                    ' - The warehouse name in Snowflake to use',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {children: 'Snowflake Role'}),
                    ' - The role name in Snowflake to use.',
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
            (0, i.jsx)(n.h3, {
              id: 'indexingdata-storage',
              children: 'Indexing/Data Storage',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'To get started, sign up for ',
                (0, i.jsx)(n.a, {
                  href: 'https://www.snowflake.com/en/',
                  children: 'Snowflake',
                }),
                ". Ensure you have set a database, and a data wareshouse before running the Snowflake Cortex destination. All streams will be indexed/stored into a table with the same name. The table will be created if it doesn't exist. The table will have the following columns:",
              ],
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'document_id (string) - the unique identifier of the document, creating from appending the primary keys in the stream schema',
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'chunk_id (string) - the unique identifier of the chunk, created by appending the chunk number to the document_id',
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'metadata (variant) - the metadata of the document, stored as key-value pairs',
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'page_content (string) - the text content of the chunk',
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children:
                    'embedding (vector) - the embedding of the chunk, stored as a list of floats',
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => r, x: () => d});
      var i = t(3696);
      const s = {},
        o = i.createContext(s);
      function r(e) {
        const n = i.useContext(o);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function d(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
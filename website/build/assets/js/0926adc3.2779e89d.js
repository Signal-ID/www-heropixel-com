/*! For license information please see 0926adc3.2779e89d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2855],
  {
    2192: (e, t, n) => {
      var l = n(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        o =
          l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var l,
          s = {},
          a = null,
          c = null;
        for (l in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          r.call(t, l) && !d.hasOwnProperty(l) && (s[l] = t[l]);
        if (e && e.defaultProps)
          for (l in (t = e.defaultProps)) void 0 === s[l] && (s[l] = t[l]);
        return {
          $$typeof: i,
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
    1314: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => a,
        });
      var l = n(2540),
        i = n(3023);
      const s = {
          id: 'azure-blob-storage',
          title: 'Azure Blog Storage',
          description: 'desc',
        },
        r = 'Azure Blob Storage',
        o = {
          id: 'destinations/azure-blob-storage',
          title: 'Azure Blog Storage',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/azure-blob-storage.md',
          sourceDirName: 'destinations',
          slug: '/destinations/azure-blob-storage',
          permalink: '/docs/destinations/azure-blob-storage',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'azure-blob-storage',
            title: 'Azure Blog Storage',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {title: 'Astra DB', permalink: '/docs/destinations/astra'},
          next: {
            title: 'AWS Datalake',
            permalink: '/docs/destinations/aws-datalake',
          },
        },
        d = {},
        a = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Sync Mode', id: 'sync-mode', level: 2},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 2},
          {value: 'CSV', id: 'csv', level: 3},
          {value: 'JSON Lines (JSONL)', id: 'json-lines-jsonl', level: 3},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 3},
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
          pre: 'pre',
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
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(t.h1, {
              id: 'azure-blob-storage',
              children: 'Azure Blob Storage',
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, l.jsx)(t.p, {
              children: 'This destination writes data to Azure Blob Storage.',
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'The Airbyte Azure Blob Storage destination allows you to sync data to Azure Blob Storage. Each stream is written to its own blob under the container.',
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, l.jsxs)(t.ul, {
              children: [
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    'For Airbyte Open Source users using the ',
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.airbyte.com/integrations/sources/postgres',
                      children: 'Postgres',
                    }),
                    ' source connector, ',
                    (0, l.jsx)(t.a, {
                      href: 'https://docs.airbyte.com/operator-guides/upgrading-airbyte/',
                      children: 'upgrade',
                    }),
                    ' your Airbyte platform to version ',
                    (0, l.jsx)(t.code, {children: 'v0.40.0-alpha'}),
                    ' or newer and upgrade your AzureBlobStorage connector to version ',
                    (0, l.jsx)(t.code, {children: '0.1.6'}),
                    ' or newer',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'sync-mode', children: 'Sync Mode'}),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Support',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Warning: this mode deletes all previously synced data in the configured blob.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u2705',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'The append mode would only work for "Append blobs" blobs as per Azure limitations, more details ',
                            (0, l.jsx)(t.a, {
                              href: 'https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#blobs',
                              children:
                                'https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#blobs',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '\u274c',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'destination.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Parameter',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Endpoint Domain Name',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'This is Azure Blob Storage endpoint domain name. Leave default value (or leave it empty if run container from command line) to use Microsoft native one.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Azure blob storage container (Bucket) Name',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'A name of the Azure blob storage container. If not exists - will be created automatically. If leave empty, then will be created automatically airbytecontainer+timestamp.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Azure Blob Storage account name',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            "The account's name of the Azure Blob Storage.",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'The Azure blob storage account key',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, l.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'Azure blob storage account key. Example: ',
                            (0, l.jsx)(t.code, {
                              children:
                                'abcdefghijklmnopqrstuvwxyz/0123456789+ABCDEFGHIJKLMNOPQRSTUVWXYZ/0123456789%++sampleKey==',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Azure Blob Storage output buffer size',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Azure Blob Storage output buffer size, in megabytes. Example: 5',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Azure Blob Storage spill size',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            "Azure Blob Storage spill size, in megabytes. Example: 500. After exceeding threshold connector will create new blob with incremented sequence number 'prefix_name'_seq+1",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Format',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'object',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Format specific configuration. See below for details.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                '\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured blob will be wiped out before each sync. We recommend you to provision a dedicated Azure Blob Storage Container resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f',
            }),
            '\n',
            (0, l.jsx)(t.h2, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Each stream will be outputted to its dedicated Blob according to the configuration. The complete datastore of each stream includes all the output files under that Blob. You can think of the Blob as equivalent of a Table in the database world.\nIf stream replication exceeds configured threshold data will continue to be replicated in a new blob file for better read performance',
            }),
            '\n',
            (0, l.jsxs)(t.ul, {
              children: [
                '\n',
                (0, l.jsx)(t.li, {
                  children:
                    'Under Full Refresh Sync mode, old output files will be purged before new files are created.',
                }),
                '\n',
                (0, l.jsx)(t.li, {
                  children:
                    'Under Incremental - Append Sync mode, new output files will be added that only contain the new data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h3, {id: 'csv', children: 'CSV'}),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'Like most of the other Airbyte destination connectors, usually the output has three columns: a UUID, an emission timestamp, and the data blob. With the CSV output, it is possible to normalize (flatten) the data blob to multiple columns.',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Column',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Condition',
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Description',
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: '_airbyte_ab_id',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Always exists',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'A uuid assigned by Airbyte to each processed record.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: '_airbyte_emitted_at',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Always exists.',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'A timestamp representing when the event was pulled from the data source.',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, l.jsx)(t.code, {
                            children: '_airbyte_data',
                          }),
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'When no normalization (flattening) is needed, all data reside under this column as a json blob.',
                        }),
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'root level fields',
                        }),
                        (0, l.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'When root level normalization (flattening) is selected, the root level fields are expanded.',
                        }),
                        (0, l.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'For example, given the following json object from a source:',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-javascript',
                children:
                  '{\n  "user_id": 123,\n  "name": {\n    "first": "John",\n    "last": "Doe"\n  }\n}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children: 'With no normalization, the output CSV is:',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '_airbyte_ab_id',
                        }),
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '_airbyte_emitted_at',
                        }),
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '_airbyte_data',
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(t.tbody, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '26d73cde-7eb1-4e1e-b7db-a4c03b4cf206',
                        }),
                      }),
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: '1622135805000',
                      }),
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children:
                            '{ "user_id": 123, name: { "first": "John", "last": "Doe" } }',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children: 'With root level normalization, the output CSV is:',
            }),
            '\n',
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '_airbyte_ab_id',
                        }),
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '_airbyte_emitted_at',
                        }),
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {children: 'user_id'}),
                      }),
                      (0, l.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {children: 'name'}),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(t.tbody, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '26d73cde-7eb1-4e1e-b7db-a4c03b4cf206',
                        }),
                      }),
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: '1622135805000',
                      }),
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: '123',
                      }),
                      (0, l.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, l.jsx)(t.code, {
                          children: '{ "first": "John", "last": "Doe" }',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                'With the field ',
                (0, l.jsx)(t.code, {children: 'File Extension'}),
                ', it is possible to save the output files with extension. It is an optional field with default value as ',
                (0, l.jsx)(t.code, {children: 'false'}),
                '. Enable this to store the files with ',
                (0, l.jsx)(t.code, {children: 'csv'}),
                ' extension.',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h3, {
              id: 'json-lines-jsonl',
              children: 'JSON Lines (JSONL)',
            }),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                (0, l.jsx)(t.a, {
                  href: 'https://jsonlines.org/',
                  children: 'Json Lines',
                }),
                ' is a text format with one JSON per line. Each line has a structure as follows:',
              ],
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-javascript',
                children:
                  '{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source>"\n}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children:
                'For example, given the following two json objects from a source:',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-javascript',
                children:
                  "[\n  {\n    user_id: 123,\n    name: {\n      first: 'John',\n      last: 'Doe',\n    },\n  },\n  {\n    user_id: 456,\n    name: {\n      first: 'Jane',\n      last: 'Roe',\n    },\n  },\n];\n",
              }),
            }),
            '\n',
            (0, l.jsx)(t.p, {
              children: 'They will be like this in the output file:',
            }),
            '\n',
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: 'language-text',
                children:
                  '{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n',
              }),
            }),
            '\n',
            (0, l.jsxs)(t.p, {
              children: [
                'With the field ',
                (0, l.jsx)(t.code, {children: 'File Extension'}),
                ', it is possible to save the output files with extension. It is an optional field with default value as ',
                (0, l.jsx)(t.code, {children: 'false'}),
                '. Enable this to store the files with ',
                (0, l.jsx)(t.code, {children: 'jsonl'}),
                ' extension.',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, l.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, l.jsxs)(t.ol, {
              children: [
                '\n',
                (0, l.jsx)(t.li, {
                  children: 'Create an AzureBlobStorage account.',
                }),
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    'Check if it works under ',
                    (0, l.jsx)(t.a, {
                      href: 'https://portal.azure.com/',
                      children: 'https://portal.azure.com/',
                    }),
                    ' -> "Storage explorer (preview)".',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, l.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, l.jsxs)(t.ul, {
              children: [
                '\n',
                (0, l.jsxs)(t.li, {
                  children: [
                    'Fill up AzureBlobStorage info',
                    '\n',
                    (0, l.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, l.jsxs)(t.li, {
                          children: [
                            (0, l.jsx)(t.strong, {
                              children: 'Endpoint Domain Name',
                            }),
                            '\n',
                            (0, l.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, l.jsx)(t.li, {
                                  children:
                                    'Leave default value (or leave it empty if run container from command line) to use Microsoft native one or use your own.',
                                }),
                                '\n',
                              ],
                            }),
                            '\n',
                          ],
                        }),
                        '\n',
                        (0, l.jsxs)(t.li, {
                          children: [
                            (0, l.jsx)(t.strong, {
                              children: 'Azure blob storage container',
                            }),
                            '\n',
                            (0, l.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, l.jsx)(t.li, {
                                  children:
                                    'If not exists - will be created automatically. If leave empty, then will be created automatically airbytecontainer+timestamp..',
                                }),
                                '\n',
                              ],
                            }),
                            '\n',
                          ],
                        }),
                        '\n',
                        (0, l.jsxs)(t.li, {
                          children: [
                            (0, l.jsx)(t.strong, {
                              children: 'Azure Blob Storage account name',
                            }),
                            '\n',
                            (0, l.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, l.jsxs)(t.li, {
                                  children: [
                                    'See ',
                                    (0, l.jsx)(t.a, {
                                      href: 'https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal',
                                      children: 'this',
                                    }),
                                    ' on how to create an account.',
                                  ],
                                }),
                                '\n',
                              ],
                            }),
                            '\n',
                          ],
                        }),
                        '\n',
                        (0, l.jsxs)(t.li, {
                          children: [
                            (0, l.jsx)(t.strong, {
                              children: 'The Azure blob storage account key',
                            }),
                            '\n',
                            (0, l.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, l.jsx)(t.li, {
                                  children:
                                    'Corresponding key to the above user.',
                                }),
                                '\n',
                              ],
                            }),
                            '\n',
                          ],
                        }),
                        '\n',
                        (0, l.jsxs)(t.li, {
                          children: [
                            (0, l.jsx)(t.strong, {children: 'Format'}),
                            '\n',
                            (0, l.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, l.jsx)(t.li, {
                                  children:
                                    'Data format that will be use for a migrated data representation in blob.',
                                }),
                                '\n',
                                (0, l.jsxs)(t.li, {
                                  children: [
                                    'With the field ',
                                    (0, l.jsx)(t.strong, {
                                      children: 'File Extension',
                                    }),
                                    ', it is possible to save the output files with extension. It is an optional field with default value as ',
                                    (0, l.jsx)(t.code, {children: 'false'}),
                                    '. Enable this to store the files with extension.',
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
                (0, l.jsxs)(t.li, {
                  children: [
                    'Make sure your user has access to Azure from the machine running Airbyte.',
                    '\n',
                    (0, l.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, l.jsx)(t.li, {
                          children: 'This depends on your networking setup.',
                        }),
                        '\n',
                        (0, l.jsx)(t.li, {
                          children:
                            'The easiest way to verify if Airbyte is able to connect to your Azure blob storage container is via the check connection tool in the UI.',
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
          ? (0, l.jsx)(t, {...e, children: (0, l.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => o});
      var l = n(3696);
      const i = {},
        s = l.createContext(i);
      function r(e) {
        const t = l.useContext(s);
        return l.useMemo(
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
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          l.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

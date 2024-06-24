/*! For license information please see b911b27c.8a7d9561.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6344],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        o =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var s,
          l = {},
          d = null,
          a = null;
        for (s in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          r.call(t, s) && !c.hasOwnProperty(s) && (l[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === l[s] && (l[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: l,
          _owner: o.current,
        };
      }
      (t.Fragment = l), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    2524: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => d,
        });
      var s = n(2540),
        i = n(3023);
      const l = {id: 'gcs', title: 'Google Cloud Storage', description: 'desc'},
        r = 'Google Cloud Storage (GCS)',
        o = {
          id: 'destinations/gcs',
          title: 'Google Cloud Storage',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/gcs.md',
          sourceDirName: 'destinations',
          slug: '/destinations/gcs',
          permalink: '/docs/destinations/gcs',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/gcs.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'gcs',
            title: 'Google Cloud Storage',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Firestore',
            permalink: '/docs/destinations/firestore',
          },
          next: {
            title: 'Google Sheets',
            permalink: '/docs/destinations/google-sheets',
          },
        },
        c = {},
        d = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Sync overview', id: 'sync-overview', level: 3},
          {value: 'Features', id: 'features', level: 4},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 3},
          {value: 'Configuration', id: 'configuration', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 2},
          {value: 'Avro', id: 'avro', level: 3},
          {value: 'Configuration', id: 'configuration-1', level: 4},
          {value: 'Data schema', id: 'data-schema', level: 4},
          {value: 'CSV', id: 'csv', level: 3},
          {value: 'JSON Lines (JSONL)', id: 'json-lines-jsonl', level: 3},
          {value: 'Parquet', id: 'parquet', level: 3},
          {value: 'Configuration', id: 'configuration-2', level: 4},
          {value: 'Data schema', id: 'data-schema-1', level: 4},
        ];
      function a(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
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
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {
              id: 'google-cloud-storage-gcs',
              children: 'Google Cloud Storage (GCS)',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'This destination writes data to GCS bucket.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The Hero Pixel GCS destination allows you to sync data to cloud storage buckets. Each stream is written to its own directory under the bucket.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'sync-overview', children: 'Sync overview'}),
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
                            'Warning: this mode deletes all previously synced data in the configured bucket path.',
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
                            'Warning: Hero Pixel provides at-least-once delivery. Depending on your source, you may see duplicated data.',
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
                          children: '\u274c',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Setting a specific bucket path is equivalent to having separate namespaces.',
                        }),
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
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Allow connections from Hero Pixel server to your GCS cluster (if they exist in separate VPCs).',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'An GCP bucket with credentials (for the COPY strategy).',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Fill up GCS info',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'GCS Bucket Name'}),
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'See ',
                                    (0, s.jsx)(t.a, {
                                      href: 'https://cloud.google.com/storage/docs/creating-buckets',
                                      children: 'this',
                                    }),
                                    ' for instructions on how to create a GCS bucket. The bucket cannot have a retention policy. Set Protection Tools to none or Object versioning.',
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
                          children: (0, s.jsx)(t.strong, {
                            children: 'GCS Bucket Region',
                          }),
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'HMAC Key Access ID',
                            }),
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'See ',
                                    (0, s.jsx)(t.a, {
                                      href: 'https://cloud.google.com/storage/docs/authentication/managing-hmackeys',
                                      children: 'this',
                                    }),
                                    ' on how to generate an access key. For more information on hmac keys please reference the ',
                                    (0, s.jsx)(t.a, {
                                      href: 'https://cloud.google.com/storage/docs/authentication/hmackeys',
                                      children: 'GCP docs',
                                    }),
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'We recommend creating an Hero Pixel-specific user or service account. This user or account will require the following permissions for the bucket:',
                                    '\n',
                                    (0, s.jsx)(t.pre, {
                                      children: (0, s.jsx)(t.code, {
                                        children:
                                          'storage.multipartUploads.abort\nstorage.multipartUploads.create\nstorage.objects.create\nstorage.objects.delete\nstorage.objects.get\nstorage.objects.list\n',
                                      }),
                                    }),
                                    '\n',
                                    'You can set those by going to the permissions tab in the GCS bucket and adding the appropriate the email address of the service account or user and adding the aforementioned permissions.',
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
                            (0, s.jsx)(t.strong, {
                              children: 'Secret Access Key',
                            }),
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Corresponding key to the above access ID.',
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
                (0, s.jsx)(t.li, {
                  children:
                    'Make sure your GCS bucket is accessible from the machine running Hero Pixel. This depends on your networking setup. The easiest way to verify if Hero Pixel is able to connect to your GCS bucket is via the check connection tool in the UI.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'configuration', children: 'Configuration'}),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Parameter',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
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
                          children: 'GCS Bucket Name',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Name of the bucket to sync data into.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'GCS Bucket Path',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Subdirectory under the above bucket to sync the data into.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'GCS Region',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'See ',
                            (0, s.jsx)(t.a, {
                              href: 'https://cloud.google.com/storage/docs/locations',
                              children: 'here',
                            }),
                            ' for all region codes.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'HMAC Key Access ID',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            'HMAC key access ID . The access ID for the GCS bucket. When linked to a service account, this ID is 61 characters long; when linked to a user account, it is 24 characters long. See ',
                            (0, s.jsx)(t.a, {
                              href: 'https://cloud.google.com/storage/docs/authentication/hmackeys',
                              children: 'HMAC key',
                            }),
                            ' for details.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'HMAC Key Secret',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'string',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'The corresponding secret for the access ID. It is a 40-character base-64 encoded string.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Format',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'object',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Format specific configuration.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Part Size',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'Arg to configure a block size. Max allowed blocks by GCS = 10,000, i.e. max stream size = blockSize * 10,000 blocks.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Currently, only the ',
                (0, s.jsx)(t.a, {
                  href: 'https://cloud.google.com/storage/docs/authentication/hmackeys',
                  children: 'HMAC key',
                }),
                ' is supported. More credential types will be added in the future.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Additionally, your bucket must be encrypted using a Google-managed encryption key (this is the default setting when creating a new bucket). We currently do not support buckets using customer-managed encryption keys (CMEK). You can view this setting under the "Configuration" tab of your GCS bucket, in the ',
                (0, s.jsx)(t.code, {children: 'Encryption type'}),
                ' row.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                '\u26a0\ufe0f Please note that under "Full Refresh Sync" mode, data in the configured bucket and path will be wiped out before each sync. We recommend you to provision a dedicated S3 resource for this sync to prevent unexpected data deletion from misconfiguration. \u26a0\ufe0f',
            }),
            '\n',
            (0, s.jsx)(t.p, {children: 'The full path of the output data is:'}),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-text',
                children:
                  '<bucket-name>/<sorce-namespace-if-exists>/<stream-name>/<upload-date>-<upload-mills>-<partition-id>.<format-extension>\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {children: 'For example:'}),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-text',
                children:
                  'testing_bucket/data_output_path/public/users/2021_01_01_1609541171643_0.csv.gz\n\u2191              \u2191                \u2191      \u2191     \u2191          \u2191             \u2191 \u2191\n|              |                |      |     |          |             | format extension\n|              |                |      |     |          |             partition id\n|              |                |      |     |          upload time in millis\n|              |                |      |     upload date in YYYY-MM-DD\n|              |                |      stream name\n|              |                source namespace (if it exists)\n|              bucket path\nbucket name\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Please note that the stream name may contain a prefix, if it is configured on the connection.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The rationales behind this naming pattern are: 1. Each stream has its own directory. 2. The data output files can be sorted by upload time. 3. The upload time composes of a date part and millis part so that it is both readable and unique.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'A data sync may create multiple files as the output files can be partitioned by size (targeting a size of 200MB compressed or lower) .',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Each stream will be outputted to its dedicated directory according to the configuration. The complete datastore of each stream includes all the output files under that directory. You can think of the directory as equivalent of a Table in the database world.',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Under Full Refresh Sync mode, old output files will be purged before new files are created.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Under Incremental - Append Sync mode, new output files will be added that only contain the new data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'avro', children: 'Avro'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.a, {
                  href: 'https://avro.apache.org/',
                  children: 'Apache Avro',
                }),
                ' serializes data in a compact binary format. Currently, the Hero Pixel S3 Avro connector always uses the ',
                (0, s.jsx)(t.a, {
                  href: 'http://avro.apache.org/docs/current/spec.html#binary_encoding',
                  children: 'binary encoding',
                }),
                ', and assumes that all data records follow the same schema.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-1',
              children: 'Configuration',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'Here is the available compression codecs:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'No compression'}),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'deflate'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Compression level',
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'Range ',
                                    (0, s.jsx)(t.code, {children: '[0, 9]'}),
                                    '. Default to 0.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Level 0: no compression & fastest.',
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Level 9: best compression & slowest.',
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
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.code, {children: 'bzip2'}),
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: 'xz'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Compression level',
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'Range ',
                                    (0, s.jsx)(t.code, {children: '[0, 9]'}),
                                    '. Default to 6.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Level 0-3 are fast with medium compression.',
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Level 4-6 are fairly slow with high compression.',
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Level 7-9 are like level 6 but use bigger dictionaries and have higher memory requirements. Unless the uncompressed size of the file exceeds 8 MiB, 16 MiB, or 32 MiB, it is waste of memory to use the presets 7, 8, or 9, respectively.',
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
                    (0, s.jsx)(t.code, {children: 'zstandard'}),
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            'Compression level',
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'Range ',
                                    (0, s.jsx)(t.code, {children: '[-5, 22]'}),
                                    '. Default to 3.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    "Negative levels are 'fast' modes akin to ",
                                    (0, s.jsx)(t.code, {children: 'lz4'}),
                                    ' or ',
                                    (0, s.jsx)(t.code, {children: 'snappy'}),
                                    '.',
                                  ],
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Levels above 9 are generally for archival purposes.',
                                }),
                                '\n',
                                (0, s.jsx)(t.li, {
                                  children:
                                    'Levels above 18 use a lot of memory.',
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
                            'Include checksum',
                            '\n',
                            (0, s.jsxs)(t.ul, {
                              children: [
                                '\n',
                                (0, s.jsxs)(t.li, {
                                  children: [
                                    'If set to ',
                                    (0, s.jsx)(t.code, {children: 'true'}),
                                    ', a checksum will be included in each data block.',
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
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.code, {children: 'snappy'}),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'data-schema', children: 'Data schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Under the hood, an Hero Pixel data stream in Json schema is first converted to an Avro schema, then the Json object is converted to an Avro record. Because the data stream can come from any data source, the Json to Avro conversion process has arbitrary rules and limitations.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'csv', children: 'CSV'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Like most of the other Hero Pixel destination connectors, usually the output has three columns: a UUID, an emission timestamp, and the data blob. With the CSV output, it is possible to normalize (flatten) the data blob to multiple columns.',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Column',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Condition',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Description',
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
                          children: (0, s.jsx)(t.code, {
                            children: '_airbyte_ab_id',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Always exists',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'A uuid assigned by Hero Pixel to each processed record.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: '_airbyte_emitted_at',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Always exists.',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'A timestamp representing when the event was pulled from the data source.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: '_airbyte_data',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'When no normalization (flattening) is needed, all data reside under this column as a json blob.',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'root level fields',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children:
                            'When root level normalization (flattening) is selected, the root level fields are expanded.',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'For example, given the following json object from a source:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-json',
                children:
                  '{\n  "user_id": 123,\n  "name": {\n    "first": "John",\n    "last": "Doe"\n  }\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'With no normalization, the output CSV is:',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '_airbyte_ab_id',
                        }),
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '_airbyte_emitted_at',
                        }),
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '_airbyte_data',
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(t.tbody, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '26d73cde-7eb1-4e1e-b7db-a4c03b4cf206',
                        }),
                      }),
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: '1622135805000',
                      }),
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
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
            (0, s.jsx)(t.p, {
              children: 'With root level normalization, the output CSV is:',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '_airbyte_ab_id',
                        }),
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '_airbyte_emitted_at',
                        }),
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {children: 'user_id'}),
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {children: 'name'}),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(t.tbody, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '26d73cde-7eb1-4e1e-b7db-a4c03b4cf206',
                        }),
                      }),
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: '1622135805000',
                      }),
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: '123',
                      }),
                      (0, s.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, s.jsx)(t.code, {
                          children: '{ "first": "John", "last": "Doe" }',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ',
                (0, s.jsx)(t.code, {children: '.csv.gz'}),
                ').',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'json-lines-jsonl',
              children: 'JSON Lines (JSONL)',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.a, {
                  href: 'https://jsonlines.org/',
                  children: 'Json Lines',
                }),
                ' is a text format with one JSON per line. Each line has a structure as follows:',
              ],
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-json',
                children:
                  '{\n  "_airbyte_ab_id": "<uuid>",\n  "_airbyte_emitted_at": "<timestamp-in-millis>",\n  "_airbyte_data": "<json-data-from-source>"\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'For example, given the following two json objects from a source:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-json',
                children:
                  '[\n  {\n    "user_id": 123,\n    "name": {\n      "first": "John",\n      "last": "Doe"\n    }\n  },\n  {\n    "user_id": 456,\n    "name": {\n      "first": "Jane",\n      "last": "Roe"\n    }\n  }\n]\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'They will be like this in the output file:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: 'language-text',
                children:
                  '{ "_airbyte_ab_id": "26d73cde-7eb1-4e1e-b7db-a4c03b4cf206", "_airbyte_emitted_at": "1622135805000", "_airbyte_data": { "user_id": 123, "name": { "first": "John", "last": "Doe" } } }\n{ "_airbyte_ab_id": "0a61de1b-9cdd-4455-a739-93572c9a5f20", "_airbyte_emitted_at": "1631948170000", "_airbyte_data": { "user_id": 456, "name": { "first": "Jane", "last": "Roe" } } }\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Output files can be compressed. The default option is GZIP compression. If compression is selected, the output filename will have an extra extension (GZIP: ',
                (0, s.jsx)(t.code, {children: '.jsonl.gz'}),
                ').',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'parquet', children: 'Parquet'}),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'configuration-2',
              children: 'Configuration',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The following configuration is available to configure the Parquet output:',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Parameter',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Type',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'center'},
                        children: 'Default',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Description',
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
                          children: (0, s.jsx)(t.code, {
                            children: 'compression_codec',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'enum',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: (0, s.jsx)(t.code, {
                            children: 'UNCOMPRESSED',
                          }),
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'Compression algorithm',
                            }),
                            '. Available candidates are: ',
                            (0, s.jsx)(t.code, {children: 'UNCOMPRESSED'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'SNAPPY'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'GZIP'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'LZO'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'BROTLI'}),
                            ', ',
                            (0, s.jsx)(t.code, {children: 'LZ4'}),
                            ', and ',
                            (0, s.jsx)(t.code, {children: 'ZSTD'}),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: 'block_size_mb',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '128 (MB)',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'Block size (row group size)',
                            }),
                            ' in MB. This is the size of a row group being buffered in memory. It limits the memory usage when writing. Larger values will improve the IO when reading, but consume more memory when writing.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: 'max_padding_size_mb',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '8 (MB)',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'Max padding size',
                            }),
                            ' in MB. This is the maximum size allowed as padding to align row groups. This is also the minimum size of a row group.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: 'page_size_kb',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '1024 (KB)',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, s.jsx)(t.strong, {children: 'Page size'}),
                            ' in KB. The page size is for compression. A block is composed of pages. A page is the smallest unit that must be read fully to access a single record. If this value is too small, the compression will deteriorate.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: 'dictionary_page_size_kb',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'integer',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: '1024 (KB)',
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'Dictionary Page Size',
                            }),
                            ' in KB. There is one dictionary page per column per row group when dictionary encoding is used. The dictionary page size works like the page size but for dictionary.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: (0, s.jsx)(t.code, {
                            children: 'dictionary_encoding',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: 'boolean',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'center'},
                          children: (0, s.jsx)(t.code, {children: 'true'}),
                        }),
                        (0, s.jsxs)(t.td, {
                          style: {textAlign: 'left'},
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'Dictionary encoding',
                            }),
                            '. This parameter controls whether dictionary encoding is turned on.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'These parameters are related to the ',
                (0, s.jsx)(t.code, {children: 'ParquetOutputFormat'}),
                '. See the ',
                (0, s.jsx)(t.a, {
                  href: 'https://www.javadoc.io/doc/org.apache.parquet/parquet-hadoop/1.12.0/org/apache/parquet/hadoop/ParquetOutputFormat.html',
                  children: 'Java doc',
                }),
                ' for more details. Also see ',
                (0, s.jsx)(t.a, {
                  href: 'https://parquet.apache.org/docs/file-format/configurations',
                  children: 'Parquet documentation',
                }),
                ' for their recommended configurations (512 - 1024 MB block size, 8 KB page size).',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {id: 'data-schema-1', children: 'Data schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Under the hood, an Hero Pixel data stream in Json schema is first converted to an Avro schema, then the Json object is converted to an Avro record, and finally the Avro record is outputted to the Parquet format. Because the data stream can come from any data source, the Json to Avro conversion process has arbitrary rules and limitations.',
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
      n.d(t, {R: () => r, x: () => o});
      var s = n(3696);
      const i = {},
        l = s.createContext(i);
      function r(e) {
        const t = s.useContext(l);
        return s.useMemo(
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
          s.createElement(l.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

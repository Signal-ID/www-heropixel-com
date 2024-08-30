/*! For license information please see 51907a4c.bc77810e.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7945],
  {
    2192: (e, t, s) => {
      var n = s(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        r =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, s) {
        var n,
          i = {},
          c = null,
          d = null;
        for (n in (void 0 !== s && (c = '' + s),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          l.call(t, n) && !a.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: d,
          props: i,
          _owner: r.current,
        };
      }
      (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, s) => {
      e.exports = s(2192);
    },
    8777: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => i,
          metadata: () => r,
          toc: () => c,
        });
      var n = s(2540),
        o = s(3023);
      const i = {
          id: 'google-sheets',
          title: 'Google Sheets',
          description: 'desc',
        },
        l = 'Google Sheets',
        r = {
          id: 'destinations/google-sheets',
          title: 'Google Sheets',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/google-sheets.md',
          sourceDirName: 'destinations',
          slug: '/destinations/google-sheets',
          permalink: '/docs/destinations/google-sheets',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'google-sheets',
            title: 'Google Sheets',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {
            title: 'GoHighLevel',
            permalink: '/docs/destinations/gohighlevel',
          },
          next: {title: 'HubSpot', permalink: '/docs/destinations/hubspot'},
        },
        a = {},
        c = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {
            value: 'Step 1: Set up Google Sheets',
            id: 'step-1-set-up-google-sheets',
            level: 2,
          },
          {value: 'Google Account', id: 'google-account', level: 3},
          {
            value: 'Google Sheets (Google Spreadsheets)',
            id: 'google-sheets-google-spreadsheets',
            level: 3,
          },
          {
            value:
              'Step 2: Set up the Google Sheets destination connector in HeroPixel',
            id: 'step-2-set-up-the-google-sheets-destination-connector-in-heropixel',
            level: 2,
          },
          {value: 'Output schema', id: 'output-schema', level: 3},
          {
            value: 'Rate Limiting &amp; Performance Considerations',
            id: 'rate-limiting--performance-considerations',
            level: 3,
          },
          {value: '<a></a>Limitations', id: 'limitations', level: 3},
          {value: 'Note:', id: 'note', level: 4},
          {value: 'Data type mapping', id: 'data-type-mapping', level: 3},
          {
            value: 'Features &amp; Supported sync modes',
            id: 'features--supported-sync-modes',
            level: 3,
          },
        ];
      function d(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {id: 'google-sheets', children: 'Google Sheets'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'The Google Sheets Destination is configured to push data to a single Google Sheets spreadsheet with multiple Worksheets as streams. To replicate data to multiple spreadsheets, you can create multiple instances of the Google Sheets Destination in your HeroPixelinstance.',
            }),
            '\n',
            (0, n.jsxs)(t.admonition, {
              type: 'warning',
              children: [
                (0, n.jsx)(t.p, {
                  children:
                    'Google Sheets imposes rate limits and hard limits on the amount of data it can receive, which results in sync failure. Only use Google Sheets as a destination for small, non-production use cases, as it is not designed for handling large-scale data operations.',
                }),
                (0, n.jsxs)(t.p, {
                  children: [
                    'Read more about the ',
                    (0, n.jsx)(t.a, {
                      href: '#limitations',
                      children: 'limitations',
                    }),
                    ' of using Google Sheets below.',
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {children: 'Google Account'}),
                '\n',
                (0, n.jsx)(t.li, {children: 'Google Spreadsheet URL'}),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'step-1-set-up-google-sheets',
              children: 'Step 1: Set up Google Sheets',
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'google-account',
              children: 'Google Account',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'To create a Google account, visit ',
                (0, n.jsx)(t.a, {
                  href: 'https://support.google.com/accounts/answer/27441?hl=en',
                  children: 'Google',
                }),
                ' and create a Google Account.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'google-sheets-google-spreadsheets',
              children: 'Google Sheets (Google Spreadsheets)',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Once you are logged into your Google account, create a new Google Sheet. ',
                    (0, n.jsx)(t.a, {
                      href: 'https://support.google.com/docs/answer/6000292?hl=en&co=GENIE.Platform%3DDesktop',
                      children: 'Follow this guide',
                    }),
                    ' to create a new sheet. You may use an existing Google Sheet.',
                  ],
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'You will need the link of the Google Sheet you\'d like to sync. To get it, click "Share" in the top right corner of the Google Sheets interface, and then click Copy Link in the dialog that pops up.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'step-2-set-up-the-google-sheets-destination-connector-in-heropixel',
              children:
                'Step 2: Set up the Google Sheets destination connector in HeroPixel',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Authentication to Google Sheets is only available using OAuth for authentication.',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Create a new ',
                    (0, n.jsx)(t.a, {
                      href: 'https://console.cloud.google.com/projectcreate',
                      children: 'Google Cloud project',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Enable the ',
                    (0, n.jsx)(t.a, {
                      href: 'https://console.cloud.google.com/apis/library/sheets.googleapis.com',
                      children: 'Google Sheets API',
                    }),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Create a new ',
                    (0, n.jsx)(t.a, {
                      href: 'https://console.cloud.google.com/apis/credentials/oauthclient',
                      children: 'OAuth client ID',
                    }),
                    '. Select ',
                    (0, n.jsx)(t.code, {children: 'Web application'}),
                    ' as the Application type, give it a ',
                    (0, n.jsx)(t.code, {children: 'name'}),
                    ' and add ',
                    (0, n.jsx)(t.code, {
                      children: 'https://developers.google.com/oauthplayground',
                    }),
                    ' as an Authorized redirect URI.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Add a ',
                    (0, n.jsx)(t.code, {children: 'Client Secret'}),
                    ' (Add secret), and take note of both the ',
                    (0, n.jsx)(t.code, {children: 'Client Secret'}),
                    ' and ',
                    (0, n.jsx)(t.code, {children: 'Client ID'}),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Go to ',
                    (0, n.jsx)(t.a, {
                      href: 'https://developers.google.com/oauthplayground/',
                      children: 'Google OAuth Playground',
                    }),
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Click the cog in the top-right corner, select ',
                    (0, n.jsx)(t.code, {
                      children: 'Use your own OAuth credentials',
                    }),
                    ' and enter the ',
                    (0, n.jsx)(t.code, {children: 'OAuth Client ID'}),
                    ' and ',
                    (0, n.jsx)(t.code, {children: 'OAuth Client secret'}),
                    ' from the previous step.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'In the left sidebar, find and select ',
                    (0, n.jsx)(t.code, {children: 'Google Sheets API v4'}),
                    ', then choose the ',
                    (0, n.jsx)(t.code, {
                      children: 'https://www.googleapis.com/auth/spreadsheets',
                    }),
                    ' scope. Click ',
                    (0, n.jsx)(t.code, {children: 'Authorize APIs'}),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'In ',
                    (0, n.jsx)(t.strong, {children: 'step 2'}),
                    ', click ',
                    (0, n.jsx)(t.code, {
                      children: 'Exchange authorization code for tokens',
                    }),
                    '. Take note of the ',
                    (0, n.jsx)(t.code, {children: 'Refresh token'}),
                    '.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'Set up a new destination in HeroPixel select ',
                    (0, n.jsx)(t.code, {children: 'Google Sheets'}),
                    ' and enter the ',
                    (0, n.jsx)(t.code, {children: 'Client ID'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: 'Client Secret'}),
                    ', ',
                    (0, n.jsx)(t.code, {children: 'Refresh Token'}),
                    ' and ',
                    (0, n.jsx)(t.code, {children: 'Spreadsheet Link'}),
                    ' from the previous steps.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Each worksheet in the selected spreadsheet will be the output as a separate source-connector stream.',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The output columns are re-ordered in alphabetical order. The output columns should ',
                (0, n.jsx)(t.strong, {children: 'not'}),
                ' be reordered manually after the sync, as this could cause future syncs to fail.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'All data is coerced to a ',
                (0, n.jsx)(t.code, {children: 'string'}),
                ' format in Google Sheets.\nAny nested lists and objects will be formatted as a string rather than normal lists and objects. Further data processing is required if you require the data for downstream analysis.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'HeroPixelonly supports replicating ',
                (0, n.jsx)(t.code, {children: 'Grid Sheets'}),
                ', which means only text is replicated. Objects like charts or images cannot be synced. See the ',
                (0, n.jsx)(t.a, {
                  href: 'https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetType',
                  children: 'Google Sheets API docs',
                }),
                ' for more info on all available sheet types.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'rate-limiting--performance-considerations',
              children: 'Rate Limiting & Performance Considerations',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.a, {
                  href: 'https://developers.google.com/sheets/api/limits',
                  children: 'Google API rate limit',
                }),
                ' is 60 requests per 60 seconds per user and 300 requests per 60 seconds per project, which will result in slow sync speeds. HeroPixelbatches requests to the API in order to efficiently pull data and respects these rate limits.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.h3, {
              id: 'limitations',
              children: [(0, n.jsx)('a', {name: 'limitations'}), 'Limitations'],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Google Sheets imposes hard limits on the amount of data that can be synced. If you attempt to sync more data than is allowed, the sync will fail.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: (0, n.jsx)(t.strong, {
                children: 'Maximum of 10 Million Cells',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'A Google Sheets document can contain a maximum of 10 million cells. These can be in a single worksheet or in multiple sheets.\nIf you already have reached the 10 million limit, it will not allow you to add more columns (and vice versa, i.e., if the 10 million cells limit is reached with a certain number of rows, it will not allow more rows).',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: (0, n.jsx)(t.strong, {
                children: 'Maximum of 50,000 characters per cell',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'There can be at most 50,000 characters per cell. Do not use Google Sheets if you have fields with long text in your source.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: (0, n.jsx)(t.strong, {
                children: 'Maximum of 18,278 Columns',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'There can be at most 18,278 columns in Google Sheets in a worksheet.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: (0, n.jsx)(t.strong, {
                children: 'Maximum of 200 Worksheets in a Spreadsheet',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'You cannot create more than 200 worksheets within single spreadsheet.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children: 'Syncs will fail if any of these limits are reached.',
            }),
            '\n',
            (0, n.jsx)(t.h4, {id: 'note', children: 'Note:'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'The underlying process of record normalization is applied to avoid data corruption during the write process. This handles two scenarios:',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'UnderSetting - when record has less keys (columns) than catalog declares',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'OverSetting - when record has more keys (columns) than catalog declares',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                children:
                  "EXAMPLE:\n\n- UnderSetting:\n    * Catalog:\n        - has 3 entities:\n            [ 'id', 'key1', 'key2' ]\n                        ^\n    * Input record:\n        - missing 1 entity, compare to catalog\n            { 'id': 123,    'key2': 'value' }\n                            ^\n    * Result:\n        - 'key1' has been added to the record, because it was declared in catalog, to keep the data structure.\n            {'id': 123, 'key1': '', {'key2': 'value'} }\n                            ^\n- OverSetting:\n    * Catalog:\n        - has 3 entities:\n            [ 'id', 'key1', 'key2',   ]\n                                    ^\n    * Input record:\n        - doesn't have entity 'key1'\n        - has 1 more enitity, compare to catalog 'key3'\n            { 'id': 123,     ,'key2': 'value', 'key3': 'value' }\n                            ^                      ^\n    * Result:\n        - 'key1' was added, because it expected be the part of the record, to keep the data structure\n        - 'key3' was dropped, because it was not declared in catalog, to keep the data structure\n            { 'id': 123, 'key1': '', 'key2': 'value',   }\n                            ^                          ^\n",
              }),
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'data-type-mapping',
              children: 'Data type mapping',
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Integration Type',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'HeroPixelType',
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(t.tbody, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: 'Any Type',
                      }),
                      (0, n.jsx)(t.td, {
                        style: {textAlign: 'left'},
                        children: (0, n.jsx)(t.code, {children: 'string'}),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'features--supported-sync-modes',
              children: 'Features & Supported sync modes',
            }),
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
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Ful-Refresh Overwrite',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Ful-Refresh Append',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental Append',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental Append-Deduplicate',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, s) => {
      s.d(t, {R: () => l, x: () => r});
      var n = s(3696);
      const o = {},
        i = n.createContext(o);
      function l(e) {
        const t = n.useContext(i);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : l(e.components)),
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

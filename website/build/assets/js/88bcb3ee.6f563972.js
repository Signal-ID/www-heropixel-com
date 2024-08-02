/*! For license information please see 88bcb3ee.6f563972.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7937],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        r = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        d =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, t, n) {
        var s,
          a = {},
          o = null,
          c = null;
        for (s in (void 0 !== n && (o = '' + n),
        void 0 !== t.key && (o = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          i.call(t, s) && !l.hasOwnProperty(s) && (a[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === a[s] && (a[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: o,
          ref: c,
          props: a,
          _owner: d.current,
        };
      }
      (t.Fragment = a), (t.jsx = o), (t.jsxs = o);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    2961: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => a,
          metadata: () => d,
          toc: () => o,
        });
      var s = n(2540),
        r = n(3023);
      const a = {id: 'teradata', title: 'Teradata', description: 'teradata'},
        i = 'Teradata',
        d = {
          id: 'destinations/teradata',
          title: 'Teradata',
          description: 'teradata',
          source: '@site/versioned_docs/version-0.0.1/destinations/teradata.md',
          sourceDirName: 'destinations',
          slug: '/destinations/teradata',
          permalink: '/docs/destinations/teradata',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'teradata',
            title: 'Teradata',
            description: 'teradata',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Starburst Galaxy',
            permalink: '/docs/destinations/starburst-galaxy',
          },
          next: {title: 'Texthub', permalink: '/docs/destinations/texthub'},
        },
        l = {},
        o = [
          {value: 'Prerequisites', id: 'prerequisites', level: 2},
          {value: 'Sync overview', id: 'sync-overview', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Features', id: 'features', level: 3},
          {
            value: 'Performance considerations',
            id: 'performance-considerations',
            level: 3,
          },
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 3},
          {
            value: 'Set up the Teradata Destination connector',
            id: 'set-up-the-teradata-destination-connector',
            level: 4,
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
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {id: 'teradata', children: 'Teradata'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This page guides you through the process of setting up the Teradata destination connector.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'prerequisites', children: 'Prerequisites'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                "To use the Teradata destination connector, you'll need:",
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, {
                      children: 'Access to a Teradata Vantage instance',
                    }),
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        (0, s.jsx)(t.strong, {children: 'Note:'}),
                        ' If you need a new instance of Vantage, you can install a free version called Vantage Express in the cloud on ',
                        (0, s.jsx)(t.a, {
                          href: 'https://quickstarts.teradata.com/vantage.express.gcp.html',
                          children: 'Google Cloud',
                        }),
                        ', ',
                        (0, s.jsx)(t.a, {
                          href: 'https://quickstarts.teradata.com/run-vantage-express-on-microsoft-azure.html',
                          children: 'Azure',
                        }),
                        ', and ',
                        (0, s.jsx)(t.a, {
                          href: 'https://quickstarts.teradata.com/run-vantage-express-on-aws.html',
                          children: 'AWS',
                        }),
                        '. You can also run Vantage Express on your local machine using ',
                        (0, s.jsx)(t.a, {
                          href: 'https://quickstarts.teradata.com/getting.started.vmware.html',
                          children: 'VMware',
                        }),
                        ', ',
                        (0, s.jsx)(t.a, {
                          href: 'https://quickstarts.teradata.com/getting.started.vbox.html',
                          children: 'VirtualBox',
                        }),
                        ', or ',
                        (0, s.jsx)(t.a, {
                          href: 'https://quickstarts.teradata.com/getting.started.utm.html',
                          children: 'UTM',
                        }),
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
            (0, s.jsx)(t.p, {
              children:
                "You'll need the following information to configure the Teradata destination:",
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Host'}),
                    ' - The host name of the Teradata Vantage instance.',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Username'}),
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children: (0, s.jsx)(t.strong, {children: 'Password'}),
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'Default Schema Name'}),
                    ' - Specify the schema (or several schemas separated by commas) to be set in the search-path. These schemas will be used to resolve unqualified object names used in statements executed over this connection.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, {children: 'JDBC URL Params'}),
                    ' (optional)',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: (0, s.jsx)(t.a, {
                href: 'https://downloads.teradata.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#BGBHDDGB',
                children: 'Refer to this guide for more details',
              }),
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Each stream will be output into its own table in Teradata. Each table will contain 3 columns:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': a unique uuid assigned by Hero Pixel to each event that is processed. This is the primary index column. The column type in Teradata is ',
                    (0, s.jsx)(t.code, {children: 'VARCHAR(256)'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a timestamp representing when the event was pulled from the data source. The column type in Teradata is ',
                    (0, s.jsx)(t.code, {children: 'TIMESTAMP(6)'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json blob representing with the event data. The column type in Teradata is ',
                    (0, s.jsx)(t.code, {children: 'JSON'}),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'features', children: 'Features'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The Teradata destination connector supports the sync modes:',
            }),
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
            (0, s.jsx)(t.h3, {
              id: 'performance-considerations',
              children: 'Performance considerations',
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
              children:
                'You need a Teradata user with the following permissions:',
            }),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children: 'can create tables and write permission.',
                }),
                '\n',
                (0, s.jsx)(t.li, {children: 'can create schemas e.g:'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'You can create such a user by running:',
            }),
            '\n',
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                children:
                  'CREATE USER airbyte_user  as perm=10e6, PASSWORD=<password>;\nGRANT ALL on dbc to airbyte_user;\n\n',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'You can also use a pre-existing user but we highly recommend creating a dedicated user for Hero Pixel.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'set-up-the-teradata-destination-connector',
              children: 'Set up the Teradata Destination connector',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsx)(t.p, {
                      children: 'Log into your Hero Pixel account.',
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'Click ',
                        (0, s.jsx)(t.strong, {children: 'Destinations'}),
                        ' and then click ',
                        (0, s.jsx)(t.strong, {children: '+ New destination'}),
                        '.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'On the Set up the destination page, select ',
                        (0, s.jsx)(t.strong, {children: 'Teradata'}),
                        ' from the ',
                        (0, s.jsx)(t.strong, {children: 'Destination type'}),
                        ' dropdown.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'Enter the ',
                        (0, s.jsx)(t.strong, {children: 'Name'}),
                        ' for the Teradata connector.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'For ',
                        (0, s.jsx)(t.strong, {children: 'Host'}),
                        ', enter the host domain of the Teradata instance',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'For ',
                        (0, s.jsx)(t.strong, {children: 'Default Schema'}),
                        ', enter the Default Schema name. The default value is public.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'For ',
                        (0, s.jsx)(t.strong, {children: 'User'}),
                        ' and ',
                        (0, s.jsx)(t.strong, {children: 'Password'}),
                        ', enter the database username and password.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, s.jsxs)(t.p, {
                      children: [
                        'To customize the JDBC connection beyond common options, specify additional supported ',
                        (0, s.jsx)(t.a, {
                          href: 'https://downloads.teradata.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#BGBHDDGB',
                          children: 'JDBC URL parameters',
                        }),
                        ' as key-value pairs separated by the symbol & in the ',
                        (0, s.jsx)(t.strong, {children: 'JDBC URL Params'}),
                        ' field.',
                      ],
                    }),
                    '\n',
                    (0, s.jsx)(t.p, {
                      children: 'Example: key1=value1&key2=value2&key3=value3',
                    }),
                    '\n',
                    (0, s.jsx)(t.p, {
                      children:
                        'These parameters will be added at the end of the JDBC URL that the Hero Pixel will use to connect to your Teradata database.',
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
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => d});
      var s = n(3696);
      const r = {},
        a = s.createContext(r);
      function i(e) {
        const t = s.useContext(a);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function d(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          s.createElement(a.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

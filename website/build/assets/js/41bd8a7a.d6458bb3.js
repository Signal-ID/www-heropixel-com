/*! For license information please see 41bd8a7a.d6458bb3.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3381],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        l = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, t, n) {
        var s,
          i = {},
          o = null,
          c = null;
        for (s in (void 0 !== n && (o = '' + n),
        void 0 !== t.key && (o = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          r.call(t, s) && !d.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: l,
          type: e,
          key: o,
          ref: c,
          props: i,
          _owner: a.current,
        };
      }
      (t.Fragment = i), (t.jsx = o), (t.jsxs = o);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    1562: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => o,
        });
      var s = n(2540),
        l = n(3023);
      const i = {id: 'astra', title: 'Astra DB', description: 'desc'},
        r = 'Astra DB Destination',
        a = {
          id: 'destinations/astra',
          title: 'Astra DB',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/astra.md',
          sourceDirName: 'destinations',
          slug: '/destinations/astra',
          permalink: '/docs/destinations/astra',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/astra.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'astra', title: 'Astra DB', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Overview of Destinations',
            permalink: '/docs/intro-to-integrations',
          },
          next: {
            title: 'Azure Blog Storage',
            permalink: '/docs/destinations/azure-blob-storage',
          },
        },
        d = {},
        o = [
          {value: 'Pre-Requisites', id: 'pre-requisites', level: 2},
          {value: 'Setup Guide', id: 'setup-guide', level: 2},
          {
            value: 'Set Up an Astra Database',
            id: 'set-up-an-astra-database',
            level: 4,
          },
          {
            value: 'Gathering other credentials',
            id: 'gathering-other-credentials',
            level: 4,
          },
          {value: 'Supported Sync Modes', id: 'supported-sync-modes', level: 2},
          {value: 'Changelog', id: 'changelog', level: 2},
        ];
      function c(e) {
        const t = {
            a: 'a',
            h1: 'h1',
            h2: 'h2',
            h4: 'h4',
            li: 'li',
            p: 'p',
            table: 'table',
            tbody: 'tbody',
            td: 'td',
            th: 'th',
            thead: 'thead',
            tr: 'tr',
            ul: 'ul',
            ...(0, l.R)(),
            ...e.components,
          },
          {Details: n} = t;
        return (
          n ||
            (function (e, t) {
              throw new Error(
                'Expected ' +
                  (t ? 'component' : 'object') +
                  ' `' +
                  e +
                  '` to be defined: you likely forgot to import, pass, or provide it.'
              );
            })('Details', !0),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(t.table, {
                children: [
                  (0, s.jsx)(t.thead, {
                    children: (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.th, {
                          style: {textAlign: 'left'},
                          children: 'Availability:',
                        }),
                        (0, s.jsx)(t.th, {
                          style: {textAlign: 'left'},
                          children: 'GA',
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
                            children: 'Support Level:',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'COMMUNITY',
                          }),
                        ],
                      }),
                      (0, s.jsxs)(t.tr, {
                        children: [
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'Connector Version:',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: '0.1.6',
                          }),
                        ],
                      }),
                      (0, s.jsxs)(t.tr, {
                        children: [
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'CDK Version:',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: '0.81.6',
                          }),
                        ],
                      }),
                      (0, s.jsxs)(t.tr, {
                        children: [
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: 'Sync Success Rate:',
                          }),
                          (0, s.jsx)(t.td, {
                            style: {textAlign: 'left'},
                            children: '99%',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              '\n',
              (0, s.jsx)(t.h1, {
                id: 'astra-db-destination',
                children: 'Astra DB Destination',
              }),
              '\n',
              (0, s.jsx)(t.p, {
                children:
                  'This page contains the setup guide and reference information for the destination-astra connector.',
              }),
              '\n',
              (0, s.jsx)(t.h2, {
                id: 'pre-requisites',
                children: 'Pre-Requisites',
              }),
              '\n',
              (0, s.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, s.jsx)(t.li, {
                    children: 'An OpenAI, AzureOpenAI, Cohere, etc. API Key',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, s.jsx)(t.h2, {id: 'setup-guide', children: 'Setup Guide'}),
              '\n',
              (0, s.jsx)(t.h4, {
                id: 'set-up-an-astra-database',
                children: 'Set Up an Astra Database',
              }),
              '\n',
              (0, s.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, s.jsxs)(t.li, {
                    children: [
                      'Create an Astra account ',
                      (0, s.jsx)(t.a, {
                        href: 'https://astra.datastax.com/signup',
                        children: 'here',
                      }),
                    ],
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'In the Astra Portal, select Databases in the main navigation.',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {children: 'Click Create Database.'}),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'In the Create Database dialog, select the Serverless (Vector) deployment type.',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'In the Configuration section, enter a name for the new database in the Database name field.\n-- Because database names can\u2019t be changed later, it\u2019s best to name your database something meaningful. Database names must start and end with an alphanumeric character, and may contain the following special characters: & + - _ ( ) < > . , @.',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Select your preferred Provider and Region.\n-- You can select from a limited number of regions if you\u2019re on the Free plan. Regions with a lock icon require that you upgrade to a Pay As You Go plan.',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Click Create Database.\n-- You are redirected to your new database\u2019s Overview screen. Your database starts in Pending status before transitioning to Initializing. You\u2019ll receive a notification once your database is initialized.',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, s.jsx)(t.h4, {
                id: 'gathering-other-credentials',
                children: 'Gathering other credentials',
              }),
              '\n',
              (0, s.jsxs)(t.ul, {
                children: [
                  '\n',
                  (0, s.jsx)(t.li, {
                    children: 'Go back to the Overview tab on the Astra UI',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Copy the Endpoint under Database Details and load into Airbyte under the name astra_db_endpoint',
                  }),
                  '\n',
                  (0, s.jsx)(t.li, {
                    children:
                      'Click generate token, copy the application token and load under astra_db_app_token',
                  }),
                  '\n',
                ],
              }),
              '\n',
              (0, s.jsx)(t.h2, {
                id: 'supported-sync-modes',
                children: 'Supported Sync Modes',
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
              (0, s.jsx)(t.h2, {id: 'changelog', children: 'Changelog'}),
              '\n',
              (0, s.jsxs)(n, {
                children: [
                  (0, s.jsx)('summary', {children: 'Expand to review'}),
                  (0, s.jsxs)(t.table, {
                    children: [
                      (0, s.jsx)(t.thead, {
                        children: (0, s.jsxs)(t.tr, {
                          children: [
                            (0, s.jsx)(t.th, {
                              style: {textAlign: 'left'},
                              children: 'Version',
                            }),
                            (0, s.jsx)(t.th, {
                              style: {textAlign: 'left'},
                              children: 'Date',
                            }),
                            (0, s.jsx)(t.th, {
                              style: {textAlign: 'left'},
                              children: 'Subject',
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
                                children: '0.1.6',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-06-22',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Update dependencies',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.5',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-06-06',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  '[autopull] Upgrade base image to v1.2.2',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.4',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-05-16',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Add explicit projection when reading from Astra DB',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.3',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-04-19',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Add "airbyte" user-agent in the HTTP requests to Astra DB',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.2',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-04-15',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children:
                                  'Moved to Poetry; Updated CDK & pytest versions',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.1',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-01-26',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'DS Branding Update',
                              }),
                            ],
                          }),
                          (0, s.jsxs)(t.tr, {
                            children: [
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '0.1.0',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: '2024-01-08',
                              }),
                              (0, s.jsx)(t.td, {
                                style: {textAlign: 'left'},
                                children: 'Initial Release',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, l.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => a});
      var s = n(3696);
      const l = {},
        i = s.createContext(l);
      function r(e) {
        const t = s.useContext(i);
        return s.useMemo(
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
              ? e.components(l)
              : e.components || l
            : r(e.components)),
          s.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

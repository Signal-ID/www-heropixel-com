/*! For license information please see 7fc019a1.d55f11f1.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1941],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        o =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var s,
          i = {},
          d = null,
          c = null;
        for (s in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          l.call(t, s) && !a.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: o.current,
        };
      }
      (t.Fragment = i), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    6482: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => d,
        });
      var s = n(2540),
        r = n(3023);
      const i = {id: 'firestore', title: 'Firestore', description: 'desc'},
        l = 'Firestore',
        o = {
          id: 'destinations/firestore',
          title: 'Firestore',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/firestore.md',
          sourceDirName: 'destinations',
          slug: '/destinations/firestore',
          permalink: '/docs/destinations/firestore',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/firestore.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'firestore',
            title: 'Firestore',
            description: 'desc',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Firebolt',
            permalink: '/docs/destinations/firebolt',
          },
          next: {
            title: 'Google Cloud Storage',
            permalink: '/docs/destinations/gcs',
          },
        },
        a = {},
        d = [
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {
            value: 'Step 1: Create a Service Account',
            id: 'step-1-create-a-service-account',
            level: 3,
          },
          {value: 'Sync overview', id: 'sync-overview', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Features', id: 'features', level: 4},
        ];
      function c(e) {
        const t = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          ol: 'ol',
          p: 'p',
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
            (0, s.jsx)(t.h1, {id: 'firestore', children: 'Firestore'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'This destination writes data to Google Firestore.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Google Firestore, officially known as Cloud Firestore, is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud. It is commonly used for developing applications as a NoSQL database that provides real-time data syncing across user devices.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'An existing GCP project'}),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'A role with permissions to create a Service Account Key in GCP',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'step-1-create-a-service-account',
              children: 'Step 1: Create a Service Account',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Log in to the Google Cloud Console. Select the project where your Firestore database is located.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Navigate to "IAM & Admin" and select "Service Accounts". Create a Service Account and assign appropriate roles. Ensure \u201cCloud Datastore User\u201d or \u201cFirebase Rules System\u201d are enabled.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Navigate to the service account and generate the JSON key. Download and copy the contents to the configuration.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: 'Each stream will be output into a BigQuery table.',
            }),
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
                          children: '\u2705',
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
                          children: '\u2705',
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
                          children: '\u2705',
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
                          children: '\u2705',
                        }),
                        (0, s.jsx)(t.td, {style: {textAlign: 'left'}}),
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
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => l, x: () => o});
      var s = n(3696);
      const r = {},
        i = s.createContext(r);
      function l(e) {
        const t = s.useContext(i);
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
              ? e.components(r)
              : e.components || r
            : l(e.components)),
          s.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

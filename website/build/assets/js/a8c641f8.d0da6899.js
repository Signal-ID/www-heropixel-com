/*! For license information please see a8c641f8.d0da6899.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8844],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, n) {
        var s,
          i = {},
          a = null,
          c = null;
        for (s in (void 0 !== n && (a = '' + n),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          o.call(t, s) && !d.hasOwnProperty(s) && (i[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === i[s] && (i[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: c,
          props: i,
          _owner: l.current,
        };
      }
      (t.Fragment = i), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4836: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => a,
        });
      var s = n(2540),
        r = n(3023);
      const i = {id: 'convex', title: 'Convex', description: 'desc'},
        o = 'Convex',
        l = {
          id: 'destinations/convex',
          title: 'Convex',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/convex.md',
          sourceDirName: 'destinations',
          slug: '/destinations/convex',
          permalink: '/docs/destinations/convex',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/convex.md',
          tags: [],
          version: '0.0.1',
          frontMatter: {id: 'convex', title: 'Convex', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'ClickHouse',
            permalink: '/docs/destinations/clickhouse',
          },
          next: {
            title: 'Databricks',
            permalink: '/docs/destinations/databricks',
          },
        },
        d = {},
        a = [
          {value: 'Overview', id: 'overview', level: 2},
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
            (0, s.jsx)(t.h1, {id: 'convex', children: 'Convex'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This page contains the setup guide and reference information for the Convex destination connector.',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Get started with Convex at the ',
                (0, s.jsx)(t.a, {
                  href: 'https://convex.dev',
                  children: 'Convex website',
                }),
                '.\nSee your data on the ',
                (0, s.jsx)(t.a, {
                  href: 'https://dashboard.convex.dev/',
                  children: 'Convex dashboard',
                }),
                '.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The Convex destination connector supports Full Refresh Overwrite, Full Refresh Append, Incremental Append, and Incremental Dedup. Note that for Incremental Dedup, Convex does not store a history table like some other destinations that use DBT, but Convex does store a deduped snapshot.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                "Each stream will be output into a table in Convex. Convex's table naming rules apply - table names can only contain letters, digits, and underscores and may not start with an underscore.",
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Each record is a ',
                (0, s.jsx)(t.a, {
                  href: 'https://docs.convex.dev/using/types',
                  children: 'document',
                }),
                ' in Convex and is assigned ',
                (0, s.jsx)(t.code, {children: '_id'}),
                ' and ',
                (0, s.jsx)(t.code, {children: '_creationTime'}),
                ' fields during sync.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'features', children: 'Features'}),
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
                        children: 'Supported?',
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
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Dedupe Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Replicate Incremental Deletes',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
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
            (0, s.jsxs)(t.p, {
              children: [
                'Take care to use the appropriate sync method and frequency for the quantity of data streaming from the source. Performance may suffer with large, frequent syncs with Full Refresh. Prefer Incremental modes when they are supported and especially for large tables.\nIf you see performance issues, please reach via email to ',
                (0, s.jsx)(t.a, {
                  href: 'mailto:support@convex.dev',
                  children: 'Convex support',
                }),
                ' or on ',
                (0, s.jsx)(t.a, {
                  href: 'https://convex.dev/community',
                  children: 'Discord',
                }),
                '.',
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
            (0, s.jsxs)(t.ul, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'Convex Account'}),
                '\n',
                (0, s.jsx)(t.li, {children: 'Convex Project'}),
                '\n',
                (0, s.jsx)(t.li, {children: 'Deploy key'}),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Hero Pixel integration is available to all Convex developers.',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'On the ',
                (0, s.jsx)(t.a, {
                  href: 'https://dashboard.convex.dev/',
                  children: 'Convex dashboard',
                }),
                ', navigate to the project and deployment that you want to sync.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {children: 'Navigate to the Settings tab.'}),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Copy the "Deployment URL" from the settings page to the ',
                    (0, s.jsx)(t.code, {children: 'deployment_url'}),
                    ' field in Hero Pixel.',
                  ],
                }),
                '\n',
                (0, s.jsx)(t.li, {children: 'Click "Generate a deploy key".'}),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Copy the generated deploy key into the ',
                    (0, s.jsx)(t.code, {children: 'access_key'}),
                    ' field in Hero Pixel.',
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
      n.d(t, {R: () => o, x: () => l});
      var s = n(3696);
      const r = {},
        i = s.createContext(r);
      function o(e) {
        const t = s.useContext(i);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : o(e.components)),
          s.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

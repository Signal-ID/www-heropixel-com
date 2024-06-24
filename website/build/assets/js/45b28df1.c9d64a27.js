/*! For license information please see 45b28df1.c9d64a27.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6125],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, n) {
        var s,
          r = {},
          c = null,
          a = null;
        for (s in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          o.call(t, s) && !d.hasOwnProperty(s) && (r[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === r[s] && (r[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: c,
          ref: a,
          props: r,
          _owner: l.current,
        };
      }
      (t.Fragment = r), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    8481: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var s = n(2540),
        i = n(3023);
      const r = {id: 'sftp-json', title: 'SFTP JSON', description: 'sftp-json'},
        o = 'SFTP JSON',
        l = {
          id: 'destinations/sftp-json',
          title: 'SFTP JSON',
          description: 'sftp-json',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/sftp-json.md',
          sourceDirName: 'destinations',
          slug: '/destinations/sftp-json',
          permalink: '/docs/destinations/sftp-json',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/sftp-json.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'sftp-json',
            title: 'SFTP JSON',
            description: 'sftp-json',
          },
          sidebar: 'integrations',
          previous: {title: 'S3 Glue', permalink: '/docs/destinations/s3-glue'},
          next: {
            title: 'Smartlead.ai',
            permalink: '/docs/destinations/smartlead',
          },
        },
        d = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Sync Overview', id: 'sync-overview', level: 3},
          {value: 'Output schema', id: 'output-schema', level: 4},
          {value: 'Features', id: 'features', level: 4},
          {
            value: 'Performance considerations',
            id: 'performance-considerations',
            level: 4,
          },
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Example:', id: 'example', level: 3},
        ];
      function a(e) {
        const t = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          p: 'p',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {id: 'sftp-json', children: 'SFTP JSON'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This destination writes data to a directory on an SFTP server.',
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'sync-overview', children: 'Sync Overview'}),
            '\n',
            (0, s.jsx)(t.h4, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'Each stream will be output into its own file.\nEach file will contain a collection of ',
                (0, s.jsx)(t.code, {children: 'json'}),
                ' objects which correspond directly with the data supplied by the source.',
              ],
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
                        children: 'Supported',
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
                          children: 'Namespaces',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.h4, {
              id: 'performance-considerations',
              children: 'Performance considerations',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'This integration will be constrained by the connection speed to the SFTP server and speed at which that server accepts writes.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'The ',
                (0, s.jsx)(t.code, {children: 'destination_path'}),
                ' can refer to any path that the associated account has write permissions to.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'The ',
                (0, s.jsx)(t.code, {children: 'filename'}),
                ' ',
                (0, s.jsx)(t.strong, {children: 'should not'}),
                ' have an extension in the configuration, as ',
                (0, s.jsx)(t.code, {children: '.jsonl'}),
                ' will be added on by the connector.',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {id: 'example', children: 'Example:'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'If ',
                (0, s.jsx)(t.code, {children: 'destination_path'}),
                ' is set to ',
                (0, s.jsx)(t.code, {children: '/myfolder/files'}),
                ' and ',
                (0, s.jsx)(t.code, {children: 'filename'}),
                ' is set to ',
                (0, s.jsx)(t.code, {children: 'mydata'}),
                ', the resulting file will be ',
                (0, s.jsx)(t.code, {children: '/myfolder/files/mydata.jsonl'}),
                '.',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'These files can then be accessed by creating an SFTP connection to the server and navigating to the ',
                (0, s.jsx)(t.code, {children: 'destination_path'}),
                '.',
              ],
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
      n.d(t, {R: () => o, x: () => l});
      var s = n(3696);
      const i = {},
        r = s.createContext(i);
      function o(e) {
        const t = s.useContext(r);
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
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          s.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

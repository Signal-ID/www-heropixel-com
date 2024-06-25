/*! For license information please see 4ea59355.7b8d0724.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5598],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        o = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        r =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, t, n) {
        var i,
          l = {},
          h = null,
          c = null;
        for (i in (void 0 !== n && (h = '' + n),
        void 0 !== t.key && (h = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, i) && !d.hasOwnProperty(i) && (l[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === l[i] && (l[i] = t[i]);
        return {
          $$typeof: o,
          type: e,
          key: h,
          ref: c,
          props: l,
          _owner: r.current,
        };
      }
      (t.Fragment = l), (t.jsx = h), (t.jsxs = h);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9371: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => l,
          metadata: () => r,
          toc: () => h,
        });
      var i = n(2540),
        o = n(3023);
      const l = {
          id: 'gohighlevel',
          title: 'GoHighLevel',
          description: 'A destination connector for GoHighLevel',
        },
        s = 'GoHighLevel',
        r = {
          id: 'destinations/gohighlevel',
          title: 'GoHighLevel',
          description: 'A destination connector for GoHighLevel',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/gohighlevel.md',
          sourceDirName: 'destinations',
          slug: '/destinations/gohighlevel',
          permalink: '/docs/destinations/gohighlevel',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/gohighlevel.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'gohighlevel',
            title: 'GoHighLevel',
            description: 'A destination connector for GoHighLevel',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Google Cloud Storage',
            permalink: '/docs/destinations/gcs',
          },
          next: {
            title: 'Google Sheets',
            permalink: '/docs/destinations/google-sheets',
          },
        },
        d = {},
        h = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Supported Sync Modes', id: 'supported-sync-modes', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 2},
          {
            value: 'Step 1: Set up the GoHighLevel Destination in Hero Pixel',
            id: 'step-1-set-up-the-gohighlevel-destination-in-hero-pixel',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
        ];
      function c(e) {
        const t = {
          a: 'a',
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {id: 'gohighlevel', children: 'GoHighLevel'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The GoHighLevel destination connector allows you to sync data to GoHighLevel, a comprehensive marketing and CRM platform. This connector supports full refresh, incremental append, and incremental dedup sync modes, providing flexibility for various data integration needs.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The GoHighLevel destination connector supports the following sync modes:',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, i.jsx)(t.td, {
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
            (0, i.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Each synced record will correspond to a contact in GoHighLevel, with the data being written based on the provided authentication method and location.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'To use the GoHighLevel destination connector, you need:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {children: 'A GoHighLevel account'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'Authentication credentials'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-1-set-up-the-gohighlevel-destination-in-hero-pixel',
              children:
                'Step 1: Set up the GoHighLevel Destination in Hero Pixel',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, i.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, i.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, i.jsx)(t.strong, {children: 'GoHighLevel'}),
                    ' from the ',
                    (0, i.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Click the oAuth button to log into GHL',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    "The system will redirect you to GHL so you can log into your account and choose the space you'd like to connect.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, i.jsx)(t.a, {
                  href: 'https://developers.gohighlevel.com',
                  children: 'GoHighLevel API Documentation',
                }),
                ' or contact GoHighLevel support.',
              ],
            }),
          ],
        });
      }
      function a(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => r});
      var i = n(3696);
      const o = {},
        l = i.createContext(o);
      function s(e) {
        const t = i.useContext(l);
        return i.useMemo(
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
            : s(e.components)),
          i.createElement(l.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 3d7eefac.41670539.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5223],
  {
    2192: (e, t, r) => {
      var i = r(3696),
        n = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, r) {
        var i,
          o = {},
          c = null,
          a = null;
        for (i in (void 0 !== r && (c = '' + r),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          s.call(t, i) && !l.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: a,
          props: o,
          _owner: d.current,
        };
      }
      (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    8422: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => c,
        });
      var i = r(2540),
        n = r(3023);
      const o = {
          id: 'political-party-property',
          title: 'Political Party Property',
          description: 'Guide to using the political party property',
        },
        s = 'Political Party Property',
        d = {
          id: 'destinations/properties/political-party-property',
          title: 'Political Party Property',
          description: 'Guide to using the political party property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-political-party-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/political-party-property',
          permalink: '/docs/destinations/properties/political-party-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'political-party-property',
            title: 'Political Party Property',
            description: 'Guide to using the political party property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Line Type Property',
            permalink: '/docs/destinations/properties/line-type-property',
          },
          next: {
            title: 'Premium Income HH Property',
            permalink:
              '/docs/destinations/properties/premium-income-hh-property',
          },
        },
        l = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function a(e) {
        const t = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          p: 'p',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'political-party-property',
              children: 'Political Party Property',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The ',
                (0, i.jsx)(t.code, {children: 'Political_Party'}),
                ' property',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, i.jsx)(t.code, {children: 'Political_Party'}),
                ' property:',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {children: 'Value'}),
                      (0, i.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {
                            children: 'Conservative',
                          }),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Visitor identifies with the Conservative party',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'Democrat'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Visitor identifies with the Democrat party',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {
                            children: 'Independence',
                          }),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Visitor identifies with the Independence party',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {
                            children: 'Independent',
                          }),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Visitor identifies as an Independent',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'Liberal'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Visitor identifies with the Liberal party',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {
                            children: 'Libertarian',
                          }),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Visitor identifies with the Libertarian party',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {
                            children: 'Republican',
                          }),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Visitor identifies with the Republican party',
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
      function p(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => d});
      var i = r(3696);
      const n = {},
        o = i.createContext(n);
      function s(e) {
        const t = i.useContext(o);
        return i.useMemo(
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
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          i.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
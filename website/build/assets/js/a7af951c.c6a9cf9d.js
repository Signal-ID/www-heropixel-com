/*! For license information please see a7af951c.c6a9cf9d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4580],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        o =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          d = {},
          l = null,
          a = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          s.call(t, n) && !c.hasOwnProperty(n) && (d[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === d[n] && (d[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: a,
          props: d,
          _owner: o.current,
        };
      }
      (t.Fragment = d), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    9633: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => d,
          metadata: () => o,
          toc: () => l,
        });
      var n = r(2540),
        i = r(3023);
      const d = {
          id: 'credit-range-property',
          title: 'Credit Range Property',
          description: 'Guide to using the credit range property',
        },
        s = 'Credit Range Property',
        o = {
          id: 'destinations/properties/credit-range-property',
          title: 'Credit Range Property',
          description: 'Guide to using the credit range property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-credit-range-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/credit-range-property',
          permalink: '/docs/destinations/properties/credit-range-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'credit-range-property',
            title: 'Credit Range Property',
            description: 'Guide to using the credit range property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Ethnicity Detail Property',
            permalink:
              '/docs/destinations/properties/ethnicity-detail-property',
          },
          next: {
            title: 'Credit Midpoints Property',
            permalink: '/docs/destinations/properties/credit-midpts-property',
          },
        },
        c = {},
        l = [
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'credit-range-property',
              children: 'Credit Range Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'credit_range'}),
                ' property',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, n.jsx)(t.code, {children: 'credit_range'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {children: 'Value'}),
                      (0, n.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'A. 800+'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score of 800 and above',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'B. 750-799',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score between 750-799',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'C. 700-749',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score between 700-749',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'D. 650-699',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score between 650-699',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'E. 600-649',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score between 600-649',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'F. 550-599',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score between 550-599',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'G. 500-549',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score between 500-549',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'H. 499 & Less',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Credit score of 499 and below',
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => o});
      var n = r(3696);
      const i = {},
        d = n.createContext(i);
      function s(e) {
        const t = n.useContext(d);
        return n.useMemo(
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
            : s(e.components)),
          n.createElement(d.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

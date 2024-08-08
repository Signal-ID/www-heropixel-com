/*! For license information please see baa71f6e.833716e7.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1262],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var r,
          s = {},
          d = null,
          p = null;
        for (r in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          i.call(t, r) && !c.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: p,
          props: s,
          _owner: l.current,
        };
      }
      (t.Fragment = s), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    2479: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => d,
        });
      var r = n(2540),
        o = n(3023);
      const s = {
          id: 'income-levels-property',
          title: 'Income Levels Property',
          description: 'Guide to using the income levels property',
        },
        i = 'Income Levels Property',
        l = {
          id: 'destinations/properties/income-levels-property',
          title: 'Income Levels Property',
          description: 'Guide to using the income levels property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-income-levels-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/income-levels-property',
          permalink: '/docs/destinations/properties/income-levels-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'income-levels-property',
            title: 'Income Levels Property',
            description: 'Guide to using the income levels property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Income HH Property',
            permalink: '/docs/destinations/properties/income-hh-property',
          },
          next: {
            title: 'Income Midpoints HH Property',
            permalink:
              '/docs/destinations/properties/income-midpts-hh-property',
          },
        },
        c = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function p(e) {
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.h1, {
              id: 'income-levels-property',
              children: 'Income Levels Property',
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The ',
                (0, r.jsx)(t.code, {children: 'income_levels'}),
                ' property',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(t.code, {children: 'income_levels'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(t.table, {
              children: [
                (0, r.jsx)(t.thead, {
                  children: (0, r.jsxs)(t.tr, {
                    children: [
                      (0, r.jsx)(t.th, {children: 'Value'}),
                      (0, r.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(t.tbody, {
                  children: [
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: '100K_150'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household income between $100,000-$150,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: '30K_50K'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $30,000-$50,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: '50K_74K'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $50,000-$74,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: '75K_99K'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $75,000-$99,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: 'GT_150K'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income greater than $150,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: 'LT_30K'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income less than $30,000',
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
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => l});
      var r = n(3696);
      const o = {},
        s = r.createContext(o);
      function i(e) {
        const t = r.useContext(s);
        return r.useMemo(
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
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

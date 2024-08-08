/*! For license information please see 05c1fb4e.4e29d68c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8615],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        d =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        h = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          s = {},
          l = null,
          c = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          i.call(t, n) && !h.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: s,
          _owner: d.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    401: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => h,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => l,
        });
      var n = r(2540),
        o = r(3023);
      const s = {
          id: 'net-worth-hh-property',
          title: 'Net Worth HH Property',
          description: 'Guide to using the household net worth property',
        },
        i = 'Net Worth HH Property',
        d = {
          id: 'destinations/properties/net-worth-hh-property',
          title: 'Net Worth HH Property',
          description: 'Guide to using the household net worth property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-net-worth-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/net-worth-hh-property',
          permalink: '/docs/destinations/properties/net-worth-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'net-worth-hh-property',
            title: 'Net Worth HH Property',
            description: 'Guide to using the household net worth property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Mortgage Refi Type Property',
            permalink:
              '/docs/destinations/properties/mortgage-refi-type-property',
          },
          next: {
            title: 'Net Worth Midpoints HH Property',
            permalink:
              '/docs/destinations/properties/net-worth-midpt-hh-property',
          },
        },
        h = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function c(e) {
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
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'net-worth-hh-property',
              children: 'Net Worth HH Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'Net_Worth_HH'}),
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
                (0, n.jsx)(t.code, {children: 'Net_Worth_HH'}),
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
                          children: (0, n.jsx)(t.code, {
                            children: 'B. Less than $1',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Household net worth less than $1',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'C. $1 - $4,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Household net worth between $1 - $4,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'D. $5,000 - $9,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Household net worth between $5,000 - $9,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'E. $10,000 - $24,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Household net worth between $10,000 - $24,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'F. $25,000 - $49,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Household net worth between $25,000 - $49,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'G. $50,000 - $99,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Household net worth between $50,000 - $99,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'H. $100,000 - $249,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Household net worth between $100,000 - $249,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'I. $250,000 - $499,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Household net worth between $250,000 - $499,999',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'J. Greater than $499,999',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Household net worth greater than $499,999',
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
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => i, x: () => d});
      var n = r(3696);
      const o = {},
        s = n.createContext(o);
      function i(e) {
        const t = n.useContext(s);
        return n.useMemo(
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
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          n.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

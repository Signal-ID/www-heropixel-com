/*! For license information please see bf3e4a7f.951d617f.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7881],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var r,
          i = {},
          l = null,
          h = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (h = t.ref),
        t))
          s.call(t, r) && !c.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: h,
          props: i,
          _owner: d.current,
        };
      }
      (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9002: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => l,
        });
      var r = n(2540),
        o = n(3023);
      const i = {
          id: 'income-hh-property',
          title: 'Income HH Property',
          description: 'Guide to using the household income property',
        },
        s = 'Income HH Property',
        d = {
          id: 'destinations/properties/income-hh-property',
          title: 'Income HH Property',
          description: 'Guide to using the household income property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-income-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/income-hh-property',
          permalink: '/docs/destinations/properties/income-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'income-hh-property',
            title: 'Income HH Property',
            description: 'Guide to using the household income property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Home Owner Ordinal Property',
            permalink:
              '/docs/destinations/properties/home-owner-ordinal-property',
          },
          next: {
            title: 'Income Levels Property',
            permalink: '/docs/destinations/properties/income-levels-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function h(e) {
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
              id: 'income-hh-property',
              children: 'Income HH Property',
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The ',
                (0, r.jsx)(t.code, {children: 'income_hh'}),
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
                (0, r.jsx)(t.code, {children: 'income_hh'}),
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
                          children: (0, r.jsx)(t.code, {
                            children: 'A. Under $10,000',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income under $10,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'B. $10,000-$19,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $10,000-$19,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'C. $20,000-$29,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $20,000-$29,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'D. $30,000-$39,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $30,000-$39,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'E. $40,000-$49,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $40,000-$49,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'F. $50,000-$59,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $50,000-$59,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'G. $60,000-$74,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $60,000-$74,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'H. $75,000-$99,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income between $75,000-$99,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'K. $100,000-$149,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household income between $100,000-$149,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'L. $150,000-$174,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household income between $150,000-$174,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'M. $175,000-$199,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household income between $175,000-$199,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'N. $200,000-$249,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household income between $200,000-$249,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'O. $250K +',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household income of $250,000 and above',
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
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => d});
      var r = n(3696);
      const o = {},
        i = r.createContext(o);
      function s(e) {
        const t = r.useContext(i);
        return r.useMemo(
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
            : s(e.components)),
          r.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
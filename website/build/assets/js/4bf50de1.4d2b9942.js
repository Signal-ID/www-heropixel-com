/*! For license information please see 4bf50de1.4d2b9942.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5324],
  {
    2192: (e, n, d) => {
      var r = d(3696),
        t = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, n, d) {
        var r,
          i = {},
          l = null,
          h = null;
        for (r in (void 0 !== d && (l = '' + d),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          s.call(n, r) && !c.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: l,
          ref: h,
          props: i,
          _owner: o.current,
        };
      }
      (n.Fragment = i), (n.jsx = l), (n.jsxs = l);
    },
    2540: (e, n, d) => {
      e.exports = d(2192);
    },
    3666: (e, n, d) => {
      d.r(n),
        d.d(n, {
          assets: () => c,
          contentTitle: () => s,
          default: () => x,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => l,
        });
      var r = d(2540),
        t = d(3023);
      const i = {
          id: 'premium-income-hh-property',
          title: 'Premium Income HH Property',
          description: 'Guide to using the premium income HH property',
        },
        s = 'Premium Income HH Property',
        o = {
          id: 'destinations/properties/premium-income-hh-property',
          title: 'Premium Income HH Property',
          description: 'Guide to using the premium income HH property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-premium-income-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/premium-income-hh-property',
          permalink: '/docs/destinations/properties/premium-income-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'premium-income-hh-property',
            title: 'Premium Income HH Property',
            description: 'Guide to using the premium income HH property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Political Party Property',
            permalink: '/docs/destinations/properties/political-party-property',
          },
          next: {
            title: 'Premium Income Midpoint HH Property',
            permalink:
              '/docs/destinations/properties/premium-income-midpt-hh-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function h(e) {
        const n = {
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
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'premium-income-hh-property',
              children: 'Premium Income HH Property',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'Premium_Income_HH'}),
                ' property',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(n.code, {children: 'Premium_Income_HH'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Value'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'AB. <$15K'}),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Household income less than $15,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'AC. $15K-$20K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $15,000 and $20,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'AD. $20K-$30K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $20,000 and $30,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'B. $30K-$40K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $30,000 and $40,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'C. $40K-$50K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $40,000 and $50,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'D. $50K-$60K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $50,000 and $60,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'E. $60K-$70K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $60,000 and $70,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'F. $70K-$80K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $70,000 and $80,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'G. $80K-$90K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $80,000 and $90,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'H. $90K-$100K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $90,000 and $100,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'I. $100K-$110K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $100,000 and $110,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'J. $110K-$120K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $110,000 and $120,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'K. $120K-$130K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $120,000 and $130,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'L. $130K-$140K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $130,000 and $140,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'M. $140K-$150K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $140,000 and $150,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'N. $150K-$175K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $150,000 and $175,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'O. $175K-$200K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $175,000 and $200,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'P. $200K-$225K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $200,000 and $225,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Q. $225K-$250K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $225,000 and $250,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'R. $250K-$275K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $250,000 and $275,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'S. $275K-$300K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $275,000 and $300,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'T. $300K-$400K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $300,000 and $400,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'U. $400K-$500K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $400,000 and $500,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'V. $500K-$600K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $500,000 and $600,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'W. $600K-$750K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $600,000 and $750,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'X. $750K-$1000K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $750,000 and $1,000,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Y. $1000K-$2000K',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Household income between $1,000,000 and $2,000,000',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Z. $2000K+',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Household income greater than $2,000,000',
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
      function x(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, d) => {
      d.d(n, {R: () => s, x: () => o});
      var r = d(3696);
      const t = {},
        i = r.createContext(t);
      function s(e) {
        const n = r.useContext(i);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : s(e.components)),
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 76f49ac4.fdc4285a.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4021],
  {
    2192: (e, t, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var o,
          i = {},
          l = null,
          p = null;
        for (o in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          s.call(t, o) && !d.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: p,
          props: i,
          _owner: a.current,
        };
      }
      (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    4940: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => l,
        });
      var o = r(2540),
        n = r(3023);
      const i = {
          id: 'mortgage-loan-type-property',
          title: 'Mortgage Loan Type Property',
          description: 'Guide to using the mortgage loan type property',
        },
        s = 'Mortgage Loan Type Property',
        a = {
          id: 'destinations/properties/mortgage-loan-type-property',
          title: 'Mortgage Loan Type Property',
          description: 'Guide to using the mortgage loan type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-mortgage-loan-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/mortgage-loan-type-property',
          permalink:
            '/docs/destinations/properties/mortgage-loan-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'mortgage-loan-type-property',
            title: 'Mortgage Loan Type Property',
            description: 'Guide to using the mortgage loan type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Marital Status Property',
            permalink: '/docs/destinations/properties/marital-status-property',
          },
          next: {
            title: 'Mortgage Refi Type Property',
            permalink:
              '/docs/destinations/properties/mortgage-refi-type-property',
          },
        },
        d = {},
        l = [
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
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'mortgage-loan-type-property',
              children: 'Mortgage Loan Type Property',
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The ',
                (0, o.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
                ' property',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, o.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
                ' property:',
              ],
            }),
            '\n',
            (0, o.jsxs)(t.table, {
              children: [
                (0, o.jsx)(t.thead, {
                  children: (0, o.jsxs)(t.tr, {
                    children: [
                      (0, o.jsx)(t.th, {children: 'Value'}),
                      (0, o.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, o.jsxs)(t.tbody, {
                  children: [
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Community Development Authority',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children:
                            'Community Development Authority loan holders',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Conventional',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Conventional mortgage loan holders',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'FHA'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children:
                            'Federal Housing Administration (FHA) loan holders',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Private Party Lender',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Private party lender mortgage holders',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Small Business Administration',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children:
                            'Small Business Administration (SBA) loan holders',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'VA Loan'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Veterans Affairs (VA) loan holders',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Wrap-Around Mortgage',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Wrap-around mortgage holders',
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
      function c(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => a});
      var o = r(3696);
      const n = {},
        i = o.createContext(n);
      function s(e) {
        const t = o.useContext(i);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          o.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
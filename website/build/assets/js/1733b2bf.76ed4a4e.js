/*! For license information please see 1733b2bf.76ed4a4e.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7609],
  {
    2192: (e, t, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        p =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, r) {
        var o,
          i = {},
          d = null,
          c = null;
        for (o in (void 0 !== r && (d = '' + r),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, o) && !a.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: p.current,
        };
      }
      (t.Fragment = i), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    7062: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => a,
          contentTitle: () => s,
          default: () => l,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => d,
        });
      var o = r(2540),
        n = r(3023);
      const i = {
          id: 'mortgage-refi-type-property',
          title: 'Mortgage Refi Type Property',
          description: 'Guide to using the mortgage refinance type property',
        },
        s = 'Mortgage Refi Type Property',
        p = {
          id: 'destinations/properties/mortgage-refi-type-property',
          title: 'Mortgage Refi Type Property',
          description: 'Guide to using the mortgage refinance type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-mortgage-refi-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/mortgage-refi-type-property',
          permalink:
            '/docs/destinations/properties/mortgage-refi-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'mortgage-refi-type-property',
            title: 'Mortgage Refi Type Property',
            description: 'Guide to using the mortgage refinance type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Mortgage Loan Type Property',
            permalink:
              '/docs/destinations/properties/mortgage-loan-type-property',
          },
          next: {
            title: 'Net Worth HH Property',
            permalink: '/docs/destinations/properties/net-worth-hh-property',
          },
        },
        a = {},
        d = [
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
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'mortgage-refi-type-property',
              children: 'Mortgage Refi Type Property',
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The ',
                (0, o.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
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
                (0, o.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
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
                            children: 'Adjustable',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Adjustable-rate mortgage refinance',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'Fixed'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Fixed-rate mortgage refinance',
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
      function l(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => p});
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
      function p(e) {
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
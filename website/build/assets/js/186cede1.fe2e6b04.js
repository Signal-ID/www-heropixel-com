/*! For license information please see 186cede1.fe2e6b04.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6360],
  {
    2192: (t, e, r) => {
      var s = r(3696),
        i = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        a =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(t, e, r) {
        var s,
          n = {},
          d = null,
          p = null;
        for (s in (void 0 !== r && (d = '' + r),
        void 0 !== e.key && (d = '' + e.key),
        void 0 !== e.ref && (p = e.ref),
        e))
          o.call(e, s) && !l.hasOwnProperty(s) && (n[s] = e[s]);
        if (t && t.defaultProps)
          for (s in (e = t.defaultProps)) void 0 === n[s] && (n[s] = e[s]);
        return {
          $$typeof: i,
          type: t,
          key: d,
          ref: p,
          props: n,
          _owner: a.current,
        };
      }
      (e.Fragment = n), (e.jsx = d), (e.jsxs = d);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    3677: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => l,
          contentTitle: () => o,
          default: () => c,
          frontMatter: () => n,
          metadata: () => a,
          toc: () => d,
        });
      var s = r(2540),
        i = r(3023);
      const n = {
          id: 'marital-status-property',
          title: 'Marital Status Property',
          description: 'Guide to using the marital status property',
        },
        o = 'Marital Status Property',
        a = {
          id: 'destinations/properties/marital-status-property',
          title: 'Marital Status Property',
          description: 'Guide to using the marital status property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-marital-status-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/marital-status-property',
          permalink: '/docs/destinations/properties/marital-status-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'marital-status-property',
            title: 'Marital Status Property',
            description: 'Guide to using the marital status property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Income Midpoints HH Property',
            permalink:
              '/docs/destinations/properties/income-midpts-hh-property',
          },
          next: {
            title: 'Mortgage Loan Type Property',
            permalink:
              '/docs/destinations/properties/mortgage-loan-type-property',
          },
        },
        l = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function p(t) {
        const e = {
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
          ...t.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(e.h1, {
              id: 'marital-status-property',
              children: 'Marital Status Property',
            }),
            '\n',
            (0, s.jsx)(e.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, s.jsxs)(e.p, {
              children: [
                'The ',
                (0, s.jsx)(e.code, {children: 'Marital_Status'}),
                ' property',
              ],
            }),
            '\n',
            (0, s.jsx)(e.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, s.jsxs)(e.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, s.jsx)(e.code, {children: 'Marital_Status'}),
                ' property:',
              ],
            }),
            '\n',
            (0, s.jsxs)(e.table, {
              children: [
                (0, s.jsx)(e.thead, {
                  children: (0, s.jsxs)(e.tr, {
                    children: [
                      (0, s.jsx)(e.th, {children: 'Value'}),
                      (0, s.jsx)(e.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(e.tbody, {
                  children: [
                    (0, s.jsxs)(e.tr, {
                      children: [
                        (0, s.jsx)(e.td, {
                          children: (0, s.jsx)(e.code, {children: 'Married'}),
                        }),
                        (0, s.jsx)(e.td, {children: 'Visitor is married'}),
                      ],
                    }),
                    (0, s.jsxs)(e.tr, {
                      children: [
                        (0, s.jsx)(e.td, {
                          children: (0, s.jsx)(e.code, {children: 'Single'}),
                        }),
                        (0, s.jsx)(e.td, {children: 'Visitor is single'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function c(t = {}) {
        const {wrapper: e} = {...(0, i.R)(), ...t.components};
        return e
          ? (0, s.jsx)(e, {...t, children: (0, s.jsx)(p, {...t})})
          : p(t);
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => o, x: () => a});
      var s = r(3696);
      const i = {},
        n = s.createContext(i);
      function o(t) {
        const e = s.useContext(n);
        return s.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function a(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(i)
              : t.components || i
            : o(t.components)),
          s.createElement(n.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

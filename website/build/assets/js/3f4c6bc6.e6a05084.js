/*! For license information please see 3f4c6bc6.e6a05084.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2916],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, r) {
        var n,
          o = {},
          d = null,
          a = null;
        for (n in (void 0 !== r && (d = '' + r),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          s.call(t, n) && !p.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: o,
          _owner: l.current,
        };
      }
      (t.Fragment = o), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    2637: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => d,
        });
      var n = r(2540),
        i = r(3023);
      const o = {
          id: 'dwelling-type-property',
          title: 'Dwelling Type Property',
          description: 'Guide to using the dwelling type property',
        },
        s = 'Dwelling Type Property',
        l = {
          id: 'destinations/properties/dwelling-type-property',
          title: 'Dwelling Type Property',
          description: 'Guide to using the dwelling type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-dwelling-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/dwelling-type-property',
          permalink: '/docs/destinations/properties/dwelling-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'dwelling-type-property',
            title: 'Dwelling Type Property',
            description: 'Guide to using the dwelling type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Address Type Property',
            permalink: '/docs/destinations/properties/address-type-property',
          },
          next: {
            title: 'Home Heat Type Property',
            permalink: '/docs/destinations/properties/home-heat-type-property',
          },
        },
        p = {},
        d = [
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
              id: 'dwelling-type-property',
              children: 'Dwelling Type Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'dwelling_type'}),
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
                (0, n.jsx)(t.code, {children: 'dwelling_type'}),
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
                            children: 'Single Family',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Visitor resides in a single-family home',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'Multi Family Dwelling/Apartment',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Visitor resides in a multi-family dwelling or apartment',
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => l});
      var n = r(3696);
      const i = {},
        o = n.createContext(i);
      function s(e) {
        const t = n.useContext(o);
        return n.useMemo(
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
              ? e.components(i)
              : e.components || i
            : s(e.components)),
          n.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

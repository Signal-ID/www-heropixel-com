/*! For license information please see 5a99bb22.f0f76ec7.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2527],
  {
    2192: (e, t, r) => {
      var s = r(3696),
        n = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        i =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, r) {
        var s,
          d = {},
          a = null,
          l = null;
        for (s in (void 0 !== r && (a = '' + r),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          o.call(t, s) && !p.hasOwnProperty(s) && (d[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === d[s] && (d[s] = t[s]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: l,
          props: d,
          _owner: i.current,
        };
      }
      (t.Fragment = d), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    9015: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => o,
          default: () => c,
          frontMatter: () => d,
          metadata: () => i,
          toc: () => a,
        });
      var s = r(2540),
        n = r(3023);
      const d = {
          id: 'address-type-property',
          title: 'Address Type Property',
          description: 'Guide to using the address type property',
        },
        o = 'Address Type Property',
        i = {
          id: 'destinations/properties/address-type-property',
          title: 'Address Type Property',
          description: 'Guide to using the address type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-address-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/address-type-property',
          permalink: '/docs/destinations/properties/address-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'address-type-property',
            title: 'Address Type Property',
            description: 'Guide to using the address type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Home Owner Property',
            permalink: '/docs/destinations/properties/home-owner-property',
          },
          next: {
            title: 'Dwelling Type Property',
            permalink: '/docs/destinations/properties/dwelling-type-property',
          },
        },
        p = {},
        a = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function l(e) {
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
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {
              id: 'address-type-property',
              children: 'Address Type Property',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'The ',
                (0, s.jsx)(t.code, {children: 'address_type'}),
                ' property',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, s.jsx)(t.code, {children: 'address_type'}),
                ' property:',
              ],
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {children: 'Value'}),
                      (0, s.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'Street'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "Visitor's address is a street address",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'Highway'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "Visitor's address is along a highway",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'PO Box'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "Visitor's address is a PO Box",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {
                            children: 'Rural Route',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          children:
                            "Visitor's address is a rural route address",
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
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(l, {...e})})
          : l(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => o, x: () => i});
      var s = r(3696);
      const n = {},
        d = s.createContext(n);
      function o(e) {
        const t = s.useContext(d);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function i(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : o(e.components)),
          s.createElement(d.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 76eba63b.86fc4c0c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1287],
  {
    2192: (e, t, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, r) {
        var o,
          i = {},
          c = null,
          l = null;
        for (o in (void 0 !== r && (c = '' + r),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          s.call(t, o) && !p.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: i,
          _owner: d.current,
        };
      }
      (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    561: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => c,
        });
      var o = r(2540),
        n = r(3023);
      const i = {
          id: 'home-owner-property',
          title: 'Home Owner Property',
          description: 'Guide to using the home owner property',
        },
        s = 'Home Owner Property',
        d = {
          id: 'destinations/properties/home-owner-property',
          title: 'Home Owner Property',
          description: 'Guide to using the home owner property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-home-owner-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/home-owner-property',
          permalink: '/docs/destinations/properties/home-owner-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'home-owner-property',
            title: 'Home Owner Property',
            description: 'Guide to using the home owner property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Credit Midpoints Property',
            permalink: '/docs/destinations/properties/credit-midpts-property',
          },
          next: {
            title: 'Address Type Property',
            permalink: '/docs/destinations/properties/address-type-property',
          },
        },
        p = {},
        c = [
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
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'home-owner-property',
              children: 'Home Owner Property',
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The ',
                (0, o.jsx)(t.code, {children: 'home_owner'}),
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
                (0, o.jsx)(t.code, {children: 'home_owner'}),
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
                            children: 'Home Owner',
                          }),
                        }),
                        (0, o.jsx)(t.td, {children: 'Visitor is a home owner'}),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'Renter'}),
                        }),
                        (0, o.jsx)(t.td, {children: 'Visitor is a renter'}),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Probable Home Owner',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor is a probable home owner',
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
      function a(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(l, {...e})})
          : l(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => d});
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
      function d(e) {
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
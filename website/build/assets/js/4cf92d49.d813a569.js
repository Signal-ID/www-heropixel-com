/*! For license information please see 4cf92d49.d813a569.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4432],
  {
    2192: (e, t, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        p =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, r) {
        var o,
          i = {},
          a = null,
          l = null;
        for (o in (void 0 !== r && (a = '' + r),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          s.call(t, o) && !d.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: l,
          props: i,
          _owner: p.current,
        };
      }
      (t.Fragment = i), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    9715: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => i,
          metadata: () => p,
          toc: () => a,
        });
      var o = r(2540),
        n = r(3023);
      const i = {
          id: 'home-heat-type-property',
          title: 'Home Heat Type Property',
          description: 'Guide to using the home heat type property',
        },
        s = 'Home Heat Type Property',
        p = {
          id: 'destinations/properties/home-heat-type-property',
          title: 'Home Heat Type Property',
          description: 'Guide to using the home heat type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-home-heat-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/home-heat-type-property',
          permalink: '/docs/destinations/properties/home-heat-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'home-heat-type-property',
            title: 'Home Heat Type Property',
            description: 'Guide to using the home heat type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Dwelling Type Property',
            permalink: '/docs/destinations/properties/dwelling-type-property',
          },
          next: {
            title: 'Home Owner Ordinal Property',
            permalink:
              '/docs/destinations/properties/home-owner-ordinal-property',
          },
        },
        d = {},
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
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'home-heat-type-property',
              children: 'Home Heat Type Property',
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The ',
                (0, o.jsx)(t.code, {children: 'home_heat_type'}),
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
                (0, o.jsx)(t.code, {children: 'home_heat_type'}),
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
                          children: (0, o.jsx)(t.code, {children: 'Gas'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children: "Visitor's home uses gas heating",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'Electric'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children: "Visitor's home uses electric heating",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'Oil'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children: "Visitor's home uses oil heating",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {children: 'Propane'}),
                        }),
                        (0, o.jsx)(t.td, {
                          children: "Visitor's home uses propane heating",
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
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(l, {...e})})
          : l(e);
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

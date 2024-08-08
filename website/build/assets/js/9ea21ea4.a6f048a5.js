/*! For license information please see 9ea21ea4.a6f048a5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9625],
  {
    2192: (e, r, t) => {
      var o = t(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, r, t) {
        var o,
          i = {},
          a = null,
          c = null;
        for (o in (void 0 !== t && (a = '' + t),
        void 0 !== r.key && (a = '' + r.key),
        void 0 !== r.ref && (c = r.ref),
        r))
          s.call(r, o) && !l.hasOwnProperty(o) && (i[o] = r[o]);
        if (e && e.defaultProps)
          for (o in (r = e.defaultProps)) void 0 === i[o] && (i[o] = r[o]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: c,
          props: i,
          _owner: d.current,
        };
      }
      (r.Fragment = i), (r.jsx = a), (r.jsxs = a);
    },
    2540: (e, r, t) => {
      e.exports = t(2192);
    },
    1577: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => l,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => a,
        });
      var o = t(2540),
        n = t(3023);
      const i = {
          id: 'home-owner-ordinal-property',
          title: 'Home Owner Ordinal Property',
          description: 'Guide to using the home owner ordinal property',
        },
        s = 'Home Owner Ordinal Property',
        d = {
          id: 'destinations/properties/home-owner-ordinal-property',
          title: 'Home Owner Ordinal Property',
          description: 'Guide to using the home owner ordinal property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-home-owner-ordinal-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/home-owner-ordinal-property',
          permalink:
            '/docs/destinations/properties/home-owner-ordinal-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'home-owner-ordinal-property',
            title: 'Home Owner Ordinal Property',
            description: 'Guide to using the home owner ordinal property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Home Heat Type Property',
            permalink: '/docs/destinations/properties/home-heat-type-property',
          },
          next: {
            title: 'Income HH Property',
            permalink: '/docs/destinations/properties/income-hh-property',
          },
        },
        l = {},
        a = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function c(e) {
        const r = {
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
            (0, o.jsx)(r.h1, {
              id: 'home-owner-ordinal-property',
              children: 'Home Owner Ordinal Property',
            }),
            '\n',
            (0, o.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(r.p, {
              children: [
                'The ',
                (0, o.jsx)(r.code, {children: 'home_owner_ordinal'}),
                ' property',
              ],
            }),
            '\n',
            (0, o.jsx)(r.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, o.jsxs)(r.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, o.jsx)(r.code, {children: 'home_owner_ordinal'}),
                ' property:',
              ],
            }),
            '\n',
            (0, o.jsxs)(r.table, {
              children: [
                (0, o.jsx)(r.thead, {
                  children: (0, o.jsxs)(r.tr, {
                    children: [
                      (0, o.jsx)(r.th, {children: 'Value'}),
                      (0, o.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, o.jsxs)(r.tbody, {
                  children: [
                    (0, o.jsxs)(r.tr, {
                      children: [
                        (0, o.jsx)(r.td, {
                          children: (0, o.jsx)(r.code, {children: '4'}),
                        }),
                        (0, o.jsx)(r.td, {children: 'Confirmed home owner'}),
                      ],
                    }),
                    (0, o.jsxs)(r.tr, {
                      children: [
                        (0, o.jsx)(r.td, {
                          children: (0, o.jsx)(r.code, {children: '3'}),
                        }),
                        (0, o.jsx)(r.td, {children: 'Likely home owner'}),
                      ],
                    }),
                    (0, o.jsxs)(r.tr, {
                      children: [
                        (0, o.jsx)(r.td, {
                          children: (0, o.jsx)(r.code, {children: '1'}),
                        }),
                        (0, o.jsx)(r.td, {children: 'Probable home owner'}),
                      ],
                    }),
                    (0, o.jsxs)(r.tr, {
                      children: [
                        (0, o.jsx)(r.td, {
                          children: (0, o.jsx)(r.code, {children: '0'}),
                        }),
                        (0, o.jsx)(r.td, {
                          children: 'Not a home owner (Renter)',
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
        const {wrapper: r} = {...(0, n.R)(), ...e.components};
        return r
          ? (0, o.jsx)(r, {...e, children: (0, o.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, r, t) => {
      t.d(r, {R: () => s, x: () => d});
      var o = t(3696);
      const n = {},
        i = o.createContext(n);
      function s(e) {
        const r = o.useContext(i);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function d(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          o.createElement(i.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

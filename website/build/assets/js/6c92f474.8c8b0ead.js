/*! For license information please see 6c92f474.8c8b0ead.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8500],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          o = {},
          l = null,
          c = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, n) && !a.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: c,
          props: o,
          _owner: d.current,
        };
      }
      (t.Fragment = o), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    4776: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => a,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => d,
          toc: () => l,
        });
      var n = r(2540),
        i = r(3023);
      const o = {
          id: 'generation-ordinal-property',
          title: 'Generation Ordinal Property',
          description: 'Guide to using the generation ordinal property',
        },
        s = 'Generation Ordinal Property',
        d = {
          id: 'destinations/properties/generation-ordinal-property',
          title: 'Generation Ordinal Property',
          description: 'Guide to using the generation ordinal property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-generation-ordinal-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/generation-ordinal-property',
          permalink:
            '/docs/destinations/properties/generation-ordinal-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'generation-ordinal-property',
            title: 'Generation Ordinal Property',
            description: 'Guide to using the generation ordinal property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Education Ordinal Property',
            permalink:
              '/docs/destinations/properties/education-ordinal-property',
          },
          next: {
            title: 'Ethnicity Detail Property',
            permalink:
              '/docs/destinations/properties/ethnicity-detail-property',
          },
        },
        a = {},
        l = [
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'generation-ordinal-property',
              children: 'Generation Ordinal Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'generation_ordinal'}),
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
                (0, n.jsx)(t.code, {children: 'generation_ordinal'}),
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
                          children: (0, n.jsx)(t.code, {children: '3'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Baby Boomers (1943-1960)',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '2'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Generation X (1961-1981)',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '4'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Post-WWII (1942 and before)',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '1'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Millennials and Gen Z (1982 and after)',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '0'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Other'}),
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => d});
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
      function d(e) {
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
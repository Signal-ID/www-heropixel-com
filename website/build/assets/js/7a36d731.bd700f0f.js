/*! For license information please see 7a36d731.bd700f0f.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [387],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, r) {
        var n,
          i = {},
          c = null,
          p = null;
        for (n in (void 0 !== r && (c = '' + r),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          s.call(t, n) && !a.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: p,
          props: i,
          _owner: d.current,
        };
      }
      (t.Fragment = i), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    1160: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => a,
          contentTitle: () => s,
          default: () => l,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => c,
        });
      var n = r(2540),
        o = r(3023);
      const i = {
          id: 'hero-generation-property',
          title: 'Generation Property',
          description:
            'Guide to using the generation property in Hero Dynamic Text',
        },
        s = 'Generation Property',
        d = {
          id: 'destinations/properties/hero-generation-property',
          title: 'Generation Property',
          description:
            'Guide to using the generation property in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-generation-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/hero-generation-property',
          permalink: '/docs/destinations/properties/hero-generation-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'hero-generation-property',
            title: 'Generation Property',
            description:
              'Guide to using the generation property in Hero Dynamic Text',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Ethnic Group Property',
            permalink:
              '/docs/destinations/properties/hero-ethnic-group-property',
          },
          next: {
            title: 'Education Property',
            permalink: '/docs/destinations/properties/education-property',
          },
        },
        a = {},
        c = [
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'generation-property',
              children: 'Generation Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'generation'}),
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
                (0, n.jsx)(t.code, {children: 'generation'}),
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
                            children:
                              '1. Millennials and Gen Z (1982 and after)',
                          }),
                        }),
                        (0, n.jsx)(t.td, {children: 'Born in 1982 and after'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: '2. Generation X (1961-1981)',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Born between 1961 and 1981',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: '3. Baby Boomers (1943-1960)',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Born between 1943 and 1960',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: '4. Post-WWII (1942 and before)',
                          }),
                        }),
                        (0, n.jsx)(t.td, {children: 'Born in 1942 and before'}),
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
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => d});
      var n = r(3696);
      const o = {},
        i = n.createContext(o);
      function s(e) {
        const t = n.useContext(i);
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
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
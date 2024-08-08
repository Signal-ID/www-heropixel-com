/*! For license information please see cf39f521.ca74234c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7720],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          i = {},
          l = null,
          a = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          d.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: a,
          props: i,
          _owner: s.current,
        };
      }
      (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    3742: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => l,
        });
      var n = r(2540),
        o = r(3023);
      const i = {
          id: 'education-ordinal-property',
          title: 'Education Ordinal Property',
          description: 'Guide to using the education ordinal property',
        },
        d = 'Education Ordinal Property',
        s = {
          id: 'destinations/properties/education-ordinal-property',
          title: 'Education Ordinal Property',
          description: 'Guide to using the education ordinal property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-education-ordinal.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/education-ordinal-property',
          permalink: '/docs/destinations/properties/education-ordinal-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'education-ordinal-property',
            title: 'Education Ordinal Property',
            description: 'Guide to using the education ordinal property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Education Property',
            permalink: '/docs/destinations/properties/education-property',
          },
          next: {
            title: 'Generation Ordinal Property',
            permalink:
              '/docs/destinations/properties/generation-ordinal-property',
          },
        },
        c = {},
        l = [
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'education-ordinal-property',
              children: 'Education Ordinal Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'education_ordinal'}),
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
                (0, n.jsx)(t.code, {children: 'education_ordinal'}),
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
                          children: (0, n.jsx)(t.code, {children: '5'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Completed College'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '3'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Completed High School'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '6'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Completed Graduate School',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '2'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Attended Vocational/Technical',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '4'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Some College'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '0'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Some High School'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '1'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Doctorate/PhD or Above'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '7'}),
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
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => d, x: () => s});
      var n = r(3696);
      const o = {},
        i = n.createContext(o);
      function d(e) {
        const t = n.useContext(i);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : d(e.components)),
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

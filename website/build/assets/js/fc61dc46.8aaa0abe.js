/*! For license information please see fc61dc46.8aaa0abe.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4556],
  {
    2192: (e, i, t) => {
      var r = t(3696),
        n = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        d =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, i, t) {
        var r,
          s = {},
          c = null,
          a = null;
        for (r in (void 0 !== t && (c = '' + t),
        void 0 !== i.key && (c = '' + i.key),
        void 0 !== i.ref && (a = i.ref),
        i))
          o.call(i, r) && !l.hasOwnProperty(r) && (s[r] = i[r]);
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === s[r] && (s[r] = i[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: a,
          props: s,
          _owner: d.current,
        };
      }
      (i.Fragment = s), (i.jsx = c), (i.jsxs = c);
    },
    2540: (e, i, t) => {
      e.exports = t(2192);
    },
    9119: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => l,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => c,
        });
      var r = t(2540),
        n = t(3023);
      const s = {
          id: 'religion-property',
          title: 'Religion Property',
          description: 'Guide to using the religion property',
        },
        o = 'Religion Property',
        d = {
          id: 'destinations/properties/religion-property',
          title: 'Religion Property',
          description: 'Guide to using the religion property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-religion-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/religion-property',
          permalink: '/docs/destinations/properties/religion-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'religion-property',
            title: 'Religion Property',
            description: 'Guide to using the religion property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Premium Income Midpoint HH Property',
            permalink:
              '/docs/destinations/properties/premium-income-midpt-hh-property',
          },
          next: {
            title: 'Urbanicity Property',
            permalink: '/docs/destinations/properties/urbanicity-property',
          },
        },
        l = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function a(e) {
        const i = {
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.h1, {
              id: 'religion-property',
              children: 'Religion Property',
            }),
            '\n',
            (0, r.jsx)(i.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(i.p, {
              children: [
                'The ',
                (0, r.jsx)(i.code, {children: 'religion'}),
                ' property',
              ],
            }),
            '\n',
            (0, r.jsx)(i.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(i.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(i.code, {children: 'religion'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(i.table, {
              children: [
                (0, r.jsx)(i.thead, {
                  children: (0, r.jsxs)(i.tr, {
                    children: [
                      (0, r.jsx)(i.th, {children: 'Values'}),
                      (0, r.jsx)(i.th, {children: 'Value Type'}),
                      (0, r.jsx)(i.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(i.tbody, {
                  children: [
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: 'Buddhist'}),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Buddhist religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: 'Catholic'}),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Catholic religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: 'Christian'}),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Christian religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: 'Hindu'}),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Hindu religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {
                            children: 'Islamic / Muslim',
                          }),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Islamic religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: 'Jewish'}),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Jewish religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: 'Other'}),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Other religious affiliation',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {
                            children: 'Protestant',
                          }),
                        }),
                        (0, r.jsx)(i.td, {children: 'string'}),
                        (0, r.jsx)(i.td, {
                          children: 'Protestant religious affiliation',
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
      function h(e = {}) {
        const {wrapper: i} = {...(0, n.R)(), ...e.components};
        return i
          ? (0, r.jsx)(i, {...e, children: (0, r.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, i, t) => {
      t.d(i, {R: () => o, x: () => d});
      var r = t(3696);
      const n = {},
        s = r.createContext(n);
      function o(e) {
        const i = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : {...i, ...e};
          },
          [i, e]
        );
      }
      function d(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : o(e.components)),
          r.createElement(s.Provider, {value: i}, e.children)
        );
      }
    },
  },
]);

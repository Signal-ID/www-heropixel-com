/*! For license information please see f33cae7f.af088b71.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8429],
  {
    2192: (e, t, o) => {
      var i = o(3696),
        n = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        s =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, o) {
        var i,
          r = {},
          l = null,
          h = null;
        for (i in (void 0 !== o && (l = '' + o),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (h = t.ref),
        t))
          d.call(t, i) && !c.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: h,
          props: r,
          _owner: s.current,
        };
      }
      (t.Fragment = r), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, o) => {
      e.exports = o(2192);
    },
    7766: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => l,
        });
      var i = o(2540),
        n = o(3023);
      const r = {
          id: 'income-midpts-hh-property',
          title: 'Income Midpoints HH Property',
          description: 'Guide to using the household income midpoints property',
        },
        d = 'Income Midpoints HH Property',
        s = {
          id: 'destinations/properties/income-midpts-hh-property',
          title: 'Income Midpoints HH Property',
          description: 'Guide to using the household income midpoints property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-income-midpts-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/income-midpts-hh-property',
          permalink: '/docs/destinations/properties/income-midpts-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'income-midpts-hh-property',
            title: 'Income Midpoints HH Property',
            description:
              'Guide to using the household income midpoints property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Income Levels Property',
            permalink: '/docs/destinations/properties/income-levels-property',
          },
          next: {
            title: 'Marital Status Property',
            permalink: '/docs/destinations/properties/marital-status-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function h(e) {
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
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'income-midpoints-hh-property',
              children: 'Income Midpoints HH Property',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The ',
                (0, i.jsx)(t.code, {children: 'income_midpts_hh'}),
                ' property',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, i.jsx)(t.code, {children: 'income_midpts_hh'}),
                ' property:',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {children: 'Value'}),
                      (0, i.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '10000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $10,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '15000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $15,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '25000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $25,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '35000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $35,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '45000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $45,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '55000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $55,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '67500'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $67,500',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '87500'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $87,500',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '125000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $125,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '162500'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $162,500',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '187500'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $187,500',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '225000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $225,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '300000'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Household income midpoint of $300,000',
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
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, t, o) => {
      o.d(t, {R: () => d, x: () => s});
      var i = o(3696);
      const n = {},
        r = i.createContext(n);
      function d(e) {
        const t = i.useContext(r);
        return i.useMemo(
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
              ? e.components(n)
              : e.components || n
            : d(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 055effcf.0c22ef38.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9791],
  {
    2192: (t, e, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        s =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        h = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(t, e, r) {
        var o,
          i = {},
          l = null,
          c = null;
        for (o in (void 0 !== r && (l = '' + r),
        void 0 !== e.key && (l = '' + e.key),
        void 0 !== e.ref && (c = e.ref),
        e))
          d.call(e, o) && !h.hasOwnProperty(o) && (i[o] = e[o]);
        if (t && t.defaultProps)
          for (o in (e = t.defaultProps)) void 0 === i[o] && (i[o] = e[o]);
        return {
          $$typeof: n,
          type: t,
          key: l,
          ref: c,
          props: i,
          _owner: s.current,
        };
      }
      (e.Fragment = i), (e.jsx = l), (e.jsxs = l);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    2694: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => h,
          contentTitle: () => d,
          default: () => p,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => l,
        });
      var o = r(2540),
        n = r(3023);
      const i = {
          id: 'net-worth-midpt-hh-property',
          title: 'Net Worth Midpoints HH Property',
          description:
            'Guide to using the household net worth midpoints property',
        },
        d = 'Net Worth Midpoints HH Property',
        s = {
          id: 'destinations/properties/net-worth-midpt-hh-property',
          title: 'Net Worth Midpoints HH Property',
          description:
            'Guide to using the household net worth midpoints property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-net-worth-midpt-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/net-worth-midpt-hh-property',
          permalink:
            '/docs/destinations/properties/net-worth-midpt-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'net-worth-midpt-hh-property',
            title: 'Net Worth Midpoints HH Property',
            description:
              'Guide to using the household net worth midpoints property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Net Worth HH Property',
            permalink: '/docs/destinations/properties/net-worth-hh-property',
          },
          next: {
            title: 'Occupation Detail Property',
            permalink:
              '/docs/destinations/properties/occupation-detail-property',
          },
        },
        h = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function c(t) {
        const e = {
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
          ...t.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(e.h1, {
              id: 'net-worth-midpoints-hh-property',
              children: 'Net Worth Midpoints HH Property',
            }),
            '\n',
            (0, o.jsx)(e.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(e.p, {
              children: [
                'The ',
                (0, o.jsx)(e.code, {children: 'Net_Worth_Midpt_HH'}),
                ' property',
              ],
            }),
            '\n',
            (0, o.jsx)(e.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, o.jsxs)(e.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, o.jsx)(e.code, {children: 'Net_Worth_Midpt_HH'}),
                ' property:',
              ],
            }),
            '\n',
            (0, o.jsxs)(e.table, {
              children: [
                (0, o.jsx)(e.thead, {
                  children: (0, o.jsxs)(e.tr, {
                    children: [
                      (0, o.jsx)(e.th, {children: 'Value'}),
                      (0, o.jsx)(e.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, o.jsxs)(e.tbody, {
                  children: [
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '1'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $1',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '2500'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $2,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '7500'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $7,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '17500'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $17,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '37500'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $37,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '75000'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $75,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '175000'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $175,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '375000'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $375,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(e.tr, {
                      children: [
                        (0, o.jsx)(e.td, {
                          children: (0, o.jsx)(e.code, {children: '750000'}),
                        }),
                        (0, o.jsx)(e.td, {
                          children: 'Household net worth midpoint of $750,000',
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
      function p(t = {}) {
        const {wrapper: e} = {...(0, n.R)(), ...t.components};
        return e
          ? (0, o.jsx)(e, {...t, children: (0, o.jsx)(c, {...t})})
          : c(t);
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => d, x: () => s});
      var o = r(3696);
      const n = {},
        i = o.createContext(n);
      function d(t) {
        const e = o.useContext(i);
        return o.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function s(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(n)
              : t.components || n
            : d(t.components)),
          o.createElement(i.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

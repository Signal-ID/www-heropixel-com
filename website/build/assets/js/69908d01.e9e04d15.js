/*! For license information please see 69908d01.e9e04d15.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5910],
  {
    2192: (e, t, r) => {
      var i = r(3696),
        d = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        o =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var i,
          n = {},
          l = null,
          p = null;
        for (i in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          s.call(t, i) && !c.hasOwnProperty(i) && (n[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === n[i] && (n[i] = t[i]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: p,
          props: n,
          _owner: o.current,
        };
      }
      (t.Fragment = n), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    4549: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => n,
          metadata: () => o,
          toc: () => l,
        });
      var i = r(2540),
        d = r(3023);
      const n = {
          id: 'credit-midpts-property',
          title: 'Credit Midpoints Property',
          description: 'Guide to using the credit midpoints property',
        },
        s = 'Credit Midpoints Property',
        o = {
          id: 'destinations/properties/credit-midpts-property',
          title: 'Credit Midpoints Property',
          description: 'Guide to using the credit midpoints property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-credit-midpts-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/credit-midpts-property',
          permalink: '/docs/destinations/properties/credit-midpts-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'credit-midpts-property',
            title: 'Credit Midpoints Property',
            description: 'Guide to using the credit midpoints property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Credit Range Property',
            permalink: '/docs/destinations/properties/credit-range-property',
          },
          next: {
            title: 'Home Owner Property',
            permalink: '/docs/destinations/properties/home-owner-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Legal Disclaimer', id: 'legal-disclaimer', level: 2},
          {
            value: 'What is Credit Midpoints?',
            id: 'what-is-credit-midpoints',
            level: 2,
          },
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
          ...(0, d.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'credit-midpoints-property',
              children: 'Credit Midpoints Property',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The ',
                (0, i.jsx)(t.code, {children: 'credit_midpts'}),
                ' property',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'legal-disclaimer',
              children: 'Legal Disclaimer',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                "Federal law prohibits the use of this data to determine an individual's creditworthiness. The ",
                (0, i.jsx)(t.code, {children: 'credit_midpts'}),
                " property provides an approximate midpoint of a visitor's credit score range and is not an exact score. It should be used only for personalization purposes to enhance user engagement and not for any credit-related decisions.",
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'what-is-credit-midpoints',
              children: 'What is Credit Midpoints?',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'In the context of Acxiom data, the ',
                (0, i.jsx)(t.code, {children: 'credit_midpts'}),
                " property represents the midpoint of the visitor's credit score range. This helps you understand the visitor's creditworthiness and tailor your content accordingly.",
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
                'The following table lists the valid values for the ',
                (0, i.jsx)(t.code, {children: 'credit_midpts'}),
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
                          children: (0, i.jsx)(t.code, {children: '0'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'No credit score available',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '450'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 450',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '525'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 525',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '575'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 575',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '625'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 625',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '675'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 675',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '725'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 725',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '775'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 775',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: '800'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: 'Midpoint credit score of 800',
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
        const {wrapper: t} = {...(0, d.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => o});
      var i = r(3696);
      const d = {},
        n = i.createContext(d);
      function s(e) {
        const t = i.useContext(n);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function o(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(d)
              : e.components || d
            : s(e.components)),
          i.createElement(n.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

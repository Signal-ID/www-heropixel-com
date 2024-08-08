/*! For license information please see 2668a8d7.84b892f0.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2505],
  {
    2192: (e, t, r) => {
      var i = r(3696),
        n = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, r) {
        var i,
          o = {},
          d = null,
          p = null;
        for (i in (void 0 !== r && (d = '' + r),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          s.call(t, i) && !a.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: p,
          props: o,
          _owner: c.current,
        };
      }
      (t.Fragment = o), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    6288: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => a,
          contentTitle: () => s,
          default: () => l,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => d,
        });
      var i = r(2540),
        n = r(3023);
      const o = {
          id: 'phone-activity-property',
          title: 'Phone Activity Property',
          description: 'Guide to using the phone activity property',
        },
        s = 'Phone Activity Property',
        c = {
          id: 'destinations/properties/phone-activity-property',
          title: 'Phone Activity Property',
          description: 'Guide to using the phone activity property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-phone-activity-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/phone-activity-property',
          permalink: '/docs/destinations/properties/phone-activity-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'phone-activity-property',
            title: 'Phone Activity Property',
            description: 'Guide to using the phone activity property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Occupation Detail Property',
            permalink:
              '/docs/destinations/properties/occupation-detail-property',
          },
          next: {
            title: 'Phone Carrier Property',
            permalink: '/docs/destinations/properties/phone-carrier-property',
          },
        },
        a = {},
        d = [
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
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'phone-activity-property',
              children: 'Phone Activity Property',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The ',
                (0, i.jsx)(t.code, {children: 'phone_activity'}),
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
                (0, i.jsx)(t.code, {children: 'phone_activity'}),
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
                          children: (0, i.jsx)(t.code, {children: 'high'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'High frequency of legitimate purchases, account registrations, and online user behavior',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'medium'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Medium frequency of legitimate purchases, account registrations, and online user behavior',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'low'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'Low frequency of legitimate purchases, account registrations, and online user behavior',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'none'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children:
                            'No history of legitimate purchases, account registrations, or online user behavior',
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
      function l(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => c});
      var i = r(3696);
      const n = {},
        o = i.createContext(n);
      function s(e) {
        const t = i.useContext(o);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          i.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see aa119581.7e31b6dc.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3172],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, r) {
        var n,
          o = {},
          a = null,
          l = null;
        for (n in (void 0 !== r && (a = '' + r),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          s.call(t, n) && !d.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: a,
          ref: l,
          props: o,
          _owner: c.current,
        };
      }
      (t.Fragment = o), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    3050: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => a,
        });
      var n = r(2540),
        i = r(3023);
      const o = {
          id: 'urbanicity-property',
          title: 'Urbanicity Property',
          description: 'Guide to using the urbanicity property',
        },
        s = 'Urbanicity Property',
        c = {
          id: 'destinations/properties/urbanicity-property',
          title: 'Urbanicity Property',
          description: 'Guide to using the urbanicity property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-urbanicity-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/urbanicity-property',
          permalink: '/docs/destinations/properties/urbanicity-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'urbanicity-property',
            title: 'Urbanicity Property',
            description: 'Guide to using the urbanicity property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Religion Property',
            permalink: '/docs/destinations/properties/religion-property',
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'urbanicity-property',
              children: 'Urbanicity Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'urbanicity'}),
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
                (0, n.jsx)(t.code, {children: 'urbanicity'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {children: 'Values'}),
                      (0, n.jsx)(t.th, {children: 'Value Type'}),
                      (0, n.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '1. Rural'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'string'}),
                        (0, n.jsx)(t.td, {
                          children: 'Rural living environment',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: '3. Suburban',
                          }),
                        }),
                        (0, n.jsx)(t.td, {children: 'string'}),
                        (0, n.jsx)(t.td, {
                          children: 'Suburban living environment',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: '4. Urban'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'string'}),
                        (0, n.jsx)(t.td, {
                          children: 'Urban living environment',
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(l, {...e})})
          : l(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => c});
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
      function c(e) {
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

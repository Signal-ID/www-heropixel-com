/*! For license information please see 2de39cda.12f18c91.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [888],
  {
    2192: (e, t, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        d =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var o,
          i = {},
          l = null,
          a = null;
        for (o in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          s.call(t, o) && !c.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: a,
          props: i,
          _owner: d.current,
        };
      }
      (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    8214: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => l,
        });
      var o = r(2540),
        n = r(3023);
      const i = {
          id: 'education-property',
          title: 'Education Property',
          description: 'Guide to using the education property',
        },
        s = 'Education Property',
        d = {
          id: 'destinations/properties/education-property',
          title: 'Education Property',
          description: 'Guide to using the education property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-education-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/education-property',
          permalink: '/docs/destinations/properties/education-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'education-property',
            title: 'Education Property',
            description: 'Guide to using the education property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Generation Property',
            permalink: '/docs/destinations/properties/hero-generation-property',
          },
          next: {
            title: 'Education Ordinal Property',
            permalink:
              '/docs/destinations/properties/education-ordinal-property',
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
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(t.h1, {
              id: 'education-property',
              children: 'Education Property',
            }),
            '\n',
            (0, o.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The ',
                (0, o.jsx)(t.code, {children: 'education'}),
                ' property',
              ],
            }),
            '\n',
            (0, o.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, o.jsx)(t.code, {children: 'education'}),
                ' property:',
              ],
            }),
            '\n',
            (0, o.jsxs)(t.table, {
              children: [
                (0, o.jsx)(t.thead, {
                  children: (0, o.jsxs)(t.tr, {
                    children: [
                      (0, o.jsx)(t.th, {children: 'Value'}),
                      (0, o.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, o.jsxs)(t.tbody, {
                  children: [
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Completed College',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor has completed a college degree',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Completed High School',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor has completed high school',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Completed Graduate School',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor has completed graduate school',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Attended Vocational/Technical',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children:
                            'Visitor has attended vocational or technical school',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Some College',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor has attended some college',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Some High School',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor has attended some high school',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(t.tr, {
                      children: [
                        (0, o.jsx)(t.td, {
                          children: (0, o.jsx)(t.code, {
                            children: 'Doctorate/PhD or Above',
                          }),
                        }),
                        (0, o.jsx)(t.td, {
                          children: 'Visitor has a Doctorate/PhD or higher',
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
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => d});
      var o = r(3696);
      const n = {},
        i = o.createContext(n);
      function s(e) {
        const t = o.useContext(i);
        return o.useMemo(
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
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          o.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
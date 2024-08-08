/*! For license information please see 3298af35.3f744d0b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6254],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, r) {
        var n,
          o = {},
          d = null,
          a = null;
        for (n in (void 0 !== r && (d = '' + r),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          s.call(t, n) && !p.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: a,
          props: o,
          _owner: c.current,
        };
      }
      (t.Fragment = o), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    8085: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => p,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => d,
        });
      var n = r(2540),
        i = r(3023);
      const o = {
          id: 'hero-ethnic-group-property',
          title: 'Ethnic Group Property',
          description:
            'Guide to using the ethnic group property in Hero Dynamic Text',
        },
        s = 'Ethnic Group Property',
        c = {
          id: 'destinations/properties/hero-ethnic-group-property',
          title: 'Ethnic Group Property',
          description:
            'Guide to using the ethnic group property in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-ethnic-group-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/hero-ethnic-group-property',
          permalink: '/docs/destinations/properties/hero-ethnic-group-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'hero-ethnic-group-property',
            title: 'Ethnic Group Property',
            description:
              'Guide to using the ethnic group property in Hero Dynamic Text',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Language Property',
            permalink: '/docs/destinations/properties/hero-language-property',
          },
          next: {
            title: 'Generation Property',
            permalink: '/docs/destinations/properties/hero-generation-property',
          },
        },
        p = {},
        d = [
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'ethnic-group-property',
              children: 'Ethnic Group Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'ethnic_group'}),
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
                (0, n.jsx)(t.code, {children: 'ethnic_group'}),
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
                        (0, n.jsx)(t.td, {children: 'White'}),
                        (0, n.jsx)(t.td, {children: 'Caucasian or White'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {children: 'Hispanic'}),
                        (0, n.jsx)(t.td, {children: 'Hispanic or Latino'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {children: 'Asian'}),
                        (0, n.jsx)(t.td, {children: 'Asian'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {children: 'Jewish'}),
                        (0, n.jsx)(t.td, {children: 'Jewish'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {children: 'African American'}),
                        (0, n.jsx)(t.td, {children: 'African American'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {children: 'Other'}),
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
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(a, {...e})})
          : a(e);
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

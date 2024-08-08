/*! For license information please see 2806effc.bd0809f3.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1531],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function p(e, t, r) {
        var n,
          o = {},
          p = null,
          c = null;
        for (n in (void 0 !== r && (p = '' + r),
        void 0 !== t.key && (p = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, n) && !d.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: p,
          ref: c,
          props: o,
          _owner: l.current,
        };
      }
      (t.Fragment = o), (t.jsx = p), (t.jsxs = p);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    2575: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => p,
        });
      var n = r(2540),
        i = r(3023);
      const o = {
          id: 'line-type-property',
          title: 'Line Type Property',
          description: 'Guide to using the line type property',
        },
        s = 'Line Type Property',
        l = {
          id: 'destinations/properties/line-type-property',
          title: 'Line Type Property',
          description: 'Guide to using the line type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-line-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/line-type-property',
          permalink: '/docs/destinations/properties/line-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'line-type-property',
            title: 'Line Type Property',
            description: 'Guide to using the line type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Phone Is Callable Property',
            permalink:
              '/docs/destinations/properties/phone-is-callable-property',
          },
          next: {
            title: 'Political Party Property',
            permalink: '/docs/destinations/properties/political-party-property',
          },
        },
        d = {},
        p = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function c(e) {
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
              id: 'line-type-property',
              children: 'Line Type Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'line_type'}),
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
                (0, n.jsx)(t.code, {children: 'line_type'}),
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
                          children: (0, n.jsx)(t.code, {children: 'Toll Free'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Toll free phone line'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'Wireless'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Wireless phone line'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'Landline'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Landline phone line'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'Satellite'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Satellite phone line'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'VOIP'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Voice Over IP (VOIP) phone line',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'Premium Rate',
                          }),
                        }),
                        (0, n.jsx)(t.td, {children: 'Premium rate phone line'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'Pager'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Pager phone line'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'N/A'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Unknown or not applicable line type',
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => s, x: () => l});
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
      function l(e) {
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

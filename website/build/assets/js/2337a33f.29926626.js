/*! For license information please see 2337a33f.29926626.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5043],
  {
    2192: (e, r, i) => {
      var d = i(3696),
        n = Symbol.for('react.element'),
        c = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        t =
          d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, r, i) {
        var d,
          c = {},
          h = null,
          o = null;
        for (d in (void 0 !== i && (h = '' + i),
        void 0 !== r.key && (h = '' + r.key),
        void 0 !== r.ref && (o = r.ref),
        r))
          s.call(r, d) && !l.hasOwnProperty(d) && (c[d] = r[d]);
        if (e && e.defaultProps)
          for (d in (r = e.defaultProps)) void 0 === c[d] && (c[d] = r[d]);
        return {
          $$typeof: n,
          type: e,
          key: h,
          ref: o,
          props: c,
          _owner: t.current,
        };
      }
      (r.Fragment = c), (r.jsx = h), (r.jsxs = h);
    },
    2540: (e, r, i) => {
      e.exports = i(2192);
    },
    3163: (e, r, i) => {
      i.r(r),
        i.d(r, {
          assets: () => l,
          contentTitle: () => s,
          default: () => x,
          frontMatter: () => c,
          metadata: () => t,
          toc: () => h,
        });
      var d = i(2540),
        n = i(3023);
      const c = {
          id: 'phone-carrier-property',
          title: 'Phone Carrier Property',
          description: 'Guide to using the phone carrier property',
        },
        s = 'Phone Carrier Property',
        t = {
          id: 'destinations/properties/phone-carrier-property',
          title: 'Phone Carrier Property',
          description: 'Guide to using the phone carrier property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-phone-carrier-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/phone-carrier-property',
          permalink: '/docs/destinations/properties/phone-carrier-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'phone-carrier-property',
            title: 'Phone Carrier Property',
            description: 'Guide to using the phone carrier property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Phone Activity Property',
            permalink: '/docs/destinations/properties/phone-activity-property',
          },
          next: {
            title: 'Phone Is Callable Property',
            permalink:
              '/docs/destinations/properties/phone-is-callable-property',
          },
        },
        l = {},
        h = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function o(e) {
        const r = {
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
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(r.h1, {
              id: 'phone-carrier-property',
              children: 'Phone Carrier Property',
            }),
            '\n',
            (0, d.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, d.jsxs)(r.p, {
              children: [
                'The ',
                (0, d.jsx)(r.code, {children: 'phone_carrier'}),
                ' property',
              ],
            }),
            '\n',
            (0, d.jsx)(r.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, d.jsxs)(r.p, {
              children: [
                'The following table lists a selection of potential values for the ',
                (0, d.jsx)(r.code, {children: 'phone_carrier'}),
                ' property, including popular phone carriers in the U.S.:',
              ],
            }),
            '\n',
            (0, d.jsxs)(r.table, {
              children: [
                (0, d.jsx)(r.thead, {
                  children: (0, d.jsxs)(r.tr, {
                    children: [
                      (0, d.jsx)(r.th, {children: 'Value'}),
                      (0, d.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, d.jsxs)(r.tbody, {
                  children: [
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'AT&T'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Bell Canada',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'Canadian phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Verizon Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'T-Mobile'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Sprint'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'US Cellular',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Boost Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Cricket Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Metro by T-Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Virgin Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Xfinity Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Google Fi'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Spectrum Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Republic Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Mint Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Consumer Cellular',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Ting'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Straight Talk',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Page Plus'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Simple Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'TracFone'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Net10 Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Total Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'H2O Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Red Pocket',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Visible'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Wing'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Project Fi',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Walmart Family Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Credo Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Cellcom'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'FreedomPop',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Boost Infinite',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Nextel'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Bluegrass Cellular',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Republic Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Spectrum'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Straight Talk Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'MetroPCS'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'C Spire'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Appalachian Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'GreatCall'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Ptel Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'GCI Wireless',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {children: 'Tello'}),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Ultra Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Voyager Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Boom Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Gen Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Hello Mobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: (0, d.jsx)(r.code, {
                            children: 'Lycamobile',
                          }),
                        }),
                        (0, d.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, d.jsx)(r.p, {children: 'and many more...'}),
          ],
        });
      }
      function x(e = {}) {
        const {wrapper: r} = {...(0, n.R)(), ...e.components};
        return r
          ? (0, d.jsx)(r, {...e, children: (0, d.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, r, i) => {
      i.d(r, {R: () => s, x: () => t});
      var d = i(3696);
      const n = {},
        c = d.createContext(n);
      function s(e) {
        const r = d.useContext(c);
        return d.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function t(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          d.createElement(c.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

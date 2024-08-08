/*! For license information please see ba6080ce.e4b7d5d6.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5942],
  {
    2192: (e, r, t) => {
      var n = t(3696),
        l = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        o =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, r, t) {
        var n,
          i = {},
          c = null,
          a = null;
        for (n in (void 0 !== t && (c = '' + t),
        void 0 !== r.key && (c = '' + r.key),
        void 0 !== r.ref && (a = r.ref),
        r))
          s.call(r, n) && !d.hasOwnProperty(n) && (i[n] = r[n]);
        if (e && e.defaultProps)
          for (n in (r = e.defaultProps)) void 0 === i[n] && (i[n] = r[n]);
        return {
          $$typeof: l,
          type: e,
          key: c,
          ref: a,
          props: i,
          _owner: o.current,
        };
      }
      (r.Fragment = i), (r.jsx = c), (r.jsxs = c);
    },
    2540: (e, r, t) => {
      e.exports = t(2192);
    },
    6754: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => d,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => c,
        });
      var n = t(2540),
        l = t(3023);
      const i = {
          id: 'phone-is-callable-property',
          title: 'Phone Is Callable Property',
          description: 'Guide to using the phone is callable property',
        },
        s = 'Phone Is Callable Property',
        o = {
          id: 'destinations/properties/phone-is-callable-property',
          title: 'Phone Is Callable Property',
          description: 'Guide to using the phone is callable property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-phone-is-callable-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/phone-is-callable-property',
          permalink: '/docs/destinations/properties/phone-is-callable-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'phone-is-callable-property',
            title: 'Phone Is Callable Property',
            description: 'Guide to using the phone is callable property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Phone Carrier Property',
            permalink: '/docs/destinations/properties/phone-carrier-property',
          },
          next: {
            title: 'Line Type Property',
            permalink: '/docs/destinations/properties/line-type-property',
          },
        },
        d = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {
            value: 'Criteria for Callable Phone Numbers',
            id: 'criteria-for-callable-phone-numbers',
            level: 2,
          },
          {
            value: 'Callable Phone Number Values',
            id: 'callable-phone-number-values',
            level: 3,
          },
        ];
      function a(e) {
        const r = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          p: 'p',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(r.h1, {
              id: 'phone-is-callable-property',
              children: 'Phone Is Callable Property',
            }),
            '\n',
            (0, n.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(r.p, {
              children: [
                'The ',
                (0, n.jsx)(r.code, {children: 'phone_is_callable'}),
                ' property',
              ],
            }),
            '\n',
            (0, n.jsx)(r.h2, {
              id: 'criteria-for-callable-phone-numbers',
              children: 'Criteria for Callable Phone Numbers',
            }),
            '\n',
            (0, n.jsx)(r.p, {
              children:
                'The following table lists the criteria used to determine if a phone number is callable:',
            }),
            '\n',
            (0, n.jsxs)(r.table, {
              children: [
                (0, n.jsx)(r.thead, {
                  children: (0, n.jsxs)(r.tr, {
                    children: [
                      (0, n.jsx)(r.th, {children: 'Property'}),
                      (0, n.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(r.tbody, {
                  children: [
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'success'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children:
                            'Indicates if the validation was successful',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'valid'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Indicates if the phone number is valid',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'prepaid'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Ensures the phone number is NOT prepaid',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'active'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Indicates if the phone number is active',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'do_not_call',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children:
                            'Indicates if the phone number is on a do-not-call list (checked at time of engagement)',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'line_type'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children:
                            'The type of phone line (should not be "Toll Free")',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'country'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children:
                            'The country of the phone number (should be "US")',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(r.h3, {
              id: 'callable-phone-number-values',
              children: 'Callable Phone Number Values',
            }),
            '\n',
            (0, n.jsxs)(r.p, {
              children: [
                'The ',
                (0, n.jsx)(r.code, {children: 'phone_is_callable'}),
                ' property can return the following values:',
              ],
            }),
            '\n',
            (0, n.jsxs)(r.table, {
              children: [
                (0, n.jsx)(r.thead, {
                  children: (0, n.jsxs)(r.tr, {
                    children: [
                      (0, n.jsx)(r.th, {children: 'Value'}),
                      (0, n.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(r.tbody, {
                  children: [
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: '0'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Phone number is not callable',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: '1'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Phone number is callable',
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
        const {wrapper: r} = {...(0, l.R)(), ...e.components};
        return r
          ? (0, n.jsx)(r, {...e, children: (0, n.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, r, t) => {
      t.d(r, {R: () => s, x: () => o});
      var n = t(3696);
      const l = {},
        i = n.createContext(l);
      function s(e) {
        const r = n.useContext(i);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function o(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(l)
              : e.components || l
            : s(e.components)),
          n.createElement(i.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

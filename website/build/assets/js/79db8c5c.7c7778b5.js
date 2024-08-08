/*! For license information please see 79db8c5c.7c7778b5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1330],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        h = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var r,
          s = {},
          d = null,
          a = null;
        for (r in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (a = t.ref),
        t))
          i.call(t, r) && !h.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: a,
          props: s,
          _owner: l.current,
        };
      }
      (t.Fragment = s), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    3028: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => h,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => d,
        });
      var r = n(2540),
        o = n(3023);
      const s = {
          id: 'net-worth-hh-property',
          title: 'Net Worth HH Property',
          description: 'Guide to using the household net worth property',
        },
        i = 'Net Worth HH Property',
        l = {
          id: 'personalization/net-worth-hh-property',
          title: 'Net Worth HH Property',
          description: 'Guide to using the household net worth property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-net-worth-hh-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/net-worth-hh-property',
          permalink: '/docs/personalization/net-worth-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'net-worth-hh-property',
            title: 'Net Worth HH Property',
            description: 'Guide to using the household net worth property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Mortgage Refi Type Property',
            permalink: '/docs/personalization/mortgage-refi-type-property',
          },
          next: {
            title: 'Net Worth Midpoints HH Property',
            permalink: '/docs/personalization/net-worth-midpt-hh-property',
          },
        },
        h = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.h1, {
              id: 'net-worth-hh-property',
              children: 'Net Worth HH Property',
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The ',
                (0, r.jsx)(t.code, {children: 'Net_Worth_HH'}),
                ' property allows you to tailor your content based on the household net worth of your visitors. This guide provides an overview of how to use the ',
                (0, r.jsx)(t.code, {children: 'Net_Worth_HH'}),
                ' property to create personalized experiences and includes a list of potential net worth values.',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The ',
                (0, r.jsx)(t.code, {children: 'Net_Worth_HH'}),
                " property can be used to display content that resonates with the visitor's household net worth, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, r.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, r.jsx)(t.p, {
              children: (0, r.jsx)(t.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, r.jsx)(t.pre, {
              children: (0, r.jsx)(t.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Net_Worth_HH "B. Less than $1")}}\n<p>\n  Our financial planning resources can help you start building\n  your wealth today.\n</p>\n<img src="/images/build_wealth.jpg" alt="Build Wealth" />\n{{else if (eq Net_Worth_HH "F. $25,000 - $49,999")}}\n<p>\n  Discover investment opportunities tailored for your net worth\n  range.\n</p>\n<img\n  src="/images/investment_opportunities.jpg"\n  alt="Investment Opportunities" />\n{{else if (eq Net_Worth_HH "J. Greater than $499,999")}}\n<p>\n  Take advantage of our exclusive wealth management services\n  designed for high net worth households.\n</p>\n<img\n  src="/images/wealth_management.jpg"\n  alt="Wealth Management" />\n{{else}}\n<p>\n  Welcome! Explore our range of services tailored to various net\n  worth levels.\n</p>\n<img src="/images/general_services.jpg" alt="General Services" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's household net worth, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, r.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(t.code, {children: 'Net_Worth_HH'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(t.table, {
              children: [
                (0, r.jsx)(t.thead, {
                  children: (0, r.jsxs)(t.tr, {
                    children: [
                      (0, r.jsx)(t.th, {children: 'Value'}),
                      (0, r.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(t.tbody, {
                  children: [
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'B. Less than $1',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household net worth less than $1',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'C. $1 - $4,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household net worth between $1 - $4,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'D. $5,000 - $9,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household net worth between $5,000 - $9,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'E. $10,000 - $24,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household net worth between $10,000 - $24,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'F. $25,000 - $49,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household net worth between $25,000 - $49,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'G. $50,000 - $99,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household net worth between $50,000 - $99,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'H. $100,000 - $249,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household net worth between $100,000 - $249,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'I. $250,000 - $499,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Household net worth between $250,000 - $499,999',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'J. Greater than $499,999',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Household net worth greater than $499,999',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'Using the ',
                (0, r.jsx)(t.code, {children: 'Net_Worth_HH'}),
                " property allows you to personalize your landing pages based on the visitor's household net worth. By leveraging this property, you can deliver content that resonates with different net worth levels, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, r.jsx)(t.p, {children: 'Explore more features:'}),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsx)(t.li, {
                  children: (0, r.jsx)(t.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, r.jsx)(t.li, {
                  children: (0, r.jsx)(t.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, r.jsx)(t.li, {
                  children: (0, r.jsx)(t.a, {
                    href: '/docs/personalization/hero-advanced-techniques',
                    children: 'Advanced Templating Techniques',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function c(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => l});
      var r = n(3696);
      const o = {},
        s = r.createContext(o);
      function i(e) {
        const t = r.useContext(s);
        return r.useMemo(
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
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

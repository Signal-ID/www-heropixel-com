/*! For license information please see bf3e4a7f.5d74d966.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7881],
  {
    2192: (e, n, r) => {
      var o = r(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        t = Object.prototype.hasOwnProperty,
        d =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, n, r) {
        var o,
          s = {},
          l = null,
          h = null;
        for (o in (void 0 !== r && (l = '' + r),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          t.call(n, o) && !c.hasOwnProperty(o) && (s[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === s[o] && (s[o] = n[o]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: h,
          props: s,
          _owner: d.current,
        };
      }
      (n.Fragment = s), (n.jsx = l), (n.jsxs = l);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    9002: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => c,
          contentTitle: () => t,
          default: () => a,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => l,
        });
      var o = r(2540),
        i = r(3023);
      const s = {
          id: 'income-hh-property',
          title: 'Income HH Property',
          description: 'Guide to using the household income property',
        },
        t = 'Income HH Property',
        d = {
          id: 'destinations/properties/income-hh-property',
          title: 'Income HH Property',
          description: 'Guide to using the household income property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-income-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/income-hh-property',
          permalink: '/docs/destinations/properties/income-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'income-hh-property',
            title: 'Income HH Property',
            description: 'Guide to using the household income property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Home Owner Ordinal Property',
            permalink:
              '/docs/destinations/properties/home-owner-ordinal-property',
          },
          next: {
            title: 'Income Levels Property',
            permalink: '/docs/destinations/properties/income-levels-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function h(e) {
        const n = {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.h1, {
              id: 'income-hh-property',
              children: 'Income HH Property',
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'income_hh'}),
                ' property allows you to tailor your content based on the household income range of your visitors. This guide provides an overview of how to use the ',
                (0, o.jsx)(n.code, {children: 'income_hh'}),
                ' property to create personalized experiences and includes a list of potential household income values.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'income_hh'}),
                " property can be used to display content that resonates with the visitor's household income range, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, o.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq income_hh "A. Under $10,000")}}\n<p>\n  Explore our budget-friendly options and financial assistance\n  programs designed for you.\n</p>\n<img src="/images/budget_friendly.jpg" alt="Budget Friendly" />\n{{else if (eq income_hh "K. $100,000-$149,999")}}\n<p>\n  Discover our premium products and services tailored for higher\n  income households.\n</p>\n<img src="/images/premium_services.jpg" alt="Premium Services" />\n{{else if (eq income_hh "O. $250K +")}}\n<p>\n  Take advantage of our exclusive offers and luxury experiences\n  available for you.\n</p>\n<img src="/images/exclusive_offers.jpg" alt="Exclusive Offers" />\n{{else}}\n<p>\n  Welcome! Discover our range of services and products tailored to\n  various income levels.\n</p>\n<img src="/images/general_services.jpg" alt="General Services" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's household income range are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, o.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, o.jsx)(n.code, {children: 'income_hh'}),
                ' property:',
              ],
            }),
            '\n',
            (0, o.jsxs)(n.table, {
              children: [
                (0, o.jsx)(n.thead, {
                  children: (0, o.jsxs)(n.tr, {
                    children: [
                      (0, o.jsx)(n.th, {children: 'Value'}),
                      (0, o.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, o.jsxs)(n.tbody, {
                  children: [
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'A. Under $10,000',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income under $10,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'B. $10,000-$19,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $10,000-$19,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'C. $20,000-$29,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $20,000-$29,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'D. $30,000-$39,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $30,000-$39,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'E. $40,000-$49,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $40,000-$49,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'F. $50,000-$59,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $50,000-$59,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'G. $60,000-$74,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $60,000-$74,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'H. $75,000-$99,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $75,000-$99,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'K. $100,000-$149,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children:
                            'Household income between $100,000-$149,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'L. $150,000-$174,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children:
                            'Household income between $150,000-$174,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'M. $175,000-$199,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children:
                            'Household income between $175,000-$199,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'N. $200,000-$249,999',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children:
                            'Household income between $200,000-$249,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'O. $250K +',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income of $250,000 and above',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, o.jsx)(n.code, {children: 'income_hh'}),
                " property allows you to personalize your landing pages based on the visitor's household income range. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, o.jsx)(n.p, {children: 'Explore more features:'}),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
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
      function a(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, o.jsx)(n, {...e, children: (0, o.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => t, x: () => d});
      var o = r(3696);
      const i = {},
        s = o.createContext(i);
      function t(e) {
        const n = o.useContext(s);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function d(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : t(e.components)),
          o.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

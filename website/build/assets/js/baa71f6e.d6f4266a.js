/*! For license information please see baa71f6e.d6f4266a.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1262],
  {
    2192: (e, n, s) => {
      var o = s(3696),
        t = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        l =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, s) {
        var o,
          i = {},
          d = null,
          a = null;
        for (o in (void 0 !== s && (d = '' + s),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          r.call(n, o) && !c.hasOwnProperty(o) && (i[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === i[o] && (i[o] = n[o]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: a,
          props: i,
          _owner: l.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, s) => {
      e.exports = s(2192);
    },
    2479: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => d,
        });
      var o = s(2540),
        t = s(3023);
      const i = {
          id: 'income-levels-property',
          title: 'Income Levels Property',
          description: 'Guide to using the income levels property',
        },
        r = 'Income Levels Property',
        l = {
          id: 'destinations/properties/income-levels-property',
          title: 'Income Levels Property',
          description: 'Guide to using the income levels property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-income-levels-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/income-levels-property',
          permalink: '/docs/destinations/properties/income-levels-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'income-levels-property',
            title: 'Income Levels Property',
            description: 'Guide to using the income levels property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Income HH Property',
            permalink: '/docs/destinations/properties/income-hh-property',
          },
          next: {
            title: 'Income Midpoints HH Property',
            permalink:
              '/docs/destinations/properties/income-midpts-hh-property',
          },
        },
        c = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
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
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.h1, {
              id: 'income-levels-property',
              children: 'Income Levels Property',
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'income_levels'}),
                " property allows you to tailor your content based on the visitor's household income levels. This guide provides an overview of how to use the ",
                (0, o.jsx)(n.code, {children: 'income_levels'}),
                ' property to create personalized experiences and includes a list of potential income level values.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'income_levels'}),
                " property can be used to display content that resonates with the visitor's income levels, making your communication more relevant and effective.",
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
                  '{{#if (eq income_levels "100K_150")}}\n<p>\n  Enjoy our premium content and services tailored for high-income\n  households.\n</p>\n<div class="exclusive-offer">\n  Exclusive offer: Get 20% off on our luxury product range!\n</div>\n{{else if (eq income_levels "30K_50K")}}\n<p>\n  Discover our affordable solutions designed to meet your budget.\n</p>\n<div class="budget-friendly">\n  Special savings: Check out our latest discounts and deals.\n</div>\n{{else if (eq income_levels "50K_74K")}}\n<p>\n  Explore our mid-range services that provide the best value for\n  your money.\n</p>\n<div class="value-deals">\n  Limited-time offer: Save 15% on our top-rated services.\n</div>\n{{else if (eq income_levels "75K_99K")}}\n<p>\n  Access our high-quality services that cater to your lifestyle\n  needs.\n</p>\n<div class="high-quality">\n  Featured service: Complimentary consultation with our experts.\n</div>\n{{else if (eq income_levels "GT_150K")}}\n<p>\n  Welcome to our elite club! Benefit from our bespoke services and\n  products.\n</p>\n<div class="elite-benefits">\n  VIP treatment: Personalized services and exclusive benefits just\n  for you.\n</div>\n{{else if (eq income_levels "LT_30K")}}\n<p>\n  Our cost-effective solutions are designed to help you make the\n  most of your income.\n</p>\n<div class="cost-effective">\n  Budget tips: Learn how to save more with our expert advice.\n</div>\n{{else}}\n<p>\n  Welcome! Discover our diverse range of products and services\n  tailored to various income levels.\n</p>\n<div class="general-offers">\n  Check out our latest offerings and find what suits you best.\n</div>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's household income levels, providing fresh ideas to enhance user engagement and conversions.",
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
                (0, o.jsx)(n.code, {children: 'income_levels'}),
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
                          children: (0, o.jsx)(n.code, {children: '100K_150'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children:
                            'Household income between $100,000-$150,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '30K_50K'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $30,000-$50,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '50K_74K'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $50,000-$74,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '75K_99K'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income between $75,000-$99,999',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: 'GT_150K'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income greater than $150,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: 'LT_30K'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income less than $30,000',
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
                (0, o.jsx)(n.code, {children: 'income_levels'}),
                " property allows you to personalize your landing pages based on the visitor's income levels. By leveraging this property, you can deliver content that resonates with different income brackets, enhancing user engagement and effectiveness.",
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
      function p(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, o.jsx)(n, {...e, children: (0, o.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, s) => {
      s.d(n, {R: () => r, x: () => l});
      var o = s(3696);
      const t = {},
        i = o.createContext(t);
      function r(e) {
        const n = o.useContext(i);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : r(e.components)),
          o.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

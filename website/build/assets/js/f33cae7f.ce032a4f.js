/*! For license information please see f33cae7f.ce032a4f.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8429],
  {
    2192: (e, n, i) => {
      var o = i(3696),
        s = Symbol.for('react.element'),
        t = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        d =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, n, i) {
        var o,
          t = {},
          l = null,
          h = null;
        for (o in (void 0 !== i && (l = '' + i),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          r.call(n, o) && !c.hasOwnProperty(o) && (t[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === t[o] && (t[o] = n[o]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: h,
          props: t,
          _owner: d.current,
        };
      }
      (n.Fragment = t), (n.jsx = l), (n.jsxs = l);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    7766: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => t,
          metadata: () => d,
          toc: () => l,
        });
      var o = i(2540),
        s = i(3023);
      const t = {
          id: 'income-midpts-hh-property',
          title: 'Income Midpoints HH Property',
          description: 'Guide to using the household income midpoints property',
        },
        r = 'Income Midpoints HH Property',
        d = {
          id: 'destinations/properties/income-midpts-hh-property',
          title: 'Income Midpoints HH Property',
          description: 'Guide to using the household income midpoints property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-income-midpts-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/income-midpts-hh-property',
          permalink: '/docs/destinations/properties/income-midpts-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'income-midpts-hh-property',
            title: 'Income Midpoints HH Property',
            description:
              'Guide to using the household income midpoints property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Income Levels Property',
            permalink: '/docs/destinations/properties/income-levels-property',
          },
          next: {
            title: 'Marital Status Property',
            permalink: '/docs/destinations/properties/marital-status-property',
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.h1, {
              id: 'income-midpoints-hh-property',
              children: 'Income Midpoints HH Property',
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'income_midpts_hh'}),
                ' property allows you to tailor your content based on the midpoint of the household income range of your visitors. This guide provides an overview of how to use the ',
                (0, o.jsx)(n.code, {children: 'income_midpts_hh'}),
                ' property to create personalized experiences and includes a list of potential income midpoint values.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'income_midpts_hh'}),
                " property can be used to display content that resonates with the visitor's household income midpoints, making your communication more relevant and effective.",
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
                  '{{#if (eq income_midpts_hh 10000)}}\n<p>\n  Our budget-friendly options are perfect for households with an\n  income of around $10,000.\n</p>\n<div class="special-offer">\n  Special Offer: Save big on essential products!\n</div>\n{{else if (eq income_midpts_hh 125000)}}\n<p>\n  Enjoy our premium services designed for households with a\n  midpoint income of $125,000.\n</p>\n<div class="exclusive-deals">\n  Exclusive Deals: Access luxury items at discounted rates.\n</div>\n{{else if (eq income_midpts_hh 300000)}}\n<p>\n  Explore our high-end products and services for households with\n  an income of $300,000.\n</p>\n<div class="luxury-offers">\n  Luxury Offers: Experience the finest quality with special\n  privileges.\n</div>\n{{else}}\n<p>\n  Welcome! Discover our range of services and products suitable\n  for various income levels.\n</p>\n<div class="general-offers">\n  Explore: Find the best deals tailored for you.\n</div>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's household income midpoints, providing fresh ideas to enhance user engagement and conversions.",
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
                (0, o.jsx)(n.code, {children: 'income_midpts_hh'}),
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
                          children: (0, o.jsx)(n.code, {children: '10000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $10,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '15000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $15,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '25000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $25,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '35000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $35,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '45000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $45,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '55000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $55,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '67500'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $67,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '87500'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $87,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '125000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $125,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '162500'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $162,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '187500'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $187,500',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '225000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $225,000',
                        }),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: '300000'}),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Household income midpoint of $300,000',
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
                (0, o.jsx)(n.code, {children: 'income_midpts_hh'}),
                " property allows you to personalize your landing pages based on the visitor's household income midpoints. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.",
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
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, o.jsx)(n, {...e, children: (0, o.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => r, x: () => d});
      var o = i(3696);
      const s = {},
        t = o.createContext(s);
      function r(e) {
        const n = o.useContext(t);
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
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          o.createElement(t.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
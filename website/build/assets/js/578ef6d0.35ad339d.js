/*! For license information please see 578ef6d0.35ad339d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9074],
  {
    2192: (e, i, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        t = Object.prototype.hasOwnProperty,
        s =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, i, n) {
        var r,
          d = {},
          l = null,
          h = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== i.key && (l = '' + i.key),
        void 0 !== i.ref && (h = i.ref),
        i))
          t.call(i, r) && !c.hasOwnProperty(r) && (d[r] = i[r]);
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === d[r] && (d[r] = i[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: h,
          props: d,
          _owner: s.current,
        };
      }
      (i.Fragment = d), (i.jsx = l), (i.jsxs = l);
    },
    2540: (e, i, n) => {
      e.exports = n(2192);
    },
    6061: (e, i, n) => {
      n.r(i),
        n.d(i, {
          assets: () => c,
          contentTitle: () => t,
          default: () => p,
          frontMatter: () => d,
          metadata: () => s,
          toc: () => l,
        });
      var r = n(2540),
        o = n(3023);
      const d = {
          id: 'premium-income-midpt-hh-property',
          title: 'Premium Income Midpoint HH Property',
          description: 'Guide to using the premium income midpoint HH property',
        },
        t = 'Premium Income Midpoint HH Property',
        s = {
          id: 'destinations/properties/premium-income-midpt-hh-property',
          title: 'Premium Income Midpoint HH Property',
          description: 'Guide to using the premium income midpoint HH property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-premium-income-midpt-hh-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/premium-income-midpt-hh-property',
          permalink:
            '/docs/destinations/properties/premium-income-midpt-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'premium-income-midpt-hh-property',
            title: 'Premium Income Midpoint HH Property',
            description:
              'Guide to using the premium income midpoint HH property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Premium Income HH Property',
            permalink:
              '/docs/destinations/properties/premium-income-hh-property',
          },
          next: {
            title: 'Religion Property',
            permalink: '/docs/destinations/properties/religion-property',
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
        const i = {
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
            (0, r.jsx)(i.h1, {
              id: 'premium-income-midpoint-hh-property',
              children: 'Premium Income Midpoint HH Property',
            }),
            '\n',
            (0, r.jsx)(i.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(i.p, {
              children: [
                'The ',
                (0, r.jsx)(i.code, {children: 'Premium_Income_Midpt_HH'}),
                ' property allows you to tailor your content based on the midpoint of the premium household income of your visitors. This guide provides an overview of how to use the ',
                (0, r.jsx)(i.code, {children: 'Premium_Income_Midpt_HH'}),
                ' property to create personalized experiences and includes a list of potential income midpoint values.',
              ],
            }),
            '\n',
            (0, r.jsx)(i.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, r.jsxs)(i.p, {
              children: [
                'The ',
                (0, r.jsx)(i.code, {children: 'Premium_Income_Midpt_HH'}),
                " property can be used to display content that resonates with the visitor's premium household income midpoint, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, r.jsx)(i.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, r.jsx)(i.p, {
              children: (0, r.jsx)(i.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, r.jsx)(i.pre, {
              children: (0, r.jsx)(i.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Premium_Income_Midpt_HH 75000)}}\n<p>Discover our premium products that match your income level.</p>\n<img src="/images/premium_products.jpg" alt="Premium Products" />\n{{else if (eq Premium_Income_Midpt_HH 3000000)}}\n<p>\n  Welcome to our ultra-luxury collection, tailored for the elite.\n</p>\n<img\n  src="/images/ultra_luxury_collection.jpg"\n  alt="Ultra Luxury Collection" />\n{{else}}\n<p>Explore our diverse range of products and services.</p>\n<img src="/images/general_offers.jpg" alt="General Offers" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(i.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's premium household income midpoint, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, r.jsx)(i.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(i.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(i.code, {children: 'Premium_Income_Midpt_HH'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(i.table, {
              children: [
                (0, r.jsx)(i.thead, {
                  children: (0, r.jsxs)(i.tr, {
                    children: [
                      (0, r.jsx)(i.th, {children: 'Value'}),
                      (0, r.jsx)(i.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(i.tbody, {
                  children: [
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '7500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '17500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '25000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '35000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '45000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '55000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '65000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '75000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '85000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '95000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '105000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '115000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '125000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '135000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '145000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '167500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '187500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '212500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '237500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '267500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '287500'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '350000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '450000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '550000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '675000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '875000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '1500000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.tr, {
                      children: [
                        (0, r.jsx)(i.td, {
                          children: (0, r.jsx)(i.code, {children: '3000000'}),
                        }),
                        (0, r.jsx)(i.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(i.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, r.jsxs)(i.p, {
              children: [
                'Using the ',
                (0, r.jsx)(i.code, {children: 'Premium_Income_Midpt_HH'}),
                " property allows you to personalize your landing pages based on the midpoint of the visitor's premium household income. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, r.jsx)(i.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, r.jsx)(i.p, {children: 'Explore more features:'}),
            '\n',
            (0, r.jsxs)(i.ul, {
              children: [
                '\n',
                (0, r.jsx)(i.li, {
                  children: (0, r.jsx)(i.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, r.jsx)(i.li, {
                  children: (0, r.jsx)(i.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, r.jsx)(i.li, {
                  children: (0, r.jsx)(i.a, {
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
        const {wrapper: i} = {...(0, o.R)(), ...e.components};
        return i
          ? (0, r.jsx)(i, {...e, children: (0, r.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, i, n) => {
      n.d(i, {R: () => t, x: () => s});
      var r = n(3696);
      const o = {},
        d = r.createContext(o);
      function t(e) {
        const i = r.useContext(d);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : {...i, ...e};
          },
          [i, e]
        );
      }
      function s(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : t(e.components)),
          r.createElement(d.Provider, {value: i}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 0cbf36c7.edb1320a.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6409],
  {
    2192: (e, n, r) => {
      var i = r(3696),
        d = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        t =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, n, r) {
        var i,
          o = {},
          l = null,
          h = null;
        for (i in (void 0 !== r && (l = '' + r),
        void 0 !== n.key && (l = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          s.call(n, i) && !c.hasOwnProperty(i) && (o[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === o[i] && (o[i] = n[i]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: h,
          props: o,
          _owner: t.current,
        };
      }
      (n.Fragment = o), (n.jsx = l), (n.jsxs = l);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    213: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => c,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => o,
          metadata: () => t,
          toc: () => l,
        });
      var i = r(2540),
        d = r(3023);
      const o = {
          id: 'premium-income-hh-property',
          title: 'Premium Income HH Property',
          description: 'Guide to using the premium income HH property',
        },
        s = 'Premium Income HH Property',
        t = {
          id: 'personalization/premium-income-hh-property',
          title: 'Premium Income HH Property',
          description: 'Guide to using the premium income HH property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-premium-income-hh-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/premium-income-hh-property',
          permalink: '/docs/personalization/premium-income-hh-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'premium-income-hh-property',
            title: 'Premium Income HH Property',
            description: 'Guide to using the premium income HH property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Political Party Property',
            permalink: '/docs/personalization/political-party-property',
          },
          next: {
            title: 'Premium Income Midpoint HH Property',
            permalink: '/docs/personalization/premium-income-midpt-hh-property',
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
          ...(0, d.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'premium-income-hh-property',
              children: 'Premium Income HH Property',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'Premium_Income_HH'}),
                ' property allows you to tailor your content based on the premium household income of your visitors. This guide provides an overview of how to use the ',
                (0, i.jsx)(n.code, {children: 'Premium_Income_HH'}),
                ' property to create personalized experiences and includes a list of potential income values.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'Premium_Income_HH'}),
                " property can be used to display content that resonates with the visitor's premium household income, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsx)(n.p, {
              children: (0, i.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Premium_Income_HH "AB. <$15K")}}\n<p>Discover our affordable products that suit your budget.</p>\n<img\n  src="/images/affordable_products.jpg"\n  alt="Affordable Products" />\n{{else if (eq Premium_Income_HH "H. $90K-$100K")}}\n<p>\n  Explore our premium range designed for higher income households.\n</p>\n<img src="/images/premium_range.jpg" alt="Premium Range" />\n{{else if (eq Premium_Income_HH "Z. $2000K+")}}\n<p>Welcome to our exclusive luxury collection.</p>\n<img\n  src="/images/luxury_collection.jpg"\n  alt="Luxury Collection" />\n{{else}}\n<p>\n  Welcome! Check out our diverse range of products and services.\n</p>\n<img src="/images/general_offers.jpg" alt="General Offers" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's premium household income, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, i.jsx)(n.code, {children: 'Premium_Income_HH'}),
                ' property:',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, {children: 'Value'}),
                      (0, i.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'AB. <$15K'}),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Household income less than $15,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'AC. $15K-$20K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $15,000 and $20,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'AD. $20K-$30K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $20,000 and $30,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'B. $30K-$40K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $30,000 and $40,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'C. $40K-$50K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $40,000 and $50,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'D. $50K-$60K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $50,000 and $60,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'E. $60K-$70K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $60,000 and $70,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'F. $70K-$80K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $70,000 and $80,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'G. $80K-$90K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $80,000 and $90,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'H. $90K-$100K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $90,000 and $100,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'I. $100K-$110K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $100,000 and $110,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'J. $110K-$120K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $110,000 and $120,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'K. $120K-$130K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $120,000 and $130,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'L. $130K-$140K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $130,000 and $140,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'M. $140K-$150K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $140,000 and $150,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'N. $150K-$175K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $150,000 and $175,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'O. $175K-$200K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $175,000 and $200,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'P. $200K-$225K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $200,000 and $225,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'Q. $225K-$250K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $225,000 and $250,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'R. $250K-$275K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $250,000 and $275,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'S. $275K-$300K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $275,000 and $300,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'T. $300K-$400K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $300,000 and $400,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'U. $400K-$500K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $400,000 and $500,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'V. $500K-$600K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $500,000 and $600,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'W. $600K-$750K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $600,000 and $750,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'X. $750K-$1000K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $750,000 and $1,000,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'Y. $1000K-$2000K',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Household income between $1,000,000 and $2,000,000',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'Z. $2000K+',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Household income greater than $2,000,000',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, i.jsx)(n.code, {children: 'Premium_Income_HH'}),
                " property allows you to personalize your landing pages based on the visitor's premium household income. By leveraging this property, you can deliver content that resonates with different income levels, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, i.jsx)(n.p, {children: 'Explore more features:'}),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, i.jsx)(n.li, {
                  children: (0, i.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, d.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => s, x: () => t});
      var i = r(3696);
      const d = {},
        o = i.createContext(d);
      function s(e) {
        const n = i.useContext(o);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function t(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(d)
              : e.components || d
            : s(e.components)),
          i.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

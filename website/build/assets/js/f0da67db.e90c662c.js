/*! For license information please see f0da67db.e90c662c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4511],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var r,
          i = {},
          d = null,
          p = null;
        for (r in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (p = n.ref),
        n))
          s.call(n, r) && !l.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: p,
          props: i,
          _owner: a.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    641: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => d,
        });
      var r = t(2540),
        o = t(3023);
      const i = {
          id: 'mortgage-loan-type-property',
          title: 'Mortgage Loan Type Property',
          description: 'Guide to using the mortgage loan type property',
        },
        s = 'Mortgage Loan Type Property',
        a = {
          id: 'personalization/mortgage-loan-type-property',
          title: 'Mortgage Loan Type Property',
          description: 'Guide to using the mortgage loan type property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-mortgage-loan-type-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/mortgage-loan-type-property',
          permalink: '/docs/personalization/mortgage-loan-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'mortgage-loan-type-property',
            title: 'Mortgage Loan Type Property',
            description: 'Guide to using the mortgage loan type property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Marital Status Property',
            permalink: '/docs/personalization/marital-status-property',
          },
          next: {
            title: 'Mortgage Refi Type Property',
            permalink: '/docs/personalization/mortgage-refi-type-property',
          },
        },
        l = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function p(e) {
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'mortgage-loan-type-property',
              children: 'Mortgage Loan Type Property',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'Mortgage_Loan_Type'}),
                ' property allows you to tailor your content based on the type of mortgage loan the visitor has. This guide provides an overview of how to use the ',
                (0, r.jsx)(n.code, {children: 'Mortgage_Loan_Type'}),
                ' property to create personalized experiences and includes a list of potential mortgage loan type values.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'Mortgage_Loan_Type'}),
                " property can be used to display content that resonates with the visitor's mortgage loan type, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Mortgage_Loan_Type "Community Development Authority")}}\n<p>\n  Take advantage of our special programs designed for Community\n  Development Authority loan holders.\n</p>\n<img\n  src="/images/community_development.jpg"\n  alt="Community Development" />\n{{else if (eq Mortgage_Loan_Type "Conventional")}}\n<p>\n  Explore our competitive rates and offers for conventional\n  mortgage holders.\n</p>\n<img\n  src="/images/conventional_mortgage.jpg"\n  alt="Conventional Mortgage" />\n{{else}}\n<p>\n  Welcome! Discover our range of services tailored to various\n  mortgage types.\n</p>\n<img src="/images/general_mortgage.jpg" alt="General Mortgage" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's mortgage loan type, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(n.code, {children: 'Mortgage_Loan_Type'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Value'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Community Development Authority',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Community Development Authority loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Conventional',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Conventional mortgage loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'FHA'}),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Federal Housing Administration (FHA) loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Private Party Lender',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Private party lender mortgage holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Small Business Administration',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children:
                            'Small Business Administration (SBA) loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'VA Loan'}),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Veterans Affairs (VA) loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'Wrap-Around Mortgage',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Wrap-around mortgage holders',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, r.jsx)(n.code, {children: 'Mortgage_Loan_Type'}),
                " property allows you to personalize your landing pages based on the visitor's mortgage loan type. By leveraging this property, you can deliver content that resonates with different mortgage types, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, r.jsx)(n.p, {children: 'Explore more features:'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => s, x: () => a});
      var r = t(3696);
      const o = {},
        i = r.createContext(o);
      function s(e) {
        const n = r.useContext(i);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

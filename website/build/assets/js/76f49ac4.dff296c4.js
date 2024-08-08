/*! For license information please see 76f49ac4.dff296c4.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4021],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var r,
          s = {},
          d = null,
          p = null;
        for (r in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          i.call(t, r) && !l.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: p,
          props: s,
          _owner: a.current,
        };
      }
      (t.Fragment = s), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4940: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => d,
        });
      var r = n(2540),
        o = n(3023);
      const s = {
          id: 'mortgage-loan-type-property',
          title: 'Mortgage Loan Type Property',
          description: 'Guide to using the mortgage loan type property',
        },
        i = 'Mortgage Loan Type Property',
        a = {
          id: 'destinations/properties/mortgage-loan-type-property',
          title: 'Mortgage Loan Type Property',
          description: 'Guide to using the mortgage loan type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-mortgage-loan-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/mortgage-loan-type-property',
          permalink:
            '/docs/destinations/properties/mortgage-loan-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'mortgage-loan-type-property',
            title: 'Mortgage Loan Type Property',
            description: 'Guide to using the mortgage loan type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Marital Status Property',
            permalink: '/docs/destinations/properties/marital-status-property',
          },
          next: {
            title: 'Mortgage Refi Type Property',
            permalink:
              '/docs/destinations/properties/mortgage-refi-type-property',
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
              id: 'mortgage-loan-type-property',
              children: 'Mortgage Loan Type Property',
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The ',
                (0, r.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
                ' property allows you to tailor your content based on the type of mortgage loan the visitor has. This guide provides an overview of how to use the ',
                (0, r.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
                ' property to create personalized experiences and includes a list of potential mortgage loan type values.',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                'The ',
                (0, r.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
                " property can be used to display content that resonates with the visitor's mortgage loan type, making your communication more relevant and effective.",
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
                  '{{#if (eq Mortgage_Loan_Type "Community Development Authority")}}\n<p>\n  Take advantage of our special programs designed for Community\n  Development Authority loan holders.\n</p>\n<img\n  src="/images/community_development.jpg"\n  alt="Community Development" />\n{{else if (eq Mortgage_Loan_Type "Conventional")}}\n<p>\n  Explore our competitive rates and offers for conventional\n  mortgage holders.\n</p>\n<img\n  src="/images/conventional_mortgage.jpg"\n  alt="Conventional Mortgage" />\n{{else}}\n<p>\n  Welcome! Discover our range of services tailored to various\n  mortgage types.\n</p>\n<img src="/images/general_mortgage.jpg" alt="General Mortgage" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's mortgage loan type, providing fresh ideas to enhance user engagement and conversions.",
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
                (0, r.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
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
                            children: 'Community Development Authority',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Community Development Authority loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'Conventional',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Conventional mortgage loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: 'FHA'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Federal Housing Administration (FHA) loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'Private Party Lender',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Private party lender mortgage holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'Small Business Administration',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children:
                            'Small Business Administration (SBA) loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {children: 'VA Loan'}),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Veterans Affairs (VA) loan holders',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          children: (0, r.jsx)(t.code, {
                            children: 'Wrap-Around Mortgage',
                          }),
                        }),
                        (0, r.jsx)(t.td, {
                          children: 'Wrap-around mortgage holders',
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
                (0, r.jsx)(t.code, {children: 'Mortgage_Loan_Type'}),
                " property allows you to personalize your landing pages based on the visitor's mortgage loan type. By leveraging this property, you can deliver content that resonates with different mortgage types, enhancing user engagement and effectiveness.",
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
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => a});
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
      function a(e) {
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

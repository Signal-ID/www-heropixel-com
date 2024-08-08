/*! For license information please see 1ceeaea3.9027512c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5607],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function p(e, t, r) {
        var n,
          o = {},
          p = null,
          d = null;
        for (n in (void 0 !== r && (p = '' + r),
        void 0 !== t.key && (p = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          a.call(t, n) && !l.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: p,
          ref: d,
          props: o,
          _owner: s.current,
        };
      }
      (t.Fragment = o), (t.jsx = p), (t.jsxs = p);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    4471: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => c,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => p,
        });
      var n = r(2540),
        i = r(3023);
      const o = {
          id: 'mortgage-refi-type-property',
          title: 'Mortgage Refi Type Property',
          description: 'Guide to using the mortgage refinance type property',
        },
        a = 'Mortgage Refi Type Property',
        s = {
          id: 'personalization/mortgage-refi-type-property',
          title: 'Mortgage Refi Type Property',
          description: 'Guide to using the mortgage refinance type property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-mortgage-refi-type-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/mortgage-refi-type-property',
          permalink: '/docs/personalization/mortgage-refi-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'mortgage-refi-type-property',
            title: 'Mortgage Refi Type Property',
            description: 'Guide to using the mortgage refinance type property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Mortgage Loan Type Property',
            permalink: '/docs/personalization/mortgage-loan-type-property',
          },
          next: {
            title: 'Net Worth HH Property',
            permalink: '/docs/personalization/net-worth-hh-property',
          },
        },
        l = {},
        p = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function d(e) {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'mortgage-refi-type-property',
              children: 'Mortgage Refi Type Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
                ' property allows you to tailor your content based on the type of mortgage refinance the visitor has. This guide provides an overview of how to use the ',
                (0, n.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
                ' property to create personalized experiences and includes a list of potential mortgage refinance type values.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
                " property can be used to display content that resonates with the visitor's mortgage refinance type, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, n.jsx)(t.p, {
              children: (0, n.jsx)(t.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Mortgage_Refi_Type "Adjustable")}}\n  <p>Learn more about how to maximize your savings with an adjustable-rate mortgage refinance.</p>\n  <img src="/images/adjustable_rate.jpg" alt="Adjustable Rate">\n{{else if (eq Mortgage_Refi_Type "Fixed")}}\n  <p>Discover the stability and predictability of a fixed-rate mortgage refinance.</p>\n  <img src="/images/fixed_rate.jpg" alt="Fixed Rate">\n{{else}}\n  <p>Welcome! Explore our range of refinancing options to suit your needs.</p>\n  <img src="/images/general_refinance.jpg" alt="General Refinance">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's mortgage refinance type, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, n.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {children: 'Value'}),
                      (0, n.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {
                            children: 'Adjustable',
                          }),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Adjustable-rate mortgage refinance',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'Fixed'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children: 'Fixed-rate mortgage refinance',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Using the ',
                (0, n.jsx)(t.code, {children: 'Mortgage_Refi_Type'}),
                " property allows you to personalize your landing pages based on the visitor's mortgage refinance type. By leveraging this property, you can deliver content that resonates with different refinance types, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, n.jsx)(t.p, {children: 'Explore more features:'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
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
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => a, x: () => s});
      var n = r(3696);
      const i = {},
        o = n.createContext(i);
      function a(e) {
        const t = n.useContext(o);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : a(e.components)),
          n.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see c25d5838.849af914.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6013],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        s = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        o =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, r) {
        var n,
          i = {},
          d = null,
          c = null;
        for (n in (void 0 !== r && (d = '' + r),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          a.call(t, n) && !l.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: o.current,
        };
      }
      (t.Fragment = i), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    832: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => d,
        });
      var n = r(2540),
        s = r(3023);
      const i = {
          id: 'marital-status-property',
          title: 'Marital Status Property',
          description: 'Guide to using the marital status property',
        },
        a = 'Marital Status Property',
        o = {
          id: 'personalization/marital-status-property',
          title: 'Marital Status Property',
          description: 'Guide to using the marital status property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-marital-status-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/marital-status-property',
          permalink: '/docs/personalization/marital-status-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'marital-status-property',
            title: 'Marital Status Property',
            description: 'Guide to using the marital status property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Income Midpoints HH Property',
            permalink: '/docs/personalization/income-midpts-hh-property',
          },
          next: {
            title: 'Mortgage Loan Type Property',
            permalink: '/docs/personalization/mortgage-loan-type-property',
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
      function c(e) {
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'marital-status-property',
              children: 'Marital Status Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'Marital_Status'}),
                " property allows you to tailor your content based on the visitor's marital status. This guide provides an overview of how to use the ",
                (0, n.jsx)(t.code, {children: 'Marital_Status'}),
                ' property to create personalized experiences and includes a list of potential marital status values.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'Marital_Status'}),
                " property can be used to display content that resonates with the visitor's marital status, making your communication more relevant and effective.",
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
                  '{{#if (eq Marital_Status "Married")}}\n<p>\n  Enjoy our special offers for married couples. Plan a romantic\n  getaway with exclusive discounts!\n</p>\n<img src="/images/married_couples.jpg" alt="Married Couples" />\n{{else if (eq Marital_Status "Single")}}\n<p>\n  Explore our exciting deals and opportunities for singles.\n  Discover new adventures and make the most of your single life.\n</p>\n<img src="/images/singles.jpg" alt="Singles" />\n{{else}}\n<p>\n  Welcome! Discover our range of services and products tailored to\n  various lifestyles.\n</p>\n<img src="/images/general_offers.jpg" alt="General Offers" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's marital status, providing fresh ideas to enhance user engagement and conversions.",
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
                (0, n.jsx)(t.code, {children: 'Marital_Status'}),
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
                          children: (0, n.jsx)(t.code, {children: 'Married'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Visitor is married'}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'Single'}),
                        }),
                        (0, n.jsx)(t.td, {children: 'Visitor is single'}),
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
                (0, n.jsx)(t.code, {children: 'Marital_Status'}),
                " property allows you to personalize your landing pages based on the visitor's marital status. By leveraging this property, you can deliver content that resonates with different marital statuses, enhancing user engagement and effectiveness.",
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
      function p(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => a, x: () => o});
      var n = r(3696);
      const s = {},
        i = n.createContext(s);
      function a(e) {
        const t = n.useContext(i);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function o(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : a(e.components)),
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
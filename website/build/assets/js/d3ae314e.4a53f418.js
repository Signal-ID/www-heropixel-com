/*! For license information please see d3ae314e.4a53f418.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3947],
  {
    2192: (e, r, t) => {
      var n = t(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        d =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, r, t) {
        var n,
          s = {},
          a = null,
          l = null;
        for (n in (void 0 !== t && (a = '' + t),
        void 0 !== r.key && (a = '' + r.key),
        void 0 !== r.ref && (l = r.ref),
        r))
          o.call(r, n) && !c.hasOwnProperty(n) && (s[n] = r[n]);
        if (e && e.defaultProps)
          for (n in (r = e.defaultProps)) void 0 === s[n] && (s[n] = r[n]);
        return {
          $$typeof: i,
          type: e,
          key: a,
          ref: l,
          props: s,
          _owner: d.current,
        };
      }
      (r.Fragment = s), (r.jsx = a), (r.jsxs = a);
    },
    2540: (e, r, t) => {
      e.exports = t(2192);
    },
    1700: (e, r, t) => {
      t.r(r),
        t.d(r, {
          assets: () => c,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => a,
        });
      var n = t(2540),
        i = t(3023);
      const s = {
          id: 'credit-range-property',
          title: 'Credit Range Property',
          description: 'Guide to using the credit range property',
        },
        o = 'Credit Range Property',
        d = {
          id: 'personalization/credit-range-property',
          title: 'Credit Range Property',
          description: 'Guide to using the credit range property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-credit-range-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/credit-range-property',
          permalink: '/docs/personalization/credit-range-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'credit-range-property',
            title: 'Credit Range Property',
            description: 'Guide to using the credit range property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Ethnicity Detail Property',
            permalink: '/docs/personalization/ethnicity-detail-property',
          },
          next: {
            title: 'Credit Midpoints Property',
            permalink: '/docs/personalization/credit-midpts-property',
          },
        },
        c = {},
        a = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function l(e) {
        const r = {
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
            (0, n.jsx)(r.h1, {
              id: 'credit-range-property',
              children: 'Credit Range Property',
            }),
            '\n',
            (0, n.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(r.p, {
              children: [
                'The ',
                (0, n.jsx)(r.code, {children: 'credit_range'}),
                ' property allows you to tailor your content based on the credit score range of your visitors. This guide provides an overview of how to use the ',
                (0, n.jsx)(r.code, {children: 'credit_range'}),
                ' property to create personalized experiences and includes a list of potential credit range values.',
              ],
            }),
            '\n',
            (0, n.jsx)(r.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, n.jsxs)(r.p, {
              children: [
                'The ',
                (0, n.jsx)(r.code, {children: 'credit_range'}),
                " property can be used to display content that resonates with the visitor's credit score range, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, n.jsx)(r.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, n.jsx)(r.p, {
              children: (0, n.jsx)(r.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, n.jsx)(r.pre, {
              children: (0, n.jsx)(r.code, {
                className: 'language-html',
                children:
                  '{{#if (eq credit_range "A. 800+")}}\n  <p>Congratulations! You qualify for our best interest rates and premium offers.</p>\n  <img src="/images/premium_offers.jpg" alt="Premium Offers">\n{{else if (eq credit_range "D. 650-699")}}\n  <p>Explore our competitive offers designed for your credit range.</p>\n  <img src="/images/competitive_offers.jpg" alt="Competitive Offers">\n{{else if (eq credit_range "H. 499 & Less")}}\n  <p>We have special programs to help you improve your credit score. Learn more!</p>\n  <img src="/images/improve_credit.jpg" alt="Improve Credit">\n{{else}}\n  <p>Check out our various offers tailored to different credit ranges.</p>\n  <img src="/images/general_offers.jpg" alt="General Offers">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(r.p, {
              children:
                "In this example, a message and image relevant to the visitor's credit score range are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, n.jsx)(r.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, n.jsxs)(r.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, n.jsx)(r.code, {children: 'credit_range'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(r.table, {
              children: [
                (0, n.jsx)(r.thead, {
                  children: (0, n.jsxs)(r.tr, {
                    children: [
                      (0, n.jsx)(r.th, {children: 'Value'}),
                      (0, n.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(r.tbody, {
                  children: [
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {children: 'A. 800+'}),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score of 800 and above',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'B. 750-799',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score between 750-799',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'C. 700-749',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score between 700-749',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'D. 650-699',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score between 650-699',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'E. 600-649',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score between 600-649',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'F. 550-599',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score between 550-599',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'G. 500-549',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score between 500-549',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(r.tr, {
                      children: [
                        (0, n.jsx)(r.td, {
                          children: (0, n.jsx)(r.code, {
                            children: 'H. 499 & Less',
                          }),
                        }),
                        (0, n.jsx)(r.td, {
                          children: 'Credit score of 499 and below',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(r.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, n.jsxs)(r.p, {
              children: [
                'Using the ',
                (0, n.jsx)(r.code, {children: 'credit_range'}),
                " property allows you to personalize your landing pages based on the visitor's credit score range. By leveraging this property, you can deliver content that resonates with different credit ranges, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, n.jsx)(r.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, n.jsx)(r.p, {children: 'Explore more features:'}),
            '\n',
            (0, n.jsxs)(r.ul, {
              children: [
                '\n',
                (0, n.jsx)(r.li, {
                  children: (0, n.jsx)(r.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, n.jsx)(r.li, {
                  children: (0, n.jsx)(r.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, n.jsx)(r.li, {
                  children: (0, n.jsx)(r.a, {
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
        const {wrapper: r} = {...(0, i.R)(), ...e.components};
        return r
          ? (0, n.jsx)(r, {...e, children: (0, n.jsx)(l, {...e})})
          : l(e);
      }
    },
    3023: (e, r, t) => {
      t.d(r, {R: () => o, x: () => d});
      var n = t(3696);
      const i = {},
        s = n.createContext(i);
      function o(e) {
        const r = n.useContext(s);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function d(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          n.createElement(s.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

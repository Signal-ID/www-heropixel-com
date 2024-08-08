/*! For license information please see e1c11060.5c99d787.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3612],
  {
    2192: (e, i, r) => {
      var t = r(3696),
        n = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        d =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, i, r) {
        var t,
          s = {},
          l = null,
          a = null;
        for (t in (void 0 !== r && (l = '' + r),
        void 0 !== i.key && (l = '' + i.key),
        void 0 !== i.ref && (a = i.ref),
        i))
          o.call(i, t) && !c.hasOwnProperty(t) && (s[t] = i[t]);
        if (e && e.defaultProps)
          for (t in (i = e.defaultProps)) void 0 === s[t] && (s[t] = i[t]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: a,
          props: s,
          _owner: d.current,
        };
      }
      (i.Fragment = s), (i.jsx = l), (i.jsxs = l);
    },
    2540: (e, i, r) => {
      e.exports = r(2192);
    },
    626: (e, i, r) => {
      r.r(i),
        r.d(i, {
          assets: () => c,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => l,
        });
      var t = r(2540),
        n = r(3023);
      const s = {
          id: 'credit-midpts-property',
          title: 'Credit Midpoints Property',
          description: 'Guide to using the credit midpoints property',
        },
        o = 'Credit Midpoints Property',
        d = {
          id: 'personalization/credit-midpts-property',
          title: 'Credit Midpoints Property',
          description: 'Guide to using the credit midpoints property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-credit-midpts-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/credit-midpts-property',
          permalink: '/docs/personalization/credit-midpts-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'credit-midpts-property',
            title: 'Credit Midpoints Property',
            description: 'Guide to using the credit midpoints property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Credit Range Property',
            permalink: '/docs/personalization/credit-range-property',
          },
          next: {
            title: 'Home Owner Property',
            permalink: '/docs/personalization/home-owner-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Legal Disclaimer', id: 'legal-disclaimer', level: 2},
          {
            value: 'What is Credit Midpoints?',
            id: 'what-is-credit-midpoints',
            level: 2,
          },
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
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
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.h1, {
              id: 'credit-midpoints-property',
              children: 'Credit Midpoints Property',
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'The ',
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                " property allows you to tailor your content based on the midpoint of the visitor's credit score range. This guide provides an overview of how to use the ",
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                ' property to create personalized experiences and includes a list of potential credit midpoint values.',
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {
              id: 'legal-disclaimer',
              children: 'Legal Disclaimer',
            }),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                "Federal law prohibits the use of this data to determine an individual's creditworthiness. The ",
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                " property provides an approximate midpoint of a visitor's credit score range and is not an exact score. It should be used only for personalization purposes to enhance user engagement and not for any credit-related decisions.",
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {
              id: 'what-is-credit-midpoints',
              children: 'What is Credit Midpoints?',
            }),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'In the context of Acxiom data, the ',
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                " property represents the midpoint of the visitor's credit score range. This helps you understand the visitor's creditworthiness and tailor your content accordingly.",
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'The ',
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                " property can be used to display content that resonates with the visitor's credit score midpoint, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, t.jsx)(i.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, t.jsx)(i.p, {
              children: (0, t.jsx)(i.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, t.jsx)(i.pre, {
              children: (0, t.jsx)(i.code, {
                className: 'language-html',
                children:
                  '{{#if (eq credit_midpts 800)}}\n  <p>Congratulations! You qualify for our best interest rates and premium offers.</p>\n  <img src="/images/premium_offers.jpg" alt="Premium Offers">\n{{else if (eq credit_midpts 675)}}\n  <p>Explore our competitive offers designed for your credit range.</p>\n  <img src="/images/competitive_offers.jpg" alt="Competitive Offers">\n{{else if (eq credit_midpts 450)}}\n  <p>We have special programs to help you improve your credit score. Learn more!</p>\n  <img src="/images/improve_credit.jpg" alt="Improve Credit">\n{{else}}\n  <p>Check out our various offers tailored to different credit ranges.</p>\n  <img src="/images/general_offers.jpg" alt="General Offers">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(i.p, {
              children:
                "In this example, a message and image relevant to the visitor's credit score midpoint are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, t.jsx)(i.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'The following table lists the valid values for the ',
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                ' property:',
              ],
            }),
            '\n',
            (0, t.jsxs)(i.table, {
              children: [
                (0, t.jsx)(i.thead, {
                  children: (0, t.jsxs)(i.tr, {
                    children: [
                      (0, t.jsx)(i.th, {children: 'Value'}),
                      (0, t.jsx)(i.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(i.tbody, {
                  children: [
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '0'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'No credit score available',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '450'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 450',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '525'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 525',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '575'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 575',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '625'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 625',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '675'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 675',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '725'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 725',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '775'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 775',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: '800'}),
                        }),
                        (0, t.jsx)(i.td, {
                          children: 'Midpoint credit score of 800',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'Using the ',
                (0, t.jsx)(i.code, {children: 'credit_midpts'}),
                " property allows you to personalize your landing pages based on the visitor's credit score midpoint. By leveraging this property, you can deliver content that resonates with different credit scores, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, t.jsx)(i.p, {children: 'Explore more features:'}),
            '\n',
            (0, t.jsxs)(i.ul, {
              children: [
                '\n',
                (0, t.jsx)(i.li, {
                  children: (0, t.jsx)(i.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, t.jsx)(i.li, {
                  children: (0, t.jsx)(i.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, t.jsx)(i.li, {
                  children: (0, t.jsx)(i.a, {
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
        const {wrapper: i} = {...(0, n.R)(), ...e.components};
        return i
          ? (0, t.jsx)(i, {...e, children: (0, t.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, i, r) => {
      r.d(i, {R: () => o, x: () => d});
      var t = r(3696);
      const n = {},
        s = t.createContext(n);
      function o(e) {
        const i = t.useContext(s);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : {...i, ...e};
          },
          [i, e]
        );
      }
      function d(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : o(e.components)),
          t.createElement(s.Provider, {value: i}, e.children)
        );
      }
    },
  },
]);

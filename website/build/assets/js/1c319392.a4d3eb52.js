/*! For license information please see 1c319392.a4d3eb52.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5130],
  {
    2192: (e, n, r) => {
      var t = r(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        s =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, r) {
        var t,
          o = {},
          d = null,
          c = null;
        for (t in (void 0 !== r && (d = '' + r),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          a.call(n, t) && !l.hasOwnProperty(t) && (o[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === o[t] && (o[t] = n[t]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: c,
          props: o,
          _owner: s.current,
        };
      }
      (n.Fragment = o), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    9125: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => d,
        });
      var t = r(2540),
        i = r(3023);
      const o = {
          id: 'generation-ordinal-property',
          title: 'Generation Ordinal Property',
          description: 'Guide to using the generation ordinal property',
        },
        a = 'Generation Ordinal Property',
        s = {
          id: 'personalization/generation-ordinal-property',
          title: 'Generation Ordinal Property',
          description: 'Guide to using the generation ordinal property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-generation-ordinal-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/generation-ordinal-property',
          permalink: '/docs/personalization/generation-ordinal-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'generation-ordinal-property',
            title: 'Generation Ordinal Property',
            description: 'Guide to using the generation ordinal property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Education Ordinal Property',
            permalink: '/docs/personalization/education-ordinal-property',
          },
          next: {
            title: 'Ethnicity Detail Property',
            permalink: '/docs/personalization/ethnicity-detail-property',
          },
        },
        l = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {
            value: 'What is Generation Ordinal?',
            id: 'what-is-generation-ordinal',
            level: 2,
          },
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function c(e) {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'generation-ordinal-property',
              children: 'Generation Ordinal Property',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, {children: 'generation_ordinal'}),
                ' property allows you to tailor your content based on the generational cohort of your visitors, as quantified by a numerical scale. This guide provides an overview of how to use the ',
                (0, t.jsx)(n.code, {children: 'generation_ordinal'}),
                ' property to create personalized experiences and includes a list of potential values.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'what-is-generation-ordinal',
              children: 'What is Generation Ordinal?',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'In the context of Acxiom data, the ',
                (0, t.jsx)(n.code, {children: 'generation_ordinal'}),
                " property represents the visitor's generational cohort using a numerical scale. Each value corresponds to a specific generation, helping you understand the visitor's age group and tailor your content accordingly.",
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, {children: 'generation_ordinal'}),
                " property can be used to display content that resonates with the visitor's generational cohort, helping to build trust and rapport.",
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq generation_ordinal 3)}}\n<p>\n  Thank you for being a loyal customer since the early days. We\n  appreciate your continued support!\n</p>\n<img src="/images/baby_boomers.jpg" alt="Baby Boomers" />\n{{else if (eq generation_ordinal 2)}}\n<p>\n  As a member of Generation X, your experience and insights are\n  invaluable to us. Thank you for being with us!\n</p>\n<img src="/images/generation_x.jpg" alt="Generation X" />\n{{else if (eq generation_ordinal 4)}}\n<p>\n  We honor the wisdom and contributions of the Post-WWII\n  generation. Your legacy inspires us every day.\n</p>\n<img src="/images/post_wwii.jpg" alt="Post-WWII Generation" />\n{{else if (eq generation_ordinal 1)}}\n<p>\n  Welcome, future leaders! Your innovative spirit and energy drive\n  us to create better solutions for tomorrow.\n</p>\n<img\n  src="/images/millennials_gen_z.jpg"\n  alt="Millennials and Gen Z" />\n{{else}}\n<p>\n  Welcome! We value your unique perspective and are glad to have\n  you with us.\n</p>\n<img src="/images/general_welcome.jpg" alt="General Welcome" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's generational cohort are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, t.jsx)(n.code, {children: 'generation_ordinal'}),
                ' property:',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, {children: 'Value'}),
                      (0, t.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: '3'}),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Baby Boomers (1943-1960)',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: '2'}),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Generation X (1961-1981)',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: '4'}),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Post-WWII (1942 and before)',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: '1'}),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Millennials and Gen Z (1982 and after)',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: '0'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'Other'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, t.jsx)(n.code, {children: 'generation_ordinal'}),
                " property allows you to personalize your landing pages based on the visitor's generational cohort, as quantified by a numerical scale. By leveraging this property, you can deliver content that resonates with different generations, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, t.jsx)(n.p, {children: 'Explore more features:'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children: (0, t.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children: (0, t.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children: (0, t.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => a, x: () => s});
      var t = r(3696);
      const i = {},
        o = t.createContext(i);
      function a(e) {
        const n = t.useContext(o);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : a(e.components)),
          t.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

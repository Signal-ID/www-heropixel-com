/*! For license information please see 8f75a8e3.9217103a.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8214],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        o = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function s(e, n, t) {
        var i,
          r = {},
          s = null,
          c = null;
        for (i in (void 0 !== t && (s = '' + t),
        void 0 !== n.key && (s = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          l.call(n, i) && !d.hasOwnProperty(i) && (r[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === r[i] && (r[i] = n[i]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: r,
          _owner: a.current,
        };
      }
      (n.Fragment = r), (n.jsx = s), (n.jsxs = s);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    8267: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => s,
        });
      var i = t(2540),
        o = t(3023);
      const r = {
          id: 'education-ordinal-property',
          title: 'Education Ordinal Property',
          description: 'Guide to using the education ordinal property',
        },
        l = 'Education Ordinal Property',
        a = {
          id: 'personalization/education-ordinal-property',
          title: 'Education Ordinal Property',
          description: 'Guide to using the education ordinal property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-education-ordinal.md',
          sourceDirName: 'personalization',
          slug: '/personalization/education-ordinal-property',
          permalink: '/docs/personalization/education-ordinal-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'education-ordinal-property',
            title: 'Education Ordinal Property',
            description: 'Guide to using the education ordinal property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Education Property',
            permalink: '/docs/personalization/education-property',
          },
          next: {
            title: 'Generation Ordinal Property',
            permalink: '/docs/personalization/generation-ordinal-property',
          },
        },
        d = {},
        s = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {
            value: 'What is Education Ordinal?',
            id: 'what-is-education-ordinal',
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'education-ordinal-property',
              children: 'Education Ordinal Property',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'education_ordinal'}),
                " property allows you to tailor your content based on the visitor's educational attainment level, as quantified by a numerical scale. This guide provides an overview of how to use the ",
                (0, i.jsx)(n.code, {children: 'education_ordinal'}),
                ' property to create personalized experiences and includes a list of potential values.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'what-is-education-ordinal',
              children: 'What is Education Ordinal?',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'In the context of our data, the ',
                (0, i.jsx)(n.code, {children: 'education_ordinal'}),
                " property represents the visitor's highest level of education using a numerical scale. Each value corresponds to a specific level of educational attainment.",
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'education_ordinal'}),
                " property can be used to display content that resonates with the visitor's educational level, making your communication more relevant and effective.",
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
                  '{{#if (eq education_ordinal 5)}}\n<p>\n  Thank you for completing college! We have specialized content to\n  support your ongoing professional journey.\n</p>\n<img\n  src="/images/completed_college.jpg"\n  alt="Completed College" />\n{{else if (eq education_ordinal 3)}}\n<p>\n  Thank you for joining us! Explore our resources tailored for\n  high school graduates like you.\n</p>\n<img\n  src="/images/completed_high_school.jpg"\n  alt="Completed High School" />\n{{else}}\n<p>\n  Welcome! We offer a wide range of content to suit various\n  educational backgrounds.\n</p>\n<img\n  src="/images/general_education.jpg"\n  alt="General Education" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's educational level are displayed, helping to create a more personalized and engaging experience.",
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
                (0, i.jsx)(n.code, {children: 'education_ordinal'}),
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
                          children: (0, i.jsx)(n.code, {children: '5'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Completed College'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '3'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Completed High School'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '6'}),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Completed Graduate School',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '2'}),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Attended Vocational/Technical',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '4'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Some College'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '0'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Some High School'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '1'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Doctorate/PhD or Above'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '7'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Other'}),
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
                (0, i.jsx)(n.code, {children: 'education_ordinal'}),
                " property allows you to personalize your landing pages based on the visitor's educational level, as quantified by a numerical scale. By leveraging this property, you can deliver content that resonates with different educational levels, enhancing user engagement and effectiveness.",
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
      function h(e = {}) {
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => l, x: () => a});
      var i = t(3696);
      const o = {},
        r = i.createContext(o);
      function l(e) {
        const n = i.useContext(r);
        return i.useMemo(
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
            : l(e.components)),
          i.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

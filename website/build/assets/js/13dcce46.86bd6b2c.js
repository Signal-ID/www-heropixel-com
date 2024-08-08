/*! For license information please see 13dcce46.86bd6b2c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1630],
  {
    2192: (e, n, o) => {
      var t = o(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, o) {
        var t,
          i = {},
          d = null,
          c = null;
        for (t in (void 0 !== o && (d = '' + o),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          s.call(n, t) && !a.hasOwnProperty(t) && (i[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === i[t] && (i[t] = n[t]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: l.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, o) => {
      e.exports = o(2192);
    },
    7845: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => a,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => d,
        });
      var t = o(2540),
        r = o(3023);
      const i = {
          id: 'education-property',
          title: 'Education Property',
          description: 'Guide to using the education property',
        },
        s = 'Education Property',
        l = {
          id: 'personalization/education-property',
          title: 'Education Property',
          description: 'Guide to using the education property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-education-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/education-property',
          permalink: '/docs/personalization/education-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'education-property',
            title: 'Education Property',
            description: 'Guide to using the education property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Generation Property',
            permalink: '/docs/personalization/hero-generation-property',
          },
          next: {
            title: 'Education Ordinal Property',
            permalink: '/docs/personalization/education-ordinal-property',
          },
        },
        a = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
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
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'education-property',
              children: 'Education Property',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, {children: 'education'}),
                ' property allows you to tailor your content based on the educational background of your visitors. This guide provides an overview of how to use the ',
                (0, t.jsx)(n.code, {children: 'education'}),
                ' property to create personalized experiences and includes a list of potential education values.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, {children: 'education'}),
                " property can be used to display content that resonates with the visitor's educational background, making your communication more relevant and effective.",
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
                  '{{#if (eq education "Completed College")}}\n<p>\n  Congratulations on completing your college degree! We have\n  specialized content to support your ongoing professional\n  journey.\n</p>\n<img\n  src="/images/completed_college.jpg"\n  alt="Completed College" />\n{{else if (eq education "Completed High School")}}\n<p>\n  Thank you for joining us! Explore our resources tailored for\n  high school graduates like you.\n</p>\n<img\n  src="/images/completed_high_school.jpg"\n  alt="Completed High School" />\n{{else if (eq education "Doctorate/PhD or Above")}}\n<p>\n  With a PhD or higher, your expertise is invaluable. Access our\n  exclusive content for top-tier professionals.\n</p>\n<img\n  src="/images/doctorate_phd.jpg"\n  alt="Doctorate/PhD or Above" />\n{{else}}\n<p>\n  Welcome! We offer a wide range of content to suit various\n  educational backgrounds.\n</p>\n<img\n  src="/images/general_education.jpg"\n  alt="General Education" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's educational background are displayed, helping to create a more personalized and engaging experience.",
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
                (0, t.jsx)(n.code, {children: 'education'}),
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
                          children: (0, t.jsx)(n.code, {
                            children: 'Completed College',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Visitor has completed a college degree',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: 'Completed High School',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Visitor has completed high school',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: 'Completed Graduate School',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Visitor has completed graduate school',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: 'Attended Vocational/Technical',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children:
                            'Visitor has attended vocational or technical school',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: 'Some College',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Visitor has attended some college',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: 'Some High School',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Visitor has attended some high school',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: 'Doctorate/PhD or Above',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Visitor has a Doctorate/PhD or higher',
                        }),
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
                (0, t.jsx)(n.code, {children: 'education'}),
                " property allows you to personalize your landing pages based on the visitor's educational background. By leveraging this property, you can deliver content that resonates with different educational levels, enhancing user engagement and effectiveness.",
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
      function h(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, o) => {
      o.d(n, {R: () => s, x: () => l});
      var t = o(3696);
      const r = {},
        i = t.createContext(r);
      function s(e) {
        const n = t.useContext(i);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          t.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

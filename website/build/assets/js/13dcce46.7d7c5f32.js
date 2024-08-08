/*! For license information please see 13dcce46.7d7c5f32.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1630],
  {
    2192: (e, o, t) => {
      var n = t(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, o, t) {
        var n,
          i = {},
          d = null,
          c = null;
        for (n in (void 0 !== t && (d = '' + t),
        void 0 !== o.key && (d = '' + o.key),
        void 0 !== o.ref && (c = o.ref),
        o))
          s.call(o, n) && !a.hasOwnProperty(n) && (i[n] = o[n]);
        if (e && e.defaultProps)
          for (n in (o = e.defaultProps)) void 0 === i[n] && (i[n] = o[n]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: l.current,
        };
      }
      (o.Fragment = i), (o.jsx = d), (o.jsxs = d);
    },
    2540: (e, o, t) => {
      e.exports = t(2192);
    },
    7845: (e, o, t) => {
      t.r(o),
        t.d(o, {
          assets: () => a,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => d,
        });
      var n = t(2540),
        r = t(3023);
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
        const o = {
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
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.h1, {
              id: 'education-property',
              children: 'Education Property',
            }),
            '\n',
            (0, n.jsx)(o.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(o.p, {
              children: [
                'The ',
                (0, n.jsx)(o.code, {children: 'education'}),
                ' property allows you to tailor your content based on the educational background of your visitors. This guide provides an overview of how to use the ',
                (0, n.jsx)(o.code, {children: 'education'}),
                ' property to create personalized experiences and includes a list of potential education values.',
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, n.jsxs)(o.p, {
              children: [
                'The ',
                (0, n.jsx)(o.code, {children: 'education'}),
                " property can be used to display content that resonates with the visitor's educational background, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, n.jsx)(o.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, n.jsx)(o.p, {
              children: (0, n.jsx)(o.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, n.jsx)(o.pre, {
              children: (0, n.jsx)(o.code, {
                className: 'language-html',
                children:
                  '{{#if (eq education "Completed College")}}\n  <p>Congratulations on completing your college degree! We have specialized content to support your ongoing professional journey.</p>\n  <img src="/images/completed_college.jpg" alt="Completed College">\n{{else if (eq education "Completed High School")}}\n  <p>Thank you for joining us! Explore our resources tailored for high school graduates like you.</p>\n  <img src="/images/completed_high_school.jpg" alt="Completed High School">\n{{else if (eq education "Doctorate/PhD or Above")}}\n  <p>With a PhD or higher, your expertise is invaluable. Access our exclusive content for top-tier professionals.</p>\n  <img src="/images/doctorate_phd.jpg" alt="Doctorate/PhD or Above">\n{{else}}\n  <p>Welcome! We offer a wide range of content to suit various educational backgrounds.</p>\n  <img src="/images/general_education.jpg" alt="General Education">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(o.p, {
              children:
                "In this example, a message and image relevant to the visitor's educational background are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, n.jsx)(o.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, n.jsxs)(o.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, n.jsx)(o.code, {children: 'education'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(o.table, {
              children: [
                (0, n.jsx)(o.thead, {
                  children: (0, n.jsxs)(o.tr, {
                    children: [
                      (0, n.jsx)(o.th, {children: 'Value'}),
                      (0, n.jsx)(o.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(o.tbody, {
                  children: [
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Completed College',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children: 'Visitor has completed a college degree',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Completed High School',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children: 'Visitor has completed high school',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Completed Graduate School',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children: 'Visitor has completed graduate school',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Attended Vocational/Technical',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children:
                            'Visitor has attended vocational or technical school',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Some College',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children: 'Visitor has attended some college',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Some High School',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children: 'Visitor has attended some high school',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(o.tr, {
                      children: [
                        (0, n.jsx)(o.td, {
                          children: (0, n.jsx)(o.code, {
                            children: 'Doctorate/PhD or Above',
                          }),
                        }),
                        (0, n.jsx)(o.td, {
                          children: 'Visitor has a Doctorate/PhD or higher',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, n.jsxs)(o.p, {
              children: [
                'Using the ',
                (0, n.jsx)(o.code, {children: 'education'}),
                " property allows you to personalize your landing pages based on the visitor's educational background. By leveraging this property, you can deliver content that resonates with different educational levels, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, n.jsx)(o.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, n.jsx)(o.p, {children: 'Explore more features:'}),
            '\n',
            (0, n.jsxs)(o.ul, {
              children: [
                '\n',
                (0, n.jsx)(o.li, {
                  children: (0, n.jsx)(o.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, n.jsx)(o.li, {
                  children: (0, n.jsx)(o.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, n.jsx)(o.li, {
                  children: (0, n.jsx)(o.a, {
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
        const {wrapper: o} = {...(0, r.R)(), ...e.components};
        return o
          ? (0, n.jsx)(o, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, o, t) => {
      t.d(o, {R: () => s, x: () => l});
      var n = t(3696);
      const r = {},
        i = n.createContext(r);
      function s(e) {
        const o = n.useContext(i);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : {...o, ...e};
          },
          [o, e]
        );
      }
      function l(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          n.createElement(i.Provider, {value: o}, e.children)
        );
      }
    },
  },
]);

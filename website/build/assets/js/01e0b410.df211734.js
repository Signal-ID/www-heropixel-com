/*! For license information please see 01e0b410.df211734.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3360],
  {
    2192: (e, n, r) => {
      var t = r(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        s =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, r) {
        var t,
          i = {},
          d = null,
          c = null;
        for (t in (void 0 !== r && (d = '' + r),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          a.call(n, t) && !l.hasOwnProperty(t) && (i[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === i[t] && (i[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: s.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    2821: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => d,
        });
      var t = r(2540),
        o = r(3023);
      const i = {
          id: 'hero-generation-property',
          title: 'Generation Property',
          description:
            'Guide to using the generation property in Hero Dynamic Text',
        },
        a = 'Generation Property',
        s = {
          id: 'personalization/hero-generation-property',
          title: 'Generation Property',
          description:
            'Guide to using the generation property in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-generation-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/hero-generation-property',
          permalink: '/docs/personalization/hero-generation-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'hero-generation-property',
            title: 'Generation Property',
            description:
              'Guide to using the generation property in Hero Dynamic Text',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Ethnic Group Property',
            permalink: '/docs/personalization/hero-ethnic-group-property',
          },
          next: {
            title: 'Education Property',
            permalink: '/docs/personalization/education-property',
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
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'generation-property',
              children: 'Generation Property',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, {children: 'generation'}),
                ' property in Hero Dynamic Text allows you to tailor your content to the generational background of your visitors. This guide provides an overview of how to use the ',
                (0, t.jsx)(n.code, {children: 'generation'}),
                ' property to create personalized experiences and includes a list of potential generation values.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The ',
                (0, t.jsx)(n.code, {children: 'generation'}),
                " property can be used to display content that resonates with the visitor's generational background, helping to build trust and rapport.",
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
                  '{{#if (eq generation "3. Baby Boomers (1943-1960)")}}\n  <p>Thank you for being a loyal customer since the early days. We appreciate your continued support!</p>\n  <img src="/images/baby_boomers.jpg" alt="Baby Boomers">\n{{else if (eq generation "2. Generation X (1961-1981)")}}\n  <p>As a member of Generation X, your experience and insights are invaluable to us. Thank you for being with us!</p>\n  <img src="/images/generation_x.jpg" alt="Generation X">\n{{else if (eq generation "4. Post-WWII (1942 and before)")}}\n  <p>We honor the wisdom and contributions of the Post-WWII generation. Your legacy inspires us every day.</p>\n  <img src="/images/post_wwii.jpg" alt="Post-WWII Generation">\n{{else if (eq generation "1. Millennials and Gen Z (1982 and after)")}}\n  <p>Welcome, future leaders! Your innovative spirit and energy drive us to create better solutions for tomorrow.</p>\n  <img src="/images/millennials_gen_z.jpg" alt="Millennials and Gen Z">\n{{else}}\n  <p>Welcome! We value your unique perspective and are glad to have you with us.</p>\n  <img src="/images/general_welcome.jpg" alt="General Welcome">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's generation are displayed, helping to build trust and rapport with personalized content.",
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
                (0, t.jsx)(n.code, {children: 'generation'}),
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
                            children:
                              '1. Millennials and Gen Z (1982 and after)',
                          }),
                        }),
                        (0, t.jsx)(n.td, {children: 'Born in 1982 and after'}),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: '2. Generation X (1961-1981)',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Born between 1961 and 1981',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: '3. Baby Boomers (1943-1960)',
                          }),
                        }),
                        (0, t.jsx)(n.td, {
                          children: 'Born between 1943 and 1960',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {
                            children: '4. Post-WWII (1942 and before)',
                          }),
                        }),
                        (0, t.jsx)(n.td, {children: 'Born in 1942 and before'}),
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
                (0, t.jsx)(n.code, {children: 'generation'}),
                " property in Hero Dynamic Text allows you to personalize your landing pages based on the visitor's generational background. By leveraging this property, you can deliver content that resonates with different generations, helping to build trust and rapport with your audience.",
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Explore more features of Hero Dynamic Text:',
            }),
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
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => a, x: () => s});
      var t = r(3696);
      const o = {},
        i = t.createContext(o);
      function a(e) {
        const n = t.useContext(i);
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
              ? e.components(o)
              : e.components || o
            : a(e.components)),
          t.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see 7a36d731.9a924e35.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [387],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var r,
          i = {},
          d = null,
          c = null;
        for (r in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          s.call(n, r) && !l.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: a.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    1160: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => d,
        });
      var r = t(2540),
        o = t(3023);
      const i = {
          id: 'hero-generation-property',
          title: 'Generation Property',
          description:
            'Guide to using the generation property in Hero Dynamic Text',
        },
        s = 'Generation Property',
        a = {
          id: 'destinations/properties/hero-generation-property',
          title: 'Generation Property',
          description:
            'Guide to using the generation property in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-generation-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/hero-generation-property',
          permalink: '/docs/destinations/properties/hero-generation-property',
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
          sidebar: 'integrations',
          previous: {
            title: 'Ethnic Group Property',
            permalink:
              '/docs/destinations/properties/hero-ethnic-group-property',
          },
          next: {
            title: 'Education Property',
            permalink: '/docs/destinations/properties/education-property',
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'generation-property',
              children: 'Generation Property',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'generation'}),
                ' property in Hero Dynamic Text allows you to tailor your content to the generational background of your visitors. This guide provides an overview of how to use the ',
                (0, r.jsx)(n.code, {children: 'generation'}),
                ' property to create personalized experiences and includes a list of potential generation values.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'generation'}),
                " property can be used to display content that resonates with the visitor's generational background, helping to build trust and rapport.",
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq generation "3. Baby Boomers (1943-1960)")}}\n<p>\n  Thank you for being a loyal customer since the early days. We\n  appreciate your continued support!\n</p>\n<img src="/images/baby_boomers.jpg" alt="Baby Boomers" />\n{{else if (eq generation "2. Generation X (1961-1981)")}}\n<p>\n  As a member of Generation X, your experience and insights are\n  invaluable to us. Thank you for being with us!\n</p>\n<img src="/images/generation_x.jpg" alt="Generation X" />\n{{else if (eq generation "4. Post-WWII (1942 and before)")}}\n<p>\n  We honor the wisdom and contributions of the Post-WWII\n  generation. Your legacy inspires us every day.\n</p>\n<img src="/images/post_wwii.jpg" alt="Post-WWII Generation" />\n{{else if (eq generation "1. Millennials and Gen Z (1982 and\nafter)")}}\n<p>\n  Welcome, future leaders! Your innovative spirit and energy drive\n  us to create better solutions for tomorrow.\n</p>\n<img\n  src="/images/millennials_gen_z.jpg"\n  alt="Millennials and Gen Z" />\n{{else}}\n<p>\n  Welcome! We value your unique perspective and are glad to have\n  you with us.\n</p>\n<img src="/images/general_welcome.jpg" alt="General Welcome" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's generation are displayed, helping to build trust and rapport with personalized content.",
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(n.code, {children: 'generation'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Value'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children:
                              '1. Millennials and Gen Z (1982 and after)',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'Born in 1982 and after'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: '2. Generation X (1961-1981)',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Born between 1961 and 1981',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: '3. Baby Boomers (1943-1960)',
                          }),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Born between 1943 and 1960',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: '4. Post-WWII (1942 and before)',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'Born in 1942 and before'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, r.jsx)(n.code, {children: 'generation'}),
                " property in Hero Dynamic Text allows you to personalize your landing pages based on the visitor's generational background. By leveraging this property, you can deliver content that resonates with different generations, helping to build trust and rapport with your audience.",
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, r.jsx)(n.p, {
              children: 'Explore more features of Hero Dynamic Text:',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
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
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => s, x: () => a});
      var r = t(3696);
      const o = {},
        i = r.createContext(o);
      function s(e) {
        const n = r.useContext(i);
        return r.useMemo(
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
            : s(e.components)),
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

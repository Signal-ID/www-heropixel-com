/*! For license information please see aa119581.fbb3c561.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3172],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        r = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, t) {
        var i,
          o = {},
          c = null,
          d = null;
        for (i in (void 0 !== t && (c = '' + t),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          s.call(n, i) && !l.hasOwnProperty(i) && (o[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === o[i] && (o[i] = n[i]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: a.current,
        };
      }
      (n.Fragment = o), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    3050: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => c,
        });
      var i = t(2540),
        r = t(3023);
      const o = {
          id: 'urbanicity-property',
          title: 'Urbanicity Property',
          description: 'Guide to using the urbanicity property',
        },
        s = 'Urbanicity Property',
        a = {
          id: 'destinations/properties/urbanicity-property',
          title: 'Urbanicity Property',
          description: 'Guide to using the urbanicity property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-urbanicity-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/urbanicity-property',
          permalink: '/docs/destinations/properties/urbanicity-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'urbanicity-property',
            title: 'Urbanicity Property',
            description: 'Guide to using the urbanicity property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Religion Property',
            permalink: '/docs/destinations/properties/religion-property',
          },
        },
        l = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function d(e) {
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
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'urbanicity-property',
              children: 'Urbanicity Property',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'urbanicity'}),
                " property allows you to tailor your content based on the visitor's living environment. This guide provides an overview of how to use the ",
                (0, i.jsx)(n.code, {children: 'urbanicity'}),
                ' property to create personalized experiences and includes a list of potential values.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'urbanicity'}),
                " property can be used to display content that resonates with the visitor's living environment, enhancing the relevance and effectiveness of your communication.",
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
                  '{{#if (eq urbanicity "1. Rural")}}\n<p>Welcome to our rural community!</p>\n<img src="/images/rural_community.jpg" alt="Rural Community" />\n{{else if (eq urbanicity "3. Suburban")}}\n<p>Welcome to our suburban community!</p>\n<img\n  src="/images/suburban_community.jpg"\n  alt="Suburban Community" />\n{{else if (eq urbanicity "4. Urban")}}\n<p>Welcome to our urban community!</p>\n<img src="/images/urban_community.jpg" alt="Urban Community" />\n{{else}}\n<p>Welcome to our community!</p>\n<img\n  src="/images/general_community.jpg"\n  alt="General Community" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "In this example, personalized messages and images are displayed based on the visitor's living environment, helping to build trust and rapport with your audience.",
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
                (0, i.jsx)(n.code, {children: 'urbanicity'}),
                ' property:',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, {children: 'Values'}),
                      (0, i.jsx)(n.th, {children: 'Value Type'}),
                      (0, i.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '1. Rural'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'string'}),
                        (0, i.jsx)(n.td, {
                          children: 'Rural living environment',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: '3. Suburban',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'string'}),
                        (0, i.jsx)(n.td, {
                          children: 'Suburban living environment',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: '4. Urban'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'string'}),
                        (0, i.jsx)(n.td, {
                          children: 'Urban living environment',
                        }),
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
                (0, i.jsx)(n.code, {children: 'urbanicity'}),
                " property allows you to create personalized content that resonates with the visitor's living environment. By leveraging this property, you can enhance user engagement and build trust with your audience.",
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
      function u(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => s, x: () => a});
      var i = t(3696);
      const r = {},
        o = i.createContext(r);
      function s(e) {
        const n = i.useContext(o);
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
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          i.createElement(o.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
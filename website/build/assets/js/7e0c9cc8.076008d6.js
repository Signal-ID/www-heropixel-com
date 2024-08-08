/*! For license information please see 7e0c9cc8.076008d6.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5833],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        r = Symbol.for('react.element'),
        l = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        o =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var i,
          l = {},
          d = null,
          p = null;
        for (i in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (p = n.ref),
        n))
          s.call(n, i) && !a.hasOwnProperty(i) && (l[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === l[i] && (l[i] = n[i]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: p,
          props: l,
          _owner: o.current,
        };
      }
      (n.Fragment = l), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    6: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => l,
          metadata: () => o,
          toc: () => d,
        });
      var i = t(2540),
        r = t(3023);
      const l = {
          id: 'dwelling-type-property',
          title: 'Dwelling Type Property',
          description: 'Guide to using the dwelling type property',
        },
        s = 'Dwelling Type Property',
        o = {
          id: 'personalization/dwelling-type-property',
          title: 'Dwelling Type Property',
          description: 'Guide to using the dwelling type property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-dwelling-type-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/dwelling-type-property',
          permalink: '/docs/personalization/dwelling-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'dwelling-type-property',
            title: 'Dwelling Type Property',
            description: 'Guide to using the dwelling type property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Address Type Property',
            permalink: '/docs/personalization/address-type-property',
          },
          next: {
            title: 'Home Heat Type Property',
            permalink: '/docs/personalization/home-heat-type-property',
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
      function p(e) {
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
              id: 'dwelling-type-property',
              children: 'Dwelling Type Property',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'dwelling_type'}),
                ' property allows you to tailor your content based on the type of dwelling the visitor resides in. This guide provides an overview of how to use the ',
                (0, i.jsx)(n.code, {children: 'dwelling_type'}),
                ' property to create personalized experiences and includes a list of potential dwelling type values.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'dwelling_type'}),
                " property can be used to display content that resonates with the visitor's dwelling type, making your communication more relevant and effective.",
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
                  '{{#if (eq dwelling_type "Single Family")}}\n<p>\n  Enjoy our exclusive offers and services designed for\n  single-family homeowners.\n</p>\n<img\n  src="/images/single_family_home.jpg"\n  alt="Single Family Home" />\n{{else if (eq dwelling_type "Multi Family Dwelling/Apartment")}}\n<p>\n  Discover our tailored solutions and discounts for apartment and\n  multi-family dwelling residents.\n</p>\n<img\n  src="/images/multi_family_dwelling.jpg"\n  alt="Multi Family Dwelling/Apartment" />\n{{else}}\n<p>Welcome! Discover our services tailored to your needs.</p>\n<img src="/images/general_services.jpg" alt="General Services" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's dwelling type are displayed, helping to create a more personalized and engaging experience.",
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
                (0, i.jsx)(n.code, {children: 'dwelling_type'}),
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
                          children: (0, i.jsx)(n.code, {
                            children: 'Single Family',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Visitor resides in a single-family home',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'Multi Family Dwelling/Apartment',
                          }),
                        }),
                        (0, i.jsx)(n.td, {
                          children:
                            'Visitor resides in a multi-family dwelling or apartment',
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
                (0, i.jsx)(n.code, {children: 'dwelling_type'}),
                " property allows you to personalize your landing pages based on the visitor's dwelling type. By leveraging this property, you can deliver content that resonates with different dwelling types, enhancing user engagement and effectiveness.",
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
      function c(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => s, x: () => o});
      var i = t(3696);
      const r = {},
        l = i.createContext(r);
      function s(e) {
        const n = i.useContext(l);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          i.createElement(l.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

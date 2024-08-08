/*! For license information please see e5688e31.2f86f8cf.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6898],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        r = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, t, n) {
        var i,
          o = {},
          h = null,
          p = null;
        for (i in (void 0 !== n && (h = '' + n),
        void 0 !== t.key && (h = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          s.call(t, i) && !l.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: r,
          type: e,
          key: h,
          ref: p,
          props: o,
          _owner: a.current,
        };
      }
      (t.Fragment = o), (t.jsx = h), (t.jsxs = h);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9386: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => l,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => h,
        });
      var i = n(2540),
        r = n(3023);
      const o = {
          id: 'home-heat-type-property',
          title: 'Home Heat Type Property',
          description: 'Guide to using the home heat type property',
        },
        s = 'Home Heat Type Property',
        a = {
          id: 'personalization/home-heat-type-property',
          title: 'Home Heat Type Property',
          description: 'Guide to using the home heat type property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-home-heat-type-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/home-heat-type-property',
          permalink: '/docs/personalization/home-heat-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'home-heat-type-property',
            title: 'Home Heat Type Property',
            description: 'Guide to using the home heat type property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Dwelling Type Property',
            permalink: '/docs/personalization/dwelling-type-property',
          },
          next: {
            title: 'Home Owner Ordinal Property',
            permalink: '/docs/personalization/home-owner-ordinal-property',
          },
        },
        l = {},
        h = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function p(e) {
        const t = {
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
            (0, i.jsx)(t.h1, {
              id: 'home-heat-type-property',
              children: 'Home Heat Type Property',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The ',
                (0, i.jsx)(t.code, {children: 'home_heat_type'}),
                " property allows you to tailor your content based on the type of heating system the visitor's home uses. This guide provides an overview of how to use the ",
                (0, i.jsx)(t.code, {children: 'home_heat_type'}),
                ' property to create personalized experiences and includes a list of potential home heat type values.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The ',
                (0, i.jsx)(t.code, {children: 'home_heat_type'}),
                " property can be used to display content that resonates with the visitor's home heating system, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsx)(t.p, {
              children: (0, i.jsx)(t.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  '{{#if (eq home_heat_type "Gas")}}\n<p>\n  Optimize your gas heating system with our energy-saving tips and\n  offers.\n</p>\n<img src="/images/gas_heating.jpg" alt="Gas Heating" />\n{{else if (eq home_heat_type "Electric")}}\n<p>\n  Discover efficient electric heating solutions and discounts on\n  our services.\n</p>\n<img src="/images/electric_heating.jpg" alt="Electric Heating" />\n{{else if (eq home_heat_type "Oil")}}\n<p>\n  Keep your oil heating system running smoothly with our\n  maintenance packages.\n</p>\n<img src="/images/oil_heating.jpg" alt="Oil Heating" />\n{{else if (eq home_heat_type "Propane")}}\n<p>\n  Explore our propane heating services and special offers designed\n  for you.\n</p>\n<img src="/images/propane_heating.jpg" alt="Propane Heating" />\n{{else}}\n<p>Welcome! Discover our wide range of home heating solutions.</p>\n<img src="/images/general_heating.jpg" alt="General Heating" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "In this example, a message and image relevant to the visitor's home heating system are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, i.jsx)(t.code, {children: 'home_heat_type'}),
                ' property:',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {children: 'Value'}),
                      (0, i.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'Gas'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: "Visitor's home uses gas heating",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'Electric'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: "Visitor's home uses electric heating",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'Oil'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: "Visitor's home uses oil heating",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          children: (0, i.jsx)(t.code, {children: 'Propane'}),
                        }),
                        (0, i.jsx)(t.td, {
                          children: "Visitor's home uses propane heating",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Using the ',
                (0, i.jsx)(t.code, {children: 'home_heat_type'}),
                " property allows you to personalize your landing pages based on the visitor's home heating system. By leveraging this property, you can deliver content that resonates with different heating systems, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, i.jsx)(t.p, {children: 'Explore more features:'}),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: (0, i.jsx)(t.a, {
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
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => s, x: () => a});
      var i = n(3696);
      const r = {},
        o = i.createContext(r);
      function s(e) {
        const t = i.useContext(o);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          i.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

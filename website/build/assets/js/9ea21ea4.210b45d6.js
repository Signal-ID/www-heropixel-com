/*! For license information please see 9ea21ea4.210b45d6.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9625],
  {
    2192: (e, n, o) => {
      var r = o(3696),
        i = Symbol.for('react.element'),
        t = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, o) {
        var r,
          t = {},
          d = null,
          h = null;
        for (r in (void 0 !== o && (d = '' + o),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          s.call(n, r) && !a.hasOwnProperty(r) && (t[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === t[r] && (t[r] = n[r]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: h,
          props: t,
          _owner: l.current,
        };
      }
      (n.Fragment = t), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, o) => {
      e.exports = o(2192);
    },
    1577: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => a,
          contentTitle: () => s,
          default: () => c,
          frontMatter: () => t,
          metadata: () => l,
          toc: () => d,
        });
      var r = o(2540),
        i = o(3023);
      const t = {
          id: 'home-owner-ordinal-property',
          title: 'Home Owner Ordinal Property',
          description: 'Guide to using the home owner ordinal property',
        },
        s = 'Home Owner Ordinal Property',
        l = {
          id: 'destinations/properties/home-owner-ordinal-property',
          title: 'Home Owner Ordinal Property',
          description: 'Guide to using the home owner ordinal property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-home-owner-ordinal-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/home-owner-ordinal-property',
          permalink:
            '/docs/destinations/properties/home-owner-ordinal-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'home-owner-ordinal-property',
            title: 'Home Owner Ordinal Property',
            description: 'Guide to using the home owner ordinal property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Home Heat Type Property',
            permalink: '/docs/destinations/properties/home-heat-type-property',
          },
          next: {
            title: 'Income HH Property',
            permalink: '/docs/destinations/properties/income-hh-property',
          },
        },
        a = {},
        d = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {
            value: 'What is Home Owner Ordinal?',
            id: 'what-is-home-owner-ordinal',
            level: 2,
          },
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function h(e) {
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'home-owner-ordinal-property',
              children: 'Home Owner Ordinal Property',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
                " property allows you to tailor your content based on the visitor's likelihood of home ownership, as quantified by a numerical scale in the context of Acxiom data. This guide provides an overview of how to use the ",
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
                ' property to create personalized experiences and includes a list of potential values.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'what-is-home-owner-ordinal',
              children: 'What is Home Owner Ordinal?',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'In the context of Acxiom data, the ',
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
                ' property represents the likelihood of the visitor being a home owner using a numerical scale. Each value corresponds to a specific level of home ownership probability.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'The ',
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
                " property can be used to display content that resonates with the visitor's likelihood of home ownership, making your communication more relevant and effective.",
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
                  '{{#if (eq home_owner_ordinal 4)}}\n<p>\n  We have exclusive offers for confirmed home owners like you.\n  Explore our range of home improvement solutions.\n</p>\n<img\n  src="/images/confirmed_home_owner.jpg"\n  alt="Confirmed Home Owner" />\n{{else if (eq home_owner_ordinal 1)}}\n<p>\n  Considering buying a home? Check out our mortgage and real\n  estate guides to help you on your journey.\n</p>\n<img\n  src="/images/probable_home_owner.jpg"\n  alt="Probable Home Owner" />\n{{else if (eq home_owner_ordinal 0)}}\n<p>\n  Renting? Discover our renter-friendly solutions and affordable\n  rental insurance plans.\n</p>\n<img src="/images/renter.jpg" alt="Renter" />\n{{else if (eq home_owner_ordinal 3)}}\n<p>\n  Explore our home ownership resources designed for those likely\n  to own a home.\n</p>\n<img\n  src="/images/likely_home_owner.jpg"\n  alt="Likely Home Owner" />\n{{else}}\n<p>Welcome! Discover our services tailored to your needs.</p>\n<img src="/images/general_services.jpg" alt="General Services" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's likelihood of home ownership are displayed, helping to create a more personalized and engaging experience.",
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
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
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
                          children: (0, r.jsx)(n.code, {children: '4'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Confirmed home owner'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: '3'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Likely home owner'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: '1'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Probable home owner'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: '0'}),
                        }),
                        (0, r.jsx)(n.td, {
                          children: 'Not a home owner (Renter)',
                        }),
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
                (0, r.jsx)(n.code, {children: 'home_owner_ordinal'}),
                " property allows you to personalize your landing pages based on the visitor's likelihood of home ownership. By leveraging this property, you can deliver content that resonates with different levels of home ownership probability, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, r.jsx)(n.p, {children: 'Explore more features:'}),
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
      function c(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, o) => {
      o.d(n, {R: () => s, x: () => l});
      var r = o(3696);
      const i = {},
        t = r.createContext(i);
      function s(e) {
        const n = r.useContext(t);
        return r.useMemo(
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
              ? e.components(i)
              : e.components || i
            : s(e.components)),
          r.createElement(t.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
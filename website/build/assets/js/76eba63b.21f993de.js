/*! For license information please see 76eba63b.21f993de.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1287],
  {
    2192: (e, n, r) => {
      var o = r(3696),
        t = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, r) {
        var o,
          s = {},
          d = null,
          p = null;
        for (o in (void 0 !== r && (d = '' + r),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (p = n.ref),
        n))
          i.call(n, o) && !l.hasOwnProperty(o) && (s[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === s[o] && (s[o] = n[o]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: p,
          props: s,
          _owner: a.current,
        };
      }
      (n.Fragment = s), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    561: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => d,
        });
      var o = r(2540),
        t = r(3023);
      const s = {
          id: 'home-owner-property',
          title: 'Home Owner Property',
          description: 'Guide to using the home owner property',
        },
        i = 'Home Owner Property',
        a = {
          id: 'destinations/properties/home-owner-property',
          title: 'Home Owner Property',
          description: 'Guide to using the home owner property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-home-owner-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/home-owner-property',
          permalink: '/docs/destinations/properties/home-owner-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'home-owner-property',
            title: 'Home Owner Property',
            description: 'Guide to using the home owner property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Credit Midpoints Property',
            permalink: '/docs/destinations/properties/credit-midpts-property',
          },
          next: {
            title: 'Address Type Property',
            permalink: '/docs/destinations/properties/address-type-property',
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
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.h1, {
              id: 'home-owner-property',
              children: 'Home Owner Property',
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'home_owner'}),
                " property allows you to tailor your content based on the visitor's home ownership status. This guide provides an overview of how to use the ",
                (0, o.jsx)(n.code, {children: 'home_owner'}),
                ' property to create personalized experiences and includes a list of potential home ownership values.',
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The ',
                (0, o.jsx)(n.code, {children: 'home_owner'}),
                " property can be used to display content that resonates with the visitor's home ownership status, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, o.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, o.jsx)(n.p, {
              children: (0, o.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, o.jsx)(n.pre, {
              children: (0, o.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq home_owner "Home Owner")}}\n<p>\n  As a home owner, you might be interested in our home insurance\n  plans and renovation tips.\n</p>\n<img src="/images/home_owner.jpg" alt="Home Owner" />\n{{else if (eq home_owner "Renter")}}\n<p>\n  Explore our renter-friendly solutions and affordable rental\n  insurance plans.\n</p>\n<img src="/images/renter.jpg" alt="Renter" />\n{{else if (eq home_owner "Probable Home Owner")}}\n<p>\n  Check out our home ownership guides and mortgage options that\n  might suit you.\n</p>\n<img\n  src="/images/probable_home_owner.jpg"\n  alt="Probable Home Owner" />\n{{else}}\n<p>Discover our wide range of services tailored to your needs.</p>\n<img src="/images/general_services.jpg" alt="General Services" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, o.jsx)(n.p, {
              children:
                "In this example, a message and image relevant to the visitor's home ownership status are displayed, helping to create a more personalized and engaging experience.",
            }),
            '\n',
            (0, o.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, o.jsx)(n.code, {children: 'home_owner'}),
                ' property:',
              ],
            }),
            '\n',
            (0, o.jsxs)(n.table, {
              children: [
                (0, o.jsx)(n.thead, {
                  children: (0, o.jsxs)(n.tr, {
                    children: [
                      (0, o.jsx)(n.th, {children: 'Value'}),
                      (0, o.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, o.jsxs)(n.tbody, {
                  children: [
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'Home Owner',
                          }),
                        }),
                        (0, o.jsx)(n.td, {children: 'Visitor is a home owner'}),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {children: 'Renter'}),
                        }),
                        (0, o.jsx)(n.td, {children: 'Visitor is a renter'}),
                      ],
                    }),
                    (0, o.jsxs)(n.tr, {
                      children: [
                        (0, o.jsx)(n.td, {
                          children: (0, o.jsx)(n.code, {
                            children: 'Probable Home Owner',
                          }),
                        }),
                        (0, o.jsx)(n.td, {
                          children: 'Visitor is a probable home owner',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, o.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, o.jsx)(n.code, {children: 'home_owner'}),
                " property allows you to personalize your landing pages based on the visitor's home ownership status. By leveraging this property, you can deliver content that resonates with different home ownership statuses, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, o.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, o.jsx)(n.p, {children: 'Explore more features:'}),
            '\n',
            (0, o.jsxs)(n.ul, {
              children: [
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, o.jsx)(n.li, {
                  children: (0, o.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, o.jsx)(n, {...e, children: (0, o.jsx)(p, {...e})})
          : p(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => i, x: () => a});
      var o = r(3696);
      const t = {},
        s = o.createContext(t);
      function i(e) {
        const n = o.useContext(s);
        return o.useMemo(
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
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          o.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
/*! For license information please see 3d7eefac.75543dd4.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5223],
  {
    2192: (e, i, t) => {
      var n = t(3696),
        r = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, i, t) {
        var n,
          o = {},
          c = null,
          d = null;
        for (n in (void 0 !== t && (c = '' + t),
        void 0 !== i.key && (c = '' + i.key),
        void 0 !== i.ref && (d = i.ref),
        i))
          s.call(i, n) && !a.hasOwnProperty(n) && (o[n] = i[n]);
        if (e && e.defaultProps)
          for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: l.current,
        };
      }
      (i.Fragment = o), (i.jsx = c), (i.jsxs = c);
    },
    2540: (e, i, t) => {
      e.exports = t(2192);
    },
    8422: (e, i, t) => {
      t.r(i),
        t.d(i, {
          assets: () => a,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var n = t(2540),
        r = t(3023);
      const o = {
          id: 'political-party-property',
          title: 'Political Party Property',
          description: 'Guide to using the political party property',
        },
        s = 'Political Party Property',
        l = {
          id: 'destinations/properties/political-party-property',
          title: 'Political Party Property',
          description: 'Guide to using the political party property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-political-party-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/political-party-property',
          permalink: '/docs/destinations/properties/political-party-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'political-party-property',
            title: 'Political Party Property',
            description: 'Guide to using the political party property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Line Type Property',
            permalink: '/docs/destinations/properties/line-type-property',
          },
          next: {
            title: 'Premium Income HH Property',
            permalink:
              '/docs/destinations/properties/premium-income-hh-property',
          },
        },
        a = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function d(e) {
        const i = {
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
            (0, n.jsx)(i.h1, {
              id: 'political-party-property',
              children: 'Political Party Property',
            }),
            '\n',
            (0, n.jsx)(i.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(i.p, {
              children: [
                'The ',
                (0, n.jsx)(i.code, {children: 'Political_Party'}),
                ' property allows you to tailor your content based on the political party affiliation of your visitors. This guide provides an overview of how to use the ',
                (0, n.jsx)(i.code, {children: 'Political_Party'}),
                ' property to create personalized experiences and includes a list of potential political party values.',
              ],
            }),
            '\n',
            (0, n.jsx)(i.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, n.jsxs)(i.p, {
              children: [
                'The ',
                (0, n.jsx)(i.code, {children: 'Political_Party'}),
                " property can be used to display content that resonates with the visitor's political party affiliation, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, n.jsx)(i.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, n.jsx)(i.p, {
              children: (0, n.jsx)(i.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, n.jsx)(i.pre, {
              children: (0, n.jsx)(i.code, {
                className: 'language-html',
                children:
                  '{{#if (eq Political_Party "Conservative")}}\n<p>\n  Welcome, Conservative! Check out our policies that align with\n  your values.\n</p>\n<img\n  src="/images/conservative_policies.jpg"\n  alt="Conservative Policies" />\n{{else if (eq Political_Party "Republican")}}\n<p>\n  Welcome, Republican! Explore our conservative policies and\n  initiatives.\n</p>\n<img\n  src="/images/republican_policies.jpg"\n  alt="Republican Policies" />\n{{else}}\n<p>Welcome! Explore our range of policies and initiatives.</p>\n<img src="/images/general_policies.jpg" alt="General Policies" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(i.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's political party affiliation, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, n.jsx)(i.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, n.jsxs)(i.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, n.jsx)(i.code, {children: 'Political_Party'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(i.table, {
              children: [
                (0, n.jsx)(i.thead, {
                  children: (0, n.jsxs)(i.tr, {
                    children: [
                      (0, n.jsx)(i.th, {children: 'Value'}),
                      (0, n.jsx)(i.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(i.tbody, {
                  children: [
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {
                            children: 'Conservative',
                          }),
                        }),
                        (0, n.jsx)(i.td, {
                          children:
                            'Visitor identifies with the Conservative party',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {children: 'Democrat'}),
                        }),
                        (0, n.jsx)(i.td, {
                          children:
                            'Visitor identifies with the Democrat party',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {
                            children: 'Independence',
                          }),
                        }),
                        (0, n.jsx)(i.td, {
                          children:
                            'Visitor identifies with the Independence party',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {
                            children: 'Independent',
                          }),
                        }),
                        (0, n.jsx)(i.td, {
                          children: 'Visitor identifies as an Independent',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {children: 'Liberal'}),
                        }),
                        (0, n.jsx)(i.td, {
                          children: 'Visitor identifies with the Liberal party',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {
                            children: 'Libertarian',
                          }),
                        }),
                        (0, n.jsx)(i.td, {
                          children:
                            'Visitor identifies with the Libertarian party',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(i.tr, {
                      children: [
                        (0, n.jsx)(i.td, {
                          children: (0, n.jsx)(i.code, {
                            children: 'Republican',
                          }),
                        }),
                        (0, n.jsx)(i.td, {
                          children:
                            'Visitor identifies with the Republican party',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(i.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, n.jsxs)(i.p, {
              children: [
                'Using the ',
                (0, n.jsx)(i.code, {children: 'Political_Party'}),
                " property allows you to personalize your landing pages based on the visitor's political party affiliation. By leveraging this property, you can deliver content that resonates with different political affiliations, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, n.jsx)(i.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, n.jsx)(i.p, {children: 'Explore more features:'}),
            '\n',
            (0, n.jsxs)(i.ul, {
              children: [
                '\n',
                (0, n.jsx)(i.li, {
                  children: (0, n.jsx)(i.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, n.jsx)(i.li, {
                  children: (0, n.jsx)(i.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, n.jsx)(i.li, {
                  children: (0, n.jsx)(i.a, {
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
        const {wrapper: i} = {...(0, r.R)(), ...e.components};
        return i
          ? (0, n.jsx)(i, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, i, t) => {
      t.d(i, {R: () => s, x: () => l});
      var n = t(3696);
      const r = {},
        o = n.createContext(r);
      function s(e) {
        const i = n.useContext(o);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : {...i, ...e};
          },
          [i, e]
        );
      }
      function l(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          n.createElement(o.Provider, {value: i}, e.children)
        );
      }
    },
  },
]);

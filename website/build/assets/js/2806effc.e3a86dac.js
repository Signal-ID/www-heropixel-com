/*! For license information please see 2806effc.e3a86dac.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1531],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        r = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function p(e, n, t) {
        var i,
          s = {},
          p = null,
          a = null;
        for (i in (void 0 !== t && (p = '' + t),
        void 0 !== n.key && (p = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          o.call(n, i) && !d.hasOwnProperty(i) && (s[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === s[i] && (s[i] = n[i]);
        return {
          $$typeof: r,
          type: e,
          key: p,
          ref: a,
          props: s,
          _owner: l.current,
        };
      }
      (n.Fragment = s), (n.jsx = p), (n.jsxs = p);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    2575: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => o,
          default: () => c,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => p,
        });
      var i = t(2540),
        r = t(3023);
      const s = {
          id: 'line-type-property',
          title: 'Line Type Property',
          description: 'Guide to using the line type property',
        },
        o = 'Line Type Property',
        l = {
          id: 'destinations/properties/line-type-property',
          title: 'Line Type Property',
          description: 'Guide to using the line type property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-line-type-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/line-type-property',
          permalink: '/docs/destinations/properties/line-type-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'line-type-property',
            title: 'Line Type Property',
            description: 'Guide to using the line type property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Phone Is Callable Property',
            permalink:
              '/docs/destinations/properties/phone-is-callable-property',
          },
          next: {
            title: 'Political Party Property',
            permalink: '/docs/destinations/properties/political-party-property',
          },
        },
        d = {},
        p = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
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
              id: 'line-type-property',
              children: 'Line Type Property',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'line_type'}),
                " property allows you to tailor your content based on the type of phone line associated with the visitor's phone number. This guide provides an overview of how to use the ",
                (0, i.jsx)(n.code, {children: 'line_type'}),
                ' property to create personalized experiences and includes a list of potential line type values.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The ',
                (0, i.jsx)(n.code, {children: 'line_type'}),
                " property can be used to display content that resonates with the visitor's phone line type, making your communication more relevant and effective.",
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
                  '{{#if (eq line_type "Wireless")}}\n<p>\n  We noticed you are using a wireless number. Stay connected with\n  our mobile-friendly services!\n</p>\n<img src="/images/wireless.jpg" alt="Wireless Services" />\n{{else if (eq line_type "Landline")}}\n<p>\n  Welcome, landline user! Explore our home services tailored just\n  for you.\n</p>\n<img src="/images/landline.jpg" alt="Landline Services" />\n{{else if (eq line_type "VOIP")}}\n<p>\n  Using a VOIP number? Check out our latest internet-based offers.\n</p>\n<img src="/images/voip.jpg" alt="VOIP Offers" />\n{{else}}\n<p>\n  Welcome! Explore our range of products and services tailored to\n  various line types.\n</p>\n<img src="/images/general_offers.jpg" alt="General Offers" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's phone line type, providing fresh ideas to enhance user engagement and conversions.",
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
                (0, i.jsx)(n.code, {children: 'line_type'}),
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
                          children: (0, i.jsx)(n.code, {children: 'Toll Free'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Toll free phone line'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'Wireless'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Wireless phone line'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'Landline'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Landline phone line'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'Satellite'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Satellite phone line'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'VOIP'}),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Voice Over IP (VOIP) phone line',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'Premium Rate',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'Premium rate phone line'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'Pager'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Pager phone line'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'N/A'}),
                        }),
                        (0, i.jsx)(n.td, {
                          children: 'Unknown or not applicable line type',
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
                (0, i.jsx)(n.code, {children: 'line_type'}),
                " property allows you to personalize your landing pages based on the visitor's phone line type. By leveraging this property, you can deliver content that resonates with different line types, enhancing user engagement and effectiveness.",
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
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => o, x: () => l});
      var i = t(3696);
      const r = {},
        s = i.createContext(r);
      function o(e) {
        const n = i.useContext(s);
        return i.useMemo(
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
            : o(e.components)),
          i.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

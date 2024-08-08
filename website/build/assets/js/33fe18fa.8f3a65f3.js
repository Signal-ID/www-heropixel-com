/*! For license information please see 33fe18fa.8f3a65f3.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2746],
  {
    2192: (e, r, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        t = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, r, n) {
        var i,
          d = {},
          o = null,
          h = null;
        for (i in (void 0 !== n && (o = '' + n),
        void 0 !== r.key && (o = '' + r.key),
        void 0 !== r.ref && (h = r.ref),
        r))
          c.call(r, i) && !t.hasOwnProperty(i) && (d[i] = r[i]);
        if (e && e.defaultProps)
          for (i in (r = e.defaultProps)) void 0 === d[i] && (d[i] = r[i]);
        return {
          $$typeof: s,
          type: e,
          key: o,
          ref: h,
          props: d,
          _owner: l.current,
        };
      }
      (r.Fragment = d), (r.jsx = o), (r.jsxs = o);
    },
    2540: (e, r, n) => {
      e.exports = n(2192);
    },
    8992: (e, r, n) => {
      n.r(r),
        n.d(r, {
          assets: () => t,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      var i = n(2540),
        s = n(3023);
      const d = {
          id: 'phone-carrier-property',
          title: 'Phone Carrier Property',
          description: 'Guide to using the phone carrier property',
        },
        c = 'Phone Carrier Property',
        l = {
          id: 'personalization/phone-carrier-property',
          title: 'Phone Carrier Property',
          description: 'Guide to using the phone carrier property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-phone-carrier-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/phone-carrier-property',
          permalink: '/docs/personalization/phone-carrier-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'phone-carrier-property',
            title: 'Phone Carrier Property',
            description: 'Guide to using the phone carrier property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Phone Activity Property',
            permalink: '/docs/personalization/phone-activity-property',
          },
          next: {
            title: 'Phone Is Callable Property',
            permalink: '/docs/personalization/phone-is-callable-property',
          },
        },
        t = {},
        o = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function h(e) {
        const r = {
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.h1, {
              id: 'phone-carrier-property',
              children: 'Phone Carrier Property',
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'The ',
                (0, i.jsx)(r.code, {children: 'phone_carrier'}),
                " property allows you to tailor your content based on the carrier (service provider) to which the visitor's phone number is assigned. This guide provides an overview of how to use the ",
                (0, i.jsx)(r.code, {children: 'phone_carrier'}),
                ' property to create personalized experiences and includes a list of potential phone carrier values.',
              ],
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'The ',
                (0, i.jsx)(r.code, {children: 'phone_carrier'}),
                " property can be used to display content that resonates with the visitor's phone carrier, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, i.jsx)(r.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsx)(r.p, {
              children: (0, i.jsx)(r.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, i.jsx)(r.pre, {
              children: (0, i.jsx)(r.code, {
                className: 'language-html',
                children:
                  '{{#if (eq phone_carrier "Verizon Wireless")}}\n<p>\n  Welcome, Verizon Wireless customer! Check out our exclusive\n  offers just for you.\n</p>\n<img src="/images/verizon_offers.jpg" alt="Verizon Offers" />\n{{else if (eq phone_carrier "AT&T")}}\n<p>\n  Hello, AT&T user! Discover our special deals tailored to your\n  needs.\n</p>\n<img src="/images/att_offers.jpg" alt="AT&T Offers" />\n{{else if (eq phone_carrier "Bell Canada")}}\n<p>\n  Hi, Bell Canada customer! Enjoy our unique promotions crafted\n  for you.\n</p>\n<img src="/images/bell_offers.jpg" alt="Bell Canada Offers" />\n{{else}}\n<p>\n  Welcome! Explore our range of products and services tailored to\n  various carriers.\n</p>\n<img src="/images/general_offers.jpg" alt="General Offers" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(r.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's phone carrier, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, i.jsx)(r.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'The following table lists a selection of potential values for the ',
                (0, i.jsx)(r.code, {children: 'phone_carrier'}),
                ' property, including popular phone carriers in the U.S.:',
              ],
            }),
            '\n',
            (0, i.jsxs)(r.table, {
              children: [
                (0, i.jsx)(r.thead, {
                  children: (0, i.jsxs)(r.tr, {
                    children: [
                      (0, i.jsx)(r.th, {children: 'Value'}),
                      (0, i.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(r.tbody, {
                  children: [
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'AT&T'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Bell Canada',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'Canadian phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Verizon Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'T-Mobile'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Sprint'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'US Cellular',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Boost Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Cricket Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Metro by T-Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Virgin Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Xfinity Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Google Fi'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Spectrum Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Republic Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Mint Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Consumer Cellular',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Ting'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Straight Talk',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Page Plus'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Simple Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'TracFone'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Net10 Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Total Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'H2O Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Red Pocket',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Visible'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Wing'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Project Fi',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Walmart Family Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Credo Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Cellcom'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'FreedomPop',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Boost Infinite',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Nextel'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Bluegrass Cellular',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Republic Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Spectrum'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Straight Talk Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'MetroPCS'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'C Spire'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Appalachian Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'GreatCall'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Ptel Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'GCI Wireless',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {children: 'Tello'}),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Ultra Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Voyager Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Boom Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Gen Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Hello Mobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                    (0, i.jsxs)(r.tr, {
                      children: [
                        (0, i.jsx)(r.td, {
                          children: (0, i.jsx)(r.code, {
                            children: 'Lycamobile',
                          }),
                        }),
                        (0, i.jsx)(r.td, {children: 'U.S. phone carrier'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(r.p, {children: 'and many more...'}),
            '\n',
            (0, i.jsx)(r.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, i.jsxs)(r.p, {
              children: [
                'Using the ',
                (0, i.jsx)(r.code, {children: 'phone_carrier'}),
                " property allows you to personalize your landing pages based on the visitor's phone carrier. By leveraging this property, you can deliver content that resonates with different carriers, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, i.jsx)(r.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, i.jsx)(r.p, {children: 'Explore more features:'}),
            '\n',
            (0, i.jsxs)(r.ul, {
              children: [
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, i.jsx)(r.li, {
                  children: (0, i.jsx)(r.a, {
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
      function a(e = {}) {
        const {wrapper: r} = {...(0, s.R)(), ...e.components};
        return r
          ? (0, i.jsx)(r, {...e, children: (0, i.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, r, n) => {
      n.d(r, {R: () => c, x: () => l});
      var i = n(3696);
      const s = {},
        d = i.createContext(s);
      function c(e) {
        const r = i.useContext(d);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function l(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          i.createElement(d.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

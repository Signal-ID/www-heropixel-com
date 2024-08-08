/*! For license information please see 81eaab92.61278082.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9008],
  {
    2192: (e, n, r) => {
      var l = r(3696),
        t = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        o =
          l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, r) {
        var l,
          i = {},
          c = null,
          d = null;
        for (l in (void 0 !== r && (c = '' + r),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          s.call(n, l) && !a.hasOwnProperty(l) && (i[l] = n[l]);
        if (e && e.defaultProps)
          for (l in (n = e.defaultProps)) void 0 === i[l] && (i[l] = n[l]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: d,
          props: i,
          _owner: o.current,
        };
      }
      (n.Fragment = i), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    3749: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => a,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => i,
          metadata: () => o,
          toc: () => c,
        });
      var l = r(2540),
        t = r(3023);
      const i = {
          id: 'phone-is-callable-property',
          title: 'Phone Is Callable Property',
          description: 'Guide to using the phone is callable property',
        },
        s = 'Phone Is Callable Property',
        o = {
          id: 'personalization/phone-is-callable-property',
          title: 'Phone Is Callable Property',
          description: 'Guide to using the phone is callable property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-phone-is-callable-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/phone-is-callable-property',
          permalink: '/docs/personalization/phone-is-callable-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'phone-is-callable-property',
            title: 'Phone Is Callable Property',
            description: 'Guide to using the phone is callable property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Phone Carrier Property',
            permalink: '/docs/personalization/phone-carrier-property',
          },
          next: {
            title: 'Line Type Property',
            permalink: '/docs/personalization/line-type-property',
          },
        },
        a = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {
            value: 'Criteria for Callable Phone Numbers',
            id: 'criteria-for-callable-phone-numbers',
            level: 2,
          },
          {
            value: 'Callable Phone Number Values',
            id: 'callable-phone-number-values',
            level: 3,
          },
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
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.h1, {
              id: 'phone-is-callable-property',
              children: 'Phone Is Callable Property',
            }),
            '\n',
            (0, l.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'The ',
                (0, l.jsx)(n.code, {children: 'phone_is_callable'}),
                ' property allows you to determine whether a phone number can be called. This guide provides an overview of how to use the ',
                (0, l.jsx)(n.code, {children: 'phone_is_callable'}),
                ' property to create personalized experiences and includes a list of the criteria used to determine if a phone number is callable.',
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'The ',
                (0, l.jsx)(n.code, {children: 'phone_is_callable'}),
                " property can be used to display content based on whether the visitor's phone number is callable, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, l.jsx)(n.p, {
              children: (0, l.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq phone_is_callable 1)}}\n<p></p>\n<img src="/images/callable.jpg" alt="Callable" />\n{{else}}\n<p>\n  Please provide an alternative contact method to stay updated\n  with our offers.\n</p>\n<img src="/images/not_callable.jpg" alt="Not Callable" />\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on whether the visitor's phone number is callable, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, l.jsx)(n.h2, {
              id: 'criteria-for-callable-phone-numbers',
              children: 'Criteria for Callable Phone Numbers',
            }),
            '\n',
            (0, l.jsx)(n.p, {
              children:
                'The following table lists the criteria used to determine if a phone number is callable:',
            }),
            '\n',
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, {children: 'Property'}),
                      (0, l.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: 'success'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children:
                            'Indicates if the validation was successful',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: 'valid'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children: 'Indicates if the phone number is valid',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: 'prepaid'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children: 'Ensures the phone number is NOT prepaid',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: 'active'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children: 'Indicates if the phone number is active',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {
                            children: 'do_not_call',
                          }),
                        }),
                        (0, l.jsx)(n.td, {
                          children:
                            'Indicates if the phone number is on a do-not-call list (checked at time of engagement)',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: 'line_type'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children:
                            'The type of phone line (should not be "Toll Free")',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: 'country'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children:
                            'The country of the phone number (should be "US")',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(n.h3, {
              id: 'callable-phone-number-values',
              children: 'Callable Phone Number Values',
            }),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'The ',
                (0, l.jsx)(n.code, {children: 'phone_is_callable'}),
                ' property can return the following values:',
              ],
            }),
            '\n',
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, {children: 'Value'}),
                      (0, l.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: '0'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children: 'Phone number is not callable',
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, {
                          children: (0, l.jsx)(n.code, {children: '1'}),
                        }),
                        (0, l.jsx)(n.td, {
                          children: 'Phone number is callable',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, l.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, l.jsx)(n.code, {children: 'phone_is_callable'}),
                " property allows you to personalize your landing pages based on whether the visitor's phone number is callable. By leveraging this property, you can deliver content that resonates with different contact statuses, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, l.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, l.jsx)(n.p, {children: 'Explore more features:'}),
            '\n',
            (0, l.jsxs)(n.ul, {
              children: [
                '\n',
                (0, l.jsx)(n.li, {
                  children: (0, l.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, l.jsx)(n.li, {
                  children: (0, l.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, l.jsx)(n.li, {
                  children: (0, l.jsx)(n.a, {
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
      function h(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, l.jsx)(n, {...e, children: (0, l.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => s, x: () => o});
      var l = r(3696);
      const t = {},
        i = l.createContext(t);
      function s(e) {
        const n = l.useContext(i);
        return l.useMemo(
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
              ? e.components(t)
              : e.components || t
            : s(e.components)),
          l.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

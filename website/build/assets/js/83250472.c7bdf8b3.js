/*! For license information please see 83250472.c7bdf8b3.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8920],
  {
    2192: (e, t, i) => {
      var n = i(3696),
        o = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, i) {
        var n,
          r = {},
          l = null,
          d = null;
        for (n in (void 0 !== i && (l = '' + i),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          s.call(t, n) && !c.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: r,
          _owner: a.current,
        };
      }
      (t.Fragment = r), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, i) => {
      e.exports = i(2192);
    },
    2793: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => l,
        });
      var n = i(2540),
        o = i(3023);
      const r = {
          id: 'phone-activity-property',
          title: 'Phone Activity Property',
          description: 'Guide to using the phone activity property',
        },
        s = 'Phone Activity Property',
        a = {
          id: 'personalization/phone-activity-property',
          title: 'Phone Activity Property',
          description: 'Guide to using the phone activity property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-phone-activity-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/phone-activity-property',
          permalink: '/docs/personalization/phone-activity-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'phone-activity-property',
            title: 'Phone Activity Property',
            description: 'Guide to using the phone activity property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Occupation Detail Property',
            permalink: '/docs/personalization/occupation-detail-property',
          },
          next: {
            title: 'Phone Carrier Property',
            permalink: '/docs/personalization/phone-carrier-property',
          },
        },
        c = {},
        l = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function d(e) {
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'phone-activity-property',
              children: 'Phone Activity Property',
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'phone_activity'}),
                ' property allows you to tailor your content based on the frequency at which a phone number engages in legitimate user behavior online. This guide provides an overview of how to use the ',
                (0, n.jsx)(t.code, {children: 'phone_activity'}),
                ' property to create personalized experiences and includes a list of potential phone activity values.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The ',
                (0, n.jsx)(t.code, {children: 'phone_activity'}),
                " property can be used to display content that resonates with the visitor's phone activity level, making your communication more relevant and effective.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, n.jsx)(t.p, {
              children: (0, n.jsx)(t.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: 'language-html',
                children:
                  '{{#if (eq phone_activity "high")}}\n  <p>Your phone number shows high activity, which indicates you are an active and engaged user. Enjoy our exclusive offers!</p>\n  <img src="/images/high_activity.jpg" alt="High Activity">\n{{else if (eq phone_activity "medium")}}\n  <p>Your phone number shows medium activity. Check out our special deals tailored for you.</p>\n  <img src="/images/medium_activity.jpg" alt="Medium Activity">\n{{else if (eq phone_activity "low")}}\n  <p>Your phone number shows low activity. Discover our latest promotions and start engaging more.</p>\n  <img src="/images/low_activity.jpg" alt="Low Activity">\n{{else if (eq phone_activity "none")}}\n  <p>It looks like your phone number has no recent activity. Sign up for our newsletter to stay updated with our offers.</p>\n  <img src="/images/no_activity.jpg" alt="No Activity">\n{{else}}\n  <p>Welcome! Explore our range of products and services tailored to various activity levels.</p>\n  <img src="/images/general_offers.jpg" alt="General Offers">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "In this example, various personalized messages and offers are displayed based on the visitor's phone activity level, providing fresh ideas to enhance user engagement and conversions.",
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, n.jsx)(t.code, {children: 'phone_activity'}),
                ' property:',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {children: 'Value'}),
                      (0, n.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'high'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'High frequency of legitimate purchases, account registrations, and online user behavior',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'medium'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Medium frequency of legitimate purchases, account registrations, and online user behavior',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'low'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'Low frequency of legitimate purchases, account registrations, and online user behavior',
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          children: (0, n.jsx)(t.code, {children: 'none'}),
                        }),
                        (0, n.jsx)(t.td, {
                          children:
                            'No history of legitimate purchases, account registrations, or online user behavior',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Using the ',
                (0, n.jsx)(t.code, {children: 'phone_activity'}),
                " property allows you to personalize your landing pages based on the visitor's phone activity level. By leveraging this property, you can deliver content that resonates with different activity levels, enhancing user engagement and effectiveness.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, n.jsx)(t.p, {children: 'Explore more features:'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children: (0, n.jsx)(t.a, {
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
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, i) => {
      i.d(t, {R: () => s, x: () => a});
      var n = i(3696);
      const o = {},
        r = n.createContext(o);
      function s(e) {
        const t = n.useContext(r);
        return n.useMemo(
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
              ? e.components(o)
              : e.components || o
            : s(e.components)),
          n.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

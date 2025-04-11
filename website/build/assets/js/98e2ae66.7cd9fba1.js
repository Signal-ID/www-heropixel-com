/*! For license information please see 98e2ae66.7cd9fba1.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3267],
  {
    2192: (e, s, n) => {
      var i = n(3696),
        t = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, s, n) {
        var i,
          r = {},
          c = null,
          d = null;
        for (i in (void 0 !== n && (c = '' + n),
        void 0 !== s.key && (c = '' + s.key),
        void 0 !== s.ref && (d = s.ref),
        s))
          o.call(s, i) && !a.hasOwnProperty(i) && (r[i] = s[i]);
        if (e && e.defaultProps)
          for (i in (s = e.defaultProps)) void 0 === r[i] && (r[i] = s[i]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: l.current,
        };
      }
      (s.Fragment = r), (s.jsx = c), (s.jsxs = c);
    },
    2540: (e, s, n) => {
      e.exports = n(2192);
    },
    7273: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => a,
          contentTitle: () => o,
          default: () => p,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var i = n(2540),
        t = n(3023);
      const r = {
          id: 'intro-to-suppressing',
          title: 'Manage Suppression Lists',
          description: 'desc',
        },
        o = 'What are Suppression Lists?',
        l = {
          id: 'intro-to-suppressing',
          title: 'Manage Suppression Lists',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-suppressing.md',
          sourceDirName: '.',
          slug: '/intro-to-suppressing',
          permalink: '/docs/intro-to-suppressing',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1744400176e3,
          frontMatter: {
            id: 'intro-to-suppressing',
            title: 'Manage Suppression Lists',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {title: 'Pageview', permalink: '/docs/event-pageview'},
          next: {
            title: 'Filtering the Dashboard',
            permalink: '/docs/dashboard',
          },
        },
        a = {},
        c = [
          {
            value: 'Managing Your Suppression Lists',
            id: 'managing-your-suppression-lists',
            level: 3,
          },
          {value: 'How It Works', id: 'how-it-works', level: 4},
          {
            value: 'Using the Suppression List',
            id: 'using-the-suppression-list',
            level: 4,
          },
          {value: 'Common Questions', id: 'common-questions', level: 4},
        ];
      function d(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h1: 'h1',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.h1, {
              id: 'what-are-suppression-lists',
              children: 'What are Suppression Lists?',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'You already have customers that you know of. You may not want to be charged by HeroPixel for resolving these customers.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'A suppression list gives you the ability to block us from resolving, and thus charging you for, customers you already know. Keep in mind that you must add these identites to your suppression list before we determine who they are.',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: (0, i.jsx)(s.strong, {
                children:
                  'What if they optin to one of your forms, can you add them to the suppression list then?',
              }),
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, {
                  children:
                    "Yes, but most likely we will have already resolved their identity when they first hit the page. So by the time they optin you'll have already been charged for them.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h3, {
              id: 'managing-your-suppression-lists',
              children: 'Managing Your Suppression Lists',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'The suppression list system helps you prevent identity resolution charges for contacts you already know about. By adding contacts to your suppression list before they interact with your pixel, you can effectively manage resolution costs while maintaining tracking capabilities.',
            }),
            '\n',
            (0, i.jsx)(s.admonition, {
              title: 'GraphQL API Available',
              type: 'info',
              children: (0, i.jsxs)(s.p, {
                children: [
                  'For automated integrations, you can use our GraphQL API to programmatically manage your suppression lists. Check our ',
                  (0, i.jsx)(s.a, {
                    href: '/docs/graphql/suppression-graphql-request',
                    children: 'Suppression GraphQL Request',
                  }),
                  ' documentation for implementation details.',
                ],
              }),
            }),
            '\n',
            (0, i.jsx)(s.h4, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, i.jsxs)(s.ol, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.strong, {
                        children: 'Pre-emptive Suppression',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'Add known contacts to your suppression list before pixel interaction',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'Prevents charges for identity resolution of known contacts',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Works with email addresses',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.strong, {
                        children: 'Bulk Import Options',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'Upload your existing customer list via CSV',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'System automatically handles email validation',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'Simple format with email and optional reason',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.strong, {
                        children: 'Important Timing Considerations',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            'Contacts must be added to suppression list ',
                            (0, i.jsx)(s.strong, {children: 'before'}),
                            ' pixel interaction',
                          ],
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            "Once a visitor's identity is resolved, the charge cannot be reversed",
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'Regular updates of your suppression list are recommended',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h4, {
              id: 'using-the-suppression-list',
              children: 'Using the Suppression List',
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children: 'You can manage your suppression list in two ways:',
            }),
            '\n',
            (0, i.jsxs)(s.ol, {
              children: [
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.strong, {
                        children: 'Dashboard Interface',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            'Access through the ',
                            (0, i.jsx)(s.a, {
                              href: 'https://app.heropixel.com/suppression',
                              children: 'Leads page in your dashboard',
                            }),
                          ],
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            "Navigate to the Leads section and click on 'Suppression List'",
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'View, add, or import suppressed contacts',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.strong, {children: 'GraphQL API'}),
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Programmatically manage suppressions',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Bulk add contacts via API calls',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Integrate with your existing systems',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsxs)(s.p, {
                      children: [
                        (0, i.jsx)(s.strong, {children: 'CSV Import Format'}),
                        '\nYour file should include:',
                      ],
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.code, {children: 'email'}),
                            ': Email address',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(s.li, {
                          children: [
                            (0, i.jsx)(s.code, {children: 'reason'}),
                            ' (optional): Why this contact is suppressed',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(s.p, {
                      children: (0, i.jsx)(s.strong, {
                        children: 'Best Practices',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Update your suppression list regularly',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children:
                            'Import new customers before launching campaigns',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Use bulk import for large customer lists',
                        }),
                        '\n',
                        (0, i.jsx)(s.li, {
                          children: 'Keep your suppression list current',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.h4, {
              id: 'common-questions',
              children: 'Common Questions',
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                (0, i.jsx)(s.strong, {
                  children:
                    'Q: Can I add someone to the suppression list after they fill out a form?',
                }),
                "\nA: Yes, but if they've already interacted with your pixel, you may have already been charged for the identity resolution. For optimal cost management, add contacts to your suppression list before they interact with your pixel.",
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                (0, i.jsx)(s.strong, {
                  children:
                    'Q: What happens if someone on my suppression list visits my site?',
                }),
                "\nA: If their email is in your suppression list before their visit, you won't be charged for their identity resolution. However, their visit will still be tracked for analytics purposes.",
              ],
            }),
            '\n',
            (0, i.jsxs)(s.p, {
              children: [
                (0, i.jsx)(s.strong, {
                  children: 'Q: How often should I update my suppression list?',
                }),
                '\nA: We recommend updating your suppression list:',
              ],
            }),
            '\n',
            (0, i.jsxs)(s.ul, {
              children: [
                '\n',
                (0, i.jsx)(s.li, {
                  children: 'Before launching new marketing campaigns',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children: 'After significant customer database updates',
                }),
                '\n',
                (0, i.jsx)(s.li, {
                  children: 'On a regular schedule (e.g., weekly or monthly)',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(s.p, {
              children:
                'By effectively managing your suppression list, you can optimize your identity resolution costs while maintaining full visibility of your website traffic and conversions.',
            }),
          ],
        });
      }
      function p(e = {}) {
        const {wrapper: s} = {...(0, t.R)(), ...e.components};
        return s
          ? (0, i.jsx)(s, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, s, n) => {
      n.d(s, {R: () => o, x: () => l});
      var i = n(3696);
      const t = {},
        r = i.createContext(t);
      function o(e) {
        const s = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : {...s, ...e};
          },
          [s, e]
        );
      }
      function l(e) {
        let s;
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : o(e.components)),
          i.createElement(r.Provider, {value: s}, e.children)
        );
      }
    },
  },
]);

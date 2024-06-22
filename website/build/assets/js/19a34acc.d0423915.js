/*! For license information please see 19a34acc.d0423915.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1334],
  {
    2192: (e, n, i) => {
      var t = i(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        o =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, i) {
        var t,
          r = {},
          d = null,
          c = null;
        for (t in (void 0 !== i && (d = '' + i),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          l.call(n, t) && !a.hasOwnProperty(t) && (r[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === r[t] && (r[t] = n[t]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: o.current,
        };
      }
      (n.Fragment = r), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    7881: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => d,
        });
      var t = i(2540),
        s = i(3023);
      const r = {
          id: 'start-create-a-pixel',
          title: 'Create a New Pixel',
          description: 'desc',
        },
        l = 'Guide to Creating a Pixel',
        o = {
          id: 'start-create-a-pixel',
          title: 'Create a New Pixel',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/start-create-a-pixel.md',
          sourceDirName: '.',
          slug: '/start-create-a-pixel',
          permalink: '/docs/start-create-a-pixel',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/start-create-a-pixel.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'start-create-a-pixel',
            title: 'Create a New Pixel',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Start by Registering',
            permalink: '/docs/start-registration',
          },
          next: {
            title: 'Pixel Installation',
            permalink: '/docs/start-pixel-installation',
          },
        },
        a = {},
        d = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {value: 'FOLLOW THESE STEPS', id: 'follow-these-steps', level: 2},
          {value: 'Step 1: Pixel Setup', id: 'step-1-pixel-setup', level: 3},
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Support', id: 'support', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 3},
        ];
      function c(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'guide-to-creating-a-pixel',
              children: 'Guide to Creating a Pixel',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Pixels will be installed on your website(s) to begin generating leads. Use multiple pixels if you're attempting to segment leads into different lists.",
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'follow-these-steps',
              children: 'FOLLOW THESE STEPS',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'step-1-pixel-setup',
              children: 'Step 1: Pixel Setup',
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {children: 'Pixel Name'}),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Pixel names are only used in your dashboard for personal reference.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {
                        children: 'Authorized Domains',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Leads will only be generated from authorized domains.',
                        }),
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            'If the pixel is installed on an unauthorized domain it will receive error ',
                            (0, t.jsx)(n.code, {children: '401 unauthorized'}),
                            ' quietly and no leads will be generated from the unauthorized domain.',
                          ],
                        }),
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            'Do not enter subdomains or ',
                            (0, t.jsx)(n.code, {children: 'http(s)://'}),
                            ', only the top-level-domain (e.g., example.com). All subdomains will automatically be authorized.',
                          ],
                        }),
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Separate multiple domains with commas (e.g., example.com, example.io).',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {children: 'Description'}),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Optionally, provide a description for your own internal reference.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {children: 'Lead Cost'}),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'What is your current Cost Per Lead? Enter that here.',
                        }),
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'We will calculate your savings on the dashboard.',
                        }),
                        '\n',
                        (0, t.jsx)(n.li, {children: 'This field is required.'}),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {children: 'Tags'}),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Tags make it easier to generate reports and lead lists from within the dashboard.',
                        }),
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Separate multiple tags with commas (e.g., facebook, instagram, website).',
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
            (0, t.jsx)(n.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {
                        children: 'Form Not Submitting?',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Ensure all required fields (marked with an asterisk *) are filled in.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {
                        children: 'Issues with Authorized Domains?',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            "If the system is not accepting the domain you entered, it's most likely because you've added a subdomain or special characters.",
                        }),
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Verify the domain format and ensure multiple domains are separated by commas.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(n.p, {
                      children: (0, t.jsx)(n.strong, {
                        children: 'Lead Cost Not Accepting Decimal Values?',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(n.li, {
                          children:
                            'Ensure you are entering rounded dollar values only.',
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
            (0, t.jsx)(n.h2, {id: 'support', children: 'Support'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    'If you encounter any issues or need further assistance, contact our support team at ',
                    (0, t.jsx)(n.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                "You should be seeing the pixel snippet when you've finished the steps to create your pixel. We'll cover pixel installation in the ",
                (0, t.jsx)(n.a, {
                  href: '/docs/start-pixel-installation',
                  children: 'next section',
                }),
                '.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => l, x: () => o});
      var t = i(3696);
      const s = {},
        r = t.createContext(s);
      function l(e) {
        const n = t.useContext(r);
        return t.useMemo(
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
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          t.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

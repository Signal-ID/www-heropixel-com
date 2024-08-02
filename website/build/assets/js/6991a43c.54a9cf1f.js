/*! For license information please see 6991a43c.54a9cf1f.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2595],
  {
    2192: (n, e, i) => {
      var t = i(3696),
        a = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        r =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(n, e, i) {
        var t,
          o = {},
          l = null,
          d = null;
        for (t in (void 0 !== i && (l = '' + i),
        void 0 !== e.key && (l = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          s.call(e, t) && !c.hasOwnProperty(t) && (o[t] = e[t]);
        if (n && n.defaultProps)
          for (t in (e = n.defaultProps)) void 0 === o[t] && (o[t] = e[t]);
        return {
          $$typeof: a,
          type: n,
          key: l,
          ref: d,
          props: o,
          _owner: r.current,
        };
      }
      (e.Fragment = o), (e.jsx = l), (e.jsxs = l);
    },
    2540: (n, e, i) => {
      n.exports = i(2192);
    },
    5999: (n, e, i) => {
      i.r(e),
        i.d(e, {
          assets: () => c,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => l,
        });
      var t = i(2540),
        a = i(3023);
      const o = {
          id: 'add-bank-account',
          title: 'Add Your Bank Account',
          description: 'desc',
        },
        s = 'Adding a Bank Account with Plaid',
        r = {
          id: 'add-bank-account',
          title: 'Add Your Bank Account',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/add-bank-account.md',
          sourceDirName: '.',
          slug: '/add-bank-account',
          permalink: '/docs/add-bank-account',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718839459e3,
          frontMatter: {
            id: 'add-bank-account',
            title: 'Add Your Bank Account',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {title: 'Billing Overview', permalink: '/docs/billing'},
          next: {title: 'Frequently Asked Questions', permalink: '/docs/faq'},
        },
        c = {},
        l = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {
            value: 'Steps to Add a Bank Account',
            id: 'steps-to-add-a-bank-account',
            level: 2,
          },
          {value: 'FAQ', id: 'faq', level: 2},
          {value: 'What is Plaid?', id: 'what-is-plaid', level: 3},
          {value: 'Is Plaid secure?', id: 'is-plaid-secure', level: 3},
          {
            value: 'Why should I use Plaid to link my bank account?',
            id: 'why-should-i-use-plaid-to-link-my-bank-account',
            level: 3,
          },
          {
            value: 'What if my bank is not listed in Plaid?',
            id: 'what-if-my-bank-is-not-listed-in-plaid',
            level: 3,
          },
          {
            value: 'Can I trust Plaid with my banking information?',
            id: 'can-i-trust-plaid-with-my-banking-information',
            level: 3,
          },
          {
            value:
              'What should I do if I encounter issues linking my bank account?',
            id: 'what-should-i-do-if-i-encounter-issues-linking-my-bank-account',
            level: 3,
          },
        ];
      function d(n) {
        const e = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, a.R)(),
          ...n.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(e.h1, {
              id: 'adding-a-bank-account-with-plaid',
              children: 'Adding a Bank Account with Plaid',
            }),
            '\n',
            (0, t.jsx)(e.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, t.jsx)(e.p, {
              children:
                'This guide will help you add your bank account using the Plaid service, enabling you to pay your invoices directly from your bank account.',
            }),
            '\n',
            (0, t.jsx)(e.h2, {
              id: 'steps-to-add-a-bank-account',
              children: 'Steps to Add a Bank Account',
            }),
            '\n',
            (0, t.jsxs)(e.ol, {
              children: [
                '\n',
                (0, t.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(e.p, {
                      children: (0, t.jsx)(e.strong, {
                        children: 'Navigate to the Bank Account Section',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(e.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(e.li, {
                          children: 'Log in to your account on our website.',
                        }),
                        '\n',
                        (0, t.jsxs)(e.li, {
                          children: [
                            'Go to the ',
                            (0, t.jsx)(e.a, {
                              href: 'https://app.heropixel.com/settings/billing',
                              children: 'Billing',
                            }),
                            ' section of the Organization Settings.',
                          ],
                        }),
                        '\n',
                        (0, t.jsx)(e.li, {
                          children: 'Click on "Add a Bank Account."',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(e.p, {
                      children: (0, t.jsx)(e.strong, {
                        children: 'Connect Your Bank Account with Plaid',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(e.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(e.li, {
                          children: 'A Plaid window will open.',
                        }),
                        '\n',
                        (0, t.jsx)(e.li, {
                          children:
                            'Select your bank from the list or use the search bar to find it.',
                        }),
                        '\n',
                        (0, t.jsx)(e.li, {
                          children:
                            'Enter your online banking credentials (username and password) for the selected bank.',
                        }),
                        '\n',
                        (0, t.jsx)(e.li, {
                          children:
                            'Follow the on-screen instructions to complete the connection process.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(e.li, {
                  children: [
                    '\n',
                    (0, t.jsx)(e.p, {
                      children: (0, t.jsx)(e.strong, {
                        children: 'Verify and Confirm',
                      }),
                    }),
                    '\n',
                    (0, t.jsxs)(e.ul, {
                      children: [
                        '\n',
                        (0, t.jsx)(e.li, {
                          children:
                            'Once your bank account is linked, Plaid will verify the connection.',
                        }),
                        '\n',
                        (0, t.jsx)(e.li, {
                          children:
                            'Confirm the details of the connected bank account.',
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
            (0, t.jsx)(e.p, {
              children:
                'Your bank account is now added and ready for use to pay invoices directly. This account may also be used by other Owners of the organization to pay invoices.',
            }),
            '\n',
            (0, t.jsx)(e.h2, {id: 'faq', children: 'FAQ'}),
            '\n',
            (0, t.jsx)(e.h3, {id: 'what-is-plaid', children: 'What is Plaid?'}),
            '\n',
            (0, t.jsx)(e.p, {
              children:
                'Plaid is a service that securely connects your bank account to various financial applications. It allows you to link your bank account for easy and secure payments.',
            }),
            '\n',
            (0, t.jsx)(e.h3, {
              id: 'is-plaid-secure',
              children: 'Is Plaid secure?',
            }),
            '\n',
            (0, t.jsx)(e.p, {
              children:
                'Yes, Plaid uses advanced encryption and security measures to protect your financial information. Your bank credentials are never shared with us; they are securely processed by Plaid.',
            }),
            '\n',
            (0, t.jsx)(e.h3, {
              id: 'why-should-i-use-plaid-to-link-my-bank-account',
              children: 'Why should I use Plaid to link my bank account?',
            }),
            '\n',
            (0, t.jsx)(e.p, {
              children:
                'Using Plaid simplifies and secures the process of adding your bank account. It allows for instant verification and provides a secure way to manage your payments.',
            }),
            '\n',
            (0, t.jsx)(e.h3, {
              id: 'what-if-my-bank-is-not-listed-in-plaid',
              children: 'What if my bank is not listed in Plaid?',
            }),
            '\n',
            (0, t.jsx)(e.p, {
              children:
                'If your bank is not listed, you can manually add your bank account using the "Add Manually" option. This may require additional steps for verification.',
            }),
            '\n',
            (0, t.jsx)(e.h3, {
              id: 'can-i-trust-plaid-with-my-banking-information',
              children: 'Can I trust Plaid with my banking information?',
            }),
            '\n',
            (0, t.jsx)(e.p, {
              children:
                'Yes, Plaid is trusted by thousands of financial institutions and applications worldwide. They adhere to strict security standards to ensure your data is protected.',
            }),
            '\n',
            (0, t.jsx)(e.h3, {
              id: 'what-should-i-do-if-i-encounter-issues-linking-my-bank-account',
              children:
                'What should I do if I encounter issues linking my bank account?',
            }),
            '\n',
            (0, t.jsxs)(e.p, {
              children: [
                'If you experience any problems while linking your bank account with Plaid, you can contact our support team at [',
                (0, t.jsx)(e.a, {
                  href: 'mailto:support@heropixel.com',
                  children: 'support@heropixel.com',
                }),
                '] for assistance. We are here to help you through the process.',
              ],
            }),
          ],
        });
      }
      function u(n = {}) {
        const {wrapper: e} = {...(0, a.R)(), ...n.components};
        return e
          ? (0, t.jsx)(e, {...n, children: (0, t.jsx)(d, {...n})})
          : d(n);
      }
    },
    3023: (n, e, i) => {
      i.d(e, {R: () => s, x: () => r});
      var t = i(3696);
      const a = {},
        o = t.createContext(a);
      function s(n) {
        const e = t.useContext(o);
        return t.useMemo(
          function () {
            return 'function' == typeof n ? n(e) : {...e, ...n};
          },
          [e, n]
        );
      }
      function r(n) {
        let e;
        return (
          (e = n.disableParentContext
            ? 'function' == typeof n.components
              ? n.components(a)
              : n.components || a
            : s(n.components)),
          t.createElement(o.Provider, {value: e}, n.children)
        );
      }
    },
  },
]);

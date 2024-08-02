/*! For license information please see 159171c3.83537d95.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8409],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        s = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, r) {
        var n,
          i = {},
          a = null,
          d = null;
        for (n in (void 0 !== r && (a = '' + r),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          o.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: a,
          ref: d,
          props: i,
          _owner: l.current,
        };
      }
      (t.Fragment = i), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    7516: (e, t, r) => {
      r.d(t, {A: () => n});
      const n =
        r.p +
        'assets/images/registration-ss-8a0c9e949cf1dfc2b885f79966d0af24.png';
    },
    9911: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => o,
          default: () => u,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => a,
        });
      var n = r(2540),
        s = r(3023);
      const i = {
          id: 'start-registration',
          title: 'Start by Registering',
          description: 'desc',
        },
        o = 'User Registration Guide',
        l = {
          id: 'start-registration',
          title: 'Start by Registering',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/start-registration.md',
          sourceDirName: '.',
          slug: '/start-registration',
          permalink: '/docs/start-registration',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719598717e3,
          frontMatter: {
            id: 'start-registration',
            title: 'Start by Registering',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Reviewing Performance Metrics',
            permalink: '/docs/intro-to-dashboard',
          },
          next: {
            title: 'Create a New Pixel',
            permalink: '/docs/start-create-a-pixel',
          },
        },
        c = {},
        a = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {value: 'FOLLOW THESE STEPS', id: 'follow-these-steps', level: 2},
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Support', id: 'support', level: 2},
        ];
      function d(e) {
        const t = {
          a: 'a',
          blockquote: 'blockquote',
          h1: 'h1',
          h2: 'h2',
          img: 'img',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'user-registration-guide',
              children: 'User Registration Guide',
            }),
            '\n',
            (0, n.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, n.jsxs)(t.p, {
                  children: [
                    (0, n.jsx)('strong', {
                      children: 'REGISTRATION IS BY INVITE ONLY',
                    }),
                    ' To receive an invite please join our ',
                    (0, n.jsx)(t.a, {
                      href: 'mailto:mark@heropixel.com',
                      children: 'waiting list',
                    }),
                    '. We will contact you directly before sending out your invite.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'We want to prevent you from running into issues, so you can quickly get up to speed without further edits to your account.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'follow-these-steps',
              children: 'FOLLOW THESE STEPS',
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.strong, {
                        children: 'Access the Registration Page',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children:
                            'Locate the email in which we sent out your invite.',
                        }),
                        '\n',
                        (0, n.jsx)(t.li, {
                          children:
                            'Click the special invite link with the email to access your registration page.',
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
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.img, {
                  src: r(7516).A + '',
                  width: '938',
                  height: '1300',
                }),
                ' 2. ',
                (0, n.jsx)(t.strong, {
                  children: 'Fill in Personal Information',
                }),
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'First & Last Name'}),
                    ": This will be used to create your user account, you will not share this account. You'll be able to invite other users to create their own accounts and access your organization.",
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Email Address'}),
                    ': You will receive an email activation link, so make sure to double check the email you entered.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Password Fields'}),
                    ': Use 8 or more characters with a mix of letters, numbers & symbols. The four bars under your password will light green when all requirements are met.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.ol, {
              start: '3',
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.strong, {
                        children: 'Accept Terms and Conditions',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children:
                            'Read the terms and conditions and privacy policy.',
                        }),
                        '\n',
                        (0, n.jsx)(t.li, {
                          children: 'Check the box to agree to the them.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    '\n',
                    (0, n.jsx)(t.p, {
                      children: (0, n.jsx)(t.strong, {
                        children: 'Submit the Form',
                      }),
                    }),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children:
                            'Click the "Get started" button to create your account.',
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
            (0, n.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Issues with Password?'}),
                    '\n',
                    (0, n.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, n.jsx)(t.li, {
                          children:
                            'Ensure your password meets the required criteria.',
                        }),
                        '\n',
                        (0, n.jsx)(t.li, {
                          children:
                            'If you forget your password, use the "Forgot Password" link to reset it.',
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
            (0, n.jsx)(t.h2, {id: 'support', children: 'Support'}),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'If you encounter any issues or need further assistance, contact our support team at ',
                    (0, n.jsx)(t.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => o, x: () => l});
      var n = r(3696);
      const s = {},
        i = n.createContext(s);
      function o(e) {
        const t = n.useContext(i);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : o(e.components)),
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

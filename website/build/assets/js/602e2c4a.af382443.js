/*! For license information please see 602e2c4a.af382443.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8750],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        c =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var i,
          r = {},
          l = null,
          d = null;
        for (i in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          o.call(t, i) && !a.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: d,
          props: r,
          _owner: c.current,
        };
      }
      (t.Fragment = r), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    4353: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => l,
        });
      var i = n(2540),
        s = n(3023);
      const r = {
          id: 'implicit-consent',
          title: 'Implicit Consent',
          description:
            'Documentation on how to use the implicit consent tag with ConsentGuard.',
        },
        o = void 0,
        c = {
          id: 'consentguard/implicit-consent',
          title: 'Implicit Consent',
          description:
            'Documentation on how to use the implicit consent tag with ConsentGuard.',
          source:
            '@site/versioned_docs/version-0.0.1/consentguard/implicit-consent.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/implicit-consent',
          permalink: '/docs/consentguard/implicit-consent',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724363592e3,
          frontMatter: {
            id: 'implicit-consent',
            title: 'Implicit Consent',
            description:
              'Documentation on how to use the implicit consent tag with ConsentGuard.',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'Consent Categories',
            permalink: '/docs/consentguard/consent-categories',
          },
          next: {
            title: 'Explicit Consent',
            permalink: '/docs/consentguard/explicit-consent',
          },
        },
        a = {},
        l = [
          {
            value: 'Implicit Consent Management',
            id: 'implicit-consent-management',
            level: 2,
          },
          {value: 'Overview', id: 'overview', level: 3},
          {
            value: 'What is Implicit Consent?',
            id: 'what-is-implicit-consent',
            level: 3,
          },
          {value: 'How it Works', id: 'how-it-works', level: 3},
          {value: 'Example', id: 'example', level: 3},
          {
            value: 'Remember to Include the ConsentGuard JavaScript',
            id: 'remember-to-include-the-consentguard-javascript',
            level: 3,
          },
          {
            value: 'Categories and Their Descriptions',
            id: 'categories-and-their-descriptions',
            level: 3,
          },
          {value: 'Important Notes', id: 'important-notes', level: 3},
        ];
      function d(e) {
        const t = {
          code: 'code',
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
            (0, i.jsx)(t.h2, {
              id: 'implicit-consent-management',
              children: 'Implicit Consent Management',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Implicit consent allows your scripts to load as normal unless the user explicitly opts out of certain categories. This is useful for compliance with regulations like CCPA, where users are considered to have given consent unless they take action to opt-out. This documentation explains how to use the ',
                (0, i.jsx)(t.code, {children: 'script-implicit'}),
                ' tag provided by ConsentGuard.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'what-is-implicit-consent',
              children: 'What is Implicit Consent?',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Implicit consent means that users are considered to have given consent by not taking any action to opt-out. For example, continuing to use the website might be seen as implicit consent. This approach is less commonly used in GDPR jurisdictions due to stricter data protection regulations, but it is compliant with CCPA as long as users are provided with a clear option to opt-out.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'how-it-works', children: 'How it Works'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Adding the ',
                (0, i.jsx)(t.code, {children: 'script-implicit'}),
                ' tag to your scripts will cause their loading to be controlled by the ConsentGuard System. As long as this JavaScript snippet is included on your pages, the script tag will load as normal unless the user adjusts their allowed categories. Once the script preferences are made, and only if categories are blocked, ConsentGuard will step in and block the loading for implicit tags according to the user\u2019s blocked categories.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Essential scripts cannot be disabled by users and therefore should not receive the special script tag as it may interfere with the functional loading of your essential scripts.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Identify the script tags on your website that should be controlled by implicit consent and replace them with the ',
                (0, i.jsx)(t.code, {children: 'script-implicit'}),
                ' tag. Add the ',
                (0, i.jsx)(t.code, {children: 'data-consent-category'}),
                ' attribute to specify the category of the script.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  '\x3c!-- Original script tag --\x3e\n<script src="path/to/your/script.js"></script>\n\n\x3c!-- Updated script tag with implicit consent --\x3e\n<script-implicit\n  data-consent-category="performance"\n  src="path/to/your/script.js"></script-implicit>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'remember-to-include-the-consentguard-javascript',
              children: 'Remember to Include the ConsentGuard JavaScript',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Ensure you have included the ConsentGuard JavaScript snippet in your HTML or this script-implicit will not load.',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  '<script data-consent-category="essential">\n  window.cookieConsentOptions = {\n    privacyPolicyLink: \'https://yourwebsite.com/privacy-policy\',\n  };\n</script>\n<script\n  data-consent-category="essential"\n  src="https://app.heropixel.com/consentguard_cookie_banner/index.js"></script>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'categories-and-their-descriptions',
              children: 'Categories and Their Descriptions',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {children: 'Category'}),
                      (0, i.jsx)(t.th, {children: 'Description'}),
                      (0, i.jsx)(t.th, {children: 'Implicit for CCPA'}),
                      (0, i.jsx)(t.th, {children: 'Explicit for GDPR'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'essential'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Essential for basic website functionality.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Yes'}),
                        (0, i.jsx)(t.td, {children: 'Yes'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'performance'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Used for analytics and tracking site performance.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Yes'}),
                        (0, i.jsx)(t.td, {children: 'No'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'functional'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Enable additional functionality like chat widgets or videos.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Yes'}),
                        (0, i.jsx)(t.td, {children: 'No'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'targeting'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Used for advertising and tracking user activity.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Yes'}),
                        (0, i.jsx)(t.td, {children: 'No'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'social'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Enable social media sharing and interactions.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Yes'}),
                        (0, i.jsx)(t.td, {children: 'No'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'important-notes',
              children: 'Important Notes',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Essential Scripts:'}),
                    ' Essential scripts should not be tagged with ',
                    (0, i.jsx)(t.code, {children: 'script-implicit'}),
                    ' as this may interfere with the functional loading of your essential scripts. These scripts are always loaded regardless of user consent preferences.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'User Preferences:'}),
                    ' ConsentGuard will manage the loading of scripts based on the user\u2019s preferences. If a user blocks a category, the corresponding scripts with ',
                    (0, i.jsx)(t.code, {children: 'script-implicit'}),
                    ' tags will not be loaded.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children: 'Include consentguard.js:',
                    }),
                    ' Without the ConsentGuard.js this tag will not load.',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => o, x: () => c});
      var i = n(3696);
      const s = {},
        r = i.createContext(s);
      function o(e) {
        const t = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : o(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

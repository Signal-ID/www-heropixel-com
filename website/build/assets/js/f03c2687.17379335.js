/*! For license information please see f03c2687.17379335.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9368],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        o =
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
          c.call(t, i) && !a.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: d,
          props: r,
          _owner: o.current,
        };
      }
      (t.Fragment = r), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    2850: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => l,
        });
      var i = n(2540),
        s = n(3023);
      const r = {
          id: 'explicit-consent',
          title: 'Explicit Consent',
          description:
            'Documentation on how to use the explicit consent tag with ConsentGuard.',
        },
        c = void 0,
        o = {
          id: 'consentguard/explicit-consent',
          title: 'Explicit Consent',
          description:
            'Documentation on how to use the explicit consent tag with ConsentGuard.',
          source:
            '@site/versioned_docs/version-0.0.1/consentguard/explicit-consent.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/explicit-consent',
          permalink: '/docs/consentguard/explicit-consent',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723086403e3,
          frontMatter: {
            id: 'explicit-consent',
            title: 'Explicit Consent',
            description:
              'Documentation on how to use the explicit consent tag with ConsentGuard.',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'Implicit Consent',
            permalink: '/docs/consentguard/implicit-consent',
          },
          next: {
            title: 'Recording User Preferences',
            permalink: '/docs/consentguard/using-jitsu',
          },
        },
        a = {},
        l = [
          {
            value: 'Explicit Consent Management',
            id: 'explicit-consent-management',
            level: 2,
          },
          {value: 'Overview', id: 'overview', level: 3},
          {
            value: 'What is Explicit Consent?',
            id: 'what-is-explicit-consent',
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
              id: 'explicit-consent-management',
              children: 'Explicit Consent Management',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Explicit consent requires users to actively agree to the collection and use of their data by providing clear consent. This is typically required for non-essential cookies, such as those used for tracking or targeting, especially under GDPR regulations.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'what-is-explicit-consent',
              children: 'What is Explicit Consent?',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Explicit consent means that users must actively opt-in to allow the collection and use of their data. This can be done by clicking an "Accept" button or checking a box. For scripts that collect data, explicit consent is crucial to ensure compliance with GDPR.',
            }),
            '\n',
            (0, i.jsxs)('div', {
              className: 'content-banner',
              children: [
                (0, i.jsx)(t.p, {
                  children:
                    'Rest assured that much research has gone into the study of acceptance rates. ConsentGuard has been designed specifically to get the highest number of opt-ins possible.',
                }),
                (0, i.jsx)('img', {
                  className: 'content-banner-img',
                  src: '/docs/assets/p_android-ios-devices.svg',
                  alt: ' ',
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'how-it-works', children: 'How it Works'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Adding the ',
                (0, i.jsx)(t.code, {children: 'script-explicit'}),
                ' tag to your scripts ensures they are only loaded if the user explicitly opts in to the relevant categories. These categories are not loaded unless the user consents to them. Selecting the "Accept All" option is an explicit opt-in and will cause these scripts to load.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Identify the script tags on your website that should be controlled by explicit consent and replace them with the ',
                (0, i.jsx)(t.code, {children: 'script-explicit'}),
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
                  '\x3c!-- Original script tag --\x3e\n<script src="path/to/your/script.js"></script>\n\n\x3c!-- Updated script tag with explicit consent --\x3e\n<script-explicit\n  data-consent-category="targeting"\n  src="path/to/your/script.js"></script-explicit>\n',
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
                'Ensure you have included the ConsentGuard JavaScript snippet in your HTML:',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  '<script data-consent-category="essential">\n  window.cookieConsentOptions = {\n    privacy_policy_link: \'https://yourwebsite.com/privacy-policy\',\n  };\n</script>\n<script\n  data-consent-category="essential"\n  src="https://app.heropixel.com/consentguard_cookie_banner/index.js"></script>\n',
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
                    (0, i.jsx)(t.code, {children: 'script-explicit'}),
                    " as they are necessary for the website's basic functionality and should always be loaded.",
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'User Preferences:'}),
                    ' ConsentGuard will manage the loading of scripts based on the user\u2019s preferences. If a user does not opt in to a category, the corresponding scripts with ',
                    (0, i.jsx)(t.code, {children: 'script-explicit'}),
                    ' tags will not be loaded.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children: 'Include consentguard.js:',
                    }),
                    ' Without the ConsentGuard.js, this tag will not load.',
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
      n.d(t, {R: () => c, x: () => o});
      var i = n(3696);
      const s = {},
        r = i.createContext(s);
      function c(e) {
        const t = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function o(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

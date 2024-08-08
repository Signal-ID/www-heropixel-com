/*! For license information please see 1dd397c9.bbd2dbb7.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9023],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        o =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var i,
          r = {},
          l = null,
          d = null;
        for (i in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          a.call(t, i) && !c.hasOwnProperty(i) && (r[i] = t[i]);
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
    8488: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => l,
        });
      var i = n(2540),
        s = n(3023);
      const r = {
          id: 'consent-categories',
          title: 'Consent Categories',
          description:
            'How to categorize scripts with ConsentGuard and ensure compliance with GDPR and CCPA.',
        },
        a = 'Consent Categories',
        o = {
          id: 'consentguard/consent-categories',
          title: 'Consent Categories',
          description:
            'How to categorize scripts with ConsentGuard and ensure compliance with GDPR and CCPA.',
          source:
            '@site/versioned_docs/version-0.0.1/consentguard/consent-categories.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/consent-categories',
          permalink: '/docs/consentguard/consent-categories',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723086403e3,
          frontMatter: {
            id: 'consent-categories',
            title: 'Consent Categories',
            description:
              'How to categorize scripts with ConsentGuard and ensure compliance with GDPR and CCPA.',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'Installation Guide',
            permalink: '/docs/consentguard/consentguard-installation',
          },
          next: {
            title: 'Implicit Consent',
            permalink: '/docs/consentguard/implicit-consent',
          },
        },
        c = {},
        l = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Categorizing Scripts', id: 'categorizing-scripts', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {
            value: 'Before Categorization',
            id: 'before-categorization',
            level: 4,
          },
          {value: 'After Categorization', id: 'after-categorization', level: 4},
          {
            value: 'Developer Console Alerts',
            id: 'developer-console-alerts',
            level: 3,
          },
          {value: 'Essential Scripts', id: 'essential-scripts', level: 3},
          {value: 'Consent Categories', id: 'consent-categories-1', level: 2},
          {value: 'Summary', id: 'summary', level: 2},
        ];
      function d(e) {
        const t = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          p: 'p',
          pre: 'pre',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'consent-categories',
              children: 'Consent Categories',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'ConsentGuard helps you manage cookie consent by categorizing scripts on your website. This ensures compliance with data protection regulations like GDPR and CCPA.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'categorizing-scripts',
              children: 'Categorizing Scripts',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Adding the ',
                (0, i.jsx)(t.code, {children: 'data-consent-category'}),
                ' attribute to your script tags helps ConsentGuard know how to handle them. If a script is not categorized, the system will nag you in the developer console until you address it. Essential scripts do not require any changes and should be marked as ',
                (0, i.jsx)(t.code, {children: 'essential'}),
                '.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Here\u2019s a simple example of an existing script tag and how to add the ',
                (0, i.jsx)(t.code, {children: 'data-consent-category'}),
                ' attribute:',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'before-categorization',
              children: 'Before Categorization',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children: '<script src="path/to/analytics.js"></script>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h4, {
              id: 'after-categorization',
              children: 'After Categorization',
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  '<script\n  data-consent-category="performance"\n  src="path/to/analytics.js"></script>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'developer-console-alerts',
              children: 'Developer Console Alerts',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'If a script does not have a ',
                (0, i.jsx)(t.code, {children: 'data-consent-category'}),
                ' attribute, you will see an alert in the developer console. This ensures that every script is reviewed and categorized appropriately.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'essential-scripts',
              children: 'Essential Scripts',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Essential scripts do not need to be changed. GDPR and CCPA allow essential scripts required for the basic functionality of the website. Mark these as ',
                (0, i.jsx)(t.code, {children: 'essential'}),
                ', and the nag will go away.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  '<script\n  data-consent-category="essential"\n  src="path/to/essential.js"></script>\n',
              }),
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'consent-categories-1',
              children: 'Consent Categories',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Here\u2019s a table listing all consent categories, along with descriptions and their default consent requirements under GDPR and CCPA:',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {children: 'Category'}),
                      (0, i.jsx)(t.th, {children: 'Description'}),
                      (0, i.jsx)(t.th, {children: 'GDPR'}),
                      (0, i.jsx)(t.th, {children: 'CCPA'}),
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
                        (0, i.jsx)(t.td, {children: 'Implicit'}),
                        (0, i.jsx)(t.td, {children: 'Implicit'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'performance'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Used for analytics and tracking site performance.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Explicit'}),
                        (0, i.jsx)(t.td, {children: 'Implicit'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'functional'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Enable additional functionality like chat widgets or videos.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Explicit'}),
                        (0, i.jsx)(t.td, {children: 'Implicit'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'targeting'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Used for advertising and tracking user activity.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Explicit'}),
                        (0, i.jsx)(t.td, {children: 'Implicit'}),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {children: 'social'}),
                        (0, i.jsx)(t.td, {
                          children:
                            'Enable social media sharing and interactions.',
                        }),
                        (0, i.jsx)(t.td, {children: 'Explicit'}),
                        (0, i.jsx)(t.td, {children: 'Implicit'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'By following this guide and categorizing your scripts correctly, you can ensure that your website is compliant with data protection regulations and provides a better user experience.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'summary', children: 'Summary'}),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'Properly categorizing your scripts with the ',
                (0, i.jsx)(t.code, {children: 'data-consent-category'}),
                ' attribute is crucial for compliance and transparency. Make sure to review and categorize all scripts to avoid any developer console alerts and ensure your website functions smoothly under ConsentGuard.',
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
      n.d(t, {R: () => a, x: () => o});
      var i = n(3696);
      const s = {},
        r = i.createContext(s);
      function a(e) {
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
            : a(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

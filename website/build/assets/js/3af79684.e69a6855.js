/*! For license information please see 3af79684.e69a6855.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3439],
  {
    2192: (n, e, t) => {
      var o = t(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(n, e, t) {
        var o,
          s = {},
          l = null,
          d = null;
        for (o in (void 0 !== t && (l = '' + t),
        void 0 !== e.key && (l = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          r.call(e, o) && !c.hasOwnProperty(o) && (s[o] = e[o]);
        if (n && n.defaultProps)
          for (o in (e = n.defaultProps)) void 0 === s[o] && (s[o] = e[o]);
        return {
          $$typeof: i,
          type: n,
          key: l,
          ref: d,
          props: s,
          _owner: a.current,
        };
      }
      (e.Fragment = s), (e.jsx = l), (e.jsxs = l);
    },
    2540: (n, e, t) => {
      n.exports = t(2192);
    },
    5537: (n, e, t) => {
      t.r(e),
        t.d(e, {
          assets: () => c,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => l,
        });
      var o = t(2540),
        i = t(3023);
      const s = {
          id: 'consentguard-installation',
          title: 'Installation Guide',
          description:
            'How to install and configure ConsentGuard on your website.',
        },
        r = 'ConsentGuard Installation Guide',
        a = {
          id: 'consentguard/consentguard-installation',
          title: 'Installation Guide',
          description:
            'How to install and configure ConsentGuard on your website.',
          source:
            '@site/versioned_docs/version-0.0.1/consentguard/installation.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/consentguard-installation',
          permalink: '/docs/consentguard/consentguard-installation',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724363592e3,
          frontMatter: {
            id: 'consentguard-installation',
            title: 'Installation Guide',
            description:
              'How to install and configure ConsentGuard on your website.',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'ConsentGuard Overview',
            permalink: '/docs/consentguard/consentguard-overview',
          },
          next: {
            title: 'Consent Categories',
            permalink: '/docs/consentguard/consent-categories',
          },
        },
        c = {},
        l = [
          {value: 'Getting Started', id: 'getting-started', level: 2},
          {value: 'Option 1: Using CDN', id: 'option-1-using-cdn', level: 3},
          {
            value: 'Option 2: Hosting Locally',
            id: 'option-2-hosting-locally',
            level: 3,
          },
          {
            value: 'Congratulations! But you&#39;re not done yet...',
            id: 'congratulations-but-youre-not-done-yet',
            level: 2,
          },
        ];
      function d(n) {
        const e = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          ul: 'ul',
          ...(0, i.R)(),
          ...n.components,
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(e.h1, {
              id: 'consentguard-installation-guide',
              children: 'ConsentGuard Installation Guide',
            }),
            '\n',
            (0, o.jsx)(e.h2, {
              id: 'getting-started',
              children: 'Getting Started',
            }),
            '\n',
            (0, o.jsx)(e.p, {
              children:
                'This guide will help you get ConsentGuard up and running on your website. ConsentGuard provides a simple and effective way to manage cookie consent and ensure compliance with data protection regulations.',
            }),
            '\n',
            (0, o.jsx)(e.p, {
              children:
                "This is only the first step and does not mean that you are compliant. Once you've installed this tag on your website the ConsentGuard Cookie Banner will begin displaying and accepting user cookie preferences immediately. In the next step we will show you how to control how those scripts load.",
            }),
            '\n',
            (0, o.jsx)(e.h3, {
              id: 'option-1-using-cdn',
              children: 'Option 1: Using CDN',
            }),
            '\n',
            (0, o.jsxs)(e.p, {
              children: [
                'To use ConsentGuard via CDN, simply include the following script in your HTML. Make sure to place it in the ',
                (0, o.jsx)(e.code, {children: '<head>'}),
                ' above all other script tags.',
              ],
            }),
            '\n',
            (0, o.jsx)(e.pre, {
              children: (0, o.jsx)(e.code, {
                className: 'language-html',
                children:
                  '<script data-consent-category="essential">\n  window.cookieConsentOptions = {\n    privacyPolicyLink: \'https://yourwebsite.com/privacy-policy\',\n  };\n</script>\n<script\n  data-consent-category="essential"\n  src="https://app.heropixel.com/consentguard_cookie_banner/index.js"></script>\n',
              }),
            }),
            '\n',
            (0, o.jsx)(e.h3, {
              id: 'option-2-hosting-locally',
              children: 'Option 2: Hosting Locally',
            }),
            '\n',
            (0, o.jsxs)(e.p, {
              children: [
                'If you prefer to host ConsentGuard locally, download the script from the ',
                (0, o.jsx)(e.a, {
                  href: 'https://github.com/Signal-ID/ConsentGuard',
                  children: 'Github repository',
                }),
                ' and include it in your project. Then, add the following script in your HTML. Make sure to place it in the ',
                (0, o.jsx)(e.code, {children: '<head>'}),
                ' above all other script tags.',
              ],
            }),
            '\n',
            (0, o.jsx)(e.pre, {
              children: (0, o.jsx)(e.code, {
                className: 'language-html',
                children:
                  '<script data-consent-category="essential">\n  window.cookieConsentOptions = {\n    privacyPolicyLink: \'https://yourwebsite.com/privacy-policy\',\n  };\n</script>\n<script\n  data-consent-category="essential"\n  src="/path/to/your/consentguard.js"></script>\n',
              }),
            }),
            '\n',
            (0, o.jsx)(e.h2, {
              id: 'congratulations-but-youre-not-done-yet',
              children: "Congratulations! But you're not done yet...",
            }),
            '\n',
            (0, o.jsx)(e.p, {
              children:
                'The next step is to actually control the way your scripts are loading:',
            }),
            '\n',
            (0, o.jsxs)(e.ul, {
              children: [
                '\n',
                (0, o.jsx)(e.li, {
                  children: (0, o.jsx)(e.a, {
                    href: '/docs/consentguard/consent-categories',
                    children: 'Script Categories',
                  }),
                }),
                '\n',
                (0, o.jsx)(e.li, {
                  children: (0, o.jsx)(e.a, {
                    href: '/docs/consentguard/implicit-consent',
                    children: 'Managing Implicit Consent',
                  }),
                }),
                '\n',
                (0, o.jsx)(e.li, {
                  children: (0, o.jsx)(e.a, {
                    href: '/docs/consentguard/explicit-consent',
                    children: 'Managing Explicit Consent',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function u(n = {}) {
        const {wrapper: e} = {...(0, i.R)(), ...n.components};
        return e
          ? (0, o.jsx)(e, {...n, children: (0, o.jsx)(d, {...n})})
          : d(n);
      }
    },
    3023: (n, e, t) => {
      t.d(e, {R: () => r, x: () => a});
      var o = t(3696);
      const i = {},
        s = o.createContext(i);
      function r(n) {
        const e = o.useContext(s);
        return o.useMemo(
          function () {
            return 'function' == typeof n ? n(e) : {...e, ...n};
          },
          [e, n]
        );
      }
      function a(n) {
        let e;
        return (
          (e = n.disableParentContext
            ? 'function' == typeof n.components
              ? n.components(i)
              : n.components || i
            : r(n.components)),
          o.createElement(s.Provider, {value: e}, n.children)
        );
      }
    },
  },
]);

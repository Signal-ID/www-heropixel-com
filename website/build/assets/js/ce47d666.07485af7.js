/*! For license information please see ce47d666.07485af7.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7410],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var r,
          s = {},
          d = null,
          u = null;
        for (r in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (u = n.ref),
        n))
          i.call(n, r) && !c.hasOwnProperty(r) && (s[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === s[r] && (s[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: u,
          props: s,
          _owner: a.current,
        };
      }
      (n.Fragment = s), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    669: (e, n, t) => {
      t.d(n, {A: () => r});
      const r =
        t.p +
        'assets/images/consentguard-cookie-banner-dfb3ccfa0356b26170e59e876713ae08.png';
    },
    6899: (e, n, t) => {
      t.d(n, {A: () => r});
      const r =
        t.p + 'assets/images/consentguard-207c95af9d94b047730f501ec6bf2168.png';
    },
    6759: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => d,
        });
      var r = t(2540),
        o = t(3023);
      const s = {
          id: 'consentguard-overview',
          title: 'ConsentGuard Overview',
          description: 'Introduction to ConsentGuard and its benefits',
        },
        i = 'ConsentGuard Cookie Banner',
        a = {
          id: 'consentguard/consentguard-overview',
          title: 'ConsentGuard Overview',
          description: 'Introduction to ConsentGuard and its benefits',
          source: '@site/versioned_docs/version-0.0.1/consentguard/intro.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/consentguard-overview',
          permalink: '/docs/consentguard/consentguard-overview',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723086403e3,
          frontMatter: {
            id: 'consentguard-overview',
            title: 'ConsentGuard Overview',
            description: 'Introduction to ConsentGuard and its benefits',
          },
          sidebar: 'consentguard',
          next: {
            title: 'Installation Guide',
            permalink: '/docs/consentguard/consentguard-installation',
          },
        },
        c = {},
        d = [
          {value: 'Overview', id: 'overview', level: 2},
          {
            value: 'Features and Benefits',
            id: 'features-and-benefits',
            level: 2,
          },
        ];
      function u(e) {
        const n = {
          h1: 'h1',
          h2: 'h2',
          img: 'img',
          p: 'p',
          strong: 'strong',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'consentguard-cookie-banner',
              children: 'ConsentGuard Cookie Banner',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.img, {
                  alt: 'ConsentGuard Privacy Controls',
                  src: t(6899).A + '',
                  width: '3228',
                  height: '2524',
                }),
                '\nGet a plug-n-play Cookie Banner that provides comprehensive protection using ConsentGuard, a lightweight cookie banner that works the moment you drop the snippet on your page.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'We specifically designed ConsentGuard to be the easiest cookie banner system on the planet.',
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'features-and-benefits',
              children: 'Features and Benefits',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.strong, {children: 'Easy Installation:'}),
                ' ConsentGuard can be integrated into your website and work with your existing infrastructure in minutes.',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.strong, {children: 'Compliance:'}),
                ' Ensures compliance with major data protection regulations like GDPR and CCPA.',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.strong, {children: 'Customizable:'}),
                ' Allows customization of colors, privacy policy links, and consent options.',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.strong, {
                  children: 'Flexible Consent Management:',
                }),
                ' Supports both implicit and explicit consent types to cater to different regulatory requirements.',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                (0, r.jsx)(n.strong, {children: 'Script Management:'}),
                ' Automatically handles script loading based on user preferences and category selections.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.img, {
                alt: 'ConsentGuard Cookie Banner',
                src: t(669).A + '',
                width: '5976',
                height: '464',
              }),
            }),
          ],
        });
      }
      function l(e = {}) {
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(u, {...e})})
          : u(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => i, x: () => a});
      var r = t(3696);
      const o = {},
        s = r.createContext(o);
      function i(e) {
        const n = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          r.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

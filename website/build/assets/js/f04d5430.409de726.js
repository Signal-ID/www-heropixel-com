/*! For license information please see f04d5430.409de726.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3475],
  {
    2192: (e, n, i) => {
      var t = i(3696),
        o = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, i) {
        var t,
          r = {},
          c = null,
          d = null;
        for (t in (void 0 !== i && (c = '' + i),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          s.call(n, t) && !l.hasOwnProperty(t) && (r[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === r[t] && (r[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: a.current,
        };
      }
      (n.Fragment = r), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    5290: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => c,
        });
      var t = i(2540),
        o = i(3023);
      const r = {
          id: 'consentguard-oss-license',
          title: 'ConsentGuard OSS License',
          description: 'This License applies to the ConsentGuard Cookie Banner',
        },
        s = 'ConsentGuard Cookie Banner License',
        a = {
          id: 'consentguard/consentguard-oss-license',
          title: 'ConsentGuard OSS License',
          description: 'This License applies to the ConsentGuard Cookie Banner',
          source: '@site/versioned_docs/version-0.0.1/consentguard/license.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/consentguard-oss-license',
          permalink: '/docs/consentguard/consentguard-oss-license',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'consentguard-oss-license',
            title: 'ConsentGuard OSS License',
            description:
              'This License applies to the ConsentGuard Cookie Banner',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'Customizing Colors in ConsentGuard',
            permalink: '/docs/consentguard/customizing-colors',
          },
        },
        l = {},
        c = [
          {
            value: 'Signal ID, LLC Custom License',
            id: 'signal-id-llc-custom-license',
            level: 2,
          },
          {value: '1. Definitions', id: '1-definitions', level: 3},
          {value: '2. Grant of License', id: '2-grant-of-license', level: 3},
          {
            value: '3. Attribution Requirement',
            id: '3-attribution-requirement',
            level: 3,
          },
          {value: '4. Restrictions', id: '4-restrictions', level: 3},
          {value: '5. Termination', id: '5-termination', level: 3},
          {
            value: '6. Disclaimer of Warranty',
            id: '6-disclaimer-of-warranty',
            level: 3,
          },
          {
            value: '7. Limitation of Liability',
            id: '7-limitation-of-liability',
            level: 3,
          },
          {value: '8. Governing Law', id: '8-governing-law', level: 3},
          {
            value: '9. Contact Information',
            id: '9-contact-information',
            level: 3,
          },
        ];
      function d(e) {
        const n = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'consentguard-cookie-banner-license',
              children: 'ConsentGuard Cookie Banner License',
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'signal-id-llc-custom-license',
              children: 'Signal ID, LLC Custom License',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.strong, {children: 'Version 1.0'}),
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'This License applies to the ConsentGuard Cookie Banner, hereafter referred to as "the Software," developed by Signal ID, LLC. By using the Software, you agree to be bound by the terms of this License.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: '1-definitions', children: '1. Definitions'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: '"You"'}),
                    ' (or ',
                    (0, t.jsx)(n.strong, {children: '"Your"'}),
                    ') shall mean an individual or Legal Entity exercising permissions granted by this License.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: '"The Software"'}),
                    ' refers to the ConsentGuard Cookie Banner.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: '"Signal ID, LLC"'}),
                    ' refers to the parent company that owns the rights to the Software.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: '"Attribution"'}),
                    ' means acknowledging the authorship and ownership of the Software.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '2-grant-of-license',
              children: '2. Grant of License',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Subject to the terms and conditions of this License, Signal ID, LLC hereby grants You a non-exclusive, non-transferable, limited license to use the Software for personal or internal business purposes only. You may not:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Modify, distribute, sublicense, or sell copies of the Software.',
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Use the Software as part of a service provided to others, whether for profit or not.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '3-attribution-requirement',
              children: '3. Attribution Requirement',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'You must include clear attribution to Signal ID, LLC and the product name ConsentGuard in any use of the Software. This includes, but is not limited to:',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Displaying the Signal ID, LLC logo and the ConsentGuard name in the user interface of the Software.',
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Including attribution in any documentation, promotional materials, or web pages that feature the Software.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '4-restrictions',
              children: '4. Restrictions',
            }),
            '\n',
            (0, t.jsx)(n.p, {children: 'You may not:'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Use the Software to provide services to others, whether or not for a fee.',
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Remove, obscure, or alter any attribution, copyright, or trademark notices.',
                }),
                '\n',
                (0, t.jsx)(n.li, {
                  children:
                    'Use the Software in any manner that could mislead others into believing that Your modifications are the original Software.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: '5-termination', children: '5. Termination'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'This License and the rights granted hereunder will terminate automatically upon any breach by You of the terms of this License. Upon termination, You shall cease all use of the Software and destroy all copies, full or partial, of the Software.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '6-disclaimer-of-warranty',
              children: '6. Disclaimer of Warranty',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'The Software is provided "AS IS," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall Signal ID, LLC be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the Software or the use or other dealings in the Software.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '7-limitation-of-liability',
              children: '7. Limitation of Liability',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'In no event shall Signal ID, LLC be liable to You or any third party for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with the use of the Software, even if Signal ID, LLC has been advised of the possibility of such damages.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '8-governing-law',
              children: '8. Governing Law',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'This License shall be governed by and construed in accordance with the laws of the jurisdiction in which Signal ID, LLC is headquartered, excluding its conflicts of law principles.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: '9-contact-information',
              children: '9. Contact Information',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'For inquiries regarding this License, please contact:',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: (0, t.jsx)(n.strong, {children: 'Signal ID, LLC'}),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                (0, t.jsx)(n.a, {
                  href: 'mailto:support@heropixel.com',
                  children: 'support@heropixel.com',
                }),
                '\n1317 Edgewater Drive Ste. 7039\nOrlando, FL 32804',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, o.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => s, x: () => a});
      var t = i(3696);
      const o = {},
        r = t.createContext(o);
      function s(e) {
        const n = t.useContext(r);
        return t.useMemo(
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
            : s(e.components)),
          t.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

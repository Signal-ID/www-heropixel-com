/*! For license information please see 094a6cc4.43b1b1b7.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3527],
  {
    2192: (e, o, n) => {
      var t = n(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        s =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, o, n) {
        var t,
          i = {},
          a = null,
          d = null;
        for (t in (void 0 !== n && (a = '' + n),
        void 0 !== o.key && (a = '' + o.key),
        void 0 !== o.ref && (d = o.ref),
        o))
          c.call(o, t) && !l.hasOwnProperty(t) && (i[t] = o[t]);
        if (e && e.defaultProps)
          for (t in (o = e.defaultProps)) void 0 === i[t] && (i[t] = o[t]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: d,
          props: i,
          _owner: s.current,
        };
      }
      (o.Fragment = i), (o.jsx = a), (o.jsxs = a);
    },
    2540: (e, o, n) => {
      e.exports = n(2192);
    },
    1858: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => l,
          contentTitle: () => c,
          default: () => u,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => a,
        });
      var t = n(2540),
        r = n(3023);
      const i = {
          id: 'customizing-colors',
          title: 'Customizing Colors',
          description:
            'Documentation on how to customize the colors of the ConsentGuard banner.',
        },
        c = void 0,
        s = {
          id: 'consentguard/customizing-colors',
          title: 'Customizing Colors',
          description:
            'Documentation on how to customize the colors of the ConsentGuard banner.',
          source:
            '@site/versioned_docs/version-0.0.1/consentguard/customizing-colors.md',
          sourceDirName: 'consentguard',
          slug: '/consentguard/customizing-colors',
          permalink: '/docs/consentguard/customizing-colors',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723086403e3,
          frontMatter: {
            id: 'customizing-colors',
            title: 'Customizing Colors',
            description:
              'Documentation on how to customize the colors of the ConsentGuard banner.',
          },
          sidebar: 'consentguard',
          previous: {
            title: 'Recording User Preferences',
            permalink: '/docs/consentguard/using-jitsu',
          },
          next: {
            title: 'ConsentGuard OSS License',
            permalink: '/docs/consentguard/consentguard-oss-license',
          },
        },
        l = {},
        a = [
          {
            value: 'Customizing Colors in ConsentGuard',
            id: 'customizing-colors-in-consentguard',
            level: 2,
          },
          {value: 'Overview', id: 'overview', level: 3},
          {
            value: 'Configuration Options',
            id: 'configuration-options',
            level: 3,
          },
          {
            value: 'Setting the Configuration Options',
            id: 'setting-the-configuration-options',
            level: 3,
          },
          {value: 'Example', id: 'example', level: 3},
          {
            value: 'Including the Cookie Banner Script',
            id: 'including-the-cookie-banner-script',
            level: 3,
          },
          {
            value: 'Customization Details',
            id: 'customization-details',
            level: 3,
          },
          {
            value: 'Accept All Button Color',
            id: 'accept-all-button-color',
            level: 4,
          },
          {
            value: 'Manage Preferences Button Color',
            id: 'manage-preferences-button-color',
            level: 4,
          },
          {
            value: 'Active Elements Color',
            id: 'active-elements-color',
            level: 4,
          },
          {value: 'Background Color', id: 'background-color', level: 4},
        ];
      function d(e) {
        const o = {
          code: 'code',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(o.h2, {
              id: 'customizing-colors-in-consentguard',
              children: 'Customizing Colors in ConsentGuard',
            }),
            '\n',
            (0, t.jsx)(o.h3, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                "ConsentGuard allows you to customize the colors of the cookie consent banner and preference manager to match your website's branding. This documentation explains how to configure the color options available in ConsentGuard.",
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'configuration-options',
              children: 'Configuration Options',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'You can customize the colors by setting the appropriate properties in the ',
                (0, t.jsx)(o.code, {children: 'window.cookieConsentOptions'}),
                ' object. Here are the available options:',
              ],
            }),
            '\n',
            (0, t.jsxs)(o.ul, {
              children: [
                '\n',
                (0, t.jsxs)(o.li, {
                  children: [
                    (0, t.jsx)(o.strong, {children: 'accept_color'}),
                    ': Color for the "Accept All" button.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(o.li, {
                  children: [
                    (0, t.jsx)(o.strong, {children: 'nuetral_color'}),
                    ': Color for the "Manage Preferences" button.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(o.li, {
                  children: [
                    (0, t.jsx)(o.strong, {children: 'preference_color'}),
                    ': Color for active elements in the preference manager.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(o.li, {
                  children: [
                    (0, t.jsx)(o.strong, {children: 'background_color'}),
                    ': Background color for the banner and preference manager.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'setting-the-configuration-options',
              children: 'Setting the Configuration Options',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'Place your configuration options for the banner by defining the global ',
                (0, t.jsx)(o.code, {children: 'window.cookieConsentOptions'}),
                ' object. Make sure to place this script BEFORE the inclusion of the main cookie banner script.',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, t.jsx)(o.p, {
              children: 'Here is an example of how to configure the colors:',
            }),
            '\n',
            (0, t.jsx)(o.pre, {
              children: (0, t.jsx)(o.code, {
                className: 'language-html',
                children:
                  "<script data-consent-category=\"essential\">\n  window.cookieConsentOptions = window.cookieConsentOptions || {};\n  window.cookieConsentOptions = {\n    privacy_policy_link: 'https://yourwebsite.com/privacy-policy',\n    accept_color: '#28A745', // Green color for the \"Accept All\" button\n    nuetral_color: '#6c757d', // Grey color for the \"Manage Preferences\" button\n    preference_color: '#3482F3', // Blue color for active elements in the preference manager\n    background_color: '#f8f9fa', // Light grey background color for the banner and preference manager\n  };\n</script>\n",
              }),
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'including-the-cookie-banner-script',
              children: 'Including the Cookie Banner Script',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                "Add the following script to your HTML file, ensuring it's included in the ",
                (0, t.jsx)(o.code, {children: '<head>'}),
                ' or at the end of the ',
                (0, t.jsx)(o.code, {children: '<body>'}),
                ', and after your configurations:',
              ],
            }),
            '\n',
            (0, t.jsx)(o.pre, {
              children: (0, t.jsx)(o.code, {
                className: 'language-html',
                children:
                  '<script\n  data-consent-category="essential"\n  src="https://app.heropixel.com/consentguard_cookie_banner/index.js"></script>\n',
              }),
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'customization-details',
              children: 'Customization Details',
            }),
            '\n',
            (0, t.jsx)(o.h4, {
              id: 'accept-all-button-color',
              children: 'Accept All Button Color',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'The ',
                (0, t.jsx)(o.code, {children: 'accept_color'}),
                ' property sets the color of the "Accept All" button. This button is prominently displayed on the banner and should be a color that stands out and matches your website\'s primary action color. This default color has been proven through study to receive the highest number of opt-ins.',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h4, {
              id: 'manage-preferences-button-color',
              children: 'Manage Preferences Button Color',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'The ',
                (0, t.jsx)(o.code, {children: 'nuetral_color'}),
                ' property sets the color of the "Manage Preferences" button. This button allows users to manage their cookie preferences and should be a color that is easily distinguishable from the "Accept All" button. We use a soft calming nuetral blue to reduce the number of people who choose to explicitly opt-out.',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h4, {
              id: 'active-elements-color',
              children: 'Active Elements Color',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'The ',
                (0, t.jsx)(o.code, {children: 'preference_color'}),
                ' property sets the color for active elements in the preference manager. This includes checkboxes, radio buttons, and other interactive elements within the Privacy Center.',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h4, {
              id: 'background-color',
              children: 'Background Color',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'The ',
                (0, t.jsx)(o.code, {children: 'background_color'}),
                ' property sets the background color for both the banner and the preference manager. Choose a background color that ensures good contrast with the text and interactive elements to maintain readability.',
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: o} = {...(0, r.R)(), ...e.components};
        return o
          ? (0, t.jsx)(o, {...e, children: (0, t.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, o, n) => {
      n.d(o, {R: () => c, x: () => s});
      var t = n(3696);
      const r = {},
        i = t.createContext(r);
      function c(e) {
        const o = t.useContext(i);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : {...o, ...e};
          },
          [o, e]
        );
      }
      function s(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : c(e.components)),
          t.createElement(i.Provider, {value: o}, e.children)
        );
      }
    },
  },
]);
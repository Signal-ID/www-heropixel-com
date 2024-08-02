/*! For license information please see b57a647f.f1df9539.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8613],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, n) {
        var i,
          o = {},
          c = null,
          d = null;
        for (i in (void 0 !== n && (c = '' + n),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          r.call(t, i) && !a.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: l.current,
        };
      }
      (t.Fragment = o), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9345: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var i = n(2540),
        s = n(3023);
      const o = {
          id: 'start-pixel-installation',
          title: 'Pixel Installation',
          description: 'desc',
        },
        r = 'Guide to Install a Created Pixel',
        l = {
          id: 'start-pixel-installation',
          title: 'Pixel Installation',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/start-pixel-installation.md',
          sourceDirName: '.',
          slug: '/start-pixel-installation',
          permalink: '/docs/start-pixel-installation',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'start-pixel-installation',
            title: 'Pixel Installation',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Create a New Pixel',
            permalink: '/docs/start-create-a-pixel',
          },
          next: {
            title: 'Get Your Leads',
            permalink: '/docs/start-get-your-leads',
          },
        },
        a = {},
        c = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {value: 'FOLLOW THESE STEPS', id: 'follow-these-steps', level: 2},
          {
            value: 'Step 1: Copy and Paste into your website head',
            id: 'step-1-copy-and-paste-into-your-website-head',
            level: 3,
          },
          {
            value: 'Step 2: Verify Installation',
            id: 'step-2-verify-installation',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Support', id: 'support', level: 2},
        ];
      function d(e) {
        const t = {
          a: 'a',
          blockquote: 'blockquote',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {
              id: 'guide-to-install-a-created-pixel',
              children: 'Guide to Install a Created Pixel',
            }),
            '\n',
            (0, i.jsxs)('div', {
              className: 'content-banner',
              children: [
                (0, i.jsxs)(t.p, {
                  children: [
                    'If you feel daunted by this task, please contact our support team at ',
                    (0, i.jsx)(t.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                    ". We'll quickly help you install and verify that your pixel is working.",
                  ],
                }),
                (0, i.jsx)('img', {
                  className: 'content-banner-img',
                  src: '/docs/assets/p_android-ios-devices.svg',
                  alt: ' ',
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Our pixel snippet (aka. Hero Pixel Site Tag) installs just like the Google Analytics Site Tag.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'follow-these-steps',
              children: 'FOLLOW THESE STEPS',
            }),
            '\n',
            (0, i.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, i.jsxs)(t.p, {
                  children: [
                    'You should have already created your pixel in the ',
                    (0, i.jsx)(t.a, {
                      href: '/docs/start-create-a-pixel',
                      children: 'last section',
                    }),
                    '.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-1-copy-and-paste-into-your-website-head',
              children: 'Step 1: Copy and Paste into your website head',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'A. ',
                (0, i.jsx)(t.strong, {children: 'Locating your snippet'}),
              ],
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'You can find the following snippet of code already customized for your preferences when "editing" or "creating" your pixel in the dashboard.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Copy the Hero Pixel Site Tag from this page, or email it to your developer for assistance.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'B. ',
                (0, i.jsx)(t.strong, {
                  children:
                    'Copy and Paste the snippet into your website head section',
                }),
              ],
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Paste the Hero Pixel Site Tag into the ',
                    (0, i.jsx)(t.code, {children: '<head>'}),
                    ' section of your HTML, before the closing ',
                    (0, i.jsx)(t.code, {children: '</head>'}),
                    ' tag.',
                  ],
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    "It's best to have the snippet to the top of your website and not the bottom.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)('br', {}),
            '\n',
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: 'language-html',
                children:
                  "<head>\n    \x3c!-- Analytics Tracker --\x3e\n    <script>\n        (function() {var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n        g.async=true; g.src='https://app.heropixel.com'+'/pixel/script.js'; s.parentNode.insertBefore(g,s);})();\n    </script>\n    <script>\n        window.analyticsLayer = window.analyticsLayer || [];\n        window.analyticsLayer.push({\n            event: 'pageview',\n            websiteId: '0'\n        });\n    </script>\n    \x3c!-- End Analytics Tracker Code --\x3e\n\n</head>\n",
              }),
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-2-verify-installation',
              children: 'Step 2: Verify Installation',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Save the changes to your HTML file and upload it to your web server if necessary.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Click the "Verify Installation" black button in the lower left of this page. Our system will automatically load your root domain to determine if the pixel is installed.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'You should see a message indicating that data is being received if the installation was successful.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children:
                        'Pixel Installation Cannot Be Verified Automatically?',
                    }),
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'Load the page where your pixel is installed.',
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'Right click and "view source" of this page.',
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'Search for the pixel snippet and confirm that it looks exactly as you have copied it from your dashboard.',
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {children: 'Close the page source'}),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'Right click on your webpage again, go to "Inspect" or "Inspect Element" depending on your browser.',
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'A Developer Tools frame will load, typically at the bottom of your browser.',
                        }),
                        '\n',
                        (0, i.jsx)(t.li, {
                          children:
                            'In the Developer Tools frame, review the "Network" tab (you may need to reload your website while leaving the developer tools frame open)',
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            'Search for "heropixel" and verify that you\'re receiving a ',
                            (0, i.jsx)(t.code, {children: '200'}),
                            ' Success code from our servers.',
                          ],
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
            (0, i.jsx)(t.h2, {id: 'support', children: 'Support'}),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'If you encounter any issues or need further assistance, contact our support team at ',
                    (0, i.jsx)(t.a, {
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
      function p(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => r, x: () => l});
      var i = n(3696);
      const s = {},
        o = i.createContext(s);
      function r(e) {
        const t = i.useContext(o);
        return i.useMemo(
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
            : r(e.components)),
          i.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

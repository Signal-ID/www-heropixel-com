/*! For license information please see 6e08b3ef.aaf13052.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2732],
  {
    2192: (e, n, t) => {
      var i = t(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, n, t) {
        var i,
          r = {},
          a = null,
          d = null;
        for (i in (void 0 !== t && (a = '' + t),
        void 0 !== n.key && (a = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          o.call(n, i) && !c.hasOwnProperty(i) && (r[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === r[i] && (r[i] = n[i]);
        return {
          $$typeof: s,
          type: e,
          key: a,
          ref: d,
          props: r,
          _owner: l.current,
        };
      }
      (n.Fragment = r), (n.jsx = a), (n.jsxs = a);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    3844: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => a,
        });
      var i = t(2540),
        s = t(3023);
      const r = {id: 'event-pageview', title: 'Pageview', description: 'desc'},
        o = 'Customizing and Installing the pageview Event for Your Pixel',
        l = {
          id: 'event-pageview',
          title: 'Pageview',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/event-pageview.md',
          sourceDirName: '.',
          slug: '/event-pageview',
          permalink: '/docs/event-pageview',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'event-pageview',
            title: 'Pageview',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Shopify Settings Limitations',
            permalink: '/docs/dont-install-with-shopify-settings',
          },
          next: {
            title: 'Manage Suppression Lists',
            permalink: '/docs/intro-to-suppressing',
          },
        },
        c = {},
        a = [
          {value: 'Purpose', id: 'purpose', level: 2},
          {value: 'Event Code', id: 'event-code', level: 2},
          {
            value: 'Steps to Customize the Event',
            id: 'steps-to-customize-the-event',
            level: 2,
          },
          {value: 'Installing the Event', id: 'installing-the-event', level: 2},
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
        ];
      function d(e) {
        const n = {
          blockquote: 'blockquote',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(n.h1, {
              id: 'customizing-and-installing-the-pageview-event-for-your-pixel',
              children: [
                'Customizing and Installing the ',
                (0, i.jsx)(n.code, {children: 'pageview'}),
                ' Event for Your Pixel',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'purpose', children: 'Purpose'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'The pageview event is required in order for the pixel to generate leads. This guide will help you customize and install the ',
                (0, i.jsx)(n.code, {children: 'pageview'}),
                ' event for your pixel. The ',
                (0, i.jsx)(n.code, {children: 'pageview'}),
                ' event tracks all information about the ind. You can also pass additional data to comply with HIPAA regulations and store custom information.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'event-code', children: 'Event Code'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Here is the code snippet for the ',
                (0, i.jsx)(n.code, {children: 'pageview'}),
                ' event:',
              ],
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-html',
                children:
                  "\x3c!-- Trigger the 'pageview' event --\x3e\n<script>\n  window.analyticsLayer = window.analyticsLayer || [];\n  window.analyticsLayer.push({\n    event: 'pageview',\n    websiteId: 'example_website_id',\n    hipaa: false,\n    custom_one: 'value_one',\n    custom_two: 'value_two',\n    custom_three: 'value_three',\n    custom_four: 'value_four',\n    custom_five: 'value_five',\n    // ... other properties\n  });\n</script>\n",
              }),
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'steps-to-customize-the-event',
              children: 'Steps to Customize the Event',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: "Open Your Website's Code",
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'Access the HTML file where you want to add the ',
                            (0, i.jsx)(n.code, {children: 'pageview'}),
                            ' event.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: 'Customize the Event Properties',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'Replace ',
                            (0, i.jsx)(n.code, {
                              children: 'example_website_id',
                            }),
                            ' with your actual website ID.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: 'Advanced Settings',
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.blockquote, {
              children: [
                '\n',
                (0, i.jsx)(n.p, {
                  children:
                    "Only deal with the advanced settings if you are confident in what you're doing. Otherwise you should ignore them.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Set ',
                    (0, i.jsx)(n.code, {children: 'hipaa'}),
                    ' to ',
                    (0, i.jsx)(n.code, {children: 'true'}),
                    ' if you need to remove page URLs, titles, and descriptions to comply with HIPAA regulations. Otherwise, leave it as ',
                    (0, i.jsx)(n.code, {children: 'false'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    'Replace ',
                    (0, i.jsx)(n.code, {children: 'value_one'}),
                    ', ',
                    (0, i.jsx)(n.code, {children: 'value_two'}),
                    ', ',
                    (0, i.jsx)(n.code, {children: 'value_three'}),
                    ', ',
                    (0, i.jsx)(n.code, {children: 'value_four'}),
                    ', and ',
                    (0, i.jsx)(n.code, {children: 'value_five'}),
                    ' with your actual custom data values.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'installing-the-event',
              children: 'Installing the Event',
            }),
            '\n',
            (0, i.jsxs)(n.ol, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: 'Locate the Right Place to Add the Event',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'Identify where the ',
                            (0, i.jsx)(n.code, {children: 'pageview'}),
                            ' action should be tracked on your website (e.g., within the page header or after a specific action).',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: 'Insert the Script',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children:
                            'Add the customized script to the HTML code at the appropriate location to ensure it is triggered on each page view.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                    (0, i.jsx)(n.p, {children: 'Example:'}),
                    '\n',
                    (0, i.jsx)(n.pre, {
                      children: (0, i.jsx)(n.code, {
                        className: 'language-html',
                        children:
                          "<head>\n  \x3c!-- Other head elements --\x3e\n\n  \x3c!-- Trigger the 'pageview' event --\x3e\n  <script>\n    window.analyticsLayer = window.analyticsLayer || [];\n    window.analyticsLayer.push({\n      event: 'pageview',\n      websiteId: '12345',\n      hipaa: true,\n      custom_one: 'custom_value_1',\n      custom_two: 'custom_value_2',\n      custom_three: 'custom_value_3',\n      custom_four: 'custom_value_4',\n      custom_five: 'custom_value_5',\n      // ... other properties\n    });\n  </script>\n</head>\n",
                      }),
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: 'Event Not Firing?',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsx)(n.li, {
                          children:
                            'Ensure the script is placed correctly in the HTML and that it is being triggered on each page view.',
                        }),
                        '\n',
                        (0, i.jsx)(n.li, {
                          children:
                            'Verify that there are no JavaScript errors in the console.',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, i.jsx)(n.p, {
                      children: (0, i.jsx)(n.strong, {
                        children: 'Incorrect Data in Event?',
                      }),
                    }),
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            'Double-check the values and properties being pushed to the ',
                            (0, i.jsx)(n.code, {children: 'analyticsLayer'}),
                            '.',
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
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => o, x: () => l});
      var i = t(3696);
      const s = {},
        r = i.createContext(s);
      function o(e) {
        const n = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : o(e.components)),
          i.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

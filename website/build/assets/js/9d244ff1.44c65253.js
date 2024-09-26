/*! For license information please see 9d244ff1.44c65253.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3515],
  {
    2192: (e, n, o) => {
      var t = o(3696),
        s = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        a =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, o) {
        var t,
          i = {},
          d = null,
          c = null;
        for (t in (void 0 !== o && (d = '' + o),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          r.call(n, t) && !l.hasOwnProperty(t) && (i[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === i[t] && (i[t] = n[t]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: a.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, o) => {
      e.exports = o(2192);
    },
    3282: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => l,
          contentTitle: () => r,
          default: () => h,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => d,
        });
      var t = o(2540),
        s = o(3023);
      const i = {
          id: 'form-customization',
          title: 'Customizing Your Optin Forms',
          description:
            'Learn how to download, modify, and customize our optin forms to fit your needs.',
        },
        r = 'Customizing Your Optin Forms',
        a = {
          id: 'leadcapture/form-customization',
          title: 'Customizing Your Optin Forms',
          description:
            'Learn how to download, modify, and customize our optin forms to fit your needs.',
          source:
            '@site/versioned_docs/version-0.0.1/leadcapture/form-customization.md',
          sourceDirName: 'leadcapture',
          slug: '/leadcapture/form-customization',
          permalink: '/docs/leadcapture/form-customization',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'form-customization',
            title: 'Customizing Your Optin Forms',
            description:
              'Learn how to download, modify, and customize our optin forms to fit your needs.',
          },
          sidebar: 'leadcapture',
          previous: {
            title: 'Sales Qualifying Optin Form',
            permalink: '/docs/leadcapture/sales-qualifying-optin',
          },
        },
        l = {},
        d = [
          {
            value: 'Download and Host Locally',
            id: 'download-and-host-locally',
            level: 2,
          },
          {
            value: 'Steps to Download and Customize',
            id: 'steps-to-download-and-customize',
            level: 3,
          },
          {value: 'How the Forms Work', id: 'how-the-forms-work', level: 2},
          {
            value: 'Event Listener for Data Capture',
            id: 'event-listener-for-data-capture',
            level: 3,
          },
          {value: 'Explanation:', id: 'explanation', level: 3},
          {
            value: 'Sending Data to the System',
            id: 'sending-data-to-the-system',
            level: 3,
          },
          {value: 'Parameters:', id: 'parameters', level: 4},
          {
            value: 'Customizing Event Behavior',
            id: 'customizing-event-behavior',
            level: 3,
          },
          {value: 'Conclusion', id: 'conclusion', level: 2},
        ];
      function c(e) {
        const n = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'customizing-your-optin-forms',
              children: 'Customizing Your Optin Forms',
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'download-and-host-locally',
              children: 'Download and Host Locally',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Our optin forms offer full flexibility for customization. You can download the code from either ',
                (0, t.jsx)(n.code, {children: '/forms/funding.js'}),
                ' or ',
                (0, t.jsx)(n.code, {children: '/forms/optin.js'}),
                ' and host it locally on your own servers. Once downloaded, you can modify the script to better fit your specific requirements.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'steps-to-download-and-customize',
              children: 'Steps to Download and Customize',
            }),
            '\n',
            (0, t.jsxs)(n.ol, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        (0, t.jsx)(n.strong, {
                          children: 'Download the Form Script',
                        }),
                        ':',
                      ],
                    }),
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            'To use our default optin form: Download ',
                            (0, t.jsx)(n.code, {children: '/forms/optin.js'}),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            'To use the sales qualifying optin form: Download ',
                            (0, t.jsx)(n.code, {children: '/forms/funding.js'}),
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
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        (0, t.jsx)(n.strong, {children: 'Host Locally'}),
                        ":\nAfter downloading the script, you can host it locally on your own server. This gives you complete control over modifications and ensures the script aligns perfectly with your website's needs.",
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, t.jsxs)(n.p, {
                      children: [
                        (0, t.jsx)(n.strong, {children: 'Modify the Code'}),
                        ':\nYou can modify and customize the form behavior as needed. Below is an overview of how the key functionalities work within the form.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'how-the-forms-work',
              children: 'How the Forms Work',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Our forms are powered by event listeners that handle user data asynchronously. Below is a breakdown of how we handle lead capture and enrichment:',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'event-listener-for-data-capture',
              children: 'Event Listener for Data Capture',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "The core of the enrichment functionality is based on listening for events and processing responses asynchronously. Here's an example of how the event listener is implemented in the form:",
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-javascript',
                children:
                  "// Trigger the pageview event\nwindow.analyticsLayer = window.analyticsLayer || [];\nwindow.analyticsLayer.push({\n    onEvent: 'leadcaptureResponse',\n    callback: (data) => {\n        // handle the data\n    },\n}, {\n    ...this.capturedData,\n    event: 'leadcapture',\n});\n",
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'The data provided to the event listener callback can be ',
                (0, t.jsx)(n.a, {
                  href: '/docs/personalization/visitor-attributes',
                  children: 'found here',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'explanation', children: 'Explanation:'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'onEvent'}),
                    ': We set up an event listener using ',
                    (0, t.jsx)(n.code, {children: 'onEvent'}),
                    ', which listens for the ',
                    (0, t.jsx)(n.code, {children: "'leadcaptureResponse'"}),
                    ' event.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'callback'}),
                    ': When the event is triggered, the returned response (the captured data) is passed to the callback listener. The callback then processes the data.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Asynchronous Process'}),
                    ': This is an asynchronous process, meaning that data is captured and sent without causing delays or blocking other operations on the page.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'sending-data-to-the-system',
              children: 'Sending Data to the System',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'To send data collected from any optin form to our system, the event ',
                (0, t.jsx)(n.code, {children: "'leadcapture'"}),
                ' is triggered. Here are the parameters that are accepted from the event:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h4, {id: 'parameters', children: 'Parameters:'}),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'url'}),
                    ': The URL where the form is hosted.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'timestamp'}),
                    ': Time when the data was captured.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'websiteId'}),
                    ': The unique identifier for the website.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'first_name'}),
                    ": The lead's first name.",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'last_name'}),
                    ": The lead's last name.",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'email'}),
                    ": The lead's email address.",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'md5'}),
                    ': The hashed email value for further data enrichment.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'hem'}),
                    ': A unique identifier tied to the enrichment process.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'phone'}),
                    ": The lead's phone number.",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'tcpa'}),
                    ': TCPA compliance flag.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'prefiConsentDate'}),
                    ': The date when the lead provided consent.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'custom_one'}),
                    ': Custom field one for additional data.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'custom_two'}),
                    ': Custom field two.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'custom_three'}),
                    ': Custom field three.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'custom_four'}),
                    ': Custom field four.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'custom_five'}),
                    ': Custom field five.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'customizing-event-behavior',
              children: 'Customizing Event Behavior',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'You can modify the behavior of the form by editing how events are triggered and handled. By adjusting the callback function and the data sent to the system, you can tailor the form to meet your specific data collection and lead enrichment needs.',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-javascript',
                children:
                  "window.analyticsLayer.push({\n    onEvent: 'yourCustomEvent',\n    callback: (customData) => {\n        // Customize your callback behavior here\n    },\n    ...additionalData,\n});\n",
              }),
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "By downloading and hosting our form scripts locally, you have full flexibility to modify and customize them to fit your unique use cases. Whether you're capturing leads for high-ticket products or enriching optin data with personalized offers, our forms provide a solid foundation for optimized lead capture and qualification.",
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, o) => {
      o.d(n, {R: () => r, x: () => a});
      var t = o(3696);
      const s = {},
        i = t.createContext(s);
      function r(e) {
        const n = t.useContext(i);
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
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          t.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

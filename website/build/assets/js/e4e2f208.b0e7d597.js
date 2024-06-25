/*! For license information please see e4e2f208.b0e7d597.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6061],
  {
    2192: (e, t, n) => {
      var i = n(3696),
        r = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var i,
          s = {},
          d = null,
          h = null;
        for (i in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (h = t.ref),
        t))
          o.call(t, i) && !c.hasOwnProperty(i) && (s[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === s[i] && (s[i] = t[i]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: h,
          props: s,
          _owner: l.current,
        };
      }
      (t.Fragment = s), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    7862: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => o,
          default: () => a,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => d,
        });
      var i = n(2540),
        r = n(3023);
      const s = {
          id: 'convertkit',
          title: 'ConvertKit',
          description: 'A destination connector for ConvertKit',
        },
        o = 'ConvertKit',
        l = {
          id: 'destinations/convertkit',
          title: 'ConvertKit',
          description: 'A destination connector for ConvertKit',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/convertkit.md',
          sourceDirName: 'destinations',
          slug: '/destinations/convertkit',
          permalink: '/docs/destinations/convertkit',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/convertkit.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'convertkit',
            title: 'ConvertKit',
            description: 'A destination connector for ConvertKit',
          },
          sidebar: 'integrations',
          previous: {
            title: 'ClickHouse',
            permalink: '/docs/destinations/clickhouse',
          },
          next: {title: 'Convex', permalink: '/docs/destinations/convex'},
        },
        c = {},
        d = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Supported Sync Modes', id: 'supported-sync-modes', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 2},
          {
            value: 'Step 1: Obtain API Credentials',
            id: 'step-1-obtain-api-credentials',
            level: 3,
          },
          {
            value: 'Step 2: Create and configure a ConvertKit Form',
            id: 'step-2-create-and-configure-a-convertkit-form',
            level: 3,
          },
          {
            value: 'Step 3: Set up the ConvertKit Destination in Hero Pixel',
            id: 'step-3-set-up-the-convertkit-destination-in-hero-pixel',
            level: 3,
          },
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
          {value: 'Common Issues', id: 'common-issues', level: 3},
        ];
      function h(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h1, {id: 'convertkit', children: 'ConvertKit'}),
            '\n',
            (0, i.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The ConvertKit destination connector allows you to sync data to ConvertKit, a popular email marketing platform. This connector supports full refresh and incremental append sync modes, making it suitable for various data integration needs.',
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'The ConvertKit destination connector supports the following sync modes:',
            }),
            '\n',
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, i.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, i.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'Each synced record will correspond to a subscriber in ConvertKit, with the data being written to a specified form.',
            }),
            '\n',
            (0, i.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'To use the ConvertKit destination connector, you need:',
            }),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {children: 'A ConvertKit account'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'API Private Key'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'API Secret Key'}),
                '\n',
                (0, i.jsx)(t.li, {children: 'Form ID'}),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-1-obtain-api-credentials',
              children: 'Step 1: Obtain API Credentials',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Log in to your ConvertKit account.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Navigate to the Account Settings.',
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children:
                    'Locate the API Key and API Secret Key. Copy these for use in the connector setup.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-2-create-and-configure-a-convertkit-form',
              children: 'Step 2: Create and configure a ConvertKit Form',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'You are only allowed to add new subscribers to a specific form within Convertkit.',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click on the ',
                    (0, i.jsx)(t.strong, {children: 'Grow'}),
                    ' menu item, select ',
                    (0, i.jsx)(t.strong, {children: 'Landing Pages and Forms'}),
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, i.jsx)(t.strong, {children: '+ Create New'}),
                    ' and choose ',
                    (0, i.jsx)(t.strong, {children: 'Form'}),
                  ],
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Complete the form details to your liking',
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'While still on the form designer, Click ',
                    (0, i.jsx)(t.strong, {children: 'Settings'}),
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'In the Form Settings Popup, Click ',
                    (0, i.jsx)(t.strong, {children: 'Incentive'}),
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Check the ',
                    (0, i.jsx)(t.strong, {
                      children: 'Auto-confirm new subscribers',
                    }),
                    ' box or your subscribers will not show in your lists',
                  ],
                }),
                '\n',
                (0, i.jsx)(t.li, {
                  children: 'Copy the FormID from the ConverKit URL',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'The FormID is located here ',
                (0, i.jsx)(t.code, {
                  children:
                    'https://app.convertkit.com/forms/designers/{{form_id}}/edit',
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h3, {
              id: 'step-3-set-up-the-convertkit-destination-in-hero-pixel',
              children:
                'Step 3: Set up the ConvertKit Destination in Hero Pixel',
            }),
            '\n',
            (0, i.jsxs)(t.ol, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, i.jsx)(t.strong, {children: 'Destinations'}),
                    ' and then click ',
                    (0, i.jsx)(t.strong, {children: '+ New destination'}),
                    '.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'On the Set up the destination page, select ',
                    (0, i.jsx)(t.strong, {children: 'ConvertKit'}),
                    ' from the ',
                    (0, i.jsx)(t.strong, {children: 'Destination type'}),
                    ' dropdown.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Enter the following information:',
                    '\n',
                    (0, i.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'API Private Key'}),
                            ': Your ConvertKit API private key.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'API Secret Key'}),
                            ': Your ConvertKit API secret key.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(t.li, {
                          children: [
                            (0, i.jsx)(t.strong, {children: 'Form ID'}),
                            ': The ID of the form where you want to write the data.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, i.jsx)(t.strong, {children: 'Set up'}),
                    ' to complete the configuration.',
                  ],
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
            (0, i.jsx)(t.h3, {id: 'common-issues', children: 'Common Issues'}),
            '\n',
            (0, i.jsxs)(t.ul, {
              children: [
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children: 'Invalid API Key or Secret',
                    }),
                    ': Ensure that you have copied the API keys correctly from your ConvertKit account.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {children: 'Form ID not found'}),
                    ': Verify that the Form ID is correct and exists in your ConvertKit account.',
                  ],
                }),
                '\n',
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.strong, {
                      children: 'Subscribers are not displaying',
                    }),
                    ': Verify that you have checked Auto-confirm new subscribers from step 2 above.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, i.jsx)(t.a, {
                  href: 'https://developers.convertkit.com/#getting-started',
                  children: 'ConvertKit API Documentation',
                }),
                ' or contact ConvertKit support.',
              ],
            }),
          ],
        });
      }
      function a(e = {}) {
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => o, x: () => l});
      var i = n(3696);
      const r = {},
        s = i.createContext(r);
      function o(e) {
        const t = i.useContext(s);
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
              ? e.components(r)
              : e.components || r
            : o(e.components)),
          i.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

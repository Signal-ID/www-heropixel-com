/*! For license information please see 4ea59355.40b3bdec.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5598],
  {
    2192: (e, t, n) => {
      var s = n(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        r =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, n) {
        var s,
          o = {},
          d = null,
          h = null;
        for (s in (void 0 !== n && (d = '' + n),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (h = t.ref),
        t))
          l.call(t, s) && !c.hasOwnProperty(s) && (o[s] = t[s]);
        if (e && e.defaultProps)
          for (s in (t = e.defaultProps)) void 0 === o[s] && (o[s] = t[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: h,
          props: o,
          _owner: r.current,
        };
      }
      (t.Fragment = o), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    8650: (e, t, n) => {
      n.d(t, {A: () => s});
      const s =
        n.p +
        'assets/images/ghl-custom-field-b80dfef246caeb4e571ffff98ade11fd.png';
    },
    9371: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => a,
          frontMatter: () => o,
          metadata: () => r,
          toc: () => d,
        });
      var s = n(2540),
        i = n(3023);
      const o = {
          id: 'gohighlevel',
          title: 'GoHighLevel',
          description: 'A destination connector for GoHighLevel',
        },
        l = 'GoHighLevel',
        r = {
          id: 'destinations/gohighlevel',
          title: 'GoHighLevel',
          description: 'A destination connector for GoHighLevel',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/gohighlevel.md',
          sourceDirName: 'destinations',
          slug: '/destinations/gohighlevel',
          permalink: '/docs/destinations/gohighlevel',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719276021e3,
          frontMatter: {
            id: 'gohighlevel',
            title: 'GoHighLevel',
            description: 'A destination connector for GoHighLevel',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Google Cloud Storage',
            permalink: '/docs/destinations/gcs',
          },
          next: {
            title: 'Google Sheets',
            permalink: '/docs/destinations/google-sheets',
          },
        },
        c = {},
        d = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Supported Sync Modes', id: 'supported-sync-modes', level: 2},
          {value: 'Output Schema', id: 'output-schema', level: 3},
          {value: 'Setup Guide', id: 'setup-guide', level: 2},
          {
            value: 'Step 1: Set Up the GoHighLevel Destination in Hero Pixel',
            id: 'step-1-set-up-the-gohighlevel-destination-in-hero-pixel',
            level: 3,
          },
          {
            value: 'Step 2: Configure Sync Settings',
            id: 'step-2-configure-sync-settings',
            level: 3,
          },
          {
            value: 'Step 3: Start Syncing',
            id: 'step-3-start-syncing',
            level: 3,
          },
          {value: 'Custom Data', id: 'custom-data', level: 2},
          {value: 'Troubleshooting', id: 'troubleshooting', level: 2},
        ];
      function h(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.h1, {id: 'gohighlevel', children: 'GoHighLevel'}),
            '\n',
            (0, s.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The GoHighLevel destination connector allows you to sync data to GoHighLevel, a comprehensive marketing and CRM platform. This connector supports full refresh, incremental append, and incremental dedup sync modes, providing flexibility for various data integration needs.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'supported-sync-modes',
              children: 'Supported Sync Modes',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'The GoHighLevel destination connector supports the following sync modes:',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, s.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Deduped',
                        }),
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Change Data Capture',
                        }),
                        (0, s.jsx)(t.td, {
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
            (0, s.jsx)(t.h3, {id: 'output-schema', children: 'Output Schema'}),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Each synced record will correspond to a contact in GoHighLevel, with the data being written based on the provided authentication method and location.',
            }),
            '\n',
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, {children: 'Property'}),
                      (0, s.jsx)(t.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'email'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "The contact's email address.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'phone'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "The contact's phone number.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'firstName'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "The contact's first name.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'lastName'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: "The contact's last name.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'name'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children:
                            'The full name of the contact, combining first and last name.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'address1'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: 'The street address of the contact.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'city'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: 'The city of the contact.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'state'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children: 'The state of the contact.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'country'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children:
                            'The country of the contact (default is "US").',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {
                            children: 'postalCode',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          children:
                            'The postal code (ZIP code) of the contact.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {
                            children: 'companyName',
                          }),
                        }),
                        (0, s.jsx)(t.td, {
                          children:
                            'The name of the company the contact is associated with.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'tags'}),
                        }),
                        (0, s.jsxs)(t.td, {
                          children: [
                            'A list of tags associated with the contact, including ',
                            (0, s.jsx)(t.code, {children: 'heropixel'}),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, {
                          children: (0, s.jsx)(t.code, {children: 'source'}),
                        }),
                        (0, s.jsx)(t.td, {
                          children:
                            'The source of the data (default is "capitalaudience").',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Additionally, if you create a custom field in GoHighLevel, our system will look for those fields. If our sync system finds that one of your custom fields has a matching key, it will update the value for that contact.',
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'If you have GoHighLevel set up to allow duplicates, then duplicates will be created. If you restrict duplicates based on email or phone, then our system will update records instead of creating new ones.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'setup-guide', children: 'Setup Guide'}),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'step-1-set-up-the-gohighlevel-destination-in-hero-pixel',
              children:
                'Step 1: Set Up the GoHighLevel Destination in Hero Pixel',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Click ',
                    (0, s.jsx)(t.strong, {children: 'Settings'}),
                    ' and then click ',
                    (0, s.jsx)(t.strong, {children: 'Integrations'}),
                    '.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'On the integrations page, select ',
                    (0, s.jsx)(t.strong, {children: '+ New Integration'}),
                    ' and then ',
                    (0, s.jsx)(t.strong, {children: 'GoHighLevel'}),
                    ' from the dropdown.',
                  ],
                }),
                '\n',
                (0, s.jsxs)(t.li, {
                  children: [
                    'Choose the authentication method:',
                    '\n',
                    (0, s.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {children: 'OAuth'}),
                            ": Click the OAuth button to log into GoHighLevel. The system will redirect you to GoHighLevel so you can log into your account and choose the space you'd like to connect.",
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(t.li, {
                          children: [
                            (0, s.jsx)(t.strong, {
                              children: 'Personal Access Token',
                            }),
                            ': Enter your API_KEY to authenticate.',
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
            (0, s.jsx)(t.h3, {
              id: 'step-2-configure-sync-settings',
              children: 'Step 2: Configure Sync Settings',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'After connecting to your GoHighLevel account, configure the sync settings to determine how data should be synced.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Choose the appropriate sync mode (Full Refresh, Incremental Append, or Incremental Dedup).',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Create the custom fields in your GHL account that you want synced over',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h3, {
              id: 'step-3-start-syncing',
              children: 'Step 3: Start Syncing',
            }),
            '\n',
            (0, s.jsxs)(t.ol, {
              children: [
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Once the configuration is complete, you can start the syncing process.',
                }),
                '\n',
                (0, s.jsx)(t.li, {
                  children:
                    'Monitor the sync status and logs to ensure data is being synced correctly.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(t.h2, {id: 'custom-data', children: 'Custom Data'}),
            '\n',
            (0, s.jsx)(t.p, {
              children: (0, s.jsx)(t.img, {
                alt: 'GHL Custom Field Creation',
                src: n(8650).A + '',
                width: '4332',
                height: '2860',
              }),
            }),
            '\n',
            (0, s.jsx)(t.p, {
              children:
                'Our system supports the use of custom fields in GoHighLevel. If a custom field in your GoHighLevel account matches a key in the data being synced, the corresponding value will be updated for the contact.',
            }),
            '\n',
            (0, s.jsx)(t.h2, {
              id: 'troubleshooting',
              children: 'Troubleshooting',
            }),
            '\n',
            (0, s.jsxs)(t.p, {
              children: [
                'For further assistance, refer to the ',
                (0, s.jsx)(t.a, {
                  href: 'https://developers.gohighlevel.com',
                  children: 'GoHighLevel API Documentation',
                }),
                ' or contact GoHighLevel support. If you encounter issues specific to the Hero Pixel integration, please reach out to our support team for help.',
              ],
            }),
          ],
        });
      }
      function a(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, s.jsx)(t, {...e, children: (0, s.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => l, x: () => r});
      var s = n(3696);
      const i = {},
        o = s.createContext(i);
      function l(e) {
        const t = s.useContext(o);
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : l(e.components)),
          s.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

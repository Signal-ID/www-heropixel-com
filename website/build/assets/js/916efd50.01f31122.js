/*! For license information please see 916efd50.01f31122.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7271],
  {
    2192: (e, n, t) => {
      var r = t(3696),
        s = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var r,
          i = {},
          d = null,
          c = null;
        for (r in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          o.call(n, r) && !a.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: l.current,
        };
      }
      (n.Fragment = i), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    7227: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => d,
        });
      var r = t(2540),
        s = t(3023);
      const i = {
          id: 'link-to-zapier-docs',
          title: 'Zapier',
          description: 'desc',
        },
        o = 'Zapier Integration',
        l = {
          id: 'graphql/link-to-zapier-docs',
          title: 'Zapier',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/graphql/link-to-zapier-docs.md',
          sourceDirName: 'graphql',
          slug: '/graphql/link-to-zapier-docs',
          permalink: '/docs/graphql/link-to-zapier-docs',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'link-to-zapier-docs',
            title: 'Zapier',
            description: 'desc',
          },
        },
        a = {},
        d = [
          {
            value: 'Step 1 - Convert Email Address to MD5',
            id: 'step-1---convert-email-address-to-md5',
            level: 2,
          },
          {
            value: 'Step 1: Add a &quot;Code by Zapier&quot; Task',
            id: 'step-1-add-a-code-by-zapier-task',
            level: 3,
          },
          {
            value: 'Step 2 - Custom Webhook Request for GraphQL Mutation',
            id: 'step-2---custom-webhook-request-for-graphql-mutation',
            level: 2,
          },
          {value: 'Url to POST', id: 'url-to-post', level: 3},
          {
            value: 'Raw Request Structure:',
            id: 'raw-request-structure',
            level: 3,
          },
          {value: 'Key Notes:', id: 'key-notes', level: 4},
          {value: 'Zapier Setup:', id: 'zapier-setup', level: 4},
        ];
      function c(e) {
        const n = {
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          hr: 'hr',
          li: 'li',
          ol: 'ol',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'zapier-integration',
              children: 'Zapier Integration',
            }),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'step-1---convert-email-address-to-md5',
              children: 'Step 1 - Convert Email Address to MD5',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'This guide explains how to set up a ',
                (0, r.jsx)(n.strong, {children: 'Code by Zapier'}),
                ' task to convert an email address into an MD5 hash. This is the first step in the Zapier workflow for integrating with the GraphQL API.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'step-1-add-a-code-by-zapier-task',
              children: 'Step 1: Add a "Code by Zapier" Task',
            }),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Create a New Zap',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Log in to Zapier and create a new Zap.',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Select the desired trigger for the Zap (e.g., "New Lead" or "Form Submission").',
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Add a Code by Zapier Action',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Click on ',
                            (0, r.jsx)(n.strong, {children: '+ Add Action'}),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Choose ',
                            (0, r.jsx)(n.strong, {children: 'Code by Zapier'}),
                            ' as the app.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Select ',
                            (0, r.jsx)(n.strong, {children: 'Run JavaScript'}),
                            ' as the event.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Configure the JavaScript Code',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            '\n',
                            (0, r.jsxs)(n.p, {
                              children: [
                                'In the ',
                                (0, r.jsx)(n.strong, {children: 'Code'}),
                                ' field, copy and paste the following JavaScript code:',
                              ],
                            }),
                            '\n',
                            (0, r.jsx)(n.pre, {
                              children: (0, r.jsx)(n.code, {
                                className: 'language-javascript',
                                children:
                                  "// Import the crypto library\nconst crypto = require('crypto');\n\n// Input data: email from the previous step\nconst email = inputData.email;\n\n// Trim and lowercase the email\nconst cleanEmail = email.trim().toLowerCase();\n\n// Generate MD5 hash of the cleaned email\nconst md5Hash = crypto.createHash('md5').update(cleanEmail).digest('hex');\n\n// Return the hashed value\nreturn { md5: md5Hash };\n",
                              }),
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
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Set Input Data',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'Under the ',
                            (0, r.jsx)(n.strong, {children: 'Input Data'}),
                            ' section, add a new key-value pair:',
                            '\n',
                            (0, r.jsxs)(n.ul, {
                              children: [
                                '\n',
                                (0, r.jsxs)(n.li, {
                                  children: [
                                    (0, r.jsx)(n.strong, {children: 'Key'}),
                                    ': ',
                                    (0, r.jsx)(n.code, {children: 'email'}),
                                  ],
                                }),
                                '\n',
                                (0, r.jsxs)(n.li, {
                                  children: [
                                    (0, r.jsx)(n.strong, {children: 'Value'}),
                                    ': Map this to the email field from the trigger step (e.g., "Email Address").',
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
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Test the Code',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            '\n',
                            (0, r.jsxs)(n.p, {
                              children: [
                                'Click ',
                                (0, r.jsx)(n.strong, {
                                  children: 'Test & Review',
                                }),
                                ' to verify that the MD5 hash is generated correctly.',
                              ],
                            }),
                            '\n',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            '\n',
                            (0, r.jsx)(n.p, {
                              children:
                                'The output will include the MD5 hash of the provided email:',
                            }),
                            '\n',
                            (0, r.jsx)(n.pre, {
                              children: (0, r.jsx)(n.code, {
                                className: 'language-json',
                                children:
                                  '{\n  "md5": "e13743a7f1db7f4246badd6fd6ff54ff"\n}\n',
                              }),
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
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsx)(n.p, {
                      children: (0, r.jsx)(n.strong, {
                        children: 'Use the MD5 Output in Subsequent Steps',
                      }),
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            'In the following steps of your Zap, you can use the ',
                            (0, r.jsx)(n.code, {children: 'md5'}),
                            ' value as input for other actions, such as enriching the lead with the GraphQL API.',
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
            (0, r.jsx)(n.h2, {
              id: 'step-2---custom-webhook-request-for-graphql-mutation',
              children: 'Step 2 - Custom Webhook Request for GraphQL Mutation',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'In this step, you will configure a ',
                (0, r.jsx)(n.strong, {children: 'Custom Webhook'}),
                ' in Zapier to send a ',
                (0, r.jsx)(n.strong, {children: 'GraphQL mutation'}),
                ' to your endpoint. The webhook will pass data through as part of the mutation request.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'url-to-post', children: 'Url to POST'}),
            '\n',
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.code, {
                children: 'https://sweet-colt-9750.ddn.hasura.app/graphql',
              }),
            }),
            '\n',
            (0, r.jsx)(n.p, {children: 'Select Passthrough Data, YES'}),
            '\n',
            (0, r.jsx)(n.h3, {
              id: 'raw-request-structure',
              children: 'Raw Request Structure:',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Here\u2019s the exact request format that Zapier will use to send the GraphQL mutation:',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation HeroPixel($event: PagviewEventInput!) { pageview(auth: { appId: \\"yourAppId\\", appSecret: \\"yourAppSecret\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "md5": "{{ $md5 }}",\n      "pixelId": 1,\n      "domain": "example.com"\n    }\n  }\n}\n\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'key-notes', children: 'Key Notes:'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    'Replace ',
                    (0, r.jsx)(n.code, {children: '"yourAppId"'}),
                    ' with your actual ',
                    (0, r.jsx)(n.code, {children: 'appId'}),
                    '.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    'Replace ',
                    (0, r.jsx)(n.code, {children: '"yourAppSecret"'}),
                    ' with your actual ',
                    (0, r.jsx)(n.code, {children: 'app secret'}),
                    '.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    'The variable ',
                    (0, r.jsx)(n.code, {children: '$md5'}),
                    ' will be dynamically injected based on previous steps in the workflow.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'zapier-setup', children: 'Zapier Setup:'}),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Action'}),
                    ': Add the ',
                    (0, r.jsx)(n.strong, {children: 'Webhooks by Zapier'}),
                    ' app in the second step of your Zap.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Method'}),
                    ': Choose ',
                    (0, r.jsx)(n.strong, {children: 'Custom Request'}),
                    '.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Request Type'}),
                    ': Set the request type to ',
                    (0, r.jsx)(n.strong, {children: 'POST'}),
                    '.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Data'}),
                    ': Paste the above raw JSON structure into the ',
                    (0, r.jsx)(n.strong, {children: 'Data'}),
                    ' section.',
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
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => o, x: () => l});
      var r = t(3696);
      const s = {},
        i = r.createContext(s);
      function o(e) {
        const n = r.useContext(i);
        return r.useMemo(
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
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
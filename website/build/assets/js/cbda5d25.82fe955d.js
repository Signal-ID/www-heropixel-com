/*! For license information please see cbda5d25.82fe955d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8097],
  {
    2192: (e, s, n) => {
      var r = n(3696),
        t = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, s, n) {
        var r,
          i = {},
          c = null,
          a = null;
        for (r in (void 0 !== n && (c = '' + n),
        void 0 !== s.key && (c = '' + s.key),
        void 0 !== s.ref && (a = s.ref),
        s))
          d.call(s, r) && !o.hasOwnProperty(r) && (i[r] = s[r]);
        if (e && e.defaultProps)
          for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
        return {
          $$typeof: t,
          type: e,
          key: c,
          ref: a,
          props: i,
          _owner: l.current,
        };
      }
      (s.Fragment = i), (s.jsx = c), (s.jsxs = c);
    },
    2540: (e, s, n) => {
      e.exports = n(2192);
    },
    4596: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => o,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var r = n(2540),
        t = n(3023);
      const i = {
          id: 'suppression-graphql-request',
          title: 'Suppression GraphQL Request',
          description: 'desc',
        },
        d = 'Suppression GraphQL Request',
        l = {
          id: 'graphql/suppression-graphql-request',
          title: 'Suppression GraphQL Request',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/graphql/suppression-graphql-request.md',
          sourceDirName: 'graphql',
          slug: '/graphql/suppression-graphql-request',
          permalink: '/docs/graphql/suppression-graphql-request',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1743871515e3,
          frontMatter: {
            id: 'suppression-graphql-request',
            title: 'Suppression GraphQL Request',
            description: 'desc',
          },
          sidebar: 'graphql',
          previous: {
            title: 'Basic GraphQL Request',
            permalink: '/docs/graphql/basic-graphql-request',
          },
        },
        o = {},
        c = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'How It Works', id: 'how-it-works', level: 3},
          {value: 'Authentication', id: 'authentication', level: 2},
          {value: 'Auth Object', id: 'auth-object', level: 3},
          {value: 'Operations', id: 'operations', level: 2},
          {
            value: 'Mutation: <code>suppression</code>',
            id: 'mutation-suppression',
            level: 3,
          },
          {value: 'Endpoint', id: 'endpoint', level: 4},
          {value: 'Parameters', id: 'parameters', level: 4},
          {
            value: '<code>SuppressionEventInput</code> Fields',
            id: 'suppressioneventinput-fields',
            level: 4,
          },
          {
            value: '<code>Contact</code> Fields',
            id: 'contact-fields',
            level: 4,
          },
          {value: 'Example Request', id: 'example-request', level: 4},
          {value: 'Example CURL Request', id: 'example-curl-request', level: 4},
          {value: 'Example Response', id: 'example-response', level: 4},
          {
            value: 'Response Status Types',
            id: 'response-status-types',
            level: 4,
          },
          {value: 'Response Object', id: 'response-object', level: 4},
          {value: 'Error Handling', id: 'error-handling', level: 2},
          {value: 'Common Errors', id: 'common-errors', level: 3},
          {
            value: 'Example Error Response',
            id: 'example-error-response',
            level: 3,
          },
          {value: 'Contact', id: 'contact', level: 2},
        ];
      function a(e) {
        const s = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          hr: 'hr',
          li: 'li',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.h1, {
              id: 'suppression-graphql-request',
              children: 'Suppression GraphQL Request',
            }),
            '\n',
            (0, r.jsx)(s.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'The Suppression GraphQL Request allows you to manage contact suppression lists for your team. This system helps you maintain a list of contacts that should be excluded from your communications, ensuring compliance with user preferences and privacy requirements.',
            }),
            '\n',
            (0, r.jsx)(s.h3, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, r.jsxs)(s.ul, {
              children: [
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    'You submit one or more contacts to be suppressed via the Suppression request.',
                }),
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    'The system checks for existing suppressions to prevent duplicates.',
                }),
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    "Each contact is processed and added to your team's suppression list if not already present.",
                }),
                '\n',
                (0, r.jsx)(s.li, {
                  children:
                    "Detailed results are provided for each contact's processing status.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'This system is designed to be efficient and reliable, handling both single and bulk suppression requests with ease.',
            }),
            '\n',
            (0, r.jsx)(s.hr, {}),
            '\n',
            (0, r.jsx)(s.h2, {
              id: 'authentication',
              children: 'Authentication',
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'Most mutations and queries require authentication. The ',
                (0, r.jsx)(s.code, {children: 'auth'}),
                ' object must be provided as part of the request. It includes:',
              ],
            }),
            '\n',
            (0, r.jsx)(s.h3, {id: 'auth-object', children: 'Auth Object'}),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, {children: 'Field'}),
                      (0, r.jsx)(s.th, {children: 'Type'}),
                      (0, r.jsx)(s.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'appId'}),
                        }),
                        (0, r.jsx)(s.td, {children: 'String'}),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'The application ID. Request this from ',
                            (0, r.jsx)(s.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'appSecret'}),
                        }),
                        (0, r.jsx)(s.td, {children: 'String'}),
                        (0, r.jsxs)(s.td, {
                          children: [
                            'The application secret. Request this from ',
                            (0, r.jsx)(s.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(s.hr, {}),
            '\n',
            (0, r.jsx)(s.h2, {id: 'operations', children: 'Operations'}),
            '\n',
            (0, r.jsxs)(s.h3, {
              id: 'mutation-suppression',
              children: [
                'Mutation: ',
                (0, r.jsx)(s.code, {children: 'suppression'}),
              ],
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                "Adds one or more contacts to your team's suppression list.",
            }),
            '\n',
            (0, r.jsx)(s.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-graphql',
                children:
                  'mutation HeroPixel(\n  $auth: AuthRequestInput!\n  $event: SuppressionEventInput!\n) {\n  suppression(auth: $auth, event: $event) {\n    message\n    code\n    data\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h4, {id: 'parameters', children: 'Parameters'}),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, {children: 'Parameter'}),
                      (0, r.jsx)(s.th, {children: 'Type'}),
                      (0, r.jsx)(s.th, {children: 'Required'}),
                      (0, r.jsx)(s.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'auth'}),
                        }),
                        (0, r.jsx)(s.td, {children: 'AuthRequestInput'}),
                        (0, r.jsx)(s.td, {children: 'Yes'}),
                        (0, r.jsx)(s.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'event'}),
                        }),
                        (0, r.jsx)(s.td, {children: 'SuppressionEventInput'}),
                        (0, r.jsx)(s.td, {children: 'Yes'}),
                        (0, r.jsx)(s.td, {
                          children: 'Details of the contacts to suppress.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(s.h4, {
              id: 'suppressioneventinput-fields',
              children: [
                (0, r.jsx)(s.code, {children: 'SuppressionEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, {children: 'Field'}),
                      (0, r.jsx)(s.th, {children: 'Type'}),
                      (0, r.jsx)(s.th, {children: 'Required'}),
                      (0, r.jsx)(s.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsx)(s.tbody, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.td, {
                        children: (0, r.jsx)(s.code, {children: 'contacts'}),
                      }),
                      (0, r.jsx)(s.td, {children: 'Contact[]'}),
                      (0, r.jsx)(s.td, {children: 'Yes'}),
                      (0, r.jsx)(s.td, {
                        children: 'Array of contacts to suppress.',
                      }),
                    ],
                  }),
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(s.h4, {
              id: 'contact-fields',
              children: [(0, r.jsx)(s.code, {children: 'Contact'}), ' Fields'],
            }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, {children: 'Field'}),
                      (0, r.jsx)(s.th, {children: 'Type'}),
                      (0, r.jsx)(s.th, {children: 'Required'}),
                      (0, r.jsx)(s.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'email'}),
                        }),
                        (0, r.jsx)(s.td, {children: 'String'}),
                        (0, r.jsx)(s.td, {children: 'Yes'}),
                        (0, r.jsx)(s.td, {
                          children: 'The email address to suppress.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'reason'}),
                        }),
                        (0, r.jsx)(s.td, {children: 'String'}),
                        (0, r.jsx)(s.td, {children: 'No'}),
                        (0, r.jsx)(s.td, {
                          children: 'Optional reason for the suppression.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(s.h4, {
              id: 'example-request',
              children: 'Example Request',
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation HeroPixel($auth: AuthRequestInput!, $event: SuppressionEventInput!) { suppression(auth: $auth, event: $event) { message code data } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "contacts": [\n        {\n          "email": "john@doe.com",\n          "reason": "Unsubscribed"\n        },\n        {\n          "email": "jane@doe.com",\n          "reason": "Bounced"\n        }\n      ]\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h4, {
              id: 'example-curl-request',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation HeroPixel($auth: AuthRequestInput!, $event: SuppressionEventInput!) { suppression(auth: $auth, event: $event) { message code data } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "contacts": [\n        {\n          "email": "john@doe.com",\n          "reason": "Unsubscribed"\n        },\n        {\n          "email": "jane@doe.com",\n          "reason": "Bounced"\n        }\n      ]\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h4, {
              id: 'example-response',
              children: 'Example Response',
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "suppression": {\n      "code": 200,\n      "data": {\n        "success": true,\n        "results": [\n          {\n            "email": "john@doe.com",\n            "status": "success"\n          },\n          {\n            "email": "jane@doe.com",\n            "status": "already_suppressed"\n          }\n        ],\n        "summary": {\n          "total": 2,\n          "suppressed": 1,\n          "skipped": 1\n        }\n      },\n      "message": "Success"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.h4, {
              id: 'response-status-types',
              children: 'Response Status Types',
            }),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, {children: 'Status'}),
                      (0, r.jsx)(s.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {children: 'success'}),
                        }),
                        (0, r.jsx)(s.td, {
                          children:
                            'Contact was successfully added to the suppression list.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {
                          children: (0, r.jsx)(s.code, {
                            children: 'already_suppressed',
                          }),
                        }),
                        (0, r.jsx)(s.td, {
                          children:
                            'Contact was already present in the suppression list.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(s.h4, {
              id: 'response-object',
              children: 'Response Object',
            }),
            '\n',
            (0, r.jsx)(s.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n  code: number;\n  message: string;\n  data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(s.ul, {
              children: [
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    (0, r.jsx)(s.strong, {
                      children: (0, r.jsx)(s.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, r.jsxs)(s.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(s.li, {
                          children: [
                            (0, r.jsx)(s.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(s.li, {
                          children: [
                            (0, r.jsx)(s.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(s.li, {
                          children: [
                            (0, r.jsx)(s.code, {children: '401'}),
                            ': Unauthorized - Invalid credentials or team not found.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(s.li, {
                          children: [
                            (0, r.jsx)(s.code, {children: '500'}),
                            ': Server error.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    (0, r.jsx)(s.strong, {
                      children: (0, r.jsx)(s.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, r.jsxs)(s.li, {
                  children: [
                    (0, r.jsx)(s.strong, {
                      children: (0, r.jsx)(s.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(s.hr, {}),
            '\n',
            (0, r.jsx)(s.h2, {
              id: 'error-handling',
              children: 'Error Handling',
            }),
            '\n',
            (0, r.jsx)(s.h3, {id: 'common-errors', children: 'Common Errors'}),
            '\n',
            (0, r.jsxs)(s.table, {
              children: [
                (0, r.jsx)(s.thead, {
                  children: (0, r.jsxs)(s.tr, {
                    children: [
                      (0, r.jsx)(s.th, {children: 'Code'}),
                      (0, r.jsx)(s.th, {children: 'Message'}),
                      (0, r.jsx)(s.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.tbody, {
                  children: [
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {children: '200'}),
                        (0, r.jsx)(s.td, {children: 'Operation Successful'}),
                        (0, r.jsx)(s.td, {
                          children: 'The operation completed successfully.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {children: '400'}),
                        (0, r.jsx)(s.td, {children: 'Invalid Input'}),
                        (0, r.jsx)(s.td, {
                          children: 'One or more input fields are invalid.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {children: '401'}),
                        (0, r.jsx)(s.td, {children: 'Unauthorized'}),
                        (0, r.jsx)(s.td, {
                          children: 'Invalid credentials or team not found.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(s.tr, {
                      children: [
                        (0, r.jsx)(s.td, {children: '500'}),
                        (0, r.jsx)(s.td, {children: 'Internal Server Error'}),
                        (0, r.jsx)(s.td, {
                          children:
                            'An unexpected error occurred on the server.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(s.h3, {
              id: 'example-error-response',
              children: 'Example Error Response',
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 400,\n  "message": "Invalid email addresses found in request",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(s.pre, {
              children: (0, r.jsx)(s.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 401,\n  "message": "Unauthorized - Team not found",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'For all error responses, the ',
                (0, r.jsx)(s.code, {children: 'data'}),
                ' field will be an empty object, and the ',
                (0, r.jsx)(s.code, {children: 'message'}),
                ' field will describe the issue encountered.',
              ],
            }),
            '\n',
            (0, r.jsx)(s.hr, {}),
            '\n',
            (0, r.jsx)(s.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, r.jsxs)(s.p, {
              children: [
                'For additional support, contact our development team at ',
                (0, r.jsx)(s.a, {
                  href: 'mailto:support@heropixel.com',
                  children: 'support@heropixel.com',
                }),
                '.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: s} = {...(0, t.R)(), ...e.components};
        return s
          ? (0, r.jsx)(s, {...e, children: (0, r.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, s, n) => {
      n.d(s, {R: () => d, x: () => l});
      var r = n(3696);
      const t = {},
        i = r.createContext(t);
      function d(e) {
        const s = r.useContext(i);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : {...s, ...e};
          },
          [s, e]
        );
      }
      function l(e) {
        let s;
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : d(e.components)),
          r.createElement(i.Provider, {value: s}, e.children)
        );
      }
    },
  },
]);

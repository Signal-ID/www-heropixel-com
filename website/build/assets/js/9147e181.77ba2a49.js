/*! For license information please see 9147e181.77ba2a49.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1333],
  {
    2192: (e, n, s) => {
      var r = s(3696),
        t = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, n, s) {
        var r,
          d = {},
          a = null,
          o = null;
        for (r in (void 0 !== s && (a = '' + s),
        void 0 !== n.key && (a = '' + n.key),
        void 0 !== n.ref && (o = n.ref),
        n))
          i.call(n, r) && !c.hasOwnProperty(r) && (d[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === d[r] && (d[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: a,
          ref: o,
          props: d,
          _owner: l.current,
        };
      }
      (n.Fragment = d), (n.jsx = a), (n.jsxs = a);
    },
    2540: (e, n, s) => {
      e.exports = s(2192);
    },
    7309: (e, n, s) => {
      s.r(n),
        s.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => a,
        });
      var r = s(2540),
        t = s(3023);
      const d = {
          id: 'basic-graphql-request',
          title: 'Basic GraphQL Request',
          description: 'desc',
        },
        i = 'GraphQL API Documentation',
        l = {
          id: 'graphql/basic-graphql-request',
          title: 'Basic GraphQL Request',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/graphql/basic-graphql-request.md',
          sourceDirName: 'graphql',
          slug: '/graphql/basic-graphql-request',
          permalink: '/docs/graphql/basic-graphql-request',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1731717576e3,
          frontMatter: {
            id: 'basic-graphql-request',
            title: 'Basic GraphQL Request',
            description: 'desc',
          },
          sidebar: 'graphql',
          previous: {
            title: 'Introduction',
            permalink: '/docs/intro-to-graphql',
          },
        },
        c = {},
        a = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Authentication', id: 'authentication', level: 2},
          {value: 'Auth Object', id: 'auth-object', level: 3},
          {value: 'Operations', id: 'operations', level: 2},
          {
            value: 'Mutation: <code>pageview</code>',
            id: 'mutation-pageview',
            level: 3,
          },
          {value: 'Endpoint', id: 'endpoint', level: 4},
          {value: 'Parameters', id: 'parameters', level: 4},
          {
            value: '<code>PageviewEventInput</code> Fields',
            id: 'pagevieweventinput-fields',
            level: 4,
          },
          {value: 'Example Request', id: 'example-request', level: 4},
          {value: 'Example CURL Request', id: 'example-curl-request', level: 4},
          {value: 'Example Response', id: 'example-response', level: 4},
          {value: 'Response Object', id: 'response-object', level: 4},
          {
            value: 'Mutation: <code>softpull</code>',
            id: 'mutation-softpull',
            level: 3,
          },
          {value: 'Endpoint', id: 'endpoint-1', level: 4},
          {value: 'Parameters', id: 'parameters-1', level: 4},
          {
            value: '<code>SoftpullEventInput</code> Fields',
            id: 'softpulleventinput-fields',
            level: 4,
          },
          {value: 'Example Request', id: 'example-request-1', level: 4},
          {
            value: 'Example CURL Request',
            id: 'example-curl-request-1',
            level: 4,
          },
          {value: 'Example Response', id: 'example-response-1', level: 4},
          {value: 'Response Object', id: 'response-object-1', level: 4},
          {value: 'Error Handling', id: 'error-handling', level: 2},
          {value: 'Common Errors', id: 'common-errors', level: 3},
          {
            value: 'Example Error Response',
            id: 'example-error-response',
            level: 3,
          },
          {value: 'Contact', id: 'contact', level: 2},
        ];
      function o(e) {
        const n = {
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
            (0, r.jsx)(n.h1, {
              id: 'graphql-api-documentation',
              children: 'GraphQL API Documentation',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'The GraphQL API provides a structured interface to interact with the backend. It enables querying, and mutating data. Below is the documentation for the available operations.',
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'authentication',
              children: 'Authentication',
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'Most mutations and queries require authentication. The ',
                (0, r.jsx)(n.code, {children: 'auth'}),
                ' object must be provided as part of the request. It includes:',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'auth-object', children: 'Auth Object'}),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Field'}),
                      (0, r.jsx)(n.th, {children: 'Type'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'appId'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'The application ID. Request this from ',
                            (0, r.jsx)(n.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'appSecret'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsxs)(n.td, {
                          children: [
                            'The application secret. Request this from ',
                            (0, r.jsx)(n.a, {
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
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h2, {id: 'operations', children: 'Operations'}),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'mutation-pageview',
              children: [
                'Mutation: ',
                (0, r.jsx)(n.code, {children: 'pageview'}),
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: 'Tracks a pageview event for analytics.',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation HeroPixel($event: PageviewEventInput!) {\n  pageview(auth: {appId: "", appSecret: ""}, event: $event) {\n    message\n    code\n    data\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'parameters', children: 'Parameters'}),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Parameter'}),
                      (0, r.jsx)(n.th, {children: 'Type'}),
                      (0, r.jsx)(n.th, {children: 'Required'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'auth'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'AuthInput'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'PageviewEventInput'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'Details of the pageview event.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h4, {
              id: 'pagevieweventinput-fields',
              children: [
                (0, r.jsx)(n.code, {children: 'PageviewEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Field'}),
                      (0, r.jsx)(n.th, {children: 'Type'}),
                      (0, r.jsx)(n.th, {children: 'Required'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: "The user's email address.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'pixelId'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Int'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'The unique ID for the pixel.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'domain'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'The domain where the event occurred.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-request',
              children: 'Example Request',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation HeroPixel($event: PageviewEventInput!) { pageview(auth: { appId: \\"\\", appSecret: \\"\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "md5": "",\n      "pixelId": 1,\n      "domain": "example.com"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-curl-request',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation HeroPixel($event: PageviewEventInput!) { pageview(auth: { appId: \\"yourAppIdHere\\", appSecret: \\"yourAppSecretHere\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "md5": "",\n      "pixelId": 1,\n      "domain": "example.com"\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-response',
              children: 'Example Response',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "pageview": {\n      "message": "User Found",\n      "code": 200,\n      "data": {}\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'response-object',
              children: 'Response Object',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n  code: number;\n  message: string;\n  data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: (0, r.jsx)(n.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.code, {children: '500'}),
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
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: (0, r.jsx)(n.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: (0, r.jsx)(n.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h3, {
              id: 'mutation-softpull',
              children: [
                'Mutation: ',
                (0, r.jsx)(n.code, {children: 'softpull'}),
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: 'Tracks a softpull event for analytics.',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'endpoint-1', children: 'Endpoint'}),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation HeroPixel($event: SoftpullEventInput!) {\n  softpull(auth: {appId: "", appSecret: ""}, event: $event) {\n    message\n    code\n    data\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'parameters-1', children: 'Parameters'}),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Parameter'}),
                      (0, r.jsx)(n.th, {children: 'Type'}),
                      (0, r.jsx)(n.th, {children: 'Required'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'auth'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'AuthInput'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'SoftpullEventInput'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'Details of the softpull event.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h4, {
              id: 'softpulleventinput-fields',
              children: [
                (0, r.jsx)(n.code, {children: 'SoftpullEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Field'}),
                      (0, r.jsx)(n.th, {children: 'Type'}),
                      (0, r.jsx)(n.th, {children: 'Required'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'address'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: "The user's street address.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'city'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: "The user's city."}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'consumerId',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'An optional identifier for the consumer.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: "The user's email address.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'The event name or type.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'firstName'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {children: "The user's first name."}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'ip'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'The IP address of the user.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'lastName'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {children: "The user's last name."}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'md5'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'The MD5 hash of an identifier or email.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'phone'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: "The user's phone number.",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'pixelId'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Float'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'The unique ID for the pixel.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'prefiConsentDate',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'The date and time of consent.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'state'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: "The user's state."}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'uniqueId'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'A unique identifier for the event.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'zip'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: "The user's zip or postal code.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-request-1',
              children: 'Example Request',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation HeroPixel($event: SoftpullEventInput!) { softpull(auth: { appId: \\"yourAppIdHere\\", appSecret: \\"yourAppSecretHere\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "pixelId": 1,\n      "email": "john@doe.com", \n      "firstName": "John", \n      "lastName": "Doe", \n      "phone": "(202) 111-1111",\n      "prefiConsentDate": "2025-01-01T00:00:00Z",\n      "ip": "127.0.0.1"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-curl-request-1',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation HeroPixel($event: SoftpullEventInput!) { softpull(auth: { appId: \\"yourAppIdHere\\", appSecret: \\"yourAppSecretHere\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "pixelId": 1,\n      "email": "john@doe.com", \n      "firstName": "John", \n      "lastName": "Doe", \n      "phone": "(202) 111-1111",\n      "prefiConsentDate": "2025-01-01T00:00:00Z",\n      "ip": "127.0.0.1"\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-response-1',
              children: 'Example Response',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "softpull": {\n      "code": 200,\n      "data": {\n        "consumer_data": {\n          "event": "softpull",\n          "team_id": 1,\n          "first_name": "John",\n          "last_name": "Doe",\n          "website_id": 1,\n          "pixel_id": 1,\n          "consumer_id": null,\n          "isUniqueLead": false,\n          "created_at": 1736248154,\n          "timestamp": "2025-01-07 11:09:14.270",\n          "prefi_consent_date": "2025-01-02T02:30:59Z",\n          "prefi_consent_ip": "127.0.0.1",\n          "email": "john@doe.com",\n          "ip": "127.0.0.1",\n          "unique_id": "69654f75d5b647478f447aef62dc2c55",\n          "phone": "(202) 111-1111",\n          "md5": "69654f75d5b647478f447aef62dc2c55",\n          "address": null,\n          "city": null,\n          "zip": null,\n          "state": null,\n          "ledger": {\n            "credits_pixel_total": 0,\n            "credits_team_balance": 0,\n            "credits_team_today": 0,\n            "credits_pixel_today": 0\n          }\n        },\n        "funding_offers": {\n          "email": "john@doe.com",\n          "phone": "(202) 111-1111",\n          "first_name": "John",\n          "last_name": "Doe",\n          "prefi_consent_date": "2025-01-02 02:30:59",\n          "prefi_consent_ip": "127.0.0.1",\n          "consumer_id": "",\n          "offername1": "Automatic Financing",\n          "offerscore1": "818",\n          "offerdetails1": "Financing Automatically and Instantly Available",\n          "offerstatus1": "Approved",\n          "offeramount1": "$82,000",\n          "offercontingencies1": "",\n          "offername2": "0% Unsecured Funding",\n          "offerscore2": "818",\n          "offerdetails2": "Unsecured Revolving Credit Lines - 0% for 12-21 months - To book: https://calendly.com/guidinglightamber",\n          "offerstatus2": "If Fixed",\n          "offeramount2": "$99,000",\n          "offercontingencies2": "PayD-$11,000",\n          "emails": [\n            "john.doe@example.com",\n            "j.doe@hotmail.com"\n          ],\n          "phones": [\n            "202-230-1111",\n            "202-258-2222"\n          ],\n          "dob": "69",\n          "address1": "SOMEWHERE 200",\n          "city1": "WASHINGTON",\n          "state1": "DC",\n          "zip1": "00000",\n          "address2": "SOMEWHERE 500",\n          "city2": "WASHINGTON",\n          "state2": "DC",\n          "zip2": "11111",\n          "address3": "",\n          "city3": "",\n          "state3": "",\n          "zip3": "",\n          "address4": "1",\n          "city4": "",\n          "state4": "",\n          "zip4": "",\n          "created_at": "2025-01-03 04:07:17"\n        }\n      },\n      "message": "Success"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'response-object-1',
              children: 'Response Object',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n  code: number;\n  message: string;\n  data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: (0, r.jsx)(n.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(n.li, {
                          children: [
                            (0, r.jsx)(n.code, {children: '500'}),
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
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: (0, r.jsx)(n.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {
                      children: (0, r.jsx)(n.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h2, {
              id: 'error-handling',
              children: 'Error Handling',
            }),
            '\n',
            (0, r.jsx)(n.h3, {id: 'common-errors', children: 'Common Errors'}),
            '\n',
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, {children: 'Code'}),
                      (0, r.jsx)(n.th, {children: 'Message'}),
                      (0, r.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {children: '200'}),
                        (0, r.jsx)(n.td, {children: 'Operation Successful'}),
                        (0, r.jsx)(n.td, {
                          children: 'The operation completed successfully.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {children: '400'}),
                        (0, r.jsx)(n.td, {children: 'Invalid Input'}),
                        (0, r.jsx)(n.td, {
                          children: 'One or more input fields are invalid.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {children: '500'}),
                        (0, r.jsx)(n.td, {children: 'Internal Server Error'}),
                        (0, r.jsx)(n.td, {
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
            (0, r.jsx)(n.h3, {
              id: 'example-error-response',
              children: 'Example Error Response',
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 400,\n  "message": "Invalid input provided.",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 500,\n  "message": "Internal server error.",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'For all error responses, the ',
                (0, r.jsx)(n.code, {children: 'data'}),
                ' field will be an empty object, and the ',
                (0, r.jsx)(n.code, {children: 'message'}),
                ' field will describe the issue encountered.',
              ],
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, r.jsxs)(n.p, {
              children: [
                'For additional support, contact our development team at ',
                (0, r.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, n, s) => {
      s.d(n, {R: () => i, x: () => l});
      var r = s(3696);
      const t = {},
        d = r.createContext(t);
      function i(e) {
        const n = r.useContext(d);
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
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          r.createElement(d.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

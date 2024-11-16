/*! For license information please see 9147e181.480104f6.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1333],
  {
    2192: (e, n, r) => {
      var t = r(3696),
        s = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        d = Object.prototype.hasOwnProperty,
        l =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, r) {
        var t,
          i = {},
          c = null,
          o = null;
        for (t in (void 0 !== r && (c = '' + r),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (o = n.ref),
        n))
          d.call(n, t) && !a.hasOwnProperty(t) && (i[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === i[t] && (i[t] = n[t]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: o,
          props: i,
          _owner: l.current,
        };
      }
      (n.Fragment = i), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    7309: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => a,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var t = r(2540),
        s = r(3023);
      const i = {
          id: 'basic-graphql-request',
          title: 'Basic GraphQL Request',
          description: 'desc',
        },
        d = 'GraphQL API Documentation',
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
        a = {},
        c = [
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
            value: '<code>PagviewEventInput</code> Fields',
            id: 'pagvieweventinput-fields',
            level: 4,
          },
          {value: 'Example Request', id: 'example-request', level: 4},
          {value: 'Example CURL Request', id: 'example-curl-request', level: 4},
          {value: 'Example Response', id: 'example-response', level: 4},
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'graphql-api-documentation',
              children: 'GraphQL API Documentation',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'The GraphQL API provides a structured interface to interact with the backend. It enables querying, and mutating data. Below is the documentation for the available operations.',
            }),
            '\n',
            (0, t.jsx)(n.hr, {}),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'authentication',
              children: 'Authentication',
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Most mutations and queries require authentication. The ',
                (0, t.jsx)(n.code, {children: 'auth'}),
                ' object must be provided as part of the request. It includes:',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'auth-object', children: 'Auth Object'}),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, {children: 'Field'}),
                      (0, t.jsx)(n.th, {children: 'Type'}),
                      (0, t.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'appId'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'String'}),
                        (0, t.jsxs)(n.td, {
                          children: [
                            'The application ID. Request this from ',
                            (0, t.jsx)(n.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'appSecret'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'String'}),
                        (0, t.jsxs)(n.td, {
                          children: [
                            'The application secret. Request this from ',
                            (0, t.jsx)(n.a, {
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
            (0, t.jsx)(n.hr, {}),
            '\n',
            (0, t.jsx)(n.h2, {id: 'operations', children: 'Operations'}),
            '\n',
            (0, t.jsxs)(n.h3, {
              id: 'mutation-pageview',
              children: [
                'Mutation: ',
                (0, t.jsx)(n.code, {children: 'pageview'}),
              ],
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'Tracks a pageview event for analytics.',
            }),
            '\n',
            (0, t.jsx)(n.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation HeroPixel($event: PagviewEventInput!) {\n  pageview(\n    auth: { appId: "", appSecret: "" },\n    event: $event\n  ) {\n    message\n    code\n    data\n  }\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h4, {id: 'parameters', children: 'Parameters'}),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, {children: 'Parameter'}),
                      (0, t.jsx)(n.th, {children: 'Type'}),
                      (0, t.jsx)(n.th, {children: 'Required'}),
                      (0, t.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'auth'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'AuthInput'}),
                        (0, t.jsx)(n.td, {children: 'Yes'}),
                        (0, t.jsx)(n.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'PagviewEventInput'}),
                        (0, t.jsx)(n.td, {children: 'Yes'}),
                        (0, t.jsx)(n.td, {
                          children: 'Details of the pageview event.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsxs)(n.h4, {
              id: 'pagvieweventinput-fields',
              children: [
                (0, t.jsx)(n.code, {children: 'PagviewEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, {children: 'Field'}),
                      (0, t.jsx)(n.th, {children: 'Type'}),
                      (0, t.jsx)(n.th, {children: 'Required'}),
                      (0, t.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'String'}),
                        (0, t.jsx)(n.td, {children: 'No'}),
                        (0, t.jsx)(n.td, {
                          children: "The user's email address.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'pixelId'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'Int'}),
                        (0, t.jsx)(n.td, {children: 'Yes'}),
                        (0, t.jsx)(n.td, {
                          children: 'The unique ID for the pixel.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {
                          children: (0, t.jsx)(n.code, {children: 'domain'}),
                        }),
                        (0, t.jsx)(n.td, {children: 'String'}),
                        (0, t.jsx)(n.td, {children: 'Yes'}),
                        (0, t.jsx)(n.td, {
                          children: 'The domain where the event occurred.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(n.h4, {
              id: 'example-request',
              children: 'Example Request',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation HeroPixel($event: PagviewEventInput!) { pageview(auth: { appId: \\"\\", appSecret: \\"\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "md5": "",\n      "pixelId": 1,\n      "domain": "example.com"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h4, {
              id: 'example-curl-request',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation HeroPixel($event: PagviewEventInput!) { pageview(auth: { appId: \\"yourAppIdHere\\", appSecret: \\"yourAppSecretHere\\" }, event: $event) { message code data } }",\n  "variables": {\n    "event": {\n      "md5": "",\n      "pixelId": 1,\n      "domain": "example.com"\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h4, {
              id: 'example-response',
              children: 'Example Response',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "pageview": {\n      "message": "User Found",\n      "code": 200,\n      "data": {\n\n      }\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.h4, {
              id: 'response-object',
              children: 'Response Object',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n    code: number;\n    message: string;\n    data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, t.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            (0, t.jsx)(n.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            (0, t.jsx)(n.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, t.jsxs)(n.li, {
                          children: [
                            (0, t.jsx)(n.code, {children: '500'}),
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
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: (0, t.jsx)(n.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.hr, {}),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'error-handling',
              children: 'Error Handling',
            }),
            '\n',
            (0, t.jsx)(n.h3, {id: 'common-errors', children: 'Common Errors'}),
            '\n',
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, {children: 'Code'}),
                      (0, t.jsx)(n.th, {children: 'Message'}),
                      (0, t.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {children: '200'}),
                        (0, t.jsx)(n.td, {children: 'Operation Successful'}),
                        (0, t.jsx)(n.td, {
                          children: 'The operation completed successfully.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {children: '400'}),
                        (0, t.jsx)(n.td, {children: 'Invalid Input'}),
                        (0, t.jsx)(n.td, {
                          children: 'One or more input fields are invalid.',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, {children: '500'}),
                        (0, t.jsx)(n.td, {children: 'Internal Server Error'}),
                        (0, t.jsx)(n.td, {
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
            (0, t.jsx)(n.h3, {
              id: 'example-error-response',
              children: 'Example Error Response',
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 400,\n  "message": "Invalid input provided.",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 500,\n  "message": "Internal server error.",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'For all error responses, the ',
                (0, t.jsx)(n.code, {children: 'data'}),
                ' field will be an empty object, and the ',
                (0, t.jsx)(n.code, {children: 'message'}),
                ' field will describe the issue encountered.',
              ],
            }),
            '\n',
            (0, t.jsx)(n.hr, {}),
            '\n',
            (0, t.jsx)(n.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'For additional support, contact our development team at ',
                (0, t.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => d, x: () => l});
      var t = r(3696);
      const s = {},
        i = t.createContext(s);
      function d(e) {
        const n = t.useContext(i);
        return t.useMemo(
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
            : d(e.components)),
          t.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

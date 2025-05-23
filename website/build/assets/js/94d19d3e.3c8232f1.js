/*! For license information please see 94d19d3e.3c8232f1.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2286],
  {
    2192: (e, n, t) => {
      var s = t(3696),
        r = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function o(e, n, t) {
        var s,
          d = {},
          o = null,
          h = null;
        for (s in (void 0 !== t && (o = '' + t),
        void 0 !== n.key && (o = '' + n.key),
        void 0 !== n.ref && (h = n.ref),
        n))
          i.call(n, s) && !c.hasOwnProperty(s) && (d[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === d[s] && (d[s] = n[s]);
        return {
          $$typeof: r,
          type: e,
          key: o,
          ref: h,
          props: d,
          _owner: l.current,
        };
      }
      (n.Fragment = d), (n.jsx = o), (n.jsxs = o);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    4356: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => a,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      var s = t(2540),
        r = t(3023);
      const d = {
          id: 'softpull-graphql-request',
          title: 'Softpull GraphQL Request',
          description: 'desc',
        },
        i = 'Softpull GraphQL Request',
        l = {
          id: 'graphql/softpull-graphql-request',
          title: 'Softpull GraphQL Request',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/graphql/softpull-graphql-request.md',
          sourceDirName: 'graphql',
          slug: '/graphql/softpull-graphql-request',
          permalink: '/docs/graphql/softpull-graphql-request',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 173633847e4,
          frontMatter: {
            id: 'softpull-graphql-request',
            title: 'Softpull GraphQL Request',
            description: 'desc',
          },
        },
        c = {},
        o = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'How It Works', id: 'how-it-works', level: 3},
          {value: 'Authentication', id: 'authentication', level: 2},
          {value: 'Auth Object', id: 'auth-object', level: 3},
          {value: 'Operations', id: 'operations', level: 2},
          {
            value: 'Mutation: <code>softpull</code>',
            id: 'mutation-softpull',
            level: 3,
          },
          {value: 'Endpoint', id: 'endpoint', level: 4},
          {value: 'Parameters', id: 'parameters', level: 4},
          {
            value: '<code>SoftpullEventInput</code> Fields',
            id: 'softpulleventinput-fields',
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
      function h(e) {
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
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.h1, {
              id: 'softpull-graphql-request',
              children: 'Softpull GraphQL Request',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The Softpull GraphQL Request helps track credit inquiries (softpulls) for analytics and reporting. A softpull is a credit check that does not affect your credit score. This system ensures your data is processed securely and efficiently.',
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'You submit event details via the Softpull request.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'The backend processes the data for analytics without affecting your credit score.',
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children:
                    'Optional fields allow you to provide additional details for richer insights.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'This system is designed to be user-friendly and transparent, ensuring your data is handled with care and precision.',
            }),
            '\n',
            (0, s.jsx)(n.hr, {}),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'authentication',
              children: 'Authentication',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Most mutations and queries require authentication. The ',
                (0, s.jsx)(n.code, {children: 'auth'}),
                ' object must be provided as part of the request. It includes:',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'auth-object', children: 'Auth Object'}),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {children: 'Field'}),
                      (0, s.jsx)(n.th, {children: 'Type'}),
                      (0, s.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'appId'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'The application ID. Request this from ',
                            (0, s.jsx)(n.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'appSecret'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsxs)(n.td, {
                          children: [
                            'The application secret. Request this from ',
                            (0, s.jsx)(n.a, {
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
            (0, s.jsx)(n.hr, {}),
            '\n',
            (0, s.jsx)(n.h2, {id: 'operations', children: 'Operations'}),
            '\n',
            (0, s.jsxs)(n.h3, {
              id: 'mutation-softpull',
              children: [
                'Mutation: ',
                (0, s.jsx)(n.code, {children: 'softpull'}),
              ],
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Tracks a softpull event for analytics.',
            }),
            '\n',
            (0, s.jsx)(n.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation HeroPixel(\n  $auth: AuthRequestInput!\n  $event: SoftpullEventInput!\n) {\n  softpull(auth: $auth, event: $event) {\n    message\n    code\n    data\n  }\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.h4, {id: 'parameters', children: 'Parameters'}),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {children: 'Parameter'}),
                      (0, s.jsx)(n.th, {children: 'Type'}),
                      (0, s.jsx)(n.th, {children: 'Required'}),
                      (0, s.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'auth'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'AuthRequestInput'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'SoftpullEventInput'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {
                          children: 'Details of the softpull event.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsxs)(n.h4, {
              id: 'softpulleventinput-fields',
              children: [
                (0, s.jsx)(n.code, {children: 'SoftpullEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {children: 'Field'}),
                      (0, s.jsx)(n.th, {children: 'Type'}),
                      (0, s.jsx)(n.th, {children: 'Required'}),
                      (0, s.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'address'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {
                          children: "The user's street address.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'city'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {children: "The user's city."}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {
                            children: 'consumerId',
                          }),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {
                          children: 'An optional identifier for the consumer.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {
                          children: "The user's email address.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {children: 'The event name or type.'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'firstName'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {children: "The user's first name."}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'ip'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {
                          children: 'The IP address of the user.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'lastName'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {children: "The user's last name."}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'md5'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {
                          children: 'The MD5 hash of an identifier or email.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'phone'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {
                          children: "The user's phone number.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'pixelId'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'Float'}),
                        (0, s.jsx)(n.td, {children: 'Yes'}),
                        (0, s.jsx)(n.td, {
                          children: 'The unique ID for the pixel.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {
                            children: 'prefiConsentDate',
                          }),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {
                          children: 'The date and time of consent.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'state'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {children: "The user's state."}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'uniqueId'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {
                          children: 'A unique identifier for the event.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, {children: 'zip'}),
                        }),
                        (0, s.jsx)(n.td, {children: 'String'}),
                        (0, s.jsx)(n.td, {children: 'No'}),
                        (0, s.jsx)(n.td, {
                          children: "The user's zip or postal code.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'example-request',
              children: 'Example Request',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation HeroPixel($auth: AuthRequestInput!, $event: SoftpullEventInput!) { softpull(auth: $auth, event: $event) { message code data } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "pixelId": 1,\n      "email": "john@doe.com",\n      "firstName": "John",\n      "lastName": "Doe",\n      "phone": "(202) 111-1111",\n      "prefiConsentDate": "2025-01-01T00:00:00Z",\n      "ip": "127.0.0.1"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'example-curl-request',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation HeroPixel($auth: AuthRequestInput!, $event: SoftpullEventInput!) { softpull(auth: $auth, event: $event) { message code data } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "pixelId": 1,\n      "email": "john@doe.com",\n      "firstName": "John",\n      "lastName": "Doe",\n      "phone": "(202) 111-1111",\n      "prefiConsentDate": "2025-01-01T00:00:00Z",\n      "ip": "127.0.0.1"\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'example-response',
              children: 'Example Response',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "softpull": {\n      "code": 200,\n      "data": {\n        "consumer_data": {\n          "event": "softpull",\n          "team_id": 1,\n          "first_name": "John",\n          "last_name": "Doe",\n          "website_id": 1,\n          "pixel_id": 1,\n          "consumer_id": null,\n          "isUniqueLead": false,\n          "created_at": 1736248154,\n          "timestamp": "2025-01-07 11:09:14.270",\n          "prefi_consent_date": "2025-01-02T02:30:59Z",\n          "prefi_consent_ip": "127.0.0.1",\n          "email": "john@doe.com",\n          "ip": "127.0.0.1",\n          "unique_id": "69654f75d5b647478f447aef62dc2c55",\n          "phone": "(202) 111-1111",\n          "md5": "69654f75d5b647478f447aef62dc2c55",\n          "address": null,\n          "city": null,\n          "zip": null,\n          "state": null,\n          "ledger": {\n            "credits_pixel_total": 0,\n            "credits_team_balance": 0,\n            "credits_team_today": 0,\n            "credits_pixel_today": 0\n          }\n        },\n        "funding_offers": {\n          "email": "john@doe.com",\n          "phone": "(202) 111-1111",\n          "first_name": "John",\n          "last_name": "Doe",\n          "prefi_consent_date": "2025-01-02 02:30:59",\n          "prefi_consent_ip": "127.0.0.1",\n          "consumer_id": "",\n          "offername1": "Automatic Financing",\n          "offerscore1": "818",\n          "offerdetails1": "Financing Automatically and Instantly Available",\n          "offerstatus1": "Approved",\n          "offeramount1": "$82,000",\n          "offercontingencies1": "",\n          "offername2": "0% Unsecured Funding",\n          "offerscore2": "818",\n          "offerdetails2": "Unsecured Revolving Credit Lines - 0% for 12-21 months - To book: https://calendly.com/guidinglightamber",\n          "offerstatus2": "If Fixed",\n          "offeramount2": "$99,000",\n          "offercontingencies2": "PayD-$11,000",\n          "emails": ["john.doe@example.com", "j.doe@hotmail.com"],\n          "phones": ["202-230-1111", "202-258-2222"],\n          "dob": "69",\n          "address1": "SOMEWHERE 200",\n          "city1": "WASHINGTON",\n          "state1": "DC",\n          "zip1": "00000",\n          "address2": "SOMEWHERE 500",\n          "city2": "WASHINGTON",\n          "state2": "DC",\n          "zip2": "11111",\n          "address3": "",\n          "city3": "",\n          "state3": "",\n          "zip3": "",\n          "address4": "1",\n          "city4": "",\n          "state4": "",\n          "zip4": "",\n          "created_at": "2025-01-03 04:07:17"\n        }\n      },\n      "message": "Success"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.h4, {
              id: 'response-object',
              children: 'Response Object',
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n  code: number;\n  message: string;\n  data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {
                      children: (0, s.jsx)(n.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, s.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.li, {
                          children: [
                            (0, s.jsx)(n.code, {children: '500'}),
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
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {
                      children: (0, s.jsx)(n.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, {
                      children: (0, s.jsx)(n.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, s.jsx)(n.hr, {}),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'error-handling',
              children: 'Error Handling',
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'common-errors', children: 'Common Errors'}),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {children: 'Code'}),
                      (0, s.jsx)(n.th, {children: 'Message'}),
                      (0, s.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: '200'}),
                        (0, s.jsx)(n.td, {children: 'Operation Successful'}),
                        (0, s.jsx)(n.td, {
                          children: 'The operation completed successfully.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: '400'}),
                        (0, s.jsx)(n.td, {children: 'Invalid Input'}),
                        (0, s.jsx)(n.td, {
                          children: 'One or more input fields are invalid.',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: '500'}),
                        (0, s.jsx)(n.td, {children: 'Internal Server Error'}),
                        (0, s.jsx)(n.td, {
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
            (0, s.jsx)(n.h3, {
              id: 'example-error-response',
              children: 'Example Error Response',
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 400,\n  "message": "Invalid input provided.",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "code": 500,\n  "message": "Internal server error.",\n  "data": {}\n}\n',
              }),
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For all error responses, the ',
                (0, s.jsx)(n.code, {children: 'data'}),
                ' field will be an empty object, and the ',
                (0, s.jsx)(n.code, {children: 'message'}),
                ' field will describe the issue encountered.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.hr, {}),
            '\n',
            (0, s.jsx)(n.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'For additional support, contact our development team at ',
                (0, s.jsx)(n.a, {
                  href: 'mailto:support@heropixel.com',
                  children: 'support@heropixel.com',
                }),
                '.',
              ],
            }),
          ],
        });
      }
      function a(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(h, {...e})})
          : h(e);
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => i, x: () => l});
      var s = t(3696);
      const r = {},
        d = s.createContext(r);
      function i(e) {
        const n = s.useContext(d);
        return s.useMemo(
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
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          s.createElement(d.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

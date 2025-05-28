/*! For license information please see 294cf0b4.233924e8.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [819],
  {
    2192: (e, n, d) => {
      var r = d(3696),
        s = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        t = Object.prototype.hasOwnProperty,
        c =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, n, d) {
        var r,
          i = {},
          h = null,
          a = null;
        for (r in (void 0 !== d && (h = '' + d),
        void 0 !== n.key && (h = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          t.call(n, r) && !l.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: s,
          type: e,
          key: h,
          ref: a,
          props: i,
          _owner: c.current,
        };
      }
      (n.Fragment = i), (n.jsx = h), (n.jsxs = h);
    },
    2540: (e, n, d) => {
      e.exports = d(2192);
    },
    1174: (e, n, d) => {
      d.r(n),
        d.d(n, {
          assets: () => l,
          contentTitle: () => t,
          default: () => o,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => h,
        });
      var r = d(2540),
        s = d(3023);
      const i = {
          id: 'super-leads-graphql-request',
          title: 'Super Leads GraphQL Request',
          description: 'desc',
        },
        t = 'Super Leads API Documentation',
        c = {
          id: 'graphql/super-leads-graphql-request',
          title: 'Super Leads GraphQL Request',
          description: 'desc',
          source:
            '@site/versioned_docs/version-0.0.1/graphql/super-leads-graphql-request.md',
          sourceDirName: 'graphql',
          slug: '/graphql/super-leads-graphql-request',
          permalink: '/docs/graphql/super-leads-graphql-request',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'super-leads-graphql-request',
            title: 'Super Leads GraphQL Request',
            description: 'desc',
          },
          sidebar: 'graphql',
          previous: {
            title: 'Basic GraphQL Request',
            permalink: '/docs/graphql/basic-graphql-request',
          },
          next: {
            title: 'Suppression GraphQL Request',
            permalink: '/docs/graphql/suppression-graphql-request',
          },
        },
        l = {},
        h = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'How It Works', id: 'how-it-works', level: 2},
          {value: 'Authentication', id: 'authentication', level: 2},
          {value: 'Auth Object', id: 'auth-object', level: 3},
          {value: 'Operations', id: 'operations', level: 2},
          {
            value: 'Mutation: <code>apiLeadsSuper</code>',
            id: 'mutation-apileadssuper',
            level: 3,
          },
          {value: 'Endpoint', id: 'endpoint', level: 4},
          {value: 'Parameters', id: 'parameters', level: 4},
          {
            value: '<code>ApiLeadsEventInput</code> Fields',
            id: 'apileadseventinput-fields',
            level: 4,
          },
          {value: 'Example Request', id: 'example-request', level: 4},
          {value: 'Example CURL Request', id: 'example-curl-request', level: 4},
          {value: 'Example Response', id: 'example-response', level: 4},
          {value: 'Response Object', id: 'response-object', level: 4},
          {value: 'Contact', id: 'contact', level: 2},
        ];
      function a(e) {
        const n = {
          a: 'a',
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'super-leads-api-documentation',
              children: 'Super Leads API Documentation',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'The Super Leads GraphQL API provides a powerful interface for submitting lead information and receiving enriched consumer data in return. This API enables businesses to identify and qualify leads by matching submitted information against a comprehensive consumer database, returning detailed demographic, financial, property, and behavioral data when matches are found.',
            }),
            '\n',
            (0, r.jsx)(n.h2, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, r.jsxs)(n.ol, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        (0, r.jsx)(n.strong, {
                          children: 'Submit Lead Information',
                        }),
                        ': Send basic lead data such as name, email, phone number, or hashed identifiers to the API.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        (0, r.jsx)(n.strong, {children: 'Matching Process'}),
                        ': The system attempts to match the provided information against our extensive consumer database using deterministic and probabilistic matching techniques.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    '\n',
                    (0, r.jsxs)(n.p, {
                      children: [
                        (0, r.jsx)(n.strong, {children: 'Data Enrichment'}),
                        ': When a match is found, the API returns comprehensive consumer data including:',
                      ],
                    }),
                    '\n',
                    (0, r.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Personal identifiable information (PII)',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Email addresses with quality scores',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Phone numbers with carrier information',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Demographic details (age, gender, education, etc.)',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Financial information (income, credit range, etc.)',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children:
                            'Property data (home value, mortgage details, etc.)',
                        }),
                        '\n',
                        (0, r.jsx)(n.li, {
                          children: 'Behavioral insights and interests',
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
                    (0, r.jsxs)(n.p, {
                      children: [
                        (0, r.jsx)(n.strong, {children: 'Response Handling'}),
                        ': Process the returned data to qualify leads, personalize marketing efforts, or enhance your CRM records.',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
              ],
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
              id: 'mutation-apileadssuper',
              children: [
                'Mutation: ',
                (0, r.jsx)(n.code, {children: 'apiLeadsSuper'}),
              ],
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children: 'Sends lead information to the Super Leads API.',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation ApiLeadsSuper(\n\t$auth: AuthRequestInput!,\n\t$event: ApiLeadsEventInput!\n) {\n  apiLeadsSuper(auth: $auth, event: $event) {\n    code\n    data\n    message\n  }\n}\n',
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
                        (0, r.jsx)(n.td, {children: 'AuthRequestInput'}),
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
                        (0, r.jsx)(n.td, {children: 'ApiLeadsEventInput'}),
                        (0, r.jsx)(n.td, {children: 'Yes'}),
                        (0, r.jsx)(n.td, {
                          children: 'Details of the lead event.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsxs)(n.h4, {
              id: 'apileadseventinput-fields',
              children: [
                (0, r.jsx)(n.code, {children: 'ApiLeadsEventInput'}),
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
                          children: (0, r.jsx)(n.code, {children: 'pixel_id'}),
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
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'The domain where the event occurred.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'first_name',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'First name of the lead.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'last_name'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Last name of the lead.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'strict_name_match',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'Boolean'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether to strictly match the name.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'md5'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'MD5 hash.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'email_md5'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'MD5 hash of the email address.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'email_sha256',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'SHA-256 hash of the email address.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Email address of the user.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'phone_md5'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'MD5 hash of the phone number.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'phone_sha256',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'SHA-256 hash of the phone number.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'phone'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Phone number of the user.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'pusher_channel',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Pusher channel identifier.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'tcpa'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Int'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'TCPA compliance flag.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'hem'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'HEM identifier.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'request_id',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Unique request identifier.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'as'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'AS identifier.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'canonical'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Canonical URL.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'city'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'City of the user.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'country'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Country of the user.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'description',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Description of the event.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'ip'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'IP address of the user.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'isp'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Internet Service Provider.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'language'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Language preference of the user.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'lat'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Float'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Latitude coordinate.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'lon'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Float'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Longitude coordinate.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'org'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Organization.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'referrer'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Referring URL.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'timestamp'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Int'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Timestamp of the event.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'timezone'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Timezone of the user.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'title'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Page title.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'url'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Current URL.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'sessionid'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Session identifier.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'zip'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'ZIP/Postal code.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'age'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Age of the user.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'gender'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Gender of the user.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'sha1'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'SHA-1 hash.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'sha2'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'SHA-2 hash.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'nonId'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Non-ID identifier.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_source',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'UTM source parameter.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_medium',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'UTM medium parameter.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_campaign',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'UTM campaign parameter.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'utm_term'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'UTM term parameter.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'utm_content',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'UTM content parameter.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'os'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Operating system.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'fingerprint',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Browser fingerprint.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'user_agent',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'User agent string.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'browser'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Browser name and version.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'device_type',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Type of device.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'resolution',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Screen resolution.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Event type.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'region_name',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Region/state name.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'country_code',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Country code.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'unique_id'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Unique identifier.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'is_new_session',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'Boolean'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether this is a new session.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {children: 'is_eu'}),
                        }),
                        (0, r.jsx)(n.td, {children: 'Boolean'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Whether the user is in the EU.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'referring_domain',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Referring domain.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'inner_resolution',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {
                          children: 'Inner window resolution.',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'custom_one',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Custom field one.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'custom_two',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Custom field two.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'custom_three',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Custom field three.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'custom_four',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Custom field four.'}),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, {
                          children: (0, r.jsx)(n.code, {
                            children: 'custom_five',
                          }),
                        }),
                        (0, r.jsx)(n.td, {children: 'String'}),
                        (0, r.jsx)(n.td, {children: 'No'}),
                        (0, r.jsx)(n.td, {children: 'Custom field five.'}),
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
                  '{\n  "query": "mutation ApiLeadsSuper($auth: AuthRequestInput!, $event: ApiLeadsEventInput!) { apiLeadsSuper(auth: { appId: \\"yourAppIdHere\\", appSecret: \\"yourAppSecretHere\\" }, event: $event) { message code data } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "pixel_id": 123,\n      "domain": "example.com",\n      "email": "user@example.com",\n      "first_name": "John",\n      "last_name": "Doe"\n    }\n  }\n}\n',
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
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation ApiLeadsSuper($auth: AuthRequestInput!, $event: ApiLeadsEventInput!) { apiLeadsSuper(auth: { appId: \\"yourAppIdHere\\", appSecret: \\"yourAppSecretHere\\" }, event: $event) { message code data } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "pixel_id": 123,\n      "domain": "example.com",\n      "email": "user@example.com",\n      "first_name": "John",\n      "last_name": "Doe"\n    }\n  }\n}\'\n',
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
                  '{\n    "data": {\n        "apiLeadsSuper": {\n            "code": 200,\n            "data": {\n                "consumer_id": 405343959,\n                "pii": {\n                    "id": 405343959,\n                    "address_id": 36347261,\n                    "household_id": 3416591,\n                    "first_name": "kristen",\n                    "last_name": "hanacek",\n                    "name_suffix": "",\n                    "address": "27 Halehaven Dr",\n                    "city": "Simpsonville",\n                    "state": "SC",\n                    "zip": "29681",\n                    "zip4": "4856",\n                    "dpbc": "272",\n                    "carrier_route": "R025",\n                    "fips_state_code": "45",\n                    "fips_county_code": "045",\n                    "county_name": "Greenville",\n                    "latitude": 34.828075,\n                    "longitude": -82.22206,\n                    "address_type": "S",\n                    "cbsa": "24860",\n                    "census_tract": "002814",\n                    "census_block_group": "1",\n                    "census_block": "1003",\n                    "gender": "F",\n                    "addr_primary": "27 Halehaven Dr",\n                    "addr_pre": "",\n                    "addr_street": "Halehaven",\n                    "addr_post": "",\n                    "addr_suffix": "Dr",\n                    "addr_abrev": "Simpsonville",\n                    "addr_secy": "",\n                    "prop_type": "",\n                    "hasemail": 1,\n                    "hasphone": 1,\n                    "dpv": "272",\n                    "dma": 567,\n                    "msa": 3160,\n                    "scf": "296",\n                    "congressional_district": "04",\n                    "urbanicity_code": "S",\n                    "nationalconsumerdatabase": "1"\n                },\n                "emails": [\n                    {\n                        "id": 405343959,\n                        "address_id": 36347261,\n                        "household_id": 3416591,\n                        "domain": "thecallfamily",\n                        "email": "landon@thecallfamily.com",\n                        "emailid": 484862434,\n                        "emailoptin": true,\n                        "emailqualitylevel": 4,\n                        "ip": "208.110.136.131",\n                        "md5_uc": "574b16c61deb1fffbb2d98996075b1f1",\n                        "md5": "437172010ab62415515924068f437d44",\n                        "rankorder": 8,\n                        "registerdate": "2017-06-06T00:00:00.000Z",\n                        "sha1_uc": "72b4a9c060dd51cb2b5917f699ebf1b8d4d3f52a",\n                        "sha1": "4db80d75c91a8db267e4532ed96cc1e4fd7dd434",\n                        "sha256_uc": "4e05228d28d81173a8e43c3221e2f2543114cbbd3cae750952e31e620e26660a",\n                        "sha256": "3a4e878edafb581eba01164da83b95eee02f3d28596cfce25bf57de6f26b8bb7",\n                        "updatedate": "2020-04-02T00:00:00.000Z",\n                        "url": "badcreditquoteking.com"\n                    },\n                    {\n                        "id": 405343959,\n                        "address_id": 36347261,\n                        "household_id": 3416591,\n                        "domain": "netscape",\n                        "email": "kristennelli@netscape.net",\n                        "emailid": 993149039,\n                        "emailoptin": true,\n                        "emailqualitylevel": 1,\n                        "ip": "128.92.87.186",\n                        "md5_uc": "6acfa5f85f568300ee5356357c8326bf",\n                        "md5": "69416e0180d8f1976c3c1078f7fab095",\n                        "rankorder": 5,\n                        "registerdate": "2018-01-25T00:00:00.000Z",\n                        "sha1_uc": "9c4240937b07474dae589b5832c9defae81e768a",\n                        "sha1": "6e0c649f67f6d52ac885b4b632dac6a7d979dda4",\n                        "sha256_uc": "7bc8149903fb38d32bc96de806061d6ec79baedca1f8d6e18c73f0017a849f38",\n                        "sha256": "e959e9354fbdeb44107bb58cdfac1c2d2f68aace362e4dea1a35348492c2173a",\n                        "updatedate": "2024-04-24T00:00:00.000Z",\n                        "url": "itsonus.net"\n                    }\n                ],\n                "phones": [\n                    {\n                        "id": "405343959",\n                        "address_id": "36347261",\n                        "household_id": "3416591",\n                        "phone": "8648725726",\n                        "dnc": "1",\n                        "mobilecarrier": "New Cingular Wireless",\n                        "addeddate": "2024-09-27",\n                        "updatedate": "2024-09-28",\n                        "lastseendate": "2024-02-06",\n                        "phonetype": "0",\n                        "workphone": "",\n                        "rankorder": "2",\n                        "phonequalitylevel": "2"\n                    },\n                    {\n                        "id": "405343959",\n                        "address_id": "36347261",\n                        "household_id": "3416591",\n                        "phone": "8649052150",\n                        "dnc": "",\n                        "mobilecarrier": "New Cingular Wireless",\n                        "addeddate": "2024-07-30",\n                        "updatedate": "2024-09-28",\n                        "lastseendate": "2024-07-15",\n                        "phonetype": "0",\n                        "workphone": "",\n                        "rankorder": "1",\n                        "phonequalitylevel": "0"\n                    }\n                ],\n                "data": {\n                    "id": 405343959,\n                    "language": "English",\n                    "nationalconsumerdatabase": 1,\n                    "age": 56,\n                    "gender": "Female",\n                    "multilingual": 0,\n                    "marital_status": "Married",\n                    "ethnic_group": "White",\n                    "generation": "2. Generation X (1961-1981)",\n                    "political_party": "",\n                    "religion": "Catholic",\n                    "education": "Completed College",\n                    "education_ordinal": 5,\n                    "white_collar": 0,\n                    "blue_collar": 0,\n                    "birth_year": 1968\n                },\n                "financial": {\n                    "id": "405343959",\n                    "household_id": "3416591",\n                    "address_id": "36347261",\n                    "income_hh": "P. $250-$299k",\n                    "discretionary_income": "K. $100,000-$149,999",\n                    "financial_power": "9",\n                    "credit_range": "C. 700-749",\n                    "mortgage_amount": 115000,\n                    "mortgage_refi_amount": "107000",\n                    "mortgage_refi_type": "Fixed",\n                    "automotive_loan_intent": "1",\n                    "bank_card_intent": "1",\n                    "card_offer_response": "1",\n                    "mortgage_offer_response": "1"\n                },\n                "property": {\n                    "propertyid": 7842156,\n                    "addressid": 36347261,\n                    "id": 405343959,\n                    "first": "kristen",\n                    "last": "hanacek",\n                    "id_source": 29,\n                    "consumer": 1,\n                    "business": 0,\n                    "std_address": "27 Halehaven Dr",\n                    "std_city": "Simpsonville",\n                    "std_state": "SC",\n                    "std_zip": "29681",\n                    "std_zip4": "4856",\n                    "carrier_route": "R025",\n                    "dpv_point_code": "272",\n                    "county_code": "045",\n                    "county_name": "Greenville",\n                    "subdivision": "Halehaven",\n                    "lat": 34.828075,\n                    "lon": -82.22206,\n                    "apn": "0539030100901",\n                    "owner_occupied": 1,\n                    "prop_type": "SFR",\n                    "mobile_home": 0,\n                    "bldg_style": "Ranch",\n                    "stories_nmbr": 1,\n                    "con_type": "Frame",\n                    "ext_type": "Brick",\n                    "markval": 405400,\n                    "landval": 65000,\n                    "imprval": 340400,\n                    "yr_built_orig": 1998,\n                    "acres": 0.32,\n                    "land_sqft": 13939,\n                    "living_sqft": 2450,\n                    "nmbr_bedrooms": 4,\n                    "full_baths": 2,\n                    "half_baths": 1,\n                    "ac_type": "Central",\n                    "fireplace": 1,\n                    "nmbr_fireplace": 1,\n                    "gar_type": "Attached",\n                    "nmbr_park_spaces": 2,\n                    "heat_type": "Forced Air",\n                    "pool": 0,\n                    "roof_covtype": "Composition Shingle",\n                    "hmstd": 1,\n                    "ttl_tax": 3842.76,\n                    "tax_yr": 2024,\n                    "sale_date": "1999-06-15T00:00:00.000Z",\n                    "sale_amt": 179000,\n                    "loan_amt": 115000,\n                    "loan_date": "2015-08-12T00:00:00.000Z",\n                    "mrtg_type": "Conventional",\n                    "mrtg_term": 30,\n                    "lender_name": "Wells Fargo Bank",\n                    "mrtg_refi": 1,\n                    "mrtg_intrate": 3.25,\n                    "rate_type": "Fixed",\n                    "equity": 290400,\n                    "censusblockgroup": "1",\n                    "censustract": "002814",\n                    "msacode": "24860"\n                },\n                "behaviors": [\n                    {\n                        "id": "405343959",\n                        "address_id": "36347261",\n                        "household_id": "3416591",\n                        "nationalconsumerdatabase": "1",\n                        "iab": "1714",\n                        "recency": "1",\n                        "created_at": "2025-01-27 19:24:37"\n                    },\n                    {\n                        "id": "405343959",\n                        "address_id": "36347261",\n                        "household_id": "3416591",\n                        "nationalconsumerdatabase": "1",\n                        "iab": "179",\n                        "recency": "2",\n                        "created_at": "2025-01-27 19:24:37"\n                    },\n                    {\n                        "id": "405343959",\n                        "address_id": "36347261",\n                        "household_id": "3416591",\n                        "nationalconsumerdatabase": "1",\n                        "iab": "3356",\n                        "recency": "3",\n                        "created_at": "2025-01-27 19:24:37"\n                    }\n                ]\n            },\n            "message": "Success"\n        }\n    }\n}\n',
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
                'For additional support or questions about the Super Leads API, contact our development team at ',
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
      function o(e = {}) {
        const {wrapper: n} = {...(0, s.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, d) => {
      d.d(n, {R: () => t, x: () => c});
      var r = d(3696);
      const s = {},
        i = r.createContext(s);
      function t(e) {
        const n = r.useContext(i);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          r.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

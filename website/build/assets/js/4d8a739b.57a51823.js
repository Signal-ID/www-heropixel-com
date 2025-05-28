/*! For license information please see 4d8a739b.57a51823.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1645],
  {
    2192: (e, n, r) => {
      var d = r(3696),
        i = Symbol.for('react.element'),
        t = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, n, r) {
        var d,
          t = {},
          h = null,
          o = null;
        for (d in (void 0 !== r && (h = '' + r),
        void 0 !== n.key && (h = '' + n.key),
        void 0 !== n.ref && (o = n.ref),
        n))
          s.call(n, d) && !l.hasOwnProperty(d) && (t[d] = n[d]);
        if (e && e.defaultProps)
          for (d in (n = e.defaultProps)) void 0 === t[d] && (t[d] = n[d]);
        return {
          $$typeof: i,
          type: e,
          key: h,
          ref: o,
          props: t,
          _owner: c.current,
        };
      }
      (n.Fragment = t), (n.jsx = h), (n.jsxs = h);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    4842: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => t,
          metadata: () => c,
          toc: () => h,
        });
      var d = r(2540),
        i = r(3023);
      const t = {
          id: 'enrichment-graphql-request',
          title: 'Enrichment GraphQL Request',
          description:
            'Enrich lead data with comprehensive consumer information',
        },
        s = 'Enrichment API Documentation',
        c = {
          id: 'graphql/enrichment-graphql-request',
          title: 'Enrichment GraphQL Request',
          description:
            'Enrich lead data with comprehensive consumer information',
          source:
            '@site/versioned_docs/version-0.0.1/graphql/enrichment-graphql-request.md',
          sourceDirName: 'graphql',
          slug: '/graphql/enrichment-graphql-request',
          permalink: '/docs/graphql/enrichment-graphql-request',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1748450196e3,
          frontMatter: {
            id: 'enrichment-graphql-request',
            title: 'Enrichment GraphQL Request',
            description:
              'Enrich lead data with comprehensive consumer information',
          },
          sidebar: 'graphql',
          previous: {
            title: 'Basic GraphQL Request',
            permalink: '/docs/graphql/basic-graphql-request',
          },
          next: {
            title: 'Lead Capture GraphQL Request',
            permalink: '/docs/graphql/leadcapture-graphql-request',
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
            value: 'Mutation: <code>enrichment</code>',
            id: 'mutation-enrichment',
            level: 3,
          },
          {value: 'Endpoint', id: 'endpoint', level: 4},
          {value: 'Parameters', id: 'parameters', level: 4},
          {
            value: '<code>EnrichmentEventInput</code> Fields',
            id: 'enrichmenteventinput-fields',
            level: 4,
          },
          {value: 'Example Request', id: 'example-request', level: 4},
          {value: 'Example CURL Request', id: 'example-curl-request', level: 4},
          {value: 'Example Response', id: 'example-response', level: 4},
          {value: 'Response Object', id: 'response-object', level: 4},
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(n.h1, {
              id: 'enrichment-api-documentation',
              children: 'Enrichment API Documentation',
            }),
            '\n',
            (0, d.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, d.jsx)(n.p, {
              children:
                'The Enrichment API allows you to enhance your existing lead data with comprehensive consumer information. This API is designed to provide detailed demographic, financial, and behavioral insights about your leads, enabling more targeted marketing and personalized customer interactions.',
            }),
            '\n',
            (0, d.jsx)(n.h2, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, d.jsx)(n.p, {
              children:
                'The Enrichment API works through the following process:',
            }),
            '\n',
            (0, d.jsxs)(n.ol, {
              children: [
                '\n',
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {children: 'Submit Lead Information'}),
                    ': You send basic information about a lead, such as email, phone number, or name, to the API.',
                  ],
                }),
                '\n',
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {children: 'Matching Process'}),
                    ': The system attempts to match the provided information against a comprehensive consumer database.',
                  ],
                }),
                '\n',
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {children: 'Data Enrichment'}),
                    ': When a match is found, the API returns detailed consumer data, including demographic information, financial details, property data, and behavioral insights.',
                  ],
                }),
                '\n',
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {children: 'Response Handling'}),
                    ': You can use the enriched data to better understand your leads, personalize marketing efforts, or enhance your CRM records with valuable consumer insights.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, d.jsx)(n.hr, {}),
            '\n',
            (0, d.jsx)(n.h2, {
              id: 'authentication',
              children: 'Authentication',
            }),
            '\n',
            (0, d.jsxs)(n.p, {
              children: [
                'Most mutations and queries require authentication. The ',
                (0, d.jsx)(n.code, {children: 'auth'}),
                ' object must be provided as part of the request. It includes:',
              ],
            }),
            '\n',
            (0, d.jsx)(n.h3, {id: 'auth-object', children: 'Auth Object'}),
            '\n',
            (0, d.jsxs)(n.table, {
              children: [
                (0, d.jsx)(n.thead, {
                  children: (0, d.jsxs)(n.tr, {
                    children: [
                      (0, d.jsx)(n.th, {children: 'Field'}),
                      (0, d.jsx)(n.th, {children: 'Type'}),
                      (0, d.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, d.jsxs)(n.tbody, {
                  children: [
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'appId'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsxs)(n.td, {
                          children: [
                            'The application ID. Request this from ',
                            (0, d.jsx)(n.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'appSecret'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsxs)(n.td, {
                          children: [
                            'The application secret. Request this from ',
                            (0, d.jsx)(n.a, {
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
            (0, d.jsx)(n.hr, {}),
            '\n',
            (0, d.jsx)(n.h2, {id: 'operations', children: 'Operations'}),
            '\n',
            (0, d.jsxs)(n.h3, {
              id: 'mutation-enrichment',
              children: [
                'Mutation: ',
                (0, d.jsx)(n.code, {children: 'enrichment'}),
              ],
            }),
            '\n',
            (0, d.jsx)(n.p, {
              children:
                'Enriches lead information with comprehensive consumer data.',
            }),
            '\n',
            (0, d.jsx)(n.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation Enrichment(\n  $auth: AuthRequestInput!\n  $event: EnrichmentEventInput!\n) {\n  enrichment(auth: $auth, event: $event) {\n    code\n    data\n    message\n  }\n}\n',
              }),
            }),
            '\n',
            (0, d.jsx)(n.h4, {id: 'parameters', children: 'Parameters'}),
            '\n',
            (0, d.jsxs)(n.table, {
              children: [
                (0, d.jsx)(n.thead, {
                  children: (0, d.jsxs)(n.tr, {
                    children: [
                      (0, d.jsx)(n.th, {children: 'Parameter'}),
                      (0, d.jsx)(n.th, {children: 'Type'}),
                      (0, d.jsx)(n.th, {children: 'Required'}),
                      (0, d.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, d.jsxs)(n.tbody, {
                  children: [
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'auth'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'AuthRequestInput'}),
                        (0, d.jsx)(n.td, {children: 'Yes'}),
                        (0, d.jsx)(n.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'EnrichmentEventInput'}),
                        (0, d.jsx)(n.td, {children: 'Yes'}),
                        (0, d.jsx)(n.td, {
                          children: 'Details of the lead to enrich.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, d.jsxs)(n.h4, {
              id: 'enrichmenteventinput-fields',
              children: [
                (0, d.jsx)(n.code, {children: 'EnrichmentEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, d.jsxs)(n.table, {
              children: [
                (0, d.jsx)(n.thead, {
                  children: (0, d.jsxs)(n.tr, {
                    children: [
                      (0, d.jsx)(n.th, {children: 'Field'}),
                      (0, d.jsx)(n.th, {children: 'Type'}),
                      (0, d.jsx)(n.th, {children: 'Required'}),
                      (0, d.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, d.jsxs)(n.tbody, {
                  children: [
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'md5'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'Yes'}),
                        (0, d.jsx)(n.td, {
                          children: 'MD5 hash for identification.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'pixel_id'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'Int'}),
                        (0, d.jsx)(n.td, {children: 'Yes'}),
                        (0, d.jsx)(n.td, {
                          children: 'The unique ID for the pixel.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'domain'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'The domain where the event occurred.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'pusher_channel',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Pusher channel identifier.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'tcpa'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'Int'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'TCPA compliance flag.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'phone'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Phone number of the user.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Email address of the user.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'hem'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'HEM identifier.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'request_id',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Unique request identifier.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'as'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'AS identifier.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'canonical'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Canonical URL.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'city'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'City of the user.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'country'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Country of the user.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'description',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Description of the event.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'ip'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'IP address of the user.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'isp'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Internet Service Provider.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'language'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Language preference of the user.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'lat'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'Float'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Latitude coordinate.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'lon'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'Float'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Longitude coordinate.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'org'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Organization.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'referrer'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Referring URL.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'timestamp'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'Int'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Timestamp of the event.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'timezone'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Timezone of the user.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'title'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Page title.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'url'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Current URL.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'sessionid'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Session identifier.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'zip'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'ZIP/Postal code.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'age'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Age of the user.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'gender'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Gender of the user.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'sha1'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'SHA-1 hash.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'sha2'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'SHA-2 hash.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'nonId'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Non-ID identifier.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'utm_source',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'UTM source parameter.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'utm_medium',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'UTM medium parameter.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'utm_campaign',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'UTM campaign parameter.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'utm_term'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'UTM term parameter.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'utm_content',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'UTM content parameter.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'os'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Operating system.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'fingerprint',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Browser fingerprint.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'user_agent',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'User agent string.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'browser'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Browser name and version.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'device_type',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Type of device.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'resolution',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Screen resolution.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Event type.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'region_name',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Region/state name.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'country_code',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Country code.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'unique_id'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Unique identifier.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'is_new_session',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'Boolean'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Whether this is a new session.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {children: 'is_eu'}),
                        }),
                        (0, d.jsx)(n.td, {children: 'Boolean'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Whether the user is in the EU.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'referring_domain',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Referring domain.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'inner_resolution',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {
                          children: 'Inner window resolution.',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'custom_one',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Custom field one.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'custom_two',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Custom field two.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'custom_three',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Custom field three.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'custom_four',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Custom field four.'}),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, {
                          children: (0, d.jsx)(n.code, {
                            children: 'custom_five',
                          }),
                        }),
                        (0, d.jsx)(n.td, {children: 'String'}),
                        (0, d.jsx)(n.td, {children: 'No'}),
                        (0, d.jsx)(n.td, {children: 'Custom field five.'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, d.jsx)(n.h4, {
              id: 'example-request',
              children: 'Example Request',
            }),
            '\n',
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation Enrichment($auth: AuthRequestInput!, $event: EnrichmentEventInput!) { enrichment(auth: $auth, event: $event) { code data message } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "pixelId": 123,\n      "email": "user@example.com",\n      "phone": "2025559876",\n      "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, d.jsx)(n.h4, {
              id: 'example-curl-request',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation Enrichment($auth: AuthRequestInput!, $event: EnrichmentEventInput!) { enrichment(auth: $auth, event: $event) { code data message } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "pixelId": 123,\n      "email": "user@example.com",\n      "phone": "2025559876",\n      "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, d.jsx)(n.h4, {
              id: 'example-response',
              children: 'Example Response',
            }),
            '\n',
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "enrichment": {\n      "code": 200,\n      "data": {\n        "consumer_data": {\n          "pusher_channel": null,\n          "event": "pageview",\n          "team_id": 1,\n          "first_name": "John",\n          "last_name": "Smith",\n          "website_id": 123,\n          "pixel_id": 123,\n          "domain": null,\n          "canonical": "undefined",\n          "consumer_id": "10000001",\n          "isUniqueLead": false,\n          "created_at": 1672531200,\n          "timestamp": "2023-01-01 12:00:00.000",\n          "tcpa": 0,\n          "hem": "",\n          "sha2": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",\n          "email": "user@example.com",\n          "country_code": "US",\n          "is_eu": false,\n          "lat": 38.9,\n          "lon": -77.0,\n          "timezone": "America/New_York",\n          "language": "en-US",\n          "request_id": null,\n          "description": null,\n          "ip": "192.0.2.1",\n          "url": "undefined",\n          "nonId": null,\n          "is_new_session": null,\n          "as": null,\n          "title": null,\n          "sessionid": null,\n          "fingerprint": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",\n          "unique_id": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n          "org": "Example Organization",\n          "isp": "Example ISP",\n          "referrer": "",\n          "referring_domain": "",\n          "utm_source": "",\n          "utm_medium": "",\n          "utm_campaign": "",\n          "utm_term": "",\n          "utm_content": "",\n          "os": "Windows 10",\n          "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36",\n          "_unmapped_data": "",\n          "browser": "Chrome 100.0.0.0",\n          "device_type": "desktop",\n          "resolution": "1920x1080",\n          "inner_resolution": "1920x950",\n          "custom_one": "",\n          "custom_two": "",\n          "custom_three": "",\n          "custom_four": "",\n          "custom_five": "",\n          "phone": "2025559876",\n          "phone_formatted": "(202) 555-9876",\n          "phone_voip": "0",\n          "phone_carrier": "Example Carrier",\n          "phone_type": "Wireless",\n          "phone_dialing_code": 1,\n          "phone_do_not_call": false,\n          "phone_activity": "N/A",\n          "phone_is_callable": true,\n          "phone_can_receive_texts": true,\n          "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n          "sha1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4",\n          "address": "123 Main St",\n          "city": "Washington",\n          "region_name": "DC",\n          "zip": "20001",\n          "country": null,\n        "emails": [\n          {\n            "id": 10000001,\n            "address_id": 20000001,\n            "household_id": 3000001,\n            "domain": "example.com",\n            "email": "user@example.com",\n            "emailid": 40000001,\n            "emailoptin": true,\n            "emailqualitylevel": 4,\n            "ip": "192.0.2.1",\n            "md5_uc": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n            "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n            "rankorder": 1,\n            "registerdate": "2022-01-01T00:00:00.000Z",\n            "sha1_uc": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4",\n            "sha1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4",\n            "sha256_uc": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n            "sha256": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n            "updatedate": "2023-01-01T00:00:00.000Z",\n            "url": "example.com"\n          },\n          "marital_status": "Married",\n          "education": "Bachelor\'s Degree",\n          "occupation": "Software Engineer",\n          "income_range": "$100,000 - $150,000",\n          "credit_score_range": "700-749",\n          "homeowner_status": "Owner",\n          "property_value": "$450,000",\n          "property_type": "Single Family Home",\n          "length_of_residence": "5 years",\n          "household_size": 3,\n          "presence_of_children": true,\n          "interests": [\n            "Technology",\n            "Travel",\n            "Outdoor Activities"\n          ],\n          "purchase_behavior": [\n            "Online Shopper",\n            "Premium Brand Buyer",\n            "Early Adopter"\n          ],\n          "lifestyle_indicators": [\n            "Health Conscious",\n            "Tech Savvy",\n            "Environmentally Aware"\n          ],\n          "political_affiliation": "Independent",\n          "charitable_donations": true,\n          "investment_activity": "Active",\n          "vehicle_ownership": [\n            {\n              "make": "Tesla",\n              "model": "Model 3",\n              "year": 2022\n            }\n          ],\n          "social_media_presence": [\n            "LinkedIn",\n            "Twitter",\n            "Instagram"\n          ],\n          "digital_behavior": {\n            "devices_used": [\n              "Smartphone",\n              "Laptop",\n              "Tablet"\n            ],\n            "online_shopping_frequency": "Weekly",\n            "streaming_services": [\n              "Netflix",\n              "Spotify",\n              "Disney+"\n            ]\n          },\n          "risk_factors": {\n            "financial_stress": "Low",\n            "credit_risk": "Low",\n            "identity_theft_risk": "Low"\n          }\n        },\n        "message": "Success"\n      }\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, d.jsx)(n.h4, {
              id: 'response-object',
              children: 'Response Object',
            }),
            '\n',
            (0, d.jsx)(n.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n  code: number;\n  message: string;\n  data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, d.jsxs)(n.ul, {
              children: [
                '\n',
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {
                      children: (0, d.jsx)(n.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, d.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, d.jsxs)(n.li, {
                          children: [
                            (0, d.jsx)(n.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, d.jsxs)(n.li, {
                          children: [
                            (0, d.jsx)(n.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, d.jsxs)(n.li, {
                          children: [
                            (0, d.jsx)(n.code, {children: '500'}),
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
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {
                      children: (0, d.jsx)(n.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, {
                      children: (0, d.jsx)(n.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, d.jsxs)(n.p, {
              children: [
                'For all error responses, the ',
                (0, d.jsx)(n.code, {children: 'data'}),
                ' field will be an empty object, and the ',
                (0, d.jsx)(n.code, {children: 'message'}),
                ' field will describe the issue encountered.',
              ],
            }),
            '\n',
            (0, d.jsx)(n.hr, {}),
            '\n',
            (0, d.jsx)(n.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, d.jsxs)(n.p, {
              children: [
                'For additional support or questions about the Super Leads API, contact our development team at ',
                (0, d.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, d.jsx)(n, {...e, children: (0, d.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => s, x: () => c});
      var d = r(3696);
      const i = {},
        t = d.createContext(i);
      function s(e) {
        const n = d.useContext(t);
        return d.useMemo(
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
              ? e.components(i)
              : e.components || i
            : s(e.components)),
          d.createElement(t.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

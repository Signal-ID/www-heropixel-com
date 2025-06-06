/*! For license information please see 9147e181.48ca41dc.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1333],
  {
    2192: (e, n, r) => {
      var i = r(3696),
        t = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, n, r) {
        var i,
          d = {},
          h = null,
          o = null;
        for (i in (void 0 !== r && (h = '' + r),
        void 0 !== n.key && (h = '' + n.key),
        void 0 !== n.ref && (o = n.ref),
        n))
          s.call(n, i) && !l.hasOwnProperty(i) && (d[i] = n[i]);
        if (e && e.defaultProps)
          for (i in (n = e.defaultProps)) void 0 === d[i] && (d[i] = n[i]);
        return {
          $$typeof: t,
          type: e,
          key: h,
          ref: o,
          props: d,
          _owner: c.current,
        };
      }
      (n.Fragment = d), (n.jsx = h), (n.jsxs = h);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    7309: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => s,
          default: () => a,
          frontMatter: () => d,
          metadata: () => c,
          toc: () => h,
        });
      var i = r(2540),
        t = r(3023);
      const d = {
          id: 'basic-graphql-request',
          title: 'Basic GraphQL Request',
          description: 'desc',
        },
        s = 'GraphQL API Documentation',
        c = {
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
          lastUpdatedAt: 1748454948e3,
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
          next: {
            title: 'Enrichment GraphQL Request',
            permalink: '/docs/graphql/enrichment-graphql-request',
          },
        },
        l = {},
        h = [
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
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.h1, {
              id: 'graphql-api-documentation',
              children: 'GraphQL API Documentation',
            }),
            '\n',
            (0, i.jsx)(n.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'The GraphQL API provides a structured interface to interact with the backend. It enables querying, and mutating data. Below is the documentation for the available operations.',
            }),
            '\n',
            (0, i.jsx)(n.hr, {}),
            '\n',
            (0, i.jsx)(n.h2, {
              id: 'authentication',
              children: 'Authentication',
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'Most mutations and queries require authentication. The ',
                (0, i.jsx)(n.code, {children: 'auth'}),
                ' object must be provided as part of the request. It includes:',
              ],
            }),
            '\n',
            (0, i.jsx)(n.h3, {id: 'auth-object', children: 'Auth Object'}),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, {children: 'Field'}),
                      (0, i.jsx)(n.th, {children: 'Type'}),
                      (0, i.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'appId'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsxs)(n.td, {
                          children: [
                            'The application ID. Request this from ',
                            (0, i.jsx)(n.a, {
                              href: 'mailto:support@heropixel.com',
                              children: 'support@heropixel.com',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'appSecret'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsxs)(n.td, {
                          children: [
                            'The application secret. Request this from ',
                            (0, i.jsx)(n.a, {
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
            (0, i.jsx)(n.hr, {}),
            '\n',
            (0, i.jsx)(n.h2, {id: 'operations', children: 'Operations'}),
            '\n',
            (0, i.jsxs)(n.h3, {
              id: 'mutation-pageview',
              children: [
                'Mutation: ',
                (0, i.jsx)(n.code, {children: 'pageview'}),
              ],
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children: 'Tracks a pageview event for analytics.',
            }),
            '\n',
            (0, i.jsx)(n.h4, {id: 'endpoint', children: 'Endpoint'}),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-graphql',
                children:
                  'mutation Pageview(\n  $auth: AuthRequestInput!\n  $event: PagviewEventInput!\n) {\n  pageview(auth: $auth, event: $event) {\n    message\n    code\n    data\n  }\n}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h4, {id: 'parameters', children: 'Parameters'}),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, {children: 'Parameter'}),
                      (0, i.jsx)(n.th, {children: 'Type'}),
                      (0, i.jsx)(n.th, {children: 'Required'}),
                      (0, i.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'auth'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'AuthInput'}),
                        (0, i.jsx)(n.td, {children: 'Yes'}),
                        (0, i.jsx)(n.td, {
                          children: 'The authentication credentials.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'PagviewEventInput'}),
                        (0, i.jsx)(n.td, {children: 'Yes'}),
                        (0, i.jsx)(n.td, {
                          children: 'Details of the pageview event.',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsxs)(n.h4, {
              id: 'pagvieweventinput-fields',
              children: [
                (0, i.jsx)(n.code, {children: 'PagviewEventInput'}),
                ' Fields',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, {children: 'Field'}),
                      (0, i.jsx)(n.th, {children: 'Type'}),
                      (0, i.jsx)(n.th, {children: 'Required'}),
                      (0, i.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'pixel_id'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Int'}),
                        (0, i.jsx)(n.td, {children: 'Yes'}),
                        (0, i.jsx)(n.td, {
                          children: 'The unique ID for the pixel.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'md5'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'MD5 hash for identification.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'domain'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'The domain where the event occurred.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'pusher_channel',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Pusher channel identifier.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'hem'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'HEM identifier.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'request_id',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Unique request identifier.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'as'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'AS identifier.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'canonical'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Canonical URL.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'city'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'City of the user.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'country'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Country of the user.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'description',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Description of the event.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'email'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Email address of the user.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'phone'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Phone number of the user.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'tcpa'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Int'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'TCPA compliance flag.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'ip'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'IP address of the user.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'isp'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Internet Service Provider.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'language'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Language preference of the user.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'lat'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Float'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Latitude coordinate.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'lon'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Float'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Longitude coordinate.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'org'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Organization.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'referrer'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Referring URL.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'timestamp'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Int'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Timestamp of the event.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'timezone'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Timezone of the user.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'title'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Page title.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'url'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Current URL.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'sessionid'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Session identifier.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'zip'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'ZIP/Postal code.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'age'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Age of the user.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'gender'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Gender of the user.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'sha1'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'SHA-1 hash.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'sha2'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'SHA-2 hash.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'nonId'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Non-ID identifier.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'utm_source',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'UTM source parameter.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'utm_medium',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'UTM medium parameter.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'utm_campaign',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'UTM campaign parameter.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'utm_term'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'UTM term parameter.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'utm_content',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'UTM content parameter.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'os'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Operating system.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'fingerprint',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Browser fingerprint.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'user_agent',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'User agent string.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'browser'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Browser name and version.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'device_type',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Type of device.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'resolution',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Screen resolution.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'event'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Event type.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'region_name',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Region/state name.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'country_code',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Country code.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'unique_id'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Unique identifier.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'is_new_session',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'Boolean'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Whether this is a new session.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {children: 'is_eu'}),
                        }),
                        (0, i.jsx)(n.td, {children: 'Boolean'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Whether the user is in the EU.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'referring_domain',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Referring domain.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'inner_resolution',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {
                          children: 'Inner window resolution.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'custom_one',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Custom field one.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'custom_two',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Custom field two.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'custom_three',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Custom field three.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'custom_four',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Custom field four.'}),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, {
                          children: (0, i.jsx)(n.code, {
                            children: 'custom_five',
                          }),
                        }),
                        (0, i.jsx)(n.td, {children: 'String'}),
                        (0, i.jsx)(n.td, {children: 'No'}),
                        (0, i.jsx)(n.td, {children: 'Custom field five.'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(n.h4, {
              id: 'example-request',
              children: 'Example Request',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "query": "mutation Pageview($auth: AuthRequestInput!, $event: PagviewEventInput!) { pageview(auth: $auth, event: $event) { code data message } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "md5": "",\n      "pixel_id": 1,\n      "domain": "example.com"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h4, {
              id: 'example-curl-request',
              children: 'Example CURL Request',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-bash',
                children:
                  'curl -X POST https://sweet-colt-9750.ddn.hasura.app/graphql \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "query": "mutation Pageview($auth: AuthRequestInput!, $event: PagviewEventInput!) { pageview(auth: $auth, event: $event) { code data message } }",\n  "variables": {\n    "auth": {\n      "appId": "yourAppIdHere",\n      "appSecret": "yourAppSecretHere"\n    },\n    "event": {\n      "md5": "",\n      "pixel_id": 1,\n      "domain": "example.com"\n    }\n  }\n}\'\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h4, {
              id: 'example-response',
              children: 'Example Response',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-json',
                children:
                  '{\n  "data": {\n    "pageview": {\n      "code": 200,\n      "data": {\n        "consumer_data": {\n          "pusher_channel": null,\n          "event": "pageview",\n          "team_id": 1,\n          "first_name": "John",\n          "last_name": "Smith",\n          "website_id": 123,\n          "pixel_id": 123,\n          "domain": "example.com",\n          "canonical": "undefined",\n          "consumer_id": "10000001",\n          "isUniqueLead": false,\n          "created_at": 1716979200,\n          "timestamp": "2024-05-29 12:00:00.000",\n          "tcpa": 0,\n          "hem": "",\n          "sha2": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6",\n          "email": "user@example.com",\n          "country_code": "US",\n          "is_eu": false,\n          "lat": 38.9,\n          "lon": -77.0,\n          "timezone": "America/New_York",\n          "language": "en-US",\n          "request_id": null,\n          "description": null,\n          "ip": "192.168.1.1",\n          "url": "undefined",\n          "nonId": null,\n          "is_new_session": null,\n          "as": null,\n          "title": null,\n          "sessionid": null,\n          "fingerprint": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n          "unique_id": "a1b2c3d4e5f6g7h8i9j0",\n          "org": "Example Organization",\n          "isp": "Example ISP",\n          "referrer": "https://www.google.com",\n          "referring_domain": "google.com",\n          "utm_source": "search",\n          "utm_medium": "organic",\n          "utm_campaign": "brand",\n          "utm_term": "example term",\n          "utm_content": "example content",\n          "os": "Windows 10",\n          "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",\n          "_unmapped_data": "",\n          "browser": "Chrome 91.0.4472.124",\n          "device_type": "desktop",\n          "resolution": "1920x1080",\n          "inner_resolution": "1920x950",\n          "custom_one": "",\n          "custom_two": "",\n          "custom_three": "",\n          "custom_four": "",\n          "custom_five": "",\n          "phone": "2025551234",\n          "phone_formatted": "(202) 555-1234",\n          "phone_voip": "0",\n          "phone_carrier": "Example Carrier",\n          "phone_type": "Wireless",\n          "phone_dialing_code": 1,\n          "phone_do_not_call": false,\n          "phone_activity": "N/A",\n          "phone_is_callable": true,\n          "phone_can_receive_texts": true,\n          "md5": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n          "sha1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",\n          "address": "123 Main St",\n          "city": "Washington",\n          "region_name": "DC",\n          "zip": "20001",\n          "country": "United States",\n          "age": 45,\n          "gender": "Male",\n          "multilingual": false,\n          "marital_status": "Married",\n          "ethnic_group": "White",\n          "generation": "Generation X",\n          "political_party": "Independent",\n          "religion": "Christian",\n          "education": "College Graduate",\n          "occupation_detail": "Professional",\n          "income_hh": "$100,000 - $150,000",\n          "net_worth_hh": "$500,000 - $999,999",\n          "income_levels": "0",\n          "credit_range": "750-799",\n          "new_credit_offered_hh": false,\n          "amex_card": true,\n          "bank_card": true,\n          "owns_investments": true,\n          "premium_amex_card": false,\n          "premium_card": false,\n          "owns_stocks_and_bonds": true,\n          "political_contributor": false,\n          "premium_income_hh": "",\n          "income_midpts_hh": 125000,\n          "home_owner": "Home Owner",\n          "dwelling_type": "Single Family",\n          "home_heat_type": "Gas",\n          "home_price": 350000,\n          "home_purchased_years_ago": 5,\n          "home_value": 400000,\n          "mortgage_age": 5,\n          "mortgage_amount": 280000,\n          "mortgage_loan_type": "Conventional",\n          "mortgage_refi_age": 2,\n          "mortgage_refi_amount": "250000",\n          "mortgage_refi_type": "Fixed",\n          "urbanicity": "Urban",\n          "child_aged_0_3_hh": 0,\n          "child_aged_4_6_hh": 1,\n          "child_aged_7_9_hh": 1,\n          "child_aged_10_12_hh": 0,\n          "child_aged_13_18_hh": 0,\n          "veteran_hh": 0,\n          "num_persons_hh": 4,\n          "num_adults_hh": 2,\n          "num_children_hh": 2,\n          "number_of_vehicles_in_hh": 2,\n          "aerobics": 1,\n          "antiques": 0,\n          "arts_and_crafts": 0,\n          "auto_racing_affinity": 0,\n          "baseball": 1,\n          "basketball": 1,\n          "bird_watching": 0,\n          "boating_sailing": 1,\n          "camping_hiking": 1,\n          "cars_interest": 0,\n          "cat_owner": 1,\n          "charity_interest": 1,\n          "cigars": 0,\n          "coins": 0,\n          "cooking": 1,\n          "dieting": 0,\n          "diy": 1,\n          "do_it_yourself_affinity": 1,\n          "dog_affinity": 1,\n          "dog_owner": 1,\n          "fine_arts_collector": 0,\n          "fishing": 1,\n          "fitness": 1,\n          "football": 1,\n          "gambling": 0,\n          "gambling_affinity": 0,\n          "gardening": 1,\n          "golf": 0,\n          "golf_affinity": 0,\n          "gourmet_affinity": 1,\n          "healthy_living": 1,\n          "healthy_living_interest": 1,\n          "hockey": 0,\n          "home_decorating_affinity": 1,\n          "home_improvement": 1,\n          "home_study": 0,\n          "hunting": 0,\n          "knitting_quilting_sewing": 0,\n          "likely_charitable_donor": 1,\n          "luxury_life": 0,\n          "magazine_subscriber": 0,\n          "motor_racing": 0,\n          "motorcycles": 0,\n          "motorcycles_affinity": 0,\n          "movies": 1,\n          "music": 1,\n          "nascar": 0,\n          "outdoors": 1,\n          "pet_owner": 1,\n          "pets_affinity": 1,\n          "photography": 1,\n          "running": 1,\n          "rv": 0,\n          "scuba": 0,\n          "self_improvement": 1,\n          "snow_skiing": 0,\n          "soccer": 1,\n          "soho_business": 0,\n          "sports_memoribilia_collector": 0,\n          "stamps": 0,\n          "tennis": 1,\n          "travel_cruise_affinity": 0,\n          "travel_cruises": 0,\n          "travel_foreign": 1,\n          "travel_vacation": 1,\n          "truck_owner": 0,\n          "trucks_affinity": 0,\n          "walking": 1,\n          "woodworking": 0,\n          "ledger": {\n            "credits_pixel_total": 500,\n            "credits_team_balance": 10000,\n            "credits_team_today": 1,\n            "credits_pixel_today": 1\n          }\n        }\n      },\n      "message": "Success"\n    }\n  }\n}\n',
              }),
            }),
            '\n',
            (0, i.jsx)(n.h4, {
              id: 'response-object',
              children: 'Response Object',
            }),
            '\n',
            (0, i.jsx)(n.p, {
              children:
                'The response object for all API calls adheres to the following structure:',
            }),
            '\n',
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'export interface ApiResponseType {\n  code: number;\n  message: string;\n  data: sdk.JSONValue;\n}\n',
              }),
            }),
            '\n',
            (0, i.jsxs)(n.ul, {
              children: [
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: (0, i.jsx)(n.code, {children: 'code'}),
                    }),
                    ': Indicates the result of the operation.',
                    '\n',
                    (0, i.jsxs)(n.ul, {
                      children: [
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            (0, i.jsx)(n.code, {children: '200'}),
                            ': Successful operation.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            (0, i.jsx)(n.code, {children: '400'}),
                            ': Client error, such as invalid input.',
                          ],
                        }),
                        '\n',
                        (0, i.jsxs)(n.li, {
                          children: [
                            (0, i.jsx)(n.code, {children: '500'}),
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
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: (0, i.jsx)(n.code, {children: 'message'}),
                    }),
                    ": A descriptive message about the operation's outcome.",
                  ],
                }),
                '\n',
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.strong, {
                      children: (0, i.jsx)(n.code, {children: 'data'}),
                    }),
                    ': Contains the result of the operation. For errors, this will be an empty object.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For all error responses, the ',
                (0, i.jsx)(n.code, {children: 'data'}),
                ' field will be an empty object, and the ',
                (0, i.jsx)(n.code, {children: 'message'}),
                ' field will describe the issue encountered.',
              ],
            }),
            '\n',
            (0, i.jsx)(n.hr, {}),
            '\n',
            (0, i.jsx)(n.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, i.jsxs)(n.p, {
              children: [
                'For additional support, contact our development team at ',
                (0, i.jsx)(n.a, {
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
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, i.jsx)(n, {...e, children: (0, i.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => s, x: () => c});
      var i = r(3696);
      const t = {},
        d = i.createContext(t);
      function s(e) {
        const n = i.useContext(d);
        return i.useMemo(
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
              ? e.components(t)
              : e.components || t
            : s(e.components)),
          i.createElement(d.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

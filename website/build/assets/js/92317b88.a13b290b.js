/*! For license information please see 92317b88.a13b290b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5393],
  {
    2192: (e, n, i) => {
      var r = i(3696),
        t = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        l = Object.prototype.hasOwnProperty,
        o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, i) {
        var r,
          s = {},
          d = null,
          c = null;
        for (r in (void 0 !== i && (d = '' + i),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          l.call(n, r) && !a.hasOwnProperty(r) && (s[r] = n[r]);
        if (e && e.defaultProps)
          for (r in (n = e.defaultProps)) void 0 === s[r] && (s[r] = n[r]);
        return {
          $$typeof: t,
          type: e,
          key: d,
          ref: c,
          props: s,
          _owner: o.current,
        };
      }
      (n.Fragment = s), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    6321: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => d,
        });
      var r = i(2540),
        t = i(3023);
      const s = {
          id: 'intro-to-graphql',
          title: 'Introduction',
          description: 'desc',
        },
        l = 'API Options Overview',
        o = {
          id: 'intro-to-graphql',
          title: 'Introduction',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-graphql.md',
          sourceDirName: '.',
          slug: '/intro-to-graphql',
          permalink: '/docs/intro-to-graphql',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'intro-to-graphql',
            title: 'Introduction',
            description: 'desc',
          },
          sidebar: 'graphql',
          next: {
            title: 'Basic GraphQL Request',
            permalink: '/docs/graphql/basic-graphql-request',
          },
        },
        a = {},
        d = [
          {value: 'API Options', id: 'api-options', level: 2},
          {value: '1. GraphQL API', id: '1-graphql-api', level: 3},
          {value: 'Description', id: 'description', level: 4},
          {value: 'Key Features', id: 'key-features', level: 4},
          {value: 'Documentation', id: 'documentation', level: 4},
          {value: 'Example Use Cases', id: 'example-use-cases', level: 4},
          {value: 'Integration Guides', id: 'integration-guides', level: 4},
          {
            value: '2. Zapier Integration',
            id: '2-zapier-integration',
            level: 3,
          },
          {value: 'Description', id: 'description-1', level: 4},
          {value: 'Key Features', id: 'key-features-1', level: 4},
          {value: 'Documentation', id: 'documentation-1', level: 4},
          {value: 'Example Use Cases', id: 'example-use-cases-1', level: 4},
          {
            value: '3. GoHighLevel Workflows',
            id: '3-gohighlevel-workflows',
            level: 3,
          },
          {value: 'Description', id: 'description-2', level: 4},
          {value: 'Key Features', id: 'key-features-2', level: 4},
          {value: 'Documentation', id: 'documentation-2', level: 4},
          {value: 'Example Use Cases', id: 'example-use-cases-2', level: 4},
          {value: 'Contact', id: 'contact', level: 2},
        ];
      function c(e) {
        const n = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          hr: 'hr',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.h1, {
              id: 'api-options-overview',
              children: 'API Options Overview',
            }),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'This document outlines the various API options provided by our platform, including integration methods and use cases.',
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h2, {id: 'api-options', children: 'API Options'}),
            '\n',
            (0, r.jsx)(n.h3, {id: '1-graphql-api', children: '1. GraphQL API'}),
            '\n',
            (0, r.jsx)(n.h4, {id: 'description', children: 'Description'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'The GraphQL API provides a flexible and efficient way to query, mutate, and subscribe to data. It supports real-time data enrichment with responses typically returned within a few seconds.',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'key-features', children: 'Key Features'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Real-Time Enrichment'}),
                    ': Process data and receive results almost instantly.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Flexible Queries'}),
                    ': Retrieve only the data you need.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'documentation', children: 'Documentation'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: 'graphql/basic-graphql-request',
                    children: 'GraphQL API Documentation',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-use-cases',
              children: 'Example Use Cases',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Enriching leads with additional data.',
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Tracking user interactions in real-time.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'integration-guides',
              children: 'Integration Guides',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Zapier Integration'}),
                    ': Easily integrate with workflows in Zapier. ',
                    (0, r.jsx)(n.a, {
                      href: 'graphql/link-to-zapier-docs',
                      children: 'View Documentation',
                    }),
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'GoHighLevel Workflows'}),
                    ': Connect seamlessly to GoHighLevel workflows. ',
                    (0, r.jsx)(n.a, {
                      href: 'graphql/link-to-zapier-docs',
                      children: 'View Documentation',
                    }),
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h3, {
              id: '2-zapier-integration',
              children: '2. Zapier Integration',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'description-1', children: 'Description'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Zapier allows non-technical users to connect our GraphQL API with thousands of other applications, automating workflows and data processes.',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'key-features-1', children: 'Key Features'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'No Code Required'}),
                    ': Build automations without programming knowledge.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Pre-Built Templates'}),
                    ': Use pre-configured workflows for quick setup.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'documentation-1',
              children: 'Documentation',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: 'graphql/link-to-zapier-docs',
                    children: 'Zapier Integration Guide',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-use-cases-1',
              children: 'Example Use Cases',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Automating lead data enrichment.',
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children:
                    'Syncing enriched data with CRMs like HubSpot or Salesforce.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h3, {
              id: '3-gohighlevel-workflows',
              children: '3. GoHighLevel Workflows',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'description-2', children: 'Description'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'Integrate the API directly into GoHighLevel workflows for seamless automation within marketing and sales processes.',
            }),
            '\n',
            (0, r.jsx)(n.h4, {id: 'key-features-2', children: 'Key Features'}),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'CRM Integration'}),
                    ': Enrich and sync data directly within GoHighLevel.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Workflow Automation'}),
                    ': Automate repetitive tasks and data flows.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'documentation-2',
              children: 'Documentation',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: (0, r.jsx)(n.a, {
                    href: 'graphql/link-to-zapier-docs',
                    children: 'GoHighLevel Integration Guide',
                  }),
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.h4, {
              id: 'example-use-cases-2',
              children: 'Example Use Cases',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Enriching leads from GoHighLevel campaigns.',
                }),
                '\n',
                (0, r.jsx)(n.li, {
                  children: 'Triggering workflows based on enriched data.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(n.hr, {}),
            '\n',
            (0, r.jsx)(n.h2, {id: 'contact', children: 'Contact'}),
            '\n',
            (0, r.jsx)(n.p, {
              children:
                'For additional support or integration assistance, contact our team:',
            }),
            '\n',
            (0, r.jsxs)(n.ul, {
              children: [
                '\n',
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, {children: 'Email'}),
                    ': ',
                    (0, r.jsx)(n.a, {
                      href: 'mailto:support@heropixel.com',
                      children: 'support@heropixel.com',
                    }),
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: n} = {...(0, t.R)(), ...e.components};
        return n
          ? (0, r.jsx)(n, {...e, children: (0, r.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => l, x: () => o});
      var r = i(3696);
      const t = {},
        s = r.createContext(t);
      function l(e) {
        const n = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : l(e.components)),
          r.createElement(s.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
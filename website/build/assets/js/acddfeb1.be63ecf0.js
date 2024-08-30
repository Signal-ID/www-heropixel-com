/*! For license information please see acddfeb1.be63ecf0.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5683],
  {
    2192: (e, t, i) => {
      var n = i(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        c =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function a(e, t, i) {
        var n,
          s = {},
          a = null,
          d = null;
        for (n in (void 0 !== i && (a = '' + i),
        void 0 !== t.key && (a = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          r.call(t, n) && !l.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: d,
          props: s,
          _owner: c.current,
        };
      }
      (t.Fragment = s), (t.jsx = a), (t.jsxs = a);
    },
    2540: (e, t, i) => {
      e.exports = i(2192);
    },
    5424: (e, t, i) => {
      i.r(t),
        i.d(t, {
          assets: () => l,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => a,
        });
      var n = i(2540),
        o = i(3023);
      const s = {id: 'pubsub', title: 'PubSub', description: 'desc'},
        r = 'PubSub',
        c = {
          id: 'destinations/pubsub',
          title: 'PubSub',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/destinations/pubsub.md',
          sourceDirName: 'destinations',
          slug: '/destinations/pubsub',
          permalink: '/docs/destinations/pubsub',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {id: 'pubsub', title: 'PubSub', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Postgres',
            permalink: '/docs/destinations/postgres',
          },
          next: {title: 'Qdrant', permalink: '/docs/destinations/qdrant'},
        },
        l = {},
        a = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Sync overview', id: 'sync-overview', level: 3},
          {value: 'Output schema', id: 'output-schema', level: 4},
          {value: 'Features', id: 'features', level: 4},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {value: 'Requirements', id: 'requirements', level: 3},
          {value: 'Setup guide', id: 'setup-guide', level: 3},
          {value: 'Google cloud project', id: 'google-cloud-project', level: 4},
          {
            value: 'PubSub topic for HeroPixelsyncs',
            id: 'pubsub-topic-for-heropixelsyncs',
            level: 4,
          },
          {value: 'Service account', id: 'service-account', level: 4},
          {value: 'Service account key', id: 'service-account-key', level: 4},
          {
            value: 'Setup the PubSub destination in HeroPixel',
            id: 'setup-the-pubsub-destination-in-heropixel',
            level: 3,
          },
        ];
      function d(e) {
        const t = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          li: 'li',
          p: 'p',
          strong: 'strong',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {id: 'pubsub', children: 'PubSub'}),
            '\n',
            (0, n.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'The HeroPixelGoogle PubSub destination allows you to send/stream data into PubSub. Pub/Sub is an asynchronous messaging service provided by Google Cloud Provider.',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'sync-overview', children: 'Sync overview'}),
            '\n',
            (0, n.jsx)(t.h4, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'Each stream will be output a PubSubMessage with attributes. The message attributes will be',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: '_stream'}),
                    ': the name of stream where the data is coming from',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: '_namespace'}),
                    ': namespace if available from the stream',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'The data will be a serialized JSON, containing the following fields',
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: '_airbyte_ab_id'}),
                    ': a uuid string assigned by HeroPixelto each event that is processed.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: '_airbyte_emitted_at'}),
                    ': a long timestamp(ms) representing when the event was pulled from the data source.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.code, {children: '_airbyte_data'}),
                    ': a json string representing source data.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {id: 'features', children: 'Features'}),
            '\n',
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?(Yes/No)',
                      }),
                      (0, n.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Notes',
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append + Deduped',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'No',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Namespaces',
                        }),
                        (0, n.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                        (0, n.jsx)(t.td, {style: {textAlign: 'left'}}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'requirements', children: 'Requirements'}),
            '\n',
            (0, n.jsx)(t.p, {
              children: "To use the PubSub destination, you'll need:",
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsx)(t.li, {
                  children: 'A Google Cloud Project with PubSub enabled',
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'A PubSub Topic to which HeroPixelcan stream/sync your data',
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    'A Google Cloud Service Account with the ',
                    (0, n.jsx)(t.code, {children: 'Pub/Sub Editor'}),
                    ' role in your GCP project',
                  ],
                }),
                '\n',
                (0, n.jsx)(t.li, {
                  children:
                    'A Service Account Key to authenticate into your Service Account',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'See the setup guide for more information about how to create the required resources.',
            }),
            '\n',
            (0, n.jsx)(t.h3, {id: 'setup-guide', children: 'Setup guide'}),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'google-cloud-project',
              children: 'Google cloud project',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'If you have a Google Cloud Project with PubSub enabled, skip to the "Create a Topic" section.',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'First, follow along the Google Cloud instructions to ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/resource-manager/docs/creating-managing-projects#before_you_begin',
                  children: 'Create a Project',
                }),
                '. PubSub is enabled automatically in new projects. If this is not the case for your project, find it in ',
                (0, n.jsx)(t.a, {
                  href: 'https://console.cloud.google.com/marketplace/product/google/pubsub.googleapis.com',
                  children: 'Marketplace',
                }),
                ' and enable.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'pubsub-topic-for-heropixelsyncs',
              children: 'PubSub topic for HeroPixelsyncs',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'HeroPixelneeds a topic in PubSub to write the data being streamed/synced from your data sources. If you already have a Topic into which HHeroPixelhould stream/sync data, skip this section. Otherwise, follow the Google Cloud guide for ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/pubsub/docs/admin#creating_a_topic',
                  children: 'Creating a PubSub Topic',
                }),
                ' to achieve this.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'service-account',
              children: 'Service account',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'In order for HeroPixelto stream/sync data into PubSub, it needs credentials for a ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/iam/docs/service-accounts',
                  children: 'Service Account',
                }),
                ' with the ',
                (0, n.jsx)(t.code, {children: 'Pub/Sub Editor'}),
                ' role, which grants permissions to publish messages into PubSub topics. We highly recommend that this Service Account is exclusive to HHeroPixelor ease of permissioning and auditing. However, you can use a pre-existing Service Account if you already have one with the correct permissions.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                "The easiest way to create a Service Account is to follow GCP's guide for ",
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/iam/docs/creating-managing-service-accounts',
                  children: 'Creating a Service Account',
                }),
                ". Once you've created the Service Account, make sure to keep its ID handy as you will need to reference it when granting roles. Service Account IDs typically take the form ",
                (0, n.jsx)(t.code, {
                  children:
                    '<account-name>@<project-name>.iam.gserviceaccount.com',
                }),
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Then, add the service account as a Member in your Google Cloud Project with the ',
                (0, n.jsx)(t.code, {children: 'Pub/Sub Editor'}),
                ' role. To do this, follow the instructions for ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/iam/docs/granting-changing-revoking-access#granting-console',
                  children: 'Granting Access',
                }),
                ' in the Google documentation. The email address of the member you are adding is the same as the Service Account ID you just created.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'At this point you should have a service account with the ',
                (0, n.jsx)(t.code, {children: 'Pub/Sub Editor'}),
                ' project-level permission.',
              ],
            }),
            '\n',
            (0, n.jsx)(t.h4, {
              id: 'service-account-key',
              children: 'Service account key',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                "Service Account Keys are used to authenticate as Google Service Accounts. For HeroPixelto leverage the permissions you granted to the Service Account in the previous step, you'll need to provide its Service Account Keys. See the ",
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/iam/docs/service-accounts#service_account_keys',
                  children: 'Google documentation',
                }),
                ' for more information about Keys.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'Follow the ',
                (0, n.jsx)(t.a, {
                  href: 'https://cloud.google.com/iam/docs/creating-managing-service-account-keys',
                  children: 'Creating and Managing Service Account Keys',
                }),
                " guide to create a key. HeroPixelcurrently supports JSON Keys only, so make sure you create your key in that format. As soon as you created the key, make sure to download it, as that is the only time Google will allow you to see its contents. Once you've successfully configured BigQuery as a destination in HHeroPixeldelete this key from your computer.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.h3, {
              id: 'setup-the-pubsub-destination-in-heropixel',
              children: 'Setup the PubSub destination in HeroPixel',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "You should now have all the requirements needed to configure PubSub as a destination in the UI. You'll need the following information to configure the PubSub destination:",
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Project ID'}),
                    ': GCP project id',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Topic ID'}),
                    ': name of pubsub topic under the project',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Service Account Key'}),
                    ': the contents of your Service Account Key JSON file',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "Once you've configured PubSub as a destination, delete the Service Account Key from your computer.",
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, i) => {
      i.d(t, {R: () => r, x: () => c});
      var n = i(3696);
      const o = {},
        s = n.createContext(o);
      function r(e) {
        const t = n.useContext(s);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : r(e.components)),
          n.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

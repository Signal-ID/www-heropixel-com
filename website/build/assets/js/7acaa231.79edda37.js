/*! For license information please see 7acaa231.79edda37.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9366],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        o =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var r,
          s = {},
          l = null,
          d = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          a.call(t, r) && !c.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: d,
          props: s,
          _owner: o.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9539: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => s,
          metadata: () => o,
          toc: () => l,
        });
      var r = n(2540),
        i = n(3023);
      const s = {id: 'vectara', title: 'Vectara', description: 'vectara'},
        a = 'Vectara',
        o = {
          id: 'destinations/vectara',
          title: 'Vectara',
          description: 'vectara',
          source: '@site/versioned_docs/version-0.0.1/destinations/vectara.md',
          sourceDirName: 'destinations',
          slug: '/destinations/vectara',
          permalink: '/docs/destinations/vectara',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/destinations/vectara.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1719260246e3,
          frontMatter: {
            id: 'vectara',
            title: 'Vectara',
            description: 'vectara',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Typesense',
            permalink: '/docs/destinations/typesense',
          },
          next: {title: 'Weaviate', permalink: '/docs/destinations/weaviate'},
        },
        c = {},
        l = [
          {value: 'Overview', id: 'overview', level: 2},
          {value: 'Output schema', id: 'output-schema', level: 3},
          {value: 'Features', id: 'features', level: 3},
          {value: 'Getting started', id: 'getting-started', level: 2},
          {
            value: 'Setup the Vectara Destination in Hero Pixel',
            id: 'setup-the-vectara-destination-in-hero-pixel',
            level: 3,
          },
        ];
      function d(e) {
        const t = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.h1, {id: 'vectara', children: 'Vectara'}),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'This page contains the setup guide and reference information for the Vectara destination connector.',
            }),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                (0, r.jsx)(t.a, {
                  href: 'https://vectara.com/',
                  children: 'Vectara',
                }),
                ' is the trusted GenAI platform that provides Retrieval Augmented Generation or ',
                (0, r.jsx)(t.a, {
                  href: 'https://vectara.com/grounded-generation/',
                  children: 'RAG',
                }),
                ' as a service.',
              ],
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'The Vectara destination connector allows you to connect any Hero Pixel source to Vectara and ingest data into Vectara for your RAG pipeline.',
            }),
            '\n',
            (0, r.jsxs)(t.admonition, {
              type: 'info',
              children: [
                (0, r.jsx)(t.p, {
                  children:
                    'In case of issues, the following public channels are available for support:',
                }),
                (0, r.jsxs)(t.ul, {
                  children: [
                    '\n',
                    (0, r.jsxs)(t.li, {
                      children: [
                        'For Vectara related issues such as data indexing or RAG: Create a post in the ',
                        (0, r.jsx)(t.a, {
                          href: 'https://discuss.vectara.com/',
                          children: 'Vectara forum',
                        }),
                        ' or reach out on ',
                        (0, r.jsx)(t.a, {
                          href: 'https://discord.gg/GFb8gMz6UH',
                          children: "Vectara's Discord server",
                        }),
                      ],
                    }),
                    '\n',
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {id: 'overview', children: 'Overview'}),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'The Vectara destination connector supports Full Refresh Overwrite, Full Refresh Append, and Incremental Append.',
            }),
            '\n',
            (0, r.jsx)(t.h3, {id: 'output-schema', children: 'Output schema'}),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'All streams will be output into a corpus in Vectara whose name must be specified in the config.',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'Note that there are no restrictions in naming the Vectara corpus and if a corpus with the specified name is not found, a new corpus with that name will be created. Also, if multiple corpora exists with the same name, an error will be returned as Hero Pixel will be unable to determine the prefered corpus.',
            }),
            '\n',
            (0, r.jsx)(t.h3, {id: 'features', children: 'Features'}),
            '\n',
            (0, r.jsxs)(t.table, {
              children: [
                (0, r.jsx)(t.thead, {
                  children: (0, r.jsxs)(t.tr, {
                    children: [
                      (0, r.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Feature',
                      }),
                      (0, r.jsx)(t.th, {
                        style: {textAlign: 'left'},
                        children: 'Supported?',
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(t.tbody, {
                  children: [
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Full Refresh Sync',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Append Sync',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(t.tr, {
                      children: [
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Incremental - Dedupe Sync',
                        }),
                        (0, r.jsx)(t.td, {
                          style: {textAlign: 'left'},
                          children: 'Yes',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, r.jsx)(t.h2, {
              id: 'getting-started',
              children: 'Getting started',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'You will need a Vectara account to use Vectara with Hero Pixel. To get started, use the following steps:',
            }),
            '\n',
            (0, r.jsxs)(t.ol, {
              children: [
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.a, {
                      href: 'https://vectara.com/integrations/airbyte',
                      children: 'Sign up',
                    }),
                    " for a Vectara account if you don't already have one. Once you have completed your sign up you will have a Vectara customer ID. You can find your customer ID by clicking on your name, on the top-right of the Vectara console window.",
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    'Within your account you can create your corpus, which represents an area that stores text data you want to ingest into Vectara.',
                    '\n',
                    (0, r.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            'To create a corpus, use the ',
                            (0, r.jsx)(t.strong, {children: '"Create Corpus"'}),
                            ' button in the console. You then provide a name to your corpus as well as a description. If you click on your created corpus, you can see its name and corpus ID right on the top. You can see more details in this ',
                            (0, r.jsx)(t.a, {
                              href: 'https://docs.vectara.com/docs/console-ui/creating-a-corpus',
                              children: 'guide',
                            }),
                            '.',
                          ],
                        }),
                        '\n',
                        (0, r.jsx)(t.li, {
                          children:
                            'Optionally you can define filtering attributes and apply some advanced options.',
                        }),
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            'For the Vectara connector to work properly you ',
                            (0, r.jsx)(t.strong, {children: 'must'}),
                            ' define a special meta-data field called ',
                            (0, r.jsx)(t.code, {children: '_ab_stream'}),
                            ' (string typed) which the connector uses to identify source streams.',
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    'The Vectara destination connector uses ',
                    (0, r.jsx)(t.a, {
                      href: 'https://docs.vectara.com/docs/learn/authentication/oauth-2',
                      children: 'OAuth2.0 Credentials',
                    }),
                    '. You will need your ',
                    (0, r.jsx)(t.code, {children: 'Client ID'}),
                    ' and ',
                    (0, r.jsx)(t.code, {children: 'Client Secret'}),
                    ' handy for your connector setup.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(t.h3, {
              id: 'setup-the-vectara-destination-in-hero-pixel',
              children: 'Setup the Vectara Destination in Hero Pixel',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'You should now have all the requirements needed to configure Vectara as a destination in the UI.',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                "You'll need the following information to configure the Vectara destination:",
            }),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    '(Required) OAuth2.0 Credentials',
                    '\n',
                    (0, r.jsxs)(t.ul, {
                      children: [
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            '(Required) ',
                            (0, r.jsx)(t.strong, {children: 'Client ID'}),
                          ],
                        }),
                        '\n',
                        (0, r.jsxs)(t.li, {
                          children: [
                            '(Required) ',
                            (0, r.jsx)(t.strong, {children: 'Client Secret'}),
                          ],
                        }),
                        '\n',
                      ],
                    }),
                    '\n',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, r.jsx)(t.strong, {children: 'Customer ID'}),
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    '(Required) ',
                    (0, r.jsx)(t.strong, {children: 'Corpus Name'}),
                    ". You can specify a corpus name you've setup manually given the instructions above, or if you specify a corpus name that does not exist, the connector will generate a new corpus in this name and setup the required meta-data filtering fields within that corpus.",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'In addition, in the connector UI you define two set of fields for this connector:',
            }),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.code, {children: 'text_fields'}),
                    ' define the source fields which are turned into text in the Vectara side and are used for query or summarization.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.code, {children: 'title_field'}),
                    ' define the source field which will be used as a title of the document on the Vectara side',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.code, {children: 'metadata_fields'}),
                    ' define the source fields which will be added to each document as meta-data.',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => a, x: () => o});
      var r = n(3696);
      const i = {},
        s = r.createContext(i);
      function a(e) {
        const t = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function o(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : a(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
/*! For license information please see 4a79b648.545ef330.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3246],
  {
    2192: (e, i, n) => {
      var t = n(3696),
        r = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, i, n) {
        var t,
          o = {},
          c = null,
          a = null;
        for (t in (void 0 !== n && (c = '' + n),
        void 0 !== i.key && (c = '' + i.key),
        void 0 !== i.ref && (a = i.ref),
        i))
          s.call(i, t) && !d.hasOwnProperty(t) && (o[t] = i[t]);
        if (e && e.defaultProps)
          for (t in (i = e.defaultProps)) void 0 === o[t] && (o[t] = i[t]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: a,
          props: o,
          _owner: l.current,
        };
      }
      (i.Fragment = o), (i.jsx = c), (i.jsxs = c);
    },
    2540: (e, i, n) => {
      e.exports = n(2192);
    },
    8878: (e, i, n) => {
      n.r(i),
        n.d(i, {
          assets: () => d,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var t = n(2540),
        r = n(3023);
      const o = {
          id: 'religion-property',
          title: 'Religion Property',
          description: 'Guide to using the religion property',
        },
        s = 'Religion Property',
        l = {
          id: 'personalization/religion-property',
          title: 'Religion Property',
          description: 'Guide to using the religion property',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/hero-religion-property.md',
          sourceDirName: 'personalization',
          slug: '/personalization/religion-property',
          permalink: '/docs/personalization/religion-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'religion-property',
            title: 'Religion Property',
            description: 'Guide to using the religion property',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Premium Income Midpoint HH Property',
            permalink: '/docs/personalization/premium-income-midpt-hh-property',
          },
          next: {
            title: 'Urbanicity Property',
            permalink: '/docs/personalization/urbanicity-property',
          },
        },
        d = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
        const i = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
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
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.h1, {
              id: 'religion-property',
              children: 'Religion Property',
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'The ',
                (0, t.jsx)(i.code, {children: 'religion'}),
                " property allows you to tailor your content based on the visitor's religious affiliation. This guide provides an overview of how to use the ",
                (0, t.jsx)(i.code, {children: 'religion'}),
                ' property to create personalized experiences and includes a list of potential values.',
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'The ',
                (0, t.jsx)(i.code, {children: 'religion'}),
                " property can be used to display content that resonates with the visitor's religious beliefs, enhancing the relevance and effectiveness of your communication.",
              ],
            }),
            '\n',
            (0, t.jsx)(i.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, t.jsx)(i.p, {
              children: (0, t.jsx)(i.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, t.jsx)(i.pre, {
              children: (0, t.jsx)(i.code, {
                className: 'language-html',
                children:
                  '{{#if (eq religion "Buddhist")}}\n  <p>Welcome to our Buddhist community!</p>\n  <img src="/images/buddhist_community.jpg" alt="Buddhist Community">\n{{else if (eq religion "Catholic")}}\n  <p>Welcome to our Catholic community!</p>\n  <img src="/images/catholic_community.jpg" alt="Catholic Community">\n{{else if (eq religion "Jewish")}}\n  <p>Welcome to our Jewish community!</p>\n  <img src="/images/jewish_community.jpg" alt="Jewish Community">\n{{else}}\n  <p>Welcome to our community!</p>\n  <img src="/images/general_community.jpg" alt="General Community">\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, t.jsx)(i.p, {
              children:
                "In this example, personalized messages and images are displayed based on the visitor's religious affiliation, helping to build trust and rapport with your audience.",
            }),
            '\n',
            (0, t.jsx)(i.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, t.jsx)(i.code, {children: 'religion'}),
                ' property:',
              ],
            }),
            '\n',
            (0, t.jsxs)(i.table, {
              children: [
                (0, t.jsx)(i.thead, {
                  children: (0, t.jsxs)(i.tr, {
                    children: [
                      (0, t.jsx)(i.th, {children: 'Values'}),
                      (0, t.jsx)(i.th, {children: 'Value Type'}),
                      (0, t.jsx)(i.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, t.jsxs)(i.tbody, {
                  children: [
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: 'Buddhist'}),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Buddhist religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: 'Catholic'}),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Catholic religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: 'Christian'}),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Christian religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: 'Hindu'}),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Hindu religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {
                            children: 'Islamic / Muslim',
                          }),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Islamic religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: 'Jewish'}),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Jewish religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {children: 'Other'}),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Other religious affiliation',
                        }),
                      ],
                    }),
                    (0, t.jsxs)(i.tr, {
                      children: [
                        (0, t.jsx)(i.td, {
                          children: (0, t.jsx)(i.code, {
                            children: 'Protestant',
                          }),
                        }),
                        (0, t.jsx)(i.td, {children: 'string'}),
                        (0, t.jsx)(i.td, {
                          children: 'Protestant religious affiliation',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, t.jsxs)(i.p, {
              children: [
                'Using the ',
                (0, t.jsx)(i.code, {children: 'religion'}),
                " property allows you to create personalized content that resonates with the visitor's religious beliefs. By leveraging this property, you can enhance user engagement and build trust with your audience.",
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, t.jsx)(i.p, {children: 'Explore more features:'}),
            '\n',
            (0, t.jsxs)(i.ul, {
              children: [
                '\n',
                (0, t.jsx)(i.li, {
                  children: (0, t.jsx)(i.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, t.jsx)(i.li, {
                  children: (0, t.jsx)(i.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, t.jsx)(i.li, {
                  children: (0, t.jsx)(i.a, {
                    href: '/docs/personalization/hero-advanced-techniques',
                    children: 'Advanced Templating Techniques',
                  }),
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: i} = {...(0, r.R)(), ...e.components};
        return i
          ? (0, t.jsx)(i, {...e, children: (0, t.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, i, n) => {
      n.d(i, {R: () => s, x: () => l});
      var t = n(3696);
      const r = {},
        o = t.createContext(r);
      function s(e) {
        const i = t.useContext(o);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : {...i, ...e};
          },
          [i, e]
        );
      }
      function l(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          t.createElement(o.Provider, {value: i}, e.children)
        );
      }
    },
  },
]);

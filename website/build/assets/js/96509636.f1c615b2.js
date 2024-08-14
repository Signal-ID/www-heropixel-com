/*! For license information please see 96509636.f1c615b2.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6855],
  {
    2192: (e, d, s) => {
      var i = s(3696),
        c = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        n = Object.prototype.hasOwnProperty,
        l =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        h = {key: !0, ref: !0, __self: !0, __source: !0};
      function t(e, d, s) {
        var i,
          r = {},
          t = null,
          o = null;
        for (i in (void 0 !== s && (t = '' + s),
        void 0 !== d.key && (t = '' + d.key),
        void 0 !== d.ref && (o = d.ref),
        d))
          n.call(d, i) && !h.hasOwnProperty(i) && (r[i] = d[i]);
        if (e && e.defaultProps)
          for (i in (d = e.defaultProps)) void 0 === r[i] && (r[i] = d[i]);
        return {
          $$typeof: c,
          type: e,
          key: t,
          ref: o,
          props: r,
          _owner: l.current,
        };
      }
      (d.Fragment = r), (d.jsx = t), (d.jsxs = t);
    },
    2540: (e, d, s) => {
      e.exports = s(2192);
    },
    5793: (e, d, s) => {
      s.r(d),
        s.d(d, {
          assets: () => h,
          contentTitle: () => n,
          default: () => x,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => t,
        });
      var i = s(2540),
        c = s(3023);
      const r = {
          id: 'visitor-attributes',
          title: 'Visitor Attributes',
          description:
            'List of visitor attributes that can be used to personalize a page',
        },
        n = 'Visitor Attributes for Personalization',
        l = {
          id: 'personalization/visitor-attributes',
          title: 'Visitor Attributes',
          description:
            'List of visitor attributes that can be used to personalize a page',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/attributes.md',
          sourceDirName: 'personalization',
          slug: '/personalization/visitor-attributes',
          permalink: '/docs/personalization/visitor-attributes',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723599875e3,
          frontMatter: {
            id: 'visitor-attributes',
            title: 'Visitor Attributes',
            description:
              'List of visitor attributes that can be used to personalize a page',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Activate Personalization',
            permalink: '/docs/personalization/activate-personalization',
          },
          next: {
            title: 'String and Number Functions',
            permalink: '/docs/personalization/hero-string-number-functions',
          },
        },
        h = {},
        t = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Visitor Attributes', id: 'visitor-attributes', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
        ];
      function o(e) {
        const d = {
          a: 'a',
          code: 'code',
          h1: 'h1',
          h2: 'h2',
          p: 'p',
          table: 'table',
          tbody: 'tbody',
          td: 'td',
          th: 'th',
          thead: 'thead',
          tr: 'tr',
          ...(0, c.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.h1, {
              id: 'visitor-attributes-for-personalization',
              children: 'Visitor Attributes for Personalization',
            }),
            '\n',
            (0, i.jsx)(d.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, i.jsx)(d.p, {
              children:
                'Personalizing your landing pages can significantly enhance user engagement and conversion rates by tailoring content to individual visitors based on their attributes. The following table lists the various visitor attributes you can use to personalize your content, along with their value types, possible operators, and descriptions.',
            }),
            '\n',
            (0, i.jsx)(d.h2, {
              id: 'visitor-attributes',
              children: 'Visitor Attributes',
            }),
            '\n',
            (0, i.jsxs)(d.table, {
              children: [
                (0, i.jsx)(d.thead, {
                  children: (0, i.jsxs)(d.tr, {
                    children: [
                      (0, i.jsx)(d.th, {children: 'Property'}),
                      (0, i.jsx)(d.th, {children: 'Values'}),
                      (0, i.jsx)(d.th, {children: 'Value Type'}),
                      (0, i.jsx)(d.th, {children: 'Operators'}),
                      (0, i.jsx)(d.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, i.jsxs)(d.tbody, {
                  children: [
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'city'}),
                        }),
                        (0, i.jsx)(d.td, {children: '-'}),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: 'contains'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's city"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'age'}),
                        }),
                        (0, i.jsx)(d.td, {children: '-'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's age"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'birth_month_and_year',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: '1951-10-19',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's birth date"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'gender'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: 'Male'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: 'Female'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's gender"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'language'}),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/hero-language-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's preferred language",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnic_group',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/hero-ethnic-group-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's ethnic group"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'generation',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/hero-generation-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's generation"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'education'}),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/education-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's education level",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'education_ordinal',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/education-ordinal-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's education ordinal",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'blue_collar',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's blue collar score",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'birth_year',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'YYYY'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's birth year"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'generation_ordinal',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/generation-ordinal-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's generation ordinal",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnicity_detail',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/ethnicity-detail-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Detailed ethnicity of the visitor',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnicity_white',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'White ethnicity'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnicity_african_american',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'African American ethnicity',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnicity_hispanic',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Hispanic ethnicity'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnicity_asian',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Asian ethnicity'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'ethnicity_jewish',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Jewish ethnicity'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'credit_range',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/credit-range-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's credit range"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'amex_card'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns an Amex card',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'bank_card'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns a bank card',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'credit_card',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Number of credit cards owned by the visitor',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'credit_midpts',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/credit-midpts-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Credit midpoints'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_owner',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/home-owner-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is a homeowner',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'address_type',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/address-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Type of visitor's address",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'dwelling_type',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/dwelling-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Type of dwelling'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'fine_arts_collector',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor collects fine arts',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'fishing'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in fishing',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'fitness'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in fitness',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'football'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in football',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'gambling'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in gambling',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'gambling_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for gambling",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'gardening'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in gardening',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'golf'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in golf',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'golf_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for golf",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'gourmet_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for gourmet food",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'healthy_living',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor practices healthy living',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'healthy_living_interest',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's interest in healthy living",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'hockey'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in hockey',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_decorating_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for home decorating",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_heat_type',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/home-heat-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Type of heating in the visitor's home",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_improvement',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in home improvement',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_owner_ordinal',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/home-owner-ordinal-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Homeowner ordinal'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_price',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-999999'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Price of visitor's home"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_purchased_years_ago',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-56'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Years since visitor purchased home',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_study',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor has a home study',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'home_value',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-999999999'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Value of visitor's home"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'hunting'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in hunting',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'income_hh'}),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/income-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Household income'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'income_levels',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/income-levels-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Levels of income'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'income_midpts_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/income-midpts-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Midpoints of household income',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'investment_type',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Types of investments owned by the visitor',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'knitting_quilting_sewing',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in knitting, quilting, or sewing',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'length_of_residence',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-99'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Length of residence'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'likely_charitable_donor',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is likely to be a charitable donor',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'luxury_life',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor lives a luxury lifestyle',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'magazine_subscriber',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor subscribes to magazines',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'marital_status',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/marital-status-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Marital status of the visitor',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'median_home_value',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-999999'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Median value of homes in visitor's area",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'median_income',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-250000'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Median income of visitor's area",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'mortgage_age',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-34'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Age of visitor's mortgage",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'mortgage_amount',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-999999999'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Amount of visitor's mortgage",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'mortgage_loan_type',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/mortgage-loan-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Type of mortgage loan'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'mortgage_refi_age',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-24'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Age of visitor's mortgage refinance",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'mortgage_refi_amount',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-999999999'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Amount of visitor's mortgage refinance",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'mortgage_refi_type',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/mortgage-refi-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Type of mortgage refinance',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'motor_racing',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in motor racing',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'motorcycles',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor owns or is interested in motorcycles',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'motorcycles_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for motorcycles",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'movies'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in movies',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'multilingual',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is multilingual',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'music'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in music',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'nascar'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in NASCAR',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'net_worth_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/net-worth-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Household net worth'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'net_worth_midpt_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/net-worth-midpt-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Midpoint of household net worth',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'new_credit_offered_hh',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor has been offered new credit',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'num_adults_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-9'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Number of adults in the household',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'num_children_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-8'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Number of children in the household',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'num_generations_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-3'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Number of generations in the household',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'num_persons_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-9'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Number of persons in the household',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'number_of_vehicles_in_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-10'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Number of vehicles in the household',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'occupation_detail',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/occupation-detail-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's occupation details",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'outdoors'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in outdoor activities',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'owns_investments',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns investments',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'owns_stocks_and_bonds',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns stocks and bonds',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'owns_swimming_pool',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns a swimming pool',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'pet_owner'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns pets',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'pets_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for pets",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_activity',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/phone-activity-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Phone activity'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_can_receive_texts',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Whether visitor's phone can receive texts",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_carrier',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/phone-carrier-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's phone carrier"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_dialing_code',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '0-9999'}),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'The 1 to 4 digit dialing code for this phone number or null if unknown.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_do_not_call',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            "Whether visitor's phone is on the do-not-call list",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_formatted',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: '+18007132618',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'The phone number formatted in the international dialing code. N/A if not formattable.',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_is_callable',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/phone-is-callable-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Whether visitor's phone is callable",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_type',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/line-type-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Type of phone'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'phone_voip',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Whether visitor's phone is a VoIP number",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'photography',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in photography',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'political_contributor',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is a political contributor',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'political_party',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/political-party-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Political party affiliation',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'premium_amex_card',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns a premium Amex card',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'premium_card',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns a premium card',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'premium_income_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/premium-income-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Premium household income',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'premium_income_midpt_hh',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/premium-income-midpt-hh-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '<'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '>'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Midpoint of premium household income',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'region_name',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: '-'}),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Name of the State'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'religion'}),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/religion-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's religion"}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'running'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in running',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'rv'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor owns or is interested in RVs',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'scuba'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in scuba diving',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'self_improvement',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in self-improvement',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'single_family_dwelling',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Single-family dwelling ordinal',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'snow_skiing',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in snow skiing',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'soccer'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in soccer',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'soho_business',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor has a SOHO business',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'sports_memoribilia_collector',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor collects sports memorabilia',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'stamps'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in stamp collecting',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'tennis'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in tennis',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'travel_cruise_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for cruise travel",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'travel_cruises',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in cruises',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'travel_foreign',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in foreign travel',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'travel_vacation',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in vacations',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'truck_owner',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor owns a truck',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'trucks_affinity',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: "Visitor's affinity for trucks",
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'urbanicity',
                          }),
                        }),
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.a, {
                            href: '/docs/personalization/urbanicity-property',
                            children: 'see all',
                          }),
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'Degree of urbanization'}),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'veteran_hh',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Veteran status in the household',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'walking'}),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'Whether visitor is interested in walking',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'white_collar',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'number'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children: 'White-collar worker ordinal',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {
                            children: 'woodworking',
                          }),
                        }),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '0'}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '1'}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: 'boolean'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {
                          children:
                            'Whether visitor is interested in woodworking',
                        }),
                      ],
                    }),
                    (0, i.jsxs)(d.tr, {
                      children: [
                        (0, i.jsx)(d.td, {
                          children: (0, i.jsx)(d.code, {children: 'zip'}),
                        }),
                        (0, i.jsx)(d.td, {children: '99999'}),
                        (0, i.jsx)(d.td, {children: 'string'}),
                        (0, i.jsxs)(d.td, {
                          children: [
                            (0, i.jsx)(d.code, {children: '=='}),
                            ', ',
                            (0, i.jsx)(d.code, {children: '!='}),
                          ],
                        }),
                        (0, i.jsx)(d.td, {children: "Visitor's ZIP code"}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(d.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, i.jsx)(d.p, {
              children:
                'You may use these properties throughout your Dynamic Text and when application you can use the operators given when using comparison operators to make logical decisions.',
            }),
          ],
        });
      }
      function x(e = {}) {
        const {wrapper: d} = {...(0, c.R)(), ...e.components};
        return d
          ? (0, i.jsx)(d, {...e, children: (0, i.jsx)(o, {...e})})
          : o(e);
      }
    },
    3023: (e, d, s) => {
      s.d(d, {R: () => n, x: () => l});
      var i = s(3696);
      const c = {},
        r = i.createContext(c);
      function n(e) {
        const d = i.useContext(r);
        return i.useMemo(
          function () {
            return 'function' == typeof e ? e(d) : {...d, ...e};
          },
          [d, e]
        );
      }
      function l(e) {
        let d;
        return (
          (d = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(c)
              : e.components || c
            : n(e.components)),
          i.createElement(r.Provider, {value: d}, e.children)
        );
      }
    },
  },
]);

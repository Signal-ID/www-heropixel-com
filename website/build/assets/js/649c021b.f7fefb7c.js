/*! For license information please see 649c021b.f7fefb7c.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [570],
  {
    2192: (e, n, r) => {
      var s = r(3696),
        i = Symbol.for('react.element'),
        d = Symbol.for('react.fragment'),
        t = Object.prototype.hasOwnProperty,
        l =
          s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, n, r) {
        var s,
          d = {},
          h = null,
          a = null;
        for (s in (void 0 !== r && (h = '' + r),
        void 0 !== n.key && (h = '' + n.key),
        void 0 !== n.ref && (a = n.ref),
        n))
          t.call(n, s) && !c.hasOwnProperty(s) && (d[s] = n[s]);
        if (e && e.defaultProps)
          for (s in (n = e.defaultProps)) void 0 === d[s] && (d[s] = n[s]);
        return {
          $$typeof: i,
          type: e,
          key: h,
          ref: a,
          props: d,
          _owner: l.current,
        };
      }
      (n.Fragment = d), (n.jsx = h), (n.jsxs = h);
    },
    2540: (e, n, r) => {
      e.exports = r(2192);
    },
    160: (e, n, r) => {
      r.r(n),
        r.d(n, {
          assets: () => c,
          contentTitle: () => t,
          default: () => o,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => h,
        });
      var s = r(2540),
        i = r(3023);
      const d = {
          id: 'hero-language-property',
          title: 'Language Property',
          description:
            'Guide to using the language property in Hero Dynamic Text',
        },
        t = 'Language Property',
        l = {
          id: 'personalization/hero-language-property',
          title: 'Language Property',
          description:
            'Guide to using the language property in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/personalization/property-language.md',
          sourceDirName: 'personalization',
          slug: '/personalization/hero-language-property',
          permalink: '/docs/personalization/hero-language-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          frontMatter: {
            id: 'hero-language-property',
            title: 'Language Property',
            description:
              'Guide to using the language property in Hero Dynamic Text',
          },
          sidebar: 'personalization',
          previous: {
            title: 'Advanced Templating Techniques',
            permalink: '/docs/personalization/hero-advanced-techniques',
          },
          next: {
            title: 'Ethnic Group Property',
            permalink: '/docs/personalization/hero-ethnic-group-property',
          },
        },
        c = {},
        h = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Usage', id: 'usage', level: 2},
          {value: 'Example', id: 'example', level: 3},
          {value: 'Potential Values', id: 'potential-values', level: 2},
          {value: 'Conclusion', id: 'conclusion', level: 2},
          {value: 'Next Steps', id: 'next-steps', level: 2},
        ];
      function a(e) {
        const n = {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.h1, {
              id: 'language-property',
              children: 'Language Property',
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The ',
                (0, s.jsx)(n.code, {children: 'language'}),
                ' property in Hero Dynamic Text allows you to tailor your content to the preferred language of your visitors. This guide provides an overview of how to use the ',
                (0, s.jsx)(n.code, {children: 'language'}),
                ' property to create personalized experiences and includes a comprehensive list of potential language values.',
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'usage', children: 'Usage'}),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The ',
                (0, s.jsx)(n.code, {children: 'language'}),
                " property can be used to display content in the visitor's preferred language, ensuring a more engaging and relevant experience.",
              ],
            }),
            '\n',
            (0, s.jsx)(n.h3, {id: 'example', children: 'Example'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: (0, s.jsx)(n.strong, {children: 'Usage:'}),
            }),
            '\n',
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: 'language-html',
                children:
                  '{{#if (eq language "Spanish")}}\n  <p>Bienvenido a nuestro sitio web!</p>\n{{else if (eq language "French")}}\n  <p>Bienvenue sur notre site Web!</p>\n{{else}}\n  <p>Welcome to our website!</p>\n{{/if}}\n',
              }),
            }),
            '\n',
            (0, s.jsx)(n.p, {
              children:
                "In this example, the message is displayed in Spanish if the visitor's language is Spanish, in French if the language is French, and in English for all other languages.",
            }),
            '\n',
            (0, s.jsx)(n.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, s.jsx)(n.code, {children: 'language'}),
                ' property:',
              ],
            }),
            '\n',
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, {children: 'Value'}),
                      (0, s.jsx)(n.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Russian'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'English'}),
                        (0, s.jsx)(n.td, {children: 'English'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Polish'}),
                        (0, s.jsx)(n.td, {children: 'Polski'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Italian'}),
                        (0, s.jsx)(n.td, {children: 'Italiano'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Spanish'}),
                        (0, s.jsx)(n.td, {children: 'Espa\xf1ol'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Serbo-Croatian'}),
                        (0, s.jsx)(n.td, {children: 'Srpskohrvatski'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Portuguese'}),
                        (0, s.jsx)(n.td, {children: 'Portugu\xeas'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Finnish'}),
                        (0, s.jsx)(n.td, {children: 'Suomi'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'French'}),
                        (0, s.jsx)(n.td, {children: 'Fran\xe7ais'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children:
                            'Chinese (Mandarin, Cantonese and other dialects)',
                        }),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u4e2d\u6587 (\u666e\u901a\u8bdd, \u7ca4\u8bed\u53ca\u5176\u4ed6\u65b9\u8a00)',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Vietnamese'}),
                        (0, s.jsx)(n.td, {children: 'Ti\u1ebfng Vi\u1ec7t'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Japanese'}),
                        (0, s.jsx)(n.td, {children: '\u65e5\u672c\u8a9e'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Hindi'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0939\u093f\u0928\u094d\u0926\u0940',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Korean'}),
                        (0, s.jsx)(n.td, {children: '\ud55c\uad6d\uc5b4'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Farsi'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0641\u0627\u0631\u0633\u06cc',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Dzongkha'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Swedish'}),
                        (0, s.jsx)(n.td, {children: 'Svenska'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Arabic'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Hebrew'}),
                        (0, s.jsx)(n.td, {
                          children: '\u05e2\u05d1\u05e8\u05d9\u05ea',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'German'}),
                        (0, s.jsx)(n.td, {children: 'Deutsch'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Turkish'}),
                        (0, s.jsx)(n.td, {children: 'T\xfcrk\xe7e'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Urdu'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0627\u0631\u062f\u0648',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Slovenian'}),
                        (0, s.jsx)(n.td, {children: 'Sloven\u0161\u010dina'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Greek'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Romanian'}),
                        (0, s.jsx)(n.td, {children: 'Rom\xe2n\u0103'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Dutch'}),
                        (0, s.jsx)(n.td, {children: 'Nederlands'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Danish'}),
                        (0, s.jsx)(n.td, {children: 'Dansk'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Bulgarian'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Armenian'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0540\u0561\u0575\u0565\u0580\u0565\u0576',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Norwegian'}),
                        (0, s.jsx)(n.td, {children: 'Norsk'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Latvian'}),
                        (0, s.jsx)(n.td, {children: 'Latvie\u0161u'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {
                          children: 'Laotian (including Hmong)',
                        }),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0ea5\u0eb2\u0ea7 (\u0eae\u0ea1\u0ebb\u0e87)',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Sinhalese'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0dc3\u0dd2\u0d82\u0dc4\u0dbd',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Czech'}),
                        (0, s.jsx)(n.td, {children: '\u010ce\u0161tina'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Hungarian'}),
                        (0, s.jsx)(n.td, {children: 'Magyar'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Kazakh'}),
                        (0, s.jsx)(n.td, {
                          children: '\u049a\u0430\u0437\u0430\u049b',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Khmer'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Tibetan'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Thai'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Ga'}),
                        (0, s.jsx)(n.td, {children: 'Ga'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Lithuanian'}),
                        (0, s.jsx)(n.td, {children: 'Lietuvi\u0173'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Tagalog'}),
                        (0, s.jsx)(n.td, {children: 'Tagalog'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Burmese'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Indonesian'}),
                        (0, s.jsx)(n.td, {children: 'Bahasa Indonesia'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Amharic'}),
                        (0, s.jsx)(n.td, {
                          children: '\u12a0\u121b\u122d\u129b',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Albanian'}),
                        (0, s.jsx)(n.td, {children: 'Shqip'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Pashto'}),
                        (0, s.jsx)(n.td, {
                          children: '\u067e\u069a\u062a\u0648',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Slovakian'}),
                        (0, s.jsx)(n.td, {children: 'Sloven\u010dina'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Swahili'}),
                        (0, s.jsx)(n.td, {children: 'Kiswahili'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Estonian'}),
                        (0, s.jsx)(n.td, {children: 'Eesti keel'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Azeri'}),
                        (0, s.jsx)(n.td, {children: 'Az\u0259rbaycan'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Oromo'}),
                        (0, s.jsx)(n.td, {children: 'Oromoo'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Ashanti'}),
                        (0, s.jsx)(n.td, {children: 'Asante'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Uzbeki'}),
                        (0, s.jsx)(n.td, {children: 'O\u02bbzbekcha'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Somali'}),
                        (0, s.jsx)(n.td, {children: 'Soomaali'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Georgian'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Icelandic'}),
                        (0, s.jsx)(n.td, {children: '\xcdslenska'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Nepali'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0928\u0947\u092a\u093e\u0932\u0940',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Tswana'}),
                        (0, s.jsx)(n.td, {children: 'Setswana'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Macedonian'}),
                        (0, s.jsx)(n.td, {
                          children:
                            '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Basque'}),
                        (0, s.jsx)(n.td, {children: 'Euskara'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Xhosa'}),
                        (0, s.jsx)(n.td, {children: 'isiXhosa'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Zulu'}),
                        (0, s.jsx)(n.td, {children: 'isiZulu'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Mongolian'}),
                        (0, s.jsx)(n.td, {
                          children: '\u041c\u043e\u043d\u0433\u043e\u043b',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Tongan'}),
                        (0, s.jsx)(n.td, {children: 'Lea fakatonga'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Tajik'}),
                        (0, s.jsx)(n.td, {
                          children: '\u0442\u043e\u04b7\u0438\u043a\u04e3',
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Sotho'}),
                        (0, s.jsx)(n.td, {children: 'Sesotho'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Samoan'}),
                        (0, s.jsx)(n.td, {children: "Gagana fa'a Samoa"}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Bantu'}),
                        (0, s.jsx)(n.td, {children: 'Bantu languages'}),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, {children: 'Turkmeni'}),
                        (0, s.jsx)(n.td, {children: 'T\xfcrkmen\xe7e'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'conclusion', children: 'Conclusion'}),
            '\n',
            (0, s.jsxs)(n.p, {
              children: [
                'Using the ',
                (0, s.jsx)(n.code, {children: 'language'}),
                " property in Hero Dynamic Text allows you to personalize your landing pages based on the visitor's preferred language. By leveraging this property, you can deliver a more engaging and relevant user experience.",
              ],
            }),
            '\n',
            (0, s.jsx)(n.h2, {id: 'next-steps', children: 'Next Steps'}),
            '\n',
            (0, s.jsx)(n.p, {
              children: 'Explore more features of Hero Dynamic Text:',
            }),
            '\n',
            (0, s.jsxs)(n.ul, {
              children: [
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: '/docs/personalization/hero-string-number-functions',
                    children: 'String and Number Functions',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
                    href: '/docs/personalization/hero-conditional-helpers',
                    children: 'Conditional Helpers',
                  }),
                }),
                '\n',
                (0, s.jsx)(n.li, {
                  children: (0, s.jsx)(n.a, {
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
      function o(e = {}) {
        const {wrapper: n} = {...(0, i.R)(), ...e.components};
        return n
          ? (0, s.jsx)(n, {...e, children: (0, s.jsx)(a, {...e})})
          : a(e);
      }
    },
    3023: (e, n, r) => {
      r.d(n, {R: () => t, x: () => l});
      var s = r(3696);
      const i = {},
        d = s.createContext(i);
      function t(e) {
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
              ? e.components(i)
              : e.components || i
            : t(e.components)),
          s.createElement(d.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);

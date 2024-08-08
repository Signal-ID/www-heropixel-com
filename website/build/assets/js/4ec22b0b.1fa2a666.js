/*! For license information please see 4ec22b0b.1fa2a666.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3395],
  {
    2192: (e, r, n) => {
      var d = n(3696),
        s = Symbol.for('react.element'),
        t = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        l =
          d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(e, r, n) {
        var d,
          t = {},
          h = null,
          x = null;
        for (d in (void 0 !== n && (h = '' + n),
        void 0 !== r.key && (h = '' + r.key),
        void 0 !== r.ref && (x = r.ref),
        r))
          i.call(r, d) && !c.hasOwnProperty(d) && (t[d] = r[d]);
        if (e && e.defaultProps)
          for (d in (r = e.defaultProps)) void 0 === t[d] && (t[d] = r[d]);
        return {
          $$typeof: s,
          type: e,
          key: h,
          ref: x,
          props: t,
          _owner: l.current,
        };
      }
      (r.Fragment = t), (r.jsx = h), (r.jsxs = h);
    },
    2540: (e, r, n) => {
      e.exports = n(2192);
    },
    920: (e, r, n) => {
      n.r(r),
        n.d(r, {
          assets: () => c,
          contentTitle: () => i,
          default: () => j,
          frontMatter: () => t,
          metadata: () => l,
          toc: () => h,
        });
      var d = n(2540),
        s = n(3023);
      const t = {
          id: 'hero-language-property',
          title: 'Language Property',
          description:
            'Guide to using the language property in Hero Dynamic Text',
        },
        i = 'Language Property',
        l = {
          id: 'destinations/properties/hero-language-property',
          title: 'Language Property',
          description:
            'Guide to using the language property in Hero Dynamic Text',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-language.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/hero-language-property',
          permalink: '/docs/destinations/properties/hero-language-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 172315228e4,
          frontMatter: {
            id: 'hero-language-property',
            title: 'Language Property',
            description:
              'Guide to using the language property in Hero Dynamic Text',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Yellowbrick',
            permalink: '/docs/destinations/yellowbrick',
          },
          next: {
            title: 'Ethnic Group Property',
            permalink:
              '/docs/destinations/properties/hero-ethnic-group-property',
          },
        },
        c = {},
        h = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function x(e) {
        const r = {
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(r.h1, {
              id: 'language-property',
              children: 'Language Property',
            }),
            '\n',
            (0, d.jsx)(r.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, d.jsxs)(r.p, {
              children: [
                'The ',
                (0, d.jsx)(r.code, {children: 'language'}),
                ' property',
              ],
            }),
            '\n',
            (0, d.jsx)(r.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, d.jsxs)(r.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, d.jsx)(r.code, {children: 'language'}),
                ' property:',
              ],
            }),
            '\n',
            (0, d.jsxs)(r.table, {
              children: [
                (0, d.jsx)(r.thead, {
                  children: (0, d.jsxs)(r.tr, {
                    children: [
                      (0, d.jsx)(r.th, {children: 'Value'}),
                      (0, d.jsx)(r.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, d.jsxs)(r.tbody, {
                  children: [
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Russian'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'English'}),
                        (0, d.jsx)(r.td, {children: 'English'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Polish'}),
                        (0, d.jsx)(r.td, {children: 'Polski'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Italian'}),
                        (0, d.jsx)(r.td, {children: 'Italiano'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Spanish'}),
                        (0, d.jsx)(r.td, {children: 'Espa\xf1ol'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Serbo-Croatian'}),
                        (0, d.jsx)(r.td, {children: 'Srpskohrvatski'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Portuguese'}),
                        (0, d.jsx)(r.td, {children: 'Portugu\xeas'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Finnish'}),
                        (0, d.jsx)(r.td, {children: 'Suomi'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'French'}),
                        (0, d.jsx)(r.td, {children: 'Fran\xe7ais'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children:
                            'Chinese (Mandarin, Cantonese and other dialects)',
                        }),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u4e2d\u6587 (\u666e\u901a\u8bdd, \u7ca4\u8bed\u53ca\u5176\u4ed6\u65b9\u8a00)',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Vietnamese'}),
                        (0, d.jsx)(r.td, {children: 'Ti\u1ebfng Vi\u1ec7t'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Japanese'}),
                        (0, d.jsx)(r.td, {children: '\u65e5\u672c\u8a9e'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Hindi'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0939\u093f\u0928\u094d\u0926\u0940',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Korean'}),
                        (0, d.jsx)(r.td, {children: '\ud55c\uad6d\uc5b4'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Farsi'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0641\u0627\u0631\u0633\u06cc',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Dzongkha'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Swedish'}),
                        (0, d.jsx)(r.td, {children: 'Svenska'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Arabic'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Hebrew'}),
                        (0, d.jsx)(r.td, {
                          children: '\u05e2\u05d1\u05e8\u05d9\u05ea',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'German'}),
                        (0, d.jsx)(r.td, {children: 'Deutsch'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Turkish'}),
                        (0, d.jsx)(r.td, {children: 'T\xfcrk\xe7e'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Urdu'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0627\u0631\u062f\u0648',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Slovenian'}),
                        (0, d.jsx)(r.td, {children: 'Sloven\u0161\u010dina'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Greek'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Romanian'}),
                        (0, d.jsx)(r.td, {children: 'Rom\xe2n\u0103'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Dutch'}),
                        (0, d.jsx)(r.td, {children: 'Nederlands'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Danish'}),
                        (0, d.jsx)(r.td, {children: 'Dansk'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Bulgarian'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Armenian'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0540\u0561\u0575\u0565\u0580\u0565\u0576',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Norwegian'}),
                        (0, d.jsx)(r.td, {children: 'Norsk'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Latvian'}),
                        (0, d.jsx)(r.td, {children: 'Latvie\u0161u'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {
                          children: 'Laotian (including Hmong)',
                        }),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0ea5\u0eb2\u0ea7 (\u0eae\u0ea1\u0ebb\u0e87)',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Sinhalese'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0dc3\u0dd2\u0d82\u0dc4\u0dbd',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Czech'}),
                        (0, d.jsx)(r.td, {children: '\u010ce\u0161tina'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Hungarian'}),
                        (0, d.jsx)(r.td, {children: 'Magyar'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Kazakh'}),
                        (0, d.jsx)(r.td, {
                          children: '\u049a\u0430\u0437\u0430\u049b',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Khmer'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Tibetan'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Thai'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Ga'}),
                        (0, d.jsx)(r.td, {children: 'Ga'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Lithuanian'}),
                        (0, d.jsx)(r.td, {children: 'Lietuvi\u0173'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Tagalog'}),
                        (0, d.jsx)(r.td, {children: 'Tagalog'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Burmese'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Indonesian'}),
                        (0, d.jsx)(r.td, {children: 'Bahasa Indonesia'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Amharic'}),
                        (0, d.jsx)(r.td, {
                          children: '\u12a0\u121b\u122d\u129b',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Albanian'}),
                        (0, d.jsx)(r.td, {children: 'Shqip'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Pashto'}),
                        (0, d.jsx)(r.td, {
                          children: '\u067e\u069a\u062a\u0648',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Slovakian'}),
                        (0, d.jsx)(r.td, {children: 'Sloven\u010dina'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Swahili'}),
                        (0, d.jsx)(r.td, {children: 'Kiswahili'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Estonian'}),
                        (0, d.jsx)(r.td, {children: 'Eesti keel'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Azeri'}),
                        (0, d.jsx)(r.td, {children: 'Az\u0259rbaycan'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Oromo'}),
                        (0, d.jsx)(r.td, {children: 'Oromoo'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Ashanti'}),
                        (0, d.jsx)(r.td, {children: 'Asante'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Uzbeki'}),
                        (0, d.jsx)(r.td, {children: 'O\u02bbzbekcha'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Somali'}),
                        (0, d.jsx)(r.td, {children: 'Soomaali'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Georgian'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Icelandic'}),
                        (0, d.jsx)(r.td, {children: '\xcdslenska'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Nepali'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0928\u0947\u092a\u093e\u0932\u0940',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Tswana'}),
                        (0, d.jsx)(r.td, {children: 'Setswana'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Macedonian'}),
                        (0, d.jsx)(r.td, {
                          children:
                            '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Basque'}),
                        (0, d.jsx)(r.td, {children: 'Euskara'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Xhosa'}),
                        (0, d.jsx)(r.td, {children: 'isiXhosa'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Zulu'}),
                        (0, d.jsx)(r.td, {children: 'isiZulu'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Mongolian'}),
                        (0, d.jsx)(r.td, {
                          children: '\u041c\u043e\u043d\u0433\u043e\u043b',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Tongan'}),
                        (0, d.jsx)(r.td, {children: 'Lea fakatonga'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Tajik'}),
                        (0, d.jsx)(r.td, {
                          children: '\u0442\u043e\u04b7\u0438\u043a\u04e3',
                        }),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Sotho'}),
                        (0, d.jsx)(r.td, {children: 'Sesotho'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Samoan'}),
                        (0, d.jsx)(r.td, {children: "Gagana fa'a Samoa"}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Bantu'}),
                        (0, d.jsx)(r.td, {children: 'Bantu languages'}),
                      ],
                    }),
                    (0, d.jsxs)(r.tr, {
                      children: [
                        (0, d.jsx)(r.td, {children: 'Turkmeni'}),
                        (0, d.jsx)(r.td, {children: 'T\xfcrkmen\xe7e'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function j(e = {}) {
        const {wrapper: r} = {...(0, s.R)(), ...e.components};
        return r
          ? (0, d.jsx)(r, {...e, children: (0, d.jsx)(x, {...e})})
          : x(e);
      }
    },
    3023: (e, r, n) => {
      n.d(r, {R: () => i, x: () => l});
      var d = n(3696);
      const s = {},
        t = d.createContext(s);
      function i(e) {
        const r = d.useContext(t);
        return d.useMemo(
          function () {
            return 'function' == typeof e ? e(r) : {...r, ...e};
          },
          [r, e]
        );
      }
      function l(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          d.createElement(t.Provider, {value: r}, e.children)
        );
      }
    },
  },
]);

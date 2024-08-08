/*! For license information please see 6f7e84d7.d66ccde9.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9804],
  {
    2192: (d, e, n) => {
      var r = n(3696),
        i = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        l =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        t = {key: !0, ref: !0, __self: !0, __source: !0};
      function h(d, e, n) {
        var r,
          s = {},
          h = null,
          x = null;
        for (r in (void 0 !== n && (h = '' + n),
        void 0 !== e.key && (h = '' + e.key),
        void 0 !== e.ref && (x = e.ref),
        e))
          c.call(e, r) && !t.hasOwnProperty(r) && (s[r] = e[r]);
        if (d && d.defaultProps)
          for (r in (e = d.defaultProps)) void 0 === s[r] && (s[r] = e[r]);
        return {
          $$typeof: i,
          type: d,
          key: h,
          ref: x,
          props: s,
          _owner: l.current,
        };
      }
      (e.Fragment = s), (e.jsx = h), (e.jsxs = h);
    },
    2540: (d, e, n) => {
      d.exports = n(2192);
    },
    5081: (d, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => t,
          contentTitle: () => c,
          default: () => j,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => h,
        });
      var r = n(2540),
        i = n(3023);
      const s = {
          id: 'ethnicity-detail-property',
          title: 'Ethnicity Detail Property',
          description: 'Guide to using the ethnicity detail property',
        },
        c = 'Ethnicity Detail Property',
        l = {
          id: 'destinations/properties/ethnicity-detail-property',
          title: 'Ethnicity Detail Property',
          description: 'Guide to using the ethnicity detail property',
          source:
            '@site/versioned_docs/version-0.0.1/destinations/properties/hero-ethnicity-detail-property.md',
          sourceDirName: 'destinations/properties',
          slug: '/destinations/properties/ethnicity-detail-property',
          permalink: '/docs/destinations/properties/ethnicity-detail-property',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723147816e3,
          frontMatter: {
            id: 'ethnicity-detail-property',
            title: 'Ethnicity Detail Property',
            description: 'Guide to using the ethnicity detail property',
          },
          sidebar: 'integrations',
          previous: {
            title: 'Generation Ordinal Property',
            permalink:
              '/docs/destinations/properties/generation-ordinal-property',
          },
          next: {
            title: 'Credit Range Property',
            permalink: '/docs/destinations/properties/credit-range-property',
          },
        },
        t = {},
        h = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {value: 'Potential Values', id: 'potential-values', level: 2},
        ];
      function x(d) {
        const e = {
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
          ...(0, i.R)(),
          ...d.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(e.h1, {
              id: 'ethnicity-detail-property',
              children: 'Ethnicity Detail Property',
            }),
            '\n',
            (0, r.jsx)(e.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, r.jsxs)(e.p, {
              children: [
                'The ',
                (0, r.jsx)(e.code, {children: 'ethnicity_detail'}),
                ' property',
              ],
            }),
            '\n',
            (0, r.jsx)(e.h2, {
              id: 'potential-values',
              children: 'Potential Values',
            }),
            '\n',
            (0, r.jsxs)(e.p, {
              children: [
                'The following table lists the potential values for the ',
                (0, r.jsx)(e.code, {children: 'ethnicity_detail'}),
                ' property:',
              ],
            }),
            '\n',
            (0, r.jsxs)(e.table, {
              children: [
                (0, r.jsx)(e.thead, {
                  children: (0, r.jsxs)(e.tr, {
                    children: [
                      (0, r.jsx)(e.th, {children: 'Value'}),
                      (0, r.jsx)(e.th, {children: 'Description'}),
                    ],
                  }),
                }),
                (0, r.jsxs)(e.tbody, {
                  children: [
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'African American 1',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'African American'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Afghani'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Afghani'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'African American',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'African American'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Albanian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Albanian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Aleut'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Aleut'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Algerian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Algerian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Amharic'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Amharic'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Angola'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Angolan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Armenian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Armenian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Ashanti'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ashanti'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Asian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Asian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Austrian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Austrian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Azerbejani',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Azerbaijani'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Bangladesh',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bangladeshi'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Bantu'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bantu'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Basque'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Basque'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Basotho'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Basotho'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Belgium'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Belgian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Benin'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Beninese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Bhutanese'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bhutanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Black African',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Black African'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Bosnian Muslim',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bosnian Muslim'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Botswana'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Botswanan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Bulgarian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bulgarian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Burkina Faso',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Burkinabe'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Burundi'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Burundian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Byelorus'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Belarusian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Cameroon'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Cameroonian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Caribbean African American',
                          }),
                        }),
                        (0, r.jsx)(e.td, {
                          children: 'Caribbean African American',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Central African Republic',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Central African'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Chechnian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Chechen'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Chad'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Chadian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Chinese'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Chinese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Congo'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Congolese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Cook Islands',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Cook Islander'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Croatian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Croatian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Cuba'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Cuban'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Czech'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Czech'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Danish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Danish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Djibouti'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Djiboutian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Dutch'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Dutch'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Dzongha'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bhutanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Egyptian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Egyptian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'English'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'English'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Equatorial Guinea',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Equatoguinean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Estonian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Estonian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Ethiopian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ethiopian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Filipino'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Filipino'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Finn'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Finnish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'French'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'French'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Ga'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ga'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Gabon'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Gabonese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Gambian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Gambian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Georgian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Georgian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'German'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'German'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Ghana'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ghanaian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Greek'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Greek'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Guinea'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Guinean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Guinea-Bissau',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Bissau-Guinean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Guyana'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Guyanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Hausa'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Hausa'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Hawaii'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Hawaiian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Hebrew'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Hebrew'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Hindi Specific Indian',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Hindi'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Hispanic'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Hispanic'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Hungarian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Hungarian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Icelandic'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Icelandic'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Indian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Indian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Indonesian',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Indonesian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Iranian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Iranian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Iraqi'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Iraqi'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Irish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Irish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Israeli'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Israeli'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Italian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Italian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Ivory Coast',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ivorian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Japanese'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Japanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Jewish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Jewish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Jewish - Hebrew Language Names',
                          }),
                        }),
                        (0, r.jsx)(e.td, {
                          children: 'Jewish - Hebrew Language Names',
                        }),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Jordan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Jordanian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Kampuchea'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Cambodian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Kazakh'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Kazakhstani'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Kenyan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Kenyan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Khazakstani',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Kazakhstani'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Khmer'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Cambodian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Kirghizstan',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Kyrgyz'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Korean'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Korean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Kurdish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Kurdish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Kuwaiti'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Kuwaiti'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Laotian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Laotian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Latvian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Latvian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Lebanese'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Lebanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Liberian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Liberian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Liechtenstein',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Liechtensteiner'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Lithuanian',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Lithuanian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Luxembourg',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Luxembourger'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Macedonian',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Macedonian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Malay'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Malay'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Malawi'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Malawian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Maldives'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Maldivian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Mali'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Malian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Malta'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Maltese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Manx - Isle of Man',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Manx'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Mauritania',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Mauritanian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Mexican'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Mexican'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Misc. South African',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'South African'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Misc. South East Asian',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'South East Asian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Moldavian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Moldovan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Mongolian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Mongolian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Moroccan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Moroccan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Mozambique',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Mozambican'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Multi Ethnic',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Multi Ethnic'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Myanamar'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Burmese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Namibian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Namibian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Nauru'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Nauruan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Nepal'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Nepalese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Niger'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Nigerien'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Nigerian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Nigerian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Norwegian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Norwegian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Other Asian',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Asian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Overt European Jewish Names',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'European Jewish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Pakistani'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Pakistani'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Pakistan (Baluchistan)',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Baloch'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Palau'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Palauan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Palestine'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Palestinian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Papau New Guinea',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Papua New Guinean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Paraguay'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Paraguayan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Persian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Persian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Peru'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Peruvian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Philippine',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Filipino'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Polish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Polish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Polynesia'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Polynesian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Portuguese',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Portuguese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Puerto Rico',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Puerto Rican'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Qatar'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Qatari'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Romanian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Romanian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Rwandan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Rwandan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Saudi'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Saudi Arabian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Scottish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Scottish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Senegalese',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Senegalese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Serbian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Serbian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Seychelles',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Seychellois'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Sierra Leone',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Sierra Leonean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Singaporean',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Singaporean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Sinhalese'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Sinhalese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Slovak'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Slovakian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Slovenian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Slovenian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Somalian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Somali'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'South African',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'South African'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Spanish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Spanish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Sri Lankan',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Sri Lankan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Sudanese'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Sudanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Surinam'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Surinamese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Swaziland'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Swazi'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Swedish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Swedish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Swiss'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Swiss'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Syrian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Syrian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Tagalog'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Filipino'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Taiwan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Taiwanese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Tajik'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Tajik'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Tanzania'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Tanzanian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Telugu'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Telugu'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Thai'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Thai'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Tibetan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Tibetan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Togo'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Togolese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Tonga'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Tongan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Turkish'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Turkish'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Turkmeni'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Turkmen'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Ugandan'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ugandan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Ukrainian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ukrainian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Uniquely African',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'African'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Urdu'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Urdu'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Uzbek'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Uzbek'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Vanuatu'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Ni-Vanuatu'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Vietnamese',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Vietnamese'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Welsh'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Welsh'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {
                            children: 'Western Somoa',
                          }),
                        }),
                        (0, r.jsx)(e.td, {children: 'Samoan'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Xhosa'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Xhosa'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Yemeni'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Yemeni'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Zaire'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Congolese (Zaire)'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Zambian'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Zambian'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Zimbabwe'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Zimbabwean'}),
                      ],
                    }),
                    (0, r.jsxs)(e.tr, {
                      children: [
                        (0, r.jsx)(e.td, {
                          children: (0, r.jsx)(e.code, {children: 'Zulu'}),
                        }),
                        (0, r.jsx)(e.td, {children: 'Zulu'}),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function j(d = {}) {
        const {wrapper: e} = {...(0, i.R)(), ...d.components};
        return e
          ? (0, r.jsx)(e, {...d, children: (0, r.jsx)(x, {...d})})
          : x(d);
      }
    },
    3023: (d, e, n) => {
      n.d(e, {R: () => c, x: () => l});
      var r = n(3696);
      const i = {},
        s = r.createContext(i);
      function c(d) {
        const e = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof d ? d(e) : {...e, ...d};
          },
          [e, d]
        );
      }
      function l(d) {
        let e;
        return (
          (e = d.disableParentContext
            ? 'function' == typeof d.components
              ? d.components(i)
              : d.components || i
            : c(d.components)),
          r.createElement(s.Provider, {value: e}, d.children)
        );
      }
    },
  },
]);

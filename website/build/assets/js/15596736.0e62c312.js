/*! For license information please see 15596736.0e62c312.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8777],
  {
    2192: (e, i, n) => {
      var t = n(3696),
        s = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        a =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, i, n) {
        var t,
          r = {},
          d = null,
          c = null;
        for (t in (void 0 !== n && (d = '' + n),
        void 0 !== i.key && (d = '' + i.key),
        void 0 !== i.ref && (c = i.ref),
        i))
          o.call(i, t) && !l.hasOwnProperty(t) && (r[t] = i[t]);
        if (e && e.defaultProps)
          for (t in (i = e.defaultProps)) void 0 === r[t] && (r[t] = i[t]);
        return {
          $$typeof: s,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: a.current,
        };
      }
      (i.Fragment = r), (i.jsx = d), (i.jsxs = d);
    },
    2540: (e, i, n) => {
      e.exports = n(2192);
    },
    671: (e, i, n) => {
      n.r(i),
        n.d(i, {
          assets: () => l,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => d,
        });
      var t = n(2540),
        s = n(3023);
      const r = {
          id: 'overview',
          title: 'Enrichment Overview',
          description: 'desc',
        },
        o = 'Enrichment Overview',
        a = {
          id: 'leadcapture/overview',
          title: 'Enrichment Overview',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/leadcapture/overview.md',
          sourceDirName: 'leadcapture',
          slug: '/leadcapture/overview',
          permalink: '/docs/leadcapture/overview',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1727314913e3,
          frontMatter: {
            id: 'overview',
            title: 'Enrichment Overview',
            description: 'desc',
          },
          sidebar: 'leadcapture',
          next: {
            title: 'Intelligent Optin Forms',
            permalink: '/docs/leadcapture/optin-forms',
          },
        },
        l = {},
        d = [
          {
            value: 'Personalized Optins For Maximum Conversion Rates',
            id: 'personalized-optins-for-maximum-conversion-rates',
            level: 2,
          },
          {value: 'Key Challenges', id: 'key-challenges', level: 3},
          {
            value: 'Benefits of Intelligent Optin Forms',
            id: 'benefits-of-intelligent-optin-forms',
            level: 3,
          },
          {value: 'How It Works', id: 'how-it-works', level: 2},
          {
            value: 'The benefits and use cases of enriched data',
            id: 'the-benefits-and-use-cases-of-enriched-data',
            level: 2,
          },
          {value: 'Benefits:', id: 'benefits', level: 3},
          {value: 'Use Cases:', id: 'use-cases', level: 3},
        ];
      function c(e) {
        const i = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          li: 'li',
          ol: 'ol',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.h1, {
              id: 'enrichment-overview',
              children: 'Enrichment Overview',
            }),
            '\n',
            (0, t.jsx)(i.h2, {
              id: 'personalized-optins-for-maximum-conversion-rates',
              children: 'Personalized Optins For Maximum Conversion Rates',
            }),
            '\n',
            (0, t.jsx)(i.p, {
              children:
                "Facebook has conditioned users to see their information prefilled in optin forms. We're riding this wave to maximize the potential optins with our intelligent optin forms. In this way you can receive the maximum amount of accurate information along with increased user intent towards your products.",
            }),
            '\n',
            (0, t.jsx)(i.h3, {
              id: 'key-challenges',
              children: 'Key Challenges',
            }),
            '\n',
            (0, t.jsxs)(i.ul, {
              children: [
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Incomplete Lead Data'}),
                    ': Lack of sufficient data provided through standard optin forms.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Low Lead Conversion'}),
                    ': Difficulty in converting leads due to the increased dropoff from long forms.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Lead Prioritization'}),
                    ': Inability to effectively segment and prioritize leads for the sales team.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Personalization'}),
                    ': Lack of data to create personalized marketing campaigns.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Sales Efficiency'}),
                    ': Inefficiencies in the sales funnel caused by data gaps.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(i.h3, {
              id: 'benefits-of-intelligent-optin-forms',
              children: 'Benefits of Intelligent Optin Forms',
            }),
            '\n',
            (0, t.jsxs)(i.ol, {
              children: [
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Data Completeness'}),
                    ': Ensuring that lead profiles are comprehensive with key details such as contact info, financials, demographics, and firmographics.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {
                      children: 'Lead Scoring and Qualification',
                    }),
                    ': Enhancing the ability to score and qualify leads with more accurate financial data.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Targeted Campaigns'}),
                    ': Enabling more targeted and personalized ads and outreach through comprehensive digital profiles.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {
                      children: 'Increased Conversion Rates',
                    }),
                    ': Boosting sales conversion by providing sales teams with actionable insights on leads.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(i.h2, {id: 'how-it-works', children: 'How It Works'}),
            '\n',
            (0, t.jsx)(i.p, {
              children:
                "By identifying the visitors prior to them filling out an optin form we're able to ease the optin process by minimizing the amount of questions necessary to determine a qualified lead. More leads are likely to optin when their information is prefilled (masked) and the forms are personalized to offers that fit their financial capabilities.",
            }),
            '\n',
            (0, t.jsx)(i.p, {
              children:
                'Our system will identify the visitor on initial page and customize the optin form.',
            }),
            '\n',
            (0, t.jsx)(i.p, {
              children:
                "Visitors are more likely to provide you with a tcpa compliant optin, overriding their registration on the Do Not Call list. Combined with our lead segmentation capabilities you're able to prirotize the sales qualified leads while providing the unqualified leads with an opportunity to liquidate your adspend.",
            }),
            '\n',
            (0, t.jsx)(i.h2, {
              id: 'the-benefits-and-use-cases-of-enriched-data',
              children: 'The benefits and use cases of enriched data',
            }),
            '\n',
            (0, t.jsx)(i.h3, {id: 'benefits', children: 'Benefits:'}),
            '\n',
            (0, t.jsxs)(i.ul, {
              children: [
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Better Lead Scoring'}),
                    ': Improve lead qualification processes by having more detailed information.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {
                      children: 'Enhanced Personalization',
                    }),
                    ': Tailor marketing and sales outreach based on enriched data.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {
                      children: 'Improved Sales Efficiency',
                    }),
                    ': Streamline the sales process by providing sales teams with all the necessary information upfront.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Higher Conversion Rates'}),
                    ': Increase the likelihood of converting leads into customers through better-informed strategies.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(i.h3, {id: 'use-cases', children: 'Use Cases:'}),
            '\n',
            (0, t.jsxs)(i.ul, {
              children: [
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Sales Enablement'}),
                    ': Equipping sales teams with enriched lead data to close deals faster.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {
                      children: 'Marketing Personalization',
                    }),
                    ': Creating more targeted and relevant marketing campaigns.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(i.li, {
                  children: [
                    (0, t.jsx)(i.strong, {children: 'Lead Prioritization'}),
                    ': Allowing teams to focus on high-value leads with enriched insights.',
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: i} = {...(0, s.R)(), ...e.components};
        return i
          ? (0, t.jsx)(i, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, i, n) => {
      n.d(i, {R: () => o, x: () => a});
      var t = n(3696);
      const s = {},
        r = t.createContext(s);
      function o(e) {
        const i = t.useContext(r);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(i) : {...i, ...e};
          },
          [i, e]
        );
      }
      function a(e) {
        let i;
        return (
          (i = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : o(e.components)),
          t.createElement(r.Provider, {value: i}, e.children)
        );
      }
    },
  },
]);
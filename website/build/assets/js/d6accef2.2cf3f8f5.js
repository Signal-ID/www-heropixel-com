/*! For license information please see d6accef2.2cf3f8f5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7673],
  {
    2192: (e, n, i) => {
      var t = i(3696),
        a = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        s =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, i) {
        var t,
          r = {},
          c = null,
          d = null;
        for (t in (void 0 !== i && (c = '' + i),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          o.call(n, t) && !l.hasOwnProperty(t) && (r[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === r[t] && (r[t] = n[t]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: s.current,
        };
      }
      (n.Fragment = r), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, i) => {
      e.exports = i(2192);
    },
    4312: (e, n, i) => {
      i.r(n),
        i.d(n, {
          assets: () => l,
          contentTitle: () => o,
          default: () => g,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => c,
        });
      var t = i(2540),
        a = i(3023);
      const r = {
          id: 'personalized-landing-pages',
          title: 'Personalize Your Landing Pages',
          description: 'Introduction to Personalizing Your Landing Pages',
        },
        o = 'Personalizing Your Landing Pages',
        s = {
          id: 'personalization/personalized-landing-pages',
          title: 'Personalize Your Landing Pages',
          description: 'Introduction to Personalizing Your Landing Pages',
          source: '@site/versioned_docs/version-0.0.1/personalization/intro.md',
          sourceDirName: 'personalization',
          slug: '/personalization/personalized-landing-pages',
          permalink: '/docs/personalization/personalized-landing-pages',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'personalized-landing-pages',
            title: 'Personalize Your Landing Pages',
            description: 'Introduction to Personalizing Your Landing Pages',
          },
          sidebar: 'personalization',
          next: {
            title: 'Activate Personalization',
            permalink: '/docs/personalization/activate-personalization',
          },
        },
        l = {},
        c = [
          {value: 'Introduction', id: 'introduction', level: 2},
          {
            value: 'Benefits of Personalization',
            id: 'benefits-of-personalization',
            level: 2,
          },
          {value: 'Ways to Personalize', id: 'ways-to-personalize', level: 2},
          {
            value: 'Gender-Specific Language',
            id: 'gender-specific-language',
            level: 3,
          },
          {
            value: 'Ethnicity and Cultural Relevance',
            id: 'ethnicity-and-cultural-relevance',
            level: 3,
          },
          {
            value: 'Family Status and Life Stage',
            id: 'family-status-and-life-stage',
            level: 3,
          },
          {value: 'Income and Job', id: 'income-and-job', level: 3},
          {value: 'Behavioral Targeting', id: 'behavioral-targeting', level: 3},
          {
            value: 'Demographic Targeting',
            id: 'demographic-targeting',
            level: 3,
          },
          {
            value: 'Interest-Based Personalization',
            id: 'interest-based-personalization',
            level: 3,
          },
          {
            value: 'Personalizing Social Proof - Testimonials',
            id: 'personalizing-social-proof---testimonials',
            level: 3,
          },
          {value: 'Objection Handling', id: 'objection-handling', level: 3},
        ];
      function d(e) {
        const n = {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          hr: 'hr',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.h1, {
              id: 'personalizing-your-landing-pages',
              children: 'Personalizing Your Landing Pages',
            }),
            '\n',
            (0, t.jsx)(n.h2, {id: 'introduction', children: 'Introduction'}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'You can now personalize your landing pages at the time of engagement based upon 300+ consumer attributes, so that you can tailor the experience and generate more conversions.',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Our No-Code Personalization system is lightweight, yet incredibly flexible to work with most landing page builders and CMS systems. All you need to do is enable personalization and you can begin writing Dynamic Text into your sales copy.',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Just remember, if you reveal too much information about your visitor the "coincidence" factor goes away and they\'ll get creeped out and possibly scared off. Use the information provided to tailor their experience without divulging what you know about them.',
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'benefits-of-personalization',
              children: 'Benefits of Personalization',
            }),
            '\n',
            (0, t.jsxs)(n.ul, {
              children: [
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: 'The Ultimate Rapport Builder',
                    }),
                    ': Make your landing pages feel "like" your visitors, by using images and words relevant to them.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Increased Engagement'}),
                    ': Personalized content resonates more with visitors, leading to higher engagement rates.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {children: 'Higher Conversion Rates'}),
                    ': Tailored messages and offers are more likely to convert visitors into customers.',
                  ],
                }),
                '\n',
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.strong, {
                      children: 'Enhanced User Experience',
                    }),
                    ': Personalized experiences make visitors feel valued and understood, fostering loyalty.',
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'ways-to-personalize',
              children: 'Ways to Personalize',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'gender-specific-language',
              children: 'Gender-Specific Language',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Share stories about women to women, even tailoring your displayed testimonials and photos to your visitors gender. Using language that aligns with the user's gender can make your content more relatable and effective. For instance, addressing visitors with gender-specific pronouns and references can create a more personal connection.",
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'ethnicity-and-cultural-relevance',
              children: 'Ethnicity and Cultural Relevance',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Incorporating cultural elements and ethnicity-specific references in your content can significantly improve relatability and engagement. This might include using culturally relevant images, language, or examples that resonate with specific ethnic groups.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'family-status-and-life-stage',
              children: 'Family Status and Life Stage',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Understanding and addressing the user's family status and life stage can tailor your content to their current needs and desires. For example, displaying family-oriented desireable experiences to parents or career-focused content to young professionals can make them feel as if THEY can get results with your products and services.",
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'income-and-job',
              children: 'Income and Job',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Personalizing content based on the user's income level and job role can help in presenting offers and messages that match their financial situation and professional interests. This might include highlighting premium products for higher income brackets or budget-friendly options for others.",
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'behavioral-targeting',
              children: 'Behavioral Targeting',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Personalizing based on user behavior, such as purchase history, affinities and interests, allows you to present highly relevant content and offers. Behavioral targeting ensures that visitors see content that matches their interests and actions, increasing the likelihood of conversion.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'demographic-targeting',
              children: 'Demographic Targeting',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Using demographic information like age, gender, and location helps in tailoring your content to the specific needs and preferences of different user groups. This approach ensures that your messages are relevant and engaging for each demographic segment.',
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'interest-based-personalization',
              children: 'Interest-Based Personalization',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Understanding the user's interests and hobbies enables you to present content that aligns with their passions. This could involve recommending products, articles, or services related to their known interests, thereby increasing engagement.",
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'personalizing-social-proof---testimonials',
              children: 'Personalizing Social Proof - Testimonials',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Showcasing testimonials from visitors who share similar characteristics or demographics as your target audience can really make your visitors feel like they can get the results they're after. Personalized social proof helps potential customers see the relevance and effectiveness of your product or service.",
            }),
            '\n',
            (0, t.jsx)(n.h3, {
              id: 'objection-handling',
              children: 'Objection Handling',
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                "Anticipating and addressing common objections through personalized content can help in overcoming barriers to conversion. By understanding the user's concerns and providing tailored solutions, you can move them closer to making a purchase decision.",
            }),
            '\n',
            (0, t.jsx)(n.hr, {}),
            '\n',
            (0, t.jsx)(n.p, {
              children:
                'Personalizing your landing pages is a powerful strategy to enhance user engagement, improve conversion rates, and deliver a superior user experience. By leveraging various personalization techniques, you can create more relevant and compelling content that resonates with your audience.',
            }),
          ],
        });
      }
      function g(e = {}) {
        const {wrapper: n} = {...(0, a.R)(), ...e.components};
        return n
          ? (0, t.jsx)(n, {...e, children: (0, t.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, n, i) => {
      i.d(n, {R: () => o, x: () => s});
      var t = i(3696);
      const a = {},
        r = t.createContext(a);
      function o(e) {
        const n = t.useContext(r);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(a)
              : e.components || a
            : o(e.components)),
          t.createElement(r.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
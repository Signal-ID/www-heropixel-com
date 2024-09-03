/*! For license information please see dfbd2c11.b8bd5653.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7364],
  {
    2192: (e, o, i) => {
      var t = i(3696),
        r = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, o, i) {
        var t,
          n = {},
          d = null,
          c = null;
        for (t in (void 0 !== i && (d = '' + i),
        void 0 !== o.key && (d = '' + o.key),
        void 0 !== o.ref && (c = o.ref),
        o))
          s.call(o, t) && !a.hasOwnProperty(t) && (n[t] = o[t]);
        if (e && e.defaultProps)
          for (t in (o = e.defaultProps)) void 0 === n[t] && (n[t] = o[t]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: n,
          _owner: l.current,
        };
      }
      (o.Fragment = n), (o.jsx = d), (o.jsxs = d);
    },
    2540: (e, o, i) => {
      e.exports = i(2192);
    },
    422: (e, o, i) => {
      i.d(o, {A: () => t});
      const t =
        'data:image/png;base64,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';
    },
    8177: (e, o, i) => {
      i.r(o),
        i.d(o, {
          assets: () => a,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => n,
          metadata: () => l,
          toc: () => d,
        });
      var t = i(2540),
        r = i(3023);
      const n = {
          id: 'intro-to-pixel-tech',
          title: 'What is HeroPixel',
          description: 'desc',
        },
        s = void 0,
        l = {
          id: 'intro-to-pixel-tech',
          title: 'What is HeroPixel',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-pixel-tech.md',
          sourceDirName: '.',
          slug: '/intro-to-pixel-tech',
          permalink: '/docs/intro-to-pixel-tech',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 'intro-to-pixel-tech',
            title: 'What is HeroPixel',
            description: 'desc',
          },
          sidebar: 'docs',
          next: {title: 'How Does it Work?', permalink: '/docs/intro-to-leads'},
        },
        a = {},
        d = [
          {value: 'WHAT IS HEROPIXEL?', id: 'what-is-heropixel', level: 2},
          {
            value: 'WHAT PROBLEM DOES HEROPIXEL SOLVE?',
            id: 'what-problem-does-heropixel-solve',
            level: 2,
          },
          {
            value: 'HeroPixelLowers Your Acquisition Costs.',
            id: 'heropixellowers-your-acquisition-costs',
            level: 3,
          },
          {
            value: 'HeroPixelHelps You Acquire More Customers + Boost Revenue.',
            id: 'heropixelhelps-you-acquire-more-customers--boost-revenue',
            level: 3,
          },
          {value: 'WHO IS HeroPixelFOR?', id: 'who-is-heropixelfor', level: 2},
          {
            value: 'HOW IS THIS POSSIBLE (&amp; COMPLIANT)?',
            id: 'how-is-this-possible--compliant',
            level: 2,
          },
          {
            value: 'HOW CAN I START USING HeroPixel',
            id: 'how-can-i-start-using-heropixel',
            level: 2,
          },
        ];
      function c(e) {
        const o = {
          a: 'a',
          blockquote: 'blockquote',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          p: 'p',
          ul: 'ul',
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('div', {
              className: 'content-banner',
              children: [
                (0, t.jsxs)(o.p, {
                  children: [
                    "Welcome to the very start of your HeroPixeljourney! If you're looking for getting started instructions, they've moved to ",
                    (0, t.jsx)('a', {
                      href: 'start-create-a-pixel',
                      children: 'their own section',
                    }),
                    '. Continue reading for an introduction to the documentation, integrations, APIs, and more!',
                  ],
                }),
                (0, t.jsx)('img', {
                  className: 'content-banner-img',
                  src: '/docs/assets/p_android-ios-devices.svg',
                  alt: ' ',
                }),
              ],
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'what-is-heropixel',
              children: 'WHAT IS HEROPIXEL?',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixelidentifies your website visitors and gathers data in a compliant way, even if they don\u2019t fill out a form.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixelcan identify up to 40% of all U.S.-based website visitors and add those visitors\u2019 data (such as their name & email), directly into your CRM.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'This allows you to follow up and communicate with more leads, at a fraction of the cost you\u2019re currently paying.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixelalso identifies & provides you with hundreds of data points that you can use in your own unique way.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'For example: You can segment your list without surveying them, rank your leads based on most likely to buy, or even leverage AI to personalize your messaging with each lead.',
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'what-problem-does-heropixel-solve',
              children: 'WHAT PROBLEM DOES HEROPIXEL SOLVE?',
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'heropixellowers-your-acquisition-costs',
              children: 'HeroPixelLowers Your Acquisition Costs.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'If you spent $1,000 on advertising and it resulted in 500 clicks\u2026',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Let\u2019s imagine you captured 100 leads from the 500 clicks.\n(That\u2019s a 20% conversion, which means you paid $10 per lead)',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'With HeroPixelinstalled on your website, HHeroPixelan identify another 20% (100 leads) for you, at our flat rate of only $0.50 cents per lead.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'You now have double the amount of leads (200 in total) for only $50 more.',
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'heropixelhelps-you-acquire-more-customers--boost-revenue',
              children:
                'HeroPixelHelps You Acquire More Customers + Boost Revenue.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children: 'Leads are the lifeblood of any business.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Referencing the example above, if you were already profitable on the first 100 leads (that cost you $10 per lead, and $1,000 total)...',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                '\u2026 imagine the additional profit & LTV (lifetime value) you may now have with another 100 leads (that only cost you $0.50 per lead, and $50 total).',
            }),
            '\n',
            (0, t.jsxs)(o.blockquote, {
              children: [
                '\n',
                (0, t.jsx)(o.p, {
                  children:
                    'HeroPixelprovides you with more of the same high-quality leads, from the traffic that you\u2019re already paying for - directly into your CRM, so you can email them.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'who-is-heropixelfor',
              children: 'WHO IS HeroPixelFOR?',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Every business lives and dies by its ability to consistently capture leads and convert them into customers.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'If you already pay for advertising or convert any source of traffic profitably, HeroPixelis for you.',
            }),
            '\n',
            (0, t.jsx)(o.p, {children: 'If you\u2019re driving traffic to:'}),
            '\n',
            (0, t.jsxs)(o.ul, {
              children: [
                '\n',
                (0, t.jsx)(o.li, {
                  children:
                    'An optin/squeeze page (quiz funnel, survey funnel, free PDF, etc.)',
                }),
                '\n',
                (0, t.jsx)(o.li, {children: 'A live event/automated webinar'}),
                '\n',
                (0, t.jsx)(o.li, {
                  children: 'A video sales letter (VSL), or book-a-call funnel',
                }),
                '\n',
                (0, t.jsx)(o.li, {
                  children:
                    'A lead gen funnel (real estate, solar, insurance, etc.)',
                }),
                '\n',
                (0, t.jsx)(o.li, {
                  children:
                    'An eCommerce store, sales page, or ascension funnel\n\u2026 HeroPixelis for you.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'This is also a phenomenal service for marketing agencies to use across their portfolio of clients to improve ROAS (return on ad spend).',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixelcan help you identify more of your existing prospects and add their data (such as their name and email) directly into your CRM, allowing you to convert more of your prospects into customers.',
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'how-is-this-possible--compliant',
              children: 'HOW IS THIS POSSIBLE (& COMPLIANT)?',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Data collection is one of the largest industries in the world, and with the right connections, you can tap into cookie pools and large data aggregates, which will share billions of peoples\u2019 data with you.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixelleverages these partnerships to:\n#1) Identify your website visitors who have not shared any data with you\n#2) Unlike our competitors, HeroPixelverifies the integrity of the data\n#3) HeroPixels disclosures on your website make this compliant',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'We closely abide by all FTC, TCPA, FCC, CAN-SPAM, CCPA & GDPR laws.\nZwillGen PLLC is our legal counsel. Their area of expertise focuses on best data collection practices at scale. As a HeroPixeluser, we provide you with all relevant disclosures & privacy policy additions to add to your website.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Unlike many of our competitors who charge an onboarding fee or a five-figure subscription fee, with HeroPixel you only pay for the leads you capture.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixelsaves you money one lead at a time, which is why we believe you should only pay for the leads we identify and provide for you.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children: (0, t.jsx)(o.img, {
                src: i(422).A + '',
                width: '532',
                height: '123',
              }),
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'how-can-i-start-using-heropixel',
              children: 'HOW CAN I START USING HeroPixel',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'You can book a call directly with one of our founders, by ',
                (0, t.jsx)(o.a, {
                  href: 'https://calendly.com/mark-heropixel/20min',
                  children: 'clicking here',
                }),
                '.',
              ],
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'Thanks for reading!\n',
                (0, t.jsx)('br', {}),
                'Mike, Mark & Jon',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: o} = {...(0, r.R)(), ...e.components};
        return o
          ? (0, t.jsx)(o, {...e, children: (0, t.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, o, i) => {
      i.d(o, {R: () => s, x: () => l});
      var t = i(3696);
      const r = {},
        n = t.createContext(r);
      function s(e) {
        const o = t.useContext(n);
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : {...o, ...e};
          },
          [o, e]
        );
      }
      function l(e) {
        let o;
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          t.createElement(n.Provider, {value: o}, e.children)
        );
      }
    },
  },
]);

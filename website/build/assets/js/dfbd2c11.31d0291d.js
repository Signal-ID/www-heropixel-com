/*! For license information please see dfbd2c11.31d0291d.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7364],
  {
    2192: (e, o, i) => {
      var t = i(3696),
        n = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        l =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, o, i) {
        var t,
          r = {},
          c = null,
          d = null;
        for (t in (void 0 !== i && (c = '' + i),
        void 0 !== o.key && (c = '' + o.key),
        void 0 !== o.ref && (d = o.ref),
        o))
          s.call(o, t) && !a.hasOwnProperty(t) && (r[t] = o[t]);
        if (e && e.defaultProps)
          for (t in (o = e.defaultProps)) void 0 === r[t] && (r[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: l.current,
        };
      }
      (o.Fragment = r), (o.jsx = c), (o.jsxs = c);
    },
    2540: (e, o, i) => {
      e.exports = i(2192);
    },
    8177: (e, o, i) => {
      i.r(o),
        i.d(o, {
          assets: () => a,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => c,
        });
      var t = i(2540),
        n = i(3023);
      const r = {
          id: 'intro-to-pixel-tech',
          title: 'What is Hero Pixel?',
          description: 'desc',
        },
        s = void 0,
        l = {
          id: 'intro-to-pixel-tech',
          title: 'What is Hero Pixel?',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-pixel-tech.md',
          sourceDirName: '.',
          slug: '/intro-to-pixel-tech',
          permalink: '/docs/intro-to-pixel-tech',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/intro-to-pixel-tech.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-pixel-tech',
            title: 'What is Hero Pixel?',
            description: 'desc',
          },
          sidebar: 'docs',
          next: {title: 'How Does it Work?', permalink: '/docs/intro-to-leads'},
        },
        a = {},
        c = [
          {value: 'WHAT IS HERO PIXEL?', id: 'what-is-hero-pixel', level: 2},
          {
            value: 'WHAT PROBLEM DOES HERO PIXEL SOLVE?',
            id: 'what-problem-does-hero-pixel-solve',
            level: 2,
          },
          {
            value: 'HeroPixel Lowers Your Acquisition Costs.',
            id: 'heropixel-lowers-your-acquisition-costs',
            level: 3,
          },
          {
            value:
              'HeroPixel Helps You Acquire More Customers + Boost Revenue.',
            id: 'heropixel-helps-you-acquire-more-customers--boost-revenue',
            level: 3,
          },
          {
            value: 'WHO IS HEROPIXEL FOR?',
            id: 'who-is-heropixel-for',
            level: 2,
          },
          {
            value: 'HOW IS THIS POSSIBLE (&amp; COMPLIANT)?',
            id: 'how-is-this-possible--compliant',
            level: 2,
          },
          {
            value: 'HOW CAN I START USING HEROPIXEL?',
            id: 'how-can-i-start-using-heropixel',
            level: 2,
          },
        ];
      function d(e) {
        const o = {
          a: 'a',
          blockquote: 'blockquote',
          h2: 'h2',
          h3: 'h3',
          img: 'img',
          li: 'li',
          p: 'p',
          ul: 'ul',
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)('div', {
              className: 'content-banner',
              children: [
                (0, t.jsxs)(o.p, {
                  children: [
                    "Welcome to the very start of your Hero Pixel journey! If you're looking for getting started instructions, they've moved to ",
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
              id: 'what-is-hero-pixel',
              children: 'WHAT IS HERO PIXEL?',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixel identifies your website visitors and gathers data in a compliant way, even if they don\u2019t fill out a form.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixel can identify up to 40% of all U.S.-based website visitors and add those visitors\u2019 data (such as their name & email), directly into your CRM.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'This allows you to follow up and communicate with more leads, at a fraction of the cost you\u2019re currently paying.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixel also identifies & provides you with hundreds of data points that you can use in your own unique way.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'For example: You can segment your list without surveying them, rank your leads based on most likely to buy, or even leverage AI to personalize your messaging with each lead.',
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'what-problem-does-hero-pixel-solve',
              children: 'WHAT PROBLEM DOES HERO PIXEL SOLVE?',
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'heropixel-lowers-your-acquisition-costs',
              children: 'HeroPixel Lowers Your Acquisition Costs.',
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
                'With HeroPixel installed on your website, HeroPixel can identify another 20% (100 leads) for you, at our flat rate of only $0.50 cents per lead.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'You now have double the amount of leads (200 in total) for only $50 more.',
            }),
            '\n',
            (0, t.jsx)(o.h3, {
              id: 'heropixel-helps-you-acquire-more-customers--boost-revenue',
              children:
                'HeroPixel Helps You Acquire More Customers + Boost Revenue.',
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
                    'HeroPixel provides you with more of the same high-quality leads, from the traffic that you\u2019re already paying for - directly into your CRM, so you can email them.',
                }),
                '\n',
              ],
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'who-is-heropixel-for',
              children: 'WHO IS HEROPIXEL FOR?',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Every business lives and dies by its ability to consistently capture leads and convert them into customers.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'If you already pay for advertising or convert any source of traffic profitably, HeroPixel is for you.',
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
                    'An eCommerce store, sales page, or ascension funnel\n\u2026 HeroPixel is for you.',
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
                'HeroPixel can help you identify more of your existing prospects and add their data (such as their name and email) directly into your CRM, allowing you to convert more of your prospects into customers.',
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
                'HeroPixel leverages these partnerships to:\n#1) Identify your website visitors who have not shared any data with you\n#2) Unlike our competitors, HeroPixel verifies the integrity of the data\n#3) HeroPixel\u2019s disclosures on your website make this compliant',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'We closely abide by all FTC, TCPA, FCC, CAN-SPAM, CCPA & GDPR laws.\nZwillGen PLLC is our legal counsel. Their area of expertise focuses on best data collection practices at scale. As a HeroPixel user, we provide you with all relevant disclosures & privacy policy additions to add to your website.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'Unlike many of our competitors who charge an onboarding fee or a five-figure subscription fee, with HeroPixel, you only pay for the leads you capture.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children:
                'HeroPixel saves you money one lead at a time, which is why we believe you should only pay for the leads we identify and provide for you.',
            }),
            '\n',
            (0, t.jsx)(o.p, {
              children: (0, t.jsx)(o.img, {
                src: 'http://localhost:3000/img/heropixel/Hero-Pixel-Horizontal-Logo-RGB-Black-Medium.png',
                alt: '',
              }),
            }),
            '\n',
            (0, t.jsx)(o.h2, {
              id: 'how-can-i-start-using-heropixel',
              children: 'HOW CAN I START USING HEROPIXEL?',
            }),
            '\n',
            (0, t.jsxs)(o.p, {
              children: [
                'You can book a call directly with one of our founders, by ',
                (0, t.jsx)(o.a, {
                  href: 'https://calendly.com/mark-heropixel/30min',
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
        const {wrapper: o} = {...(0, n.R)(), ...e.components};
        return o
          ? (0, t.jsx)(o, {...e, children: (0, t.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, o, i) => {
      i.d(o, {R: () => s, x: () => l});
      var t = i(3696);
      const n = {},
        r = t.createContext(n);
      function s(e) {
        const o = t.useContext(r);
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
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          t.createElement(r.Provider, {value: o}, e.children)
        );
      }
    },
  },
]);

/*! For license information please see dfbd2c11.2f919efd.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7364],
  {
    2192: (e, t, o) => {
      var n = o(3696),
        i = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, o) {
        var n,
          r = {},
          l = null,
          d = null;
        for (n in (void 0 !== o && (l = '' + o),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          s.call(t, n) && !c.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: d,
          props: r,
          _owner: a.current,
        };
      }
      (t.Fragment = r), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, o) => {
      e.exports = o(2192);
    },
    8177: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => c,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => l,
        });
      var n = o(2540),
        i = o(3023);
      const r = {
          id: 'intro-to-pixel-tech',
          title: 'How The Pixel Works',
          description: 'desc',
        },
        s = 'What is a Remarketing Pixel?',
        a = {
          id: 'intro-to-pixel-tech',
          title: 'How The Pixel Works',
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
            title: 'How The Pixel Works',
            description: 'desc',
          },
          sidebar: 'docs',
          next: {
            title: 'What Can You Expect?',
            permalink: '/docs/intro-to-leads',
          },
        },
        c = {},
        l = [];
      function d(e) {
        const t = {
          h1: 'h1',
          p: 'p',
          strong: 'strong',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)('div', {
              className: 'content-banner',
              children: [
                (0, n.jsxs)(t.p, {
                  children: [
                    "Welcome to the very start of your Hero Pixel journey! If you're looking for getting started instructions, they've moved to ",
                    (0, n.jsx)('a', {
                      href: 'start-create-a-pixel',
                      children: 'their own section',
                    }),
                    '. Continue reading for an introduction to the documentation, integrations, APIs, and more!',
                  ],
                }),
                (0, n.jsx)('img', {
                  className: 'content-banner-img',
                  src: '/docs/assets/p_android-ios-devices.svg',
                  alt: ' ',
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h1, {
              id: 'what-is-a-remarketing-pixel',
              children: 'What is a Remarketing Pixel?',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "A remarketing pixel allows you to build audiences for your marketing and advertising campaigns from the visitors on your websites. It's similar to the Facebook Remarketing pixel, which enables you to display ads to those who have abandoned your purchase funnels.",
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "What makes the Hero Pixel so powerful? With Hero Pixel, you own your audience the moment they land on your websites. Since we don't have our own Ad Network, we provide you with their contact details, allowing you to reach out to your audience directly. This enables you to have personal conversations with them via email, rather than relying solely on generic ad messages.",
            }),
            '\n',
            (0, n.jsx)(t.h1, {
              id: 'how-does-it-work',
              children: 'How does it work?',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.strong, {children: '1. Install the Hero Pixel'}),
                '\nFirst, add the Hero Pixel Site Tag (aka. pixel) to your website. Our pixel will begin immediately reckognizing the identites of 30% to 40% of your visitors.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.strong, {children: '2. Build Your Audience'}),
                '\nAs visitors land on your website, the Hero Pixel collects their data even without them having to enter their details anywhere, allowing you to build a detailed audience list. This list includes contact details, which you can use to reach out to them directly.',
              ],
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.strong, {children: '3. Contact Your Audience'}),
                '\nWith the contact details provided by Hero Pixel, you can initiate personal conversations with your audience via email. This approach enables you to send tailored messages, increasing the chances of engagement and conversion.',
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, o) => {
      o.d(t, {R: () => s, x: () => a});
      var n = o(3696);
      const i = {},
        r = n.createContext(i);
      function s(e) {
        const t = n.useContext(r);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : s(e.components)),
          n.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

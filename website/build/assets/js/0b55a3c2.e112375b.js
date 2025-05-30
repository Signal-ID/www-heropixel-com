/*! For license information please see 0b55a3c2.e112375b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3828],
  {
    2192: (e, t, o) => {
      var i = o(3696),
        n = Symbol.for('react.element'),
        r = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, t, o) {
        var i,
          r = {},
          d = null,
          c = null;
        for (i in (void 0 !== o && (d = '' + o),
        void 0 !== t.key && (d = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          s.call(t, i) && !l.hasOwnProperty(i) && (r[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === r[i] && (r[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: c,
          props: r,
          _owner: a.current,
        };
      }
      (t.Fragment = r), (t.jsx = d), (t.jsxs = d);
    },
    2540: (e, t, o) => {
      e.exports = o(2192);
    },
    3809: (e, t, o) => {
      o.d(t, {A: () => i});
      const i =
        o.p +
        'assets/images/click-on-leads-761d8a50a3fc2933c0cc852bead683b6.gif';
    },
    5427: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => l,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => r,
          metadata: () => a,
          toc: () => d,
        });
      var i = o(2540),
        n = o(3023);
      const r = {
          id: 'intro-to-leads',
          title: 'How Does it Work?',
          description: 'desc',
        },
        s = void 0,
        a = {
          id: 'intro-to-leads',
          title: 'How Does it Work?',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-leads.md',
          sourceDirName: '.',
          slug: '/intro-to-leads',
          permalink: '/docs/intro-to-leads',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1724990314e3,
          frontMatter: {
            id: 'intro-to-leads',
            title: 'How Does it Work?',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'What is HeroPixel',
            permalink: '/docs/intro-to-pixel-tech',
          },
          next: {
            title: 'Reviewing Performance Metrics',
            permalink: '/docs/intro-to-dashboard',
          },
        },
        l = {},
        d = [
          {value: 'How does it work?', id: 'how-does-it-work', level: 2},
          {
            value: 'How do you access your leads?',
            id: 'how-do-you-access-your-leads',
            level: 2,
          },
          {
            value: 'Automatically sync your leads',
            id: 'automatically-sync-your-leads',
            level: 2,
          },
        ];
      function c(e) {
        const t = {
          a: 'a',
          em: 'em',
          h2: 'h2',
          img: 'img',
          p: 'p',
          strong: 'strong',
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.h2, {
              id: 'how-does-it-work',
              children: 'How does it work?',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                '*',
                (0, i.jsx)(t.em, {children: '1. Install the HeroPixel'}),
                '\nFirst, add the HeroPixelSite Tag (aka. pixel) to your website. Our pixel will begin immediately reckognizing the identites of 30% to 40% of your visitors.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                (0, i.jsx)(t.strong, {children: '2. Build Your Audience'}),
                '\nAs visitors land on your website, the HeroPixelcollects their data even without them having to enter their details anywhere, allowing you to build a detailed audience list. This list includes contact details, which you can use to reach out to them directly.',
              ],
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                (0, i.jsx)(t.strong, {children: '3. Contact Your Audience'}),
                '\nWith the contact details provided by HeroPixel you can initiate personal conversations with your audience via email. This approach enables you to send tailored messages, increasing the chances of engagement and conversion.',
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'how-do-you-access-your-leads',
              children: 'How do you access your leads?',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                (0, i.jsx)(t.img, {
                  src: o(3809).A + '',
                  width: '768',
                  height: '432',
                }),
                "\nYour dashboard's menu will have a link to the Leads which have been placed into your audience from the pixel. Here you can access all Leads for your organization to review and analyze your audience.",
              ],
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'We will only ever display your Leads more than once for a pixel. Again, there will be no duplicate leads for a given pixel. However, leads may be associated with more than one pixel. You will be charged for every pixel that identifies a unique lead to itself.',
            }),
            '\n',
            (0, i.jsxs)(t.p, {
              children: [
                'On your leads list you can search, sort and filter your leads. Once you have the desired filter in place you can request an export. Read more about that in the ',
                (0, i.jsx)(t.a, {
                  href: '/docs/start-get-your-leads',
                  children: 'getting started section',
                }),
              ],
            }),
            '\n',
            (0, i.jsx)(t.h2, {
              id: 'automatically-sync-your-leads',
              children: 'Automatically sync your leads',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                'We offer more than 100+ integrations, making it possible to create a regular sync of your Leads to many different destinations.',
            }),
            '\n',
            (0, i.jsx)(t.p, {
              children:
                "For this reason, after the initial setup of the pixel combined with an integration, you'll rarely need to access your HeroPixeldashboard.",
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, i.jsx)(t, {...e, children: (0, i.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, o) => {
      o.d(t, {R: () => s, x: () => a});
      var i = o(3696);
      const n = {},
        r = i.createContext(n);
      function s(e) {
        const t = i.useContext(r);
        return i.useMemo(
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
              ? e.components(n)
              : e.components || n
            : s(e.components)),
          i.createElement(r.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

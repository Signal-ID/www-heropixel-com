/*! For license information please see 0b55a3c2.c515f1a9.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3828],
  {
    2192: (e, t, o) => {
      var n = o(3696),
        i = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, o) {
        var n,
          a = {},
          l = null,
          d = null;
        for (n in (void 0 !== o && (l = '' + o),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          r.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: i,
          type: e,
          key: l,
          ref: d,
          props: a,
          _owner: s.current,
        };
      }
      (t.Fragment = a), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, o) => {
      e.exports = o(2192);
    },
    5251: (e, t, o) => {
      o.d(t, {A: () => n});
      const n =
        o.p +
        'assets/images/click-on-leads-761d8a50a3fc2933c0cc852bead683b6.gif';
    },
    5427: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => l,
        });
      var n = o(2540),
        i = o(3023);
      const a = {
          id: 'intro-to-leads',
          title: 'What Can You Expect?',
          description: 'desc',
        },
        r = 'What can you expect with Hero Pixel?',
        s = {
          id: 'intro-to-leads',
          title: 'What Can You Expect?',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-leads.md',
          sourceDirName: '.',
          slug: '/intro-to-leads',
          permalink: '/docs/intro-to-leads',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/intro-to-leads.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-leads',
            title: 'What Can You Expect?',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'How The Pixel Works',
            permalink: '/docs/intro-to-pixel-tech',
          },
          next: {
            title: 'Reviewing Performance Metrics',
            permalink: '/docs/intro-to-dashboard',
          },
        },
        c = {},
        l = [
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
      function d(e) {
        const t = {
          a: 'a',
          h1: 'h1',
          h2: 'h2',
          img: 'img',
          p: 'p',
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'what-can-you-expect-with-hero-pixel',
              children: 'What can you expect with Hero Pixel?',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "With our White Glove onboarding process you'll be identifying a massive new audience within the first five minutes. Our library of more than 100+ integrations provide a seamless stream of new leads pouring into your organization.",
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'We have thoroughly refined the user experience to provide you with a simple and intuitive interface, so you can quickly access the audiences and analytics you need to make informed decisions.',
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'how-do-you-access-your-leads',
              children: 'How do you access your leads?',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.img, {
                  src: o(5251).A + '',
                  width: '768',
                  height: '432',
                }),
                "\nYour dashboard's menu will have a link to the Leads which have been placed into your audience from the pixel. Here you can access all Leads for your organization to review and analyze your audience.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'We will only ever display your Leads more than once for a pixel. Again, there will be no duplicate leads for a given pixel. However, leads may be associated with more than one pixel. You will be charged for every pixel that identifies a unique lead to itself.',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                'On your leads list you can search, sort and filter your leads. Once you have the desired filter in place you can request an export. Read more about that in the ',
                (0, n.jsx)(t.a, {
                  href: '/docs/start-get-your-leads',
                  children: 'getting started section',
                }),
              ],
            }),
            '\n',
            (0, n.jsx)(t.h2, {
              id: 'automatically-sync-your-leads',
              children: 'Automatically sync your leads',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'We offer more than 100+ integrations, making it possible to create a regular sync of your Leads to many different destinations.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "For this reason, after the initial setup of the pixel combined with an integration, you'll rarely need to access your Hero Pixel dashboard.",
            }),
          ],
        });
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, i.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})})
          : d(e);
      }
    },
    3023: (e, t, o) => {
      o.d(t, {R: () => r, x: () => s});
      var n = o(3696);
      const i = {},
        a = n.createContext(i);
      function r(e) {
        const t = n.useContext(a);
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          n.createElement(a.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

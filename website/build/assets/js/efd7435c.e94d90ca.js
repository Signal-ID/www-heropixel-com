/*! For license information please see efd7435c.e94d90ca.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1466],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          s = {},
          l = null,
          c = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (c = t.ref),
        t))
          i.call(t, n) && !d.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: c,
          props: s,
          _owner: a.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    2459: (e, t, r) => {
      r.d(t, {A: () => n});
      const n =
        r.p + 'assets/images/dashboard-ss-11a77701dd63d9da67812603c2946645.png';
    },
    3868: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => d,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => l,
        });
      var n = r(2540),
        o = r(3023);
      const s = {
          id: 'intro-to-dashboard',
          title: 'Reviewing Performance Metrics',
          description: 'desc',
        },
        i = 'What to expect from your dashboard',
        a = {
          id: 'intro-to-dashboard',
          title: 'Reviewing Performance Metrics',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-dashboard.md',
          sourceDirName: '.',
          slug: '/intro-to-dashboard',
          permalink: '/docs/intro-to-dashboard',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/intro-to-dashboard.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-dashboard',
            title: 'Reviewing Performance Metrics',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'What Can You Expect?',
            permalink: '/docs/intro-to-leads',
          },
          next: {
            title: 'Start by Registering',
            permalink: '/docs/start-registration',
          },
        },
        d = {},
        l = [];
      function c(e) {
        const t = {
          h1: 'h1',
          img: 'img',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.h1, {
              id: 'what-to-expect-from-your-dashboard',
              children: 'What to expect from your dashboard',
            }),
            '\n',
            (0, n.jsxs)(t.p, {
              children: [
                (0, n.jsx)(t.img, {
                  src: r(2459).A + '',
                  width: '4548',
                  height: '3220',
                }),
                "\nThe dashboard is where you'll find the analytics and demographic data from your pixels. All pixel data will be agreggated together for an organization, unless you choose to filter it down to a specific pixel.",
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "The first thing you'll notice on your dashboard are three primary widgets to answer the most common questions we receive:",
            }),
            '\n',
            (0, n.jsxs)(t.ul, {
              children: [
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Total Leads'}),
                    ': The total number of leads that you have received of all time.',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Total % Leads'}),
                    ': The percentage of your traffic that was converted into a lead. Also known as: Match Rate',
                  ],
                }),
                '\n',
                (0, n.jsxs)(t.li, {
                  children: [
                    (0, n.jsx)(t.strong, {children: 'Total Savings'}),
                    ": And how much you've saved on your existing CPL.",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                'While this dashboard defaults to an all-time agreggation of your audiences data, you can use the provided date range and other filtering options to narrow it down and analyze specific pixels or audience segments.',
            }),
            '\n',
            (0, n.jsx)(t.p, {
              children:
                "Once you've determined an ideal report for your needs you'll be able to download a PDF version of the dashboard.",
            }),
            '\n',
            (0, n.jsxs)('div', {
              class: 'card-wrapper-2',
              children: [
                (0, n.jsxs)('div', {
                  class: 'card',
                  children: [
                    (0, n.jsxs)('div', {
                      class: 'card-content-items',
                      children: [
                        (0, n.jsx)('div', {class: 'thumbnail'}),
                        (0, n.jsxs)('div', {
                          class: 'card-content',
                          children: [
                            (0, n.jsxs)('h4', {
                              children: [
                                (0, n.jsx)('svg', {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '20',
                                  height: '20',
                                  fill: 'none',
                                  viewBox: '0 0 20 20',
                                  children: (0, n.jsx)('path', {
                                    stroke: '#4D5761',
                                    'stroke-linecap': 'round',
                                    'stroke-linejoin': 'round',
                                    'stroke-width': '1.5',
                                    d: 'm10 17.5-.083-.125c-.579-.868-.868-1.302-1.25-1.617a3.3 3.3 0 0 0-1.149-.614C7.045 15 6.523 15 5.48 15H4.334c-.934 0-1.4 0-1.757-.182a1.67 1.67 0 0 1-.728-.728c-.182-.357-.182-.823-.182-1.757V5.167c0-.934 0-1.4.182-1.757.16-.314.414-.569.728-.728C2.934 2.5 3.4 2.5 4.334 2.5h.333c1.867 0 2.8 0 3.513.363.627.32 1.137.83 1.457 1.457C10 5.033 10 5.966 10 7.833m0 9.667V7.833m0 9.667.084-.125c.579-.868.868-1.302 1.25-1.617a3.3 3.3 0 0 1 1.148-.614c.474-.144.996-.144 2.04-.144h1.145c.933 0 1.4 0 1.757-.182.313-.16.568-.414.728-.728.182-.357.182-.823.182-1.757V5.167c0-.934 0-1.4-.182-1.757a1.67 1.67 0 0 0-.728-.728C17.067 2.5 16.6 2.5 15.667 2.5h-.333c-1.867 0-2.8 0-3.514.363-.627.32-1.137.83-1.456 1.457C10 5.033 10 5.966 10 7.833',
                                  }),
                                }),
                                (0, n.jsx)(t.p, {children: 'Get Started'}),
                              ],
                            }),
                            (0, n.jsx)('p', {
                              children:
                                'Learn how to get started with Hero Pixel and deploy an Advanced Remarketing Pixel on your Website in minutes.',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)('a', {
                      href: '/docs/start-registration',
                      children: [
                        (0, n.jsx)('p', {children: 'Get a Pixel Installed'}),
                        (0, n.jsx)('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '16',
                          height: '16',
                          fill: 'none',
                          viewBox: '0 0 16 16',
                          children: (0, n.jsx)('path', {
                            stroke: '#1B2738',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            'stroke-width': '1.5',
                            d: 'm6 12 4-4-4-4',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)('div', {
                  class: 'card',
                  children: [
                    (0, n.jsxs)('div', {
                      class: 'card-content-items',
                      children: [
                        (0, n.jsx)('div', {class: 'thumbnail'}),
                        (0, n.jsxs)('div', {
                          class: 'card-content',
                          children: [
                            (0, n.jsxs)('h4', {
                              children: [
                                (0, n.jsxs)('svg', {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '20',
                                  height: '20',
                                  fill: 'none',
                                  viewBox: '0 0 20 20',
                                  children: [
                                    (0, n.jsx)('path', {
                                      fill: '#4D5761',
                                      d: 'M10 4.167a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334M16.667 8.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333M16.667 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333M10 19.167a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334M3.334 15.833a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333M3.334 8.333a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333',
                                    }),
                                    (0, n.jsx)('path', {
                                      stroke: '#4D5761',
                                      'stroke-linecap': 'round',
                                      'stroke-linejoin': 'round',
                                      d: 'm10 2.5 6.495 3.75v7.5L10 17.5l-6.495-3.75v-7.5z',
                                    }),
                                    (0, n.jsx)('path', {
                                      stroke: '#4D5761',
                                      'stroke-linecap': 'round',
                                      'stroke-linejoin': 'round',
                                      d: 'm10 2.5 6.495 11.25H3.505z',
                                    }),
                                  ],
                                }),
                                (0, n.jsx)(t.p, {
                                  children: 'Integrations Library',
                                }),
                              ],
                            }),
                            (0, n.jsx)('p', {
                              children:
                                'View our extensive integrations library to know exactly where your data is going.',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)('a', {
                      href: '/docs/integrations',
                      children: [
                        (0, n.jsx)('p', {children: 'View All'}),
                        (0, n.jsx)('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          width: '16',
                          height: '16',
                          fill: 'none',
                          viewBox: '0 0 16 16',
                          children: (0, n.jsx)('path', {
                            stroke: '#1B2738',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            'stroke-width': '1.5',
                            d: 'm6 12 4-4-4-4',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t
          ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(c, {...e})})
          : c(e);
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => i, x: () => a});
      var n = r(3696);
      const o = {},
        s = n.createContext(o);
      function i(e) {
        const t = n.useContext(s);
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
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          n.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

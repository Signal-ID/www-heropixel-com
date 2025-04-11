/*! For license information please see efd7435c.dbc6dea8.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1466],
  {
    2192: (e, t, o) => {
      var r = o(3696),
        n = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        i =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, t, o) {
        var r,
          s = {},
          c = null,
          l = null;
        for (r in (void 0 !== o && (c = '' + o),
        void 0 !== t.key && (c = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          a.call(t, r) && !d.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: s,
          _owner: i.current,
        };
      }
      (t.Fragment = s), (t.jsx = c), (t.jsxs = c);
    },
    2540: (e, t, o) => {
      e.exports = o(2192);
    },
    5841: (e, t, o) => {
      o.d(t, {A: () => r});
      const r =
        o.p + 'assets/images/dashboard-ss-11a77701dd63d9da67812603c2946645.png';
    },
    3868: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => d,
          contentTitle: () => a,
          default: () => h,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => c,
        });
      var r = o(2540),
        n = o(3023);
      const s = {
          id: 'intro-to-dashboard',
          title: 'Reviewing Performance Metrics',
          description: 'desc',
        },
        a = 'What to expect from your dashboard',
        i = {
          id: 'intro-to-dashboard',
          title: 'Reviewing Performance Metrics',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-dashboard.md',
          sourceDirName: '.',
          slug: '/intro-to-dashboard',
          permalink: '/docs/intro-to-dashboard',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1722568291e3,
          frontMatter: {
            id: 'intro-to-dashboard',
            title: 'Reviewing Performance Metrics',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'How Does it Work?',
            permalink: '/docs/intro-to-leads',
          },
          next: {
            title: 'Start by Registering',
            permalink: '/docs/start-registration',
          },
        },
        d = {},
        c = [];
      function l(e) {
        const t = {
          h1: 'h1',
          img: 'img',
          li: 'li',
          p: 'p',
          strong: 'strong',
          ul: 'ul',
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(t.h1, {
              id: 'what-to-expect-from-your-dashboard',
              children: 'What to expect from your dashboard',
            }),
            '\n',
            (0, r.jsxs)(t.p, {
              children: [
                (0, r.jsx)(t.img, {
                  src: o(5841).A + '',
                  width: '4548',
                  height: '3220',
                }),
                "\nThe dashboard is where you'll find the analytics and demographic data from your pixels. All pixel data will be agreggated together for an organization, unless you choose to filter it down to a specific pixel.",
              ],
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                "The first thing you'll notice on your dashboard are three primary widgets to answer the most common questions we receive:",
            }),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.strong, {children: 'Total Leads'}),
                    ': The total number of leads that you have received of all time.',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.strong, {children: 'Total % Leads'}),
                    ': The percentage of your traffic that was converted into a lead. Also known as: Match Rate',
                  ],
                }),
                '\n',
                (0, r.jsxs)(t.li, {
                  children: [
                    (0, r.jsx)(t.strong, {children: 'Total Savings'}),
                    ": And how much you've saved on your existing CPL.",
                  ],
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'While this dashboard defaults to an all-time agreggation of your audiences data, you can use the provided date range and other filtering options to narrow it down and analyze specific pixels or audience segments.',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                "Once you've determined an ideal report for your needs you'll be able to download a PDF version of the dashboard.",
            }),
          ],
        });
      }
      function h(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(l, {...e})})
          : l(e);
      }
    },
    3023: (e, t, o) => {
      o.d(t, {R: () => a, x: () => i});
      var r = o(3696);
      const n = {},
        s = r.createContext(n);
      function a(e) {
        const t = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function i(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(n)
              : e.components || n
            : a(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

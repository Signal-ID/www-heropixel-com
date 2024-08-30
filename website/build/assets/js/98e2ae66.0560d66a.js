/*! For license information please see 98e2ae66.0560d66a.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [3267],
  {
    2192: (e, t, s) => {
      var r = s(3696),
        n = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function p(e, t, s) {
        var r,
          o = {},
          p = null,
          u = null;
        for (r in (void 0 !== s && (p = '' + s),
        void 0 !== t.key && (p = '' + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: n,
          type: e,
          key: p,
          ref: u,
          props: o,
          _owner: a.current,
        };
      }
      (t.Fragment = o), (t.jsx = p), (t.jsxs = p);
    },
    2540: (e, t, s) => {
      e.exports = s(2192);
    },
    7273: (e, t, s) => {
      s.r(t),
        s.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => c,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => p,
        });
      var r = s(2540),
        n = s(3023);
      const o = {
          id: 'intro-to-suppressing',
          title: 'What are Supression Lists?',
          description: 'desc',
        },
        i = 'What are Suppression Lists?',
        a = {
          id: 'intro-to-suppressing',
          title: 'What are Supression Lists?',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-suppressing.md',
          sourceDirName: '.',
          slug: '/intro-to-suppressing',
          permalink: '/docs/intro-to-suppressing',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-suppressing',
            title: 'What are Supression Lists?',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {title: 'Pageview', permalink: '/docs/event-pageview'},
          next: {
            title: 'Filtering the Dashboard',
            permalink: '/docs/dashboard',
          },
        },
        l = {},
        p = [];
      function u(e) {
        const t = {
          blockquote: 'blockquote',
          h1: 'h1',
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
              id: 'what-are-suppression-lists',
              children: 'What are Suppression Lists?',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'You already have customers that you know of. You may not want to be charged by HeroPixelfor resolving these customers.',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children:
                'A suppression list gives you the ability to block us from resolving, and thus charging you for, customers you already know. Keep in mind that you must add these identites to your suppression list before we determine who they are.',
            }),
            '\n',
            (0, r.jsx)(t.p, {
              children: (0, r.jsx)(t.strong, {
                children:
                  'What if they optin to one of your forms, can you add them to the suppression list then?',
              }),
            }),
            '\n',
            (0, r.jsxs)(t.ul, {
              children: [
                '\n',
                (0, r.jsx)(t.li, {
                  children:
                    "Yes, but most likely we will have already resolved their identity when they first hit the page. So by the time they optin you'll have already been charged for them.",
                }),
                '\n',
              ],
            }),
            '\n',
            (0, r.jsxs)(t.blockquote, {
              children: [
                '\n',
                (0, r.jsxs)(t.p, {
                  children: [
                    (0, r.jsx)('h3', {
                      children:
                        'Suppression Lists have not yet been released...',
                    }),
                    ' Our suppression list system is still in alpha development. We expect to be releasing it in Q3 of 2024.',
                    (0, r.jsx)('br', {}),
                    (0, r.jsx)('br', {}),
                  ],
                }),
                '\n',
              ],
            }),
          ],
        });
      }
      function c(e = {}) {
        const {wrapper: t} = {...(0, n.R)(), ...e.components};
        return t
          ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(u, {...e})})
          : u(e);
      }
    },
    3023: (e, t, s) => {
      s.d(t, {R: () => i, x: () => a});
      var r = s(3696);
      const n = {},
        o = r.createContext(n);
      function i(e) {
        const t = r.useContext(o);
        return r.useMemo(
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
            : i(e.components)),
          r.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

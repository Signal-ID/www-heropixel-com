/*! For license information please see 50ae88c6.7751b625.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [8333],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        i =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          s = {},
          l = null,
          d = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          a.call(t, n) && !c.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: s,
          _owner: i.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    4155: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => l,
        });
      var n = r(2540),
        o = r(3023);
      const s = {
          id: 'start-get-your-leads',
          title: 'Get Your Leads',
          description: 'desc',
        },
        a = void 0,
        i = {
          id: 'start-get-your-leads',
          title: 'Get Your Leads',
          description: 'desc',
          source: '@site/../docs/start-get-your-leads.md',
          sourceDirName: '.',
          slug: '/start-get-your-leads',
          permalink: '/docs/next/start-get-your-leads',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'start-get-your-leads',
            title: 'Get Your Leads',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Pixel Installation',
            permalink: '/docs/next/start-pixel-installation',
          },
          next: {title: 'Pageview', permalink: '/docs/next/event-pageview'},
        },
        c = {},
        l = [];
      function d(e) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => a, x: () => i});
      var n = r(3696);
      const o = {},
        s = n.createContext(o);
      function a(e) {
        const t = n.useContext(s);
        return n.useMemo(
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
              ? e.components(o)
              : e.components || o
            : a(e.components)),
          n.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
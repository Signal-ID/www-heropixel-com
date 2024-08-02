/*! For license information please see 32aaaf70.5b29ffca.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [9786],
  {
    2192: (t, e, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        i =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        d = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(t, e, r) {
        var o,
          s = {},
          c = null,
          u = null;
        for (o in (void 0 !== r && (c = '' + r),
        void 0 !== e.key && (c = '' + e.key),
        void 0 !== e.ref && (u = e.ref),
        e))
          a.call(e, o) && !d.hasOwnProperty(o) && (s[o] = e[o]);
        if (t && t.defaultProps)
          for (o in (e = t.defaultProps)) void 0 === s[o] && (s[o] = e[o]);
        return {
          $$typeof: n,
          type: t,
          key: c,
          ref: u,
          props: s,
          _owner: i.current,
        };
      }
      (e.Fragment = s), (e.jsx = c), (e.jsxs = c);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    7808: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => d,
          contentTitle: () => a,
          default: () => l,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => c,
        });
      var o = r(2540),
        n = r(3023);
      const s = {
          id: 'intro-to-dashboard',
          title: 'Dashboards & Reports',
          description: 'desc',
        },
        a = void 0,
        i = {
          id: 'intro-to-dashboard',
          title: 'Dashboards & Reports',
          description: 'desc',
          source: '@site/../docs/intro-to-dashboard.md',
          sourceDirName: '.',
          slug: '/intro-to-dashboard',
          permalink: '/docs/next/intro-to-dashboard',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'intro-to-dashboard',
            title: 'Dashboards & Reports',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {title: 'Leads', permalink: '/docs/next/intro-to-leads'},
          next: {
            title: 'Start by Registering',
            permalink: '/docs/next/start-registration',
          },
        },
        d = {},
        c = [];
      function u(t) {
        return (0, o.jsx)(o.Fragment, {});
      }
      function l(t = {}) {
        const {wrapper: e} = {...(0, n.R)(), ...t.components};
        return e ? (0, o.jsx)(e, {...t, children: (0, o.jsx)(u, {...t})}) : u();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => a, x: () => i});
      var o = r(3696);
      const n = {},
        s = o.createContext(n);
      function a(t) {
        const e = o.useContext(s);
        return o.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function i(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(n)
              : t.components || n
            : a(t.components)),
          o.createElement(s.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

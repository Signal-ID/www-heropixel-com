/*! For license information please see e5822b3c.5fb66ee5.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [105],
  {
    2192: (t, e, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        c =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function u(t, e, r) {
        var n,
          s = {},
          u = null,
          d = null;
        for (n in (void 0 !== r && (u = '' + r),
        void 0 !== e.key && (u = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          i.call(e, n) && !a.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
        return {
          $$typeof: o,
          type: t,
          key: u,
          ref: d,
          props: s,
          _owner: c.current,
        };
      }
      (e.Fragment = s), (e.jsx = u), (e.jsxs = u);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    6453: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => f,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => u,
        });
      var n = r(2540),
        o = r(3023);
      const s = {
          id: 'intro-to-rest',
          title: 'Introduction',
          description: 'desc',
        },
        i = void 0,
        c = {
          id: 'intro-to-rest',
          title: 'Introduction',
          description: 'desc',
          source: '@site/../docs/intro-to-rest.md',
          sourceDirName: '.',
          slug: '/intro-to-rest',
          permalink: '/docs/next/intro-to-rest',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-rest',
            title: 'Introduction',
            description: 'desc',
          },
          sidebar: 'rest',
        },
        a = {},
        u = [];
      function d(t) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function f(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, n.jsx)(e, {...t, children: (0, n.jsx)(d, {...t})}) : d();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => i, x: () => c});
      var n = r(3696);
      const o = {},
        s = n.createContext(o);
      function i(t) {
        const e = n.useContext(s);
        return n.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function c(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(o)
              : t.components || o
            : i(t.components)),
          n.createElement(s.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);
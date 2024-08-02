/*! For license information please see 086193cc.f130b70b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5178],
  {
    2192: (t, e, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        c =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function u(t, e, r) {
        var n,
          i = {},
          u = null,
          l = null;
        for (n in (void 0 !== r && (u = '' + r),
        void 0 !== e.key && (u = '' + e.key),
        void 0 !== e.ref && (l = e.ref),
        e))
          s.call(e, n) && !a.hasOwnProperty(n) && (i[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === i[n] && (i[n] = e[n]);
        return {
          $$typeof: o,
          type: t,
          key: u,
          ref: l,
          props: i,
          _owner: c.current,
        };
      }
      (e.Fragment = i), (e.jsx = u), (e.jsxs = u);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    9210: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => a,
          contentTitle: () => s,
          default: () => d,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => u,
        });
      var n = r(2540),
        o = r(3023);
      const i = {
          id: 'intro-to-graphql',
          title: 'Introduction',
          description: 'desc',
        },
        s = void 0,
        c = {
          id: 'intro-to-graphql',
          title: 'Introduction',
          description: 'desc',
          source: '@site/../docs/intro-to-graphql.md',
          sourceDirName: '.',
          slug: '/intro-to-graphql',
          permalink: '/docs/next/intro-to-graphql',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-graphql',
            title: 'Introduction',
            description: 'desc',
          },
          sidebar: 'graphql',
        },
        a = {},
        u = [];
      function l(t) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function d(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, n.jsx)(e, {...t, children: (0, n.jsx)(l, {...t})}) : l();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => s, x: () => c});
      var n = r(3696);
      const o = {},
        i = n.createContext(o);
      function s(t) {
        const e = n.useContext(i);
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
            : s(t.components)),
          n.createElement(i.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

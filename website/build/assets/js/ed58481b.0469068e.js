/*! For license information please see ed58481b.0469068e.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2150],
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
      function d(t, e, r) {
        var n,
          s = {},
          d = null,
          u = null;
        for (n in (void 0 !== r && (d = '' + r),
        void 0 !== e.key && (d = '' + e.key),
        void 0 !== e.ref && (u = e.ref),
        e))
          i.call(e, n) && !a.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
        return {
          $$typeof: o,
          type: t,
          key: d,
          ref: u,
          props: s,
          _owner: c.current,
        };
      }
      (e.Fragment = s), (e.jsx = d), (e.jsxs = d);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    1380: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => f,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => d,
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
          source: '@site/versioned_docs/version-0.0.1/intro-to-rest.md',
          sourceDirName: '.',
          slug: '/intro-to-rest',
          permalink: '/docs/intro-to-rest',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'intro-to-rest',
            title: 'Introduction',
            description: 'desc',
          },
          sidebar: 'rest',
        },
        a = {},
        d = [];
      function u(t) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function f(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, n.jsx)(e, {...t, children: (0, n.jsx)(u, {...t})}) : u();
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
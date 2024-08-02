/*! For license information please see a19de0f8.0a5abf6e.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [1587],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        c =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var r,
          s = {},
          l = null,
          u = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          a.call(t, r) && !i.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: u,
          props: s,
          _owner: c.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    6287: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => i,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => l,
        });
      var r = n(2540),
        o = n(3023);
      const s = {id: 'blank', title: 'Example', description: 'desc'},
        a = void 0,
        c = {
          id: 'blank',
          title: 'Example',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/blank.md',
          sourceDirName: '.',
          slug: '/blank',
          permalink: '/docs/blank',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {id: 'blank', title: 'Example', description: 'desc'},
        },
        i = {},
        l = [];
      function u(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function d(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(u, {...e})}) : u();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => a, x: () => c});
      var r = n(3696);
      const o = {},
        s = r.createContext(o);
      function a(e) {
        const t = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : a(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

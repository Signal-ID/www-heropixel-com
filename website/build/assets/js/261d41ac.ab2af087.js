/*! For license information please see 261d41ac.ab2af087.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2669],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        i =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function u(e, t, n) {
        var r,
          s = {},
          u = null,
          l = null;
        for (r in (void 0 !== n && (u = '' + n),
        void 0 !== t.key && (u = '' + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          c.call(t, r) && !a.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: l,
          props: s,
          _owner: i.current,
        };
      }
      (t.Fragment = s), (t.jsx = u), (t.jsxs = u);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    8071: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => d,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => u,
        });
      var r = n(2540),
        o = n(3023);
      const s = {id: 'events', title: 'Pixel Events', description: 'desc'},
        c = void 0,
        i = {
          id: 'events',
          title: 'Pixel Events',
          description: 'desc',
          source: '@site/../docs/events.md',
          sourceDirName: '.',
          slug: '/events',
          permalink: '/docs/next/events',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'events',
            title: 'Pixel Events',
            description: 'desc',
          },
        },
        a = {},
        u = [];
      function l(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function d(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(l, {...e})}) : l();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => c, x: () => i});
      var r = n(3696);
      const o = {},
        s = r.createContext(o);
      function c(e) {
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
              ? e.components(o)
              : e.components || o
            : c(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);
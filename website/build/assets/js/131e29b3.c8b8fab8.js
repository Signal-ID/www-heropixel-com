/*! For license information please see 131e29b3.c8b8fab8.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [623],
  {
    2192: (t, e, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        i =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(t, e, n) {
        var r,
          s = {},
          c = null,
          p = null;
        for (r in (void 0 !== n && (c = '' + n),
        void 0 !== e.key && (c = '' + e.key),
        void 0 !== e.ref && (p = e.ref),
        e))
          a.call(e, r) && !l.hasOwnProperty(r) && (s[r] = e[r]);
        if (t && t.defaultProps)
          for (r in (e = t.defaultProps)) void 0 === s[r] && (s[r] = e[r]);
        return {
          $$typeof: o,
          type: t,
          key: c,
          ref: p,
          props: s,
          _owner: i.current,
        };
      }
      (e.Fragment = s), (e.jsx = c), (e.jsxs = c);
    },
    2540: (t, e, n) => {
      t.exports = n(2192);
    },
    7126: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => l,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => c,
        });
      var r = n(2540),
        o = n(3023);
      const s = {
          id: 'start-pixel-installation',
          title: 'Pixel Installation',
          description: 'desc',
        },
        a = void 0,
        i = {
          id: 'start-pixel-installation',
          title: 'Pixel Installation',
          description: 'desc',
          source: '@site/../docs/start-pixel-installation.md',
          sourceDirName: '.',
          slug: '/start-pixel-installation',
          permalink: '/docs/next/start-pixel-installation',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'start-pixel-installation',
            title: 'Pixel Installation',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Create a New Pixel',
            permalink: '/docs/next/start-create-a-pixel',
          },
          next: {
            title: 'Get Your Leads',
            permalink: '/docs/next/start-get-your-leads',
          },
        },
        l = {},
        c = [];
      function p(t) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function d(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, r.jsx)(e, {...t, children: (0, r.jsx)(p, {...t})}) : p();
      }
    },
    3023: (t, e, n) => {
      n.d(e, {R: () => a, x: () => i});
      var r = n(3696);
      const o = {},
        s = r.createContext(o);
      function a(t) {
        const e = r.useContext(s);
        return r.useMemo(
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
              ? t.components(o)
              : t.components || o
            : a(t.components)),
          r.createElement(s.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);
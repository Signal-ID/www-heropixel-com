/*! For license information please see 14d8f0bf.4bfe7c84.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [374],
  {
    2192: (t, e, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function u(t, e, n) {
        var r,
          i = {},
          u = null,
          d = null;
        for (r in (void 0 !== n && (u = '' + n),
        void 0 !== e.key && (u = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          s.call(e, r) && !c.hasOwnProperty(r) && (i[r] = e[r]);
        if (t && t.defaultProps)
          for (r in (e = t.defaultProps)) void 0 === i[r] && (i[r] = e[r]);
        return {
          $$typeof: o,
          type: t,
          key: u,
          ref: d,
          props: i,
          _owner: a.current,
        };
      }
      (e.Fragment = i), (e.jsx = u), (e.jsxs = u);
    },
    2540: (t, e, n) => {
      t.exports = n(2192);
    },
    20: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => s,
          default: () => l,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => u,
        });
      var r = n(2540),
        o = n(3023);
      const i = {
          id: 'intro-to-integrations',
          title: 'Introduction',
          description: 'desc',
        },
        s = void 0,
        a = {
          id: 'intro-to-integrations',
          title: 'Introduction',
          description: 'desc',
          source: '@site/../docs/intro-to-integrations.md',
          sourceDirName: '.',
          slug: '/intro-to-integrations',
          permalink: '/docs/next/intro-to-integrations',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-integrations',
            title: 'Introduction',
            description: 'desc',
          },
          sidebar: 'integrations',
          next: {title: 'Example', permalink: '/docs/next/blank'},
        },
        c = {},
        u = [];
      function d(t) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function l(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, r.jsx)(e, {...t, children: (0, r.jsx)(d, {...t})}) : d();
      }
    },
    3023: (t, e, n) => {
      n.d(e, {R: () => s, x: () => a});
      var r = n(3696);
      const o = {},
        i = r.createContext(o);
      function s(t) {
        const e = r.useContext(i);
        return r.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function a(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(o)
              : t.components || o
            : s(t.components)),
          r.createElement(i.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);
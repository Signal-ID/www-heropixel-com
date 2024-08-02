/*! For license information please see bc27fdad.117c7d7b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4438],
  {
    2192: (e, t, n) => {
      var o = n(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        s =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var o,
          i = {},
          l = null,
          d = null;
        for (o in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          c.call(t, o) && !a.hasOwnProperty(o) && (i[o] = t[o]);
        if (e && e.defaultProps)
          for (o in (t = e.defaultProps)) void 0 === i[o] && (i[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: d,
          props: i,
          _owner: s.current,
        };
      }
      (t.Fragment = i), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    252: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => l,
        });
      var o = n(2540),
        r = n(3023);
      const i = {
          id: 'intro-to-pixel-tech',
          title: 'Pixel Technology',
          description: 'desc',
        },
        c = void 0,
        s = {
          id: 'intro-to-pixel-tech',
          title: 'Pixel Technology',
          description: 'desc',
          source: '@site/../docs/intro-to-pixel-tech.md',
          sourceDirName: '.',
          slug: '/intro-to-pixel-tech',
          permalink: '/docs/next/intro-to-pixel-tech',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'intro-to-pixel-tech',
            title: 'Pixel Technology',
            description: 'desc',
          },
          sidebar: 'docs',
          next: {title: 'Leads', permalink: '/docs/next/intro-to-leads'},
        },
        a = {},
        l = [];
      function d(e) {
        return (0, o.jsx)(o.Fragment, {});
      }
      function p(e = {}) {
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t ? (0, o.jsx)(t, {...e, children: (0, o.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => c, x: () => s});
      var o = n(3696);
      const r = {},
        i = o.createContext(r);
      function c(e) {
        const t = o.useContext(i);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function s(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : c(e.components)),
          o.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

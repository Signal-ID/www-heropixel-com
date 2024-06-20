/*! For license information please see bc27fdad.0439f402.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [4438],
  {
    2192: (e, t, o) => {
      var n = o(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        c = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, o) {
        var n,
          i = {},
          l = null,
          d = null;
        for (n in (void 0 !== o && (l = '' + o),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          c.call(t, n) && !a.hasOwnProperty(n) && (i[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
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
    2540: (e, t, o) => {
      e.exports = o(2192);
    },
    252: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => a,
          contentTitle: () => c,
          default: () => p,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => l,
        });
      var n = o(2540),
        r = o(3023);
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
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/intro-to-pixel-tech.md',
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
        return (0, n.jsx)(n.Fragment, {});
      }
      function p(e = {}) {
        const {wrapper: t} = {...(0, r.R)(), ...e.components};
        return t ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, t, o) => {
      o.d(t, {R: () => c, x: () => s});
      var n = o(3696);
      const r = {},
        i = n.createContext(r);
      function c(e) {
        const t = n.useContext(i);
        return n.useMemo(
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
          n.createElement(i.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

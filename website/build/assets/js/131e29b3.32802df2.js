/*! For license information please see 131e29b3.32802df2.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [623],
  {
    2192: (t, e, n) => {
      var r = n(3696),
        i = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        s =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(t, e, n) {
        var r,
          o = {},
          c = null,
          d = null;
        for (r in (void 0 !== n && (c = '' + n),
        void 0 !== e.key && (c = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          a.call(e, r) && !l.hasOwnProperty(r) && (o[r] = e[r]);
        if (t && t.defaultProps)
          for (r in (e = t.defaultProps)) void 0 === o[r] && (o[r] = e[r]);
        return {
          $$typeof: i,
          type: t,
          key: c,
          ref: d,
          props: o,
          _owner: s.current,
        };
      }
      (e.Fragment = o), (e.jsx = c), (e.jsxs = c);
    },
    2540: (t, e, n) => {
      t.exports = n(2192);
    },
    7126: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => l,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => c,
        });
      var r = n(2540),
        i = n(3023);
      const o = {
          id: 'start-pixel-installation',
          title: 'Pixel Installation',
          description: 'desc',
        },
        a = void 0,
        s = {
          id: 'start-pixel-installation',
          title: 'Pixel Installation',
          description: 'desc',
          source: '@site/../docs/start-pixel-installation.md',
          sourceDirName: '.',
          slug: '/start-pixel-installation',
          permalink: '/docs/next/start-pixel-installation',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/start-pixel-installation.md',
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
      function d(t) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function p(t = {}) {
        const {wrapper: e} = {...(0, i.R)(), ...t.components};
        return e ? (0, r.jsx)(e, {...t, children: (0, r.jsx)(d, {...t})}) : d();
      }
    },
    3023: (t, e, n) => {
      n.d(e, {R: () => a, x: () => s});
      var r = n(3696);
      const i = {},
        o = r.createContext(i);
      function a(t) {
        const e = r.useContext(o);
        return r.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function s(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(i)
              : t.components || i
            : a(t.components)),
          r.createElement(o.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

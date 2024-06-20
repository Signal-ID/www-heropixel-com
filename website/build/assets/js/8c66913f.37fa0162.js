/*! For license information please see 8c66913f.37fa0162.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [7905],
  {
    2192: (e, t, r) => {
      var n = r(3696),
        a = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, r) {
        var n,
          o = {},
          l = null,
          p = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (p = t.ref),
        t))
          i.call(t, n) && !c.hasOwnProperty(n) && (o[n] = t[n]);
        if (e && e.defaultProps)
          for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: p,
          props: o,
          _owner: s.current,
        };
      }
      (t.Fragment = o), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, r) => {
      e.exports = r(2192);
    },
    4986: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => o,
          metadata: () => s,
          toc: () => l,
        });
      var n = r(2540),
        a = r(3023);
      const o = {
          id: 'start-create-a-pixel',
          title: 'Create a New Pixel',
          description: 'desc',
        },
        i = void 0,
        s = {
          id: 'start-create-a-pixel',
          title: 'Create a New Pixel',
          description: 'desc',
          source: '@site/../docs/start-create-a-pixel.md',
          sourceDirName: '.',
          slug: '/start-create-a-pixel',
          permalink: '/docs/next/start-create-a-pixel',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/start-create-a-pixel.md',
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'start-create-a-pixel',
            title: 'Create a New Pixel',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Start by Registering',
            permalink: '/docs/next/start-registration',
          },
          next: {
            title: 'Pixel Installation',
            permalink: '/docs/next/start-pixel-installation',
          },
        },
        c = {},
        l = [];
      function p(e) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function d(e = {}) {
        const {wrapper: t} = {...(0, a.R)(), ...e.components};
        return t ? (0, n.jsx)(t, {...e, children: (0, n.jsx)(p, {...e})}) : p();
      }
    },
    3023: (e, t, r) => {
      r.d(t, {R: () => i, x: () => s});
      var n = r(3696);
      const a = {},
        o = n.createContext(a);
      function i(e) {
        const t = n.useContext(o);
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
              ? e.components(a)
              : e.components || a
            : i(e.components)),
          n.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

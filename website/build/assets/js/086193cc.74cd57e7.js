/*! For license information please see 086193cc.74cd57e7.js.LICENSE.txt */
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
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(t, e, r) {
        var n,
          i = {},
          l = null,
          d = null;
        for (n in (void 0 !== r && (l = '' + r),
        void 0 !== e.key && (l = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          s.call(e, n) && !c.hasOwnProperty(n) && (i[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === i[n] && (i[n] = e[n]);
        return {
          $$typeof: o,
          type: t,
          key: l,
          ref: d,
          props: i,
          _owner: a.current,
        };
      }
      (e.Fragment = i), (e.jsx = l), (e.jsxs = l);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    9210: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => c,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => l,
        });
      var n = r(2540),
        o = r(3023);
      const i = {
          id: 'intro-to-graphql',
          title: 'Introduction',
          description: 'desc',
        },
        s = void 0,
        a = {
          id: 'intro-to-graphql',
          title: 'Introduction',
          description: 'desc',
          source: '@site/../docs/intro-to-graphql.md',
          sourceDirName: '.',
          slug: '/intro-to-graphql',
          permalink: '/docs/next/intro-to-graphql',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/intro-to-graphql.md',
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
        c = {},
        l = [];
      function d(t) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function u(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, n.jsx)(e, {...t, children: (0, n.jsx)(d, {...t})}) : d();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => s, x: () => a});
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
      function a(t) {
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

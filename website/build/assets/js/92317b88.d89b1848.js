/*! For license information please see 92317b88.d89b1848.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5393],
  {
    2192: (t, e, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(t, e, r) {
        var o,
          i = {},
          l = null,
          d = null;
        for (o in (void 0 !== r && (l = '' + r),
        void 0 !== e.key && (l = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          s.call(e, o) && !c.hasOwnProperty(o) && (i[o] = e[o]);
        if (t && t.defaultProps)
          for (o in (e = t.defaultProps)) void 0 === i[o] && (i[o] = e[o]);
        return {
          $$typeof: n,
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
    6321: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => c,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => l,
        });
      var o = r(2540),
        n = r(3023);
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
          source: '@site/versioned_docs/version-0.0.1/intro-to-graphql.md',
          sourceDirName: '.',
          slug: '/intro-to-graphql',
          permalink: '/docs/intro-to-graphql',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/intro-to-graphql.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718748706e3,
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
        return (0, o.jsx)(o.Fragment, {});
      }
      function p(t = {}) {
        const {wrapper: e} = {...(0, n.R)(), ...t.components};
        return e ? (0, o.jsx)(e, {...t, children: (0, o.jsx)(d, {...t})}) : d();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => s, x: () => a});
      var o = r(3696);
      const n = {},
        i = o.createContext(n);
      function s(t) {
        const e = o.useContext(i);
        return o.useMemo(
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
              ? t.components(n)
              : t.components || n
            : s(t.components)),
          o.createElement(i.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

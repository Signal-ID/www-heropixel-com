/*! For license information please see 14d8f0bf.c388df45.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [374],
  {
    2192: (t, e, n) => {
      var o = n(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        s = Object.prototype.hasOwnProperty,
        a =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(t, e, n) {
        var o,
          i = {},
          d = null,
          u = null;
        for (o in (void 0 !== n && (d = '' + n),
        void 0 !== e.key && (d = '' + e.key),
        void 0 !== e.ref && (u = e.ref),
        e))
          s.call(e, o) && !c.hasOwnProperty(o) && (i[o] = e[o]);
        if (t && t.defaultProps)
          for (o in (e = t.defaultProps)) void 0 === i[o] && (i[o] = e[o]);
        return {
          $$typeof: r,
          type: t,
          key: d,
          ref: u,
          props: i,
          _owner: a.current,
        };
      }
      (e.Fragment = i), (e.jsx = d), (e.jsxs = d);
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
          toc: () => d,
        });
      var o = n(2540),
        r = n(3023);
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
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/intro-to-integrations.md',
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
        d = [];
      function u(t) {
        return (0, o.jsx)(o.Fragment, {});
      }
      function l(t = {}) {
        const {wrapper: e} = {...(0, r.R)(), ...t.components};
        return e ? (0, o.jsx)(e, {...t, children: (0, o.jsx)(u, {...t})}) : u();
      }
    },
    3023: (t, e, n) => {
      n.d(e, {R: () => s, x: () => a});
      var o = n(3696);
      const r = {},
        i = o.createContext(r);
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
              ? t.components(r)
              : t.components || r
            : s(t.components)),
          o.createElement(i.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

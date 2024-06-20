/*! For license information please see 7c447515.507b0e70.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5599],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var r,
          s = {},
          l = null,
          d = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          i.call(t, r) && !c.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: s,
          _owner: a.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9154: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => l,
        });
      var r = n(2540),
        o = n(3023);
      const s = {id: 'blank', title: 'Example', description: 'desc'},
        i = void 0,
        a = {
          id: 'blank',
          title: 'Example',
          description: 'desc',
          source: '@site/../docs/blank.md',
          sourceDirName: '.',
          slug: '/blank',
          permalink: '/docs/next/blank',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/blank.md',
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {id: 'blank', title: 'Example', description: 'desc'},
          sidebar: 'integrations',
          previous: {
            title: 'Introduction',
            permalink: '/docs/next/intro-to-integrations',
          },
        },
        c = {},
        l = [];
      function d(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function u(e = {}) {
        const {wrapper: t} = {...(0, o.R)(), ...e.components};
        return t ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => a});
      var r = n(3696);
      const o = {},
        s = r.createContext(o);
      function i(e) {
        const t = r.useContext(s);
        return r.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : {...t, ...e};
          },
          [t, e]
        );
      }
      function a(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(o)
              : e.components || o
            : i(e.components)),
          r.createElement(s.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

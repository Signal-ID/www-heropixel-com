/*! For license information please see ed58481b.9f56296b.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2150],
  {
    2192: (t, e, r) => {
      var o = r(3696),
        n = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        c =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(t, e, r) {
        var o,
          s = {},
          d = null,
          u = null;
        for (o in (void 0 !== r && (d = '' + r),
        void 0 !== e.key && (d = '' + e.key),
        void 0 !== e.ref && (u = e.ref),
        e))
          i.call(e, o) && !a.hasOwnProperty(o) && (s[o] = e[o]);
        if (t && t.defaultProps)
          for (o in (e = t.defaultProps)) void 0 === s[o] && (s[o] = e[o]);
        return {
          $$typeof: n,
          type: t,
          key: d,
          ref: u,
          props: s,
          _owner: c.current,
        };
      }
      (e.Fragment = s), (e.jsx = d), (e.jsxs = d);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    1380: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => a,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => d,
        });
      var o = r(2540),
        n = r(3023);
      const s = {
          id: 'intro-to-rest',
          title: 'Introduction',
          description: 'desc',
        },
        i = void 0,
        c = {
          id: 'intro-to-rest',
          title: 'Introduction',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/intro-to-rest.md',
          sourceDirName: '.',
          slug: '/intro-to-rest',
          permalink: '/docs/intro-to-rest',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/intro-to-rest.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'intro-to-rest',
            title: 'Introduction',
            description: 'desc',
          },
          sidebar: 'rest',
        },
        a = {},
        d = [];
      function u(t) {
        return (0, o.jsx)(o.Fragment, {});
      }
      function l(t = {}) {
        const {wrapper: e} = {...(0, n.R)(), ...t.components};
        return e ? (0, o.jsx)(e, {...t, children: (0, o.jsx)(u, {...t})}) : u();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => i, x: () => c});
      var o = r(3696);
      const n = {},
        s = o.createContext(n);
      function i(t) {
        const e = o.useContext(s);
        return o.useMemo(
          function () {
            return 'function' == typeof t ? t(e) : {...e, ...t};
          },
          [e, t]
        );
      }
      function c(t) {
        let e;
        return (
          (e = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(n)
              : t.components || n
            : i(t.components)),
          o.createElement(s.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

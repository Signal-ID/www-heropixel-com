/*! For license information please see e13aac12.a4fcb70e.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [2904],
  {
    2192: (t, e, r) => {
      var n = r(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(t, e, r) {
        var n,
          s = {},
          d = null,
          l = null;
        for (n in (void 0 !== r && (d = '' + r),
        void 0 !== e.key && (d = '' + e.key),
        void 0 !== e.ref && (l = e.ref),
        e))
          i.call(e, n) && !c.hasOwnProperty(n) && (s[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === s[n] && (s[n] = e[n]);
        return {
          $$typeof: o,
          type: t,
          key: d,
          ref: l,
          props: s,
          _owner: a.current,
        };
      }
      (e.Fragment = s), (e.jsx = d), (e.jsxs = d);
    },
    2540: (t, e, r) => {
      t.exports = r(2192);
    },
    420: (t, e, r) => {
      r.r(e),
        r.d(e, {
          assets: () => c,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => s,
          metadata: () => a,
          toc: () => d,
        });
      var n = r(2540),
        o = r(3023);
      const s = {
          id: 'start-registration',
          title: 'Start by Registering',
          description: 'desc',
        },
        i = void 0,
        a = {
          id: 'start-registration',
          title: 'Start by Registering',
          description: 'desc',
          source: '@site/../docs/start-registration.md',
          sourceDirName: '.',
          slug: '/start-registration',
          permalink: '/docs/next/start-registration',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/start-registration.md',
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'start-registration',
            title: 'Start by Registering',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {
            title: 'Dashboards & Reports',
            permalink: '/docs/next/intro-to-dashboard',
          },
          next: {
            title: 'Create a New Pixel',
            permalink: '/docs/next/start-create-a-pixel',
          },
        },
        c = {},
        d = [];
      function l(t) {
        return (0, n.jsx)(n.Fragment, {});
      }
      function u(t = {}) {
        const {wrapper: e} = {...(0, o.R)(), ...t.components};
        return e ? (0, n.jsx)(e, {...t, children: (0, n.jsx)(l, {...t})}) : l();
      }
    },
    3023: (t, e, r) => {
      r.d(e, {R: () => i, x: () => a});
      var n = r(3696);
      const o = {},
        s = n.createContext(o);
      function i(t) {
        const e = n.useContext(s);
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
            : i(t.components)),
          n.createElement(s.Provider, {value: e}, t.children)
        );
      }
    },
  },
]);

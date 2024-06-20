/*! For license information please see 54e04490.0c1cd9e7.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [5464],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        a =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        c = {key: !0, ref: !0, __self: !0, __source: !0};
      function p(e, t, n) {
        var r,
          o = {},
          p = null,
          u = null;
        for (r in (void 0 !== n && (p = '' + n),
        void 0 !== t.key && (p = '' + t.key),
        void 0 !== t.ref && (u = t.ref),
        t))
          i.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: s,
          type: e,
          key: p,
          ref: u,
          props: o,
          _owner: a.current,
        };
      }
      (t.Fragment = o), (t.jsx = p), (t.jsxs = p);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9526: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => o,
          metadata: () => a,
          toc: () => p,
        });
      var r = n(2540),
        s = n(3023);
      const o = {
          id: 'intro-to-suppressing',
          title: 'What are Supression Lists?',
          description: 'desc',
        },
        i = void 0,
        a = {
          id: 'intro-to-suppressing',
          title: 'What are Supression Lists?',
          description: 'desc',
          source: '@site/../docs/intro-to-suppressing.md',
          sourceDirName: '.',
          slug: '/intro-to-suppressing',
          permalink: '/docs/next/intro-to-suppressing',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/facebook/react-native-website/blob/main/website/../docs/intro-to-suppressing.md',
          tags: [],
          version: 'current',
          lastUpdatedAt: 1718828485e3,
          frontMatter: {
            id: 'intro-to-suppressing',
            title: 'What are Supression Lists?',
            description: 'desc',
          },
          sidebar: 'docs',
          previous: {title: 'Pageview', permalink: '/docs/next/event-pageview'},
          next: {title: 'Example', permalink: '/docs/next/blank'},
        },
        c = {},
        p = [];
      function u(e) {
        return (0, r.jsx)(r.Fragment, {});
      }
      function d(e = {}) {
        const {wrapper: t} = {...(0, s.R)(), ...e.components};
        return t ? (0, r.jsx)(t, {...e, children: (0, r.jsx)(u, {...e})}) : u();
      }
    },
    3023: (e, t, n) => {
      n.d(t, {R: () => i, x: () => a});
      var r = n(3696);
      const s = {},
        o = r.createContext(s);
      function i(e) {
        const t = r.useContext(o);
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
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          r.createElement(o.Provider, {value: t}, e.children)
        );
      }
    },
  },
]);

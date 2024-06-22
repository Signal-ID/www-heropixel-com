/*! For license information please see bf2aa723.4bc01e43.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6833],
  {
    2192: (e, t, n) => {
      var r = n(3696),
        o = Symbol.for('react.element'),
        s = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        c =
          r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = {key: !0, ref: !0, __self: !0, __source: !0};
      function l(e, t, n) {
        var r,
          s = {},
          l = null,
          d = null;
        for (r in (void 0 !== n && (l = '' + n),
        void 0 !== t.key && (l = '' + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          i.call(t, r) && !a.hasOwnProperty(r) && (s[r] = t[r]);
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === s[r] && (s[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: d,
          props: s,
          _owner: c.current,
        };
      }
      (t.Fragment = s), (t.jsx = l), (t.jsxs = l);
    },
    2540: (e, t, n) => {
      e.exports = n(2192);
    },
    9808: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => s,
          metadata: () => c,
          toc: () => l,
        });
      var r = n(2540),
        o = n(3023);
      const s = {id: 'events', title: 'Pixel Events', description: 'desc'},
        i = void 0,
        c = {
          id: 'events',
          title: 'Pixel Events',
          description: 'desc',
          source: '@site/versioned_docs/version-0.0.1/events.md',
          sourceDirName: '.',
          slug: '/events',
          permalink: '/docs/events',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/Signal-ID/www-heropixel-com/blob/main/website/../docs/events.md',
          tags: [],
          version: '0.0.1',
          lastUpdatedAt: 1718748706e3,
          frontMatter: {
            id: 'events',
            title: 'Pixel Events',
            description: 'desc',
          },
        },
        a = {},
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
      n.d(t, {R: () => i, x: () => c});
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
      function c(e) {
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

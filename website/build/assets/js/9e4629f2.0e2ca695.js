/*! For license information please see 9e4629f2.0e2ca695.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6168],
  {
    2192: (e, n, t) => {
      var o = t(3696),
        r = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        s =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function d(e, n, t) {
        var o,
          a = {},
          d = null,
          c = null;
        for (o in (void 0 !== t && (d = '' + t),
        void 0 !== n.key && (d = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          i.call(n, o) && !l.hasOwnProperty(o) && (a[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === a[o] && (a[o] = n[o]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: c,
          props: a,
          _owner: s.current,
        };
      }
      (n.Fragment = a), (n.jsx = d), (n.jsxs = d);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    4457: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => d,
        });
      var o = t(2540),
        r = t(3023);
      const a = {
          id: 'personalized-landing-pages',
          title: 'Personalize Your Landing Pages',
          description: 'Introduction to Personalizing Your Landing Pages',
        },
        i = void 0,
        s = {
          id: 'personalization/personalized-landing-pages',
          title: 'Personalize Your Landing Pages',
          description: 'Introduction to Personalizing Your Landing Pages',
          source: '@site/../docs/personalization/intro.md',
          sourceDirName: 'personalization',
          slug: '/personalization/personalized-landing-pages',
          permalink: '/docs/next/personalization/personalized-landing-pages',
          draft: !1,
          unlisted: !1,
          tags: [],
          version: 'current',
          lastUpdatedAt: 1723080994e3,
          frontMatter: {
            id: 'personalized-landing-pages',
            title: 'Personalize Your Landing Pages',
            description: 'Introduction to Personalizing Your Landing Pages',
          },
        },
        l = {},
        d = [];
      function c(e) {
        return (0, o.jsx)(o.Fragment, {});
      }
      function p(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n ? (0, o.jsx)(n, {...e, children: (0, o.jsx)(c, {...e})}) : c();
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => i, x: () => s});
      var o = t(3696);
      const r = {},
        a = o.createContext(r);
      function i(e) {
        const n = o.useContext(a);
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : {...n, ...e};
          },
          [n, e]
        );
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          o.createElement(a.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
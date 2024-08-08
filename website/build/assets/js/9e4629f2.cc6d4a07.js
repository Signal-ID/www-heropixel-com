/*! For license information please see 9e4629f2.cc6d4a07.js.LICENSE.txt */
'use strict';
(self.webpackChunkreact_native_website =
  self.webpackChunkreact_native_website || []).push([
  [6168],
  {
    2192: (e, n, t) => {
      var o = t(3696),
        r = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        s =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, n, t) {
        var o,
          i = {},
          c = null,
          d = null;
        for (o in (void 0 !== t && (c = '' + t),
        void 0 !== n.key && (c = '' + n.key),
        void 0 !== n.ref && (d = n.ref),
        n))
          a.call(n, o) && !l.hasOwnProperty(o) && (i[o] = n[o]);
        if (e && e.defaultProps)
          for (o in (n = e.defaultProps)) void 0 === i[o] && (i[o] = n[o]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: d,
          props: i,
          _owner: s.current,
        };
      }
      (n.Fragment = i), (n.jsx = c), (n.jsxs = c);
    },
    2540: (e, n, t) => {
      e.exports = t(2192);
    },
    4457: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => l,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => c,
        });
      var o = t(2540),
        r = t(3023);
      const i = {
          id: 'personalized-landing-pages',
          title: 'Personalize Your Landing Pages',
          description: 'Introduction to Personalizing Your Landing Pages',
        },
        a = void 0,
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
          frontMatter: {
            id: 'personalized-landing-pages',
            title: 'Personalize Your Landing Pages',
            description: 'Introduction to Personalizing Your Landing Pages',
          },
        },
        l = {},
        c = [];
      function d(e) {
        return (0, o.jsx)(o.Fragment, {});
      }
      function u(e = {}) {
        const {wrapper: n} = {...(0, r.R)(), ...e.components};
        return n ? (0, o.jsx)(n, {...e, children: (0, o.jsx)(d, {...e})}) : d();
      }
    },
    3023: (e, n, t) => {
      t.d(n, {R: () => a, x: () => s});
      var o = t(3696);
      const r = {},
        i = o.createContext(r);
      function a(e) {
        const n = o.useContext(i);
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
            : a(e.components)),
          o.createElement(i.Provider, {value: n}, e.children)
        );
      }
    },
  },
]);
